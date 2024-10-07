import React, { useState } from "react";
import LoginSection from "@/templates/components/LoginSection";
import RegisterSection from "@/templates/components/RegisterSection";

const LandingView = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-full h-screen bg-paper">
      <div className="grid grid-cols-12 w-full ">
        <div className="lg:col-span-6 md:col-span-6 col-span-12  "></div>

        <div className="lg:col-span-6 md:col-span-6 col-span-12 ">
          <div className={`${isLogin ? "block" : "hidden"}`}>
            <RegisterSection onClick={handleLogin} />
          </div>
          <div className={`${isLogin ? "hidden" : "block"}`}>
            <LoginSection onClick={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingView;
