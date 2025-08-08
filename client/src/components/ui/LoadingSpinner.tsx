interface LoadingSpinnerProps {
  message?: string;
}

export const LoadingSpinner = ({ message = "Cargando..." }: LoadingSpinnerProps) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400 mx-auto mb-4"></div>
        <p>{message}</p>
      </div>
    </div>
  );
}; 