import express, { Request, Response } from "express";
import Permission from "../models/permission";

const router = express.Router();

router.get("/permission", async (req: Request, res: Response) => {
  try {
    const lessons = await Permission.find();
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch lessons." });
  }
});

export default router;
