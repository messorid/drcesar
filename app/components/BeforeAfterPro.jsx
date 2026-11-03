"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}

export default function BeforeAfterPro({
  beforeImage,
  afterImage,
  altBefore = "Antes",
  altAfter = "Despues",
  initial = 52,
  className = "",
  labelBefore = "Antes",
  labelAfter = "Despues",
  watermarkText = "",
  watermarkPosition = "bottom-right",
  autoplay = true,
  autoplayMs = 1400,
  autoplaySweep = true,
}) {
  const containerRef = useRef(null)
  const draggingRef = useRef(false)
  const intervalRef = useRef(null)

  const [pos, setPos] = useState(clamp(initial, 0, 100))
  const [isHover, setIsHover] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const watermarkClasses = useMemo(() => {
    const base =
      "label absolute z-20 bg-tinta/60 px-2 py-1 !text-crema select-none"
    if (watermarkPosition === "bottom-left")
      return `${base} left-3 bottom-3`
    if (watermarkPosition === "top-right") return `${base} right-3 top-3`
    if (watermarkPosition === "top-left") return `${base} left-3 top-3`
    return `${base} right-3 bottom-3`
  }, [watermarkPosition])

  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(!!mq.matches)
    update()
    mq.addEventListener?.("change", update)
    return () => mq.removeEventListener?.("change", update)
  }, [])

  const setFromClientX = (clientX) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setPos(clamp(percentage, 0, 100))
  }

  const onPointerDown = (e) => {
    draggingRef.current = true
    e.currentTarget.setPointerCapture?.(e.pointerId)
    setFromClientX(e.clientX)
  }

  const onPointerMove = (e) => {
    if (!draggingRef.current) return
    setFromClientX(e.clientX)
  }

  const onPointerUp = () => {
    draggingRef.current = false
  }

  useEffect(() => {
    if (!autoplay || reducedMotion) return

    let direction = 1
    let current = clamp(initial, 0, 100)

    const tick = () => {
      if (draggingRef.current || isHover) return

      current += direction * 9

      if (autoplaySweep) {
        if (current >= 88) direction = -1
        if (current <= 12) direction = 1
      } else {
        if (current >= 92) current = 8
      }

      setPos(clamp(current, 0, 100))
    }

    intervalRef.current = setInterval(tick, autoplayMs)
    return () => clearInterval(intervalRef.current)
  }, [autoplay, autoplayMs, autoplaySweep, reducedMotion, initial, isHover])

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault()
      setPos((p) => clamp(p + (e.key === "ArrowRight" ? 5 : -5), 0, 100))
    }
  }

  return (
    <figure className={`w-full select-none ${className}`}>
      <div
        ref={containerRef}
        role="slider"
        tabIndex={0}
        aria-label="Comparar antes y después"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onFocus={() => setIsHover(true)}
        onBlur={() => setIsHover(false)}
        className="relative mx-auto aspect-[4/5] w-full max-w-5xl cursor-col-resize touch-pan-y select-none overflow-hidden bg-tinta sm:aspect-[16/9]"
      >
        {/* Imagen después */}
        <div className="absolute inset-0 z-[2]">
          <Image
            src={afterImage}
            alt={altAfter}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            draggable={false}
            className="pointer-events-none select-none object-cover"
          />
        </div>

        {/* Imagen antes */}
        <div
          className="absolute inset-0 z-[3]"
          style={{
            clipPath: `inset(0 ${100 - pos}% 0 0)`,
            transition: reducedMotion ? "none" : "clip-path 140ms ease-out",
          }}
        >
          <Image
            src={beforeImage}
            alt={altBefore}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            draggable={false}
            className="pointer-events-none select-none object-cover"
          />
        </div>

        {/* Etiquetas */}
        <span className="label absolute left-3 top-3 z-[5] bg-crema/90 px-2 py-1 !text-tinta">
          {labelBefore}
        </span>
        <span className="label absolute right-3 top-3 z-[5] bg-crema/90 px-2 py-1 !text-tinta">
          {labelAfter}
        </span>

        {watermarkText && <div className={watermarkClasses}>{watermarkText}</div>}

        {/* Línea divisora y manija */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-[6] w-px bg-crema"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-crema font-mono text-xs text-tinta shadow-[0_10px_30px_-10px_rgba(28,26,25,0.6)]">
            ⟷
          </span>
        </div>
      </div>
      <figcaption className="label mt-4">Desliza para comparar</figcaption>
    </figure>
  )
}
