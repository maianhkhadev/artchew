import express, { Request, Response } from "express";
import Course from "../models/course";

const router = express.Router();

router.get("/courses", async (req: Request, res: Response) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch courses." });
  }
});

router.get("/courses/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch course." });
  }
});

router.post("/courses", async (req: Request, res: Response) => {
  try {
    const newCourse = new Course(req.body);
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (err) {
    res.status(400).json({ error: "Failed to create course." });
  }
});

router.put("/courses/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedCourse = await Course.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedCourse) {
      return res.status(404).json({ error: "Course not found." });
    }
    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ error: "Failed to update course." });
  }
});

router.delete("/courses/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedCourse = await Course.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res.status(404).json({ error: "Course not found." });
    }
    res.json(deletedCourse);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete course." });
  }
});

export default router;
