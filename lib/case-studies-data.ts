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
    image: "/images/pt-hero.avif", // replaced placeholder with pt-hero.avif image
    caseStudyUrl: "/case-study/philly-truce",
  },
  {
    id: "soulbound",
    title: "0-1 design system for a web3 gaming community",
    subtitle: "Soulbound",
    image: "/soulbound-design-system-thumbnail-updated.jpg",
    caseStudyUrl: "/case-study/soulbound",
  },
  {
    id: "routes-feature",
    title: "Improving Community Safety with a Routes Feature",
    subtitle: "Philly Truce",
    image: "/community-safety-app.png",
    caseStudyUrl: "/case-study/routes-feature",
  },
]
