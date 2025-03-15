import { Button, Drawer, FormInstance } from "antd";
import { VideoCameraAddOutlined } from "@ant-design/icons";
import AddMovieForm from "./AddMovieForm";

type Props = {
  fetchMovies: () => Promise<void>;
  form: FormInstance;
  isFormModalOpen: boolean;
  showDrawer: () => void;
  closeDrawer: () => void;
}

const AddMovie = ({ fetchMovies, form, showDrawer, closeDrawer, isFormModalOpen }: Props) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <Button onClick={showDrawer} type="primary" icon={<VideoCameraAddOutlined />}>
        Add Movie
      </Button>
      <Drawer
        title="Add Movie"
        closable={false}
        onClose={closeDrawer}
        open={isFormModalOpen}
      >
        <AddMovieForm 
          form={form} 
          closeFormModal={closeDrawer}
          fetchMovies={fetchMovies}
        />
      </Drawer>
    </div>
  );
};

export default AddMovie;
