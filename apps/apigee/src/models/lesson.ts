import mongoose, { Schema, Document } from "mongoose";

export interface ILesson extends Document {
  photoId: string;
  courseId: string;
  name: string;
  shortDescription: string;
  description: string;
  videoUrl: string;
}

const LessionSchema: Schema = new Schema({
  photoId: { type: String, required: true },
  courseId: { type: String, required: true },
  name: { type: String, required: true },
  shortDescription: { type: String },
  description: { type: String },
  videoUrl: { type: String, required: true },
});

const Lesson = mongoose.model<ILesson>("Lession", LessionSchema);

export default Lesson;
