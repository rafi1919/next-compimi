import { useState, useEffect } from "react";
import ModalLayout from "@/templates/components/Modal/ModalLayout";
import LoginSection from "@/templates/components/LoginSection";

interface ModalProps {
  open: Boolean;
  onClose: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ open, onClose }) => {
  return (
    <ModalLayout open={open} onClose={onClose}>
      <LoginSection onClose={onClose} />
    </ModalLayout>
  );
};

export default LoginModal;
