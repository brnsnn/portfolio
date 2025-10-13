import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedName } from "@/components/animated-name"
import { CaseStudyCarousel } from "@/components/case-study-carousel"

export default function BankingCaseStudy() {
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
            Reducing Violence with a Mobile Web App by Improving Record-Keeping Accuracy by 15%
          </h1>
        </section>

        {/* Hero Image */}
        <div className="container mb-16 animate-on-load animate-fade-in-up animate-delay-300">
          <div className="w-full aspect-[21/9] relative">
            <Image
              src="/placeholder.svg?height=900&width=1900"
              alt="Mobile Banking App Hero"
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
                Philly Truce is a grassroots organization in Philadelphia focused on reducing violence and promoting
                peaceful conflict resolution.
              </p>
              <p className="text-muted-foreground">
                I conducted UX audits and improved UI clarity for the incident reporting feature, contributing to a 15%
                increase in record-keeping accuracy, streamlined operations, and stronger community safety outcomes, in
                collaboration with a team of five designers.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="mb-2">Scope</h3>
                <p className="text-muted-foreground">
                  Redesigned the Incident Report Management Platform (IRMP) to enhance usability and improve accurate
                  record-keeping.
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
                <p className="text-muted-foreground">3 months</p>
              </div>
            </div>
          </div>

          {/* Problem */}
          <div className="max-w-[1140px] mx-auto mb-16 animate-on-load animate-fade-in-up animate-delay-500">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">THE PROBLEM</span>
            </div>
            <p className="text-muted-foreground mb-8">
              Peace patrol officers in Philadelphia struggled with inaccurate and inconsistent record-keeping, making it
              difficult to track interventions and measure impact effectively. The existing system lacked usability,
              efficiency, and reliability, leading to operational inefficiencies and missed opportunities for violence
              prevention.
            </p>
            <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Banking app problems visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Solution */}
          <div className="max-w-[1140px] mx-auto mb-16 animate-on-load animate-fade-in-up animate-delay-600">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px w-8 bg-foreground/30"></div>
                  <span className="text-sm font-medium text-foreground/60">OUR SOLUTION</span>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  The app focused on improving usability, streamlining workflows, and enhancing record-keeping accuracy.
                  Through close collaboration with a team of designers, we optimized the app's interface, making it
                  intuitive and efficient. The redesign resulted in a 15% improvement in record accuracy, enabling
                  officers to better track interventions, strengthen community safety efforts, and enhance overall
                  operational efficiency.
                </p>
                <p className="text-muted-foreground">
                  We implemented a card-based UI that allows users to quickly access their most-used features, along
                  with data visualization for spending patterns and budget tracking.
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Banking app dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Banking app transactions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-6">
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Banking app features overview"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Banking app budget feature"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Banking app settings"
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
        <div className="bg-muted py-24 animate-on-load animate-fade-in-up animate-delay-700">
          <div className="max-w-[1140px] mx-auto px-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">EXPLORE MORE WORK</span>
            </div>
            <CaseStudyCarousel currentCaseStudyId="philly-truce" />
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
