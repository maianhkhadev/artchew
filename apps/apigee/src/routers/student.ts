import express, { Request, Response } from "express";
import Student from "../models/student";

const router = express.Router();

router.get("/students", async (req: Request, res: Response) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch students." });
  }
});

router.get("/students/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch student." });
  }
});

router.post("/students", async (req: Request, res: Response) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ error: "Failed to create student." });
  }
});

router.put("/students/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found." });
    }
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ error: "Failed to update student." });
  }
});

router.delete("/students/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return res.status(404).json({ error: "Student not found." });
    }
    res.json(deletedStudent);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete student." });
  }
});

export default router;
