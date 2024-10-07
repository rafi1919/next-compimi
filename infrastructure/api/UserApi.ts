import axios from "axios";
import { User } from "@/domain/entities/User";
import { JoinEventRequest } from "@/domain/entities/JoinEvent";
import dotenv from "dotenv";

dotenv.config();
const getAllUsers = async () => {
  try {
    const tokenAuth = localStorage.getItem("token");
    const id = localStorage.getItem("userId");
    const headers = { Authorization: `Bearer ${tokenAuth}` };
    const response = await axios.get(`${process.env.DATABASE_URL}/user/${id}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error;
  }
};

const joinEventUsers = async (eventData: JoinEventRequest): Promise<void> => {
  const tokenAuth = localStorage.getItem("token");
  const id = localStorage.getItem("userId");

  const headers = { Authorization: `Bearer ${tokenAuth}` };
  const response = await axios.post(
    `${process.env.DATABASE_URL}/user/join/${id}`,
    eventData,
    { headers }
  );

  return response.data;
};

const leaveEventUsers = async (eventData: JoinEventRequest): Promise<void> => {
  const tokenAuth = localStorage.getItem("token");
  const id = localStorage.getItem("userId");

  const headers = { Authorization: `Bearer ${tokenAuth}` };
  const response = await axios.post(
    `${process.env.DATABASE_URL}/user/leave/${id}`,
    eventData,
    { headers }
  );

  return response.data;
};

const editAllUsers = async (eventData: User): Promise<void> => {
  const id = localStorage.getItem("userId");

  const response = await axios.post(
    `${process.env.DATABASE_URL}/user/edit/${id}`,
    eventData
  );

  return response.data;
};

export { getAllUsers, joinEventUsers, leaveEventUsers, editAllUsers };
