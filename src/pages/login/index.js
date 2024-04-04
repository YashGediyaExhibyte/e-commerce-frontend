import { Button, Form, Input } from "antd";
import React from "react";

const Login = () => {
  const onFinish = (data) => {
    console.log("data", data);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="max-w-[350px] w-full bg-[#f0f5ff] p-5 rounded-xl border border-[#adc6ff]">
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <div className="flex justify-center">
          <Button type="primary" htmlType="submit" className="!text-[16px] !h-fit !px-5">
            Sign Up
          </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
