'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import PageLayout from '@/components/PageLayout'
import PageHero from '@/components/PageHero'
import SectionContainer from '@/components/SectionContainer'
import CTASection from '@/components/CTASection'

export default function CreditPilotPage() {
  const { t } = useLanguage()

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        tag={t.creditpilot.hero.tag}
        title={
          <div className="text-primary max-w-3xl text-balance text-4xl leading-[2.25rem] tracking-tight md:text-[5rem] md:leading-[5rem]">
            {t.creditpilot.hero.title}
          </div>
        }
        description={t.creditpilot.hero.subtitle}
        videoSrc="/videos/creditpilot-hero-bg.mp4"
        buttons={[
          {
            text: t.creditpilot.hero.cta1,
            href: 'https://portal.infinitegz.com/creditpilot',
            variant: 'primary',
            icon: <span className="size-2 animate-pulse rounded-full bg-accent"></span>,
          },
        ]}
        titleClassName=""
      />

      {/* Capabilities Section */}
      <SectionContainer containerClassName="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl space-y-16 sm:space-y-32">
        <div className="space-y-12">
          <div className="mono-tag flex items-center gap-2 text-sm text-secondary">
            <span>[</span> <span>{t.creditpilot.capabilities.tag}</span> <span>]</span>
          </div>
          <h2 className="text-balance text-3xl tracking-tight md:text-4xl lg:text-5xl text-primary max-w-2xl">
            {t.creditpilot.capabilities.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-border">
          {t.creditpilot.capabilities.features.map((feature, index) => (
            <div key={index} className="group relative flex h-full flex-col space-y-4 p-8 bg-background from-secondary/10 via-transparent to-transparent hover:bg-gradient-to-b">
              <div className="border-primary/10 pointer-events-none absolute inset-0 isolate z-10 border opacity-0 group-hover:opacity-100">
                <div className="bg-primary absolute -left-1 -top-1 z-10 size-2 -translate-x-px -translate-y-px"></div>
                <div className="bg-primary absolute -right-1 -top-1 z-10 size-2 -translate-y-px translate-x-px"></div>
                <div className="bg-primary absolute -bottom-1 -left-1 z-10 size-2 -translate-x-px translate-y-px"></div>
                <div className="bg-primary absolute -bottom-1 -right-1 z-10 size-2 translate-x-px translate-y-px"></div>
              </div>

              <div className="text-primary mb-10 size-10 sm:mb-16 relative z-20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </div>

              <div className="group max-w-sm grow relative z-20">
                <h3 className="text-xl group-hover:text-primary text-primary">{feature.title}</h3>
                <p className="text-secondary mt-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* How It Works */}
      <SectionContainer containerClassName="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl space-y-16">
        <div className="space-y-8 text-center">
          <div className="mono-tag inline-flex items-center gap-2 text-sm text-secondary">
            <span>[</span> <span>{t.creditpilot.howItWorks.tag}</span> <span>]</span>
          </div>
          <h2 className="text-balance text-3xl tracking-tight md:text-5xl text-primary mx-auto max-w-3xl">
            {t.creditpilot.howItWorks.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.creditpilot.howItWorks.steps.map((step, index) => (
            <div key={index} className="p-8 border border-border rounded-lg space-y-4">
              <div className="mono-tag text-sm text-secondary">{step.number}</div>
              <h3 className="text-2xl text-primary">{step.title}</h3>
              <p className="text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <CTASection
        title={t.creditpilot.cta.title}
        description={t.creditpilot.cta.description}
        primaryButton={{
          text: t.creditpilot.cta.buttonText,
          href: 'https://portal.infinitegz.com/creditpilot',
        }}
      />
    </PageLayout>
  )
}
