import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HealthcareCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-medium">
              <span>Bronson Lee</span>
            </Link>
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex gap-6">
                <Link href="/#work" className="text-sm font-medium hover:text-primary">
                  Work
                </Link>
                <Link href="/#about" className="text-sm font-medium hover:text-primary">
                  About
                </Link>
                <Link href="/#contact" className="text-sm font-medium hover:text-primary">
                  Contact
                </Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <section className="container py-12 md:py-20">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-foreground/30"></div>
            <span className="text-sm font-medium text-foreground/60">CASE STUDY</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Healthcare Patient Portal
          </h1>
        </section>

        {/* Hero Image */}
        <div className="container mb-16">
          <div className="w-full aspect-[21/9] relative">
            <Image
              src="/placeholder.svg?height=900&width=1900"
              alt="Healthcare Patient Portal Hero"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="container">
          <div className="max-w-[800px] mx-auto grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-foreground/30"></div>
                <span className="text-sm font-medium text-foreground/60">PROJECT OVERVIEW</span>
              </div>
              <p className="text-muted-foreground mb-4">
                This project involved creating an accessible patient portal for a healthcare network to simplify how
                patients manage their healthcare information. The goal was to design a system that would work for users
                of all ages and abilities, while meeting strict healthcare privacy regulations.
              </p>
              <p className="text-muted-foreground">
                The portal needed to consolidate appointment scheduling, medical records, prescription management, and
                provider communication in one secure, easy-to-use platform.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="mb-2">Scope</h3>
                <p className="text-muted-foreground">Accessibility, Information Architecture, User Testing</p>
              </div>
              <div>
                <h3 className="mb-2">My Role</h3>
                <p className="text-muted-foreground">UX/UI Designer, Accessibility Specialist</p>
              </div>
              <div>
                <h3 className="mb-2">Team</h3>
                <p className="text-muted-foreground">1 Project Manager, 3 Developers, 1 Content Strategist</p>
              </div>
              <div>
                <h3 className="mb-2">Timeline</h3>
                <p className="text-muted-foreground">16 weeks (Jul - Oct 2023)</p>
              </div>
            </div>
          </div>

          {/* Problem */}
          <div className="max-w-[800px] mx-auto mb-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">THE PROBLEM</span>
            </div>
            <p className="text-muted-foreground mb-8">
              Patients were struggling with fragmented healthcare information spread across multiple systems. Older
              users and those with disabilities found existing digital healthcare tools particularly challenging.
              Research showed that 58% of patients over 65 needed assistance using the previous system, and 72% of all
              patients reported difficulty finding their medical information when needed.
            </p>
            <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Healthcare portal problems visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Solution */}
          <div className="max-w-[800px] mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px w-8 bg-foreground/30"></div>
                  <span className="text-sm font-medium text-foreground/60">OUR SOLUTION</span>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  We designed an accessible patient portal with a clear information architecture that prioritizes the
                  most common tasks. The interface features high contrast options, adjustable text sizes, and is fully
                  compatible with screen readers.
                </p>
                <p className="text-muted-foreground">
                  The portal includes a simplified dashboard, intuitive appointment scheduling, secure messaging with
                  providers, and easy access to test results and prescriptions—all designed to WCAG 2.1 AA standards.
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Healthcare portal dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Healthcare portal appointments"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-6">
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Healthcare portal accessibility features"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Healthcare portal medical records"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Healthcare portal messaging"
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
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center text-muted-foreground">
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
        </div>
      </footer>
    </div>
  )
}

const otherCaseStudies = [
  {
    title: "Reducing Violence with a Mobile Web App",
    image: "/placeholder.svg?height=400&width=600",
    caseStudyUrl: "/case-study/philly-truce",
  },
  {
    title: "E-commerce Checkout Flow",
    image: "/placeholder.svg?height=400&width=600",
    caseStudyUrl: "/case-study/checkout-flow",
  },
  {
    title: "Travel App Redesign",
    image: "/placeholder.svg?height=400&width=600",
    caseStudyUrl: "/case-study/travel-app",
  },
]
