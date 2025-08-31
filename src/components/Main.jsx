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
import Portal from './Portal'

const Main = () => {
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
        <main className="min-h-screen bg-white text-gray-900 relative pb-0 xl:pb-0 pb-[370px]">
            <div id="skills" className={sectionClassName('skills')}>
                <Skills />
            </div>
            
            <div id="experience" className={sectionClassName('experience')}>
                <Experience />
            </div>
            
            <div id="books" className={sectionClassName('books')}>
                <Books />
            </div>
            
            <div id="contacts" className={sectionClassName('contacts')}>
                <Contacts />
            </div>
            
            <Portal />
        </main>
    )
}

export default Main;
