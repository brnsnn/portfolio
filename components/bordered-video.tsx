interface BorderedVideoProps {
  src: string
  alt: string
}

export function BorderedVideo({ src, alt }: BorderedVideoProps) {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[1140px] rounded-lg overflow-hidden" style={{ border: "14px solid #8921BC" }}>
        <div className="p-8 md:p-12" style={{ backgroundColor: "#8921BC" }}>
          <div className="max-w-4xl mx-auto">
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block rounded-lg"
              aria-label={alt}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
