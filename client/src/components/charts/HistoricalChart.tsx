/* eslint-disable @typescript-eslint/no-explicit-any */
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { DolarData } from '../../services/DolarService';

interface HistoricalDataPoint {
  fecha: string;
  compra: number;
  venta: number;
  fullDate: string;
}

interface HistoricalChartProps {
  data: HistoricalDataPoint[];
  selectedCotizacion: DolarData | null;
}

export const HistoricalChart = ({ data, selectedCotizacion }: HistoricalChartProps) => {
  console.log(data[data.length - 1]);
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="fecha"
            stroke="#9CA3AF"
            fontSize={12}
          />
          <YAxis
            stroke="#9CA3AF"
            fontSize={12}
            domain={['dataMin - 50', 'dataMax + 50']}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#F9FAFB'
            }}
            formatter={(value: number, name: string, props: any) => [
              `$${value}`,
              props.payload?.name || name
            ]}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="compra"
            stroke="#10B981"
            strokeWidth={2}
            dot={{ fill: '#10B981', strokeWidth: 2, r: 3 }}
            name="Compra"
          />
          <Line
            type="monotone"
            dataKey="venta"
            stroke="#F59E0B"
            strokeWidth={2}
            dot={{ fill: '#F59E0B', strokeWidth: 2, r: 3 }}
            name="Venta"
          />
          <ReferenceLine
            y={selectedCotizacion?.venta}
            stroke="#EF4444"
            strokeDasharray="3 3"
            label="Venta actual"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Puede ser que el dato varíe porque el dato del gráfico viene de un histórico externo que ya tiene los valores del 8 de agosto por ejemplo, pero ese valor:
// Seguramente es un promedio diario de múltiples fuentes
// No proviene del mismo origen que selectedCotizacion
// Está redondeado o transformado