import { useState, useEffect } from 'react'

const Hero = () => {
    return (
        <section className="relative h-screen text-white">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/bg.jpg')" }}
            />
            <div className="absolute inset-0" />
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
                <div className="text-center transition-all duration-1000 transform">
                    <h1 className="text-4xl font-bold">
                        Hi there!
                    </h1>
                    <p className="text-xl">
                        Welcome to Tom's World
                    </p>
                </div>
            </div>
            
            {/* Last Updated text */}
            <span className="absolute bottom-4 right-4 text-xs text-gray-300">
                Last updated 2025-06-16
            </span>
        </section>
    )
}

export default Hero;