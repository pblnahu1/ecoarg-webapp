interface ErrorDisplayProps {
  error: string;
  onRetry?: () => void;
}

export const ErrorDisplay = ({ error, onRetry }: ErrorDisplayProps) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-400 mb-4">{error}</p>
        <button 
          onClick={onRetry || (() => window.location.reload())}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}; 