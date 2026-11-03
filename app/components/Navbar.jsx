"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import WhatsappLink from "./WhatsappLink"
import { INSTAGRAM_URL, waLink } from "@/app/content/site"

const links = [
  { name: "Procedimientos", href: "/#procedimientos" },
  { name: "Ubicaciones", href: "/ubicaciones" },
  { name: "Sobre mí", href: "/sobre-mi" },
  { name: "Contacto", href: "/contacto" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : ""
    if (!open) return
    const onKey = (e) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  // En el home el navbar arranca transparente sobre la foto del hero
  const sobreFoto = pathname === "/" && !scrolled && !open
  const texto = sobreFoto ? "text-crema" : "text-tinta"

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-500 ${
          sobreFoto
            ? "border-b border-transparent bg-transparent"
            : "border-b border-linea bg-crema/90 backdrop-blur-md"
        } ${texto}`}
      >
        <nav className="contenedor flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex flex-col leading-none"
          >
            <span className="font-serif text-xl tracking-tight lg:text-2xl">
              Dr. César Rosales
            </span>
            <span
              className={`mt-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] ${
                sobreFoto ? "text-crema/75" : "text-tinta-suave"
              }`}
            >
              Cirujano Plástico
            </span>
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            <ul className="flex items-center gap-8 text-[0.82rem]">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="link-editorial py-1">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <WhatsappLink
              href={waLink()}
              label="Navbar"
              className={`btn !min-h-[42px] !px-5 ${
                sobreFoto ? "btn-claro" : "btn-primario"
              }`}
            >
              Agendar consulta
            </WhatsappLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 flex h-11 items-center gap-3 px-2 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em]">
              {open ? "Cerrar" : "Menú"}
            </span>
            <span className="relative block h-3 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 h-px w-6 bg-current transition-transform duration-500 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-6 bg-current transition-transform duration-500 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Menú móvil a pantalla completa */}
      <div
        id="menu-movil"
        className={`fixed inset-0 z-40 bg-crema transition-[clip-path] duration-700 ease-[var(--ease-editorial)] lg:hidden ${
          open
            ? "[clip-path:inset(0_0_0_0)]"
            : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="contenedor flex h-full flex-col pb-28 pt-24">
          <ul className="space-y-1">
            {[{ name: "Inicio", href: "/" }, ...links].map((link) => (
              <li key={link.name} className="border-b border-linea">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="font-serif text-4xl">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-4">
            <WhatsappLink
              href={waLink()}
              label="Menu movil"
              className="btn btn-primario w-full"
            >
              Agendar por WhatsApp
            </WhatsappLink>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="label block text-center"
            >
              Instagram · @drcesarrosales
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
