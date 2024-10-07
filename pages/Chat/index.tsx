import React, { useEffect, useState } from "react";
import ChatView from "./view";
import { User } from "@/domain/entities/User";
import { Event } from "@/domain/entities/Events";
import { getAllEvents } from "@/infrastructure/api/EventApi";
import { getAllUsers, leaveEventUsers } from "@/infrastructure/api/UserApi";

const Index = () => {
  const [userEvent, setUserEvent] = useState<User[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true); // Start loading as true

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getAllEvents();
        setEvents(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    const fetchAllUsers = async () => {
      try {
        const users = await getAllUsers();
        setUserEvent(users);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    setTimeout(() => {
      fetchAllUsers();
      fetchEvents();
    }, 2000);
  }, []);

  const leaveUsers = async (payload: any): Promise<void> => {
    try {
      await leaveEventUsers(payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ChatView
      userEvent={userEvent}
      eventFilter={events}
      handleLeaveUser={leaveUsers}
    />
  );
};

export default Index;
