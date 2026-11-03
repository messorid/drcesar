"use client"

import { useRef } from "react"
import { useScene } from "@/app/lib/motion"

// "DR. CÉSAR ROSALES" en serif gigante que asoma al llegar al final.
export default function FooterNombre() {
  const ref = useRef(null)

  useScene(ref, ({ gsap, el }) => {
    gsap.from(el.querySelector("[data-nombre]"), {
      yPercent: 70,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.6,
      },
    })
  })

  return (
    <div ref={ref} className="mt-14 overflow-hidden lg:mt-20" aria-hidden="true">
      <p
        data-nombre
        className="display whitespace-nowrap text-center text-[10.6vw] leading-[0.82] tracking-[-0.03em] text-crema"
      >
        DR. CÉSAR ROSALES
      </p>
    </div>
  )
}
