"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

export interface RecommendationItem {
  author: string
  role: string
  body: string
}

interface RecommendationsCarouselProps {
  items: RecommendationItem[]
}

export function RecommendationsCarouselEmbla({ items }: RecommendationsCarouselProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpanded = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index))
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {items.map((item, index) => {
          const isExpanded = expandedIndex === index

          return (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Author and role */}
                    <div>
                      <h3 className="font-semibold text-lg">{item.author}</h3>
                      <p className="text-sm text-muted-foreground">{item.role}</p>
                    </div>

                    {/* Recommendation body */}
                    <div>
                      <div
                        className={cn(
                          "text-muted-foreground transition-all duration-300 space-y-4",
                          !isExpanded && "line-clamp-4",
                        )}
                      >
                        {item.body.split("\n\n").map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>

                      {/* Read more/less toggle */}
                      {item.body.length > 200 && (
                        <button
                          onClick={() => toggleExpanded(index)}
                          className="text-sm text-primary hover:underline mt-2"
                        >
                          {isExpanded ? "Read less" : "Read more"}
                        </button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious className="-left-4" />
      <CarouselNext className="-right-4" />
    </Carousel>
  )
}
