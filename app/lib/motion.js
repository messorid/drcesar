"use client"

import { useEffect } from "react"

// GSAP se carga bajo demanda y una sola vez: nunca entra en el bundle inicial.
let gsapPromise

export function loadGsap() {
  if (!gsapPromise) {
    gsapPromise = Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
      import("gsap/SplitText"),
    ]).then(([g, st, sp]) => {
      const gsap = g.gsap || g.default
      gsap.registerPlugin(st.ScrollTrigger, sp.SplitText)
      return { gsap, ScrollTrigger: st.ScrollTrigger, SplitText: sp.SplitText }
    })
  }
  return gsapPromise
}

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

function whenIdle(cb) {
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(cb, { timeout: 1500 })
    return () => window.cancelIdleCallback(id)
  }
  const id = window.setTimeout(cb, 200)
  return () => window.clearTimeout(id)
}

/**
 * Monta una escena GSAP sobre `ref` cuando la sección se acerca al viewport.
 * El contenido se renderiza visible en el servidor; GSAP sólo aplica los
 * estados iniciales justo antes de que la persona llegue a la sección.
 * Con prefers-reduced-motion no se carga nada.
 */
export function useScene(ref, setup, { eager = false } = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    let ctx
    let cancelled = false
    let io
    let cancelIdle

    const start = () => {
      cancelIdle = whenIdle(() => {
        loadGsap().then((lib) => {
          if (cancelled) return
          ctx = lib.gsap.context(() => setup({ ...lib, el }), el)
        })
      })
    }

    if (eager) {
      start()
    } else {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            io.disconnect()
            start()
          }
        },
        { rootMargin: "0px 0px 25% 0px" }
      )
      io.observe(el)
    }

    return () => {
      cancelled = true
      io?.disconnect()
      cancelIdle?.()
      ctx?.revert()
    }
    // La escena se monta una sola vez por instancia
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
