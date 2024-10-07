import React from "react";

interface CardProps {
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}

export default function Button({ text, onClick, type }: CardProps) {
  return (
    <button
      className="w-full px-3 py-1 rounded-xl bg-leaf text-dark font-semibold border-dark border-2 text-sm"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
