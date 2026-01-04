'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import PageLayout from '@/components/PageLayout'
import PageHero from '@/components/PageHero'
import SectionContainer from '@/components/SectionContainer'
import CTASection from '@/components/CTASection'
import { ArrowRight } from 'lucide-react'

// 所有实际存在的计算器列表
const calculatorList = [
  {
    id: 1,
    route: '/loan-calculator',
    titleKey: 'loanCalculator',
  },
  {
    id: 2,
    route: '/loan-optimizer',
    titleKey: 'loanOptimizer',
  },
  {
    id: 3,
    route: '/loan-analyzer',
    titleKey: 'loanAnalyzer',
  },
  {
    id: 4,
    route: '/loan-matcher',
    titleKey: 'loanMatcher',
  },
  {
    id: 5,
    route: '/card-simulator',
    titleKey: 'cardSimulator',
  },
  {
    id: 6,
    route: '/financial-optimization',
    titleKey: 'financialOptimization',
  },
  {
    id: 7,
    route: '/property-renovation-planner',
    titleKey: 'propertyRenovation',
  },
  {
    id: 8,
    route: '/settlement-analyzer',
    titleKey: 'settlementAnalyzer',
  },
  {
    id: 9,
    route: '/expense-tracker',
    titleKey: 'expenseTracker',
  },
  {
    id: 10,
    route: '/insurance-coverage-planner',
    titleKey: 'insurancePlanner',
  },
  {
    id: 11,
    route: '/savings-investment-goal-planner',
    titleKey: 'savingsPlanner',
  },
  {
    id: 12,
    route: '/cash-flow-optimization',
    titleKey: 'cashFlowOptimization',
  },
]

export default function AdvisoryPage() {
  const { t } = useLanguage()

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        tag={t.advisory.hero.tag}
        title={t.advisory.hero.title}
        description={t.advisory.hero.description}
        align="center"
      />

      {/* Calculators Grid Section */}
      <SectionContainer containerClassName="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl space-y-16 sm:space-y-32">
        <div className="space-y-12">
          <div className="mono-tag flex items-center gap-2 text-sm text-secondary">
            <span>[</span> <span>{t.advisory.calculators.tag}</span> <span>]</span>
          </div>
          <h2 className="text-balance text-3xl tracking-tight md:text-5xl lg:text-6xl text-primary max-w-3xl">
            {t.advisory.calculators.title}
          </h2>
          <p className="text-secondary text-lg max-w-2xl">
            {t.advisory.calculators.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {calculatorList.map((calc) => {
            const calcData = t.advisory.calculators.items[calc.titleKey as keyof typeof t.advisory.calculators.items]
            if (!calcData) return null

            return (
              <Link
                key={calc.id}
                href={calc.route}
                className="group relative flex h-full flex-col space-y-4 p-8 bg-background hover:bg-secondary/5 transition-all"
              >
                <div className="border-primary/10 pointer-events-none absolute inset-0 isolate z-10 border opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary absolute -left-1 -top-1 z-10 size-2 -translate-x-px -translate-y-px"></div>
                  <div className="bg-primary absolute -right-1 -top-1 z-10 size-2 -translate-y-px translate-x-px"></div>
                  <div className="bg-primary absolute -bottom-1 -left-1 z-10 size-2 -translate-x-px translate-y-px"></div>
                  <div className="bg-primary absolute -bottom-1 -right-1 z-10 size-2 translate-x-px translate-y-px"></div>
                </div>

                <div className="mono-tag text-xs text-secondary relative z-20">
                  {String(calc.id).padStart(2, '0')}
                </div>

                <h3 className="text-2xl text-primary group-hover:text-primary/90 transition-colors relative z-20">
                  {calcData.title}
                </h3>

                <p className="text-secondary text-sm leading-relaxed group-hover:text-primary/80 transition-colors relative z-20">
                  {calcData.description}
                </p>

                <div className="flex items-center gap-2 text-xs text-primary pt-2 opacity-0 group-hover:opacity-100 transition-opacity relative z-20">
                  <span>{t.common.viewDetails}</span>
                  <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                </div>
              </Link>
            )
          })}
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
