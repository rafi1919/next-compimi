import { getAllEvents } from "../useCase/GetAllEvents";
import { EventRepositoryImpl } from "@/infrastructure/database/EventRepositoryImpl";

export class EventService {
  private getAllEventUseCase: getAllEvents;

  constructor() {
    const eventRepository = new EventRepositoryImpl();
    this.getAllEventUseCase = new getAllEvents(eventRepository);
  }

  async getAllEvents() {
    return await this.getAllEventUseCase.execute();
  }
}
