import { Day } from "../entities/Day";

export interface DayRepository {
  getAllDays(id: string): Promise<Day[]>;
}
