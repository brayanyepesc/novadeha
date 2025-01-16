import { Searchbar } from "./components/Searchbar";
import { Title } from "./components/Title";

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
      <p>User List</p>
      <p>User Details</p>
    </main>
  );
}

export default App;
