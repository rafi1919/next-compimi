import { getAllDays } from "../useCase/GetAllDays";
import { DayRepositoryImpl } from "@/infrastructure/database/DayRepositoryImpl";

export class DayService {
  private getAllDayUseCase: getAllDays;

  constructor() {
    const DayRepository = new DayRepositoryImpl();
    this.getAllDayUseCase = new getAllDays(DayRepository);
  }

  async getAllDays(id: string) {
    return await this.getAllDayUseCase.execute(id);
  }
}
