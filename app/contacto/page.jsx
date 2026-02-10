import ContactClient from "./ContactClient"

export const metadata = {
  title: "Contacto | Dr Cesar Rosales Cirujano Plástico",
  description:
    "Contacta al Dr Cesar Rosales, cirujano plástico en Barinas y Caracas. Agenda tu consulta y aclara tus dudas directamente por WhatsApp.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/contacto",
  },
  openGraph: {
    title: "Cirujano Plastico en Barinas |Contacto Dr Cesar Rosales",
    description:
      "Agenda tu consulta con el Dr Cesar Rosales. Atención médica especializada en Barinas y Caracas.",
    url: "https://www.drcesarrosales.com/contacto",
    images: [
      {
        url: "/og-image.JPG",
        width: 1200,
        height: 630,
        alt: "Contacto Dr Cesar Rosales",
      },
    ],
  },
}

export default function ContactPage() {
  return <ContactClient />
}
