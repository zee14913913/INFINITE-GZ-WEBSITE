'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import PageLayout from '@/components/PageLayout'
import PageHero from '@/components/PageHero'
import SectionContainer from '@/components/SectionContainer'
import CTASection from '@/components/CTASection'

export default function AdvisoryPage() {
  const { t } = useLanguage()

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        tag={t.advisory.hero.tag}
        title={t.advisory.hero.title}
        description={t.advisory.hero.description}
        buttons={[
          {
            text: t.common.bookConsultation,
            href: 'https://portal.infinitegz.com/advisory',
            variant: 'primary',
          },
          {
            text: t.common.whatsappUs,
            href: 'https://wa.me/60123456789',
            variant: 'secondary',
          },
        ]}
      />

      {/* 8 Services Section */}
      <SectionContainer containerClassName="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl space-y-16 sm:space-y-32">
        <div className="space-y-12">
          <div className="mono-tag flex items-center gap-2 text-sm text-secondary">
            <span>[</span> <span>{t.advisory.services.tag}</span> <span>]</span>
          </div>
          <h2 className="text-balance text-3xl tracking-tight md:text-5xl lg:text-6xl text-primary max-w-3xl">
            {t.advisory.services.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-border">
          {t.advisory.services.items.map((service, index) => (
            <div
              key={index}
              className="group relative flex h-full flex-col space-y-4 p-8 bg-background from-secondary/10 via-transparent to-transparent hover:bg-gradient-to-b transition-all"
            >
              <div className="border-primary/10 pointer-events-none absolute inset-0 isolate z-10 border opacity-0 group-hover:opacity-100">
                <div className="bg-primary absolute -left-1 -top-1 z-10 size-2 -translate-x-px -translate-y-px"></div>
                <div className="bg-primary absolute -right-1 -top-1 z-10 size-2 -translate-y-px translate-x-px"></div>
                <div className="bg-primary absolute -bottom-1 -left-1 z-10 size-2 -translate-x-px translate-y-px"></div>
                <div className="bg-primary absolute -bottom-1 -right-1 z-10 size-2 translate-x-px translate-y-px"></div>
              </div>

              <div className="mono-tag text-xs text-secondary relative z-20">
                {service.num}
              </div>

              <h3 className="text-2xl text-primary group-hover:text-primary/90 transition-colors relative z-20">
                {service.title}
              </h3>

              <p className="text-secondary text-sm leading-relaxed group-hover:text-primary/80 transition-colors relative z-20">
                {service.description}
              </p>
            </div>
          ))}
          {/* 填充空白位置 - 墨黑色背景 */}
          {t.advisory.services.items.length % 3 !== 0 && (
            <div className="bg-[rgb(10,10,10)]"></div>
          )}
        </div>
      </SectionContainer>

      {/* Key Benefits */}
      <SectionContainer containerClassName="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl space-y-16">
        <div className="space-y-8 text-center">
          <div className="mono-tag inline-flex items-center gap-2 text-sm text-secondary">
            <span>[</span> <span>{t.advisory.benefits.tag}</span> <span>]</span>
          </div>
          <h2 className="text-balance text-3xl tracking-tight md:text-5xl text-primary mx-auto max-w-3xl">
            {t.advisory.benefits.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.advisory.benefits.items.map((benefit, index) => (
            <div key={index} className="p-6 border border-border rounded-lg space-y-4">
              <div className="text-4xl">{benefit.icon}</div>
              <h3 className="text-xl text-primary">{benefit.title}</h3>
              <p className="text-secondary text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <CTASection
        title={t.advisory.cta.title}
        description={t.advisory.cta.description}
        primaryButton={{
          text: t.common.bookConsultation,
          href: 'https://portal.infinitegz.com/advisory',
        }}
        secondaryButton={{
          text: t.common.whatsappUs,
          href: 'https://wa.me/60123456789',
        }}
      />
    </PageLayout>
  )
}
