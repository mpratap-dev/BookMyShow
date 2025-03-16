import axiosHttp from ".";

export const getAllMovies = async () => {
  try {
    const response = await axiosHttp.get("/movies");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const addMovies = async (params: { [key:string]: string | number }) => {
  try {
    const response = await axiosHttp.post("/movies", params);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const updateMovies = async (id: string, params: { [key:string]: string | number }) => {
  try {
    const response = await axiosHttp.put(`/movies/${id}`, params);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const deleteMovie = async (id: string) => {
  try {
    const response = await axiosHttp.delete(`/movies/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}