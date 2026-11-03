import FbViewContent from "../components/FbViewContent"
import {
  Bloque,
  CtaWhatsapp,
  ProcedimientoHero,
  Relacionados,
} from "../components/procedimiento/Procedimiento"
import { procedimientos, waLink } from "../content/site"

export const metadata = {
  title: "Retiro de Biopolimeros en Barinas | Dr Cesar Rosales",
  description:
    "Retiro de biopolimeros en Barinas con evaluacion medica especializada. El Dr Cesar Rosales ofrece cirugia reconstructiva con enfoque seguro y personalizado.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/retiro-biopolimeros-barinas",
  },
  openGraph: {
    title: "Retiro de Biopolimeros en Barinas | Dr Cesar Rosales",
    description:
      "Cirugia de retiro de biopolimeros en Barinas con enfoque medico y reconstructivo.",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Retiro de Biopolimeros en Barinas Dr Cesar Rosales",
      },
    ],
  },
}

const contentName = "Consulta General"
const whatsappHref = waLink(
  "Hola Dr. César Rosales, deseo información sobre retiro de biopolímeros en Barinas"
)

const relacionados = [
  { href: "/cirujano-plastico-barinas", label: "Cirujano plástico en Barinas" },
  { href: "/bbl-barinas", label: "BBL en Barinas" },
  { href: "/lipo-hd-barinas", label: "Lipo HD en Barinas" },
  { href: "/retiro-biopolimeros-caracas", label: "Retiro de biopolímeros en Caracas" },
  { href: "/como-agendar-consulta-barinas", label: "Cómo agendar una consulta en Barinas" },
]

export default function RetiroBiopolimerosBarinasPage() {
  const { zonas } = procedimientos.find((p) => p.id === "biopolimeros")

  return (
    <main className="w-full bg-crema text-tinta">
      <FbViewContent contentName={contentName} />

      <ProcedimientoHero
        etiqueta="Cirugía reconstructiva · Barinas"
        titulo={
          <>
            Retiro de Biopolímeros en <em>Barinas</em>
          </>
        }
        intro="El retiro de biopolímeros es un procedimiento quirúrgico que requiere una evaluación médica cuidadosa y experiencia en cirugía reconstructiva. En Barinas, el Dr. César Rosales realiza este tipo de cirugía con un enfoque centrado en la seguridad del paciente."
        whatsappHref={whatsappHref}
        contentName={contentName}
        zonas={zonas}
      />

      <Bloque
        id="informacion"
        numero="01"
        etiqueta="Cada caso es distinto"
        titulo={
          <>
            Una evaluación <em>individual</em>
          </>
        }
        fondo="arena"
      >
        <p>
          Cada caso es distinto, por lo que es fundamental analizar el tipo de
          material infiltrado, la zona afectada y el estado general de salud
          del paciente antes de indicar el procedimiento.
        </p>
      </Bloque>

      <Bloque
        numero="02"
        etiqueta="El procedimiento"
        titulo={
          <>
            Qué implica el retiro de <em>biopolímeros</em>
          </>
        }
      >
        <p>
          El procedimiento busca retirar la mayor cantidad posible del material
          infiltrado, disminuir complicaciones y mejorar la función y
          apariencia de la zona tratada. La cirugía puede requerir técnicas
          reconstructivas adicionales según el caso.
        </p>
      </Bloque>

      <Bloque
        numero="03"
        etiqueta="La consulta"
        titulo={
          <>
            Consulta para retiro de biopolímeros en <em>Barinas</em>
          </>
        }
        fondo="arena"
      >
        <p>
          Durante la consulta se realiza una evaluación clínica completa,
          revisión de estudios previos y se explica de manera clara el alcance
          del procedimiento, riesgos y expectativas reales.
        </p>
      </Bloque>

      <Bloque
        numero="04"
        etiqueta="Seguridad"
        titulo={
          <>
            Enfoque médico y <em>seguridad</em>
          </>
        }
      >
        <p>
          El Dr. César Rosales prioriza la seguridad del paciente, el manejo
          responsable de cada caso y el acompañamiento médico antes, durante y
          después de la cirugía.
        </p>
      </Bloque>

      <Relacionados numero="05" links={relacionados} />

      <CtaWhatsapp
        titulo={
          <>
            Coordina tu evaluación <em>especializada.</em>
          </>
        }
        texto="Para conocer la disponibilidad de consultas para retiro de biopolímeros en Barinas, se recomienda contactar directamente por WhatsApp y coordinar una evaluación médica especializada."
        whatsappHref={whatsappHref}
        contentName={contentName}
      />
    </main>
  )
}
