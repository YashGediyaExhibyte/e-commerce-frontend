import React from "react";
import { Button, Dropdown } from "antd";
import { FiLogOut } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { AiOutlineSetting } from "react-icons/ai";
import avatarImg from "../../assets/images//avatar.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const items = [
    {
      icon: <LuUser2 className="!text-[16px]" />,
      label: "Profile",
      key: "0",
    },
    {
      icon: <AiOutlineSetting className="!text-[16px]" />,
      label: "Settings",
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <button
        type="button"
        onClick={()=>navigate("/login")}
        className="flex items-center gap-3 cursor-pointer text-secondary-80 text-sm font-medium"
      >
        <FiLogOut className="!text-[16px]" />
        <span>Sign Out</span>
      </button>
      ),
      key: "3",
    },
  ];

  return (
    <div className="px-5 py-4 bg-slate-300 flex justify-between items-center">
      <div className="flex gap-10 items-center">
        <div className="h-10 w-[150px] bg-slate-400 rounded-lg" />
        <div className="flex items-center gap-2">
          <Button
            type="text"
            onClick={() => navigate("/")}
            className="!font-medium !text-[15px]"
          >
            Dashboard
          </Button>
          <Button
            type="text"
            onClick={() => navigate("/products")}
            className="!font-medium !text-[15px]"
          >
            Products
          </Button>
        </div>
      </div>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        overlayClassName="w-[150px]"
      >
        <Button
          type="text"
          onClick={(e) => e.preventDefault()}
          className="!p-0 !h-10 !w-10 !rounded-full overflow-hidden"
        >
          <img src={avatarImg} alt="avatar" className="w-full h-full" />
        </Button>
      </Dropdown>
    </div>
  );
};

export default Header;
