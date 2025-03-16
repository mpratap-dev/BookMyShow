import { Badge, Button, Image, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { getLanguageLabel } from "../../../constants/movies";
import { ListingProps } from "./TheaterListing";
import dayjs from "dayjs";
import { MoviesFieldType } from "./AddTheaterForm";
import { useNavigate } from "react-router-dom";
import { ADMIN_MOVIES_PAGE_URL } from "../../../routes/admin";
import { STATUS_COLORS } from "../../../constants/theaters";
import { PARTNER_THEATER_PAGE_URL } from "../../../routes/partner";

type Props = {
  handleDeleteMovie: (id: string) => void;
  form: ListingProps["form"];
  showDrawer: ListingProps["showDrawer"];

}

const useColumns = ({ handleDeleteMovie, form, showDrawer }: Props) => {
  const navigate = useNavigate();
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: keyof typeof STATUS_COLORS) => {
        return (
          <Badge count={(status[0].toUpperCase() + status.slice(1))} color={STATUS_COLORS[status]} />
        )
      },
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "_id",
      render: (_id: string, records: MoviesFieldType) => {
        return(
        <>
          <Button 
            style={{ marginRight: 16 }} 
            icon={<EditOutlined />} 
            onClick={() => {
              const processedFormData = {
                ...records,
                releaseDate: dayjs(records.releaseDate),
              }
              console.log(processedFormData);
              navigate(`/${PARTNER_THEATER_PAGE_URL}/${_id}`);
              form.setFieldsValue(processedFormData);
              showDrawer();
            }}
          />
          <Popconfirm
            title="Delete the movie"
            description="Are you sure to delete this movie?"
            onConfirm={() => handleDeleteMovie(_id)}
            // onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} danger />
          </Popconfirm>
        </>
      )},
    },
  ];
};

export default useColumns;
