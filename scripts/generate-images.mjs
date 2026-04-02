import { GoogleGenAI } from "@google/genai"
import * as fs from "node:fs"
import * as path from "node:path"

const API_KEY = process.env.GEMINI_API_KEY
if (!API_KEY) {
  console.error("Set GEMINI_API_KEY env var")
  process.exit(1)
}

const ai = new GoogleGenAI({ apiKey: API_KEY })
const OUT_DIR = path.resolve("public/images")

const images = [
  {
    name: "hero-bg",
    aspect: "21:9",
    size: "2K",
    prompt:
      "Cinematic wide-angle photograph of the Sonoran Desert at golden hour, looking toward distant Phoenix Arizona mountains. Saguaro cacti silhouettes in the foreground, dramatic orange and deep purple sky with atmospheric haze. Warm light on desert floor. Photorealistic, no text, no people, editorial landscape photography.",
  },
  {
    name: "photo-break",
    aspect: "21:9",
    size: "2K",
    prompt:
      "Panoramic photograph of the Arizona Sonoran Desert at sunset. Wide horizon line, distant mesa formations, saguaro cacti scattered across the landscape, golden warm light flooding the scene. Atmospheric depth and soft haze. Photorealistic editorial landscape, no text, no people.",
  },
  {
    name: "event-build",
    aspect: "16:9",
    size: "2K",
    prompt:
      "Candid editorial photograph of developers at a hackathon event. People coding on laptops at long tables, warm ambient overhead lighting, blurred sponsor banners in background. Collaborative workspace energy. Shot on 35mm, shallow depth of field, warm color grading. Photorealistic, no logos, no text overlays.",
  },
  {
    name: "event-screen",
    aspect: "16:9",
    size: "2K",
    prompt:
      "Editorial photograph of a film screening in a dark cinema theater. Audience silhouettes watching a large illuminated screen showing an abstract film frame. Atmospheric blue and warm projection lighting spill. Shot from mid-theater perspective. Photorealistic, cinematic mood, no text.",
  },
  {
    name: "event-connect",
    aspect: "16:9",
    size: "2K",
    prompt:
      "Editorial photograph of a startup pitch competition. A founder presenting on a well-lit stage to a seated panel of investors. Professional conference stage lighting with warm spots. Audience visible in foreground, slightly blurred. Photorealistic, corporate event photography, no text.",
  },
  {
    name: "phoenix-skyline",
    aspect: "3:4",
    size: "2K",
    prompt:
      "Elevated photograph of the Phoenix Arizona downtown skyline at dusk. Modern glass buildings lit with warm interior light, Camelback Mountain visible in the background. Warm desert sunset colors in the sky, soft purple and orange gradients. Photorealistic urban landscape, no text.",
  },
  {
    name: "logo-aifilm3",
    aspect: "1:1",
    size: "512",
    prompt:
      "Minimal grayscale logo design for 'AI Film 3'. Clean modern sans-serif typography, the text 'AI Film 3' centered. Simple geometric film reel or camera icon element. Monochrome gray on pure white background. Flat design, no gradients, no shadows. Logo only.",
  },
  {
    name: "logo-bitangels",
    aspect: "1:1",
    size: "512",
    prompt:
      "Minimal grayscale logo design for 'BitAngels'. Clean modern sans-serif typography, the text 'BitAngels' centered. Simple geometric angel wing icon element. Monochrome gray on pure white background. Flat design, no gradients, no shadows. Logo only.",
  },
  {
    name: "logo-standwithcrypto",
    aspect: "1:1",
    size: "512",
    prompt:
      "Minimal grayscale logo design for 'Stand With Crypto AZ'. Clean modern sans-serif typography, the text centered. Simple shield or state outline icon element. Monochrome gray on pure white background. Flat design, no gradients, no shadows. Logo only.",
  },
  {
    name: "logo-devilsdao",
    aspect: "1:1",
    size: "512",
    prompt:
      "Minimal grayscale logo design for 'Devils DAO'. Clean modern sans-serif typography, the text 'Devils DAO' centered. Simple geometric pitchfork icon element. Monochrome gray on pure white background. Flat design, no gradients, no shadows. Logo only.",
  },
]

async function generateImage(img) {
  const label = `[${img.name}]`
  console.log(`${label} Generating (${img.aspect}, ${img.size})...`)

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-image-preview",
      contents: img.prompt,
      config: {
        responseModalities: ["IMAGE"],
        imageConfig: {
          aspectRatio: img.aspect,
          imageSize: img.size,
        },
      },
    })

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const ext = part.inlineData.mimeType?.includes("png") ? "png" : "webp"
        const outPath = path.join(OUT_DIR, `${img.name}.${ext}`)
        const buffer = Buffer.from(part.inlineData.data, "base64")
        fs.writeFileSync(outPath, buffer)
        console.log(`${label} Saved → ${outPath} (${(buffer.length / 1024).toFixed(0)} KB)`)
        return outPath
      }
    }
    console.error(`${label} No image data in response`)
  } catch (err) {
    console.error(`${label} Error: ${err.message}`)
  }
  return null
}

async function main() {
  console.log(`Generating ${images.length} images...\n`)

  // Run in batches of 3 to avoid rate limits
  for (let i = 0; i < images.length; i += 3) {
    const batch = images.slice(i, i + 3)
    const results = await Promise.allSettled(batch.map(generateImage))
    for (const r of results) {
      if (r.status === "rejected") console.error("Batch item failed:", r.reason)
    }
    if (i + 3 < images.length) {
      console.log("\nWaiting 5s between batches...\n")
      await new Promise((r) => setTimeout(r, 5000))
    }
  }

  console.log("\nDone. Check public/images/")
}

main()
