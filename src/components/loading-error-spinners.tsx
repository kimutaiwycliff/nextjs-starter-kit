export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
      <div className="relative w-12 h-12">
        {/* Outer ring */}
        <div className="absolute w-full h-full rounded-full border-4 border-blue-300 border-t-transparent animate-spin"></div>
        {/* Inner ring */}
        <div className="absolute w-6 h-6 rounded-full border-4 border-blue-400 border-b-transparent animate-spin animation-delay-200 inset-0 m-auto"></div>
      </div>
      <p className="text-gray-600 text-sm font-medium">Loading data...</p>
    </div>
  );
};

export const ErrorSpinner = ({ onRetry }: { onRetry?: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-4 p-4 text-center">
      <div className="relative">
        {/* Error icon with animation */}
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
        <p className="text-sm text-gray-600">We couldn&apos;t load the data. Please try again.</p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Retry
        </button>
      )}
    </div>
  );
}
