interface BorderedVideoProps {
  src: string
  alt: string
}

export default function BorderedVideo({ src, alt }: BorderedVideoProps) {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[1140px] rounded-lg overflow-hidden" style={{ border: "14px solid #8921BC" }}>
        <div className="px-8 md:px-12 py-16 md:py-24" style={{ backgroundColor: "#8921BC" }}>
          <div className="max-w-4xl mx-auto">
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[500px] block rounded-lg object-cover"
              aria-label={alt}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
