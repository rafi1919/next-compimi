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

    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <dialog ref={dialogRef} onClick={handleBackdropClick}  className="bg-slate-700 p-4 rounded-lg border-[1px] border-white">
            <div>
                {children}
            </div>
        </dialog>
    );
};

export default Modal;
