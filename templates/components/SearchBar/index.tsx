import { FaSearch } from "react-icons/fa";

interface searchProps {
  onChange?: any;
  value?: any;
}
const SearchBar = ({ onChange, value }: searchProps) => {
  return (
    <div className="pb-2 mx-auto text-gray-600">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none w-full"
        type="search"
        name="search"
        placeholder="Search"
        onChange={onChange}
        value={value}
      />
      {/* <button type="submit" className="absolute right-0  mt-3 mr-4">
        <FaSearch />
      </button> */}
    </div>
  );
};

export default SearchBar;
