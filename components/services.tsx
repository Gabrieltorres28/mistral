"use client"

import { useState } from "react"
import { Reveal } from "@/components/reveal"
import { ServiceFlipCard } from "@/components/service-flip-card"
import { serviceGroups } from "@/components/site-content"

const iconKeys = ["drill", "wrench", "paintbrush", "settings"] as const

export function Services() {
  const [activeMobileCard, setActiveMobileCard] = useState<number | null>(null)

  return (
    <section id="servicios" className="relative py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,249,246,0.42),rgba(245,248,244,0.18))]" />
      <div className="section-shell relative">
        <Reveal className="mx-auto max-w-3xl text-center" y={18}>
          <p className="section-kicker">Servicios</p>
          <h2 className="section-title mt-3">Servicios principales</h2>
          <p className="section-copy mt-4">
            Soluciones integrales presentadas en bloques claros para facilitar la lectura y mostrar con precisión el alcance operativo de la empresa.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-14 lg:gap-6">
          {serviceGroups.map((service, index) => (
            <Reveal key={service.title} delay={index * 80} y={22}>
              <ServiceFlipCard
                index={index}
                title={service.title}
                description={service.description}
                detailTitle={service.detailTitle}
                detailItems={service.detailItems}
                iconKey={iconKeys[index]}
                isFlipped={activeMobileCard === index}
                onFlip={() => setActiveMobileCard(index)}
                onReset={() => setActiveMobileCard(null)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
