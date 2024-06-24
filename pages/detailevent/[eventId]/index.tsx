import React, { useEffect, useState } from "react";
import DetailEvent from "./view";
import { useRouter } from "next/router";
import { Event } from "@/domain/entities/Events";
import { Day } from "@/domain/entities/Day";
import { EventService } from "@/aplication/services/EventService";
import { DayService } from "@/aplication/services/DayService";

const Index: React.FC = () => {
  const router = useRouter();
  const { asPath } = router;
  const pathPop = asPath.split("/").pop() || "";

  const [events, setEvents] = useState<Event[]>([]);
  const eventService = new EventService();
  const [days, setDays] = useState<Day[]>([]);
  const dayService = new DayService();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await eventService.getAllEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Failed to fetch events", error);
      }
    };

    const fetchDays = async () => {
      try {
        const fetchedDays = await dayService.getAllDays(pathPop);
        setDays(fetchedDays);
      } catch (error) {
        console.error("Failed to fetch days", error);
      }
    };

    fetchEvents();
    fetchDays();
  }, [asPath]);

  const pathEvent = events.find((event) => event.id === pathPop);
  // console.log(days)

  return <DetailEvent dataEvent={pathEvent} dayListData={days} />;
};

export default Index;
