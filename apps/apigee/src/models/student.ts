import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  name: string;
  age: number;
  class: string;
}

const StudentSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  class: { type: String, required: true },
});

const Student = mongoose.model<IStudent>("Student", StudentSchema);

export default Student;
