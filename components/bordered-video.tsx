export function BorderedVideo() {
  return (
    <div className="mb-40 animate-on-load animate-fade-in-up animate-delay-550">
      <div
        className="w-full rounded-lg overflow-hidden"
        style={{ border: "14px solid #8921BC", backgroundColor: "#8921BC" }}
      >
        <div className="py-20 md:py-32" style={{ backgroundColor: "#8921BC" }}>
          <video
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Soulbound-Video-XEloqIf3TnWFZBMb75HRIcZLnG6uWv.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[350px] block rounded-lg object-cover"
            aria-label="Soulbound app video demonstration"
          />
        </div>
      </div>
    </div>
  )
}

export default BorderedVideo
