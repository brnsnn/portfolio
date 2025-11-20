"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

// Animation timing configuration
export const dialogAnimationConfig = {
  backdrop: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      duration: 0.175, // 175ms fade-in
      ease: [0.4, 0, 0.2, 1], // easeOut
    },
    exitTransition: {
      duration: 0.15,
      delay: 0.04, // Start 40ms after panel begins closing
      ease: [0.4, 0, 1, 1], // easeIn
    },
  },
  panel: {
    initial: { opacity: 0, y: 8, scale: 0.985 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 8, scale: 0.985 },
    transition: {
      duration: 0.3, // 300ms open
      ease: [0.2, 0.8, 0.2, 1], // Custom cubic-bezier
    },
    exitTransition: {
      duration: 0.2, // 200ms close
      ease: [0.4, 0, 1, 1], // easeIn
    },
  },
  stagger: {
    delayChildren: 0.02,
    staggerChildren: 0.02,
  },
}

// Hook to detect reduced motion preference
function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return prefersReducedMotion
}

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <DialogPrimitive.Overlay ref={ref} asChild>
      <motion.div
        className={cn("fixed inset-0 z-50 bg-black/60 backdrop-blur-sm", "will-change-[opacity]", className)}
        initial={prefersReducedMotion ? { opacity: 0 } : dialogAnimationConfig.backdrop.initial}
        animate={prefersReducedMotion ? { opacity: 1 } : dialogAnimationConfig.backdrop.animate}
        exit={prefersReducedMotion ? { opacity: 0 } : dialogAnimationConfig.backdrop.exit}
        transition={prefersReducedMotion ? { duration: 0.12 } : dialogAnimationConfig.backdrop.transition}
        {...props}
      />
    </DialogPrimitive.Overlay>
  )
})
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    hideCloseButton?: boolean
  }
>(({ className, children, hideCloseButton = false, ...props }, ref) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <DialogPortal>
      <AnimatePresence mode="wait">
        <DialogOverlay />
        <DialogPrimitive.Content ref={ref} asChild {...props}>
          <motion.div
            className={cn(
              "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%]",
              "bg-background p-6 shadow-lg rounded-lg",
              "will-change-[transform,opacity]",
              className,
            )}
            initial={
              prefersReducedMotion
                ? { opacity: 0, x: "-50%", y: "-50%" }
                : { ...dialogAnimationConfig.panel.initial, x: "-50%", y: "calc(-50% + 8px)" }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1, x: "-50%", y: "-50%" }
                : { ...dialogAnimationConfig.panel.animate, x: "-50%", y: "-50%" }
            }
            exit={
              prefersReducedMotion
                ? { opacity: 0, x: "-50%", y: "-50%" }
                : { ...dialogAnimationConfig.panel.exit, x: "-50%", y: "calc(-50% + 8px)" }
            }
            transition={prefersReducedMotion ? { duration: 0.12 } : dialogAnimationConfig.panel.transition}
          >
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              animate={prefersReducedMotion ? {} : { opacity: 1 }}
              transition={prefersReducedMotion ? {} : { delay: 0.04, duration: 0.2 }}
            >
              {children}
            </motion.div>
            {!hideCloseButton && (
              <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            )}
          </motion.div>
        </DialogPrimitive.Content>
      </AnimatePresence>
    </DialogPortal>
  )
})
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <motion.div
    className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.02, duration: 0.2 }}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <motion.div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.06, duration: 0.2 }}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
