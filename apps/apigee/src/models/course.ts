import mongoose, { Schema, Document } from "mongoose";

export interface ICourse extends Document {
  name: string;
  url: string;
  size: number;
}

const CourseSchema: Schema = new Schema({
  name: { type: String, required: true },
});

const Course = mongoose.model<ICourse>("Course", CourseSchema);

export default Course;
