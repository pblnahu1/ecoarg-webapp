import { Calendar } from 'lucide-react';

interface TimeRangeSelectorProps {
  timeRange: string;
  onTimeRangeChange: (range: string) => void;
  darkMode: boolean;
}

export const TimeRangeSelector = ({ timeRange, onTimeRangeChange, darkMode }: TimeRangeSelectorProps) => {
  return (
    <div className="flex items-center">
      <Calendar className="mr-2 text-gray-400" size={16} />
      <select
        value={timeRange}
        onChange={(e) => onTimeRangeChange(e.target.value)}
        className={`${darkMode ? 'bg-stone-800 border-stone-600' : 'bg-stone-300 border-stone-400' } border  rounded px-2 py-1 text-sm`}
      >
        <option value="7d">7 días</option>
        <option value="30d">30 días</option>
        <option value="90d">90 días</option>
      </select>
    </div>
  );
}; 