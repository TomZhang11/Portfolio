const Role_Models = () => {
    return (
        <section id="role-models" className="px-4 py-10 max-w-7xl mx-auto text-center border-t-4 border-gray-300">
            <h2 className="text-3xl mb-8 font-semibold font-serif italic text-[#faa289]">Role Models</h2>
            
            <div className="space-y-12">
                <p className="text-xl text-[#678d96] leading-relaxed font-bold italic border-l-4 border-gray-300 pl-4 mx-auto text-left">
                    Standing on the shoulders of giants.
                </p>
                {/* First Role Model */}
                <article className="flex flex-col md:flex-row items-center gap-8 text-left">
                    <div className="w-full md:w-1/3">
                        <img 
                            src="/fd.jpg" 
                            alt="Fyodor Dostoevsky"
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h3 className="text-xl font-serif italic text-[#0d1721] mb-4">Fyodor Dostoevsky</h3>
                        <p className="text-gray-600 leading-relaxed mb-2">
                            Foydor Dostoevsky is a Russian novelist regarded as one of the greatest writers in the
                            world. His works explore existential and psychological issues. Characters in his novels are
                            often brutally honest about their thoughts and their innermost selves. Some people say that
                            the characters in his novels have extreme personalities, and that it is unprobable to find
                            characters like that in real life. However, each of us is just a combination of these
                            extreme personalities. For this reason, I find his characters to be highly believable. Also,
                            due being able to access the deepest thoughts of his characters, I find his characters to be
                            high relatable, making his novels highly compelling, and I often get to explore parts of
                            myself through the characters in his novels.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            The honesty of the characters in his novels is also what inspired me to create this website,
                            which involves being honest about my thoughts to myself and to others.
                        </p>
                    </div>
                </article>
                
                {/* Quote Section with Gradient Portrait */}
                <div className="mt-20 relative">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Quote */}
                       
                        <div className="w-full md:w-3/5">
                            <blockquote className="text-3xl md:text-4xl font-serif italic text-[#0d1721] leading-tight text-left">
                                "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others."
                            </blockquote>
                        </div>

                        {/* Large Portrait with Gradient */}
                        <div className="w-full md:w-2/5 relative">
                            <div className="aspect-square overflow-hidden">
                                <img 
                                    src="/fd1.jpg" 
                                    alt="Fyodor Dostoevsky Portrait" 
                                    className="w-full h-full object-cover"
                                    style={{
                                        maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
                                        WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Role Model */}
                <article className="flex flex-col md:flex-row items-center gap-8 text-left">
                    <div className="w-full md:w-1/3">
                        <img 
                            src="/jp.jpg" 
                            alt="Jordan Peterson" 
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h3 className="text-xl font-serif italic text-[#0d1721] mb-4">Jordan Peterson</h3>
                        <p className="text-gray-600 leading-relaxed">
                            I discovered Jordan Peterson's YouTube channel about a year ago, and since then, my life
                            has been changed dramatically. Jordan Peterson is a psychologist and a professor. It is
                            through him that I was first introduced to the metaphorical meaning of the Biblical stories.
                            Before him, I never knew that the stories of the Bible had deeper psychological and metaphorical    
                            meaning in the real life. He opened the door for me into the world of psychology, religion, and
                            philosophy. I became fascinated with these topics, as I found them to be highly applicable in
                            the real life, and my attitude towards humanity subjects changed dramatically. Jordan Peterson
                            has helped me by giving pratical advice in life. In his book "12 Rules for Life", he analyzes
                            the human psychology and gives practical advice on how to navigate the complexities of life.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Role_Models;