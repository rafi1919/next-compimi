import React, { ReactNode, useLayoutEffect, useRef } from "react";

interface ModalProps {
  open: Boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (open) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }
  }, [open]);

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="bg-paper  rounded-xl border-dark border-2 transition-500 "
    >
      <div className="h-[50px] border-b-2 border-dark"></div>
      <div className="p-4 ">{children}</div>
    </dialog>
  );
};

export default Modal;
