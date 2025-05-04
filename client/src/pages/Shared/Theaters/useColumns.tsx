import { Badge, Button, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { ListingProps } from "./TheaterListing";
import { TheaterFieldType } from "./AddTheaterForm";
import { useNavigate } from "react-router-dom";
import { STATUS_COLORS } from "../../../constants/theaters";
import { PARTNER } from "../../../routes/URL";
import { getCurrentRole } from "../../../utils/users";
import { ROLES } from "../../../constants/auth";

type Props = {
  handleDeleteTheater: (id: string) => void;
  handleRejectTheater: (id: string) => void;
  handleApproveTheater: (id: string) => void;
  form: ListingProps["form"];
  showDrawer: ListingProps["showDrawer"];
};

const useColumns = ({ 
  handleDeleteTheater, 
  form, 
  showDrawer,
  handleRejectTheater,
  handleApproveTheater
}: Props) => {
  const navigate = useNavigate();
  const role = getCurrentRole();

  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
    ...(role === ROLES.ADMIN
      ? [
          {
            title: "Created By",
            dataIndex: "createdBy",
            key: "createdBy",
          },
        ]
      : []),
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: keyof typeof STATUS_COLORS) => {
        return (
          <Badge
            count={status[0].toUpperCase() + status.slice(1)}
            color={STATUS_COLORS[status]}
          />
        );
      },
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "_id",
      render: (_id: string, records: TheaterFieldType) => {
        return role === ROLES.ADMIN ? (
          <>
            <Popconfirm
              title="Approve the theater"
              description="Are you sure to approve this theater?"
              onConfirm={() => handleApproveTheater(_id)}
              okText="Yes"
              cancelText="No"
            >
              <Button style={{ marginRight: 16 }} icon={<CheckOutlined />} />
            </Popconfirm>
            <Popconfirm
              title="Reject the theater"
              description="Are you sure to reject this theater?"
              onConfirm={() => handleRejectTheater(_id)}
              okText="Yes"
              cancelText="No"
            >
              <Button icon={<CloseOutlined />} danger />
            </Popconfirm>
          </>
        ) : (
          <>
            <Button
              style={{ marginRight: 16 }}
              icon={<EditOutlined />}
              onClick={() => {
                navigate(`${PARTNER.THEATERS}/${_id}`);
                form.setFieldsValue(records);
                showDrawer();
              }}
            />
            <Popconfirm
              title="Delete the theater"
              description="Are you sure to delete this theater?"
              onConfirm={() => handleDeleteTheater(_id)}
              okText="Yes"
              cancelText="No"
            >
              <Button icon={<DeleteOutlined />} danger />
            </Popconfirm>
          </>
        );
      },
    },
  ];
};

export default useColumns;
