"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedName } from "@/components/animated-name"
import { CaseStudyCarousel } from "@/components/case-study-carousel"
import { useState } from "react"
import { ImageLightbox } from "@/components/image-lightbox"

export default function CheckoutCaseStudy() {
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
            0-1 design system for a web3 gaming community
          </h1>
        </section>

        {/* Hero Image */}
        <div className="container mb-16 animate-on-load animate-fade-in-up animate-delay-300 px-4 md:px-0">
          <div
            className="w-full aspect-[21/9] relative cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() =>
              setLightboxImage({
                src: "/placeholder.svg?height=900&width=1900",
                alt: "0-1 design system for a web3 gaming community Hero",
              })
            }
          >
            <Image
              src="/placeholder.svg?height=900&width=1900"
              alt="0-1 design system for a web3 gaming community Hero"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="container animate-on-load animate-fade-in-up animate-delay-400 px-4 md:px-0">
          <div className="max-w-[1140px] mx-auto grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-foreground/30"></div>
                <span className="text-sm font-medium text-foreground/60">PROJECT OVERVIEW</span>
              </div>
              <p className="text-muted-foreground mb-4">
                This project focused on redesigning the checkout process for an e-commerce platform to reduce cart
                abandonment and increase conversion rates. The existing checkout flow was lengthy, confusing, and
                resulted in a 76% abandonment rate.
              </p>
              <p className="text-muted-foreground">
                Our challenge was to simplify the process while maintaining necessary security and information
                collection, creating a frictionless path to purchase.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="mb-2">Scope</h3>
                <p className="text-muted-foreground">User Flows, Wireframing, Prototyping, A/B Testing</p>
              </div>
              <div>
                <h3 className="mb-2">My Role</h3>
                <p className="text-muted-foreground">UX Designer</p>
              </div>
              <div>
                <h3 className="mb-2">Team</h3>
                <p className="text-muted-foreground">1 Product Owner, 1 UI Designer, 2 Developers</p>
              </div>
              <div>
                <h3 className="mb-2">Timeline</h3>
                <p className="text-muted-foreground">8 weeks (Apr - Jun 2023)</p>
              </div>
            </div>
          </div>

          {/* Problem */}
          <div className="max-w-[1140px] mx-auto mb-40 animate-on-load animate-fade-in-up animate-delay-500 px-4 md:px-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">THE PROBLEM</span>
            </div>
            <p className="text-muted-foreground mb-8">
              The existing checkout process required users to navigate through 5 separate pages, create an account
              before purchasing, and manually enter shipping information even for returning customers. User testing
              revealed that most abandonment occurred during account creation and when faced with unexpected shipping
              costs revealed only at the final step.
            </p>
            <div
              className="aspect-[16/9] relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() =>
                setLightboxImage({
                  src: "/placeholder.svg?height=450&width=800",
                  alt: "Checkout flow problems visualization",
                })
              }
            >
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Checkout flow problems visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Solution */}
          <div className="max-w-[1140px] mx-auto mb-40 animate-on-load animate-fade-in-up animate-delay-600 px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px w-8 bg-foreground/30"></div>
                  <span className="text-sm font-medium text-foreground/60">OUR SOLUTION</span>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  We redesigned the checkout flow to be a single-page process with clearly defined sections. We
                  implemented guest checkout with an option to create an account after purchase, address
                  auto-completion, and upfront shipping cost calculation.
                </p>
                <p className="text-muted-foreground">
                  The new design also includes a progress indicator, saved payment methods, and a streamlined mobile
                  experience to accommodate the 60% of users who shop on mobile devices.
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div
                className="aspect-square relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() =>
                  setLightboxImage({
                    src: "/placeholder.svg?height=400&width=400",
                    alt: "Checkout flow user information",
                  })
                }
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Checkout flow user information"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="aspect-square relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() =>
                  setLightboxImage({
                    src: "/placeholder.svg?height=400&width=400",
                    alt: "Checkout flow payment options",
                  })
                }
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Checkout flow payment options"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div
              className="aspect-[16/9] relative rounded-lg overflow-hidden mb-6 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() =>
                setLightboxImage({
                  src: "/placeholder.svg?height=450&width=800",
                  alt: "Checkout flow complete process",
                })
              }
            >
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Checkout flow complete process"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div
                className="aspect-square relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() =>
                  setLightboxImage({
                    src: "/placeholder.svg?height=400&width=400",
                    alt: "Checkout flow mobile view",
                  })
                }
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Checkout flow mobile view"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="aspect-square relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() =>
                  setLightboxImage({
                    src: "/placeholder.svg?height=400&width=400",
                    alt: "Checkout flow confirmation",
                  })
                }
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Checkout flow confirmation"
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

        {/* More Case Studies */}
        <div className="bg-background py-24 animate-on-load animate-fade-in-up animate-delay-700">
          <div className="max-w-[1140px] mx-auto px-4 md:px-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">EXPLORE MORE WORK</span>
            </div>
            <CaseStudyCarousel currentCaseStudyId="checkout-flow" />
          </div>
        </div>
      </main>

      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage.src || "/placeholder.svg"}
          alt={lightboxImage.alt}
          open={!!lightboxImage}
          onOpenChange={(open) => !open && setLightboxImage(null)}
        />
      )}

      <footer className="border-t py-6 md:py-8 animate-on-load animate-fade-in animate-delay-700">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Bronson Lee. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
