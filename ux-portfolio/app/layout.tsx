import type React from "react"
import "../globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Jane Designer | UX Designer Portfolio",
  description: "Portfolio of Jane Designer, a UX/UI designer specializing in creating intuitive digital experiences.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'