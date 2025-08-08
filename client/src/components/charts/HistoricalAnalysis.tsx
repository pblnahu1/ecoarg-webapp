import { TrendingUp } from 'lucide-react';
import { DolarData } from '../../services/DolarService';
import { HistoricalChart } from './HistoricalChart';
import { TimeRangeSelector } from './TimeRangeSelector';

interface HistoricalDataPoint {
  fecha: string;
  compra: number;
  venta: number;
  fullDate: string;
}

interface HistoricalAnalysisProps {
  data: HistoricalDataPoint[];
  timeRange: string;
  selectedCotizacion: DolarData | null;
  onTimeRangeChange: (range: string) => void;
  darkMode: boolean;
}

export const HistoricalAnalysis = ({
  data,
  timeRange,
  selectedCotizacion,
  onTimeRangeChange,
  darkMode
}: HistoricalAnalysisProps) => {
  return (
    <div className={`
        rounded-2xl p-6 shadow-md border
        ${darkMode
          ? "bg-white/5 border-white/10 text-white"
          : "bg-white border-gray-200 text-gray-800"}
      `}>
      {/* <p className="text-gray-400 italic text-sm">No hay datos disponibles para el período seleccionado.</p> */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <TrendingUp className="mr-3 text-green-400" size={24} />
          <div className=''>
            <h2 className={`${darkMode ? 'text-white' : 'text-black'} text-lg tracking-tight`}>Evolución Histórica</h2>
            <p className="text-sm text-gray-400">
              Datos históricos provienen de fuentes externas y pueden no coincidir con la cotización actual.
            </p>
          </div>
        </div>
        <TimeRangeSelector
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
          darkMode={darkMode}
        />
      </div>

      <HistoricalChart
        data={data}
        selectedCotizacion={selectedCotizacion}
      />
    </div>
  );
}; 