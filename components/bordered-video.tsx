export function BorderedVideo() {
  return (
    <div className="mb-40 animate-on-load animate-fade-in-up animate-delay-550 max-w-[1140px] mx-auto px-4 md:px-0">
      <div
        className="w-full rounded-lg overflow-hidden"
        style={{ border: "14px solid #8921BC", backgroundColor: "#8921BC" }}
      >
        <div className="py-16 md:py-24 px-8 md:px-12" style={{ backgroundColor: "#8921BC" }}>
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <video
              src="/images/soulbound-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              alt="Soulbound website redesign with updated design system"
            />
          </div>
        </div>
      </div>
      <p className="mt-4 text-left text-gray-600 text-sm">Soulbound website redesign with updated design system</p>
    </div>
  )
}

export default BorderedVideo
