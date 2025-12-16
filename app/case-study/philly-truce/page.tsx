"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatedName } from "@/components/animated-name"
import { useState } from "react"
import { CaseStudyCarousel } from "@/components/case-study-carousel"
import { ImageLightbox } from "@/components/image-lightbox"
import { ArrowDown, ArrowUp } from "lucide-react"

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
        <section className="container py-12 md:py-20 animate-on-load animate-fade-in-up animate-delay-200 px-4 md:px-0">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-foreground/30"></div>
            <span className="text-sm font-medium text-foreground/60">CASE STUDY</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight max-w-4xl">
            Reducing violence by improving record-keeping accuracy by 15%
          </h1>
        </section>

        {/* Hero Image */}
        <div className="container mb-12 animate-on-load animate-fade-in-up animate-delay-300 px-4 md:px-0">
          <div
            className="w-full relative rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity aspect-video"
            onClick={() =>
              setLightboxImage({
                src: "/images/Philly-Truce-thumbnail.jpg",
                alt: "Philly Truce incident report redesign",
              })
            }
          >
            <Image
              src="/images/Philly-Truce-thumbnail.jpg"
              alt="Philly Truce incident report redesign"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Project Overview */}
        <div className="container animate-on-load animate-fade-in-up animate-delay-400 px-4 md:px-0">
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
        <div className="max-w-[1140px] mx-auto mb-40 animate-on-load animate-fade-in-up animate-delay-500 px-4 md:px-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-foreground/30"></div>
            <span className="text-sm font-medium text-foreground/60">THE IMPACT</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-4xl font-medium mb-2 flex items-center gap-2">
                15%
                <ArrowUp className="w-8 h-8" />
              </h3>
              <p className="text-muted-foreground">
                Increase in report creation with <br />
                updated new report button
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-medium mb-2 flex items-center gap-2">
                25%
                <ArrowDown className="w-8 h-8" />
              </h3>
              <p className="text-muted-foreground">
                Reduction in distractions, minimizing interruptions and input errors
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-medium mb-2 flex items-center gap-2">
                10-25%
                <ArrowDown className="w-8 h-8" />
              </h3>
              <p className="text-muted-foreground">Reduction in misfiled reports</p>
            </div>
          </div>
        </div>

        {/* THE PROBLEM */}
        <div className="max-w-[1140px] mx-auto mb-6 animate-on-load animate-fade-in-up animate-delay-600 px-4 md:px-6">
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
        <div className="max-w-[1140px] mx-auto mb-8 animate-on-load animate-fade-in-up animate-delay-700 px-4 md:px-6">
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
        <div className="max-w-[1140px] mx-auto mb-40 mt-32 animate-on-load animate-fade-in-up animate-delay-800 px-4 md:px-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-foreground/30"></div>
            <span className="text-sm font-medium text-foreground/60">GOALS</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <h4 className="font-medium mb-2">Reduce Errors</h4>
              <p className="text-muted-foreground">
                Minimize data entry mistakes and incomplete fields through better form structure.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Improve Speed</h4>
              <p className="text-muted-foreground">
                Enable officers to complete reports faster using a streamlined workflow.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Enhance Data Quality</h4>
              <p className="text-muted-foreground">
                Capture complete and consistent data to improve analysis and response coordination.
              </p>
            </div>
          </div>
        </div>

        {/* OUR SOLUTION */}
        <div className="max-w-[1140px] mx-auto mb-40 animate-on-load animate-fade-in-up animate-delay-900 px-4 md:px-6">
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
            {/* Row 1: Button, Navigation, and Search */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Button */}
              <div>
                <div
                  className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border border-gray-200 aspect-square mb-4"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/NRB.jpg",
                      alt: "Updated New Report Button",
                    })
                  }
                >
                  <Image src="/images/NRB.jpg" alt="Updated New Report Button" fill className="object-cover" />
                </div>
                <h4 className="font-medium mb-2">Improved Primary Action Button</h4>
                <p className="text-muted-foreground text-base">
                  Circular floating action button clearly separates the primary action from the report list.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <div
                  className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border border-gray-200 aspect-square mb-4"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/Nav.jpg",
                      alt: "Improved clear active and inactive states",
                    })
                  }
                >
                  <Image
                    src="/images/Nav.jpg"
                    alt="Improved clear active and inactive states"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-medium mb-2">Clear Active States</h4>
                <p className="text-muted-foreground text-base">
                  Clear active states improved navigation and reduced errors.
                </p>
              </div>

              {/* Search */}
              <div>
                <div
                  className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border border-gray-200 aspect-square mb-4"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/Search.jpg",
                      alt: "Relocated search to a top-nav icon",
                    })
                  }
                >
                  <Image
                    src="/images/Search.jpg"
                    alt="Relocated search to a top-nav icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-medium mb-2">Reduced Visual Clutter</h4>
                <p className="text-muted-foreground text-base">
                  Relocated search to a top-nav icon, reducing clutter and freeing mobile screen space.
                </p>
              </div>
            </div>

            {/* Single Column Image Section */}
            <div className="pt-16">
              <div
                className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border border-gray-200 mb-4 w-full h-auto"
                onClick={() =>
                  setLightboxImage({
                    src: "/images/PT-Three-Screen.jpg",
                    alt: "Three screens of the Philly Truce mobile app showing the Reports list, status tabs, and a circular floating action button.",
                  })
                }
              >
                <Image
                  src="/images/PT-Three-Screen.jpg"
                  alt="Three screens of the Philly Truce mobile app showing the Reports list, status tabs, and a circular floating action button."
                  width={1140}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* OUR APPROACH */}
            <div className="pt-40">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-px w-8 bg-foreground/30"></div>
                    <span className="text-sm font-medium text-foreground/60">OUR APPROACH</span>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground">
                    We conducted extensive user research with Peace Patrol Officers to understand their workflows, pain
                    points, and requirements.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div
                    className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border border-gray-200 aspect-square mb-4"
                    onClick={() =>
                      setLightboxImage({
                        src: "/images/ORB.jpg",
                        alt: "Rectangular floating action button took too much space",
                      })
                    }
                  >
                    <Image
                      src="/images/ORB.jpg"
                      alt="Rectangular floating action button took too much space"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-medium mb-2">Action button confused users</h4>
                  <p className="text-muted-foreground text-base">
                    Button size and placement caused user confusion.
                  </p>
                </div>
                <div>
                  <div
                    className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border border-gray-200 aspect-square mb-4"
                    onClick={() =>
                      setLightboxImage({
                        src: "/images/Before-Nav.jpg",
                        alt: "Navigation tabs lacked color contrast",
                      })
                    }
                  >
                    <Image
                      src="/images/Before-Nav.jpg"
                      alt="Navigation tabs lacked color contrast"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-medium mb-2">Navigation lacked clarity</h4>
                  <p className="text-muted-foreground text-base">
                    Active and inactive tabs weren’t visually distinct for users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Explore More Work */}
        <div className="bg-background py-24 animate-on-load animate-fade-in-up animate-delay-1000">
          <div className="max-w-[1140px] mx-auto px-4 md:px-6">
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
