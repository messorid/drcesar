import FbViewContent from "../components/FbViewContent"
import {
  Bloque,
  CtaWhatsapp,
  ProcedimientoHero,
  Relacionados,
} from "../components/procedimiento/Procedimiento"
import { procedimientos, waLink } from "../content/site"

export const metadata = {
  title: "BBL en Barinas | Dr Cesar Rosales Cirujano Plastico",
  description:
    "BBL en Barinas con evaluacion medica especializada. El Dr Cesar Rosales realiza procedimientos con enfoque en seguridad y criterio medico.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/bbl-barinas",
  },
  openGraph: {
    title: "BBL en Barinas | Dr Cesar Rosales",
    description:
      "Cirugia BBL en Barinas con evaluacion medica personalizada.",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "BBL en Barinas Dr Cesar Rosales",
      },
    ],
  },
}

const contentName = "BBL"
const whatsappHref = waLink(
  "Hola Dr. César Rosales, deseo información sobre BBL en Barinas"
)

const relacionados = [
  { href: "/cirujano-plastico-barinas", label: "Cirujano plástico en Barinas" },
  { href: "/retiro-biopolimeros-barinas", label: "Retiro de biopolímeros en Barinas" },
  { href: "/lipo-hd-barinas", label: "Lipo HD en Barinas" },
  { href: "/como-agendar-consulta-barinas", label: "Cómo agendar una consulta en Barinas" },
  { href: "/contacto", label: "Página de contacto" },
]

export default function BBLBarinasPage() {
  const { zonas } = procedimientos.find((p) => p.id === "bbl")

  return (
    <main className="w-full bg-crema text-tinta">
      <FbViewContent contentName={contentName} />

      <ProcedimientoHero
        etiqueta="Contorno corporal · Barinas"
        titulo={
          <>
            BBL en <em>Barinas</em>
          </>
        }
        intro="El BBL es un procedimiento de cirugía plástica que requiere una evaluación médica cuidadosa. En Barinas, el Dr. César Rosales realiza este procedimiento con enfoque en seguridad y resultados armónicos."
        whatsappHref={whatsappHref}
        contentName={contentName}
        zonas={zonas}
      />

      <Bloque
        id="informacion"
        numero="01"
        etiqueta="El procedimiento"
        titulo={
          <>
            Qué es el <em>BBL</em>
          </>
        }
        fondo="arena"
      >
        <p>
          El BBL combina liposucción y transferencia de grasa para mejorar el
          contorno corporal de forma equilibrada y personalizada.
        </p>
      </Bloque>

      <Bloque
        numero="02"
        etiqueta="La consulta"
        titulo={
          <>
            Consulta para BBL en <em>Barinas</em>
          </>
        }
      >
        <p>
          Durante la consulta se evalúa el estado de salud del paciente y se
          determina si es candidato al procedimiento.
        </p>
      </Bloque>

      <Relacionados numero="03" links={relacionados} />

      <CtaWhatsapp
        titulo={
          <>
            Coordina tu evaluación para BBL en <em>Barinas.</em>
          </>
        }
        texto="Para conocer disponibilidad de consultas en Barinas, se recomienda contactar por WhatsApp y coordinar una evaluación médica."
        whatsappHref={whatsappHref}
        contentName={contentName}
      />
    </main>
  )
}
