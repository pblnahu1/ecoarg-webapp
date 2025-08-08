import { useState, useEffect } from 'react';
import { DolarData } from '../services/DolarService';

interface HistoricalDataPoint {
  fecha: string;
  compra: number;
  venta: number;
  fullDate: string;
}

export const useHistoricalData = (
  selectedCotizacion: DolarData | null,
  timeRange: string
) => {
  const [historicalData, setHistoricalData] = useState<HistoricalDataPoint[]>([]);

  const generateHistoricalData = (days: number) => {
    const data: HistoricalDataPoint[] = [];
    const today = new Date();
    const baseValue = selectedCotizacion ? parseFloat(selectedCotizacion.venta || selectedCotizacion.compra) : 1300;
    
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      // Simulamos variación realista
      const variation = (Math.random() - 0.5) * 100;
      const compra = Math.max(100, baseValue - 50 + variation);
      const venta = compra + (Math.random() * 100 + 20);
      
      data.push({
        fecha: date.toLocaleDateString('es-AR', { month: 'short', day: 'numeric' }),
        compra: Math.round(compra * 100) / 100,
        venta: Math.round(venta * 100) / 100,
        fullDate: date.toISOString().split('T')[0]
      });
    }
    return data;
  };

  useEffect(() => {
    if (selectedCotizacion) {
      const days = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
      setHistoricalData(generateHistoricalData(days));
    }
  }, [selectedCotizacion, timeRange]);

  return historicalData;
}; 