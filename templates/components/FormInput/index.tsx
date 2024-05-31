interface InputProps {
  value: string;
  name: string;
  type: string;
  placeholder: string;
  onChange?: any;
}

const FormInput = ({
  onChange,
  placeholder,
  value,
  name,
  type,
}: InputProps) => {
  return (
    <div className="pb-2 mx-auto text-gray-600">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none w-full"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
