interface InputProps {
  text: string;
  type?: string;
}

const Tags = ({ text }: InputProps) => {
  return (
    <p className="py-1 px-4 text-xs bg-white border-[1px] border-black rounded-full hover:bg-green-400 hover:text-white">
      {text}
    </p>
  );
};

export default Tags;
