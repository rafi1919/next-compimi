import axios from "axios";
import { User } from "@/domain/entities/User";
import { JoinEventRequest } from "@/domain/entities/JoinEvent";

const getAllUsers = async (): Promise<User[]> => {
  const tokenAuth = localStorage.getItem("token");
  const id = localStorage.getItem("userId");

  const headers = { Authorization: `Bearer ${tokenAuth}` };
  const response = await axios.get(`http://localhost:8080/api/user/${id}`, {
    headers,
  });

  return response.data;
};

const joinEventUsers = async (eventData: JoinEventRequest): Promise<void> => {
  const tokenAuth = localStorage.getItem("token");
  const id = localStorage.getItem("userId");

  const headers = { Authorization: `Bearer ${tokenAuth}` };
  const response = await axios.post(
    `http://localhost:8080/api/user/join/${id}`,
    eventData,
    { headers }
  );

  return response.data;
};

export { getAllUsers, joinEventUsers };
