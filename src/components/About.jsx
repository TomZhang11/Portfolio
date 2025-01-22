const About = () => {
    return (
        <section id="about" className="px-4 py-10 max-w-6xl mx-auto text-center border-t-4 border-gray-300">
            <h2 className="text-3xl mb-8 font-semibold font-serif italic text-[#faa289]">About Me</h2>
            <div className="mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed">
                    I'm an {new Date().getFullYear() - 2007} years old guy in tech who sometimes get
                    absorbed in thoughts regarding psychology, religion, and philosophy.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                    Currently, I am quite confused about what I want to do with my life. I sometimes
                    read philosophy, but I still haven't found a purpose that sticks with me. At times
                    I am unsure about how I "should" act, and I wish there is someone "wise" who can
                    answer my questions.
                </p>
            </div>
        </section>
    )
}

export default About;