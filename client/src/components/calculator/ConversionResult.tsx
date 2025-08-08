import { CurrencyFormatter } from '../ui/CurrencyFormatter';

interface ConversionResultProps {
  conversion: { compra: string; venta: string };
  convertFrom: string;
  darkMode: boolean;
}

export const ConversionResult = ({ conversion, convertFrom, darkMode }: ConversionResultProps) => {
  if (!conversion.compra && !conversion.venta) return null;

  return (
    <div className={`${darkMode ? 'bg-stone-700' : 'bg-stone-200'} rounded-lg p-4 mt-4`}>
      <h3 className="font-semibold mb-3">Resultado de Conversión:</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Cotización Compra:</span>
          <CurrencyFormatter 
            value={conversion.compra} 
            currency={convertFrom === 'ARS' ? 'USD' : 'ARS'} 
            darkMode={darkMode}
          />
        </div>
        {conversion.venta !== 'N/A' && (
          <div className="flex justify-between">
            <span>Cotización Venta:</span>
            <CurrencyFormatter 
              value={conversion.venta} 
              currency={convertFrom === 'ARS' ? 'USD' : 'ARS'}
              darkMode={darkMode} 
            />
          </div>
        )}
      </div>
    </div>
  );
}; 