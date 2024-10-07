import React, { useEffect, useState } from "react";
import ProfileSection from "@/templates/components/ProfileSection";
import Sidebar from "@/templates/components/Sidebar";
import Navbar from "../Navbar";
import { User } from "@/domain/entities/User";
// import { UserService } from "@/aplication/services/UserService";
import CalendarSection from "../CalendarSection";
import axios from "axios";
import { useSelector } from "react-redux";

interface EventProps {
  children: React.ReactNode;
}

const Layout: React.FC<EventProps> = ({ children }) => {
  // const [user, setUser] = useState<User[]>([]);
  // const userService = new UserService();
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const fetchedUser = await axios.post(`/user/${id}`)
  //       setUser(fetchedUser);
  //       console.log('test', fetchedUser)
  //     } catch (error) {
  //       console.error("Failed to fetch user", error);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  // console.log(user)
  const userData = useSelector((state: any) => state.auth.userData);

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="grid grid-cols-12 w-full ">
        <div className="col-span-1 lg:block md:hidden hidden ">
          <Sidebar />
        </div>
        <div className="lg:col-span-9 md:col-span-12 col-span-12">
          {children}
        </div>
        <div className="col-span-2 lg:block md:hidden hidden">
          <CalendarSection />
          <ProfileSection
            name={userData.username}
            instagram={userData.instagram}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
