import { ImageCarousel } from './ImageCarousel';

export const ExperienceSection = ({ title, items }) => (
    <div className="mb-8">
        <h3 className="text-2xl font-serif text-[#678d96]">{title}</h3>
        <div className="space-y-4">
            {items.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-serif text-[#0d1721] mb-4">{exp.title}</h4>
                    <p className="text-gray-600 mb-4 max-w-5xl mx-auto">{exp.details}</p>
                    
                    {exp.link && (
                        <div className="flex justify-center mb-6">
                            <a 
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-gray-600 bg-gray-50 hover:bg-[#a8a4b5] transition-all duration-300"
                                aria-label="View on GitHub"
                            >
                                <svg 
                                    viewBox="0 0 24 24" 
                                    width="20" 
                                    height="20" 
                                    className="fill-current"
                                >
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                <span>GitHub</span>
                            </a>
                        </div>
                    )}

                    {exp.images && exp.images.length > 0 && (
                        <ImageCarousel images={exp.images} />
                    )}
                </div>
            ))}
        </div>
    </div>
); 