import { Info } from 'lucide-react';

const now = new Date();
const hour = now.getHours();

let marketStatus;

if (hour >= 10 && hour < 11) {
    marketStatus = "Solo mercado oficial activo";
} else if (hour >= 11 && hour < 15) {
    marketStatus = "Mercado oficial y blue activos";
} else if (hour >= 15 && hour < 16) {
    marketStatus = "Solo blue operativo (el oficial ya cerró)";
} else {
    marketStatus = "Fuera de horario cambiario";
}

export const TooltipInfoHours = () => (
<div className="flex items-center text-sm text-gray-500 gap-1">
  <p className='text-md my-6'>{marketStatus}</p>

  {/* Agrupamos solo el ícono */}
  <div className="relative group">
    <Info className="w-4 h-4 text-gray-400 hover:text-gray-200 cursor-pointer" />

    <div className="absolute top-full left-1/2 z-10 mt-2 w-64 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform origin-top bg-gray-800 text-gray-100 text-xs p-3 rounded-md shadow-lg border border-gray-600">
      <p><strong>Dólar Oficial:</strong> 10:00 h – 15:00 h</p>
      <p><strong>Dólar Blue:</strong> 11:00 h – 16:00 h</p>
      <p className="text-gray-400 mt-1">Horarios aproximados del mercado argentino</p>
    </div>
  </div>
</div>


);
