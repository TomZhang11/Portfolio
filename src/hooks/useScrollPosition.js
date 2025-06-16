import { useState, useEffect } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY
      setScrollPosition(currentScrollY)
      setIsScrollingDown(currentScrollY > lastScrollY)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', updateScrollPosition, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollPosition)
  }, [])

  return { scrollPosition, isScrollingDown }
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Call immediately

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
} 