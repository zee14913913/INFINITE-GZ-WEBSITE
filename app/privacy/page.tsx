'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { useLanguage } from '@/contexts/LanguageContext'

export default function PrivacyPage() {
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
                  [ {t.privacy.hero.tag} ]
                </div>
                
                <h1 className="text-primary mx-auto max-w-4xl text-balance text-5xl leading-tight tracking-tight md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight">
                  {t.privacy.hero.title}
                </h1>
                
                <p className="text-secondary mx-auto max-w-3xl text-lg md:text-xl leading-relaxed">
                  {t.privacy.hero.lastUpdated}: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
                <h2 className="text-2xl text-primary mb-4">{t.privacy.sections.introduction.title}</h2>
                <p className="text-secondary leading-relaxed">
                  {t.privacy.sections.introduction.content}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary mb-4">{t.privacy.sections.informationWeCollect.title}</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  {t.privacy.sections.informationWeCollect.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
                  {t.privacy.sections.informationWeCollect.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl text-primary mb-4">{t.privacy.sections.howWeUse.title}</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  {t.privacy.sections.howWeUse.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
                  {t.privacy.sections.howWeUse.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl text-primary mb-4">{t.privacy.sections.dataSecurity.title}</h2>
                <p className="text-secondary leading-relaxed">
                  {t.privacy.sections.dataSecurity.content}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary mb-4">{t.privacy.sections.yourRights.title}</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  {t.privacy.sections.yourRights.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
                  {t.privacy.sections.yourRights.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl text-primary mb-4">{t.privacy.sections.contactUs.title}</h2>
                <p className="text-secondary leading-relaxed">
                  {t.privacy.sections.contactUs.description}
                </p>
                <p className="text-primary mt-4">
                  {t.privacy.sections.contactUs.email}<br />
                  {t.privacy.sections.contactUs.whatsapp}
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

