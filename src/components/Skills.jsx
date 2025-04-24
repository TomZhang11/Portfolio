const Skills = () => {
    const proficiency = {
        expert: ["React", "Python", "Cursor"],
        intermediate: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Chrome DevTools", 
                        "C", "SQL", "Bash", "Linux", "Git"],
        beginner: ["Node.js", "Express", "MySQL", "MongoDB"]
    };

    const getTagColor = (item) => {
        if (proficiency.expert.includes(item)) {
            return 'bg-green-500 text-white';          // Vibrant green for mastery
        } else if (proficiency.intermediate.includes(item)) {
            return 'bg-blue-500 text-white';          // Bright blue for solid skills
        } else {
            return 'bg-purple-500 text-white';        // Rich purple for learning
        }
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
        <section id="skills" className="px-4 py-10 max-w-7xl mx-auto text-center border-t-4 border-gray-300">
            <h2 className="text-3xl mb-8 font-semibold font-serif italic text-[#faa289]">Skills</h2>
            <div className="mx-auto mb-8 max-w-6xl">
                <p className="text-lg text-gray-600 leading-relaxed">
                    I am a very competent software engineer. I like to create visually appealing and algorithmically intensive websites and applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.values(skillsets).map((skillset, index) => (
                    <div key={index} 
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-2xl font-serif text-[#678d96] mb-6">{skillset.title}</h3>
                        <div className="space-y-6">
                            {Object.entries(skillset.skills).map(([category, items]) => (
                                <div key={category} className="text-left">
                                    <h4 className="text-[#0d1721] font-medium mb-2 capitalize">{category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((item, i) => (
                                            <span key={i} 
                                                className={`px-3 py-1 rounded-md text-sm ${getTagColor(item)}`}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;