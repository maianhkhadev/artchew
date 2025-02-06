import mongoose, { Schema, Document } from "mongoose";

export interface IPhoto extends Document {
  filename: string;
  url: string;
  size: number;
}

const PhotoSchema: Schema = new Schema({
  filename: { type: String, required: true },
  url: { type: String, required: true },
  size: { type: Number, required: true },
});

const Photo = mongoose.model<IPhoto>("Photo", PhotoSchema);

export default Photo;
