import './styles/global.css'
import { useState, lazy, Suspense } from 'react';
import MainContent from './components/sections/content/MainContent';
const MainLayout = lazy(() => import('./layout/MainLayout'));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-zinc-950' : 'bg-gray-50'}`}>
      <MainLayout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Suspense fallback={<div>Cargando contenido...</div>}>
          <MainContent darkMode={darkMode} />
        </Suspense>
      </MainLayout>
    </div>
  );
}

export default App;