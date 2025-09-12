import { useState } from 'react'

const Skills = () => {
    // Skills data - only used within this component
    const frontend = {
        languages: {
            "HTML": 2,
            "CSS": 2,
            "JavaScript": 2,
            "TypeScript": 1
        },
        frameworks: {
            "React": 2,
            "Tailwind CSS": 2,
            "Bootstrap": 1
        },
        tools: {
            "Git": 2,
            "Cursor": 2,
            "Chrome DevTools": 2
        }
    };

    const backend = {
        languages: {
            "Python": 2,
            "JavaScript": 2,
            "TypeScript": 1,
            "SQL": 1,
            "C/C++": 1,
            "Bash": 1
        },
        frameworks: {
            "Node.js": 0,
            "Express": 0,
            "MongoDB": 0,
            "SQLite": 0
        },
        tools: {
            "Git": 2,
            "Cursor": 2,
            "Linux": 2,
            "AWS": 0
        }
    };
    const [hoveredSkill, setHoveredSkill] = useState(null)

    // Helper functions for skill level handling
    const getTagColor = (level) => {
        if (level === 2) {
            return 'bg-green-500 text-white hover:bg-green-600';
        } else if (level === 1) {
            return 'bg-blue-500 text-white hover:bg-blue-600';
        } else {
            return 'bg-purple-500 text-white hover:bg-purple-600';
        }
    };

    const getLevelName = (level) => {
        if (level === 2) return 'Expert';
        if (level === 1) return 'Intermediate';
        return 'Beginner';
    };

    // Count skills by proficiency level (avoiding duplicates)
    const getSkillCounts = () => {
        const counts = { expert: 0, intermediate: 0, beginner: 0 };
        const uniqueSkills = new Map(); // skill name -> highest level
        
        // Collect all skills and track their highest proficiency level
        [frontend, backend].forEach(skillset => {
            Object.values(skillset).forEach(category => {
                Object.entries(category).forEach(([skill, level]) => {
                    // Keep the highest level if skill appears multiple times
                    const currentLevel = uniqueSkills.get(skill) || -1;
                    if (level > currentLevel) {
                        uniqueSkills.set(skill, level);
                    }
                });
            });
        });
        
        // Count skills by their highest proficiency level
        uniqueSkills.forEach(level => {
            if (level === 2) counts.expert++;
            else if (level === 1) counts.intermediate++;
            else counts.beginner++;
        });
        
        return counts;
    };

    const skillCounts = getSkillCounts();
    const totalSkills = skillCounts.expert + skillCounts.intermediate + skillCounts.beginner;

    const skillsets = {
        frontend: {
            title: "Frontend",
            data: frontend
        },
        backend: {
            title: "Backend", 
            data: backend
        }
    };

    return (
        <section id="skills" className="px-4 py-10 max-w-7xl mx-auto text-center bg-white">
            <h2 className="text-3xl mb-8 font-semibold font-serif italic text-[#faa289]">
                Skills
            </h2>
            <div className="mx-auto mb-8 max-w-6xl">
                <p className="text-lg leading-relaxed text-gray-600">
                My unique ability is to abstract ideas in one field and apply them cross domains.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.values(skillsets).map((skillset, index) => (
                    <div key={index} 
                        className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white hover:bg-gray-50"
                    >
                        <h3 className="text-2xl font-serif mb-6 text-[#678d96]">
                            {skillset.title}
                        </h3>
                        <div className="space-y-6">
                            {Object.entries(skillset.data).map(([category, skills]) => (
                                <div key={category} className="text-left">
                                    <h4 className="font-medium mb-2 capitalize text-[#0d1721]">
                                        {category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {Object.entries(skills).map(([skill, level]) => (
                                            <span 
                                                key={skill} 
                                                className={`px-3 py-1 rounded-md text-sm cursor-pointer transition-all duration-200 transform hover:scale-105 ${getTagColor(level)}`}
                                                onMouseEnter={() => setHoveredSkill(skill)}
                                                onMouseLeave={() => setHoveredSkill(null)}
                                                title={`${skill} - ${getLevelName(level)} level`}
                                            >
                                                {skill}
                                                {hoveredSkill === skill && (
                                                    <span className="ml-2 text-xs opacity-75">
                                                        ({getLevelName(level)})
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
            <div className="mt-12 p-6 rounded-lg bg-gray-50">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Proficiency Overview
                </h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">
                            Expert ({skillCounts.expert} skills)
                        </span>
                        <div className="w-48 h-2 rounded-full bg-gray-200">
                            <div 
                                className="h-full rounded-full transition-all duration-1000 bg-green-500"
                                style={{ 
                                    width: `${(skillCounts.expert / totalSkills) * 100}%`
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">
                            Intermediate ({skillCounts.intermediate} skills)
                        </span>
                        <div className="w-48 h-2 rounded-full bg-gray-200">
                            <div 
                                className="h-full rounded-full transition-all duration-1000 bg-blue-500"
                                style={{ 
                                    width: `${(skillCounts.intermediate / totalSkills) * 100}%`
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">
                            Beginner ({skillCounts.beginner} skills)
                        </span>
                        <div className="w-48 h-2 rounded-full bg-gray-200">
                            <div 
                                className="h-full rounded-full transition-all duration-1000 bg-purple-500"
                                style={{ 
                                    width: `${(skillCounts.beginner / totalSkills) * 100}%`
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
