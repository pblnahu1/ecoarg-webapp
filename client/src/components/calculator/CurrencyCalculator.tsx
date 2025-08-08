import { Calculator } from 'lucide-react';
import { DolarData } from '../../services/DolarService';
import { CotizacionSelector } from './CotizacionSelector';
import { ConversionDirection } from './ConversionDirection';
import { AmountInput } from './AmountInput';
import { ConversionResult } from './ConversionResult';
import { CurrentCotizacionInfo } from './CurrentCotizacionInfo';

interface CurrencyCalculatorProps {
  cotizaciones: DolarData[];
  selectedCotizacion: string;
  amount: string;
  convertFrom: string;
  conversion: { compra: string; venta: string };
  selectedCotizacionData: DolarData | null;
  onCotizacionChange: (cotizacion: string) => void;
  onDirectionChange: (direction: string) => void;
  onAmountChange: (amount: string) => void;
  darkMode: boolean;
}

export const CurrencyCalculator = ({
  cotizaciones,
  selectedCotizacion,
  amount,
  convertFrom,
  conversion,
  selectedCotizacionData,
  onCotizacionChange,
  onDirectionChange,
  onAmountChange,
  darkMode,
}: CurrencyCalculatorProps) => {
  return (
    <div
      className={`
        rounded-2xl p-6 shadow-md border
        ${darkMode
          ? "bg-white/5 border-white/10 text-white"
          : "bg-white border-gray-200 text-gray-800"}
      `}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
          <Calculator size={20} />
        </div>
        <h2 className="text-lg tracking-tight">
          Calculadora de Conversión
        </h2>
      </div>

      <div className="space-y-5">
        <CotizacionSelector
          cotizaciones={cotizaciones}
          selectedCotizacion={selectedCotizacion}
          onCotizacionChange={onCotizacionChange}
          darkMode={darkMode}
        />

        <ConversionDirection
          convertFrom={convertFrom}
          onDirectionChange={onDirectionChange}
          darkMode={darkMode}
        />

        <AmountInput
          amount={amount}
          convertFrom={convertFrom}
          onAmountChange={onAmountChange}
          darkMode={darkMode}
        />

        {amount && (
          <ConversionResult
            conversion={conversion}
            convertFrom={convertFrom}
            darkMode={darkMode}
          />
        )}

        <CurrentCotizacionInfo
          selectedCotizacion={selectedCotizacion}
          cotizacionData={selectedCotizacionData}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};
