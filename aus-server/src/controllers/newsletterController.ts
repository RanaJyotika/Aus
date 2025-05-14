// src/controllers/newsletterController.ts
import { Response } from "express";
import Newsletter from "../models/NewsletterModel";

// Extend Request type to include `file` from Multer
import { Request as ExpressRequest } from "express";

interface MulterRequest extends ExpressRequest {
  file?: Express.Multer.File;
}

// Get all newsletters
export const getAllNewsletters = async (_req: ExpressRequest, res: Response) => {
  try {
    const newsletters = await Newsletter.find().sort({ createdAt: -1 }); // Newest first
    res.json(newsletters);
  } catch (err) {
    console.error("Fetch newsletters error:", err);
    res.status(500).json({ message: "Failed to fetch newsletters." });
  }
};

// Add new newsletter
export const addNewsletter = async (req: MulterRequest, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required." });
    }

    if (!req.file) {
      return res.status(400).json({ message: "PDF file is required." });
    }

    const pdfUrl = `/uploads/newsletters/${req.file.filename}`; // Public path
    const newDoc = new Newsletter({
      name,
      pdfUrl,
      createdAt: new Date(), // Ensure createdAt is set
    });

    await newDoc.save();
    res.status(201).json({ message: "Newsletter uploaded.", newsletter: newDoc });
  } catch (err) {
    console.error("Add newsletter error:", err);
    res.status(500).json({ message: "Failed to upload newsletter." });
  }
};

// Delete newsletter
export const deleteNewsletter = async (req: ExpressRequest, res: Response) => {
  try {
    const { id } = req.params;
    const newsletter = await Newsletter.findByIdAndDelete(id);

    if (!newsletter) {
      return res.status(404).json({ message: "Newsletter not found." });
    }

    res.json({ message: "Newsletter deleted successfully." });
  } catch (err) {
    console.error("Delete newsletter error:", err);
    res.status(500).json({ message: "Failed to delete newsletter." });
  }
};
