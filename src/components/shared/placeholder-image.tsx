interface PlaceholderImageProps {
  alt: string
  aspect?: "video" | "square" | "portrait" | "wide" | "ultrawide"
  width?: number
  height?: number
  className?: string
  intent?: string
  rounded?: "none" | "sm" | "md" | "lg" | "xl"
}

const aspectMap = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[2/1]",
  ultrawide: "aspect-[3/1]",
}

const roundedMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
}

function PlaceholderImage({
  alt,
  aspect = "video",
  width,
  height,
  className = "",
  intent,
  rounded = "md",
}: PlaceholderImageProps) {
  const aspectClass = width && height ? "" : aspectMap[aspect]
  const roundedClass = roundedMap[rounded]
  const style = width && height ? { width, height } : undefined

  return (
    <div
      className={`relative overflow-hidden bg-muted ${aspectClass} ${roundedClass} ${className}`}
      style={style}
      data-image-intent={intent}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="space-y-2 px-4 text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-muted-foreground/10">
            <svg
              className="h-5 w-5 text-muted-foreground/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 19.5V4.5a2.25 2.25 0 0 0-2.25-2.25H3.75A2.25 2.25 0 0 0 1.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          {intent && (
            <p className="max-w-[200px] text-xs font-medium text-muted-foreground/50">
              {intent}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export { PlaceholderImage }
