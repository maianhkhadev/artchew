import express, { Request, Response } from "express";
const multer = require('multer');
const path = require('path');
const fs = require('fs');
import Photo from "../models/photo";

const router = express.Router();

const photosDir = path.join(__dirname, 'photos');
if (!fs.existsSync(photosDir)) {
  fs.mkdirSync(photosDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, photosDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

const upload = multer({ storage });

router.post('/upload', upload.single('photo'), (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const newPhoto = new Photo({
    filename: req.file.filename,
    url: req.file.path,
    size: req.file.size
  });

  newPhoto.save()
    .then(photo => res.status(200).json({ message: 'File uploaded successfully!', photo }))
    .catch(err => res.status(500).json({ message: 'Error saving file info to MongoDB', error: err }));
});

router.get('/photos', (req: Request, res: Response) => {
  Photo.find()
    .then(photos => res.status(200).json(photos))
    .catch(err => res.status(500).json({ message: 'Error fetching photos', error: err }));
});

