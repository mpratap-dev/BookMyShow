import React from "react";
import type { FormProps } from "antd";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";

type FieldType = {
  name?: string;
  email?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register: React.FC = () => (
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

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Typography.Text>
        Already have an account? <Link to="/login">Login</Link>
      </Typography.Text>
    </Col>
  </Row>
);

export default Register;
