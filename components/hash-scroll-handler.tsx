"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function HashScrollHandler() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash.slice(1)

    if (hash) {
      // Use setTimeout to ensure the page has fully rendered before scrolling
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [pathname, searchParams])

  return null
}
