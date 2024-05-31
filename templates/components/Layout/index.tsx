import React, { useState } from "react";
import ProfileSection from "@/templates/components/ProfileSection";
import LoginSection from "@/templates/components/LoginSection";
import Sidebar from "@/templates/components/Sidebar";
import Navbar from "../Navbar";
import useCookieToken from "@/hooks";

interface EventProps {
  children: React.ReactNode;
}

const Layout: React.FC<EventProps> = ({ children }) => {
  const token = useCookieToken();
  const isLogin = !!token;

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="grid grid-cols-12 w-full ">
        <div className="col-span-2 lg:block md:hidden hidden h-[90vh]">
          <Sidebar />
        </div>
        <div className="lg:col-span-6 md:col-span-12 col-span-12">
          {children}
        </div>
        <div className="col-span-4 lg:block md:hidden hidden">
          <ProfileSection />
          {/* <LoginSection /> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
