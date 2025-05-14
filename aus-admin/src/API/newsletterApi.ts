// src/API/newsletterApi.ts
import axiosInstance from "./axiosInstance";

export const fetchNewsletters = async () => {
  const res = await axiosInstance.get("/newsletters");
  return res.data;
};

export const uploadNewsletter = async (name: string, file: File) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("pdf", file);
  const res = await axiosInstance.post("/newsletters", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const deleteNewsletter = async (id: string) => {
  const res = await axiosInstance.delete(`/newsletters/${id}`);
  return res.data;
};
