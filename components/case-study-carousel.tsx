"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { allCaseStudies } from "@/lib/case-studies-data"

interface CaseStudyCarouselProps {
  currentCaseStudyId: string
}

export function CaseStudyCarousel({ currentCaseStudyId }: CaseStudyCarouselProps) {
  // Filter out the current case study
  const otherCaseStudies = allCaseStudies.filter((study) => study.id !== currentCaseStudyId)

  const showNavigation = otherCaseStudies.length > 3

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: false, // Disabled infinite loop scrolling
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {otherCaseStudies.map((project) => (
            <CarouselItem
              key={project.id}
              className={`pl-4 ${otherCaseStudies.length === 3 ? "md:basis-[48%] lg:basis-[33.333%]" : "md:basis-[45%] lg:basis-[30%]"}`}
            >
              <Link
                href={project.caseStudyUrl}
                onClick={handleLinkClick}
                className="group block overflow-hidden rounded-lg border border-border bg-background transition-all duration-500 ease-in-out hover:bg-muted relative h-full"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1 transition-colors duration-500 ease-in-out">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">{project.subtitle}</p>
                  <div className="absolute bottom-[-2rem] right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center text-sm text-muted-foreground">
                    View Case Study
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        {showNavigation && (
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0" aria-label="Previous case studies" />
            <CarouselNext className="static translate-y-0" aria-label="Next case studies" />
          </div>
        )}
      </Carousel>
    </div>
  )
}
