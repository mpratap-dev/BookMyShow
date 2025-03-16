import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from 'url';
import { ROLES } from "../constants/auth.js";

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
    enum: [ROLES.ADMIN, ROLES.PARTNER],
    require: true,
  }
});

const User = mongoose.model(collectionName, userSchema);

export default User;
