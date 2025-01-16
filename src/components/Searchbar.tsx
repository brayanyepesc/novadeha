import { LuSearch } from "react-icons/lu";

export const Searchbar = () => {
  return (
    <form role="search" aria-label="Users filter form" className="flex justify-center items-center gap-4">
      <LuSearch className="w-5 h-5 text-novaviolet"/>
      <input
        type="text"
        id="search"
        className="w-full p-1 border rounded-lg outline-novaviolet"
        placeholder="Search an user"
      />
    </form>
  );
};
