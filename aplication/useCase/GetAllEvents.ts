import { Event } from "@/domain/entities/Events";
import { EventRepository } from "@/domain/repositories/EventRepositories";

export class getAllEvents {
  private eventRepository: EventRepository;

  constructor(eventRepository: EventRepository) {
    this.eventRepository = eventRepository;
  }

  async execute(): Promise<Event[]> {
    return await this.eventRepository.getAllEvents();
  }
}
