'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import PageLayout from '@/components/PageLayout'
import PageHero from '@/components/PageHero'
import SectionContainer from '@/components/SectionContainer'
import CTASection from '@/components/CTASection'

export default function SolutionsPage() {
  const { t } = useLanguage()
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        tag={t.solutions.hero.tag}
        title={t.solutions.hero.title}
        description={t.solutions.hero.description}
        videoSrc="/videos/solutions-hero-bg.mp4"
        buttons={[
          {
            text: t.common.getStarted,
            href: 'https://portal.infinitegz.com',
            variant: 'primary',
          },
          {
            text: t.common.explore,
            href: '/creditpilot',
            variant: 'secondary',
          },
        ]}
      />

      {/* Product Cards Section */}
      <SectionContainer className="py-16 sm:py-24 relative" containerClassName="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-px bg-border">
          {t.solutions.products.map((product, index) => (
            <Link 
              key={index}
              href={index === 0 ? '/creditpilot' : index === 1 ? '/advisory' : '/resources'} 
              className={`group bg-background p-8 sm:p-12 hover:bg-secondary/5 transition-colors ${index > 0 ? 'border-t lg:border-t-0 lg:border-l border-border' : ''}`}
            >
              <div className="space-y-6">
                <div className="mono-tag text-xs text-secondary">[ {product.tag} ]</div>
                <h2 className="text-3xl sm:text-4xl text-primary group-hover:text-primary/80 transition-colors">
                  {product.title}
                </h2>
                <p className="text-secondary text-base leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <span>{product.linkText}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionContainer>

      {/* Core Business Details */}
      <SectionContainer containerClassName="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl space-y-16 sm:space-y-24">
        <div className="space-y-8">
          <div className="mono-tag flex items-center gap-2 text-sm text-secondary">
            <span>[</span> <span>{t.solutions.coreBusiness.tag}</span> <span>]</span>
          </div>
          <h2 className="text-balance text-3xl tracking-tight md:text-5xl lg:text-6xl text-primary max-w-3xl">
            {t.solutions.coreBusiness.title}
          </h2>
          <p className="text-secondary text-lg max-w-2xl">
            {t.solutions.coreBusiness.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.solutions.coreBusiness.features.map((feature, index) => (
            <div key={index} className="space-y-4 p-6 border border-border rounded-lg">
              <div className="text-5xl">{feature.icon}</div>
              <h3 className="text-xl text-primary">{feature.title}</h3>
              <p className="text-secondary text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* 8 Complementary Services */}
      <SectionContainer containerClassName="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl space-y-16 sm:space-y-24">
        <div className="space-y-8">
          <div className="mono-tag flex items-center gap-2 text-sm text-secondary">
            <span>[</span> <span>{t.solutions.complementaryServices.tag}</span> <span>]</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-balance text-3xl tracking-tight md:text-5xl lg:text-6xl text-primary">
                {t.solutions.complementaryServices.title}
              </h2>
              <p className="text-secondary text-lg">
                {t.solutions.complementaryServices.description}
              </p>
            </div>
            <Link 
              href="/advisory" 
              className="relative isolate inline-flex shrink-0 items-center justify-center border font-mono text-base/6 uppercase tracking-widest gap-x-3 px-6 py-3 sm:text-sm border-[--btn-border] bg-[--btn-bg] text-[--btn-text] hover:bg-[--btn-hover] rounded-full [--btn-bg:transparent] [--btn-border:theme(colors.primary/25%)] [--btn-hover:theme(colors.secondary/20%)] [--btn-text:theme(colors.primary)]"
            >
              <span>{t.common.viewDetails}</span>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {t.solutions.complementaryServices.items.map((service, index) => {
            // 第1项（财务优化）和第8项（信用卡管理）使用链接
            const isFinancialOptimization = service.num === '01';
            const isCreditCard = service.num === '08';
            
            if (isFinancialOptimization) {
              return (
                <Link 
                  key={index}
                  href="/financial-optimization"
                  className="bg-background p-6 sm:p-8 space-y-4 hover:bg-secondary/5 transition-colors group cursor-pointer"
                >
                  <div className="mono-tag text-xs text-secondary">{service.num}</div>
                  <h3 className="text-lg text-primary group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{service.description}</p>
                  <div className="flex items-center gap-2 text-xs text-primary pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{t.common.viewDetails}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              );
            }
            
            if (isCreditCard) {
              return (
                <Link 
                  key={index}
                  href="/credit-card-management"
                  className="bg-background p-6 sm:p-8 space-y-4 hover:bg-secondary/5 transition-colors group cursor-pointer"
                >
                  <div className="mono-tag text-xs text-secondary">{service.num}</div>
                  <h3 className="text-lg text-primary group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{service.description}</p>
                  <div className="flex items-center gap-2 text-xs text-primary pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{t.common.viewDetails}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              );
            }
            
            // 其他7项保持原样
            return (
              <div key={index} className="bg-background p-6 sm:p-8 space-y-4 hover:bg-secondary/5 transition-colors">
                <div className="mono-tag text-xs text-secondary">{service.num}</div>
                <h3 className="text-lg text-primary">{service.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* Pricing Model */}
      <SectionContainer containerClassName="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl space-y-16 sm:space-y-24">
        <div className="space-y-8">
          <div className="mono-tag flex items-center gap-2 text-sm text-secondary">
            <span>[</span> <span>{t.solutions.pricing.tag}</span> <span>]</span>
          </div>
          <h2 className="text-balance text-3xl tracking-tight md:text-5xl lg:text-6xl text-primary max-w-3xl">
            {t.solutions.pricing.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {t.solutions.pricing.models.map((model, index) => (
            <div key={index} className={`space-y-6 p-8 sm:p-12 rounded-lg transition-colors ${index === 1 ? 'border-2 border-primary/20 bg-primary/5' : 'border border-border hover:border-primary/30'}`}>
              <div className="mono-tag text-xs text-secondary">[ {model.tag} ]</div>
              <h3 className="text-3xl text-primary">{model.title}</h3>
              <div className="text-6xl font-light text-primary">{model.price}</div>
              <p className="text-secondary leading-relaxed">
                {model.description}
              </p>
              <ul className="space-y-3 text-sm text-secondary">
                {model.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Target Customers */}
      <SectionContainer containerClassName="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl space-y-16 sm:space-y-24">
        <div className="space-y-8">
          <div className="mono-tag flex items-center gap-2 text-sm text-secondary">
            <span>[</span> <span>{t.solutions.targetCustomers.tag}</span> <span>]</span>
          </div>
          <h2 className="text-balance text-3xl tracking-tight md:text-5xl lg:text-6xl text-primary max-w-3xl">
            {t.solutions.targetCustomers.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.solutions.targetCustomers.customers.map((customer, index) => (
            <div key={index} className="space-y-4 p-6 border border-border rounded-lg">
              <div className="text-4xl">{customer.icon}</div>
              <h3 className="text-xl text-primary">{customer.title}</h3>
              <p className="text-secondary text-sm">
                {customer.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Call to Action */}
      <CTASection
        title={t.solutions.cta.title}
        description={t.solutions.cta.description}
        primaryButton={{
          text: t.common.getStarted,
          href: 'https://portal.infinitegz.com',
        }}
        secondaryButton={{
          text: t.common.contactUs,
          href: 'https://wa.me/60123456789',
        }}
      />
    </PageLayout>
  )
}
