import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "../Buttons";
import { useDispatch } from "react-redux";
import FormInput from "../FormInput";
import { login } from "@/redux/authSlice";

interface LoginProps {
  onClick?: () => void;
}
const LoginSection = ({ onClick }: LoginProps) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [userData, setUserData] = useState({});
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8080/api/auth/login`,
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        document.cookie = `token=${response.data.token}; path=/`;
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        const userData = {
          instagram: response.data.instagram,
          username: response.data.username,
          userId: response.data.userId,
        };
        dispatch(login({ username, password, userData }));
        console.log("test", userData);
        router.push("/home");
      }
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="lg:w-[470px] md:w-full w-full bg-white rounded-xl lg:h-[95vh] md:h-full h-full p-4 lg:m-4 m-0 flex items-center justify-center">
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
        <p className="text-center text-gray-500">
          Don't have an account? Let's{" "}
          <span className="text-leaf font-bold" onClick={onClick}>
            Register
          </span>
        </p>
        <Button text="Login" type="submit" />
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default LoginSection;
