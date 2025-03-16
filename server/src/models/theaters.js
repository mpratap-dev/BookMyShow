import mongoose from "mongoose";
import { STATUS } from "../constants/theaters.js";

const theaterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: [STATUS.APPROVED, STATUS.PENDING, STATUS.REJECTED],
    default: "pending"
  }
});

const TheaterModel = mongoose.model("Theater", theaterSchema);
export default TheaterModel;