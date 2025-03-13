import Link from "next/link"
import Image from "next/image"
import { ArrowRight, PenTool } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function CaseStudyDetailed() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <PenTool className="h-6 w-6 mr-2" />
          <span className="font-bold">Jane Designer</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#work">
            Work
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#contact">
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">E-commerce Website Redesign</h1>

            <div className="w-full">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="E-commerce Website Hero Image"
                width={1200}
                height={600}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </section>

        {/* Project Overview & Details */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground mb-4">
                  This e-commerce website redesign focused on simplifying the checkout process to reduce cart
                  abandonment and increase conversion rates. The client, a mid-sized fashion retailer, was experiencing
                  a high drop-off rate during the final stages of purchase.
                </p>
                <p className="text-muted-foreground">
                  By implementing a streamlined checkout flow and addressing key user pain points, we were able to
                  increase conversions by 28% and improve overall customer satisfaction scores by 42%.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg">Scope</h3>
                  <p className="text-muted-foreground">UX Audit, Checkout Redesign, User Testing, A/B Testing</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">My Role</h3>
                  <p className="text-muted-foreground">Lead UX/UI Designer</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">Team</h3>
                  <p className="text-muted-foreground">1 Product Manager, 1 UX Researcher, 2 Developers</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">Timeline</h3>
                  <p className="text-muted-foreground">3 months (Mar 2023 - May 2023)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="w-full py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px]">
              <h2 className="text-3xl font-bold mb-6">The Problem</h2>
              <p className="text-muted-foreground mb-8">
                The client's e-commerce platform had a cart abandonment rate of 76%, significantly higher than the
                industry average of 69%. User research revealed that customers found the checkout process confusing,
                with too many steps, hidden fees revealed late in the process, and a lack of payment options.
              </p>

              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Problem visualization showing checkout abandonment funnel"
                width={800}
                height={450}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold">Our Solution</h2>
              </div>

              <div>
                <p className="text-muted-foreground mb-4">
                  We redesigned the checkout experience with a focus on simplicity, transparency, and user control. Key
                  improvements included:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Single-page checkout with clearly defined sections</li>
                  <li>Early display of all costs including shipping and taxes</li>
                  <li>Expanded payment options including digital wallets</li>
                  <li>Guest checkout option with simplified registration</li>
                  <li>Persistent cart that saves items for returning users</li>
                </ul>
                <p className="text-muted-foreground">
                  These changes resulted in a 28% increase in conversion rate, a 35% reduction in checkout time, and a
                  significant improvement in customer satisfaction metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Images Section */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px]">
              {/* Two images side by side */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Original checkout flow wireframe"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full h-full"
                />
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Redesigned checkout flow wireframe"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>

              {/* One wide image */}
              <div className="mb-8">
                <Image
                  src="/placeholder.svg?height=450&width=800"
                  alt="Final checkout design overview"
                  width={800}
                  height={450}
                  className="rounded-lg object-cover w-full"
                />
              </div>

              {/* Two more images side by side */}
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Mobile checkout implementation"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full h-full"
                />
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Analytics dashboard showing improvements"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>

              {/* Link to full case study */}
              <div className="flex justify-center">
                <Link href="#">
                  <Button className="gap-2">
                    View Full Case Study <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Jane Designer. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

