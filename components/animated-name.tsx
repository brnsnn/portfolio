"use client"

import { useState, useEffect } from "react"

const AnimatedName = () => {
  const names = ["Bronson Lee", "BRON-suhn Lee", "/ˈbrɒnsən liː/"]
  const [currentNameIndex, setCurrentNameIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentName = names[currentNameIndex]
    let timeoutId: NodeJS.Timeout

    if (isTyping) {
      // Typing animation
      if (displayText.length < currentName.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentName.slice(0, displayText.length + 1))
        }, 100)
      } else {
        // Finished typing, wait before erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      // Erasing animation
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        // Finished erasing, move to next name
        setCurrentNameIndex((prev) => (prev + 1) % names.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [displayText, isTyping, currentNameIndex, names])

  return (
    <span className="font-medium">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export { AnimatedName }
