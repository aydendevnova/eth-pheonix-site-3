"use client"

import { useEffect, useRef } from "react"

interface KitFormProps {
  className?: string
}




const KIT_FORM_SRC = "https://ayden-springer.kit.com/c5fc9f6811/index.js"

function getKitFormUid({ src }: { src: string }) {
  const pathnameSegments = new URL(src).pathname.split("/").filter(Boolean)
  const lastSegment = pathnameSegments[pathnameSegments.length - 1]

  if (lastSegment === "index.js") return pathnameSegments[pathnameSegments.length - 2] ?? ""
  return lastSegment ?? ""
}

function KitForm({ className }: KitFormProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    containerRef.current.innerHTML = ""

    const script = document.createElement("script")
    script.async = true
    script.src = KIT_FORM_SRC
    script.dataset.uid = getKitFormUid({ src: KIT_FORM_SRC })
    containerRef.current.appendChild(script)

    return () => {
      if (!containerRef.current) return
      containerRef.current.innerHTML = ""
    }
  }, [])

  return <div ref={containerRef} className={className} />
}

export { KitForm }
