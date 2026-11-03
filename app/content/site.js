/* =================================================================
   Contenido del sitio — Dr. César Rosales
   -----------------------------------------------------------------
   Todo el texto editable vive aquí. Las secciones marcadas con
   [COMPLETAR] se ocultan solas mientras sus listas estén vacías:
   basta con llenar los datos reales para que aparezcan en el sitio.
   ================================================================= */

export const SITE_URL = "https://www.drcesarrosales.com"
export const WHATSAPP_NUMBER = "584245846191"
export const INSTAGRAM_URL = "https://www.instagram.com/drcesarrosales/"
export const INSTAGRAM_HANDLE = "@drcesarrosales"

export const MENSAJE_GENERAL =
  "Hola Dr. César Rosales, deseo información para agendar una consulta"

export function waLink(mensaje = MENSAJE_GENERAL) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`
}

/* ---------------------------------------------------------------
   Procedimientos (el orden es el del home)
   `foto` es la foto profesional del procedimiento.
   --------------------------------------------------------------- */
export const procedimientos = [
  {
    id: "biopolimeros",
    nombre: "Retiro de Biopolímeros",
    detalle: "Reconstrucción y seguridad",
    descripcion:
      "Extracción del material y reconstrucción del tejido afectado, con una planificación individual y prudente.",
    href: "/retiro-biopolimeros-caracas",
    foto: "/images/servicios/Biopolimeros1.jpeg",
    fotoAlt: "Retiro de biopolímeros, procedimiento del Dr. César Rosales",
    mensaje:
      "Hola Dr. César Rosales, deseo información sobre el retiro de biopolímeros",
    contentName: "Retiro de Biopolimeros",
  },
  {
    id: "bbl",
    nombre: "BBL",
    nombreLargo: "Brazilian Butt Lift",
    detalle: "Proyección y contorno glúteo",
    descripcion:
      "Liposucción y transferencia de grasa para un contorno equilibrado y acorde a tu anatomía.",
    href: "/bbl-barinas",
    foto: "/images/servicios/bbl.jpeg",
    fotoAlt: "BBL, procedimiento de contorno glúteo del Dr. César Rosales",
    mensaje: "Hola Dr. César Rosales, deseo información sobre el BBL",
    contentName: "BBL",
  },
  {
    id: "lipo-hd",
    nombre: "Lipo HD",
    detalle: "Definición y escultura corporal",
    descripcion:
      "Liposucción de alta definición que resalta el contorno natural del cuerpo, sin exagerarlo.",
    href: "/lipo-hd-barinas",
    foto: "/images/servicios/lipo-hd.PNG",
    fotoAlt: "Lipo HD, definición corporal del Dr. César Rosales",
    mensaje: "Hola Dr. César Rosales, deseo información sobre la Lipo HD",
    contentName: "Lipo HD",
  },
  {
    id: "mamaria",
    nombre: "Cirugía Mamaria",
    detalle: "Armonía y proporción natural",
    descripcion:
      "Procedimientos mamarios planificados según tu anatomía, tus proporciones y lo que buscas.",
    href: "/cirugia-mamaria-barinas",
    foto: "/images/servicios/cirugia-mamaria.PNG",
    fotoAlt: "Cirugía mamaria del Dr. César Rosales",
    mensaje:
      "Hola Dr. César Rosales, deseo información sobre cirugía mamaria",
    contentName: "Cirugia Mamaria",
  },
]

/* ---------------------------------------------------------------
   Manifiesto: las palabras entre *asteriscos* van en dorado
   --------------------------------------------------------------- */
export const manifiesto =
  "No se trata de cambiar quién eres, sino de que te veas como te sientes. Con *seguridad*, con criterio y con resultados que se ven *naturales*."

export const pilares = [
  {
    titulo: "Criterio Médico",
    texto:
      "Cada procedimiento parte de una evaluación clínica rigurosa y personalizada.",
  },
  {
    titulo: "Resultados Naturales",
    texto:
      "Armonía y proporción, respetando la anatomía y la esencia de cada paciente.",
  },
  {
    titulo: "Seguridad Integral",
    texto:
      "Acompañamiento profesional antes, durante y después de la cirugía.",
  },
]

/* ---------------------------------------------------------------
   Anatomía de un procedimiento (tono educativo)
   --------------------------------------------------------------- */
export const anatomia = [
  {
    zona: "abdomen",
    titulo: "Abdomen",
    procedimiento: "Lipo HD",
    texto:
      "Se trabaja la grasa que oculta la pared abdominal para marcar un contorno acorde a tu musculatura, no uno genérico.",
  },
  {
    zona: "flancos",
    titulo: "Cintura y flancos",
    procedimiento: "Lipo HD · BBL",
    texto:
      "Afinar la cintura mejora la proporción con la cadera. Es la base de casi todo contorno corporal.",
  },
  {
    zona: "espalda",
    titulo: "Espalda",
    procedimiento: "Lipo HD",
    texto:
      "La espalda alta y media completan la silueta. Se evalúa en conjunto para que el resultado se vea armónico.",
  },
  {
    zona: "lumbar",
    titulo: "Zona lumbar",
    procedimiento: "BBL",
    texto:
      "Definir la curva lumbar realza el glúteo de forma natural, sin depender sólo del volumen.",
  },
  {
    zona: "gluteos",
    titulo: "Glúteos",
    procedimiento: "BBL",
    texto:
      "La grasa extraída se procesa y se transfiere para dar forma y proyección, dentro de márgenes seguros.",
  },
]

/* ---------------------------------------------------------------
   Tu recuperación, paso a paso
   [CONFIRMAR CON EL DOCTOR LOS TIEMPOS REALES] — los textos evitan
   plazos concretos hasta que el doctor los valide.
   --------------------------------------------------------------- */
export const recuperacion = [
  {
    etapa: "Consulta y evaluación",
    texto:
      "Conversamos sobre lo que deseas, revisamos tu historia médica y evaluamos si el procedimiento es adecuado para ti.",
  },
  {
    etapa: "Exámenes preoperatorios",
    texto:
      "Se solicitan los estudios y la valoración necesarios. Tu salud define la fecha de la cirugía.",
  },
  {
    etapa: "Día de la cirugía",
    texto:
      "Llegas con todo coordinado. Te acompañamos antes, durante y después del procedimiento.",
  },
  {
    etapa: "Primera semana",
    texto:
      "Reposo relativo, controles e indicaciones claras. Tendrás un canal directo para cualquier duda.",
  },
  {
    etapa: "Primer mes",
    texto:
      "La inflamación disminuye de forma progresiva y retomas tus actividades según tu evolución.",
  },
  {
    etapa: "Resultado final",
    texto:
      "El contorno se asienta con el tiempo. Cada cuerpo tiene su ritmo y lo seguimos en cada control.",
  },
]

/* ---------------------------------------------------------------
   Antes y después  [COMPLETAR]
   Sólo fotos con consentimiento firmado, sin rostros ni tatuajes.
   Un caso sólo se publica si `consentimiento: true`.
   Ejemplo:
   {
     procedimiento: "bbl",            // id de `procedimientos`
     antes: "/images/resultados/bbl-01-antes.jpg",
     despues: "/images/resultados/bbl-01-despues.jpg",
     alt: "BBL, vista posterior",
     consentimiento: true,
   }
   --------------------------------------------------------------- */
export const antesDespues = []

export const casosPublicables = antesDespues.filter(
  (c) => c.consentimiento === true
)

/* ---------------------------------------------------------------
   Conoce al especialista
   --------------------------------------------------------------- */
export const especialista = {
  foto: "/images/dr-cesar-rosales.JPG",
  fotoAlt: "Dr. César Rosales, cirujano plástico, con bata médica",
  bio: [
    "Cirujano plástico con enfoque en cirugía estética y reconstructiva. Su práctica se fundamenta en la seguridad del paciente, la evaluación personalizada y resultados armónicos acordes a cada caso.",
    "Atiende pacientes en Barinas, Caracas y San Cristóbal, con una atención profesional respaldada por experiencia clínica y criterio médico.",
  ],
  // [COMPLETAR] — se muestran sólo si tienen datos.
  // Ejemplo: { etiqueta: "Colegiatura", valor: "MPPS 00000 · CM 0000" }
  credenciales: [],
  // [COMPLETAR] — número, p. ej. 10. Si es null no se muestra.
  aniosExperiencia: null,
}

/* ---------------------------------------------------------------
   Testimonios  [COMPLETAR]
   Sólo testimonios reales con permiso del paciente.
   Ejemplo:
   { texto: "…", autor: "María G.", detalle: "Lipo HD · Barinas",
     fuente: "Google", permiso: true }
   --------------------------------------------------------------- */
export const testimonios = []

export const testimoniosPublicables = testimonios.filter(
  (t) => t.permiso === true
)

/* ---------------------------------------------------------------
   ¿Dónde te atiendo?
   Dirección, días y foto: [COMPLETAR]. Si están vacíos no se muestran.
   --------------------------------------------------------------- */
export const ubicaciones = [
  {
    id: "barinas",
    ciudad: "Barinas",
    descripcion:
      "Consultas y procedimientos con enfoque médico y reconstructivo.",
    direccion: "",
    dias: "",
    foto: null,
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.881949610164!2d-70.25898162600816!3d8.607331395449043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7b579d4df30779%3A0x45a695ebcf3a8c88!2sMEDISPA!5e0!3m2!1ses!2sus!4v1766981098213!5m2!1ses!2sus",
    href: "/ubicaciones/barinas",
  },
  {
    id: "caracas",
    ciudad: "Caracas",
    descripcion:
      "Atención médica especializada en un entorno seguro y profesional.",
    direccion: "",
    dias: "",
    foto: null,
    mapa: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d245.19411521250538!2d-66.86010009219734!3d10.492321951879205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI5JzMyLjEiTiA2NsKwNTEnMzYuOCJX!5e0!3m2!1ses-419!2sus!4v1766981241043!5m2!1ses-419!2sus",
    href: "/ubicaciones/caracas",
  },
  {
    id: "san-cristobal",
    ciudad: "San Cristóbal",
    descripcion:
      "Consultas de evaluación en el Táchira. Escríbenos para conocer las próximas fechas disponibles.",
    direccion: "",
    dias: "",
    foto: null,
    mapa: null,
    href: "/ubicaciones/san-cristobal",
  },
]

/* ---------------------------------------------------------------
   Agenda en 3 pasos
   --------------------------------------------------------------- */
export const pasosAgenda = [
  {
    titulo: "Escríbenos por WhatsApp",
    texto:
      "Te atendemos de forma personalizada y sin compromiso.",
  },
  {
    titulo: "Indica tu procedimiento",
    texto:
      "Cuéntanos qué te interesa y resolvemos tus dudas con criterio médico.",
  },
  {
    titulo: "Coordinamos tu cita",
    texto:
      "Confirmamos ciudad y disponibilidad para tu evaluación presencial.",
  },
]

/* ---------------------------------------------------------------
   Preguntas frecuentes
   --------------------------------------------------------------- */
export const faqs = [
  {
    pregunta: "¿Cómo puedo agendar una consulta con el Dr. César Rosales?",
    respuesta:
      "Las consultas se agendan directamente por WhatsApp. Solo debes escribirnos, indicar el procedimiento de tu interés y consultar la disponibilidad según la ciudad.",
  },
  {
    pregunta: "¿En qué ciudades atiende el Dr. César Rosales?",
    respuesta:
      "El Dr. César Rosales atiende en Barinas, Caracas y San Cristóbal. Nuestro equipo te indicará fechas y disponibilidad para cada ubicación.",
  },
  {
    pregunta: "¿Qué procedimientos realiza el Dr. César Rosales?",
    respuesta:
      "Realiza procedimientos de cirugía plástica estética y reconstructiva, incluyendo retiro de biopolímeros, BBL, Lipo HD y cirugía mamaria.",
  },
  {
    pregunta: "¿La consulta es presencial o virtual?",
    respuesta:
      "La consulta es principalmente presencial para una evaluación médica adecuada. En algunos casos, se puede realizar una orientación inicial previa por WhatsApp.",
  },
  {
    pregunta: "¿Qué debo llevar a la consulta?",
    respuesta:
      "Se recomienda llevar estudios médicos previos, exámenes recientes y toda la información relacionada con procedimientos anteriores, si aplica.",
  },
  {
    pregunta: "¿Los procedimientos son personalizados?",
    respuesta:
      "Sí. Cada paciente recibe una evaluación individual y un plan quirúrgico adaptado a su caso, siempre priorizando la seguridad y la salud.",
  },
]
