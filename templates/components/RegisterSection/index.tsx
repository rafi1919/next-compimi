import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "../Buttons";
import FormInput from "../FormInput";

interface loginProps {
  onClick?: () => void;
}
const RegisterSection = ({ onClick }: loginProps) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "instagram") {
      setInstagram(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        {
          username: username,
          password: password,
          instagram: instagram,
        }
      );

      if (response.status === 200) {
        // const token = {
        //   "token" : response.data.token ,
        //   "userId":response.data.userId
        // }
        const cokie =
          (document.cookie = `token=${response.data.token}; path=/`);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);

        router.push("/home");
      }
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className=" lg:w-[470px] md:w-full w-full bg-white rounded-xl lg:h-[95vh] md:h-full h-full p-4 lg:m-4 m-0  flex items-center justify-center">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <FormInput
          value={username}
          placeholder="Username"
          name="username"
          type="text"
          onChange={handleInputChange}
        />
        <FormInput
          value={password}
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleInputChange}
        />
        <FormInput
          value={instagram}
          placeholder="Instagram"
          name="instagram"
          type="instagram"
          onChange={handleInputChange}
        />
        <p className="text-center text-gray-500">
          Remember your account ? lets{" "}
          <span className="text-leaf font-bold" onClick={onClick}>
            Login
          </span>
        </p>
        <Button text="Register" type="submit" />
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default RegisterSection;
