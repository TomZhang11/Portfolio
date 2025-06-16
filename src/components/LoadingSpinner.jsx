const LoadingSpinner = ({ size = 'medium', darkMode = false }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  }

  return (
    <div className="flex items-center justify-center">
      <div 
        className={`animate-spin rounded-full border-2 border-solid ${
          darkMode ? 'border-gray-600' : 'border-gray-300'
        } ${
          darkMode ? 'border-t-blue-400' : 'border-t-blue-500'
        } ${sizeClasses[size]}`}
      />
    </div>
  )
}

export default LoadingSpinner 