import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const filenameWithoutExt = path.parse(__filename).name;
const collectionName = filenameWithoutExt;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ["user", "admin", "partner"],
    require: true,
    default: "user",
  }
});

const User = mongoose.model(collectionName, userSchema);

export default User;
