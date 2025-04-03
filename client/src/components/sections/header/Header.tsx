
import { Sun, Moon } from "lucide-react";

interface HeaderContentProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header = ({darkMode, setDarkMode}: HeaderContentProps) => {

  return (
    <header className={`px-6 py-4`}>
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div className="text-center my-6">
          <h1 className={`text-6xl font-bold py-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          EcoARG
          </h1>
          <h2  className={`text-xl py-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          🤷‍♂️ No sabemos qué pasará mañana, pero hoy te traemos los datos
          </h2>
        </div>
        <div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg ${darkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-100'
              }`}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-gray-200" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
