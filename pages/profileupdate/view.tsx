import React, { useState } from "react";
import { Button } from "@/templates/components/Buttons";
import FormInput from "@/templates/components/FormInput";
import { User } from "@/domain/entities/User";
import { UserService } from "@/aplication/services/UserService";
import { useRouter } from "next/router";

const EditView = () => {
  const [username, setUsername] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const router = useRouter();

  const userservice = new UserService();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const User: User = {
      username,
      instagram,
      _id: "",
      eventlist: [],
    };
    try {
      await userservice.editAllUsers(User);
    } catch (error) {
      console.error;
    }
    router.push("/home");
  };

  return (
    <div className="lg:fixed md:block block lg:w-[470px] md:w-full w-full bg-white rounded-xl h-[95vh] p-4 lg:m-4 m-0">
      <div className="bg-slate-600 rounded-xl w-full h-[300px]"></div>
      <form onSubmit={handleSubmit}>
        <FormInput
          value={username}
          name="username"
          type="text"
          placeholder="username"
          onChange={(e: any) => setUsername(e.target.value)}
        />
        <FormInput
          value={instagram}
          name="instagram"
          type="text"
          placeholder="Instagram"
          onChange={(e: any) => setInstagram(e.target.value)}
        />
        <Button text="Edit" type="submit" />
      </form>
    </div>
  );
};

export default EditView;
