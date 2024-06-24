// In your entities file, e.g., "@/domain/entities/User"
export interface User {
  id: string;
  username: string;
  instagram: string;
  eventList: EventList[];
}

export interface EventList {
  eventId: string;
  dayId: string;
  animeId: string;
}
