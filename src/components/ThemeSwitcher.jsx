import { FiMoon, FiSun } from 'react-icons/fi';
import useThemeSwitcher from '../hooks/ThemeSwitcher';

export default function ThemeSwitcher() {
    const [activeTheme, setTheme] = useThemeSwitcher(false);
    return (
     <div onClick={() => setTheme(activeTheme)}
        aria-label="Theme Switcher"
        className="bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer">
        {activeTheme === 'dark' ? (
            <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
        ) : (
            <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
        )}
    </div>
    );
}