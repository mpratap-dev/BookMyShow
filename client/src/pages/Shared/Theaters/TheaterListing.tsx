import { FormInstance, Table } from "antd";
import useColumns from "./useColumns";
import { approveTheater, deleteTheater, rejectTheater } from "../../../services/theaters";

export type ListingProps = { 
  theaters: never[]; 
  fetchTheaters: () => Promise<void>;
  form: FormInstance;
  showDrawer: () => void;
};

const TheaterListing = ({ theaters, fetchTheaters, form, showDrawer }: ListingProps) => {
  const handleDeleteTheater = async (id: string) => {
    try {
      await deleteTheater(id);
      await fetchTheaters();
    } catch (error) {
      console.error(error);
    }
  };

  const handleApproveTheater = async (id: string) => {
    try {
      await approveTheater(id);
      await fetchTheaters();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRejectTheater = async (id: string) => {
    try {
      await rejectTheater(id);
      await fetchTheaters();
    } catch (error) {
      console.error(error);
    }
  };

  const columns = useColumns({ 
    handleDeleteTheater, 
    handleApproveTheater,
    handleRejectTheater,
    form, 
    showDrawer 
  });
  return <Table rowKey="_id" dataSource={theaters} columns={columns} />;
};

export default TheaterListing;
