"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Ubicaciones", href: "/ubicaciones" },
    { name: "Sobre mi", href: "/sobre-mi" },
    { name: "Contacto", href: "/contacto" },
  ]

  const instagramUrl = "https://www.instagram.com/drcesarrosales/"

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8 text-sm text-white/80">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white/70 text-sm
                border border-white/20
                rounded-full px-4 py-1
                transition
                hover:text-white
                hover:border-white/40
              "
            >
              Instagram
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-sm"
            aria-label="Abrir menu"
          >
            Menu
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`
          fixed inset-0 z-50 bg-black/90 backdrop-blur-sm transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="h-full flex flex-col px-6 py-8">
          {/* Close */}
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(false)}
              className="text-white text-sm"
            >
              Cerrar
            </button>
          </div>

          {/* Links */}
          <ul className="mt-16 space-y-8 text-lg text-white">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Instagram mobile */}
            <li className="pt-8 border-t border-white/10">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
