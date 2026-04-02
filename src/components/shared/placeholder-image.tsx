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
      className={`relative overflow-hidden border-2 border-dashed border-muted-foreground/30 bg-muted ${aspectClass} ${roundedClass} ${className}`}
      style={style}
      data-image-intent={intent}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="max-w-[280px] px-4 text-center font-mono text-xs leading-relaxed text-muted-foreground">
          [IMAGE: {intent ?? alt}]
        </p>
      </div>
    </div>
  )
}

export { PlaceholderImage }
