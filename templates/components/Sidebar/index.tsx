import React from "react";
// import { FaHome, FaComment, FaTshirt, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice";

interface sidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: sidebarProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  interface NavProps {
    icon: any;
    path: string;
  }

  const NavItem: NavProps[] = [
    {
      icon: "material-symbols-light:home-rounded",
      path: "/home",
    },
    {
      icon: "humbleicons:chat",
      path: "/chat",
    },
    {
      icon: "icon-park-outline:clothes-sweater",
      path: "/shirt",
    },
  ];

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("persist:root");
    router.push("/");
    dispatch(logout());
  };

  return (
    <div className="p-2 h-full lg:w-full md:w-full w-[100px] z-100">
      <div className="p-4  rounded-[40px] h-full">
        <p className="text-xl text-white hover:text-red flex flex-col items-center p-5 lg:hidden md:relative relative ">
          <span className="text-[32px]">
            <Icon
              icon="line-md:menu-to-close-alt-transition"
              onClick={onClose}
            />
          </span>
        </p>

        {NavItem.map((item) => (
          <Link href={item.path} key={item.icon}>
            <p className="text-xl text-white hover:text-red flex flex-col items-center p-5">
              <span
                className={`text-[32px]  p-2 rounded-full ${
                  router.pathname.startsWith(item.path)
                    ? "shadow-xl shadow-red-700 bg-red-500"
                    : ""
                }`}
              >
                {/* <span className="text-[32px]"> */}
                <Icon icon={item.icon} />
              </span>
            </p>
          </Link>
        ))}
        <p className="text-xl text-dark hover:text-red flex flex-col items-center p-5">
          <span className="text-[32px]">
            <Icon
              icon="basil:logout-outline"
              className="text-white"
              onClick={handleLogout}
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
