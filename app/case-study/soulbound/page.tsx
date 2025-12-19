"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatedName } from "@/components/animated-name"
import { ImageLightbox } from "@/components/image-lightbox"
import { CaseStudyCarousel } from "@/components/case-study-carousel"
import { BorderedVideo } from "@/components/bordered-video"
import React from "react"

export default function SoulboundCaseStudy() {
  const [lightboxImage, setLightboxImage] = React.useState<{ src: string; alt: string } | null>(null)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-on-load animate-fade-in">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-medium">
              <AnimatedName />
            </Link>
            <nav className="flex gap-4 md:gap-6 ml-auto">
              <Link href="/#work" className="text-xs md:text-sm font-medium nav-text-swap px-2 py-1">
                <span className="nav-text-swap-inner">
                  <span className="nav-text-swap-item">Work</span>
                  <span className="nav-text-swap-item">Work</span>
                </span>
              </Link>
              <Link href="/#about" className="text-xs md:text-sm font-medium nav-text-swap px-2 py-1">
                <span className="nav-text-swap-inner">
                  <span className="nav-text-swap-item">About</span>
                  <span className="nav-text-swap-item">About</span>
                </span>
              </Link>
              <Link href="/#contact" className="text-xs md:text-sm font-medium nav-text-swap px-2 py-1">
                <span className="nav-text-swap-inner">
                  <span className="nav-text-swap-item">Contact</span>
                  <span className="nav-text-swap-item">Contact</span>
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <section className="container py-12 md:py-20 animate-on-load animate-fade-in-up animate-delay-200 px-4 md:px-0">
          <div className="max-w-[1140px] mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">CASE STUDY</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
              0-1 design system for a<br />
              web3 gaming community
            </h1>
          </div>
        </section>

        {/* Hero Image */}
        <div className="container mb-12 animate-on-load animate-fade-in-up animate-delay-300">
          <div
            className="w-full aspect-[16/9] relative cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() =>
              setLightboxImage({
                src: "/soulbound-design-system-thumbnail-updated.jpg",
                alt: "Soulbound web3 gaming community design system",
              })
            }
          >
            <Image
              src="/soulbound-design-system-thumbnail-updated.jpg"
              alt="Soulbound web3 gaming community design system"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        <div className="container animate-on-load animate-fade-in-up animate-delay-400 px-4 md:px-0">
          <div className="max-w-[1140px] mx-auto grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-foreground/30"></div>
                <span className="text-sm font-medium text-foreground/60">PROJECT OVERVIEW</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Built a scalable design system for Soulbound, enabling consistent user experiences across the web3
                gaming ecosystem while supporting rapid feature development.
              </p>
              <p className="text-muted-foreground">
                The system established visual patterns, reusable components, and clear guidelines that transformed how
                the team approached design and development.
              </p>
            </div>
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="mb-2">Client</h3>
                  <p className="text-muted-foreground">Soulbound</p>
                </div>
                <div>
                  <h3 className="mb-2">Timeline</h3>
                  <p className="text-muted-foreground">3 months</p>
                </div>
                <div>
                  <h3 className="mb-2">My Role</h3>
                  <p className="text-muted-foreground">UX Designer</p>
                </div>
              </div>
              <div>
                <h3 className="mb-2">Team</h3>
                <p className="text-muted-foreground">2 UX Designers, 3 Developers, 1 Product Manager</p>
              </div>
              <div>
                <h3 className="mb-2">Scope</h3>
                <p className="text-muted-foreground">Design System, Component Library, Visual Design</p>
              </div>
            </div>
          </div>
        </div>

        {/* THE IMPACT section */}
        <div className="container animate-on-load animate-fade-in-up animate-delay-500 px-4 md:px-0">
          <div className="max-w-[1140px] mx-auto mb-40">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">THE IMPACT</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-4xl font-medium mb-2">30%</h3>
                <p className="text-muted-foreground">Less time recreating components for new screens</p>
              </div>
              <div>
                <h3 className="text-4xl font-medium mb-2">25%</h3>
                <p className="text-muted-foreground">Reduction in design inconsistencies</p>
              </div>
              <div>
                <h3 className="text-4xl font-medium mb-2">100%</h3>
                <p className="text-muted-foreground">
                  Of text and UI elements now meet WCAG AA color contrast standards
                </p>
              </div>
            </div>
          </div>
          <BorderedVideo src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Soulbound-Video-XEloqIf3TnWFZBMb75HRIcZLnG6uWv.mp4" alt="Soulbound design system video demonstration" />
        </div>

        {/* GOALS section */}
        <div className="container animate-on-load animate-fade-in-up animate-delay-600 px-4 md:px-0">
          <div className="max-w-[1140px] mx-auto mb-40">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">GOALS</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div>
                <h4 className="font-medium mb-2">Establish a Cohesive Design System</h4>
                <p className="text-muted-foreground">
                  consistent typography, colors, spacing, and UI components across the platform.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Enhance UI Consistency and Scalability</h4>
                <p className="text-muted-foreground">
                  Integrate branding, accessibility, and stylistic touches to enhance aesthetics.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Elevate the Visual Identify of Platform</h4>
                <p className="text-muted-foreground">
                  Support growth and features with a consistent, recognizable brand identity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* OUR SOLUTION section */}
        <div className="container animate-on-load animate-fade-in-up animate-delay-700 px-4 md:px-0">
          <div className="max-w-[1140px] mx-auto mb-40">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px w-8 bg-foreground/30"></div>
                  <span className="text-sm font-medium text-foreground/60">OUR SOLUTION</span>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  I established a unified design system from the ground up, defining typography, color palettes,
                  spacing, and reusable components. This system created consistency across interfaces, streamlined
                  design and development, and reinforced a cohesive, scalable brand identity.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden w-full border border-gray-200 mb-4">
              <Image
                src="/soulbound-font1.jpg"
                alt="Chakra Petch typography scale with size, line-height, and letter-spacing specifications"
                width={1140}
                height={800}
                className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() =>
                  setLightboxImage({
                    src: "/soulbound-font1.jpg",
                    alt: "Chakra Petch typography scale with size, line-height, and letter-spacing specifications",
                  })
                }
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <p className="text-muted-foreground mb-2">
                  The Chakra Petch scale establishes a bold, tech-forward typographic hierarchy designed for high-impact
                  moments across the platform.
                </p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden w-full border border-gray-200 mb-4">
              <Image
                src="/soulbound-font2.jpg"
                alt="Poppins typography scale with size, line-height, and letter-spacing specifications"
                width={1140}
                height={800}
                className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() =>
                  setLightboxImage({
                    src: "/soulbound-font2.jpg",
                    alt: "Poppins typography scale with size, line-height, and letter-spacing specifications",
                  })
                }
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <p className="text-muted-foreground mb-2">
                  The Poppins scale provides a clean, modern, and highly legible counterpart to the more expressive
                  display typography.
                </p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden w-full border border-gray-200 mb-4">
              <Image
                src="/spacing.jpg"
                alt="Design system spacing scale based on golden ratio"
                width={1140}
                height={400}
                className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() =>
                  setLightboxImage({
                    src: "/spacing.jpg",
                    alt: "Design system spacing scale based on golden ratio",
                  })
                }
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <p className="text-muted-foreground mb-2">
                  Built on the golden ratio and rounded to whole numbers, this spacing system creates a consistent,
                  scalable rhythm and clear visual hierarchy.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/soulbound-palette.jpg"
                  alt="Design system color palette"
                  fill
                  className="object-contain bg-white cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() =>
                    setLightboxImage({
                      src: "/soulbound-palette.jpg",
                      alt: "Design system color palette",
                    })
                  }
                />
              </div>
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/soulbound-accessibility.jpg"
                  alt="Design system accessibility and color contrast standards"
                  fill
                  className="object-contain bg-white cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() =>
                    setLightboxImage({
                      src: "/soulbound-accessibility.jpg",
                      alt: "Design system accessibility and color contrast standards",
                    })
                  }
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <p className="text-muted-foreground mb-2">
                  The color palette and accessibility standards ensure vibrant brand expression while maintaining WCAG
                  AA compliance for all text and UI elements.
                </p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden w-full border border-gray-200">
              <Image
                src="/soulbound-logo-updated.jpg"
                alt="Soulbound logo variations across different color backgrounds"
                width={1140}
                height={1140}
                className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() =>
                  setLightboxImage({
                    src: "/soulbound-logo-updated.jpg",
                    alt: "Soulbound logo variations across different color backgrounds",
                  })
                }
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <p className="text-muted-foreground mb-2">
                  Six logo variations provide flexibility across diverse backgrounds while maintaining brand consistency
                  and recognition.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="aspect-square relative rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/soulbound-button.jpg"
                  alt="Soulbound button states"
                  fill
                  className="object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() =>
                    setLightboxImage({
                      src: "/soulbound-button.jpg",
                      alt: "Soulbound button states",
                    })
                  }
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden bg-white border border-gray-200">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Soulbound-Button-OscjsYwV91BQwHGvxC9N9vKslp1UXz.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-[1.01]"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <p className="text-muted-foreground mb-2">
                  Button states demonstrate clear interaction feedback with default and hover for visual clarity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Explore More Work section with CaseStudyCarousel */}
        <div className="bg-background py-24 animate-on-load animate-fade-in-up animate-delay-1000">
          <div className="max-w-[1140px] mx-auto px-4 md:px-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">EXPLORE MORE WORK</span>
            </div>
            <CaseStudyCarousel currentCaseStudyId="soulbound" />
          </div>
        </div>

        <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />

        {/* Main footer */}
        <footer className="border-t py-6 md:py-8 animate-on-load animate-fade-in animate-delay-800">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              {"© " + new Date().getFullYear() + " Bronson Lee. All rights reserved."}
            </p>
            <span className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-text-swap">
              <span className="nav-text-swap-inner">
                <span className="nav-text-swap-item">LinkedIn</span>
                <span className="nav-text-swap-item">LinkedIn</span>
              </span>
            </span>
          </div>
        </footer>
      </main>

      {/* Lightbox component */}
      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage.src || "/placeholder.svg"}
          alt={lightboxImage.alt}
          open={!!lightboxImage}
          onOpenChange={(open) => !open && setLightboxImage(null)}
        />
      )}
    </div>
  )
}
