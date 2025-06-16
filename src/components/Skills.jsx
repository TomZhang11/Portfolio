import { useState } from 'react'

const Skills = ({ darkMode }) => {
    const [hoveredSkill, setHoveredSkill] = useState(null)

    const proficiency = {
        expert: ["React", "Python", "Cursor"],
        intermediate: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Chrome DevTools", 
                        "C", "SQL", "Bash", "Linux", "Git"],
        beginner: ["Node.js", "Express", "MySQL", "MongoDB"]
    };

    const getTagColor = (item) => {
        if (proficiency.expert.includes(item)) {
            return 'bg-green-500 text-white hover:bg-green-600';
        } else if (proficiency.intermediate.includes(item)) {
            return 'bg-blue-500 text-white hover:bg-blue-600';
        } else {
            return 'bg-purple-500 text-white hover:bg-purple-600';
        }
    };

    const getProficiencyLevel = (item) => {
        if (proficiency.expert.includes(item)) return 'Expert';
        if (proficiency.intermediate.includes(item)) return 'Intermediate';
        return 'Beginner';
    };

    const skillsets = {
        frontend: {
            title: "Front End",
            skills: {
                languages: ["HTML", "CSS", "JavaScript"],
                frameworks: ["React", "Tailwind CSS"],
                tools: ["Git", "Cursor", "Chrome DevTools"]
            }
        },
        backend: {
            title: "Back End",
            skills: {
                languages: ["JavaScript", "Python", "SQL", "C", "Bash"],
                frameworks: ["Node.js", "Express"],
                tools: ["Git", "Linux", "MySQL", "MongoDB", "Cursor"]
            }
        }
    };

    return (
        <section id="skills" className={`px-4 py-10 max-w-7xl mx-auto text-center border-t-4 transition-colors duration-300 ${
            darkMode 
                ? 'border-gray-600 bg-gray-800' 
                : 'border-gray-300 bg-white'
        }`}>
            <h2 className={`text-3xl mb-8 font-semibold font-serif italic transition-colors duration-300 ${
                darkMode ? 'text-orange-400' : 'text-[#faa289]'
            }`}>
                Skills
            </h2>
            <div className="mx-auto mb-8 max-w-6xl">
                <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                    I am a very competent software engineer. I like to create visually appealing and algorithmically intensive websites and applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.values(skillsets).map((skillset, index) => (
                    <div key={index} 
                        className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                            darkMode 
                                ? 'bg-gray-700 hover:bg-gray-600' 
                                : 'bg-white hover:bg-gray-50'
                        }`}
                    >
                        <h3 className={`text-2xl font-serif mb-6 transition-colors duration-300 ${
                            darkMode ? 'text-blue-400' : 'text-[#678d96]'
                        }`}>
                            {skillset.title}
                        </h3>
                        <div className="space-y-6">
                            {Object.entries(skillset.skills).map(([category, items]) => (
                                <div key={category} className="text-left">
                                    <h4 className={`font-medium mb-2 capitalize transition-colors duration-300 ${
                                        darkMode ? 'text-gray-200' : 'text-[#0d1721]'
                                    }`}>
                                        {category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((item, i) => (
                                            <span 
                                                key={i} 
                                                className={`px-3 py-1 rounded-md text-sm cursor-pointer transition-all duration-200 transform hover:scale-105 ${getTagColor(item)}`}
                                                onMouseEnter={() => setHoveredSkill(item)}
                                                onMouseLeave={() => setHoveredSkill(null)}
                                                title={`${item} - ${getProficiencyLevel(item)} level`}
                                            >
                                                {item}
                                                {hoveredSkill === item && (
                                                    <span className="ml-2 text-xs opacity-75">
                                                        ({getProficiencyLevel(item)})
                                                    </span>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Skills Progress Animation */}
            <div className={`mt-12 p-6 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
                <h3 className={`text-xl font-semibold mb-4 ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                    Proficiency Overview
                </h3>
                <div className="space-y-4">
                    {Object.entries(proficiency).map(([level, skills]) => (
                        <div key={level} className="flex items-center justify-between">
                            <span className={`text-sm font-medium capitalize ${
                                darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                                {level} ({skills.length} skills)
                            </span>
                            <div className={`w-48 h-2 rounded-full ${
                                darkMode ? 'bg-gray-600' : 'bg-gray-200'
                            }`}>
                                <div 
                                    className={`h-full rounded-full transition-all duration-1000 ${
                                        level === 'expert' ? 'bg-green-500' :
                                        level === 'intermediate' ? 'bg-blue-500' : 'bg-purple-500'
                                    }`}
                                    style={{ 
                                        width: `${(skills.length / 13) * 100}%` // 13 is total skills count
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;