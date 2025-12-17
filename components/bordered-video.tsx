export function BorderedVideo() {
  return (
    <div className="mb-40 animate-on-load animate-fade-in-up animate-delay-550 max-w-[1140px] mx-auto">
      <div
        className="w-full rounded-lg overflow-hidden"
        style={{ border: "14px solid #8921BC", backgroundColor: "#8921BC" }}
      >
        <div className="py-16 md:py-24 px-8 md:px-12" style={{ backgroundColor: "#8921BC" }}>
          <video
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Soulbound-Video-XEloqIf3TnWFZBMb75HRIcZLnG6uWv.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[500px] block rounded-lg object-cover"
            alt="Soulbound website redesign with updated design system"
          />
        </div>
      </div>
      <p className="mt-4 text-left text-gray-600 text-sm">Soulbound website redesign with updated design system</p>
    </div>
  )
}

export default BorderedVideo
