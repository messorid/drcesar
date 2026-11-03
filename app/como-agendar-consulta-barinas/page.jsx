import {
  Bloque,
  CtaWhatsapp,
  ListaEditorial,
  ProcedimientoHero,
  Relacionados,
} from "../components/procedimiento/Procedimiento"
import { waLink } from "../content/site"

export const metadata = {
  title:
    "Como agendar consulta con cirujano plastico en Barinas | Dr Cesar Rosales",
  description:
    "Guia clara para agendar una consulta con cirujano plastico en Barinas. Proceso de contacto, evaluacion medica y coordinacion de citas.",
  alternates: {
    canonical:
      "https://www.drcesarrosales.com/como-agendar-consulta-barinas",
  },
  openGraph: {
    title:
      "Como agendar consulta con cirujano plastico en Barinas",
    description:
      "Conoce el proceso para agendar una consulta de cirugia plastica en Barinas.",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Agendar consulta cirujano plastico en Barinas",
      },
    ],
  },
}

const contentName = "Consulta General"
const whatsappHref = waLink(
  "Hola Dr. César Rosales, deseo agendar una consulta en Barinas"
)

const relacionados = [
  { href: "/cirujano-plastico-barinas", label: "Cirujano plástico en Barinas" },
  { href: "/ubicaciones/barinas", label: "Consulta en Barinas" },
  { href: "/bbl-barinas", label: "BBL en Barinas" },
  { href: "/lipo-hd-barinas", label: "Lipo HD en Barinas" },
  { href: "/contacto", label: "Página de contacto" },
]

export default function ComoAgendarConsultaBarinasPage() {
  return (
    <main className="w-full bg-crema text-tinta">
      <ProcedimientoHero
        etiqueta="Consulta · Barinas"
        titulo={
          <>
            Cómo agendar consulta con cirujano plástico en <em>Barinas</em>
          </>
        }
        intro="Agendar una consulta con un cirujano plástico en Barinas es el primer paso para recibir una evaluación médica adecuada. La consulta permite aclarar dudas, revisar antecedentes y determinar el procedimiento más indicado según cada caso."
        whatsappHref={whatsappHref}
        contentName={contentName}
      />

      <Bloque
        id="informacion"
        etiqueta="Paso 1"
        titulo={
          <>
            Paso 1. Contacto por <em>WhatsApp</em>
          </>
        }
        fondo="arena"
      >
        <p>
          El proceso inicia escribiendo directamente por WhatsApp. El paciente
          indica el procedimiento de interés y consulta la disponibilidad de
          atención en Barinas.
        </p>
      </Bloque>

      <Bloque
        etiqueta="Paso 2"
        titulo={
          <>
            Paso 2. Orientación <em>inicial</em>
          </>
        }
      >
        <p>
          Antes de la consulta presencial se brinda una orientación inicial
          para resolver dudas generales y explicar el proceso de evaluación
          médica.
        </p>
      </Bloque>

      <Bloque
        etiqueta="Paso 3"
        titulo={
          <>
            Paso 3. Consulta <em>presencial</em>
          </>
        }
        fondo="arena"
      >
        <p>
          Durante la consulta presencial se realiza una evaluación clínica
          completa, se revisan antecedentes médicos y se establecen
          expectativas reales sobre el procedimiento.
        </p>
      </Bloque>

      <Bloque
        etiqueta="Procedimientos"
        titulo={
          <>
            Procedimientos evaluados durante la <em>consulta</em>
          </>
        }
      >
        <ListaEditorial
          items={["Retiro de biopolímeros", "BBL", "Lipo HD", "Cirugía mamaria"]}
        />
      </Bloque>

      <Relacionados links={relacionados} />

      <CtaWhatsapp
        titulo={
          <>
            Escríbenos y coordinamos tu <em>evaluación.</em>
          </>
        }
        texto="La disponibilidad de consultas en Barinas depende de la agenda médica. Para conocer fechas disponibles, se recomienda escribir por WhatsApp y coordinar la evaluación."
        whatsappHref={whatsappHref}
        contentName={contentName}
      />
    </main>
  )
}
