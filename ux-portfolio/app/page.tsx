import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Mail, MousePointer, PenTool, Smartphone, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <PenTool className="h-6 w-6 mr-2" />
          <span className="font-bold">Jane Designer</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#work">
            Work
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm Jane — <br />
                    UX Designer & Problem Solver
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    I create intuitive digital experiences that connect people with products. Let's build something
                    amazing together.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#work">
                    <Button className="px-8">View My Work</Button>
                  </Link>
                  <Link href="#contact">
                    <Button variant="outline" className="px-8">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto flex w-full items-center justify-center">
                <Image
                  alt="UX Designer at work"
                  className="rounded-lg object-cover"
                  height="600"
                  src="/placeholder.svg?height=600&width=500"
                  style={{
                    aspectRatio: "500/600",
                    objectFit: "cover",
                  }}
                  width="500"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="work">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted-foreground/20 px-3 py-1 text-sm">Case Studies</div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Link href="/case-study" className="block">
                    <Image
                      alt="Project 1"
                      className="aspect-[16/9] object-cover w-full"
                      height="400"
                      src="/placeholder.svg?height=400&width=600"
                      width="600"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold">Mobile Banking App</h3>
                      <p className="text-muted-foreground">
                        Redesigned the user flow to improve task completion rates by 35%
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
                  <Link href="/case-study-detailed" className="block">
                    <Image
                      alt="Project 2"
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
                      alt="Project 3"
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
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Link href="#" className="block">
                    <Image
                      alt="Project 4"
                      className="aspect-[16/9] object-cover w-full"
                      height="400"
                      src="/placeholder.svg?height=400&width=600"
                      width="600"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold">Travel Booking App</h3>
                      <p className="text-muted-foreground">
                        Redesigned the search and filter experience to help users find destinations faster
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
            <div className="flex justify-center">
              <Link href="#">
                <Button variant="outline" className="gap-1">
                  View All Projects <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Passionate about creating meaningful experiences
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    With over 5 years of experience in UX/UI design, I've helped companies transform their digital
                    products into user-centered experiences that drive engagement and business growth.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    My approach combines user research, strategic thinking, and creative problem-solving to create
                    designs that are not only beautiful but also functional and intuitive.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    When I'm not designing, you can find me hiking, reading about psychology, or experimenting with new
                    cooking recipes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button className="px-8">Let's Connect</Button>
                  </Link>
                  <Link href="#">
                    <Button variant="outline" className="px-8">
                      Download Resume
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto flex w-full items-center justify-center">
                <Image
                  alt="Jane Designer portrait"
                  className="rounded-lg object-cover"
                  height="600"
                  src="/placeholder.svg?height=600&width=500"
                  style={{
                    aspectRatio: "500/600",
                    objectFit: "cover",
                  }}
                  width="500"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="services">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted-foreground/20 px-3 py-1 text-sm">Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How I Can Help You</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I offer a range of design services to help businesses create exceptional user experiences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <PenTool className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">UX/UI Design</h3>
                    <p className="text-muted-foreground">
                      Creating intuitive interfaces and seamless user experiences for web and mobile applications.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <MousePointer className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">User Research</h3>
                    <p className="text-muted-foreground">
                      Conducting interviews, usability testing, and analysis to understand user needs and behaviors.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Smartphone className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Mobile App Design</h3>
                    <p className="text-muted-foreground">
                      Designing intuitive and engaging mobile experiences for iOS and Android platforms.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Interaction Design</h3>
                    <p className="text-muted-foreground">
                      Creating meaningful animations and micro-interactions that enhance the user experience.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Design Systems</h3>
                    <p className="text-muted-foreground">
                      Building scalable design systems that ensure consistency across products and platforms.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <ArrowRight className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Design Strategy</h3>
                    <p className="text-muted-foreground">
                      Aligning design decisions with business goals to create impactful digital products.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Work Together</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-lg font-medium">
                  <Mail className="h-5 w-5" />
                  <span>hello@janedesigner.com</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Office Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9am - 5pm EST</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                  <p className="text-muted-foreground">Available for remote work worldwide</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="subject"
                      placeholder="Enter the subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="message"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </div>
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

