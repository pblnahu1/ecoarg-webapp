import { Sun, Moon, Github, Linkedin } from "lucide-react";

interface HeaderContentProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header = ({ darkMode, setDarkMode }: HeaderContentProps) => {
  return (
    // sticky top-4 z-50
    <header
      className={`
        sticky top-4 z-50 mx-6 rounded-2xl border backdrop-blur-md transition
        shadow-lg px-6 py-2
        ${darkMode ? 'bg-white/10 border-white/10' : 'bg-black/10 border-black/10'}
      `}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left: Logo + Description */}
        <div className="text-center sm:text-left">
          <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            EcoARG
          </h1>
          <p className={`text-sm sm:text-md ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            🤷‍♂️ No sabemos qué pasará mañana, pero hoy te traemos los datos
          </p>
          {/* <span className={`text-sm ${darkMode ? 'text-lime-400' : 'text-lime-700'} block mt-1`}>
            {new Date().toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' })}
          </span> */}
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all duration-200
              ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'}
            `}
            title="Toggle theme"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-300 transition-transform hover:rotate-180" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700 transition-transform hover:rotate-180" />
            )}
          </button>

          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-all duration-200
              ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'}
            `}
            title="GitHub"
          >
            <Github className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
          </a>

          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-all duration-200
              ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'}
            `}
            title="LinkedIn"
          >
            <Linkedin className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
