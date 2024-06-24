import { Day } from "@/domain/entities/Day";
import { DayRepository } from "@/domain/repositories/DayRepositories";
import { getAllDays } from "../api/DayApi";

export class DayRepositoryImpl implements DayRepository {
  async getAllDays(id: string): Promise<Day[]> {
    return await getAllDays(id);
  }
}
