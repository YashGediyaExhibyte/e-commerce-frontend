import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "../../redux/store";
import { Button, Form, Input } from "antd";
import { logInAction } from "../../redux/actions/authAction";
import toast from "react-hot-toast";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const users = useSelector((state) => state.auth);

  const onFinish = (data) => {
    logInAction(data);
    if (users.userData.username) {
      navigate("/");
      localStorage.setItem("user", JSON.stringify(users.userData));
      toast.success("Log in successfull");
    } else {
      toast.error("email or password are not matched");
      form.resetFields();
    }
  };
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="max-w-[350px] w-full bg-[#f0f5ff] p-5 rounded-xl border border-[#adc6ff]">
        <h3 className="text-center text-gray-400 font-bold text-[25px] mb-5">
          Login
        </h3>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
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
            <Button
              type="primary"
              htmlType="submit"
              className="!text-[16px] !h-fit !px-5 !font-medium"
            >
              Log In
            </Button>
          </div>
          <div className="flex justify-center items-center mt-5">
            <p className="flex gap-1 items-center text-gray-500">
              Don't have an account?
              <span
                onClick={() => navigate("/signup")}
                className="text-[#2f54eb] font-semibold cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
