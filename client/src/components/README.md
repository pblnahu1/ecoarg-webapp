# Component Structure

Esta aplicación ha sido refactorizada siguiendo principios de separación de responsabilidades y reutilización de código.

## Estructura de Carpetas

```
src/
├── hooks/                    # Lógica de negocio reutilizable
│   ├── useDolarData.ts      # Manejo de datos de la API
│   ├── useCurrencyConverter.ts # Lógica de conversión
│   └── useHistoricalData.ts # Generación de datos históricos
├── components/
│   ├── ui/                  # Componentes de UI básicos
│   │   ├── LoadingSpinner.tsx
│   │   ├── ErrorDisplay.tsx
│   │   └── CurrencyFormatter.tsx
│   ├── calculator/          # Componentes de la calculadora
│   │   ├── CotizacionSelector.tsx
│   │   ├── ConversionDirection.tsx
│   │   ├── AmountInput.tsx
│   │   ├── ConversionResult.tsx
│   │   ├── CurrentCotizacionInfo.tsx
│   │   └── CurrencyCalculator.tsx
│   ├── charts/             # Componentes de gráficos
│   │   ├── HistoricalChart.tsx
│   │   ├── ChartStatistics.tsx
│   │   ├── TimeRangeSelector.tsx
│   │   └── HistoricalAnalysis.tsx
│   └── recharts/           # Componente principal
│       └── DolarCalculatorCharts.tsx
```

## Separación de Responsabilidades

### Hooks (Lógica de Negocio)
- **useDolarData**: Maneja el fetching de datos de la API, estados de loading y error
- **useCurrencyConverter**: Contiene la lógica de conversión de monedas
- **useHistoricalData**: Genera datos históricos simulados

### Componentes UI (Reutilizables)
- **LoadingSpinner**: Spinner de carga reutilizable
- **ErrorDisplay**: Manejo de errores consistente
- **CurrencyFormatter**: Formateo de monedas

### Componentes de Calculadora
- **CotizacionSelector**: Selector de tipo de cotización
- **ConversionDirection**: Toggle de dirección de conversión
- **AmountInput**: Input para cantidades
- **ConversionResult**: Muestra resultados de conversión
- **CurrentCotizacionInfo**: Información actual de cotización
- **CurrencyCalculator**: Agrupa todos los componentes de calculadora

### Componentes de Gráficos
- **HistoricalChart**: Gráfico de líneas con Recharts
- **ChartStatistics**: Estadísticas del gráfico
- **TimeRangeSelector**: Selector de rango de tiempo
- **HistoricalAnalysis**: Agrupa todos los componentes de gráficos

## Beneficios de esta Estructura

1. **Reutilización**: Los componentes UI pueden usarse en otras partes de la app
2. **Mantenibilidad**: Cada componente tiene una responsabilidad específica
3. **Testabilidad**: Los hooks pueden testearse independientemente
4. **Escalabilidad**: Fácil agregar nuevas funcionalidades
5. **Legibilidad**: Código más limpio y fácil de entender

## Uso

```tsx
import { DolarCalculatorCharts } from './components';
// o importar componentes individuales
import { CurrencyCalculator, HistoricalAnalysis } from './components';
``` 