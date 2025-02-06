import express, { Request, Response } from "express";
import Lesson from "../models/lesson";

const router = express.Router();

router.get("/lessons", async (req: Request, res: Response) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch lessons." });
  }
});

router.get("/lessons/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const lesson = await Lesson.findById(id);
    res.json(lesson);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch lesson." });
  }
});

router.post("/lessons", async (req: Request, res: Response) => {
  try {
    const newLesson = new Lesson(req.body);
    const savedLesson = await newLesson.save();
    res.status(201).json(savedLesson);
  } catch (err) {
    res.status(400).json({ error: "Failed to create lesson." });
  }
});

router.put("/lessons/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedLesson = await Lesson.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedLesson) {
      return res.status(404).json({ error: "Lesson not found." });
    }
    res.json(updatedLesson);
  } catch (err) {
    res.status(400).json({ error: "Failed to update lesson." });
  }
});

router.delete("/lessons/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedLesson = await Lesson.findByIdAndDelete(id);
    if (!deletedLesson) {
      return res.status(404).json({ error: "Lesson not found." });
    }
    res.json(deletedLesson);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete lesson." });
  }
});

export default router;
