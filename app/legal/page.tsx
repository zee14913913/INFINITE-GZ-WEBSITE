'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LegalPage() {
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
                  [ {t.legal.hero.tag} ]
                </div>
                
                <h1 className="text-primary mx-auto max-w-4xl text-balance text-5xl leading-tight tracking-tight md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight">
                  {t.legal.hero.title}
                </h1>
                
                <p className="text-secondary mx-auto max-w-3xl text-lg md:text-xl leading-relaxed">
                  {t.legal.hero.description}
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
          <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-4xl space-y-12">
            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-2xl text-primary mb-4">{t.legal.sections.companyInfo.title}</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  {t.legal.sections.companyInfo.description}
                </p>
                <p className="text-primary">
                  {t.legal.sections.companyInfo.registeredAddress}<br />
                  {t.legal.sections.companyInfo.businessRegistration}<br />
                  {t.legal.sections.companyInfo.licenseNumber}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary mb-4">{t.legal.sections.regulatory.title}</h2>
                <p className="text-secondary leading-relaxed">
                  {t.legal.sections.regulatory.content}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary mb-4">{t.legal.sections.disclaimer.title}</h2>
                <p className="text-secondary leading-relaxed">
                  {t.legal.sections.disclaimer.content}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary mb-4">{t.legal.sections.intellectualProperty.title}</h2>
                <p className="text-secondary leading-relaxed">
                  {t.legal.sections.intellectualProperty.content}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary mb-4">{t.legal.sections.thirdPartyLinks.title}</h2>
                <p className="text-secondary leading-relaxed">
                  {t.legal.sections.thirdPartyLinks.content}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary mb-4">{t.legal.sections.contact.title}</h2>
                <p className="text-secondary leading-relaxed">
                  {t.legal.sections.contact.description}
                </p>
                <p className="text-primary mt-4">
                  {t.legal.sections.contact.email}<br />
                  {t.legal.sections.contact.whatsapp}
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

