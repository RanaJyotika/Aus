import express from 'express';
import { generateBlogImageUploadURL, generateTestimonialUploadURL } from '../controllers/uploadController';

const router = express.Router();

router.get('/upload-url', generateTestimonialUploadURL); // For testimonials
router.get('/upload-blog-image', generateBlogImageUploadURL); // For Blogs


export default router;
