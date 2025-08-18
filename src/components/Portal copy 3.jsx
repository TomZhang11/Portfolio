import { useState, useEffect } from 'react'

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
    const [turbulenceTime, setTurbulenceTime] = useState(0)

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

    // Turbulence animation for gradient distortion
    useEffect(() => {
        let animationFrame
        if (isHovered) {
            const animate = () => {
                setTurbulenceTime(prev => prev + 0.03)
                animationFrame = requestAnimationFrame(animate)
            }
            animationFrame = requestAnimationFrame(animate)
        }
        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame)
            }
        }
    }, [isHovered])

    // Generate turbulent gradient with distorted edges
    const generateTurbulentGradient = () => {
        if (!isHovered) {
            return 'radial-gradient(circle 0px at 50% 50%, transparent 0%, transparent 100%)'
        }

        // Create multiple distorted circles for turbulent effect
        const baseRadius = CIRCLE_RADIUS
        const turbulentStops = []
        
        // Generate distorted gradient stops
        for (let angle = 0; angle < 360; angle += 30) {
            const radianAngle = (angle * Math.PI) / 180
            const distortion = Math.sin(turbulenceTime * 4 + angle * 0.1) * 15
            const radiusVariation = baseRadius + distortion
            
            const stopX = mousePosition.x + Math.cos(radianAngle) * (radiusVariation * 0.3)
            const stopY = mousePosition.y + Math.sin(radianAngle) * (radiusVariation * 0.3)
            
            turbulentStops.push(`${stopX}px ${stopY}px`)
        }

        // Main turbulent gradient with vibrating edges
        const edgeDistortion1 = Math.sin(turbulenceTime * 6) * 8
        const edgeDistortion2 = Math.cos(turbulenceTime * 4.5 + 1) * 6
        const edgeDistortion3 = Math.sin(turbulenceTime * 8 + 2) * 10
        
        return `radial-gradient(
            ellipse ${baseRadius + edgeDistortion1}px ${baseRadius + edgeDistortion2}px 
            at ${mousePosition.x + edgeDistortion3}px ${mousePosition.y + Math.sin(turbulenceTime * 5) * 4}px, 
            rgba(0,0,0,${CENTER_OPACITY}) 0%, 
            rgba(0,0,0,${MID_OPACITY + Math.sin(turbulenceTime * 7) * 0.1}) ${MID_STOP + Math.cos(turbulenceTime * 3) * 5}%, 
            rgba(0,0,0,${OUTER_OPACITY + Math.sin(turbulenceTime * 9 + 1) * 0.05}) ${OUTER_STOP + Math.sin(turbulenceTime * 6 + 2) * 8}%, 
            transparent 100%
        )`
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
                    maskImage: generateTurbulentGradient(),
                    WebkitMaskImage: generateTurbulentGradient(),
                    transition: isHovered ? 'none' : `mask-image ${TRANSITION_DURATION}s ease-out, -webkit-mask-image ${TRANSITION_DURATION}s ease-out`,
                    filter: `blur(${BLUR_AMOUNT}px) brightness(${BRIGHTNESS}) contrast(${CONTRAST})`
                }}
            />
        </div>
    )
}

export default Portal
