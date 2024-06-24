import { Day } from "@/domain/entities/Day";
import { DayRepository } from "@/domain/repositories/DayRepositories";

export class getAllDays {
  private DayRepository: DayRepository;

  constructor(DayRepository: DayRepository) {
    this.DayRepository = DayRepository;
  }

  async execute(id: string): Promise<Day[]> {
    return await this.DayRepository.getAllDays(id);
  }
}
