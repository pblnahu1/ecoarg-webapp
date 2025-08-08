interface AmountInputProps {
  amount: string;
  convertFrom: string;
  onAmountChange: (amount: string) => void;
  darkMode: boolean;
}

export const AmountInput = ({ amount, convertFrom, onAmountChange, darkMode }: AmountInputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        Cantidad en {convertFrom === 'ARS' ? 'Pesos Argentinos' : 'Dólares Estadounidenses'}
      </label>
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
        placeholder="Ingrese la cantidad"
        className={`w-full ${darkMode ? 'bg-stone-800 border-stone-600' : 'bg-stone-300 border-stone-400' } border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 focus:border-transparent`}
      />
    </div>
  );
}; 