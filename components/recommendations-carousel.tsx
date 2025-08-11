"use client"

import { useState, useRef } from "react"
import Image from "next/image"
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
  const [currentPage, setCurrentPage] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Always show 2 cards at a time
  const cardsPerPage = 2
  const totalPages = Math.ceil(recommendations.length / cardsPerPage)

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="relative w-full">
      {/* Carousel container */}
      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {/* Create pages of 2 recommendations each */}
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={`page-${pageIndex}`} className="w-full flex-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendations
                  .slice(pageIndex * cardsPerPage, (pageIndex + 1) * cardsPerPage)
                  .map((recommendation, index) => (
                    <div
                      key={`recommendation-${pageIndex}-${index}`}
                      className="bg-background border border-border rounded-lg p-6 shadow-sm h-full"
                    >
                      <div className="space-y-4 h-full flex flex-col">
                        <div className="flex items-center gap-4">
                          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">
                            {recommendation.avatar && (
                              <Image
                                src={recommendation.avatar || "/placeholder.svg"}
                                alt={recommendation.name}
                                fill
                                className="object-cover"
                              />
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium">{recommendation.name}</h3>
                            <p className="text-sm text-muted-foreground">{recommendation.position}</p>
                          </div>
                        </div>
                        <p className="italic text-muted-foreground flex-grow">"{recommendation.quote}"</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background border border-border shadow-sm z-10"
        onClick={goToPrevious}
        disabled={currentPage === 0}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background border border-border shadow-sm z-10"
        onClick={goToNext}
        disabled={currentPage >= totalPages - 1}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next</span>
      </Button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentPage === index ? "bg-primary w-4" : "bg-muted-foreground/30",
            )}
            onClick={() => goToPage(index)}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
