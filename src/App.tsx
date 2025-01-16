import { useCallback, useState } from "react";
import { Searchbar } from "./components/Searchbar";
import { Title } from "./components/Title";
import { UsersList } from "./components/UsersList";
import users from "./data/data.json";
import { User } from "./types/types";
import ErrorMessage from "./components/ErrorMessage";
import { LuPlus } from "react-icons/lu";
import UserDetails from "./components/UserDetails";
import { usePagination } from "./hooks/usePagination";
import { useFilterUsers } from "./hooks/useFilterUsers";
import { Pagination } from "./components/Pagination";
import Swal from "sweetalert2";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  const [search, setSearch] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const filteredUsers = useFilterUsers(users, search);
  const { currentUsers, currentPage, maxPage, next, prev } = usePagination({
    users: filteredUsers,
    usersPerPage: 5,
  });
  const createUser = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Functionality not implemented yet!",
    });
  }, []);
  return (
    <main
      aria-label="Contact list"
      className="w-full max-h-screen h-screen p-5 dark:bg-gray-900"
    >
      <header className="flex justify-between">
        <Title text="Contact List" />
        <div className="flex justify-center items-cenetr gap-2">
          <ThemeToggle />
          <Searchbar search={search} setSearch={setSearch} />
          <button
            onClick={createUser}
            className="p-2 rounded-full bg-novaviolet cursor-pointer text-white"
          >
            <LuPlus />
          </button>
        </div>
      </header>
      <section className="w-full min-h-[400px] mt-5 rounded-lg p-5">
        {filteredUsers.length > 0 ? (
          <UsersList users={currentUsers} onSelectUser={setSelectedUser} />
        ) : (
          <ErrorMessage message="Oops! We couldn’t find anything matching your search." />
        )}
        <Pagination
          currentPage={currentPage}
          maxPage={maxPage}
          onNext={next}
          onPrev={prev}
        />
      </section>
      {selectedUser && <UserDetails user={selectedUser} />}
    </main>
  );
}

export default App;
