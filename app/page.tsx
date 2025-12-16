import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AnimatedName } from "@/components/animated-name"
import { RecommendationsCarouselEmbla, type RecommendationItem } from "@/components/recommendations-carousel-embla"

const Page = () => {
  const caseStudies = [
    {
      title: "Unifying mobile and desktop with a scalable design system that boosted efficiency by 40%",
      description: "Philly Truce",
      image: "/Benchmark-Design-System-thumbnail.jpg?height=400&width=600",
      caseStudyUrl: "/case-study/benchmark",
    },
    {
      title: "0-1 design system for a web3 gaming community",
      description: "Soulbound",
      image: "/soulbound-design-system-thumbnail-updated.jpg",
      caseStudyUrl: "/case-study/soulbound",
    },
    {
      title: "Reducing violence by improving record-keeping accuracy by 15%",
      description: "Philly Truce",
      image: "/images/Philly-Truce-thumbnail.jpg?height=400&width=600",
      caseStudyUrl: "/case-study/philly-truce",
    },
  ]

  const recommendations: RecommendationItem[] = [
    {
      author: "Marissa Goodman",
      role: "UX Designer at Tech Fleet",
      body: "Bronson was a lead for the UX Design team I worked with on the Philly Truce project, and he was an encouraging and supportive leader who fostered collaboration both within our team and cross-functionally. He created an environment where we felt comfortable asking questions and learning from each other, strengthening our team and leading to thoughtful, user-centric solutions.\n\nBronson is also deeply curious and continuously seeks to learn and grow. Throughout our project, he took the time to expand his own knowledge and generously shared insights with the team, helping us all improve as designers. His attention to detail, drive, and dedication to the craft make him an asset to any UX team. I highly recommend him as a UX Designer and would love the chance to work with him again!",
    },
    {
      author: "Eddie Farfan",
      role: "Product Manager at Tech Fleet",
      body: "I worked with Bronson on the Philly Truce project as he was our Lead UX Designer, where they excelled at aligning UX strategy with business goals. They collaborated effectively across UX, strategy, and PM teams, translating complex challenges into intuitive solutions.\n\nTheir ability to navigate ambiguity and deliver in a fast-paced environment was impressive. Bronson brought clarity and focus to every project, making them a valuable asset to any team!",
    },
    {
      author: "Alma Halilovic",
      role: "UX Designer at Tech Fleet",
      body: "I had the pleasure of working with Bronson for the Philly Truce project under Tech Fleet and cannot sing his praises enough. On top of being an empathetic and understanding leader- Bronson is a talented creative. His adaptability and flexibility to pivot when necessary, along with his keen eye for design, truly helped move our project forward. He went above and beyond and always had time to answer any questions we had- making sure that we were aligned with the stakeholders needs. Throughout our time working together, he ensured that every team member felt heard and valued. His passion for impactful design was contagious and made him such a joy to work with. Any employer would be lucky to have him on their team!",
    },
    {
      author: "James Phuong",
      role: "UX Designer at Tech Fleet",
      body: "Bronson's work on our complex Tech Fleet project left a lasting impression. He consistently pushed the boundaries of his position, experimenting with diverse design variations that sparked innovative ideas. His curiosity and willingness to explore new ideas added tremendous value to the project. What truly stood out was his ability to quickly implement design updates and iterate based on detailed research findings. His speed and efficiency were remarkable, especially given the tight deadlines that we faced. Thanks to his dedication, we were able to achieve a great deal more in a short timeframe than I initially thought was possible.\n\nBronson's creativity, strong work ethic, and commitment to user-centered design make him an exceptional asset to any team. I wholeheartedly recommend him to any employer seeking a driven and forward-thinking UX designer.",
    },
    {
      author: "Hazuki Yamanaka",
      role: "UX Designer at Tech Fleet",
      body: "I had the pleasure of working with Bronson Lee on the Philly Truce project, where he served as a Desktop UX Designer. Bronson played a pivotal role in establishing and leading our design system from the ground up.\n\nHe spearheaded accessibility efforts and led cross-team collaboration to ensure a seamless and unified experience across desktop, mobile, and development environments. Thanks to his leadership, our team successfully adopted the design system, which improved both consistency and efficiency throughout the project.\n\nBronson's ability to communicate complex concepts clearly and bring everyone on board made him an invaluable partner. His dedication to inclusive design and his thoughtful approach to system-level thinking elevated the overall quality of our work.\n\nI highly recommend Bronson to any team looking for a skilled, collaborative, and forward-thinking UX designer who can bridge the gap between design and development while keeping accessibility at the forefront.",
    },
    {
      author: "Jessica Teng",
      role: "Lead UX Designer at Tech Fleet",
      body: "I had the pleasure of working with Bronson on the Philly Truce desktop dashboard project, taking it from 0 to 1. Having seen the meticulous work he led on the Philly Truce mobile app, I knew he'd play a key role in bridging the desktop experience with the strong design foundation established on mobile.\n\nBuilding a dashboard from the ground up is never easy, especially with all the ambiguity and shifting user needs along the way. Bronson took on the added challenge of aligning and integrating the desktop experience with mobile—a complex task he handled with remarkable organization, focus, and collaboration. He was an outstanding liaison between both teams, helping us create a cohesive, cross-platform design system that truly elevated the product.",
    },
    {
      author: "Jenise Absher",
      role: "UX Consultant at ProPoint Software",
      body: "I highly recommend Bronson as a UX designer. His critical thinking skills shine as he delves deep into understanding user needs. Bronson's communication is top-notch. His contributions to our design system, visual styles and mobile responsive form design, were invaluable. A true team player and excellent visual designer, Bronson is enjoyable to work with and a significant asset to any team.",
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
            <div className="grid gap-8 md:grid-cols-3">
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
                      className="object-cover border-gray-200"
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

        <section className="py-20 bg-background animate-on-load animate-fade-in-up animate-delay-350">
          <div className="container">
            <div className="flex items-center gap-2 mb-12">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">RECOMMENDATIONS</span>
            </div>
            <RecommendationsCarouselEmbla items={recommendations} />
          </div>
        </section>

        <section id="about" className="py-20 bg-background animate-on-load animate-fade-in-up animate-delay-400">
          <div className="container">
            <div className="flex items-center gap-2 mb-12">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-sm font-medium text-foreground/60">ABOUT ME</span>
            </div>
            <div className="flex flex-col md:flex-row md:gap-8 md:items-start">
              <div className="relative w-[150px] h-[165px] overflow-hidden rounded-lg flex-shrink-0 mb-4 md:mb-0">
                <Image src="/images/me.png" alt="About me" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-normal tracking-tighter">Bronson Lee</h2>
                <p className="text-muted-foreground">
                  I'm a Mid-level UX designer with 5+ years of experience. I specialize<br />in design systems, interaction
                  design, and accessibility.
                </p>
                <p className="text-muted-foreground">
                  My background in advertising and public health helps me understand<br />user behaviors and create
                  experiences that feel intuitive and delightful.
                </p>
                <p className="text-muted-foreground">
                  When I'm not designing, you can find me taking walks or exploring new<br />matcha shops in the city.
                </p>
                <div className="flex gap-4">
                  <Button asChild variant="default">
                    <Link
                      href="https://drive.google.com/file/d/14TQw3m_5QvpKjledQjwdU87WXWCG-yI6/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download resume
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link
                      href="https://linkedin.com/in/brnsnlee"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit LinkedIn profile"
                    >
                      Connect on LinkedIn
                    </Link>
                  </Button>
                </div>
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
      <footer className="py-6 md:py-8 bg-background animate-on-load animate-fade-in animate-delay-700">
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
