import { useState, useEffect } from 'react';

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isHeroVisible, setIsHeroVisible] = useState(true);

    const sections = [
        { id: 'intro', label: 'Intro' },
        { id: 'about', label: 'About' },
        { id: 'thoughts', label: 'Thoughts' },
        { id: 'role-models', label: 'Role Models' },
        { id: 'books', label: 'Books' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'contacts', label: 'Contacts' }
    ];

    useEffect(() => {
        // Create observer for hero section
        const heroObserver = new IntersectionObserver(
            ([entry]) => setIsHeroVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        // Create observer for other sections with modified options
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { 
                threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
                rootMargin: '-20% 0px -20% 0px'
            }
        );

        // Observe hero
        const hero = document.querySelector('header');
        if (hero) heroObserver.observe(hero);

        // Observe all sections
        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) sectionObserver.observe(element);
        });

        return () => {
            heroObserver.disconnect();
            sectionObserver.disconnect();
        };
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    if (isHeroVisible) return null;

    return (
        <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
            <ul className="flex flex-col gap-4">
                {sections.map(({ id, label }) => (
                    <li key={id}>
                        <button
                            onClick={() => scrollToSection(id)}
                            className={`p-2 rounded-full transition-all duration-300 group relative
                                ${activeSection === id ? 'bg-[#faa289]' : 'bg-white hover:bg-[#a8a4b5]'}`}
                        >
                            <span className="w-3 h-3 block rounded-full bg-gray-600"></span>
                            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 
                                px-2 py-1 rounded bg-white shadow-md text-sm whitespace-nowrap
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {label}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar; 