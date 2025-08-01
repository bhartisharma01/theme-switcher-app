import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed w-full p-4 bg-gray-200 dark:bg-gray-800 flex justify-between items-center z-50 shadow-md">
      <Link to="/" className="text-lg font-bold">Theme App</Link>
      
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className="p-2 rounded"
      >
        <option value="theme1">Theme 1 - Minimal</option>
        <option value="theme2">Theme 2 - Dark Sidebar</option>
        <option value="theme3">Theme 3 - Playful</option>
      </select>

      
    </header>
  );
};

export default Header;
