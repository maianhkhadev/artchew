import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Student from '../models/student';

const router = express.Router();

router.get('/students', async (req: Request, res: Response) => {
  try {
    const students = Student.findAll();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch students.' });
  }
});

router.get('/students/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const student = Student.findById(id);

    if (!student) {
      return res.status(404).json({ error: 'Student not found.' });
    }

    res.json(student);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch student.' });
  }
});

router.post('/student/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const student = Student.findByCredentials(email, password);

    if (student) {
      const { courseId } = student;
      const token = jwt.sign({ email, courseId }, 'artchew', { expiresIn: '24h' });
      return res.json(token);
    }

    return res.status(401).json({ error: 'Wrong credential.' });
  } catch (err) {
    res.status(500).json({ error: 'Wrong credential.' });
  }
});

router.post('/students', async (req: Request, res: Response) => {
  try {
    const savedStudent = Student.create(req.body);
    res.status(201).json(savedStudent);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: 'Failed to create student.' });
  }
});

router.put('/students/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedStudent = Student.update(id, req.body);

    if (!updatedStudent) {
      return res.status(404).json({ error: 'Student not found.' });
    }

    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update student.' });
  }
});

router.delete('/students/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedStudent = Student.delete(id);

    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found.' });
    }

    res.json(deletedStudent);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete student.' });
  }
});

export default router;
