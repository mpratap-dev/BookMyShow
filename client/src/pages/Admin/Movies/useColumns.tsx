import { Button, Image, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { getLanguageLabel } from "../../../constants/movies";
import { ListingProps } from "./MoviesListing";
import dayjs from "dayjs";
import { MoviesFieldType } from "./AddMovieForm";
import { useNavigate } from "react-router-dom";
import { ADMIN_MOVIES_PAGE_URL } from "../../../routes/admin";

type Props = {
  handleDeleteMovie: (id: string) => void;
  form: ListingProps["form"];
  showDrawer: ListingProps["showDrawer"];

}

const useColumns = ({ handleDeleteMovie, form, showDrawer }: Props) => {
  const navigate = useNavigate();
  return [
    {
      title: "Poster",
      dataIndex: "poster",
      key: "poster",
      render: (poster: string) => (
        <Image
          width={50}
          src={poster}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "age",
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "Language",
      dataIndex: "language",
      key: "language",
      render: (language: string[]) => language.map(getLanguageLabel).join(", "),
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
              navigate(`/${ADMIN_MOVIES_PAGE_URL}/${_id}`);
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
