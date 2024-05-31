import DetailEvent from "./view";
import { useRouter } from "next/router";
import { EventData, DayListData } from "@/api";

const index = () => {
  const route = useRouter();
  const { asPath } = route;

  const routeParts = asPath.split("/");
  const eventName = routeParts[routeParts.length - 1].replace(/\+/g, " ");

  const pathEvent = EventData.find(
    (data) => data.name.toLocaleLowerCase() === eventName
  );
  console.log(pathEvent);

  const ListData = DayListData.find((data) => data.eventId === pathEvent?.id);
  console.log(pathEvent);

  return <DetailEvent dataEvent={pathEvent} dayListData={ListData} />;
};

export default index;
