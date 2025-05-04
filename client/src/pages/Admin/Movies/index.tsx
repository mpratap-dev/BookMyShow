import { useEffect, useState } from "react";
import AddMovie from "./AddMovie";
import MoviesListing from "./MoviesListing";
import { getAllMovies } from "../../../services/movies";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";
import { ADMIN_MOVIES_PAGE_URL } from "../../../routes/admin";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isFormModalOpen, setFormModalOpenOpen] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const showDrawer = () => setFormModalOpenOpen(true);
  const closeDrawer = () => {
    navigate(ADMIN_MOVIES_PAGE_URL);
    form.resetFields();
    setFormModalOpenOpen(false);
  }

  const fetchMovies = async () => {
    try {
      const { movies } = await getAllMovies();
      setMovies(movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <AddMovie
        isFormModalOpen={isFormModalOpen}
        showDrawer={showDrawer}
        closeDrawer={closeDrawer}
        form={form}
        fetchMovies={fetchMovies}
      />
      <MoviesListing
        showDrawer={showDrawer}
        movies={movies}
        fetchMovies={fetchMovies}
        form={form}
      />
    </>
  );
};

export default Movies;
