import express, { Request, Response } from "express";
import User from "../models/user";

const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await User.find({ username, password });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Wrong credential." });
  }
});

export default router;
