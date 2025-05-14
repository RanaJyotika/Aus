const express = require('express');
import {
  createTestimonial,
  getAllTestimonials,
  deleteTestimonial,
} from '../controllers/testimonialController';
import { requireAuth, requireSuperAdmin } from '../middleware/auth'; // ✅ use newly added middleware

const router = express.Router();

// Any authenticated admin can fetch testimonials
router.get('/', requireAuth, getAllTestimonials);

// Only authenticated admin can add testimonials (or use requireSuperAdmin if needed)
router.post('/', requireAuth, createTestimonial);

// Only authenticated super admin can delete testimonials
router.delete('/:id', requireSuperAdmin, deleteTestimonial);

export default router;
