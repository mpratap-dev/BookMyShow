import axiosHttp from ".";
import { TheaterFieldType } from "../pages/Shared/Theaters/AddTheaterForm";

export const getAllTheaters = async () => {
  try {
    const response = await axiosHttp.get("/theaters");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const addTheater = async (params: TheaterFieldType) => {
  try {
    const response = await axiosHttp.post("/theaters", params);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const updateTheater = async (id: string, params: { [key:string]: string | number }) => {
  try {
    const response = await axiosHttp.put(`/theaters/${id}`, params);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const approveTheater = async (id: string) => {
  try {
    const response = await axiosHttp.patch(`/theaters/approve/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const rejectTheater = async (id: string) => {
  try {
    const response = await axiosHttp.patch(`/theaters/reject/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const deleteTheater = async (id: string) => {
  try {
    const response = await axiosHttp.delete(`/theaters/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}