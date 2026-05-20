import express, { Request, Response } from "express";
import User from "../models/user";

const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = User.findByCredentials(username, password);

    if (!user) {
      return res.status(401).json({ error: "Wrong credential." });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Wrong credential." });
  }
});

export default router;
