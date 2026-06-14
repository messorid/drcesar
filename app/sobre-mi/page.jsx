import SobreMiClient from "./SobreMiClient"

export const metadata = {
  title: "Sobre mí | Dr César Rosales Cirujano Plástico",
  description:
    "Conoce al Dr César Rosales, cirujano plástico especializado en cirugía estética y reconstructiva. Enfoque en seguridad, criterio médico y resultados naturales en Barinas y Caracas.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/sobre-mi",
  },
  openGraph: {
    title: "Sobre mí | Dr César Rosales Cirujano Plástico",
    description:
      "Cirujano plástico con enfoque médico, estético y seguro. Atención en Barinas y Caracas.",
    url: "https://www.drcesarrosales.com/sobre-mi",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Dr César Rosales Cirujano Plástico",
      },
    ],
  },
}

export default function SobreMiPage() {
  return <SobreMiClient />
}
