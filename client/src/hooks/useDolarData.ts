import { useState, useEffect } from 'react';
import { getDolares, DolarData } from '../services/DolarService';

export const useDolarData = () => {
  const [cotizaciones, setCotizaciones] = useState<DolarData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDolares = async () => {
      try {
        setLoading(true);
        const data = await getDolares();
        setCotizaciones(data);
        setError(null);
      } catch (err) {
        setError('Error al cargar las cotizaciones del dólar');
        console.error('Error fetching dolar data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDolares();
  }, []);

  const getSelectedCotizacion = (selectedName: string) => {
    return cotizaciones.find(cot => cot.nombre === selectedName) || null;
  };

  return {
    cotizaciones,
    loading,
    error,
    getSelectedCotizacion
  };
}; 