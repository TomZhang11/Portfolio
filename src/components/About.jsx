const About = () => {
    return (
        <section id="about" className="px-4 py-10 max-w-6xl mx-auto text-center border-t-4 border-gray-300">
            <h2 className="text-3xl mb-8 font-semibold font-serif italic text-[#faa289]">About Me</h2>
            <div className="mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed">
                    I'm an {new Date().getFullYear() - 2007} years old guy in tech who sometimes get
                    absorbed in thoughts regarding psychology, religion, and philosophy.
                </p>
            </div>
        </section>
    )
}

export default About;