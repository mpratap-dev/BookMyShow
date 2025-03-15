import {
  Button,
  DatePicker,
  Form,
  FormInstance,
  FormProps,
  Input,
  message,
  Select,
  Space,
} from "antd";
import React from "react";
import dayjs from "dayjs";
import { addMovies, updateMovies } from "../../../services/movies";
import { useParams } from "react-router-dom";

interface SubmitButtonProps {
  form: FormInstance;
}

export type MoviesFieldType = {
  title: string;
  description: string;
  duration: number;
  genre: string;
  releaseDate: dayjs.Dayjs;
  poster: string;
};

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  children,
}) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  const values = Form.useWatch([], form);
  
  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

type Props = {
  form: FormInstance;
  closeFormModal: () => void;
  fetchMovies: () => Promise<void>
}

const AddMovieForm = ({ form, closeFormModal, fetchMovies }: Props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { id } = useParams();

  const showSuccessMessage = (message: string) => {
    messageApi.open({
      type: 'success',
      content: message,
    });
  };

  const showErrorMessage = (message: string) => {
    messageApi.open({
      type: 'error',
      content: message,
    });
  };

  const onFinish: FormProps<MoviesFieldType>["onFinish"] = async (
    values: MoviesFieldType
  ) => {
    try {
      
      const params = {
        ...values,
        releaseDate: values.releaseDate.valueOf(),
      }
      const api = id ? updateMovies(id, params) : addMovies(params);
      const { success, message } = await api;
      if(success) {
        closeFormModal();
        fetchMovies();
        showSuccessMessage(message);
      } else {
        showErrorMessage(message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        onFinish={onFinish}
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item name="duration" label="Duration" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name="genre" label="Genre" rules={[{ required: true }]}>
          <Select>
            <Select.Option value="action">Action</Select.Option>
            <Select.Option value="comedy">Comedy</Select.Option>
            <Select.Option value="drama">Drama</Select.Option>
            <Select.Option value="horror">Horror</Select.Option>
            <Select.Option value="sci-fi">Science Fiction</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="language" label="Language" rules={[{ required: true }]}>
          <Select mode="multiple">
            <Select.Option value="hindi">Hindi</Select.Option>
            <Select.Option value="english">English</Select.Option>
            <Select.Option value="tamil">Tamil</Select.Option>
            <Select.Option value="telegu">Telegu</Select.Option>
            <Select.Option value="kannada">Kannada</Select.Option>
            <Select.Option value="malayalam">Malayalam</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="releaseDate"
          label="Release Date"
          rules={[{ required: true }]}
        >
          <DatePicker onChange={(date) => {
            console.log(date);
            
          }} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="poster" label="Poster URL" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Space>
            <SubmitButton form={form}>Submit</SubmitButton>
            <Button onClick={closeFormModal}>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddMovieForm;
