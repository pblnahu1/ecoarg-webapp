interface CurrencyFormatterProps {
  value: string;
  currency: string;
  darkMode: boolean;
}

export const CurrencyFormatter = ({ value, currency, darkMode }: CurrencyFormatterProps) => {
  if (value === 'N/A') return <span>N/A</span>;
  
  const symbol = currency === 'ARS' ? '$' : 'US$';
  const formattedValue = parseFloat(value).toLocaleString('es-AR');
  
  return <span className={`${darkMode ? 'text-green-400' : 'text-green-800'} font-bold`}>{symbol} {formattedValue}</span>;
}; 