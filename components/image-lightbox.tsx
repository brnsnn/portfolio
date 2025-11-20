"use client"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/smooth-dialog"

interface ImageLightboxProps {
  src: string
  alt: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ImageLightbox({ src, alt, open, onOpenChange }: ImageLightboxProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-none max-h-none w-screen h-screen bg-transparent border-none shadow-none p-0"
        hideCloseButton
      >
        <div
          className="relative w-full h-full flex flex-col items-center justify-center px-8 py-16"
          onClick={() => onOpenChange(false)}
        >
          <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={1920}
              height={1080}
              className="object-contain max-w-full max-h-full w-auto h-auto rounded-xl"
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                onOpenChange(false)
              }}
              className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors z-10 bg-black/70 rounded-full p-2"
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
