export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  image: string
  caseStudyUrl: string
}

export const allCaseStudies: CaseStudy[] = [
  {
    id: "benchmark",
    title: "Unifying mobile and desktop with a scalable design system that boosted efficiency by 40%",
    subtitle: "Benchmark Design System",
    image: "/Benchmark-Design-System-thumbnail.jpg",
    caseStudyUrl: "/case-study/benchmark",
  },
  {
    id: "philly-truce",
    title: "Reducing violence by improving record-keeping accuracy by 15%",
    subtitle: "Philly Truce",
    image: "/placeholder.svg?height=400&width=600",
    caseStudyUrl: "/case-study/philly-truce",
  },
  {
    id: "soulbound",
    title: "0-1 design system for a web3 gaming community",
    subtitle: "Soulbound",
    image: "/web3-gaming-community-design-system.png",
    caseStudyUrl: "/case-study/soulbound",
  },
  {
    id: "chill-pill",
    title: "100,000+ views supporting high-risk HIV protection efforts",
    subtitle: "Chill Pill",
    image: "/placeholder.svg?height=400&width=600",
    caseStudyUrl: "/case-study/chill-pill",
  },
  {
    id: "routes-feature",
    title: "Improving Community Safety with a Routes Feature",
    subtitle: "Routes Feature",
    image: "/community-safety-app.png",
    caseStudyUrl: "/case-study/routes-feature",
  },
]
