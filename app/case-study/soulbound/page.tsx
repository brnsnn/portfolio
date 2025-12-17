import BorderedVideo from "@/components/BorderedVideo"

const Page = () => {
  return (
    <>
      {/* THE IMPACT section */}
      <div className="max-w-[1140px] mx-auto mb-40 animate-on-load animate-fade-in-up animate-delay-500 px-4 md:px-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-px w-8 bg-foreground/30"></div>
          <span className="text-sm font-medium text-foreground/60">THE IMPACT</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-4xl font-medium mb-2">30%</h3>
            <p className="text-muted-foreground">Less time recreating components for new screens</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium mb-2">25%</h3>
            <p className="text-muted-foreground">Reduction in design inconsistencies</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium mb-2">100%</h3>
            <p className="text-muted-foreground">Of text and UI elements now meet WCAG AA color contrast standards</p>
          </div>
        </div>
        <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
          <video
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Soulbound-Video-XEloqIf3TnWFZBMb75HRIcZLnG6uWv.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto mb-40 animate-on-load animate-fade-in-up animate-delay-550 px-4 md:px-6">
        <BorderedVideo src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Soulbound-Video-XEloqIf3TnWFZBMb75HRIcZLnG6uWv.mp4" alt="Soulbound design system video demonstration" />
      </div>

      {/* GOALS section */}
      <div className="max-w-[1140px] mx-auto mb-40 animate-on-load animate-fade-in-up animate-delay-600 px-4 md:px-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-px w-8 bg-foreground/30"></div>
          <span className="text-sm font-medium text-foreground/60">GOALS</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h4 className="font-medium mb-2">Establish a Cohesive Design System</h4>
            <p className="text-muted-foreground">
              consistent typography, colors, spacing, and UI components across the platform.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Enhance UI Consistency and Scalability</h4>
            <p className="text-muted-foreground">
              Integrate branding, accessibility, and stylistic touches to enhance aesthetics.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Elevate the Visual Identify of Platform</h4>
            <p className="text-muted-foreground">Support growth and features with a consistent, recognizable brand.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
