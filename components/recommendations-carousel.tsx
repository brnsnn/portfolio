"use client"

import { useState, useRef } from "react"
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
  const carouselRef = useRef<HTMLDivElement>(null)

  // Each card is 45% width, so we can show ~2.2 cards at a time
  // maxIndex should be total cards minus the number of cards visible at once
  const cardsVisible = 2.2
  const maxIndex = Math.max(0, recommendations.length - cardsVisible)

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
    // Normal scroll: move by card width percentage
    const normalScroll = currentIndex * (100 / cardsVisible)

    // If we're at or near the end, ensure the last card aligns with the right edge
    if (currentIndex >= recommendations.length - cardsVisible) {
      // Calculate the exact position where last card's right edge aligns with container's right edge
      const totalCardsWidth = recommendations.length * (100 / cardsVisible)
      const maxScroll = totalCardsWidth - 100
      return Math.min(normalScroll, maxScroll)
    }

    return normalScroll
  }

  return (
    <div className="relative w-full">
      <div className="overflow-hidden -mx-3">
        <div className="px-3">
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
              const needsTruncation = estimatedLines > 3

              return (
                <div key={`recommendation-${cardId}`} className="flex-none w-[calc(50%-12px)] md:w-[calc(45%-12px)]">
                  <div
                    className={cn(
                      "bg-background border border-border rounded-lg p-6 shadow-sm flex flex-col transition-all duration-500 ease-out transform-gpu",
                      isExpanded ? "min-h-[200px]" : "h-[200px]",
                    )}
                    style={{
                      maxHeight: isExpanded ? "1000px" : "200px",
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
                            !isExpanded && needsTruncation && "line-clamp-3",
                          )}
                        >
                          {recommendation.quote}
                        </p>
                        {needsTruncation && (
                          <button
                            onClick={() => toggleExpanded(cardId)}
                            className="text-primary text-sm mt-2 self-start transition-all duration-300 ease-out hover:text-primary/80 hover:scale-105"
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
      </div>

      <div className="flex justify-end items-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background border border-border shadow-sm"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background border border-border shadow-sm"
          onClick={goToNext}
          disabled={currentIndex >= maxIndex}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}
