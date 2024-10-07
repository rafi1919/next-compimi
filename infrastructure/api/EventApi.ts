import axios from "axios";
import { Event } from "@/domain/entities/Events";
import dotenv from "dotenv";

dotenv.config();

const getAllEvents = async (): Promise<Event[]> => {
  const response = await axios.get(`${process.env.DATABASE_URL}/events`);
  return response.data;
};

const getEventById = async (id: string): Promise<Event[]> => {
  const response = await axios.get(`${process.env.DATABASE_URL}/events/${id}`);
  return response.data;
};

export { getAllEvents, getEventById };
