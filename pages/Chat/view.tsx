import React, { useState, useEffect, useRef } from "react";
import Layout from "@/templates/components/Layout";
import { EventList } from "@/domain/entities/User";
import { Button } from "@/templates/components/Buttons";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Icons from "@/templates/components/Icon";
import { motion, AnimatePresence } from "framer-motion";

interface EventProps {
  userEvent: any;
  eventFilter: any;
  handleLeaveUser: any;
}

const ChatView: React.FC<EventProps> = ({
  userEvent,
  eventFilter,
  handleLeaveUser,
}: EventProps) => {
  const [selectedEvent, setselectedEvent] = useState<EventList | null>(null);
  const [users, setUsers] = useState<any>([]);
  const [messages, setMessages] = useState<
    { text: string; isCurrentUser: boolean }[]
  >([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const chatViewRef = useRef<HTMLDivElement>(null);
  const route = useRouter();

  const dayName = "dayOne";

  useEffect(() => {
    if (userEvent.eventlist && userEvent.eventlist.length > 0) {
      setselectedEvent(userEvent.eventlist[0]);
      setUsers(userEvent);
    }
  }, [userEvent?.eventlist]);

  const chatEvent = (item: any) => {
    setselectedEvent(item);
  };

  const eventLookop = eventFilter.reduce(
    (acc: { [key: string]: string }, event: { _id: string; name: string }) => {
      acc[event._id] = event.name;
      return acc;
    },
    {}
  );

  const userId = useSelector((state: any) => state.auth.userData.userId);
  useEffect(() => {
    const roomId = `${selectedEvent?.eventId}-${selectedEvent?.dayId}-${selectedEvent?.animeId}`;

    if (roomId === undefined || userId === undefined) {
      return;
    }

    const newSocketInstance = new WebSocket(
      `ws://localhost:8080/admin?roomId=${roomId}&userId=${userId}`
    );
    setSocket(newSocketInstance);

    newSocketInstance.addEventListener("message", (event) => {
      console.log("WebSocket message received:", event);
      const messageData = JSON.parse(event.data);
      // console.log(messageData)

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

  console.log(userId);

  const leaveEventUsers = async (): Promise<void> => {
    try {
      const payload = {
        eventId: selectedEvent?.eventId,
        dayId: selectedEvent?.dayId,
      };
      // Check if both values exist before proceeding
      if (!payload.eventId || !payload.dayId) {
        console.error("Invalid event or day ID");
        return;
      }

      await handleLeaveUser(payload);
      route.push(`/detailevent/${selectedEvent?.eventId}`);
      console.log("User successfully left the event");
    } catch (error) {
      console.error("An error occurred while leaving the event:", error);
    }
  };

  const menuContainer = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
  return (
    <Layout>
      <div className="py-2 lg:px-0 md:px-0 px-2 h-[100vh] ">
        <div className="p-4 bg-paper rounded-[40px] w-full h-full ">
          {userEvent?.eventlist?.length > 0 ? (
            <>
              <div className="flex">
                {users?.eventlist?.map((item: any, index: any) => (
                  <div key={index} onClick={() => chatEvent(item)}>
                    <div className="w-[60px] h-[60px] bg-slate-600 rounded-full cursor-pointer">
                      <img
                        src="../../banner.jpg"
                        alt="banner"
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <p className="text-dark font-semibold text-sm text-center">
                      {eventLookop[item.eventId].slice(0, 8)}...
                    </p>
                  </div>
                ))}
              </div>
              <div className="pt-6 ">
                <div className="rounded-md w-full border-dark border-2 h-[70vh] mb-3">
                  <div className="h-[50px] border-b-2 border-dark flex justify-between items-center">
                    <p className="text-dark w-fit font-bold flex-grow text-center">
                      <span>{eventLookop[selectedEvent?.eventId || ""]} </span>{" "}
                      :{" "}
                      <span>
                        {selectedEvent?.dayId === dayName ? "Day 1" : "Day 2"}{" "}
                      </span>{" "}
                      - {selectedEvent?.animeId}
                    </p>
                    <div onClick={() => setMenuOpen(!menuOpen)}>
                      <Icons
                        icon="line-md:menu"
                        className="ml-auto p-2 w-10 h-10"
                      />
                      <AnimatePresence>
                        {menuOpen ? (
                          <motion.div
                            animate={menuOpen ? "visible" : "hidden"}
                            initial="hidden"
                            exit="hidden"
                            className={`mt-3 text-xs flex flex-col gap-2 text-white absolute  -ml-[50px]`}
                            variants={menuContainer}
                          >
                            <p className="rounded-md bg-leaf p-2 text-right">
                              change char
                            </p>
                            <p
                              className="rounded-md bg-red-600 p-2 text-right"
                              onClick={leaveEventUsers}
                            >
                              walk out
                            </p>
                          </motion.div>
                        ) : (
                          <></>
                        )}
                      </AnimatePresence>
                    </div>
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
                          message.isCurrentUser
                            ? "justify-end"
                            : "justify-start"
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
                    <button
                      className="w-full h-full rounded-xl bg-leaf text-dark font-semibold border-dark border-2 text-sm"
                      onClick={sendMessage}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <p>userDidnt Joint</p>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ChatView;
