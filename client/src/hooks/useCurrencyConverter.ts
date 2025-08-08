import { useMemo } from 'react';
import { DolarData } from '../services/DolarService';

interface ConversionResult {
  compra: string;
  venta: string;
}

export const useCurrencyConverter = (
  amount: string,
  convertFrom: string,
  selectedCotizacion: DolarData | null
) => {
  const conversion = useMemo((): ConversionResult => {
    if (!amount || isNaN(Number(amount))) return { compra: '0', venta: '0' };
    
    if (!selectedCotizacion) return { compra: '0', venta: '0' };
    
    const numAmount = parseFloat(amount);
    const compraValue = parseFloat(selectedCotizacion.compra);
    const ventaValue = parseFloat(selectedCotizacion.venta);
    
    if (convertFrom === 'ARS') {
      // De pesos a dólares
      return {
        compra: compraValue ? (numAmount / compraValue).toFixed(4) : 'N/A',
        venta: ventaValue ? (numAmount / ventaValue).toFixed(4) : 'N/A'
      };
    } else {
      // De dólares a pesos
      return {
        compra: compraValue ? (numAmount * compraValue).toFixed(2) : 'N/A',
        venta: ventaValue ? (numAmount * ventaValue).toFixed(2) : 'N/A'
      };
    }
  }, [amount, convertFrom, selectedCotizacion]);

  return conversion;
}; 