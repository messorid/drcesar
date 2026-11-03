import UbicacionDetalle from "../UbicacionDetalle"

export const metadata = {
  title: "Cirujano Plastico en San Cristobal | Dr Cesar Rosales",
  description:
    "Dr Cesar Rosales, cirujano plastico con consultas de evaluacion en San Cristobal. Retiro de biopolimeros, BBL, Lipo HD y cirugia mamaria con enfoque medico y seguro.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/ubicaciones/san-cristobal",
  },
  openGraph: {
    title: "Cirujano Plastico en San Cristobal | Dr Cesar Rosales",
    description:
      "Consultas de evaluacion en San Cristobal con enfoque medico y personalizado.",
    url: "https://www.drcesarrosales.com/ubicaciones/san-cristobal",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Cirujano Plastico en San Cristobal Dr Cesar Rosales",
      },
    ],
  },
}

export default function SanCristobalPage() {
  return (
    <UbicacionDetalle
      ciudadId="san-cristobal"
      titulo={
        <>
          Cirujano Plástico en <em>San Cristóbal</em>
        </>
      }
      intro={[
        "El Dr. César Rosales realiza consultas de evaluación en San Cristóbal para pacientes del Táchira que buscan cirugía plástica con enfoque médico, estético y seguro.",
        "Las fechas de consulta se coordinan con anticipación. Escríbenos por WhatsApp para conocer la próxima disponibilidad.",
      ]}
      procedimientosTitulo={
        <>
          Procedimientos que puedes <em>consultar</em>
        </>
      }
      procedimientosLista={[
        "Retiro de biopolímeros",
        "BBL",
        "Lipo HD",
        "Cirugía mamaria",
      ]}
      secciones={[
        {
          titulo: "Una evaluación individual",
          texto:
            "En la consulta se revisan tus antecedentes médicos, se aclaran tus dudas y se conversa sobre el procedimiento más adecuado para tu caso.",
        },
        {
          titulo: "Coordinación por WhatsApp",
          texto:
            "Te indicamos fecha, lugar y lo que debes llevar a la consulta. Si el procedimiento se realiza en otra ciudad, te orientamos en cada paso.",
        },
      ]}
      nota="Para conocer las próximas fechas de consulta en San Cristóbal, comunícate directamente por WhatsApp."
    />
  )
}
