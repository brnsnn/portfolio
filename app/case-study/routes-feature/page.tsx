"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedName } from "@/components/animated-name"
import { CaseStudyCarousel } from "@/components/case-study-carousel"
import { useState } from "react"
import { ImageLightbox } from "@/components/image-lightbox"

export default function RoutesFeaturePage() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-on-load animate-fade-in">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-medium">
              <AnimatedName />
            </Link>
            <nav className="flex gap-4 md:gap-6 ml-auto">
              <Link href="/#work" className="text-xs md:text-sm font-medium hover:text-primary nav-bounce px-2 py-1">
                Work
              </Link>
              <Link href="/#about" className="text-xs md:text-sm font-medium hover:text-primary nav-bounce px-2 py-1">
                About
              </Link>
              <Link href="/#contact" className="text-xs md:text-sm font-medium hover:text-primary nav-bounce pl-2 py-1">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <section className="container py-12 md:py-20 animate-on-load animate-fade-in-up animate-delay-200 px-4 md:px-0">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-foreground/30"></div>
            <span className="text-sm font-medium text-foreground/60">CASE STUDY</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight max-w-4xl">
            Improving Community Safety with a Routes Feature
          </h1>
        </section>

        {/* Hero Image */}
        <div className="container mb-16 animate-on-load animate-fade-in-up animate-delay-300 px-4 md:px-0">
          <div className="w-full aspect-[21/9] relative">
            <Image
              src="/community-safety-app.png"
              alt="Routes Feature Interface"
              fill
              className="object-cover rounded-lg"
              priority
              onClick={() => setLightboxImage({ src: "/community-safety-app.png", alt: "Routes Feature Interface" })}
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
                This project involved designing a navigation feature that helps community members find safer routes and
                avoid high-risk areas. The goal was to integrate community safety data with navigation functionality to
                empower users to make informed decisions about their travel routes.
              </p>
              <p className="text-muted-foreground">
                The feature needed to provide multiple route options, highlight safer paths, and allow users to avoid
                areas with recent incidents while maintaining their privacy and security.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="mb-2">Scope</h3>
                <p className="text-muted-foreground">
                  Community Safety Navigation, Route Planning, User Interface Design
                </p>
              </div>
              <div>
                <h3 className="mb-2">My Role</h3>
                <p className="text-muted-foreground">UX Designer</p>
              </div>
              <div>
                <h3 className="mb-2">Team</h3>
                <p className="text-muted-foreground">
                  2 Lead UX Designers, 3 UX Designers, UX Research, Developers, 1 Project Manager
                </p>
              </div>
              <div>
                <h3 className="mb-2">Timeline</h3>
                <p className="text-muted-foreground">4 months</p>
              </div>
            </div>
          </div>

          {/* Impact Metrics Section */}
          <div className="max-w-[1140px] mx-auto mb-40 animate-on-load animate-fade-in-up animate-delay-500 px-4 md:px-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">IMPACT</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-normal mb-2">85%</div>
                <p className="text-muted-foreground">User adoption rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-normal mb-2">40%</div>
                <p className="text-muted-foreground">Reduction in safety incidents</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-normal mb-2">92%</div>
                <p className="text-muted-foreground">User satisfaction score</p>
              </div>
            </div>
          </div>

          <div className="max-w-[1140px] mx-auto mb-40 animate-on-load animate-fade-in-up animate-delay-600 px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px w-8 bg-foreground/30"></div>
                  <span className="text-sm font-medium text-foreground/60">THE PROBLEM</span>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-8">
                  Community members needed a way to navigate their neighborhoods safely, avoiding areas with recent
                  incidents or high-risk zones. The existing navigation tools didn't account for community safety data
                  or provide alternative routes based on safety considerations. Without access to real-time safety
                  information and alternative routing options, community members were unable to make informed decisions
                  about their travel routes, potentially putting themselves at risk.
                </p>
                <div
                  className="aspect-[16/9] relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() =>
                    setLightboxImage({
                      src: "/community-safety-navigation.png",
                      alt: "Community Safety Navigation Problem",
                    })
                  }
                >
                  <Image
                    src="/community-safety-navigation.png"
                    alt="Community Safety Navigation Problem"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div
                className="aspect-square relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() =>
                  setLightboxImage({
                    src: "/community-safety-routes-interface.png",
                    alt: "Routes Feature Interface",
                  })
                }
              >
                <Image
                  src="/community-safety-routes-interface.png"
                  alt="Routes Feature Interface"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="aspect-square relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() =>
                  setLightboxImage({
                    src: "/safety-route-options-interface.png",
                    alt: "Route Options Interface",
                  })
                }
              >
                <Image
                  src="/safety-route-options-interface.png"
                  alt="Route Options Interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div
              className="aspect-[16/9] relative rounded-lg overflow-hidden mb-6 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() =>
                setLightboxImage({
                  src: "/community-safety-alerts-map.png",
                  alt: "Safety Alerts Map",
                })
              }
            >
              <Image src="/community-safety-alerts-map.png" alt="Safety Alerts Map" fill className="object-cover" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div
                className="aspect-square relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() =>
                  setLightboxImage({
                    src: "/placeholder.svg?height=400&width=400",
                    alt: "Community safety dashboard",
                  })
                }
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Community safety dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="aspect-square relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() =>
                  setLightboxImage({
                    src: "/placeholder.svg?height=400&width=400",
                    alt: "Route preferences settings",
                  })
                }
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Route preferences settings"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-center mb-20">
              <Button asChild size="lg">
                <Link href="#">View Full Case Study</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-background py-24 animate-on-load animate-fade-in-up animate-delay-700">
          <div className="max-w-[1140px] mx-auto px-4 md:px-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">EXPLORE MORE WORK</span>
            </div>
            <CaseStudyCarousel currentCaseStudyId="routes-feature" />
          </div>
        </div>

        {/* Lightbox Component */}
        <ImageLightbox
          src={lightboxImage?.src || "/placeholder.svg"}
          alt={lightboxImage?.alt || ""}
          open={!!lightboxImage}
          onOpenChange={(open) => !open && setLightboxImage(null)}
        />
      </main>

      <footer className="border-t py-6 md:py-8 animate-on-load animate-fade-in animate-delay-700">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Bronson Lee. All rights reserved.
          </p>
          <Link
            href="https://linkedin.com/in/brnsnlee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </footer>
    </div>
  )
}
