import React, { useEffect, useState } from "react";
import ChatView from "./view";
import { User } from "@/domain/entities/User";
import { UserService } from "@/aplication/services/UserService";
import { Event } from "@/domain/entities/Events";
import { EventService } from "@/aplication/services/EventService";

const index = () => {
  const [eventList, setEventList] = useState<User[]>([]);
  const userService = new UserService();
  const [events, setEvents] = useState<Event[]>([]);
  const eventService = new EventService();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await userService.getAllUsers();
        setEventList(fetchedUser);
      } catch (error) {
        console.error("Failed to fetch user", error);
      }
    };
    const fetchEvents = async () => {
      const events = await eventService.getAllEvents();
      setEvents(events);
    };

    fetchEvents();
    fetchUser();
  }, []);

  return <ChatView eventData={eventList} eventFilter={events} />;
};

export default index;
