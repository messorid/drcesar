"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const servicios = [
  {
    title: "BBL",
    image: "/images/servicios/bbl.jpeg",
  },
  {
    title: "Lipo HD",
    image: "/images/servicios/lipo-hd.PNG",
  },
  {
    title: "Cirugía Mamaria",
    image: "/images/servicios/cirugia-mamaria.PNG",
  },
  {
    title: "Retiro de Biopolímeros y Reconstrucción",
    image: "/images/servicios/Biopolimeros1.jpeg",
  },
]

export default function ServiciosCards() {
  return (
    <section className="relative w-full bg-black py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl"
            >
              <Image
                src={servicio.image}
                alt={servicio.title}
                width={600}
                height={800}
                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/55" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-medium text-white">
                  {servicio.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile DRAG */}
        <div
          className="
            md:hidden
            flex gap-6
            overflow-x-scroll
            pb-6
            snap-x snap-mandatory
            scroll-smooth
            no-scrollbar
          "
        >
          {servicios.map((servicio) => (
            <div
              key={servicio.title}
              className="min-w-[80%] snap-center shrink-0"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={servicio.image}
                  alt={servicio.title}
                  width={600}
                  height={800}
                  draggable={false}
                  className="h-[380px] w-full object-cover select-none"
                />

                <div className="absolute inset-0 bg-black/55" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-base font-medium text-white">
                    {servicio.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hint visual */}
        <div className="mt-4 flex justify-center md:hidden">
          <span className="text-xs text-white/50">
            Desliza horizontalmente →
          </span>
        </div>
      </div>
    </section>
  )
}
