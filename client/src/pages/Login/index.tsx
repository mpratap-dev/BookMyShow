import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { Link, useNavigate } from "react-router-dom";
import { login, LoginBody } from "../../services/auth";
import { setUserData } from "../../store/slices/users";
import { useDispatch } from "react-redux";
import { HOME_PAGE_URL, REGISTER_PAGE_URL } from "../../routes/URL";

type FieldType = {
  email?: string;
  password?: string;
};

const Login: React.FC = () => {  
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const [error, setError] = useState("");

  const onFinish: FormProps<FieldType>["onFinish"] = async (values: LoginBody) => {
    try {
      const response = await login(values);
      if(!response.success) {
        return setError(response.message);
      }

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.data));
      
      dispatch(setUserData(response.data));

      navigate(HOME_PAGE_URL);
    } catch (error) {
      const err = error as { response: { data: { message: string } } };
      setError(err.response.data.message);
    }
  };

  return (
    <Row className="h-screen" justify="center" align="middle">
      <Col span={6}>
        <Title className="text-center mb-2" level={3}>
          LOGIN
        </Title>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          {error && <Typography.Text className="mb-2 text-center" type="danger">{error}</Typography.Text>}

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
          New User? <Link to={REGISTER_PAGE_URL}>Register</Link>
        </Typography.Text>
      </Col>
    </Row>
  );
};

export default Login;
