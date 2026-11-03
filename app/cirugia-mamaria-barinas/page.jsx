import FbViewContent from "../components/FbViewContent"
import {
  Bloque,
  CtaWhatsapp,
  ListaEditorial,
  ProcedimientoHero,
  Relacionados,
} from "../components/procedimiento/Procedimiento"
import { procedimientos, waLink } from "../content/site"

export const metadata = {
  title: "Cirugia Mamaria en Barinas | Dr Cesar Rosales Cirujano Plastico",
  description:
    "Cirugia mamaria en Barinas con evaluacion medica personalizada. El Dr Cesar Rosales planifica cada procedimiento mamario con enfoque en seguridad y resultados naturales.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/cirugia-mamaria-barinas",
  },
  openGraph: {
    title: "Cirugia Mamaria en Barinas | Dr Cesar Rosales",
    description:
      "Cirugia mamaria en Barinas con criterio medico y evaluacion individual.",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Cirugia Mamaria en Barinas Dr Cesar Rosales",
      },
    ],
  },
}

const contentName = "Cirugia Mamaria"
const whatsappHref = waLink(
  "Hola Dr. César Rosales, deseo información sobre cirugía mamaria en Barinas"
)

const relacionados = [
  { href: "/cirujano-plastico-barinas", label: "Cirujano plástico en Barinas" },
  { href: "/lipo-hd-barinas", label: "Lipo HD en Barinas" },
  { href: "/bbl-barinas", label: "BBL en Barinas" },
  {
    href: "/como-agendar-consulta-barinas",
    label: "Cómo agendar una consulta en Barinas",
  },
  { href: "/contacto", label: "Página de contacto" },
]

export default function CirugiaMamariaBarinasPage() {
  const { foto, fotoAlt } = procedimientos.find((p) => p.id === "mamaria")

  return (
    <main className="w-full bg-crema text-tinta">
      <FbViewContent contentName={contentName} />

      <ProcedimientoHero
        etiqueta="Cirugía mamaria · Barinas"
        titulo={
          <>
            Cirugía Mamaria en <em>Barinas</em>
          </>
        }
        intro="Procedimientos mamarios planificados según tu anatomía, tus proporciones y lo que buscas. En Barinas, el Dr. César Rosales los realiza con un enfoque centrado en la seguridad y en resultados que se vean naturales."
        whatsappHref={whatsappHref}
        contentName={contentName}
        imagen={{ src: foto, alt: fotoAlt }}
      />

      <Bloque
        id="informacion"
        etiqueta="Qué es"
        titulo={
          <>
            Qué incluye la cirugía <em>mamaria</em>
          </>
        }
        fondo="arena"
      >
        <p>
          La cirugía mamaria agrupa distintos procedimientos que buscan
          armonizar el volumen, la forma y la posición de las mamas con el
          resto del cuerpo. No existe una sola técnica para todos los casos.
        </p>
        <ListaEditorial
          items={[
            "Aumento mamario",
            "Levantamiento mamario (mastopexia)",
            "Reducción mamaria",
          ]}
        />
        <p>
          Cuál de ellos aplica, o si conviene combinarlos, se define en una
          evaluación médica individual.
        </p>
      </Bloque>

      <Bloque
        etiqueta="Criterio"
        titulo={
          <>
            Proporción antes que <em>volumen</em>
          </>
        }
      >
        <p>
          Un resultado natural depende de respetar tu anatomía: el ancho del
          tórax, la calidad de la piel y la proporción con tu figura. Por eso
          la planificación se hace caso por caso, conversando sobre lo que
          deseas y lo que es posible de forma segura.
        </p>
      </Bloque>

      <Bloque
        etiqueta="La consulta"
        titulo={
          <>
            Consulta para cirugía mamaria en <em>Barinas</em>
          </>
        }
        fondo="arena"
      >
        <p>
          Durante la consulta se revisa tu historia médica, se evalúa la
          anatomía mamaria y se conversa sobre tus expectativas. Se explican
          las opciones, sus alcances, los riesgos y el proceso de recuperación
          de manera clara.
        </p>
        <p>
          Según cada caso, se pueden solicitar estudios previos antes de
          indicar el procedimiento.
        </p>
      </Bloque>

      <Bloque
        etiqueta="Seguridad"
        titulo={
          <>
            Seguridad y <em>acompañamiento</em>
          </>
        }
      >
        <p>
          El Dr. César Rosales prioriza la salud del paciente por encima de
          cualquier expectativa estética, con acompañamiento médico antes,
          durante y después de la cirugía.
        </p>
      </Bloque>

      <Relacionados links={relacionados} />

      <CtaWhatsapp
        titulo={
          <>
            Coordina tu evaluación para cirugía mamaria en <em>Barinas.</em>
          </>
        }
        texto="Escríbenos por WhatsApp para conocer la disponibilidad de consultas en Barinas y agendar tu evaluación personalizada."
        whatsappHref={whatsappHref}
        contentName={contentName}
      />
    </main>
  )
}
