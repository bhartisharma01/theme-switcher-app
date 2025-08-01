import { Link } from "react-router-dom";
import useTheme from "../context/ThemeContext";

export const Header = () => {
  const { themeMode, setTheme } = useTheme();

  return (
     <header className="inset-x-0 top-0 fixed z-50 bg-[rgb(var(--bg))] text-[rgb(var(--text))] p-4 shadow flex justify-between items-center transition-colors duration-300 ease-in-out max-w-full">
      <div className="flex-1">
        <h1 className="font-bold text-lg">Theme App</h1>
      </div>
      <nav className="flex-1 flex justify-center gap-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
      <div className="flex-1 flex justify-end">
        <select
          value={themeMode}
          onChange={(e) => setTheme(e.target.value as any)}
          className="border p-1 rounded bg-[rgb(var(--bg))] text-[rgb(var(--text))] border-[rgb(var(--text))] transition-colors duration-300 ease-in-out"
        >
          <option value="theme1">Theme 1 - Light</option>
          <option value="theme2">Theme 2 - Dark</option>
          <option value="theme3">Theme 3 - Colorful</option>
        </select>
      </div>
    </header>
  );
};