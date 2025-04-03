import './styles/global.css'
import { useState, lazy, Suspense } from 'react';
import MainContent from './components/sections/content/MainContent';
const MainLayout = lazy(() => import('./layout/MainLayout'));

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-stone-900' : 'bg-gray-100'}`}>
      <MainLayout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Suspense fallback={<div>Cargando contenido...</div>}>
          <MainContent darkMode={darkMode} />
        </Suspense>
      </MainLayout>
    </div>
  );
}

export default App;