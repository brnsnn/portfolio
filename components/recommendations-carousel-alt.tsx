"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Recommendation {
  name: string
  position: string
  quote: string
  avatar: string
}

interface RecommendationsCarouselAltProps {
  recommendations: Recommendation[]
}

export function RecommendationsCarouselAlt({ recommendations }: RecommendationsCarouselAltProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const cardsVisible = isMobile || isTablet ? 1.18 : 2
  const maxIndex = Math.max(0, recommendations.length - 1)

  const toggleExpanded = (cardId: string) => {
    setExpandedCard((prev) => {
      if (prev === cardId) {
        return null
      }
      return cardId
    })
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const getTransform = () => {
    const cardWidthPercent = isMobile || isTablet ? 85 : 48
    const gapPercent = isMobile || isTablet ? 3 : 2.5

    if (currentIndex === recommendations.length - 1) {
      const lastCardStart = (recommendations.length - 1) * (cardWidthPercent + gapPercent)
      const lastCardEnd = lastCardStart + cardWidthPercent
      const extraSpace = isMobile || isTablet ? -12 : -2.5
      return lastCardEnd - 100 - extraSpace
    }

    const scrollDistance = currentIndex * (cardWidthPercent + gapPercent)
    return scrollDistance
  }

  const getMaxHeight = () => {
    if (isMobile || isTablet) return "240px"
    return "180px"
  }

  return (
    <div className="relative w-full">
      {/* Left navigation button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 rounded-sm bg-muted hover:bg-muted/80"
        onClick={goToPrevious}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous</span>
      </Button>

      {/* Carousel container */}
      <div className="overflow-hidden px-2">
        <div
          ref={carouselRef}
          className="flex gap-6 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${getTransform()}%)` }}
        >
          {recommendations.map((recommendation, index) => {
            const cardId = `alt-${index}`
            const isExpanded = expandedCard === cardId
            const estimatedLines = Math.ceil(recommendation.quote.length / 80)
            const needsTruncation = estimatedLines > 3

            return (
              <div key={`recommendation-alt-${cardId}`} className="flex-none w-[85%] md:w-[85%] lg:w-[48%]">
                <div
                  className={cn(
                    "bg-muted/50 rounded-md p-5 flex flex-col transition-all duration-500 ease-out transform-gpu",
                    isExpanded ? "min-h-[240px] lg:min-h-[180px]" : "min-h-[240px] lg:min-h-[180px]",
                  )}
                  style={{
                    maxHeight: isExpanded ? "1000px" : getMaxHeight(),
                    overflow: "hidden",
                  }}
                >
                  <div className="space-y-3 h-full flex flex-col">
                    <div>
                      <h3 className="font-semibold text-lg">{recommendation.name}</h3>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{recommendation.position}</p>
                    </div>
                    <div className="flex-grow flex flex-col">
                      <p
                        className={cn(
                          "text-sm text-foreground/80 flex-grow transition-all duration-500 ease-out leading-relaxed",
                          !isExpanded && needsTruncation && "line-clamp-4 lg:line-clamp-3",
                        )}
                      >
                        {recommendation.quote}
                      </p>
                      {needsTruncation && (
                        <button
                          onClick={() => toggleExpanded(cardId)}
                          className="text-foreground font-medium text-xs mt-2 self-start transition-all duration-300 ease-out hover:text-foreground/70"
                        >
                          {isExpanded ? "Show less" : "Show more"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Right navigation button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 rounded-sm bg-muted hover:bg-muted/80"
        onClick={goToNext}
        disabled={currentIndex >= maxIndex}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next</span>
      </Button>
    </div>
  )
}
