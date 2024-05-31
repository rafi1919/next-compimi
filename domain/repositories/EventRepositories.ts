import { Event } from "../entities/Events";

export interface EventRepository {
  getAllEvents(): Promise<Event[]>;
}
