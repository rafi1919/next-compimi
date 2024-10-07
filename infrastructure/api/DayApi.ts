import axios from "axios";
import { Day } from "@/domain/entities/Day";
import dotenv from "dotenv";

dotenv.config();
export const getAllDays = async (id: string): Promise<Day[]> => {
  const response = await axios.get(`${process.env.DATABASE_URL}/day/${id}`);
  console.log(response);
  return response.data;
};
