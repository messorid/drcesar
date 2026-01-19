import MounjaroClient from "./MounjaroClient"
import StickyWhatsappCTA from "./components/StickyWhatsappCTA"

export const metadata = {
  title: "Mounjaro | Tratamiento medico con el Dr Cesar Rosales",
  description:
    "Informacion medica completa sobre Mounjaro. Indicaciones, funcionamiento, seguridad, efectos secundarios y preguntas frecuentes bajo supervision del Dr Cesar Rosales.",
}

export default function Page() {
  return (
    <>
      <MounjaroClient />
      <StickyWhatsappCTA />
    </>
  )
}
