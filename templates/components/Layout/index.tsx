import React, { useEffect, useState } from "react";
import ProfileSection from "@/templates/components/ProfileSection";
import Sidebar from "@/templates/components/Sidebar";
import Navbar from "../Navbar";
import { User } from "@/domain/entities/User";
import { UserService } from "@/aplication/services/UserService";

interface EventProps {
  children: React.ReactNode;
}

const Layout: React.FC<EventProps> = ({ children }) => {
  const [user, setUser] = useState<User[]>([]);
  const userService = new UserService();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await userService.getAllUsers();
        setUser(fetchedUser);
      } catch (error) {
        console.error("Failed to fetch user", error);
      }
    };
    fetchUser();
  }, []);

  // console.log(user)

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
          <ProfileSection name={user.username} instagram={user.instagram} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
