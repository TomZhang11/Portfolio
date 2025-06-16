import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Main from './components/Main'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('skills')

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navigation 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <header>
        <Hero darkMode={darkMode} />
      </header>
      <Main 
        darkMode={darkMode} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
