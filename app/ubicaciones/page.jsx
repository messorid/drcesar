"use client"

import { useState } from "react"

const locations = [
  {
    id: "caracas",
    title: "Caracas",
    description:
      "Atención médica especializada en un entorno seguro y profesional.",
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d245.19411521250538!2d-66.86010009219734!3d10.492321951879205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI5JzMyLjEiTiA2NsKwNTEnMzYuOCJX!5e0!3m2!1ses-419!2sus!4v1766981241043!5m2!1ses-419!2sus"
        className="w-full h-[360px] rounded-xl border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },
  {
    id: "barinas",
    title: "Barinas",
    description:
      "Consultas y procedimientos con enfoque médico y reconstructivo.",
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.881949610164!2d-70.25898162600816!3d8.607331395449043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7b579d4df30779%3A0x45a695ebcf3a8c88!2sMEDISPA!5e0!3m2!1ses!2sus!4v1766981098213!5m2!1ses!2sus"
        className="w-full h-[360px] rounded-xl border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },
  {
    id: "san-cristobal",
    title: "San Cristóbal",
    description:
      "Evaluación personalizada y acompañamiento médico especializado.",
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.173661189642!2d-72.22276353021296!3d7.771401990299009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666db30aa10ca7%3A0x867f4f3caa571d60!2sMEDISPA!5e0!3m2!1ses!2sus!4v1766981150727!5m2!1ses!2sus"
        className="w-full h-[360px] rounded-xl border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },
]

export default function UbicacionesPage() {
  const [openId, setOpenId] = useState("caracas")

  return (
    <main className="min-h-screen w-full px-6 py-16 flex justify-center bg-black text-white">
      <div className="w-full max-w-2xl">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-white">
          Ubicaciones
        </h1>

        {/* Intro */}
        <p className="text-center text-slate-300 mb-10">
          El Dr. César Rosales atiende en distintas ciudades para brindar
          atención médica especializada y accesible.
        </p>

        {/* Accordion */}
        <div className="space-y-4">
          {locations.map((location) => {
            const isOpen = openId === location.id

            return (
              <div
                key={location.id}
                className="border border-slate-700 rounded-2xl overflow-hidden bg-[#0f0f10]"
              >
                {/* Header */}
                <button
                  onClick={() =>
                    setOpenId(isOpen ? null : location.id)
                  }
                  className={`
                    w-full flex justify-between items-center px-6 py-5 text-left
                    transition-colors
                    ${isOpen ? "bg-[#151517]" : "bg-[#0f0f10]"}
                  `}
                >
                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      {location.title}
                    </h2>
                    <p className="text-sm text-slate-300">
                      {location.description}
                    </p>
                  </div>

                  <span className="text-2xl font-light text-white">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Content con animación */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-out
                    ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="px-6 pb-6 pt-4 bg-black border-t border-slate-700">
                    {location.iframe}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
