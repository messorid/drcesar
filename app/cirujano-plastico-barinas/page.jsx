import FbViewContent from "../components/FbViewContent"
import {
  Bloque,
  CtaWhatsapp,
  ListaEditorial,
  ProcedimientoHero,
  Relacionados,
} from "../components/procedimiento/Procedimiento"
import { waLink } from "../content/site"

export const metadata = {
  title: "Cirujano Plastico en Barinas | Dr Cesar Rosales",
  description:
    "Dr Cesar Rosales, cirujano plastico en Barinas. Especialista en cirugia plastica estetica y reconstructiva con enfoque medico y seguro.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/cirujano-plastico-barinas",
  },
  openGraph: {
    title: "Cirujano Plastico en Barinas | Dr Cesar Rosales",
    description:
      "Atencion especializada en cirugia plastica en Barinas. Evaluacion medica personalizada.",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Cirujano Plastico en Barinas Dr Cesar Rosales",
      },
    ],
  },
}

const contentName = "Consulta General"
const whatsappHref = waLink(
  "Hola Dr. César Rosales, deseo agendar una consulta de cirugía plástica en Barinas"
)

const relacionados = [
  { href: "/retiro-biopolimeros-barinas", label: "Retiro de biopolímeros en Barinas" },
  { href: "/bbl-barinas", label: "BBL en Barinas" },
  { href: "/lipo-hd-barinas", label: "Lipo HD en Barinas" },
  { href: "/cirugia-mamaria-barinas", label: "Cirugía mamaria en Barinas" },
  { href: "/como-agendar-consulta-barinas", label: "Cómo agendar una consulta en Barinas" },
  { href: "/ubicaciones/barinas", label: "Consulta en Barinas" },
]

export default function CirujanoPlasticoBarinasPage() {
  return (
    <main className="w-full bg-crema text-tinta">
      <FbViewContent contentName={contentName} />

      <ProcedimientoHero
        etiqueta="Cirugía plástica · Barinas"
        titulo={
          <>
            Cirujano Plástico en <em>Barinas</em>
          </>
        }
        intro="El Dr. César Rosales ofrece atención especializada en cirugía plástica en Barinas, brindando una evaluación médica personalizada para cada paciente. La consulta permite analizar de forma individual cada caso y determinar el tratamiento más adecuado según criterios médicos."
        whatsappHref={whatsappHref}
        contentName={contentName}
        imagen={{
          src: "/images/dr-cesar-rosales.JPG",
          alt: "Dr. César Rosales, cirujano plástico en Barinas",
          className: "object-[50%_20%]",
        }}
      />

      <Bloque
        id="informacion"
        etiqueta="Enfoque"
        titulo={
          <>
            Un enfoque <em>responsable</em>
          </>
        }
        fondo="arena"
      >
        <p>
          La cirugía plástica requiere un enfoque responsable, basado en la
          seguridad del paciente, la experiencia profesional y una adecuada
          planificación quirúrgica.
        </p>
      </Bloque>

      <Bloque
        etiqueta="Procedimientos"
        titulo={
          <>
            Procedimientos de cirugía plástica en <em>Barinas</em>
          </>
        }
      >
        <ListaEditorial
          items={[
            "Retiro de biopolímeros y cirugía reconstructiva",
            "BBL",
            "Lipo HD",
            "Cirugía mamaria",
          ]}
        />
      </Bloque>

      <Bloque
        etiqueta="La consulta"
        titulo={
          <>
            Consulta con cirujano plástico en <em>Barinas</em>
          </>
        }
        fondo="arena"
      >
        <p>
          La consulta es el primer paso para evaluar si un paciente es
          candidato a un procedimiento de cirugía plástica. Durante la
          evaluación se revisan antecedentes médicos, expectativas y se explica
          el proceso quirúrgico de manera clara.
        </p>
      </Bloque>

      <Bloque
        etiqueta="Seguridad"
        titulo={
          <>
            Enfoque médico y seguridad del <em>paciente</em>
          </>
        }
      >
        <p>
          El Dr. César Rosales trabaja bajo principios de ética médica,
          confidencialidad y seguridad, priorizando siempre la salud del
          paciente por encima de cualquier expectativa estética.
        </p>
      </Bloque>

      <Relacionados links={relacionados} />

      <CtaWhatsapp
        titulo={
          <>
            Coordina tu consulta en <em>Barinas.</em>
          </>
        }
        texto="Para conocer la disponibilidad de consultas en Barinas, se recomienda contactar directamente por WhatsApp y coordinar una evaluación médica."
        whatsappHref={whatsappHref}
        contentName={contentName}
      />
    </main>
  )
}
