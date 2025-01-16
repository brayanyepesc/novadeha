import { Searchbar } from "./components/Searchbar";
import { Title } from "./components/Title";
import { UsersList } from "./components/UsersList";
import users from './data/data.json'

function App() {
  return (
    <main
      aria-label="Contact list"
      className="w-full max-h-screen h-screen p-5"
    >
      <header className="flex justify-between">
        <Title text="Contact List" />
        <Searchbar />
      </header>
      <section className="w-full h-[400px] bg-gray-100 mt-5 rounded-lg p-5">
        <UsersList users={users} />
      </section>
      <p>User Details</p>
    </main>
  );
}

export default App;
