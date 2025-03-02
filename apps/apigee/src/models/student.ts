import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  name: string;
  email: string;
  phone: string;
  courseId: string;
  password: string;
  time: string;
  status: string;
}

const StudentSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  courseId: { type: String, required: true },
  password: { type: String },
  time: { type: String, required: true },
  status: { type: String, required: true },
});

const Student = mongoose.model<IStudent>("Student", StudentSchema);

export default Student;
