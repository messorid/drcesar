import StickyWhatsappCTA from "./mounjaro/components/StickyWhatsappCTA"
import PageLoader from "./components/PageLoader"
import ProfileHeaderHero from "./components/ProfileHeaderHero"

export default function HomePage() {
  return (
    <>
      <PageLoader />
      <ProfileHeaderHero />
            <StickyWhatsappCTA />

    </>
  )
}
