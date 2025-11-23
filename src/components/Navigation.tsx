import { Home, Briefcase, FolderGit2, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'projects', icon: FolderGit2, label: 'Projects' },
  ];

  return (
    <nav className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-full px-6 py-4 shadow-2xl border border-gray-200 dark:border-gray-700 flex items-center gap-2">
        {navItems.map((item, index) => (
          <div key={item.id} className="flex items-center">
            <button
              onClick={() => onNavigate(item.id)}
              className={`group relative p-3 rounded-full transition-all duration-300 transform ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-110'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
              } hover:scale-110`} // Icon pop-up on hover
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5" />

              {/* Tooltip */}
              <span
                className="absolute -top-12 left-1/2 -translate-x-1/2 
                           bg-gray-900 dark:bg-white text-white dark:text-gray-900 
                           px-3 py-1 rounded-lg text-sm whitespace-nowrap
                           opacity-0 group-hover:opacity-100 
                           translate-y-2 group-hover:translate-y-0
                           transition-all duration-300 ease-out 
                           pointer-events-none shadow-lg"
              >
                {item.label}
              </span>
            </button>

            {index < navItems.length - 1 && (
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2" />
            )}
          </div>
        ))}

        {/* Divider */}
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2" />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="group relative p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-300 transform hover:scale-110"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          <span
            className="absolute -top-12 left-1/2 -translate-x-1/2 
                       bg-gray-900 dark:bg-white text-white dark:text-gray-900 
                       px-3 py-1 rounded-lg text-sm whitespace-nowrap
                       opacity-0 group-hover:opacity-100 
                       translate-y-2 group-hover:translate-y-0
                       transition-all duration-300 ease-out 
                       pointer-events-none shadow-lg"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </span>
        </button>
      </div>
    </nav>
  );
};
