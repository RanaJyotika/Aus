// ✅ STEP 1: Create a new API utility to upload image to backend (frontend)
// src/API/uploadApi.ts
import axiosInstance from './axiosInstance';

export const uploadTestimonialImage = async (base64Image: string): Promise<string> => {
  const response = await axiosInstance.post('/testimonials/upload-image', { image: base64Image });
  return response.data.url; // returns uploaded image URL
};
