// Updated Newsletter.tsx (Frontend) with DigitalOcean Spaces upload integration
import Layout from "./Layout";

const Newsletter = () => {
    return <Layout pageContent={<NewsletterContent />} />;
};

// NewsletterContent.tsx
import {
    Box,
    TextField,
    Button,
    MenuItem,
    Card,
    CardContent,
    Typography,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    FormControl,
    InputLabel,
    Select,
} from "@mui/material";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlineEye, AiOutlineDownload } from "react-icons/ai";
import {
    fetchNewsletters,
    deleteNewsletter,
    addNewsletter
} from "../../API/newsletterApi";
import { getNewsletterUploadUrl } from "../../API/uploadApi";

interface Newsletter {
    _id: string;
    name: string;
    pdfUrl: string;
    createdAt: string;
}

const NewsletterContent = () => {
    const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("newest");
    const [openDialog, setOpenDialog] = useState(false);
    const [openConfirmId, setOpenConfirmId] = useState<string | null>(null);
    const [newName, setNewName] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const loadNewsletters = async () => {
        try {
            const data = await fetchNewsletters();
            setNewsletters(data);
        } catch {
            alert("Failed to load newsletters");
        }
    };

    useEffect(() => {
        loadNewsletters();
    }, []);

    const handleDelete = async (id: string) => {
        await deleteNewsletter(id);
        loadNewsletters();
        setOpenConfirmId(null);
    };

    const handleUpload = async () => {
        if (!newName || !file) return alert("Please provide name and PDF file.");

        try {
            const { uploadURL, fileUrl } = await getNewsletterUploadUrl(file.name, file.type);

            await fetch(uploadURL, {
                method: 'PUT',
                headers: { 'Content-Type': file.type },
                body: file
            });

            await addNewsletter(newName, fileUrl);
            setOpenDialog(false);
            setNewName("");
            setFile(null);
            loadNewsletters();
        } catch (err) {
            console.error("Newsletter upload failed", err);
            alert("Newsletter upload failed");
        }
    };

    const handleDownload = async (url: string, name: string) => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = downloadUrl;
            a.download = name || "newsletter.pdf";
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(downloadUrl);
        } catch (err) {
            alert("Failed to download PDF");
        }
    };

    const sorted = [...newsletters]
        .filter((n) => n.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            switch (sort) {
                case "az":
                    return a.name.localeCompare(b.name);
                case "za":
                    return b.name.localeCompare(a.name);
                case "newest":
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                case "oldest":
                    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                default:
                    return 0;
            }
        });

    return (
        <Box p={3}>
            {/* Controls */}
            <Box display="flex" flexWrap="wrap" gap={2} alignItems="center" mb={4}>
                <TextField
                    label="Search by Name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{ minWidth: 220, flex: 1 }}
                />
                <FormControl sx={{ minWidth: 160 }}>
                    <InputLabel>Sort By</InputLabel>
                    <Select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <MenuItem value="az">A-Z</MenuItem>
                        <MenuItem value="za">Z-A</MenuItem>
                        <MenuItem value="newest">Newest</MenuItem>
                        <MenuItem value="oldest">Oldest</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" onClick={() => setOpenDialog(true)}>
                    Add New Newsletter
                </Button>
            </Box>

            {/* Newsletter Cards */}
            <Box display="flex" flexDirection="column" gap={2}>
                {sorted.map((n) => (
                    <Card
                        key={n._id}
                        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2 }}
                    >
                        <CardContent sx={{ flex: 1 }}>
                            <Typography>{n.name}</Typography>
                        </CardContent>
                        <Box display="flex" gap={1}>
                            <IconButton onClick={() => window.open(n.pdfUrl, "_blank")}>
                                <AiOutlineEye />
                            </IconButton>
                            <IconButton onClick={() => handleDownload(n.pdfUrl, `${n.name}.pdf`)}>
                                <AiOutlineDownload />
                            </IconButton>
                            <IconButton onClick={() => setOpenConfirmId(n._id)}>
                                <MdDelete style={{ color: "white", backgroundColor: "black", borderRadius: "50%", padding: 6 }} />
                            </IconButton>
                        </Box>
                    </Card>
                ))}
            </Box>

            {/* Upload Dialog */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="sm">
                <DialogTitle>Add New Newsletter</DialogTitle>
                <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
                    <TextField label="Newsletter Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
                    <Button variant="outlined" component="label">
                        Upload PDF
                        <input type="file" accept="application/pdf" hidden onChange={(e) => setFile(e.target.files?.[0] || null)} />
                    </Button>
                    {file && <Typography variant="body2">Selected: {file.name}</Typography>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                    <Button variant="contained" onClick={handleUpload}>Upload</Button>
                </DialogActions>
            </Dialog>

            {/* Confirm Delete Dialog */}
            <Dialog open={Boolean(openConfirmId)} onClose={() => setOpenConfirmId(null)}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to delete this newsletter?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenConfirmId(null)}>Cancel</Button>
                    <Button variant="contained" color="error" onClick={() => handleDelete(openConfirmId!)}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Newsletter;
