import { useState } from 'react'

const Portal = () => {
    // Gradient parameters - adjust these to test different effects
    const CIRCLE_RADIUS = 130 // Size of the reveal circle in pixels
    const CENTER_OPACITY = 1 // Opacity at the center of the circle (0-1)
    const MID_OPACITY = 0.4 // Opacity at 40% radius (0-1)
    const OUTER_OPACITY = 0.1 // Opacity at 70% radius (0-1)
    const MID_STOP = 40 // Percentage where mid opacity starts (0-100)
    const OUTER_STOP = 70 // Percentage where outer opacity starts (0-100)
    const TRANSITION_DURATION = 0.3 // Animation duration in seconds
    const BLUR_AMOUNT = 0.5 // Blur effect in pixels
    const BRIGHTNESS = 0.8 // Brightness multiplier (0-2)
    const CONTRAST = 1.2 // Contrast multiplier (0-3)

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)
    
    const handleClick = () => {
        alert('feature under development!')
    }

    return (
        <div
            className="absolute bottom-0 right-0 z-10 cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {/* Portal image - base layer */}
            <img 
                src="/portal.png" 
                alt="Portal" 
                className="relative"
            />
            
            {/* Garden image - mysterious overlay with gradient */}
            <img 
                src="/garden.png" 
                alt="Garden" 
                className="absolute bottom-0 right-0 z-10"
                style={{
                    maskImage: isHovered 
                        ? `radial-gradient(circle ${CIRCLE_RADIUS}px at ${mousePosition.x}px ${mousePosition.y}px, 
                            rgba(0,0,0,${CENTER_OPACITY}) 0%, 
                            rgba(0,0,0,${MID_OPACITY}) ${MID_STOP}%, 
                            rgba(0,0,0,${OUTER_OPACITY}) ${OUTER_STOP}%, 
                            transparent 100%)` 
                        : 'radial-gradient(circle 0px at 50% 50%, transparent 0%, transparent 100%)',
                    WebkitMaskImage: isHovered 
                        ? `radial-gradient(circle ${CIRCLE_RADIUS}px at ${mousePosition.x}px ${mousePosition.y}px, 
                            rgba(0,0,0,${CENTER_OPACITY}) 0%, 
                            rgba(0,0,0,${MID_OPACITY}) ${MID_STOP}%, 
                            rgba(0,0,0,${OUTER_OPACITY}) ${OUTER_STOP}%, 
                            transparent 100%)` 
                        : 'radial-gradient(circle 0px at 50% 50%, transparent 0%, transparent 100%)',
                    transition: `mask-image ${TRANSITION_DURATION}s ease-out, -webkit-mask-image ${TRANSITION_DURATION}s ease-out`,
                    filter: `blur(${BLUR_AMOUNT}px) brightness(${BRIGHTNESS}) contrast(${CONTRAST})`
                }}
            />
        </div>
    )
}

export default Portal
