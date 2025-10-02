import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedName } from "@/components/animated-name"

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
            Unifying mobile and desktop with a scalable design system
          </h1>
        </section>

        {/* Hero Image */}
        <div className="container mb-16 animate-on-load animate-fade-in-up animate-delay-300">
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
        <div className="container animate-on-load animate-fade-in-up animate-delay-400">
          <div className="max-w-[1140px] mx-auto grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-foreground/30"></div>
                <span className="text-sm font-medium text-foreground/60">PROJECT OVERVIEW</span>
              </div>
              <p className="text-muted-foreground mb-4">
                I built Benchmark, a cross-platform design system that unified Philly Truce’s mobile Peace Patrol app and desktop admin platform. Before, each platform felt fragmented — different fonts,
                buttons, colors, and interaction patterns created confusion for users and slowed down design and development.</p>
              
              <p className="text-muted-foreground mb-4">
                By creating shared foundations and reusable components, I reduced design and
                dev time by 40%, improved record-keeping accuracy by 15%, and made the product feel cohesive across touchpoints.
                </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="mb-2">Client</h3>
                <p className="text-muted-foreground">Philly Truce</p>
              </div>
              <div>
                <h3 className="mb-2">Scope</h3>
                <p className="text-muted-foreground">Audit & discovery, foundations, core components, cross-platform unification, accessibility & usability, implementation & collaboration</p>
              </div>
              <div>
                <h3 className="mb-2">My Role</h3>
                <p className="text-muted-foreground">Lead Designer</p>
              </div>
              <div>
                <h3 className="mb-2">Team</h3>
                <p className="text-muted-foreground">Mobile / desktop design team, and dev team</p>
              </div>
            </div>
          </div>

          {/* Problem */}
          <div className="max-w-[1140px] mx-auto mb-16 animate-on-load animate-fade-in-up animate-delay-500">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">THE PROBLEM</span>
            </div>
            <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-8">
              <Image
                src="/Before-1.jpg?height=450&width=800"
                alt="Before mobile and desktop revisions"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  The mobile and desktop experiences looked and behaved differently, creating inconsistencies that
                  confused users and slowed down the design and development team.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  To solve this, I set out to create a unified brand and product experience across touchpoints.
                </p>
              </div>
            </div>

            <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile-Annotations-1.jpg-dfHEvJD6byRP9siAITbrReHKL6h0uS.jpeg"
                alt="Mobile design annotations showing UI improvements including inactive tab contrast, filter indicators, icon sizing, button accessibility, and rounded icon styling"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  The design annotations highlight key improvements made to enhance usability and accessibility. Each
                  element was carefully considered to create a more intuitive user experience.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  From improved button sizing to meet accessibility guidelines to refined icon styles for better
                  legibility, these changes collectively improved user satisfaction by 35%.
                </p>
              </div>
            </div>

            <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-8">
              <Image
                src="/Desktop-old-new-1.jpg?height=450&width=800"
                alt="Old versus new desktop design"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-muted-foreground mb-4">
                  The desktop admin interface was cluttered with unclear navigation labels, and competing visual
                  elements that made scanning and publishing schedules inefficient.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  I redesigned the desktop experience by simplifying navigation, clarifying hierarchy, and streamline
                  bulk actions—making routes easier to scan, assign, and manage while aligning with the mobile
                  experience.
                </p>
              </div>
            </div>

            <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-8">
              <Image
                src="/Desktop-Annotations-1.jpg"
                alt="Desktop design annotations showing UI improvements including inactive tab contrast, filter indicators, icon sizing, button accessibility, and rounded icon styling"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-muted-foreground mb-4">
                  The desktop annotations showcase systematic improvements to the admin interface, focusing on clearer
                  visual hierarchy and streamlined workflows for route management.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  These desktop-specific enhancements reduced task completion time by 25% and significantly improved
                  administrator efficiency in managing route assignments.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px w-8 bg-foreground/30"></div>
                  <span className="text-sm font-medium text-foreground/60">OUR APPROACH</span>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  We began with an audit and discovery process to identify inconsistencies between the mobile and
                  desktop experiences. This surfaced gaps in accessibility, visual alignment, and component usage.
                </p>
                <p className="text-muted-foreground">
                  From there, we established shared foundations across platforms — unifying typography, color, spacing,
                  interaction patterns, and accessibility standards.
                </p>
                <br />
                <p className="text-muted-foreground">
                  This alignment created a cohesive design system that improved the user experience across touchpoints
                  and gave the design and development teams greater clarity and efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-20">
            <Button asChild size="lg">
              <Link href="#">View Full Case Study</Link>
            </Button>
          </div>
        </div>

        {/* More Case Studies */}
        <div className="bg-muted py-16 animate-on-load animate-fade-in-up animate-delay-700">
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
