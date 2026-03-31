import { PageLoader } from "@/components/page-loader"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WorkGallery } from "@/components/work-gallery"
import { Clients } from "@/components/clients"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <PageLoader />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WorkGallery />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
