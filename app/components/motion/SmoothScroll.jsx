"use client"

import { useEffect } from "react"
import { loadGsap, prefersReducedMotion } from "@/app/lib/motion"

// Lenis sólo en escritorio con mouse: en móvil el scroll nativo es más
// fluido y nos ahorramos el JavaScript.
export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return
    if (!window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches)
      return

    let lenis
    let tick
    let gsapRef
    let cancelled = false

    const timer = window.setTimeout(() => {
      Promise.all([import("lenis"), loadGsap()]).then(
        ([{ default: Lenis }, { gsap, ScrollTrigger }]) => {
          if (cancelled) return
          gsapRef = gsap
          lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 0.9 })
          lenis.on("scroll", ScrollTrigger.update)
          tick = (time) => lenis.raf(time * 1000)
          gsap.ticker.add(tick)
          gsap.ticker.lagSmoothing(0)
        }
      )
    }, 1200)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
      if (tick) gsapRef?.ticker.remove(tick)
      lenis?.destroy()
    }
  }, [])

  return null
}
