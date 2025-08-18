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

    // Turbulence animation for entropy-based chaos
    useEffect(() => {
        let animationFrame
        if (isHovered) {
            const animate = () => {
                setTurbulenceTime(prev => prev + 0.04)
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

    // Generate entropy-based chaotic gradient
    const generateChaoticGradient = () => {
        if (!isHovered) {
            return 'radial-gradient(circle 0px at 50% 50%, transparent 0%, transparent 100%)'
        }

        // Create multiple overlapping gradients for pixel-level chaos
        const layers = []
        
        // Base stable gradient (center remains calm)
        const baseGradient = `radial-gradient(circle ${CIRCLE_RADIUS}px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(0,0,0,${CENTER_OPACITY}) 0%, 
            rgba(0,0,0,${CENTER_OPACITY * 0.9}) 20%, 
            rgba(0,0,0,${MID_OPACITY}) ${MID_STOP}%, 
            rgba(0,0,0,${OUTER_OPACITY}) ${OUTER_STOP}%, 
            transparent 100%)`

        // Create chaos layers with increasing entropy toward edges
        for (let layer = 0; layer < 8; layer++) {
            const chaosIntensity = layer / 8 // 0 to 1
            const frequency = 15 + layer * 5 // Higher frequency for outer layers
            const amplitude = layer * 3 // Stronger distortions for outer layers
            
            // Generate random distortion points around the gradient
            const distortions = []
            for (let i = 0; i < 12; i++) {
                const angle = (i / 12) * Math.PI * 2
                const radiusBase = CIRCLE_RADIUS * (0.4 + chaosIntensity * 0.6) // Start chaos from 40% radius
                const chaosOffset = Math.sin(turbulenceTime * frequency + i + layer) * amplitude
                const radius = radiusBase + chaosOffset
                
                const x = mousePosition.x + Math.cos(angle + turbulenceTime * (2 + layer)) * radius
                const y = mousePosition.y + Math.sin(angle + turbulenceTime * (2 + layer)) * radius
                
                // Opacity chaos - more random toward edges
                const baseOpacity = OUTER_OPACITY * (1 - chaosIntensity * 0.5)
                const chaosOpacity = Math.sin(turbulenceTime * frequency * 2 + i * layer) * chaosIntensity * 0.3
                const opacity = Math.max(0, baseOpacity + chaosOpacity)
                
                distortions.push(`rgba(0,0,0,${opacity}) ${(radius / CIRCLE_RADIUS) * 100}%`)
            }
            
            // Create chaotic gradient layer
            const chaoticLayer = `radial-gradient(circle ${CIRCLE_RADIUS}px at ${mousePosition.x}px ${mousePosition.y}px, 
                transparent 0%, 
                ${distortions.join(', ')},
                transparent 100%)`
                
            layers.push(chaoticLayer)
        }

        // Combine base gradient with chaos layers
        return [baseGradient, ...layers].join(', ')
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
                    maskImage: generateChaoticGradient(),
                    WebkitMaskImage: generateChaoticGradient(),
                    transition: isHovered ? 'none' : `mask-image ${TRANSITION_DURATION}s ease-out, -webkit-mask-image ${TRANSITION_DURATION}s ease-out`,
                    filter: `blur(${BLUR_AMOUNT}px) brightness(${BRIGHTNESS}) contrast(${CONTRAST}) ${
                        isHovered ? `contrast(1.4) saturate(1.2) hue-rotate(${Math.sin(turbulenceTime * 3) * 10}deg)` : ''
                    }`
                }}
            />
        </div>
    )
}

export default Portal
