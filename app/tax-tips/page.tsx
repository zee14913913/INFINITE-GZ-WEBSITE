'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TaxTipsPage() {
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
                  [ {t.taxTips.hero.tag} ]
                </div>
                
                <h1 className="text-primary mx-auto max-w-4xl text-balance text-5xl leading-tight tracking-tight md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight">
                  {t.taxTips.hero.title}
                </h1>
                
                <p className="text-secondary mx-auto max-w-3xl text-lg md:text-xl leading-relaxed">
                  {t.taxTips.hero.description}
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
                <h2 className="text-3xl text-primary mb-6">{t.taxTips.sections.commonDeductions.title}</h2>
                <div className="space-y-4">
                  {t.taxTips.sections.commonDeductions.items.map((item, index) => (
                    <div key={index} className="border border-border rounded-lg p-6">
                      <h3 className="text-xl text-primary mb-2">{item.title}</h3>
                      <p className="text-secondary">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl text-primary mb-6">{t.taxTips.sections.strategies.title}</h2>
                <div className="space-y-4">
                  {t.taxTips.sections.strategies.items.map((item, index) => (
                    <div key={index} className="border border-border rounded-lg p-6">
                      <h3 className="text-xl text-primary mb-2">{item.title}</h3>
                      <p className="text-secondary">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl text-primary mb-6">{t.taxTips.sections.creditCardBenefits.title}</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  {t.taxTips.sections.creditCardBenefits.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
                  {t.taxTips.sections.creditCardBenefits.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-secondary mt-4">
                  {t.taxTips.sections.creditCardBenefits.note}
                </p>
              </div>

              <div>
                <h2 className="text-3xl text-primary mb-6">{t.taxTips.sections.professionalHelp.title}</h2>
                <p className="text-secondary leading-relaxed mb-6">
                  {t.taxTips.sections.professionalHelp.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/advisory"
                    className="relative isolate inline-flex shrink-0 items-center justify-center border font-mono text-base/6 uppercase tracking-widest gap-x-3 px-6 py-3 sm:text-sm border-[--btn-border] bg-[--btn-bg] text-[--btn-text] hover:border-[--btn-hover] hover:bg-[--btn-hover] rounded-full [--btn-bg:theme(colors.primary)] [--btn-border:theme(colors.primary)] [--btn-hover:theme(colors.primary/80%)] [--btn-text:theme(colors.background)]"
                  >
                    <span>{t.taxTips.sections.professionalHelp.bookConsultation}</span>
                  </Link>
                  <Link 
                    href="https://wa.me/60123456789"
                    target="_blank"
                    className="relative isolate inline-flex shrink-0 items-center justify-center border font-mono text-base/6 uppercase tracking-widest gap-x-3 px-6 py-3 sm:text-sm border-[--btn-border] bg-[--btn-bg] text-[--btn-text] hover:bg-[--btn-hover] rounded-full [--btn-bg:transparent] [--btn-border:theme(colors.primary/25%)] [--btn-hover:theme(colors.secondary/20%)] [--btn-text:theme(colors.primary)]"
                  >
                    <span>{t.taxTips.sections.professionalHelp.whatsappUs}</span>
                  </Link>
                </div>
              </div>

              <div className="bg-secondary/5 border border-border rounded-lg p-6">
                <p className="text-primary font-semibold mb-2">{t.taxTips.sections.disclaimer.title}</p>
                <p className="text-secondary text-sm">
                  {t.taxTips.sections.disclaimer.content}
                </p>
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

