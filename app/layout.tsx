import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ScrollToTop } from "@/components/scroll-to-top"
import { HashScrollHandler } from "@/components/hash-scroll-handler"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bronson Lee / Product & Design Systems",
  description:
    "Portfolio website of Bronson Lee, a mid-level product designer specializing in creating intuitive and delightful digital experiences.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning style={{ scrollBehavior: "smooth" }}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <HashScrollHandler />
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
