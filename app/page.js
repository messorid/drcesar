import Hero from "./components/home/Hero"
import Manifiesto from "./components/home/Manifiesto"
import Filosofia from "./components/home/Filosofia"
import Procedimientos from "./components/home/Procedimientos"
import Anatomia from "./components/home/Anatomia"
import Recuperacion from "./components/home/Recuperacion"
import AntesDespues from "./components/home/AntesDespues"
import Especialista from "./components/home/Especialista"
import Testimonios from "./components/home/Testimonios"
import Ubicaciones from "./components/home/Ubicaciones"
import Agenda from "./components/home/Agenda"
import Preguntas from "./components/home/Preguntas"
import { casosPublicables, testimoniosPublicables } from "./content/site"

export const metadata = {
  metadataBase: new URL("https://www.drcesarrosales.com"),
  title: "Cirujano Plástico en Barinas y Caracas | Dr Cesar Rosales",
  description:
    "Dr Cesar Rosales, cirujano plástico en Barinas y Caracas. Especialista en cirugía estética y reconstructiva. Agenda tu consulta con atención profesional y resultados naturales.",
  keywords: [
    "cirujano plastico en barinas",
    "cirujano plastico barinas",
    "cirujano plastico en caracas",
    "cirugia plastica barinas",
    "doctor cesar rosales",
    "aumento de senos barinas",
    "rinoplastia barinas",
    "liposuccion barinas",
  ],
  alternates: {
    canonical: "https://www.drcesarrosales.com",
  },
  openGraph: {
    title: "Cirujano Plástico en Barinas y Caracas | Dr Cesar Rosales",
    description:
      "Cirugía plástica con enfoque estético, seguro y profesional en Barinas y Caracas.",
    url: "https://www.drcesarrosales.com",
    siteName: "Dr Cesar Rosales",
    locale: "es_VE",
    type: "website",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Dr Cesar Rosales Cirujano Plastico en Caracas",
      },
    ],
  },
}

export default function HomePage() {
  // Las secciones sin datos reales se omiten
  const secciones = [
    Filosofia,
    Procedimientos,
    Anatomia,
    Recuperacion,
    casosPublicables.length > 0 && AntesDespues,
    Especialista,
    testimoniosPublicables.length > 0 && Testimonios,
    Ubicaciones,
    Agenda,
    Preguntas,
  ].filter(Boolean)

  return (
    <main>
      <Hero />
      <Manifiesto />
      {secciones.map((Seccion, i) => (
        <Seccion key={i} />
      ))}
    </main>
  )
}
