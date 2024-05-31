import React, { useEffect, useState } from "react";
import LandingView from "./view";
import { EventData } from "@/api";
import { Event } from "@/domain/entities/Events";
import { EventService } from "@/aplication/services/EventService";

const index = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const eventService = new EventService();

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await eventService.getAllEvents();
      setEvents(events);
    };
    fetchEvents();
  }, []);

  return <LandingView eventData={events} />;
};

export default index;
