"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatedName } from "@/components/animated-name"
import { useState } from "react"
import { CaseStudyCarousel } from "@/components/case-study-carousel"
import { ImageLightbox } from "@/components/image-lightbox"
import { ArrowDown, ArrowUp, ArrowRight } from "lucide-react"

export default function PhillyTruceCaseStudy() {
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
            Reducing violence by improving record-keeping accuracy by 15%
          </h1>
        </section>

        {/* Hero Image */}
        <div className="container mb-12 animate-on-load animate-fade-in-up animate-delay-300">
          <div
            className="w-full relative rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity aspect-video"
            onClick={() =>
              setLightboxImage({
                src: "/images/pt-hero.avif",
                alt: "Philly Truce incident report redesign",
              })
            }
          >
            <Image
              src="/images/pt-hero.avif"
              alt="Philly Truce incident report redesign"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Project Overview */}
        <div className="container animate-on-load animate-fade-in-up animate-delay-400">
          <div className="max-w-[1140px] mx-auto grid md:grid-cols-2 gap-12 mb-32">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-foreground/30"></div>
                <span className="text-sm font-medium text-foreground/60">PROJECT OVERVIEW</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Philly Truce is a Philadelphia-based grassroots organization dedicated to reducing violence through
                community-led intervention. Peace Patrol Officers relied on paper-based incident reports, which were
                time-consuming to complete, inconsistent, and difficult to access or analyze.
              </p>
              <p className="text-muted-foreground">
                The goal of this project was to design a mobile-friendly digital incident reporting system that fit
                officers’ real-world workflows, supported fast documentation in the field, and improved data quality for
                operational insight and decision-making.
              </p>
            </div>
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="mb-2">Client</h3>
                  <p className="text-muted-foreground">Philly Truce</p>
                </div>
                <div>
                  <h3 className="mb-2">Timeline</h3>
                  <p className="text-muted-foreground">4 months</p>
                </div>
                <div>
                  <h3 className="mb-2">My Role</h3>
                  <p className="text-muted-foreground">Lead UX Designer</p>
                </div>
              </div>
              <div>
                <h3 className="mb-2">Team</h3>
                <p className="text-muted-foreground">
                  2 Lead UX Designers, 3 UX Designers, UX Research, Developers, 1 Project Manager, 4 Content Designers
                </p>
              </div>
              <div>
                <h3 className="mb-2">Scope</h3>
                <p className="text-muted-foreground">
                  Designed a mobile digital reporting system to replace paper-based incident forms for Peace Patrol
                  Officers.
                </p>
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
              <h3 className="text-4xl font-medium mb-2 flex items-center gap-2">
                15%
                <ArrowUp className="w-8 h-8" />
              </h3>
              <p className="text-muted-foreground">
                Increase in report creation with revised <br />
                new report button
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-medium mb-2 flex items-center gap-2">
                35%
                <ArrowUp className="w-8 h-8" />
              </h3>
              <p className="text-muted-foreground">
                Improvement in user <br />
                satisfaction scores
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-medium mb-2 flex items-center gap-2">
                15%
                <ArrowUp className="w-8 h-8" />
              </h3>
              <p className="text-muted-foreground">Increase in record-keeping accuracy by patrol officers</p>
            </div>
            <div>
              <h3 className="text-4xl font-medium mb-2 flex items-center gap-2">
                20%
                <ArrowRight className="w-8 h-8" />
              </h3>
              <p className="text-muted-foreground">
                Faster task completion in <br />
                the admin portal
              </p>
            </div>
          </div>
        </div>

        {/* THE PROBLEM */}
        <div className="max-w-[1140px] mx-auto mb-6 animate-on-load animate-fade-in-up animate-delay-600">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-foreground/30"></div>
                <span className="text-sm font-medium text-foreground/60">THE PROBLEM</span>
              </div>
            </div>
            <div>
              <p className="text-muted-foreground">
                Peace patrol officers in Philadelphia struggled with inaccurate and inconsistent record-keeping, making
                it difficult to track interventions and measure impact effectively. The existing system lacked
                usability, efficiency, and reliability, leading to operational inefficiencies and missed opportunities
                for violence prevention.
              </p>
            </div>
          </div>
        </div>

        {/* Paper Report Image */}
        <div className="max-w-[1140px] mx-auto mb-8 animate-on-load animate-fade-in-up animate-delay-700">
          <div
            className="w-full relative rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity mb-4 h-auto"
            onClick={() =>
              setLightboxImage({
                src: "/images/Paper-Report-1.jpg",
                alt: "Example of how incident reports were made on paper before going digital",
              })
            }
          >
            <Image
              src="/images/Paper-Report-1.jpg"
              alt="Example of how incident reports were made on paper before going digital"
              width={1140}
              height={1440}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Example of how incident reports were made on paper before going digital.
          </p>
        </div>

        {/* Goals Section */}
        <div className="max-w-[1140px] mx-auto mb-40 mt-32 animate-on-load animate-fade-in-up animate-delay-800">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-foreground/30"></div>
            <span className="text-sm font-medium text-foreground/60">GOALS</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <h4 className="font-medium mb-2">Reduce Errors</h4>
              <p className="text-muted-foreground text-sm">
                Minimize data entry mistakes and incomplete fields through better form structure and validation.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Improve Speed</h4>
              <p className="text-muted-foreground text-sm">
                Enable officers to complete reports faster using a streamlined workflow and smart defaults.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Enhance Data Quality</h4>
              <p className="text-muted-foreground text-sm">
                Capture more complete and consistent data to improve analysis and response coordination.
              </p>
            </div>
          </div>
        </div>

        {/* OUR SOLUTION */}
        <div className="max-w-[1140px] mx-auto mb-40 animate-on-load animate-fade-in-up animate-delay-900">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-foreground/30"></div>
                <span className="text-sm font-medium text-foreground/60">OUR SOLUTION</span>
              </div>
            </div>
            <div>
              <p className="text-muted-foreground mb-4">
                Led the design of a mobile web app to digitize incident reporting and streamline Peace Patrol Officers’
                workflows.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Row 1: Dashboard and Transactions */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Dashboard */}
              <div
                className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border border-gray-200 aspect-square"
                onClick={() =>
                  setLightboxImage({
                    src: "/images/philly-truce-dashboard.jpg",
                    alt: "Philly Truce app dashboard",
                  })
                }
              >
                <Image
                  src="/images/philly-truce-dashboard.jpg"
                  alt="Philly Truce app dashboard"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Transactions */}
              <div
                className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border border-gray-200 aspect-square"
                onClick={() =>
                  setLightboxImage({
                    src: "/images/philly-truce-transactions.jpg",
                    alt: "Philly Truce app transactions",
                  })
                }
              >
                <Image
                  src="/images/philly-truce-transactions.jpg"
                  alt="Philly Truce app transactions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Row 2: Features Overview */}
            <div
              className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border border-gray-200 aspect-square"
              onClick={() =>
                setLightboxImage({
                  src: "/images/philly-truce-features.jpg",
                  alt: "Philly Truce app features overview",
                })
              }
            >
              <Image
                src="/images/philly-truce-features.jpg"
                alt="Philly Truce app features overview"
                fill
                className="object-cover"
              />
            </div>

            {/* Row 3: Budget Feature and Settings */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Budget Feature */}
              <div
                className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border border-gray-200 aspect-square"
                onClick={() =>
                  setLightboxImage({
                    src: "/images/philly-truce-budget.jpg",
                    alt: "Philly Truce app budget feature",
                  })
                }
              >
                <Image
                  src="/images/philly-truce-budget.jpg"
                  alt="Philly Truce app budget feature"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Settings */}
              <div
                className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border border-gray-200 aspect-square"
                onClick={() =>
                  setLightboxImage({
                    src: "/images/philly-truce-settings.jpg",
                    alt: "Philly Truce app settings",
                  })
                }
              >
                <Image
                  src="/images/philly-truce-settings.jpg"
                  alt="Philly Truce app settings"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Explore More Work */}
        <div className="bg-background py-24 animate-on-load animate-fade-in-up animate-delay-1000">
          <div className="max-w-[1140px] mx-auto px-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">EXPLORE MORE WORK</span>
            </div>
            <CaseStudyCarousel currentCaseStudyId="philly-truce" />
          </div>
        </div>
      </main>

      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />

      {/* Footer */}
      <footer className="border-t py-6 md:py-8 animate-on-load animate-fade-in animate-delay-1000">
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
