import { useState, useEffect } from 'react'

function Footer({ darkMode }) {
  const [showScrollTop, setShowScrollTop] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className={`py-6 mt-auto transition-colors duration-300 ${
      darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-800 text-white'
    }`}>
      <div className="container mx-auto text-center px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <p className="text-sm md:text-base">
              © {new Date().getFullYear()} Tom Zhang. All rights reserved.
            </p>
            <p className={`text-xs mt-1 transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-400'
            }`}>
              Built with React & Tailwind CSS
            </p>
          </div>
          
          {/* Scroll to top button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
              aria-label="Scroll to top"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer;