import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function TravelAppCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <Leaf className="h-5 w-5" />
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
      </header>

      <main className="flex-1">
        <section className="container py-12 md:py-20">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-foreground/30"></div>
            <span className="text-sm font-medium text-foreground/60">CASE STUDY</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">Travel App Redesign</h1>
        </section>

        {/* Hero Image */}
        <div className="container mb-16">
          <div className="w-full aspect-[21/9] relative">
            <Image
              src="/placeholder.svg?height=900&width=1900"
              alt="Travel App Redesign Hero"
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
                This project focused on reimagining a travel booking experience to make planning trips more intuitive
                and enjoyable. The existing app had good functionality but suffered from an outdated interface,
                inconsistent user experience, and low engagement with key features.
              </p>
              <p className="text-muted-foreground">
                Our goal was to create a visually appealing, user-friendly experience that would inspire travel while
                simplifying the booking process.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="mb-2">Scope</h3>
                <p className="text-muted-foreground">Mobile Design, User Research, Visual Design</p>
              </div>
              <div>
                <h3 className="mb-2">My Role</h3>
                <p className="text-muted-foreground">Lead UI Designer</p>
              </div>
              <div>
                <h3 className="mb-2">Team</h3>
                <p className="text-muted-foreground">1 UX Researcher, 1 Product Manager, 2 Developers</p>
              </div>
              <div>
                <h3 className="mb-2">Timeline</h3>
                <p className="text-muted-foreground">10 weeks (Nov 2023 - Jan 2024)</p>
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
              The existing travel app had a cluttered interface with too many options presented at once, creating
              decision fatigue for users. The visual design was inconsistent and dated, failing to inspire travel or
              showcase destinations effectively. User research revealed that 65% of users found the search process
              cumbersome, and 70% rarely used the app's recommendation features despite wanting travel inspiration.
            </p>
            <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Travel app problems visualization"
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
    title: "Healthcare Patient Portal",
    image: "/placeholder.svg?height=400&width=600",
    caseStudyUrl: "/case-study/healthcare-portal",
  },
]
