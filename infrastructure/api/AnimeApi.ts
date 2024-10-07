import axios from "axios";
import { Anime } from "@/domain/entities/Anime";
import dotenv from "dotenv";

dotenv.config();
export const getAllAnime = async (): Promise<Anime[]> => {
  const response = await axios.get(`${process.env.DATABASE_URL}/animes`);
  return response.data;
};
