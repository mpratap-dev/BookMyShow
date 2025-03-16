import { Button, Drawer, FormInstance } from "antd";
import { VideoCameraAddOutlined } from "@ant-design/icons";
import AddTheaterForm from "./AddTheaterForm";

type Props = {
  fetchTheaters: () => Promise<void>;
  form: FormInstance;
  isFormModalOpen: boolean;
  showDrawer: () => void;
  closeDrawer: () => void;
}

const AddTheater = ({ fetchTheaters, form, showDrawer, closeDrawer, isFormModalOpen }: Props) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <Button onClick={showDrawer} type="primary" icon={<VideoCameraAddOutlined />}>
        Add Theater
      </Button>
      <Drawer
        title="Add Theater"
        closable={false}
        onClose={closeDrawer}
        open={isFormModalOpen}
      >
        <AddTheaterForm 
          form={form} 
          closeFormModal={closeDrawer}
          fetchTheaters={fetchTheaters}
        />
      </Drawer>
    </div>
  );
};

export default AddTheater;
