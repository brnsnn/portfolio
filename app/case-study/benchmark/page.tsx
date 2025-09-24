import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedName } from "@/components/animated-name"

export default function TravelAppCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
        <section className="container py-12 md:py-20">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-foreground/30"></div>
            <span className="text-sm font-medium text-foreground/60">CASE STUDY</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight max-w-4xl">
            Unifying mobile and desktop with a scalable design system
          </h1>
        </section>

        {/* Hero Image */}
        <div className="container mb-16">
          <div className="w-full aspect-[16/9] relative">
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
        <div className="container">
          <div className="max-w-[1140px] mx-auto grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-foreground/30"></div>
                <span className="text-sm font-medium text-foreground/60">PROJECT OVERVIEW</span>
              </div>
              <p className="text-muted-foreground mb-4">
                I built a cross-platform design system that unified our mobile web app and desktop admin site, which
                previously felt fragmented. By creating shared tokens and reusable components, I made the product feel
                cohesive across touchpoints while reducing design and development time by 40%.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="mb-2">Scope</h3>
                <p className="text-muted-foreground">Mobile Design, User Research, Visual Design</p>
              </div>
              <div>
                <h3 className="mb-2">My Role</h3>
                <p className="text-muted-foreground">Lead Designer</p>
              </div>
              <div>
                <h3 className="mb-2">Team</h3>
                <p className="text-muted-foreground">1 UX Researcher, 1 Product Manager, 2 Developers</p>
              </div>
            </div>
          </div>

          {/* Problem */}
          <div className="max-w-[1140px] mx-auto mb-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">THE PROBLEM</span>
            </div>
            <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
              <Image
                src="/Mobile-old-new-1.jpg?height=450&width=800"
                alt="Travel app problems visualization"
                fill
                className="object-cover"
              />
            </div>
            <div className="max-w-[1140px] mx-auto mb-16 mt-8">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <p className="text-muted-foreground mb-4">
                    The mobile and desktop experiences looked and behaved differently, creating inconsistencies
                    that confused users and slowed down the design and development team.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    To solve this, I set out
                    to create a unified brand and product experience across touchpoints.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="max-w-[1140px] mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px w-8 bg-foreground/30"></div>
                  <span className="text-sm font-medium text-foreground/60">OUR SOLUTION</span>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  We redesigned the app with a focus on visual inspiration and streamlined booking. The new design
                  features immersive destination photography, personalized recommendations based on user preferences,
                  and a simplified search process with smart filters.
                </p>
                <p className="text-muted-foreground">
                  We also implemented a "Trip Planner" feature that allows users to save and organize ideas for future
                  trips, and redesigned the booking flow to reduce steps by 40%.
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Travel app home screen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Travel app destination details"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-6">
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Travel app booking flow"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Travel app trip planner"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Travel app user profile"
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
        <div className="bg-muted py-16">
          <div className="container">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">EXPLORE MORE WORK</span>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {otherCaseStudies.map((project, index) => (
                <Link
                  key={index}
                  href={project.caseStudyUrl}
                  className="group block overflow-hidden rounded-lg border border-border bg-background transition-all duration-500 ease-in-out hover:bg-muted relative"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-1 transition-colors duration-500 ease-in-out">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">{project.subtitle}</p>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center text-sm text-muted-foreground">
                      View Case Study
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 md:py-8">
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
