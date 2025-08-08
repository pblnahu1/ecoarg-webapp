import { ArrowUpDown } from 'lucide-react';

interface ConversionDirectionProps {
  convertFrom: string;
  onDirectionChange: (direction: string) => void;
  darkMode: boolean
}

export const ConversionDirection = ({ convertFrom, onDirectionChange, darkMode }: ConversionDirectionProps) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={() => onDirectionChange(convertFrom === 'ARS' ? 'USD' : 'ARS')}
        className={`flex items-center ${darkMode ? 'bg-green-800 hover:bg-green-900' : 'bg-green-400 hover:bg-green-500'}  px-4 py-2 rounded-lg transition-colors`}
      >
        <span className="mr-2">{convertFrom === 'ARS' ? 'ARS → USD' : 'USD → ARS'}</span>
        <ArrowUpDown size={16} />
      </button>
    </div>
  );
}; 