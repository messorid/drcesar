"use client"

import { useRef } from "react"
import { useScene } from "@/app/lib/motion"

/**
 * Fade + subida suave al entrar en pantalla. Los hijos directos con
 * [data-reveal] entran escalonados; si no hay, se anima el bloque completo.
 */
export default function Reveal({ as: Tag = "div", className, children, ...rest }) {
  const ref = useRef(null)

  useScene(ref, ({ gsap, el }) => {
    const items = el.querySelectorAll("[data-reveal]")
    const targets = items.length ? items : el
    gsap.from(targets, {
      opacity: 0,
      y: 28,
      duration: 1.1,
      ease: "power3.out",
      stagger: 0.09,
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    })
  })

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
