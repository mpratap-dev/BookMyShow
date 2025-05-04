import { FormInstance, Table } from "antd";
import useColumns from "./useColumns";
import { deleteMovie } from "../../../services/movies";

export type ListingProps = { 
  movies: never[]; 
  fetchMovies: () => Promise<void>;
  form: FormInstance;
  showDrawer: () => void;
};

const MoviesListing = ({ movies, fetchMovies, form, showDrawer }: ListingProps) => {
  const handleDeleteMovie = async (id: string) => {
    try {
      await deleteMovie(id);
      await fetchMovies();
    } catch (error) {
      console.error(error);
    }
  };
  const columns = useColumns({ handleDeleteMovie, form, showDrawer });
  return <Table rowKey="_id" dataSource={movies} columns={columns} />;
};

export default MoviesListing;
