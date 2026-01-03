'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function DSRGuidePage() {
  const { t } = useLanguage()
  
  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen bg-[rgb(10,10,10)]">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pb-px">
          <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl flex min-h-screen flex-col justify-center">
            <div className="relative z-20 py-20 text-center">
              <div className="space-y-8">
                <div className="mono-tag text-secondary text-sm">
                  [ {t.dsrGuide.hero.tag} ]
                </div>
                
                <h1 className="text-primary mx-auto max-w-4xl text-balance text-5xl leading-tight tracking-tight md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight">
                  {t.dsrGuide.hero.title}
                </h1>
                
                <p className="text-secondary mx-auto max-w-3xl text-lg md:text-xl leading-relaxed">
                  {t.dsrGuide.hero.description}
                </p>
              </div>
            </div>
          
            {/* 底部激光分隔线 */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="laser-divider"></div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-32 relative">
          <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-4xl space-y-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl text-primary mb-6">{t.dsrGuide.sections.whatIsDSR.title}</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  {t.dsrGuide.sections.whatIsDSR.description}
                </p>
                <div className="bg-secondary/5 border border-border rounded-lg p-6 my-6">
                  <p className="text-primary font-mono text-lg mb-2">{t.dsrGuide.sections.whatIsDSR.formulaLabel}</p>
                  <p className="text-secondary text-xl">
                    {t.dsrGuide.sections.whatIsDSR.formula}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl text-primary mb-6">{t.dsrGuide.sections.whyMatters.title}</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  {t.dsrGuide.sections.whyMatters.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
                  {t.dsrGuide.sections.whyMatters.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl text-primary mb-6">{t.dsrGuide.sections.thresholds.title}</h2>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl text-primary mb-2">{t.dsrGuide.sections.thresholds.excellent.title}</h3>
                    <p className="text-secondary">{t.dsrGuide.sections.thresholds.excellent.description}</p>
                  </div>
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl text-primary mb-2">{t.dsrGuide.sections.thresholds.good.title}</h3>
                    <p className="text-secondary">{t.dsrGuide.sections.thresholds.good.description}</p>
                  </div>
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl text-primary mb-2">{t.dsrGuide.sections.thresholds.acceptable.title}</h3>
                    <p className="text-secondary">{t.dsrGuide.sections.thresholds.acceptable.description}</p>
                  </div>
                  <div className="border border-border rounded-lg p-6 border-red-500/30">
                    <h3 className="text-xl text-primary mb-2">{t.dsrGuide.sections.thresholds.highRisk.title}</h3>
                    <p className="text-secondary">{t.dsrGuide.sections.thresholds.highRisk.description}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl text-primary mb-6">{t.dsrGuide.sections.howToImprove.title}</h2>
                <div className="space-y-4">
                  {t.dsrGuide.sections.howToImprove.items.map((item, index) => (
                    <div key={index} className="border border-border rounded-lg p-6">
                      <h3 className="text-xl text-primary mb-2">{item.title}</h3>
                      <p className="text-secondary">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl text-primary mb-6">{t.dsrGuide.sections.calculate.title}</h2>
                <p className="text-secondary leading-relaxed mb-6">
                  {t.dsrGuide.sections.calculate.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/financial-optimization#calculator"
                    className="relative isolate inline-flex shrink-0 items-center justify-center border font-mono text-base/6 uppercase tracking-widest gap-x-3 px-6 py-3 sm:text-sm border-[--btn-border] bg-[--btn-bg] text-[--btn-text] hover:border-[--btn-hover] hover:bg-[--btn-hover] rounded-full [--btn-bg:theme(colors.primary)] [--btn-border:theme(colors.primary)] [--btn-hover:theme(colors.primary/80%)] [--btn-text:theme(colors.background)]"
                  >
                    <span>{t.dsrGuide.sections.calculate.tryCalculator}</span>
                  </Link>
                  <Link 
                    href="/loan-analyzer"
                    className="relative isolate inline-flex shrink-0 items-center justify-center border font-mono text-base/6 uppercase tracking-widest gap-x-3 px-6 py-3 sm:text-sm border-[--btn-border] bg-[--btn-bg] text-[--btn-text] hover:bg-[--btn-hover] rounded-full [--btn-bg:transparent] [--btn-border:theme(colors.primary/25%)] [--btn-hover:theme(colors.secondary/20%)] [--btn-text:theme(colors.primary)]"
                  >
                    <span>{t.dsrGuide.sections.calculate.loanAnalyzer}</span>
                  </Link>
                </div>
              </div>
            </div>
          
            {/* 底部激光分隔线 */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="laser-divider"></div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

