import { useState, useEffect } from "react";
import ModalLayout from "@/templates/components/Modal/ModalLayout";
import SearchBar from "../../SearchBar";
import { Button } from "../../Buttons";
import Link from "next/link";

interface ModalProps {
  open: Boolean;
  onClose: () => void;
  // onApply: () => void;
}

const JoinModal: React.FC<ModalProps> = ({ open, onClose }) => {
  const handleJoin = () => {
    // route.push('/Chat')
    console.log("test");
  };

  return (
    <ModalLayout open={open} onClose={onClose}>
      <form className="flex flex-col gap-4">
        <SearchBar />
        <SearchBar />

        <Link href={"/Chat"}>
          <Button text="JOIN" />
        </Link>
      </form>
    </ModalLayout>
  );
};

export default JoinModal;
