import { Document, Model } from "mongoose";
import mongoose from "mongoose";
export interface Task {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
}

export interface TaskDocument extends Task {
  createdAt: Date;
  updatedAt: Date;
}

const taskSchema = new mongoose.Schema<TaskDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    dueDate: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

let TaskModel: Model<TaskDocument>;

try {
  TaskModel = mongoose.model<TaskDocument>("Task");
} catch {
  TaskModel = mongoose.model<TaskDocument>("Task", taskSchema);
}

export { TaskModel };
