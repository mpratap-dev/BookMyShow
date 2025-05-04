import React from "react";
import type { FormProps } from "antd";
import { Button, Col, Form, Input, Radio, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/auth";
import { LOGIN_PAGE_URL } from "../../routes/URL";

type FieldType = {
  name?: string;
  email?: string;
  password?: string;
  remember?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register: React.FC = () => {
  const navigate = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const response = await register(values);

      if (response.success) {
        navigate(LOGIN_PAGE_URL);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Row className="h-screen" justify="center" align="middle">
      <Col span={6}>
        <Title className="text-center mb-2" level={3}>
          REGISTER
        </Title>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="role" label="Role">
            <Radio.Group>
              <Radio value="admin">Admin</Radio>
              <Radio value="partner">Partner</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Typography.Text>
          Already have an account? <Link to={LOGIN_PAGE_URL}>Login</Link>
        </Typography.Text>
      </Col>
    </Row>
  );
};

export default Register;
