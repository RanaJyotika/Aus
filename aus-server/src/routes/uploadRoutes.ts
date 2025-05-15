import express from 'express';
import { generateTestimonialUploadURL } from '../controllers/uploadController';

const router = express.Router();

router.get('/upload-url', generateTestimonialUploadURL);

export default router;
