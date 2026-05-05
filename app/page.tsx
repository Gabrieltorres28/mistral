import { PageLoader } from "@/components/page-loader"
import { Clients } from "@/components/clients"
import {
  CapabilityGrid,
  FinalCTA,
  HeroIndustrial,
  ProcessSection,
  ServicePillars,
  TrustBar,
} from "@/components/home-industrial"

export default function Home() {
  return (
    <>
      <PageLoader />
      <main>
        <HeroIndustrial />
        <TrustBar />
        <ServicePillars />
        <CapabilityGrid />
        <ProcessSection />
        <Clients />
        <FinalCTA />
      </main>
    </>
  )
}
