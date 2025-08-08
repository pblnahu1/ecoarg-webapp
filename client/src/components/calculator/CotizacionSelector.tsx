import { DolarData } from '../../services/DolarService';

interface CotizacionSelectorProps {
  cotizaciones: DolarData[];
  selectedCotizacion: string;
  onCotizacionChange: (cotizacion: string) => void;
  darkMode: boolean
}

export const CotizacionSelector = ({ 
  cotizaciones, 
  selectedCotizacion, 
  onCotizacionChange,
  darkMode
}: CotizacionSelectorProps) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Tipo de Cotización</label>
      <select 
        value={selectedCotizacion}
        onChange={(e) => onCotizacionChange(e.target.value)}
        className={`w-full ${darkMode ? 'bg-stone-800 border-stone-600' : 'bg-stone-300 border-stone-400' } border  rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 focus:border-transparent`}
      >
        {cotizaciones.map(cotizacion => (
          <option key={cotizacion.nombre} value={cotizacion.nombre}>
            {cotizacion.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}; 