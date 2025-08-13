import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RecommendationsCarousel } from "@/components/recommendations-carousel"
import { AnimatedName } from "@/components/animated-name"

const Page = () => {
  const caseStudies = [
    {
      title: "Reducing Violence with a Mobile Web App by Improving Record-Keeping Accuracy by 15%",
      description: "Philly Truce",
      image: "/placeholder.svg?height=400&width=600",
      caseStudyUrl: "/case-study/philly-truce",
    },
    {
      title: "E-commerce Checkout Flow",
      description: "Redesigning the checkout process to reduce cart abandonment and increase conversions.",
      image: "/placeholder.svg?height=400&width=600",
      caseStudyUrl: "/case-study/checkout-flow",
    },
    {
      title: "Healthcare Patient Portal",
      description: "Creating an accessible patient portal that simplifies managing healthcare information.",
      image: "/placeholder.svg?height=400&width=600",
      caseStudyUrl: "/case-study/healthcare-portal",
    },
    {
      title: "Travel App Redesign",
      description: "Reimagining a travel booking experience to make planning trips more intuitive and enjoyable.",
      image: "/placeholder.svg?height=400&width=600",
      caseStudyUrl: "/case-study/travel-app",
    },
  ]

  const recommendations = [
    {
      name: "Alex Johnson",
      position: "Product Manager at TechCorp",
      quote:
        "Bronson's ability to translate complex user needs into intuitive designs is remarkable. His work on our banking app redesign resulted in a 40% increase in user engagement.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sarah Williams",
      position: "CEO at HealthTech Solutions",
      quote:
        "Working with Bronson on our patient portal was a game-changer. He created an accessible design that our users love, and his attention to detail is unmatched.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Michael Chen",
      position: "Lead Developer at E-Shop",
      quote:
        "Bronson's checkout flow redesign was brilliant. He collaborated seamlessly with our development team and delivered a solution that reduced cart abandonment by 25%.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director at TravelEase",
      quote:
        "The travel app redesign exceeded our expectations. Bronson has a unique talent for creating designs that are both beautiful and functional.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "David Kim",
      position: "UX Lead at FinanceApp",
      quote:
        "Bronson's design thinking and problem-solving skills are exceptional. He consistently delivers work that balances user needs with business goals.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Lisa Thompson",
      position: "Startup Founder",
      quote:
        "As a startup founder, I needed a designer who could wear multiple hats. Bronson delivered a comprehensive design system that has scaled with our growth.",
      avatar: "/placeholder.svg?height=100&width=100",
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
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex gap-6">
                <Link href="#work" className="text-sm font-medium hover:text-primary">
                  Work
                </Link>
                <Link href="#about" className="text-sm font-medium hover:text-primary">
                  About
                </Link>
                <Link href="#contact" className="text-sm font-medium hover:text-primary">
                  Contact
                </Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 pt-16">
        <section className="container py-12 md:py-16 animate-on-load animate-fade-in-up animate-delay-200">
          <div className="max-w-4xl" style={{ width: "110%" }}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight mb-6">
              Senior Product Designer who builds accessible digital products and scalable design systems that earn
              stakeholder buy-in and align with production realities.
            </h1>
          </div>
        </section>

        <section id="work" className="py-20 animate-on-load animate-fade-in-up animate-delay-300">
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

        <section id="recommendations" className="py-20 animate-on-load animate-fade-in-up animate-delay-500">
          <div className="container">
            <div className="flex items-center gap-2 mb-12">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">RECOMMENDATIONS</span>
            </div>
            <RecommendationsCarousel recommendations={recommendations} />
          </div>
        </section>

        <section id="contact" className="py-20 bg-muted animate-on-load animate-fade-in-up animate-delay-600">
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
      <footer className="py-6 md:py-8 animate-on-load animate-fade-in animate-delay-700">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Bronson Lee. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Page
