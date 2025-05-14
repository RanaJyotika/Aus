import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Chip,
  Card,
  CardContent,
  Typography,
  CardMedia,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { fetchBlogs, createBlog } from "../../API/blogsApi";
import Layout from "./Layout";

interface Blog {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  images: string[];
}

const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};

const Blogs = () => {
  return (
    <Layout pageContent={<BlogsContent />} />
  )
}

export default Blogs

const BlogsContent = () => {
  const [searchTags, setSearchTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newTags, setNewTags] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      const data = await fetchBlogs();
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    }
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      const tag = tagInput.trim().toLowerCase();
      if (!searchTags.includes(tag)) {
        setSearchTags([...searchTags, tag]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setSearchTags(searchTags.filter((tag) => tag !== tagToRemove));
  };

  const handleCreateBlog = async () => {
    if (!newTitle.trim() || !newContent.trim()) {
      alert("Title and Content are required.");
      return;
    }

    try {
      await createBlog({
        title: newTitle,
        content: newContent,
        tags: newTags,
        images, // base64 images
      });
      alert("Blog created successfully!");
      setOpen(false);
      setNewTitle("");
      setNewContent("");
      setNewTags([]);
      setImages([]);
      loadBlogs();
    } catch (err) {
      alert("Failed to create blog");
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const base64Images = await Promise.all(
        files.map(file => convertToBase64(file))
      );
      setImages(base64Images);
    }
  };

  const filteredBlogs = blogs
    .filter((blog) =>
      searchTags.every((tag) => blog.tags.map((t) => t.toLowerCase()).includes(tag))
    )
    .sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOption === "newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <Box p={3}>
      {/* Search and Sort */}
      <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center" gap={2} mb={4}>
        <Box display="flex" flexDirection="column" gap={1} flex={1} minWidth="350px">
          <TextField
            label="Search by Tags"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            fullWidth
          />
          <Box display="flex" flexWrap="wrap" gap={1}>
            {searchTags.map((tag) => (
              <Chip key={tag} label={tag} onDelete={() => removeTag(tag)} />
            ))}
          </Box>
        </Box>

        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortOption}
            label="Sort By"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="oldest">Oldest</MenuItem>
          </Select>
        </FormControl>

        <Box ml="auto">
          <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
            Add New Blog
          </Button>
        </Box>
      </Box>

      {/* Blog Cards */}
      <Box display="flex" flexWrap="wrap" gap={3}>
        {filteredBlogs.map((blog) => (
          <Box
            key={blog._id}
            sx={{ flex: "1 1 calc(50% - 24px)", minWidth: 300, maxWidth: 500, cursor: "pointer" }}
            onClick={() => window.location.href = `/blogs/${blog._id}`}
          >
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={blog.images[0] || "https://via.placeholder.com/400x200?text=No+Image"}
                alt={blog.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>{blog.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>{blog.content}</Typography>
                <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
                  {blog.tags.slice(0, 5).map(tag => <Chip key={tag} label={tag} size="small" />)}
                </Box>
                <Typography variant="caption" display="block" mt={1}>{new Date(blog.createdAt).toDateString()}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      {/* Create Blog Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Add New Blog</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField label="Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <TextField
            label="Content"
            multiline
            minRows={4}
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <TextField
            label="Tags (comma separated)"
            value={newTags.join(", ")}
            onChange={(e) => setNewTags(e.target.value.split(",").map(tag => tag.trim()))}
          />
          <Button variant="outlined" component="label">
            Upload Images
            <input type="file" hidden accept="image/*" multiple onChange={handleImageChange} />
          </Button>

          <Box display="flex" gap={1} flexWrap="wrap">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="preview"
                style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 4 }}
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleCreateBlog}>Create</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
