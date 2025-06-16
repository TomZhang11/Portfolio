import { useState, useEffect } from 'react'

const Hero = ({ darkMode }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        setIsVisible(true)
        
        // Update time every second
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        
        return () => clearInterval(timer)
    }, [])

    const scrollToNext = () => {
        const skillsSection = document.getElementById('skills')
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className={`relative h-screen transition-colors duration-300 ${
            darkMode ? 'bg-gray-900/90' : 'bg-black/50'
        }`}>
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/bg.jpg')" }}
            />
            <div className={`absolute inset-0 transition-colors duration-300 ${
                darkMode ? 'bg-gray-900/70' : 'bg-black/50'
            }`} />
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
                <div className={`text-center transition-all duration-1000 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <h1 className={`text-4xl md:text-6xl font-bold mb-4 transition-colors duration-300 ${
                        darkMode ? 'text-blue-300' : 'text-white'
                    }`}>
                        Hi There! 👋
                    </h1>
                    <p className={`text-xl md:text-2xl mb-8 transition-colors duration-300 ${
                        darkMode ? 'text-gray-300' : 'text-white'
                    }`}>
                        Welcome to Tom's World
                    </p>
                    
                    {/* Animated typing effect */}
                    <div className={`text-lg md:text-xl mb-8 h-8 transition-colors duration-300 ${
                        darkMode ? 'text-yellow-400' : 'text-yellow-300'
                    }`}>
                        <span className="animate-pulse">
                            Software Engineer • React Developer • Problem Solver
                        </span>
                    </div>
                    
                    {/* Current time display */}
                    <div className={`text-sm mb-8 transition-colors duration-300 ${
                        darkMode ? 'text-gray-400' : 'text-gray-300'
                    }`}>
                        Current time: {currentTime.toLocaleTimeString()}
                    </div>
                    
                    {/* Call to action button */}
                    <button
                        onClick={scrollToNext}
                        className={`px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                            darkMode 
                                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                                : 'bg-white hover:bg-gray-100 text-gray-900'
                        }`}
                    >
                        Explore My Work
                    </button>
                </div>
                
                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="animate-bounce">
                        <svg 
                            className={`w-6 h-6 transition-colors duration-300 ${
                                darkMode ? 'text-blue-400' : 'text-white'
                            }`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
            
            {/* Last Updated text */}
            <span className={`absolute bottom-4 right-4 text-xs transition-colors duration-300 ${
                darkMode ? 'text-gray-400' : 'text-gray-300'
            }`}>
                Last updated 2025-01-21
            </span>
        </section>
    )
}

export default Hero;