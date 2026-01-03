'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FAQPage() {
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
                  [ {t.faq.hero.tag} ]
                </div>
                
                <h1 className="text-primary mx-auto max-w-4xl text-balance text-5xl leading-tight tracking-tight md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight">
                  {t.faq.hero.title}
                </h1>
                
                <p className="text-secondary mx-auto max-w-3xl text-lg md:text-xl leading-relaxed">
                  {t.faq.hero.description}
                </p>
              </div>
            </div>
          
            {/* 底部激光分隔线 */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="laser-divider"></div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-32 relative">
          <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl space-y-16">
            <div className="max-w-4xl mx-auto space-y-4">
              {t.faq.items.map((faq, index) => (
                <details key={index} className="group border border-border rounded-lg hover:border-primary/30 transition-colors">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-primary font-semibold text-lg pr-4">{faq.question}</h3>
                    <svg className="w-5 h-5 text-secondary group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-secondary leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          
            {/* 底部激光分隔线 */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="laser-divider"></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-32">
          <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
            <div className="border border-border rounded-2xl p-8 sm:p-16 text-center space-y-8 bg-gradient-to-b from-secondary/5 to-transparent">
              <h2 className="text-3xl sm:text-5xl text-primary max-w-3xl mx-auto">
                {t.faq.cta.title}
              </h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto">
                {t.faq.cta.description}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a 
                  href="https://wa.me/60123456789" 
                  target="_blank"
                  className="relative isolate inline-flex shrink-0 items-center justify-center border font-mono text-base/6 uppercase tracking-widest gap-x-3 px-6 py-3 sm:text-sm border-[--btn-border] bg-[--btn-bg] text-[--btn-text] hover:border-[--btn-hover] hover:bg-[--btn-hover] rounded-full [--btn-bg:theme(colors.primary)] [--btn-border:theme(colors.primary)] [--btn-hover:theme(colors.primary/80%)] [--btn-text:theme(colors.background)]"
                >
                  <span>{t.faq.cta.contactUs}</span>
                </a>
                <a 
                  href="https://portal.infinitegz.com" 
                  target="_blank"
                  className="relative isolate inline-flex shrink-0 items-center justify-center border font-mono text-base/6 uppercase tracking-widest gap-x-3 px-6 py-3 sm:text-sm border-[--btn-border] bg-[--btn-bg] text-[--btn-text] hover:bg-[--btn-hover] rounded-full [--btn-bg:transparent] [--btn-border:theme(colors.primary/25%)] [--btn-hover:theme(colors.secondary/20%)] [--btn-text:theme(colors.primary)]"
                >
                  <span>{t.faq.cta.visitPortal}</span>
                </a>
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

