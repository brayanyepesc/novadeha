import { useState } from "react";
import { Searchbar } from "./components/Searchbar";
import { Title } from "./components/Title";
import { UsersList } from "./components/UsersList";
import users from "./data/data.json";
import { User } from "./types/types";
import { ErrorMessage } from "./components/ErrorMessage";

function App() {
  const [search, setSearch] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const filteredUsers: User[] = users.filter((user: User) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <main
      aria-label="Contact list"
      className="w-full max-h-screen h-screen p-5"
    >
      <header className="flex justify-between">
        <Title text="Contact List" />
        <Searchbar search={search} setSearch={setSearch} />
      </header>
      <section className="w-full h-[400px] mt-5 rounded-lg p-5">
        {filteredUsers.length > 0 ? (
          <UsersList users={filteredUsers} onSelectUser={setSelectedUser} />
        ) : (
          <ErrorMessage message="Oops! We couldn’t find anything matching your search." />
        )}
      </section>
      <footer className="bg-gray-100 rounded-lg w-full h-48">{selectedUser && <p>User Details</p>}</footer>
    </main>
  );
}

export default App;
