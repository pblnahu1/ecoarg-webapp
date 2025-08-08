import { useState } from 'react';
import { useDolarData } from '../../hooks/useDolarData';
import { useCurrencyConverter } from '../../hooks/useCurrencyConverter';
import { useHistoricalData } from '../../hooks/useHistoricalData';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ErrorDisplay } from '../ui/ErrorDisplay';
import { CurrencyCalculator } from '../calculator/CurrencyCalculator';
import { HistoricalAnalysis } from '../charts/HistoricalAnalysis';

interface DolarCalculatorChartsProps {
  darkMode: boolean;
}

export const DolarCalculatorCharts = ({darkMode}: DolarCalculatorChartsProps) => {
  const [selectedCotizacion, setSelectedCotizacion] = useState('Oficial');
  const [amount, setAmount] = useState('');
  const [convertFrom, setConvertFrom] = useState('ARS');
  const [timeRange, setTimeRange] = useState('7d');

  // Custom hooks for data management
  const { cotizaciones, loading, error, getSelectedCotizacion } = useDolarData();
  const selectedCotizacionData = getSelectedCotizacion(selectedCotizacion);
  const conversion = useCurrencyConverter(amount, convertFrom, selectedCotizacionData);
  const historicalData = useHistoricalData(selectedCotizacionData, timeRange);

  // Loading and error states
  if (loading) {
    return <LoadingSpinner message="Cargando cotizaciones del dólar..." />;
  }

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  return (
    <div className={`${darkMode ? "bg-stone-800" : "bg-gray-200"}`}>
      <div className="max-w-8xl mx-auto">
        <h1></h1> 
        <div className="grid lg:grid-cols-2 gap-8">
          <CurrencyCalculator
            cotizaciones={cotizaciones}
            selectedCotizacion={selectedCotizacion}
            amount={amount}
            convertFrom={convertFrom}
            conversion={conversion}
            selectedCotizacionData={selectedCotizacionData}
            onCotizacionChange={setSelectedCotizacion}
            onDirectionChange={setConvertFrom}
            onAmountChange={setAmount}
            darkMode={darkMode}
          />

          <HistoricalAnalysis
            data={historicalData}
            timeRange={timeRange}
            selectedCotizacion={selectedCotizacionData}
            onTimeRangeChange={setTimeRange}
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  );
};