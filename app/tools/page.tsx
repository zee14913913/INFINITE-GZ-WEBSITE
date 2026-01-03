'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  Calculator, 
  TrendingUp, 
  CreditCard, 
  Home, 
  FileText, 
  Briefcase, 
  BarChart3, 
  Wallet,
  ArrowRight
} from 'lucide-react'

const calculatorCards = [
  {
    id: 1,
    route: '/loan-calculator',
    icon: Calculator,
  },
  {
    id: 2,
    route: '/loan-optimizer',
    icon: TrendingUp,
  },
  {
    id: 3,
    route: '/card-simulator',
    icon: CreditCard,
  },
  {
    id: 4,
    route: '/property-renovation-planner',
    icon: Home,
  },
  {
    id: 5,
    route: '/settlement-analyzer',
    icon: FileText,
  },
  {
    id: 6,
    route: '/business-breakeven',
    icon: Briefcase,
  },
  {
    id: 7,
    route: '/debt-health',
    icon: BarChart3,
  },
  {
    id: 8,
    route: '/networth-snapshot',
    icon: Wallet,
  },
]

export default function ToolsHubPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-foreground">
      <ScrollProgress />
      <Header />
      
      <main className="pt-20 pb-32">
        <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-primary mx-auto max-w-4xl text-balance text-5xl leading-tight tracking-wide md:text-7xl md:leading-tight md:tracking-wide lg:text-8xl lg:leading-tight lg:tracking-wide mb-4">
              {t.toolsHub.mainTitle}
            </h1>
            <p className="text-secondary mx-auto max-w-3xl text-lg md:text-xl leading-relaxed">
              {t.toolsHub.mainSubtitle}
            </p>
          </div>

          {/* Calculator Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {calculatorCards.map((card) => {
              const Icon = card.icon
              const cardKey = `card${card.id}` as keyof typeof t.toolsHub
              const cardData = t.toolsHub[cardKey] as { title: string; desc: string }
              
              return (
                <div
                  key={card.id}
                  className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all flex flex-col"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-zinc-900/50 border border-zinc-800 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-xs text-secondary font-mono uppercase tracking-widest">
                          {card.id}/8
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {cardData.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                    {cardData.desc}
                  </p>

                  {/* Enter Button */}
                  <Link
                    href={card.route}
                    className="w-full px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-primary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-primary transition-all flex items-center justify-center gap-2"
                  >
                    {t.toolsHub.enterBtn}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Footer Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8 md:p-12 text-center">
              <p className="text-secondary text-sm leading-relaxed mb-6">
                {t.toolsHub.footerText}
              </p>
              <Link
                href="https://wa.me/60123456789"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-primary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-primary transition-all"
              >
                {t.toolsHub.footerCTA_btn}
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

