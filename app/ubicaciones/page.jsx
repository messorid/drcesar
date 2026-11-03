import Link from "next/link"
import Reveal from "../components/motion/Reveal"
import { ubicaciones } from "../content/site"

// Textos propios de esta página (los de site.js se usan en el home)
const resumen = {
  barinas:
    "Atención médica especializada en cirugía plástica con enfoque médico y evaluación personalizada.",
  caracas:
    "Consultas médicas con orientación profesional y planificación quirúrgica personalizada.",
  "san-cristobal":
    "Consultas de evaluación en el Táchira. Escríbenos para conocer las próximas fechas disponibles.",
}

export const metadata = {
  title: "Ubicaciones | Dr Cesar Rosales Cirujano Plastico",
  description:
    "Ubicaciones de atención del Dr Cesar Rosales, cirujano plastico con consultas en Barinas y Caracas.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/ubicaciones",
  },
  openGraph: {
    title: "Ubicaciones | Dr Cesar Rosales",
    description:
      "Consulta las ubicaciones de atención del Dr Cesar Rosales en Venezuela.",
    url: "https://www.drcesarrosales.com/ubicaciones",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Ubicaciones Dr Cesar Rosales",
      },
    ],
  },
}

export default function UbicacionesPage() {
  return (
    <main className="w-full bg-crema pb-24 pt-28 lg:pb-32 lg:pt-36">
      <div className="contenedor">
        <Reveal>
          <p data-reveal className="label">
            Barinas · Caracas · San Cristóbal
          </p>
          <h1 data-reveal className="display mt-6 max-w-[14ch] text-[clamp(2.8rem,8vw,6.5rem)]">
            Ubicaciones de <em>atención</em>
          </h1>
          <p data-reveal className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-tinta-suave">
            El Dr. César Rosales brinda atención médica especializada en
            distintas ciudades. Selecciona la ubicación para conocer más
            información sobre la consulta y los procedimientos disponibles.
          </p>
        </Reveal>

        <Reveal as="ul" className="mt-16 border-t border-linea lg:mt-24">
          {ubicaciones.map((u, i) => (
            <li key={u.id} data-reveal className="border-b border-linea">
              <Link
                href={u.href}
                className="group grid gap-4 py-10 lg:grid-cols-12 lg:items-baseline lg:gap-6 lg:py-14"
              >
                <h2 className="display text-[clamp(2.8rem,7vw,5.5rem)] transition-transform duration-700 ease-[var(--ease-editorial)] lg:col-span-7 lg:group-hover:translate-x-3">
                  {u.ciudad}
                </h2>
                <p className="max-w-sm leading-relaxed text-tinta-suave lg:col-span-4">
                  {resumen[u.id]}
                </p>
                <span className="label !text-tinta lg:col-span-1 lg:justify-self-end">
                  Ver ubicación →
                </span>
              </Link>
            </li>
          ))}
        </Reveal>

        <p className="mt-16 max-w-xl text-sm leading-relaxed text-tinta-suave">
          La disponibilidad de consultas puede variar según la ciudad y la
          agenda médica. La coordinación se realiza por WhatsApp.
        </p>
      </div>
    </main>
  )
}
