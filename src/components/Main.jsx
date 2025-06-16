// #a8a4b5 cloud white
// #0d1721 shadow black
// #faa289 sunset orange
// #678d96 sky blue
// #ffdaad light yellow
import { useState, useEffect } from 'react'
import Books from './Books'
import Skills from './Skills'
import Experience from './Experience'
import Contacts from './Contacts'

const Main = ({ darkMode, activeSection, setActiveSection }) => {
    const [isVisible, setIsVisible] = useState({})

    // Intersection Observer for fade-in animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }))
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        )

        // Observe all sections
        const sections = ['skills', 'experience', 'books', 'contacts']
        sections.forEach(id => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [])

    const sectionClassName = (sectionId) => 
        `transition-all duration-700 transform ${
            isVisible[sectionId] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
        }`

    return (
        <main className={`min-h-screen pt-16 transition-colors duration-300 ${
            darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}>
            <div id="skills" className={sectionClassName('skills')}>
                <Skills darkMode={darkMode} />
            </div>
            
            <div id="experience" className={sectionClassName('experience')}>
                <Experience darkMode={darkMode} />
            </div>
            
            <div id="books" className={sectionClassName('books')}>
                <Books darkMode={darkMode} />
            </div>
            
            <div id="contacts" className={sectionClassName('contacts')}>
                <Contacts darkMode={darkMode} />
            </div>
        </main>
    )
}

export default Main;