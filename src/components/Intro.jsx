const Intro = () => {
    return(
        <section id="intro" className="px-4 py-16 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-8">Welcome to Tom's World</h1>
            
            <div className="mx-auto">
                <p className="text-lg ">
                    Hi everyone, welcome to my website! In this website, I'll be brutally honest about
                    my true and innermost self regarding my life, my thoughts, books I've read, my
                    spiritual believes, and my (not completely formed) philosophies of life. If you wish
                    to see my professional skills/projects/experiences/resume, you may also jump{' '}
                    <a 
                        href="#skills" 
                        className="text-blue-500 hover:text-blue-700 underline hover:no-underline transition-colors duration-300"
                    >
                        here
                    </a>.
                </p>
            </div>
        </section>
    )
}

export default Intro;