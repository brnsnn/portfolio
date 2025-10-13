import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AnimatedName } from "@/components/animated-name"

const Page = () => {
  const caseStudies = [
    {
      title: "Unifying mobile and desktop with a scalable design system that boosted efficiency by 40%",
      description: "Philly Truce",
      image: "/Benchmark-Design-System-thumbnail.jpg?height=400&width=600",
      caseStudyUrl: "/case-study/benchmark",
    },
    {
      title: "Improving Community Safety with a Routes Feature",
      description: "Philly Truce",
      image: "/placeholder.svg?height=400&width=600",
      caseStudyUrl: "/case-study/routes-feature",
    },
    {
      title: "Reducing violence by improving record-keeping accuracy by 15%",
      description: "Philly Truce",
      image: "/placeholder.svg?height=400&width=600",
      caseStudyUrl: "/case-study/philly-truce",
    },
    {
      title: "0-1 design system for a web3 gaming community",
      description: "Soulbound",
      image: "/placeholder.svg?height=400&width=600",
      caseStudyUrl: "/case-study/soulbound",
    },
    {
      title: "100,000+ views supporting high-risk HIV protection efforts",
      description: "Chill Pill",
      image: "/placeholder.svg?height=400&width=600",
      caseStudyUrl: "/case-study/chill-pill",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-on-load animate-fade-in">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-medium">
              <AnimatedName />
            </Link>
            <nav className="flex gap-4 md:gap-6 ml-auto">
              <Link href="#work" className="text-xs md:text-sm font-medium hover:text-primary nav-bounce px-2 py-1">
                Work
              </Link>
              <Link href="#about" className="text-xs md:text-sm font-medium hover:text-primary nav-bounce px-2 py-1">
                About
              </Link>
              <Link href="#contact" className="text-xs md:text-sm font-medium hover:text-primary nav-bounce pl-2 py-1">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 pt-16">
        <section className="container pt-20 md:pt-24 pb-4 md:pb-6 animate-on-load animate-fade-in-up animate-delay-200">
          <div className="max-w-4xl px-4 md:px-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight mb-6">
              Mid-level Product Designer who builds accessible digital products and <br className="md:hidden" />
              scalable design systems that earn stakeholder buy-in and align with production realities.
            </h1>
          </div>
        </section>

        <section id="work" className="pt-4 pb-20 animate-on-load animate-fade-in-up animate-delay-300">
          <div className="container">
            <div className="flex items-center gap-2 mb-12">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">CASE STUDIES</span>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {caseStudies.map((project, index) => (
                <Link
                  key={index}
                  href={project.caseStudyUrl}
                  className="group block overflow-hidden rounded-lg border border-border transition-all duration-500 ease-in-out hover:bg-muted relative"
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
                    <div className="space-y-2">
                      <h3 className="font-normal text-xl transition-colors duration-500 ease-in-out">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground transition-colors duration-500 ease-in-out">
                        {project.description}
                      </p>
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center text-muted-foreground">
                        View Case Study
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted animate-on-load animate-fade-in-up animate-delay-400">
          <div className="container">
            <div className="flex items-center gap-2 mb-12">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">ABOUT ME</span>
            </div>
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=600&width=600" alt="About me" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-normal tracking-tighter">Bronson Lee</h2>
                <p className="text-muted-foreground">
                  I'm a UX designer with 5+ years of experience creating user-centered digital products. I specialize in
                  user research, interaction design, and usability testing.
                </p>
                <p className="text-muted-foreground">
                  My background in psychology and human-computer interaction helps me understand user behaviors and
                  create experiences that feel intuitive and delightful.
                </p>
                <p className="text-muted-foreground">
                  When I'm not designing, you can find me sketching, attending design meetups, or exploring new coffee
                  shops in the city.
                </p>
                <Button asChild variant="outline">
                  <Link href="/about">Learn more about me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 animate-on-load animate-fade-in-up animate-delay-600">
          <div className="container">
            <div className="flex items-center gap-2 mb-12">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">CONTACT ME</span>
            </div>
            <div className="grid gap-12 md:grid-cols-2 items-start">
              <div className="space-y-4">
                <h2 className="text-3xl font-normal tracking-tighter">Let's work together</h2>
                <p className="text-muted-foreground">
                  Have a project in mind or want to discuss a potential collaboration? Fill out the form and I'll get
                  back to you as soon as possible.
                </p>
              </div>
              <div className="space-y-6">
                <form className="space-y-4">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What's this about?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell me about your project..." className="min-h-32" />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 md:py-8 bg-muted animate-on-load animate-fade-in animate-delay-700">
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

export default Page
