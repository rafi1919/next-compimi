interface cosplaylist {
  _id: string;
  animeId: string;
  char: string;
  instagram: string;
}

export interface Day {
  eventId: string;
  dayOne: [cosplaylist];
  dayTwo: [cosplaylist];
}
