import UbicacionDetalle from "../UbicacionDetalle"

export const metadata = {
  title: "Cirujano Plastico en Barinas | Dr Cesar Rosales",
  description:
    "Dr Cesar Rosales, cirujano plastico en Barinas. Especialista en retiro de biopolimeros, BBL, Lipo HD y cirugia mamaria. Atencion medica profesional.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/ubicaciones/barinas",
  },
  openGraph: {
    title: "Cirujano Plastico en Barinas | Dr Cesar Rosales",
    description:
      "Atencion en Barinas con enfoque medico, seguro y personalizado.",
    url: "https://www.drcesarrosales.com/ubicaciones/barinas",
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

export default function BarinasPage() {
  return (
    <UbicacionDetalle
      ciudadId="barinas"
      titulo={
        <>
          Cirujano Plástico en <em>Barinas</em>
        </>
      }
      intro={[
        "El Dr. César Rosales ofrece atención especializada en cirugía plástica en Barinas, con enfoque médico, evaluación personalizada y altos estándares de seguridad.",
        "La consulta permite valorar cada caso de manera individual y definir las opciones de tratamiento más adecuadas según las necesidades del paciente.",
      ]}
      procedimientosTitulo={
        <>
          Procedimientos realizados en <em>Barinas</em>
        </>
      }
      procedimientosLista={[
        "Retiro de biopolímeros y reconstrucción",
        "BBL",
        "Lipo HD",
        "Cirugía mamaria",
      ]}
      secciones={[
        {
          titulo: "Consulta de cirugía plástica en Barinas",
          texto:
            "Las consultas se realizan previa coordinación por WhatsApp. Durante la evaluación se aclaran dudas, se revisan antecedentes médicos y se explica el procedimiento indicado para cada paciente.",
        },
        {
          titulo: "Atención profesional y segura",
          texto:
            "El Dr. César Rosales trabaja bajo principios de ética médica, confidencialidad y seguridad del paciente, brindando acompañamiento antes, durante y después del procedimiento.",
        },
      ]}
      nota="Para consultar disponibilidad en Barinas, comunícate directamente por WhatsApp."
    />
  )
}
