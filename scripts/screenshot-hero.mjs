import { chromium } from "playwright"
import * as fs from "node:fs"

const VIEWPORTS = [
  { name: "mobile-375", width: 375, height: 812 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "laptop-1024", width: 1024, height: 768 },
  { name: "desktop-1280", width: 1280, height: 900 },
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "wide-1920", width: 1920, height: 1080 },
]

const OUT_DIR = "screenshots"
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR)

async function main() {
  const browser = await chromium.launch()

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } })
    const page = await context.newPage()

    await page.goto("http://localhost:3000", { waitUntil: "networkidle" })
    await page.waitForTimeout(1000)

    await page.screenshot({
      path: `${OUT_DIR}/hero-${vp.name}.png`,
      clip: { x: 0, y: 0, width: vp.width, height: vp.height },
    })

    const metrics = await page.evaluate(() => {
      const h1 = document.querySelector("h1")
      if (!h1) return null
      const rect = h1.getBoundingClientRect()
      const style = window.getComputedStyle(h1)
      const container = h1.closest("div")
      const containerRect = container?.getBoundingClientRect()
      return {
        fontSize: style.fontSize,
        lineHeight: style.lineHeight,
        fontFamily: style.fontFamily,
        h1Width: Math.round(rect.width),
        h1Height: Math.round(rect.height),
        containerWidth: containerRect ? Math.round(containerRect.width) : null,
        overflowsContainer: containerRect ? rect.right > containerRect.right : null,
        viewportWidth: window.innerWidth,
        hasHorizontalScroll: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      }
    })

    console.log(`\n[${vp.name}] ${vp.width}x${vp.height}`)
    if (metrics) {
      console.log(`  font-size: ${metrics.fontSize}`)
      console.log(`  line-height: ${metrics.lineHeight}`)
      console.log(`  font-family: ${metrics.fontFamily.slice(0, 60)}...`)
      console.log(`  h1 box: ${metrics.h1Width}x${metrics.h1Height}px`)
      console.log(`  container width: ${metrics.containerWidth}px`)
      console.log(`  overflows container: ${metrics.overflowsContainer}`)
      console.log(`  horizontal scroll: ${metrics.hasHorizontalScroll}`)
    }

    // Also take full-page screenshot
    await page.screenshot({
      path: `${OUT_DIR}/full-${vp.name}.png`,
      fullPage: true,
    })

    await context.close()
  }

  await browser.close()
  console.log(`\nScreenshots saved to ${OUT_DIR}/`)
}

main()
