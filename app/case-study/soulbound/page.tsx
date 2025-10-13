import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedName } from "@/components/animated-name"
import { CaseStudyCarousel } from "@/components/case-study-carousel"

export default function SoulboundCaseStudy() {
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
            0-1 design system for a web3 gaming community
          </h1>
        </section>

        <div className="container mb-16 animate-on-load animate-fade-in-up animate-delay-300">
          <div className="w-full aspect-[21/9] relative">
            <Image
              src="/web3-gaming-community-design-system.png"
              alt="Soulbound web3 gaming community design system"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        <div className="container animate-on-load animate-fade-in-up animate-delay-400">
          <div className="max-w-[1140px] mx-auto grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-foreground/30"></div>
                <span className="text-sm font-medium text-foreground/60">PROJECT OVERVIEW</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Built a scalable design system for Soulbound, enabling consistent user experiences across the web3
                gaming ecosystem while supporting rapid feature development.
              </p>
              <p className="text-muted-foreground">
                The system established visual patterns, reusable components, and clear guidelines that transformed how
                the team approached design and development.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="mb-2">Scope</h3>
                <p className="text-muted-foreground">Design System, Component Library, Visual Design</p>
              </div>
              <div>
                <h3 className="mb-2">My Role</h3>
                <p className="text-muted-foreground">Lead UX Designer</p>
              </div>
              <div>
                <h3 className="mb-2">Team</h3>
                <p className="text-muted-foreground">2 UX Designers, 3 Developers, 1 Product Manager</p>
              </div>
              <div>
                <h3 className="mb-2">Timeline</h3>
                <p className="text-muted-foreground">4 months</p>
              </div>
            </div>
          </div>

          <div className="max-w-[1140px] mx-auto mb-16 animate-on-load animate-fade-in-up animate-delay-500">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">THE PROBLEM</span>
            </div>
            <p className="text-muted-foreground mb-8">
              The web3 gaming community lacked a cohesive design language, resulting in inconsistent user experiences
              and slow development cycles. Without established design patterns, the team struggled to maintain visual
              consistency while scaling the platform. This led to fragmented user experiences and increased development
              time as designers and developers had to recreate components from scratch.
            </p>
            <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
              <Image
                src="/web3-gaming-design-problems.png"
                alt="Web3 gaming design system problems visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>

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
                  We developed a comprehensive design system that established consistent visual patterns, reusable
                  components, and clear guidelines for the web3 gaming experience. The system included a complete
                  component library, design tokens, and documentation.
                </p>
                <p className="text-muted-foreground">
                  The design system enabled faster development cycles, improved consistency across all touchpoints, and
                  provided a foundation for scaling the platform while maintaining high-quality user experiences.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/web3-gaming-design-tokens.png"
                  alt="Design tokens and color system"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/web3-gaming-components.png"
                  alt="Component library showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-6">
              <Image
                src="/web3-gaming-design-system.png"
                alt="Design system documentation"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image src="/web3-gaming-ui.png" alt="UI patterns and layouts" fill className="object-cover" />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image src="/placeholder-6f4o5.png" alt="Responsive design system" fill className="object-cover" />
              </div>
            </div>

            <div className="text-center mb-20">
              <Button asChild size="lg">
                <Link href="#">View Full Case Study</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-muted py-24 animate-on-load animate-fade-in-up animate-delay-700">
          <div className="max-w-[1140px] mx-auto px-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">EXPLORE MORE WORK</span>
            </div>
            <CaseStudyCarousel currentCaseStudyId="soulbound" />
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
