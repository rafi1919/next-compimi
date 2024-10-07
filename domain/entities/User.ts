// In your entities file, e.g., "@/domain/entities/User"
export interface User {
  _id: string;
  username: string;
  instagram: string;
  eventlist: EventList[];
}

export interface EventList {
  eventId: string;
  dayId: string;
  animeId: string;
}
