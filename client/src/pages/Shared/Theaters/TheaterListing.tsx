import { FormInstance, Table } from "antd";
import useColumns from "./useColumns";
import { deleteTheater } from "../../../services/theaters";

export type ListingProps = { 
  theaters: never[]; 
  fetchTheaters: () => Promise<void>;
  form: FormInstance;
  showDrawer: () => void;
};

const TheaterListing = ({ theaters, fetchTheaters, form, showDrawer }: ListingProps) => {
  const handleDeleteMovie = async (id: string) => {
    try {
      await deleteTheater(id);
      await fetchTheaters();
    } catch (error) {
      console.error(error);
    }
  };
  const columns = useColumns({ handleDeleteMovie, form, showDrawer });
  return <Table dataSource={theaters} columns={columns} />;
};

export default TheaterListing;
