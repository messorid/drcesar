export default function MedicalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": "https://www.drcesarrosales.com/#physician",
        "name": "Dr Cesar Rosales",
        "description":
          "Cirujano plástico especializado en cirugía estética y reconstructiva, con atención en Barinas y Caracas.",
        "medicalSpecialty": "PlasticSurgery",
        "url": "https://www.drcesarrosales.com",
        "sameAs": [],
        "areaServed": [
          {
            "@type": "City",
            "name": "Barinas",
            "addressCountry": "VE",
          },
          {
            "@type": "City",
            "name": "Caracas",
            "addressCountry": "VE",
          },
        ],
        "affiliation": {
          "@type": "MedicalBusiness",
          "@id": "https://www.drcesarrosales.com/#medicalbusiness",
        },
      },
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.drcesarrosales.com/#medicalbusiness",
        "name": "Dr Cesar Rosales Cirujano Plastico",
        "description":
          "Consulta de cirugía plástica con enfoque médico, estético y reconstructivo. Atención previa cita.",
        "url": "https://www.drcesarrosales.com",
        "logo": "https://www.drcesarrosales.com/images/og.JPG",
        "image": "https://www.drcesarrosales.com/images/og.JPG",
        "areaServed": [
          {
            "@type": "City",
            "name": "Barinas",
            "addressCountry": "VE",
          },
          {
            "@type": "City",
            "name": "Caracas",
            "addressCountry": "VE",
          },
        ],
        "medicalSpecialty": "PlasticSurgery",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
