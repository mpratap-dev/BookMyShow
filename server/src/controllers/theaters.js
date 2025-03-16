import { STATUS } from "../constants/theaters.js";
import TheaterModel from "../models/theaters.js";

export const addTheater = async (req, res) => {
  try {
    const theater = await TheaterModel.create(req.body);
    res.status(201).json({
      success: true,
      data: theater,
      message: "Theater sent for approval",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTheater = async (req, res) => {
  try {
    const movie = await TheaterModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      data: movie,
      message: "Theater deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllTheaters = async (req, res) => {
  try {
    const data = await TheaterModel.find({});
    res.status(200).json({
      data,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const updateTheater = async (req, res) => {
  try {
    const theater = await TheaterModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      data: theater,
      message: "Theater updated successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const approveTheater = async (req, res) => {
  try {
    const theater = await TheaterModel.findByIdAndUpdate(
      req.params.id,
      { status: STATUS.APPROVED },
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: theater,
      message: "Theater approved successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const rejectTheater = async (req, res) => {
  try {
    const theater = await TheaterModel.findByIdAndUpdate(
      req.params.id,
      { status: STATUS.REJECTED },
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: theater,
      message: "Theater approved successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
