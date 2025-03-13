import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Briefcase, Building, Clock, Package, Wrench, Smartphone, PenTool, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function CaseStudy() {
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mobile Banking App Redesign</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Improving user experience and task completion rates for a leading fintech company
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <Briefcase className="h-8 w-8 mb-2 text-primary" />
                  <h3 className="font-bold mb-1">Role</h3>
                  <p className="text-sm text-center">Lead UX Designer</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <Building className="h-8 w-8 mb-2 text-primary" />
                  <h3 className="font-bold mb-1">Industry</h3>
                  <p className="text-sm text-center">Fintech</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <Clock className="h-8 w-8 mb-2 text-primary" />
                  <h3 className="font-bold mb-1">Duration</h3>
                  <p className="text-sm text-center">3 months</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <Package className="h-8 w-8 mb-2 text-primary" />
                  <h3 className="font-bold mb-1">Deliverables</h3>
                  <p className="text-sm text-center">UX Research, UI Design, Prototypes</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <Wrench className="h-8 w-8 mb-2 text-primary" />
                  <h3 className="font-bold mb-1">Tools</h3>
                  <p className="text-sm text-center">Figma, Sketch, UserTesting</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <Smartphone className="h-8 w-8 mb-2 text-primary" />
                  <h3 className="font-bold mb-1">Target Device</h3>
                  <p className="text-sm text-center">Mobile (iOS & Android)</p>
                </div>
              </div>
              <div className="mt-12">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Mobile Banking App Mockup"
                  width={800}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 mx-auto max-w-3xl">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">The Challenge</h2>
                <p className="text-muted-foreground">
                  Our client, a rapidly growing fintech startup, approached us with a critical issue: their mobile
                  banking app was experiencing low task completion rates and negative user feedback. Users found the app
                  confusing and difficult to navigate, leading to decreased engagement and potential customer churn.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">The Process</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Conducted in-depth user research and usability testing</li>
                  <li>Analyzed user feedback and app analytics</li>
                  <li>Created user personas and journey maps</li>
                  <li>Developed low-fidelity wireframes and prototypes</li>
                  <li>Iterated on designs based on user testing results</li>
                  <li>Collaborated with developers for seamless implementation</li>
                </ol>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">The Solution</h2>
                <p className="text-muted-foreground">
                  We redesigned the app with a focus on simplicity and intuitive navigation. Key improvements included:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Streamlined information architecture</li>
                  <li>Simplified transaction process</li>
                  <li>Personalized dashboard with quick actions</li>
                  <li>Enhanced search functionality</li>
                  <li>Improved error handling and user feedback</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">The Results</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                    <div>
                      <h3 className="font-bold">35% Increase</h3>
                      <p className="text-sm text-muted-foreground">in task completion rates</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                    <div>
                      <h3 className="font-bold">28% Reduction</h3>
                      <p className="text-sm text-muted-foreground">in customer support tickets</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                    <div>
                      <h3 className="font-bold">42% Increase</h3>
                      <p className="text-sm text-muted-foreground">in daily active users</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                    <div>
                      <h3 className="font-bold">4.8 Star Rating</h3>
                      <p className="text-sm text-muted-foreground">on app stores (up from 3.2)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Other Projects
            </h2>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Link href="#" className="block">
                    <Image
                      alt="E-commerce Website"
                      className="aspect-[16/9] object-cover w-full"
                      height="400"
                      src="/placeholder.svg?height=400&width=600"
                      width="600"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold">E-commerce Website</h3>
                      <p className="text-muted-foreground">
                        Simplified checkout process resulting in 28% increase in conversions
                      </p>
                      <div className="mt-4 flex items-center text-sm text-muted-foreground">
                        <span>View Case Study</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Link href="#" className="block">
                    <Image
                      alt="Healthcare Dashboard"
                      className="aspect-[16/9] object-cover w-full"
                      height="400"
                      src="/placeholder.svg?height=400&width=600"
                      width="600"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold">Healthcare Dashboard</h3>
                      <p className="text-muted-foreground">
                        Created an intuitive interface for medical professionals to track patient data
                      </p>
                      <div className="mt-4 flex items-center text-sm text-muted-foreground">
                        <span>View Case Study</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to transform your digital product?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's work together to create intuitive, user-centered experiences that drive results.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link href="/#contact">
                  <Button className="w-full">Get in Touch</Button>
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

