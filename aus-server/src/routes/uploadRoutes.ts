import express from 'express';
import { generateBlogImageUploadURL, generateNewsletterUploadURL, generateTestimonialUploadURL } from '../controllers/uploadController';

const router = express.Router();

router.get('/upload-url', generateTestimonialUploadURL); // For testimonials
router.get('/upload-blog-image', generateBlogImageUploadURL); // For Blogs
router.get('/upload-newsletter', generateNewsletterUploadURL); // For Newsletter


export default router;
