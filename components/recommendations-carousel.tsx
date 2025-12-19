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

interface RecommendationsCarouselProps {
  recommendations: Recommendation[]
}

export function RecommendationsCarousel({ recommendations }: RecommendationsCarouselProps) {
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
    // Gap between cards as percentage
    const gapPercent = isMobile || isTablet ? 3 : 2.5

    // When on the last card, align it to the right edge
    if (currentIndex === recommendations.length - 1) {
      const lastCardStart = (recommendations.length - 1) * (cardWidthPercent + gapPercent)
      const lastCardEnd = lastCardStart + cardWidthPercent
      // Adjust extra space to align with navigation buttons
      const extraSpace = isMobile || isTablet ? -12 : -2.5
      return lastCardEnd - 100 - extraSpace
    }

    // Standard scroll calculation
    const scrollDistance = currentIndex * (cardWidthPercent + gapPercent)
    return scrollDistance
  }

  const getMaxHeight = () => {
    if (isMobile || isTablet) return "260px"
    return "200px"
  }

  return (
    <div className="relative w-full">
      {/* Left navigation button */}
      <Button
        variant="outline"
        size="icon"
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background border border-border shadow-sm"
        onClick={goToPrevious}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous</span>
      </Button>

      {/* Carousel container */}
      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-6 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${getTransform()}%)` }}
        >
          {recommendations.map((recommendation, index) => {
            const cardId = `${index}`
            const isExpanded = expandedCard === cardId
            const textLines = recommendation.quote.split("\n").length
            const estimatedLines = Math.ceil(recommendation.quote.length / 80)
            const needsTruncation = estimatedLines > 4

            return (
              <div key={`recommendation-${cardId}`} className="flex-none w-[85%] md:w-[85%] lg:w-[48%]">
                <div
                  className={cn(
                    "bg-background border border-border rounded-lg p-6 shadow-sm flex flex-col transition-all duration-500 ease-out transform-gpu",
                    isExpanded ? "min-h-[260px] lg:min-h-[200px]" : "min-h-[260px] lg:min-h-[200px]",
                  )}
                  style={{
                    maxHeight: isExpanded ? "1000px" : getMaxHeight(),
                    overflow: "hidden",
                  }}
                >
                  <div className="space-y-4 h-full flex flex-col">
                    <div>
                      <h3 className="font-medium">{recommendation.name}</h3>
                      <p className="text-sm text-muted-foreground">{recommendation.position}</p>
                    </div>
                    <div className="flex-grow flex flex-col">
                      <p
                        className={cn(
                          "text-muted-foreground flex-grow transition-all duration-500 ease-out",
                          !isExpanded && needsTruncation && "line-clamp-5 lg:line-clamp-3",
                        )}
                      >
                        {recommendation.quote}
                      </p>
                      {needsTruncation && (
                        <button
                          onClick={() => toggleExpanded(cardId)}
                          className="text-foreground text-sm mt-2 self-start transition-all duration-300 ease-out no-underline hover:no-underline focus:outline-none focus:ring-0"
                          style={{ textDecoration: "none" }}
                        >
                          {isExpanded ? "Read less" : "Read more"}
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
        variant="outline"
        size="icon"
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background border border-border shadow-sm"
        onClick={goToNext}
        disabled={currentIndex >= maxIndex}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next</span>
      </Button>
    </div>
  )
}
