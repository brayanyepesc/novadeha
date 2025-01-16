import { LuMoon, LuSun } from "react-icons/lu";
import { useDarkMode } from "../hooks/userDarkMode";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 bg-novaviolet dark:bg-gray-800 text-white rounded-full"
      aria-label={isDarkMode ? "Change to light mode" : "Change to dark mode"}
    >
      {isDarkMode ? <LuSun /> : <LuMoon />}
    </button>
  );
};
