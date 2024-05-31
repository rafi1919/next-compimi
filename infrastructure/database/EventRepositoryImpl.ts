import { Event } from "@/domain/entities/Events";
import { EventRepository } from "@/domain/repositories/EventRepositories";
import { getAllEvents } from "../api/EventApi";

export class EventRepositoryImpl implements EventRepository {
  async getAllEvents(): Promise<Event[]> {
    return await getAllEvents();
  }
}
