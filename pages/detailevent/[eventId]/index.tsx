import React, { useEffect, useState } from "react";
import DetailEvent from "./view";
import { useRouter } from "next/router";
import { Event } from "@/domain/entities/Events";
import { Day } from "@/domain/entities/Day";
import { getAllDays } from "@/infrastructure/api/DayApi";
import { getEventById } from "@/infrastructure/api/EventApi";

const Index: React.FC = () => {
  const router = useRouter();
  const { asPath } = router;
  const pathPop = asPath.split("/").pop() || "";

  const [events, setEvents] = useState<Event[]>([]);
  const [days, setDays] = useState<Day[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getEventById(pathPop);
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Failed to fetch events", error);
      }
    };

    const fetchDays = async () => {
      try {
        const fetchedDays = await getAllDays(pathPop);
        setDays(fetchedDays);
      } catch (error) {
        console.error("Failed to fetch days", error);
      }
    };

    fetchEvents();
    fetchDays();
  }, [asPath]);

  // console.log(days)

  return <DetailEvent dataEvent={events} dayListData={days} />;
};

export default Index;
