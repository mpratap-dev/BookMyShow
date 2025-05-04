import { useEffect, useState } from "react";
import TheaterListing from "./TheaterListing";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";
import { getAllTheaters } from "../../../services/theaters";
import AddTheater from "./AddTheater";
import { PARTNER } from "../../../routes/URL";
import { getCurrentRole } from "../../../utils/users";
import { ROLES } from "../../../constants/auth";

const Theaters = () => {
  const [theaters, setTheaters] = useState([]);
  const [isFormModalOpen, setFormModalOpenOpen] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const role = getCurrentRole();

  const showDrawer = () => setFormModalOpenOpen(true);
  const closeDrawer = () => {
    navigate(PARTNER.THEATERS);
    form.resetFields();
    setFormModalOpenOpen(false);
  };

  const fetchTheaters = async () => {
    try {
      const { data } = await getAllTheaters();
      setTheaters(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTheaters();
  }, []);

  return (
    <>
      {role === ROLES.PARTNER && (
        <AddTheater
          isFormModalOpen={isFormModalOpen}
          showDrawer={showDrawer}
          closeDrawer={closeDrawer}
          form={form}
          fetchTheaters={fetchTheaters}
        />
      )}
      <TheaterListing
        showDrawer={showDrawer}
        theaters={theaters}
        fetchTheaters={fetchTheaters}
        form={form}
      />
    </>
  );
};

export default Theaters;
