const Hero = () => {
    return (
        <section className="relative h-screen bg-black/50">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/bg.jpg')" }}
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
                <h1 className="text-4xl text-white font-bold">Hi There!</h1>
                <p className="text-xl md:text-2xl text-white mt-4">Welcome to Tom's World</p>
            </div>
            {/* Add the Last Updated text using Tailwind */}
            <span className="absolute bottom-4 right-4 text-xs text-gray-300">
                Last updated 2025-01-21
            </span>
        </section>
    )
}

export default Hero;