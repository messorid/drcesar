import EspecialidadesIntro from "./components/EspecialidadesIntro"
import FAQ from "./components/FAQ"
import FinalCTA from "./components/FinalCTA"
import HeaderHero from "./components/HeaderHero"
import PageLoader from "./components/PageLoader"
import PasosConsulta from "./components/PasosConsulta"
import PerfilDoctor from "./components/PerfilDoctor"
import ProfileHeaderHero from "./components/ProfileHeaderHero"
import ServiciosCards from "./components/ServiciosCards"
import UbicacionesSection from "./components/UbicacionesSection"

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
        url: "/og-dr-cesar-rosales.jpg",
        width: 1200,
        height: 630,
        alt: "Dr Cesar Rosales Cirujano Plastico en Barinas",
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <PageLoader />
      <HeaderHero />
      <EspecialidadesIntro/>
      <ServiciosCards/>
      <PasosConsulta/>
      <UbicacionesSection/>
      <PerfilDoctor/>
      <FAQ/>
      <FinalCTA/>
    </>
  )
}
