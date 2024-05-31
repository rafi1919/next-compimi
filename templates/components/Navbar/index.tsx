import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../Sidebar";
import Link from "next/link";
import LoginModal from "../Modal/LoginModal";
import useCookieToken from "@/hooks";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const token = useCookieToken();
  const isLogin = !!token;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sideContainer = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="lg:hidden md:relative relative p-4">
      <div className="flex justify-between">
        <div>
          <AiOutlineMenu className="text-xl" onClick={toggleSidebar} />
        </div>
        <div>
          {isLogin ? (
            <Link href={"/profile"}>
              <AiOutlineUser className="text-xl" />
            </Link>
          ) : (
            <AiOutlineUser className="text-xl" onClick={handleModalOpen} />
          )}
        </div>
      </div>
      <AnimatePresence>
        (isSidebarOpen ? (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
          initial="hidden"
          animate={isSidebarOpen ? "visible" : "hidden"}
          exit="hidden"
          variants={sideContainer}
        >
          <Sidebar onClose={toggleSidebar} />
        </motion.div>
        ): null)
      </AnimatePresence>
      <LoginModal open={modalOpen} onClose={handleModalOpen} />
    </div>
  );
};

export default Navbar;
