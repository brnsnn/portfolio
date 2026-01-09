export function BorderedVideo({
  src = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Soulbound-Video-qENrcAfDhMvnYgdaLv19A4dQIasCND.mp4",
  alt = "Soulbound website redesign with updated design system",
}) {
  return (
    <div className="mb-16 sm:mb-24 md:mb-40 animate-on-load animate-fade-in-up animate-delay-550">
      <div className="px-4 md:px-0 -mx-4 md:mx-0">
        <div>
          <div
            className="w-full rounded-lg overflow-hidden px-4 py-2.5 sm:px-8 sm:py-6 md:px-20 md:py-14"
            style={{ border: "14px solid #8921BC", backgroundColor: "#8921BC" }}
          >
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <video src={src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>
          <p className="mt-4 text-left text-gray-600 text-sm px-4 md:px-0">{alt}</p>
        </div>
      </div>
    </div>
  )
}

export default BorderedVideo
