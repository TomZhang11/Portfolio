import { experiences } from '../data/experiences';
import { ExperienceSection } from './ExperienceSection';

const Experience = () => {
    return (
        <section id="experience" className="px-4 py-10 max-w-7xl mx-auto text-center border-t-4 border-gray-300">
            <h2 className="text-3xl mb-8 font-semibold font-serif italic text-[#faa289]">Experience/Projects</h2>

            {/* University Year 2 Section */}
            <ExperienceSection title={experiences.universityYear2.title} items={experiences.universityYear2.items} />

            {/* Current Section */}
            <div className="mb-8">
                <h3 className="text-2xl font-serif text-[#678d96] mb-4">{experiences.current.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-6xl mx-auto">
                    {experiences.current.description}
                </p>
            </div>

            {/* University Section */}
            <ExperienceSection title={experiences.university.title} items={experiences.university.items} />

            {/* High School Section */}
            <ExperienceSection title={experiences.highSchool.title} items={experiences.highSchool.items} />

            {/* Resume and Transcript Buttons */}
            <div className="mt-10">
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg 
                        transition-all duration-300 hover:scale-105 hover:bg-[#a8a4b5] text-gray-600"
                >
                    View Full Resume
                </a>
            </div>
        </section>
    );
};

export default Experience;