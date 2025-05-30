import express from "express";
import { getFounder, createFounder } from "../controllers/founderController";

const router = express.Router();

router.get("/", getFounder);
router.post("/", createFounder);

export default router;
