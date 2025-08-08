import { DolarData } from '../../services/DolarService';

interface CurrentCotizacionInfoProps {
  selectedCotizacion: string;
  cotizacionData: DolarData | null;
  darkMode: boolean;
}

export const CurrentCotizacionInfo = ({ selectedCotizacion, cotizacionData, darkMode }: CurrentCotizacionInfoProps) => {
  if (!cotizacionData) return null;

  return (
    <div className={`${darkMode ? 'bg-green-900' : 'bg-green-300'} rounded-lg p-4`}>
      <h3 className="font-semibold mb-2">{selectedCotizacion} - Cotización Actual</h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className={`${darkMode ? 'text-gray-100' : 'text-gray-950'}`}>Compra:</span>
          <div className={`${darkMode ? 'text-green-400' : 'text-green-800'} font-bold text-lg`}>
            ${cotizacionData.compra}
          </div>
        </div>
        {cotizacionData.venta && (
          <div>
            <span className={`${darkMode ? 'text-gray-100' : 'text-gray-950'}`}>Venta:</span>
            <div className={`${darkMode ? 'text-green-400' : 'text-green-800'} font-bold text-lg`}>
              ${cotizacionData.venta}
            </div>
          </div>
        )}
      </div>
      <div className={`mt-2 text-xs ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Última actualización: {cotizacionData.fechaActualizacion}
      </div>
    </div>
  );
}; 