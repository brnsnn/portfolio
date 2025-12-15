"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatedName } from "@/components/animated-name"
import { useState } from "react"
import { CaseStudyCarousel } from "@/components/case-study-carousel"
import { ImageLightbox } from "@/components/image-lightbox"

const otherCaseStudies = [
  {
    title: "Reducing violence by improving record-keeping accuracy by 15%",
    subtitle: "Philly Truce",
    image: "/placeholder.svg?height=400&width=600",
    caseStudyUrl: "/case-study/philly-truce",
  },
  {
    title: "0-1 design system for a web3 gaming community",
    subtitle: "Soulbound",
    image: "/placeholder.svg?height=400&width=600",
    caseStudyUrl: "/case-study/soulbound",
  },
  {
    title: "100,000+ views supporting high-risk HIV protection efforts",
    subtitle: "Chill Pill",
    image: "/placeholder.svg?height=400&width=600",
    caseStudyUrl: "/case-study/chill-pill",
  },
]

export default function TravelAppCaseStudy() {
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
        <section className="container py-12 md:py-20 animate-on-load animate-fade-in-up animate-delay-200">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-foreground/30"></div>
            <span className="text-sm font-medium text-foreground/60">CASE STUDY</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight max-w-4xl">
            Unifying mobile and desktop with a scalable design system that boosted efficiency by 40%
          </h1>
        </section>

        {/* Hero Image */}
        <div className="container mb-12 animate-on-load animate-fade-in-up animate-delay-300">
          <div
            className="w-full aspect-[16/9] relative cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() =>
              setLightboxImage({
                src: "/Benchmark-Design-System-thumbnail.jpg",
                alt: "Design System for Peace-Building Platform Hero",
              })
            }
          >
            <Image
              src="/Benchmark-Design-System-thumbnail.jpg"
              alt="Design System for Peace-Building Platform Hero"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="container animate-on-load animate-fade-in-up animate-delay-400">
          <div className="max-w-[1140px] mx-auto grid md:grid-cols-2 gap-12 mb-32">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-foreground/30"></div>
                <span className="text-sm font-medium text-foreground/60">PROJECT OVERVIEW</span>
              </div>
              <p className="text-muted-foreground mb-4">
                I built Benchmark, a cross-platform design system that unified Philly Truce’s mobile Peace Patrol app
                and desktop admin platform. Before, each platform felt fragmented — different fonts, buttons, colors,
                and interaction patterns created confusion for users and slowed down design and development.
              </p>

              <p className="text-muted-foreground mb-4">
                By creating shared foundations and reusable components, I reduced design and dev time by 40%, improved
                record-keeping accuracy by 15%, and made the product feel cohesive across touchpoints.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="mb-2">Client</h3>
                <p className="text-muted-foreground">Philly Truce</p>
              </div>
              <div>
                <h3 className="mb-2">Scope</h3>
                <p className="text-muted-foreground">
                  Audit & discovery, foundations, core components, cross-platform unification, accessibility &
                  usability, implementation & collaboration
                </p>
              </div>
              <div>
                <h3 className="mb-2">My Role</h3>
                <p className="text-muted-foreground">Lead Designer</p>
              </div>
              <div>
                <h3 className="mb-2">Team</h3>
                <p className="text-muted-foreground">Mobile / Desktop design team, Dev team, 2 Managers, 4 Content designers</p>
              </div>
              <div>
                <h3 className="mb-2">Timeline</h3>
                <p className="text-muted-foreground">4 months</p>
              </div>
            </div>
          </div>
        </div>

        {/* THE IMPACT */}
        <div className="max-w-[1140px] mx-auto mb-40 animate-on-load animate-fade-in-up animate-delay-500">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-foreground/30"></div>
            <span className="text-sm font-medium text-foreground/60">THE IMPACT</span>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-4xl font-medium mb-2">40%</h3>
              <p className="text-muted-foreground">
                Reduction in design + development time via <br />
                shared system
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-medium mb-2">35%</h3>
              <p className="text-muted-foreground">
                Improvement in user <br />
                satisfaction scores
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-medium mb-2">15%</h3>
              <p className="text-muted-foreground">Increase in record-keeping accuracy by patrol officers</p>
            </div>
            <div>
              <h3 className="text-4xl font-medium mb-2">20%</h3>
              <p className="text-muted-foreground">
                Faster task completion in <br />
                the admin portal
              </p>
            </div>
          </div>
        </div>

        {/* Problem */}
        <div className="max-w-[1140px] mx-auto mb-40 animate-on-load animate-fade-in-up animate-delay-600">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-foreground/30"></div>
            <span className="text-sm font-medium text-foreground/60">THE PROBLEM</span>
          </div>
          <div
            className="aspect-[16/9] relative rounded-lg overflow-hidden mb-6 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() =>
              setLightboxImage({
                src: "/Before-1.jpg?height=450&width=800",
                alt: "Before mobile and desktop revisions",
              })
            }
          >
            <Image
              src="/Before-1.jpg?height=450&width=800"
              alt="Before mobile and desktop revisions"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <p className="text-muted-foreground mb-2">
                The mobile and desktop experiences looked and behaved differently, creating inconsistencies that
                confused users and slowed down the design and development team.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">
                To solve this, I set out to create a unified brand and product experience across touchpoints.
              </p>
            </div>
          </div>

          <div
            className="aspect-[16/9] relative rounded-lg overflow-hidden mb-6 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() =>
              setLightboxImage({ src: "/After-1.jpg?height=450&width=800", alt: "After mobile and desktop revisions" })
            }
          >
            <Image
              src="/After-1.jpg?height=450&width=800"
              alt="After mobile and desktop revisions"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <p className="text-muted-foreground mb-2">
                Unified typography, color, and spacing create a consistent experience across the mobile app. Buttons and
                toggles now meet accessibility standards, improving readability and touch targets in the field. A
                streamlined interface makes route cards easier to scan, while consistent iconography reduces confusion
                for officers on the go.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">
                The admin portal now uses standardized tokens and components, ensuring consistent typography, color, and
                spacing across modules. Tables, cards, and status badges are aligned to a cohesive system, improving
                legibility and reducing design and development time.
              </p>
            </div>
          </div>
          <div
            className="aspect-[16/9] relative rounded-lg overflow-hidden mb-6 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() =>
              setLightboxImage({
                src: "/Mobile-Annotations-1.jpg",
                alt: "Mobile design annotations showing UI improvements including inactive tab contrast, filter indicators, icon sizing, button accessibility, and rounded icon styling",
              })
            }
          >
            <Image
              src="/Mobile-Annotations-1.jpg"
              alt="Mobile design annotations showing UI improvements including inactive tab contrast, filter indicators, icon sizing, button accessibility, and rounded icon styling"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <p className="text-muted-foreground mb-2">
                The design annotations highlight key improvements made to enhance usability and accessibility. Each
                element was carefully considered to create a more intuitive user experience.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">
                From improved button sizing to meet accessibility guidelines to refined icon styles for better
                legibility, these changes collectively improved user satisfaction by 35%.
              </p>
            </div>
          </div>
          <div
            className="aspect-[16/9] relative rounded-lg overflow-hidden mb-6 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() =>
              setLightboxImage({
                src: "/Desktop-Annotations-1.jpg",
                alt: "Desktop design annotations showing UI improvements including inactive tab contrast, filter indicators, icon sizing, button accessibility, and rounded icon styling",
              })
            }
          >
            <Image
              src="/Desktop-Annotations-1.jpg"
              alt="Desktop design annotations showing UI improvements including inactive tab contrast, filter indicators, icon sizing, button accessibility, and rounded icon styling"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-muted-foreground mb-2">
                The desktop annotations showcase systematic improvements to the admin interface, focusing on clearer
                visual hierarchy and streamlined workflows for route management.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">
                These desktop-specific enhancements reduced task completion time by 25% and significantly improved
                administrator efficiency in managing route assignments.
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="max-w-[1140px] mx-auto animate-on-load animate-fade-in-up animate-delay-700">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-foreground/30"></div>
            <span className="text-sm font-medium text-foreground/60">OUR APPROACH</span>
          </div>
        </div>

        <div className="max-w-[1140px] mx-auto mb-48">
          {/* Audit & Discovery */}
          <div className="mb-40">
            <h3 className="font-medium text-lg mb-6">Audit & Discovery</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div
                  className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4 cursor-pointer hover:opacity-90 transition-opacity border border-gray-200"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/typography-20-20before.jpg",
                      alt: "Typography audit",
                    })
                  }
                >
                  <Image
                    src="/images/typography-20-20before.jpg"
                    alt="Typography audit"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-medium mb-2">Typography</h4>
                <p className="text-muted-foreground text-base">
                  We audited typography across both platforms, identifying inconsistencies in font families, sizes,
                  weights, and line heights that created visual discord and readability issues.
                </p>
              </div>
              <div>
                <div
                  className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4 cursor-pointer hover:opacity-90 transition-opacity border border-gray-200"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/color-20-20before.jpg",
                      alt: "Color audit",
                    })
                  }
                >
                  <Image src="/images/color-20-20before.jpg" alt="Color audit" fill className="object-cover" />
                </div>
                <h4 className="font-medium mb-2">Color</h4>
                <p className="text-muted-foreground text-base">
                  Our color audit revealed inconsistent palettes and insufficient contrast ratios that failed
                  accessibility standards, requiring a unified approach to color tokens and usage guidelines.
                </p>
              </div>
              <div>
                <div
                  className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4 cursor-pointer hover:opacity-90 transition-opacity border border-gray-200"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/components-20-20before.jpg",
                      alt: "Components audit",
                    })
                  }
                >
                  <Image
                    src="/images/components-20-20before.jpg"
                    alt="Components audit"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-medium mb-2">Components</h4>
                <p className="text-muted-foreground text-base">
                  We cataloged all existing UI components across platforms, identifying duplicates, variations, and gaps
                  that needed consolidation into a unified component library.
                </p>
              </div>
            </div>
          </div>

          {/* THE SOLUTION */}
          <div className="max-w-[1140px] mx-auto mb-40 animate-on-load animate-fade-in-up animate-delay-800">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">THE SOLUTION</span>
            </div>
            <h3 className="font-medium text-lg mb-8">Aligning Foundations</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Typography */}
              <div>
                <div
                  className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4 cursor-pointer hover:opacity-90 transition-opacity border border-gray-200"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/typography-20-20after.jpg",
                      alt: "Typography solution",
                    })
                  }
                >
                  <Image
                    src="/images/typography-20-20after.jpg"
                    alt="Typography solution"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-medium text-lg mb-2">Typography</h3>
                <p className="text-muted-foreground text-base">
                  Established a unified type scale and hierarchy that works seamlessly across mobile and desktop,
                  improving readability and brand consistency.
                </p>
              </div>

              {/* Color */}
              <div>
                <div
                  className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4 cursor-pointer hover:opacity-90 transition-opacity border border-gray-200"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/color-20-20after.jpg",
                      alt: "Color solution",
                    })
                  }
                >
                  <Image src="/images/color-20-20after.jpg" alt="Color solution" fill className="object-cover" />
                </div>
                <h3 className="font-medium text-lg mb-2">Color</h3>
                <p className="text-muted-foreground text-base">
                  Created an accessible color system with consistent tokens for primary, secondary, and semantic colors
                  that meet WCAG AA standards.
                </p>
              </div>

              {/* Components */}
              <div>
                <div
                  className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4 cursor-pointer hover:opacity-90 transition-opacity border border-gray-200"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/components-20-20after.jpg",
                      alt: "Components solution",
                    })
                  }
                >
                  <Image
                    src="/images/components-20-20after.jpg"
                    alt="Components solution"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-medium text-lg mb-2">Components</h3>
                <p className="text-muted-foreground text-base">
                  Designed and documented a library of reusable components with variants, states, and usage guidelines
                  for faster implementation.
                </p>
              </div>
            </div>

            {/* Descriptive paragraphs */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  The Benchmark design system unified Philly Truce's mobile and desktop experiences through shared
                  design tokens, reusable components, and comprehensive documentation. Every element—from typography and
                  color to buttons and forms—was standardized to create a cohesive product experience.
                </p>
                <p className="text-muted-foreground mb-4">
                  The system included accessibility guidelines, responsive patterns, and clear implementation specs that
                  empowered both designers and developers to work faster and more confidently.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  By establishing a single source of truth, we eliminated design debt, reduced inconsistencies, and
                  created a scalable foundation that could grow with the product. The system became the backbone for all
                  future feature development.
                </p>
                <p className="text-muted-foreground mb-4">
                  Cross-functional collaboration improved significantly as designers and developers spoke the same
                  language, referencing the same components and patterns throughout the development process.
                </p>
              </div>
            </div>
          </div>

          {/* REFLECTION */}
          <div className="max-w-[1140px] mx-auto mb-48 animate-on-load animate-fade-in-up animate-delay-900">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">REFLECTION</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-3">What Worked Well</h3>
                <p className="text-muted-foreground mb-4">
                  Starting with a comprehensive audit gave us a clear picture of the problems we needed to solve.
                  Building the system collaboratively with developers ensured buy-in and smooth implementation. The
                  documentation became an invaluable resource that continues to guide the team.
                </p>
                <p className="text-muted-foreground">
                  Focusing on accessibility from the start meant we didn't have to retrofit components later, saving
                  time and ensuring a better experience for all users.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-3">What I'd Do Differently</h3>
                <p className="text-muted-foreground mb-4">
                  I would have involved more end users earlier in the process to validate component patterns before full
                  implementation. While we tested thoroughly, earlier user feedback could have caught edge cases sooner.
                </p>
                <p className="text-muted-foreground">
                  I'd also establish a more formal governance process from day one to manage component requests and
                  updates as the system scales. This would help maintain consistency as more teams adopt the system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Explore More Work Section */}
      <div className="bg-background py-24 animate-on-load animate-fade-in-up animate-delay-700">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-foreground/30"></div>
            <span className="text-sm font-medium text-foreground/60">EXPLORE MORE WORK</span>
          </div>
          <CaseStudyCarousel currentCaseStudyId="benchmark" />
        </div>
      </div>

      <footer className="border-t py-6 md:py-8 animate-on-load animate-fade-in animate-delay-800">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {"© " + new Date().getFullYear() + " Bronson Lee. All rights reserved."}
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
