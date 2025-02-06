import mongoose, { Schema, Document } from "mongoose";

export interface IPermission extends Document {
  studentId: string;
  lessonId: string;
}

const PermissionSchema: Schema = new Schema({
  studentId: { type: String, required: true },
  lessonId: { type: String, required: true },
});

const Permission = mongoose.model<IPermission>("Permission", PermissionSchema);

export default Permission;
