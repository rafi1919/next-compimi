import axios from "axios";
import { Event } from "@/domain/entities/Events";

export const getAllEvents = async (): Promise<Event[]> => {
  const response = await axios.get("http://localhost:8080/api/event");
  return response.data;
};
