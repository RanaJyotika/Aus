import { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Select,
  InputLabel,
  FormControl,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { MdDelete } from 'react-icons/md';
import Layout from './Layout';
import { fetchTestimonials, deleteTestimonial } from '../../API/testimonialApi';
import { useUser } from '../../Context/UserContext';

interface Testimonial {
  _id: string;
  name: string;
  message: string;
  photo: string;
  createdAt: string;
}

const Testimonials = () => {
  return <Layout pageContent={<TestimonialsContent />} />;
};

export default Testimonials;

const TestimonialsContent = () => {
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState('newest');
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [selectedTestimonialId, setSelectedTestimonialId] = useState<string | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const { admin, loading } = useUser();
  if (loading) return null; // or loading spinner

  const getTestimonials = async () => {
    try {
      const data = await fetchTestimonials();
      setTestimonials(data);
    } catch (err) {
      console.error('Failed to fetch testimonials:', err);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  const handleSort = (a: Testimonial, b: Testimonial) => {
    switch (sortOption) {
      case 'az':
        return a.name.localeCompare(b.name);
      case 'za':
        return b.name.localeCompare(a.name);
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'oldest':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      default:
        return 0;
    }
  };

  const confirmDelete = (id: string) => {
    setSelectedTestimonialId(id);
    setConfirmOpen(true);
  };

  const handleDeleteConfirmed = async () => {
    if (!selectedTestimonialId) return;
    try {
      await deleteTestimonial(selectedTestimonialId);
      setConfirmOpen(false);
      setSelectedTestimonialId(null);
      getTestimonials();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Failed to delete testimonial.');
      setConfirmOpen(false);
    }
  };

  const filteredTestimonials = testimonials
    .filter((t) => t.name.toLowerCase().includes(search.trim().toLowerCase()))
    .sort(handleSort);

  return (
    <Box p={3}>
      {/* Controls */}
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <TextField
          label="Search by Name"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ minWidth: 220, flex: 1 }}
        />

        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortOption}
            label="Sort By"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <MenuItem value="az">A-Z</MenuItem>
            <MenuItem value="za">Z-A</MenuItem>
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="oldest">Oldest</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          onClick={() => alert('Add testimonial logic here')}
        >
          Add New Testimonial
        </Button>
      </Box>

      {/* Testimonial Cards */}
      <Box display="flex" flexWrap="wrap" gap={3} justifyContent="flex-start">
        {filteredTestimonials.map((testimonial) => (
          <Box
            key={testimonial._id}
            sx={{
              flex: '1 1 calc(33.33% - 24px)',
              minWidth: 280,
              maxWidth: 350,
              position: 'relative',
            }}
          >
            <Card sx={{ height: '100%', position: 'relative' }}>
              <CardMedia
                component="img"
                height="180"
                image={testimonial.photo}
                alt={testimonial.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.message}
                </Typography>
              </CardContent>

              {admin?.superadmin === true && <IconButton
                onClick={() => confirmDelete(testimonial._id)}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                <MdDelete style={{ color: 'white', fontSize: '1.2rem' }} />
              </IconButton>}
            </Card>
          </Box>
        ))}
      </Box>

      {/* Confirm Delete Dialog */}
      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this testimonial?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirmed} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
