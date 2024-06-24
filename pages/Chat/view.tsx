import React, { useState, useEffect, useRef } from "react";
import Layout from "@/templates/components/Layout";
import { EventList } from "@/domain/entities/User";
import { Button } from "@/templates/components/Buttons";

const Dummy = () => {
  return <div className="bg-slate-600 rounded-xl w-full h-[300px]"></div>;
};

interface EventProps {
  eventData: any;
  eventFilter: any;
}

const ChatView: React.FC<EventProps> = ({
  eventData,
  eventFilter,
}: EventProps) => {
  const [selectedEvent, setselectedEvent] = useState<EventList | null>(null);
  const [messages, setMessages] = useState<
    { text: string; isCurrentUser: boolean }[]
  >([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const chatViewRef = useRef<HTMLDivElement>(null);

  const dayName = "dayOne";

  useEffect(() => {
    if (eventData.eventList && eventData.eventList.length > 0) {
      setselectedEvent(eventData.eventList[0]);
    }
  }, [eventData.eventList]);

  const chatEvent = (item: any) => {
    setselectedEvent(item);
  };

  const eventList = eventData.eventList || [];

  const eventLookop = eventFilter.reduce(
    (acc: { [key: string]: string }, event: { id: string; name: string }) => {
      acc[event.id] = event.name;
      return acc;
    },
    {}
  );

  useEffect(() => {
    const roomId = `${selectedEvent?.eventId}-${selectedEvent?.dayId}-${selectedEvent?.animeId}`;
    const userId = localStorage.getItem("userId");

    if (roomId === undefined || userId === undefined) {
      return;
    }

    const newSocketInstance = new WebSocket(
      `ws://localhost:9090/chat?roomId=${roomId}&userId=${userId}`
    );
    setSocket(newSocketInstance);

    newSocketInstance.addEventListener("message", (event) => {
      console.log("WebSocket message received:", event);
      const messageData = JSON.parse(event.data);

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: messageData?.message,
          isCurrentUser: messageData?.userId === userId,
        },
      ]);
    });

    newSocketInstance.addEventListener("error", (error) => {
      console.error("WebSocket encountered error:", error);
    });

    const chat = chatViewRef.current;
    chat?.scrollTo(0, chat?.scrollHeight);

    return () => {
      newSocketInstance.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && inputMessage.trim() !== "") {
      const messageData = {
        roomId: `${selectedEvent?.eventId}-${selectedEvent?.dayId}-${selectedEvent?.animeId}`,
        userId: localStorage.getItem("userId"),
        message: inputMessage,
      };

      socket.send(JSON.stringify(messageData));
      setInputMessage("");
    }
  };

  return (
    <Layout>
      <div className=" px-3">
        <div className="flex gap-5 p-4">
          {eventList.map((item: any, index: any) => (
            <div key={index} onClick={() => chatEvent(item)}>
              <div className="w-[60px] h-[60px] bg-slate-600 rounded-full cursor-pointer">
                <img
                  src="../../banner.jpg"
                  alt="banner"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <p className="text-dark font-semibold text-sm text-center">
                {eventLookop[item.eventId].slice(0, 8)}
              </p>
            </div>
          ))}
        </div>

        {eventList.length === 0 ? (
          <p>user didnr join</p>
        ) : (
          <>
            <div className=" ">
              <div className="rounded-md w-full border-dark border-2 h-[70vh] mb-3">
                <div className="h-[50px] border-b-2 border-dark flex justify-center items-center">
                  {/* <p className="text-dark w-fit font-bold">
                    <span>Day 1 </span> : <span>Day 2 </span>  - Jujutsu Kaisen
                  </p> */}
                  <p className="text-dark w-fit font-bold">
                    <span>{eventLookop[selectedEvent?.eventId || ""]} </span> :{" "}
                    <span>
                      {selectedEvent?.dayId === dayName ? "Day 1" : "Day 2"}{" "}
                    </span>{" "}
                    - {selectedEvent?.animeId}
                  </p>
                </div>
                <div className="h-[60vh] w-full p-2 overflow-y-auto">
                  {/* <p className="mr-auto p-2 text-sm rounded-md rounded-tl-none bg-indigo text-dark border-2 border-dark w-fit">
                    Absen besok cuy
                  </p>
                  <p className="ml-auto p-2 text-sm rounded-md rounded-tr-none bg-leaf text-dark border-2 border-dark w-fit">
                    Saya rafi jadi mechamaru besok
                  </p> */}
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`my-2 flex ${
                        message.isCurrentUser ? "justify-end" : "justify-start"
                      } overflow-y-auto px-5`}
                    >
                      <div className="flex-col">
                        <p
                          className={`flex text-sm rounded-md border-dark w-fit ${
                            message.isCurrentUser
                              ? "rounded-tr-none bg-leaf text-dark border-2 "
                              : "rounded-tl-none bg-indigo text-dark border-2"
                          } px-4 py-2`}
                        >
                          {message.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-10 gap-2">
                <div className="col-span-8">
                  <input
                    type="text"
                    className="border-2 border-gray-300 bg-dark h-10 p-6  text-paper rounded-lg text-sm focus:outline-none w-full"
                    placeholder="Type something"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                  />
                </div>
                <div className="col-span-2">
                  <Button text="Send" onClick={sendMessage} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default ChatView;
