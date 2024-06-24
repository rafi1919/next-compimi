import axios from "axios";
import { Day } from "@/domain/entities/Day";

export const getAllDays = async (id: string): Promise<Day[]> => {
  const response = await axios.post(`http://localhost:8080/api/day/${id}`);
  return response.data;
};
