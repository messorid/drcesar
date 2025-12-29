import ProfileHeader from "./components/ProfileHeader"
import LinkButton from "./components/LinkButton"
import Footer from "./components/Footer"
import DarkModeToggle from "./components/DarkModeToggle"

export default function HomePage() {
  const whatsappMessage =
    "Hola Dr Cesar Rosales, deseo informacion para agendar una consulta."

  return (
    <>
    <DarkModeToggle />
    
    <main className="min-h-screen flex items-start justify-center pt-16">
      <div className="w-full max-w-md px-6 space-y-10">
        {/* Header */}
        <ProfileHeader />

        {/* Botones */}
        <section className="space-y-4 fade-in">
          {/* WhatsApp */}
          <LinkButton
            href={`https://wa.me/584245846191?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            label="WhatsApp para consulta"
            variant="whatsapp"
            />

          {/* Llamada */}
          <LinkButton
            href="tel:+584245846191"
            label="Llamada directa"
            variant="call"
            />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
            </>
  )
}
