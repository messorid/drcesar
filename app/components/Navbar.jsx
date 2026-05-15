"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import WhatsappLink from "./WhatsappLink"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Ubicaciones", href: "/ubicaciones" },
    { name: "Sobre mí", href: "/sobre-mi" },
    { name: "Contacto", href: "/contacto" },
  ]

  const instagramUrl = "https://www.instagram.com/drcesarrosales/"
  const whatsappUrl =
    "https://wa.me/584245846191?text=" +
    encodeURIComponent(
      "Hola Dr César Rosales, deseo información para agendar una consulta"
    )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/85 backdrop-blur-xl border-b border-[var(--border-gold)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          {/* Monograma */}
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-gold)] font-display text-lg gold-text transition-transform duration-500 group-hover:scale-105">
              CR
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-base text-cream tracking-wide">
                Dr. César Rosales
              </span>
              <span className="text-[0.62rem] uppercase tracking-[0.3em] text-stone mt-1">
                Cirujano Plástico
              </span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-9 text-[0.82rem] tracking-wide text-sand">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="relative py-1 transition-colors duration-300 hover:text-cream after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <WhatsappLink
              href={whatsappUrl}
              className="border border-[var(--border-gold)] rounded-full px-5 py-2 text-[0.78rem] uppercase tracking-[0.18em] text-gold-light transition-all duration-300 hover:bg-[rgba(201,169,106,0.08)] hover:border-[rgba(201,169,106,0.7)]"
            >
              Agendar
            </WhatsappLink>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Abrir menú"
          >
            <span className="block h-px w-6 bg-gold" />
            <span className="block h-px w-6 bg-gold" />
            <span className="block h-px w-4 bg-gold self-end" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/80 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-ink-soft border-l border-[var(--border-gold)] transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col px-8 py-10">
            <div className="flex items-center justify-between">
              <span className="font-display text-xl gold-text">
                Dr. César Rosales
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-stone text-sm uppercase tracking-[0.2em]"
              >
                Cerrar
              </button>
            </div>

            <div className="gold-divider mt-8" />

            <ul className="mt-12 space-y-7">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl text-cream transition-colors hover:text-gold-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto space-y-5">
              <WhatsappLink
                href={whatsappUrl}
                className="btn-gold w-full"
              >
                Agendar consulta
              </WhatsappLink>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm uppercase tracking-[0.22em] text-stone transition-colors hover:text-gold-light"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
