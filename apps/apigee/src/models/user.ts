import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  url: string;
  size: number;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
