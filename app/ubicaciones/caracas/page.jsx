import UbicacionDetalle from "../UbicacionDetalle"

export const metadata = {
  title: "Cirujano Plastico en Caracas | Dr Cesar Rosales",
  description:
    "Dr Cesar Rosales, cirujano plastico en Caracas. Especialista en cirugia estetica y reconstructiva con enfoque medico y seguro.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/ubicaciones/caracas",
  },
  openGraph: {
    title: "Cirujano Plastico en Caracas | Dr Cesar Rosales",
    description:
      "Atencion en Caracas con evaluacion medica personalizada.",
    url: "https://www.drcesarrosales.com/ubicaciones/caracas",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Cirujano Plastico en Caracas Dr Cesar Rosales",
      },
    ],
  },
}

export default function CaracasPage() {
  return (
    <UbicacionDetalle
      ciudadId="caracas"
      titulo={
        <>
          Cirujano Plástico en <em>Caracas</em>
        </>
      }
      intro={[
        "El Dr. César Rosales brinda atención en Caracas para pacientes que buscan cirugía plástica con enfoque médico, estético y seguro.",
      ]}
      procedimientosTitulo={
        <>
          Procedimientos disponibles en <em>Caracas</em>
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
          titulo: "Consulta médica especializada",
          texto:
            "Cada consulta incluye evaluación clínica, orientación profesional y explicación detallada del procedimiento más adecuado.",
        },
      ]}
      nota="La disponibilidad de consultas en Caracas se coordina previamente por WhatsApp."
    />
  )
}
