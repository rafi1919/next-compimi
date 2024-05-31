import React from "react";
import { FaHome, FaComment, FaTshirt, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

interface sidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: sidebarProps) => {
  const route = useRouter();

  interface NavProps {
    icon: any;
    path: string;
  }

  const NavItem: NavProps[] = [
    {
      icon: FaHome,
      path: "/home",
    },
    {
      icon: FaComment,
      path: "/chat",
    },
    {
      icon: FaTshirt,
      path: "/home",
    },
  ];

  const logout = () => {
    Cookies.remove("token");
    route.push("/");
  };

  return (
    <div className="fixed border-r-[1px] border-dark h-full z-100">
      <div className="p-4 bg-paper h-full">
        <p className="text-xl text-dark hover:text-red flex flex-col items-center p-5 lg:hidden md:relative relative ">
          <span className="text-[32px]">
            <AiOutlineMenu onClick={onClose} />
          </span>
        </p>

        {NavItem.map((item) => (
          <Link href={item.path} key={item.icon}>
            <p className="text-xl text-dark hover:text-red flex flex-col items-center p-5">
              <span className="text-[32px]">
                <item.icon />
              </span>
            </p>
          </Link>
        ))}
        <p className="text-xl text-dark hover:text-red flex flex-col items-center p-5">
          <span className="text-[32px]">
            <FaSignOutAlt onClick={logout} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
