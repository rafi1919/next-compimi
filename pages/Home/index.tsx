import React, { useEffect, useState } from "react";
import HomeView from "./view";
import { Event } from "@/domain/entities/Events";
import { getAllEvents } from "@/infrastructure/api/EventApi";

const index = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getAllEvents();
      setEvents(events);
    };
    fetchEvents();
  }, []);

  return <HomeView eventData={events} />;
};

export default index;
