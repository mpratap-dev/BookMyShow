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
import { useParams } from "react-router-dom";
import { addTheater, updateTheater } from "../../../services/theaters";

interface SubmitButtonProps {
  form: FormInstance;
}

export type TheaterFieldType = {
  name: string;
  address: string;
  email: string;
  phone: number;
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
  fetchTheaters: () => Promise<void>;
};

const AddTheaterForm = ({ form, closeFormModal, fetchTheaters }: Props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { id } = useParams();

  const showSuccessMessage = (message: string) => {
    messageApi.open({
      type: "success",
      content: message,
    });
  };

  const showErrorMessage = (message: string) => {
    messageApi.open({
      type: "error",
      content: message,
    });
  };

  const onFinish: FormProps<TheaterFieldType>["onFinish"] = async (
    values: TheaterFieldType
  ) => {
    try {
      const api = id ? updateTheater(id, values) : addTheater(values);
      const { success, message } = await api;
      if (success) {
        closeFormModal();
        fetchTheaters();
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
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Address" rules={[{ required: true }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input type="email" />
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

export default AddTheaterForm;
