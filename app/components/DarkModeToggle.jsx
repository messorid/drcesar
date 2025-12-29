"use client"

import { useEffect, useState } from "react"

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setMounted(true)

    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark")
      setIsDark(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement

    if (html.classList.contains("dark")) {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  if (!mounted) return null

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Cambiar modo de color"
      className={`
        absolute top-6 right-6
        rounded-full
        px-4 py-1.5
        text-xs font-medium
        shadow-sm
        transition-all duration-300
        ${
          isDark
            ? "bg-slate-800 text-slate-100 border border-slate-600 hover:bg-slate-700"
            : "bg-slate-100 text-slate-900 border border-slate-300 hover:bg-slate-200"
        }
      `}
    >
      {isDark ? "Modo claro" : "Modo oscuro"}
    </button>
  )
}
