"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import WhatsappLink from "./WhatsappLink"
import { INSTAGRAM_URL, procedimientos, waLink } from "@/app/content/site"

// "Procedimientos" se muestra aparte como desplegable con las 4 páginas
const links = [
  { name: "Ubicaciones", href: "/ubicaciones" },
  { name: "Sobre mí", href: "/sobre-mi" },
  { name: "Contacto", href: "/contacto" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [desplegable, setDesplegable] = useState(false)
  const [subMovil, setSubMovil] = useState(false)
  const desplegableRef = useRef(null)

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

  // Cierra el desplegable con Escape o al hacer clic fuera
  useEffect(() => {
    if (!desplegable) return
    const onKey = (e) => e.key === "Escape" && setDesplegable(false)
    const onClick = (e) => {
      if (!desplegableRef.current?.contains(e.target)) setDesplegable(false)
    }
    window.addEventListener("keydown", onKey)
    document.addEventListener("pointerdown", onClick)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.removeEventListener("pointerdown", onClick)
    }
  }, [desplegable])

  const cerrarTodo = () => {
    setOpen(false)
    setDesplegable(false)
    setSubMovil(false)
  }

  // En el home el navbar arranca transparente sobre la foto del hero
  const sobreFoto = pathname === "/" && !scrolled && !open && !desplegable
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
            onClick={cerrarTodo}
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
              <li
                ref={desplegableRef}
                className="relative"
                onMouseEnter={() => setDesplegable(true)}
                onMouseLeave={() => setDesplegable(false)}
              >
                <button
                  type="button"
                  onClick={() => setDesplegable((v) => !v)}
                  aria-expanded={desplegable}
                  aria-controls="menu-procedimientos"
                  className="link-editorial flex items-center gap-1.5 py-1"
                >
                  Procedimientos
                  <span
                    aria-hidden="true"
                    className={`text-[0.6rem] transition-transform duration-300 ${
                      desplegable ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {/* pt-4 mantiene el hover al bajar el mouse hacia el panel */}
                <div
                  id="menu-procedimientos"
                  className={`absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-4 transition-[opacity,transform] duration-300 ${
                    desplegable
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <ul className="border border-linea bg-crema p-2 text-tinta shadow-[0_24px_50px_-24px_rgba(28,26,25,0.45)]">
                    {procedimientos.map((p) => (
                      <li key={p.id}>
                        <Link
                          href={p.href}
                          onClick={cerrarTodo}
                          className="flex items-baseline justify-between gap-4 px-4 py-3 transition-colors hover:bg-arena"
                        >
                          <span className="font-serif text-xl">{p.nombre}</span>
                          <span aria-hidden="true">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
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
        <div className="contenedor flex h-full flex-col overflow-y-auto pb-28 pt-24">
          <ul className="space-y-1">
            <li className="border-b border-linea">
              <Link href="/" onClick={cerrarTodo} className="block py-4">
                <span className="font-serif text-4xl">Inicio</span>
              </Link>
            </li>
            <li className="border-b border-linea">
              <button
                type="button"
                onClick={() => setSubMovil((v) => !v)}
                aria-expanded={subMovil}
                aria-controls="submenu-procedimientos"
                className="flex w-full items-center justify-between py-4 text-left"
              >
                <span className="font-serif text-4xl">Procedimientos</span>
                <span
                  aria-hidden="true"
                  className={`relative block h-3 w-3 transition-transform duration-500 ${
                    subMovil ? "rotate-45" : ""
                  }`}
                >
                  <span className="absolute left-0 top-1/2 h-px w-3 bg-tinta" />
                  <span className="absolute left-1/2 top-0 h-3 w-px bg-tinta" />
                </span>
              </button>
              <div
                id="submenu-procedimientos"
                className={`grid transition-[grid-template-rows] duration-500 ease-[var(--ease-editorial)] ${
                  subMovil ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <ul className="overflow-hidden">
                  {procedimientos.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={p.href}
                        onClick={cerrarTodo}
                        className="flex items-baseline justify-between py-2.5 pl-1"
                      >
                        <span className="font-serif text-2xl text-tinta-suave">
                          {p.nombre}
                        </span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                  <li aria-hidden="true" className="h-3" />
                </ul>
              </div>
            </li>
            {links.map((link) => (
              <li key={link.name} className="border-b border-linea">
                <Link href={link.href} onClick={cerrarTodo} className="block py-4">
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
