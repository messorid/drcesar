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
      "absolute z-20 text-[11px] sm:text-xs font-medium text-white/90 tracking-wide px-2 py-1 rounded-full bg-black/35 backdrop-blur select-none"
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

  return (
    <div className={`w-full select-none ${className}`}>
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="
          relative mx-auto w-full max-w-4xl
          aspect-[16/10] sm:aspect-[16/9]
          overflow-hidden rounded-3xl
          shadow-[0_30px_80px_rgba(0,0,0,0.25)]
          bg-neutral-900
          ring-1 ring-black/10
          cursor-col-resize
          touch-none
          select-none
        "
      >
        {/* Fondo elegante */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/15 via-transparent to-black/35 pointer-events-none" />

        {/* Imagen despues */}
        <div className="absolute inset-0 z-[2]">
          <Image
            src={afterImage}
            alt={altAfter}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            draggable={false}
            className="object-cover pointer-events-none select-none"
            priority
          />
        </div>

        {/* Imagen antes */}
        <div
          className="absolute inset-0 z-[3] overflow-hidden will-change-[width]"
          style={{
            width: `${pos}%`,
            transition: reducedMotion ? "none" : "width 140ms ease-out",
          }}
        >
          <Image
            src={beforeImage}
            alt={altBefore}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            draggable={false}
            className="object-cover pointer-events-none select-none"
          />
        </div>

        {/* Labels */}
        <div className="absolute z-[5] left-3 top-3 select-none">
          <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-white/85 text-neutral-900 shadow">
            {labelBefore}
          </span>
        </div>

        <div className="absolute z-[5] right-3 top-3 select-none">
          <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-white/85 text-neutral-900 shadow">
            {labelAfter}
          </span>
        </div>

        {/* Watermark */}
        {watermarkText && (
          <div className={watermarkClasses}>{watermarkText}</div>
        )}

        {/* Linea divisora */}
        <div
          className="absolute z-[6] top-0 bottom-0 w-[3px] bg-white/95 shadow pointer-events-none"
          style={{
            left: `${pos}%`,
            transform: "translateX(-1.5px)",
          }}
        />

        {/* Handle minimal */}
        <div
          className="absolute z-[7] top-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            left: `${pos}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="
              w-14 h-14 sm:w-16 sm:h-16
              rounded-full bg-white
              shadow-[0_16px_40px_rgba(0,0,0,0.25)]
              ring-1 ring-black/10
            "
          />
        </div>

        {/* Micro tip */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[8] pointer-events-none select-none">
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium text-white/90 bg-black/35 backdrop-blur px-3 py-1 rounded-full">
            Desliza para comparar
            <span className="inline-block w-2 h-2 rounded-full bg-white/80 animate-pulse" />
          </span>
        </div>
      </div>
    </div>
  )
}
