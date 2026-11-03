import FbViewContent from "../components/FbViewContent"
import {
  Bloque,
  CtaWhatsapp,
  ProcedimientoHero,
  Relacionados,
} from "../components/procedimiento/Procedimiento"
import { procedimientos, waLink } from "../content/site"

export const metadata = {
  title: "Lipo HD en Barinas | Dr Cesar Rosales Cirujano Plastico",
  description:
    "Lipo HD en Barinas con evaluacion medica especializada. El Dr Cesar Rosales realiza procedimientos de contorno corporal con enfoque seguro y personalizado.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/lipo-hd-barinas",
  },
  openGraph: {
    title: "Lipo HD en Barinas | Dr Cesar Rosales",
    description:
      "Cirugia Lipo HD en Barinas con criterio medico y enfoque profesional.",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Lipo HD en Barinas Dr Cesar Rosales",
      },
    ],
  },
}

const contentName = "Lipo HD"
const whatsappHref = waLink(
  "Hola Dr. César Rosales, deseo información sobre Lipo HD en Barinas"
)

const relacionados = [
  { href: "/cirujano-plastico-barinas", label: "Cirujano plástico en Barinas" },
  {
    href: "/retiro-biopolimeros-barinas",
    label: "Retiro de biopolímeros en Barinas",
  },
  { href: "/bbl-barinas", label: "BBL en Barinas" },
  {
    href: "/como-agendar-consulta-barinas",
    label: "Cómo agendar una consulta en Barinas",
  },
  { href: "/contacto", label: "Página de contacto" },
]

export default function LipoHDBarinasPage() {
  const { zonas } = procedimientos.find((p) => p.id === "lipo-hd")

  return (
    <main className="w-full bg-crema text-tinta">
      <FbViewContent contentName={contentName} />

      <ProcedimientoHero
        etiqueta="Contorno corporal · Barinas"
        titulo={
          <>
            Lipo HD en <em>Barinas</em>
          </>
        }
        intro="Definición y escultura corporal con planificación médica detallada y resultados armónicos."
        whatsappHref={whatsappHref}
        contentName={contentName}
        zonas={zonas}
      />

      <Bloque
        id="informacion"
        numero="01"
        etiqueta="Introducción"
        titulo={
          <>
            Contorno con <em>criterio médico</em>
          </>
        }
        fondo="arena"
      >
        <p>
          La Lipo HD es un procedimiento de contorno corporal que requiere una
          planificación médica detallada y experiencia quirúrgica. En Barinas,
          el Dr. César Rosales realiza este procedimiento con un enfoque
          orientado a la seguridad del paciente y resultados definidos y
          armónicos.
        </p>
        <p>
          Cada paciente es evaluado de manera individual para determinar si es
          candidato a la técnica y establecer expectativas reales según su
          anatomía y estado de salud.
        </p>
      </Bloque>

      <Bloque
        numero="02"
        etiqueta="Qué es"
        titulo={
          <>
            Qué es la <em>Lipo HD</em>
          </>
        }
      >
        <p>
          La Lipo HD es una técnica de liposucción avanzada que busca definir
          grupos musculares y mejorar el contorno corporal, respetando la
          anatomía natural del paciente.
        </p>
      </Bloque>

      <Bloque
        numero="03"
        etiqueta="La consulta"
        titulo={
          <>
            Consulta para Lipo HD en <em>Barinas</em>
          </>
        }
        fondo="arena"
      >
        <p>
          Durante la consulta se evalúa el estado general de salud, la calidad
          de la piel y el tejido graso, así como las expectativas del paciente,
          para determinar si es candidato al procedimiento.
        </p>
      </Bloque>

      <Bloque
        numero="04"
        etiqueta="Compromiso"
        titulo={
          <>
            Seguridad y <em>enfoque médico</em>
          </>
        }
      >
        <p>
          El Dr. César Rosales aplica técnicas quirúrgicas responsables y
          protocolos médicos adecuados, priorizando siempre la seguridad del
          paciente y un acompañamiento profesional durante todo el proceso.
        </p>
      </Bloque>

      <Relacionados numero="05" links={relacionados} />

      <CtaWhatsapp
        titulo={
          <>
            Coordina tu evaluación <em>médica.</em>
          </>
        }
        texto="Consulta la disponibilidad para Lipo HD en Barinas y agenda una evaluación personalizada."
        whatsappHref={whatsappHref}
        contentName={contentName}
      />
    </main>
  )
}
