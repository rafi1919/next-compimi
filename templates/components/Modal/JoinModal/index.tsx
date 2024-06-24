import React, { useState, useEffect } from "react";
import ModalLayout from "@/templates/components/Modal/ModalLayout";
import FormInput from "../../FormInput";
import { Button } from "../../Buttons";
import { useRouter } from "next/router";
import Link from "next/link";
import { JoinEventRequest } from "@/domain/entities/JoinEvent";
import { UserService } from "@/aplication/services/UserService";

interface ModalProps {
  open: Boolean;
  onClose: () => void;
  dayId: string;
  eventId: string;
  // onApply: () => void;
}

const JoinModal: React.FC<ModalProps> = ({ open, onClose, dayId, eventId }) => {
  const [animeId, setAnimeId] = useState<string>("");
  const [char, setCharacter] = useState<string>("");
  const router = useRouter();

  const userservice = new UserService();

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    const JoinEventRequest: JoinEventRequest = {
      eventId,
      animeId,
      dayId,
      char,
    };
    try {
      await userservice.joinEventUsers(JoinEventRequest);

      router.push("/chat");
    } catch (error) {
      console.error;
    }
  };

  return (
    <ModalLayout open={open} onClose={onClose}>
      <form className="flex flex-col gap-4" onSubmit={handleJoin}>
        <FormInput
          value={animeId}
          name="animeId"
          type="text"
          placeholder="title"
          onChange={(e: any) => setAnimeId(e.target.value)}
        />
        <FormInput
          value={char}
          name="character"
          type="text"
          placeholder="character"
          onChange={(e: any) => setCharacter(e.target.value)}
        />
        <Button text="JOIN" type="submit" />
      </form>
    </ModalLayout>
  );
};

export default JoinModal;
