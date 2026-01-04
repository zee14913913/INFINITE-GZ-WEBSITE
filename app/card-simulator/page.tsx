'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowLeft, Plus, Trash2, AlertCircle, ArrowRight, TrendingDown, TrendingUp } from 'lucide-react'

interface CreditCard {
  id: string
  name: string
  balance: number
  rate: number
  minPayment: number
}

interface StrategyResult {
  months: number
  totalInterest: number
  monthlyPayment: number
  error?: string
}

export default function CardSimulatorPage() {
  const { t } = useLanguage()

  // Credit cards
  const [cards, setCards] = useState<CreditCard[]>([
    { id: '1', name: '', balance: 0, rate: 18, minPayment: 0 }
  ])

  // Strategy parameters
  const [aggressiveBudget, setAggressiveBudget] = useState<number>(0)
  const [consolRate, setConsolRate] = useState<number>(7)
  const [consolTenure, setConsolTenure] = useState<number>(7)

  // Results
  const [results, setResults] = useState<{
    strategy1: StrategyResult
    strategy2: StrategyResult
    strategy3: StrategyResult
    totalBalance: number
    totalMinPayment: number
  } | null>(null)
  const [showResults, setShowResults] = useState(false)

  const handleAddCard = () => {
    setCards([...cards, {
      id: Date.now().toString(),
      name: '',
      balance: 0,
      rate: 18,
      minPayment: 0
    }])
  }

  const handleDeleteCard = (id: string) => {
    if (cards.length > 1) {
      setCards(cards.filter(c => c.id !== id))
    }
  }

  const handleCardChange = (id: string, field: keyof CreditCard, value: any) => {
    setCards(cards.map(c => c.id === id ? { ...c, [field]: value } : c))
  }

  // Simulate credit card payoff
  const simulateCreditCardPayoff = (
    balance: number,
    annualRate: number,
    monthlyPayment: number,
    maxMonths: number = 600
  ): StrategyResult => {
    const monthlyRate = annualRate / 100 / 12
    let month = 0
    let totalInterest = 0
    let currentBalance = balance

    while (currentBalance > 0 && month < maxMonths) {
      const interest = currentBalance * monthlyRate
      totalInterest += interest
      const principalPayment = monthlyPayment - interest

      if (principalPayment <= 0) {
        return { months: maxMonths, totalInterest: Infinity, monthlyPayment, error: 'payment_too_low' }
      }

      currentBalance -= principalPayment
      if (currentBalance < 0) currentBalance = 0
      month++
    }

    return {
      months: month,
      totalInterest,
      monthlyPayment
    }
  }

  // Strategy 1: Minimum payments only
  const calculateStrategy1 = (): StrategyResult => {
    let maxMonths = 0
    let totalInterest = 0
    let totalMonthlyPayment = 0

    cards.forEach(card => {
      if (card.balance > 0 && card.minPayment > 0) {
        const result = simulateCreditCardPayoff(card.balance, card.rate, card.minPayment)
        if (result.months > maxMonths) maxMonths = result.months
        totalInterest += result.totalInterest
        totalMonthlyPayment += card.minPayment
      }
    })

    return {
      months: maxMonths,
      totalInterest,
      monthlyPayment: totalMonthlyPayment
    }
  }

  // Strategy 2: Aggressive repayment (Avalanche method)
  const calculateStrategy2 = (): StrategyResult => {
    if (aggressiveBudget <= 0) {
      return { months: 0, totalInterest: 0, monthlyPayment: 0, error: 'no_budget' }
    }

    // Create working copies of cards
    const workingCards = cards
      .filter(c => c.balance > 0)
      .map(c => ({
        ...c,
        currentBalance: c.balance
      }))

    if (workingCards.length === 0) {
      return { months: 0, totalInterest: 0, monthlyPayment: aggressiveBudget }
    }

    let month = 0
    let totalInterest = 0
    const maxMonths = 600

    while (month < maxMonths) {
      let remainingBudget = aggressiveBudget
      let allPaid = true

      // Calculate interest for all cards first
      workingCards.forEach(card => {
        if (card.currentBalance > 0) {
          const monthlyRate = card.rate / 100 / 12
          const interest = card.currentBalance * monthlyRate
          totalInterest += interest
          card.currentBalance += interest
          allPaid = false
        }
      })

      if (allPaid) break

      // Pay minimums first
      workingCards.forEach(card => {
        if (card.currentBalance > 0) {
          const minPay = Math.min(card.minPayment, card.currentBalance)
          card.currentBalance -= minPay
          remainingBudget -= minPay
        }
      })

      // Apply remaining budget to highest rate card first (Avalanche)
      while (remainingBudget > 0) {
        // Find card with highest rate that still has balance
        const activeCards = workingCards.filter(c => c.currentBalance > 0)
        if (activeCards.length === 0) break

        const highestRateCard = activeCards.reduce((max, card) =>
          card.rate > max.rate ? card : max
        )

        const payment = Math.min(remainingBudget, highestRateCard.currentBalance)
        highestRateCard.currentBalance -= payment
        remainingBudget -= payment
      }

      // Check if all paid
      if (workingCards.every(c => c.currentBalance === 0)) {
        break
      }

      month++
    }

    return {
      months: month >= maxMonths ? maxMonths : month,
      totalInterest,
      monthlyPayment: aggressiveBudget
    }
  }

  // Strategy 3: Consolidation loan
  const calculateStrategy3 = (): StrategyResult => {
    const totalBalance = cards.reduce((sum, c) => sum + c.balance, 0)

    if (totalBalance <= 0) {
      return { months: 0, totalInterest: 0, monthlyPayment: 0 }
    }

    const r = consolRate / 100 / 12
    const n = consolTenure * 12

    let monthlyPayment = 0
    if (r === 0) {
      monthlyPayment = totalBalance / n
    } else {
      const numerator = r * Math.pow(1 + r, n)
      const denominator = Math.pow(1 + r, n) - 1
      monthlyPayment = totalBalance * (numerator / denominator)
    }

    const totalInterest = (monthlyPayment * n) - totalBalance

    return {
      months: n,
      totalInterest,
      monthlyPayment
    }
  }

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency: 'MYR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const formatPercentage = (value: number, decimals: number = 1): string => {
    return `${value.toFixed(decimals)}%`
  }

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault()

    if (cards.length === 0 || cards.every(c => c.balance === 0)) {
      alert('Please enter at least one credit card with a balance')
      return
    }

    const totalBalance = cards.reduce((sum, c) => sum + c.balance, 0)
    const totalMinPayment = cards.reduce((sum, c) => sum + c.minPayment, 0)

    // Auto-set aggressive budget if not set
    let budget = aggressiveBudget
    if (budget <= 0) {
      budget = totalMinPayment + 500
      setAggressiveBudget(budget)
    }

    const strategy1 = calculateStrategy1()
    const strategy2 = calculateStrategy2()
    const strategy3 = calculateStrategy3()

    setResults({
      strategy1,
      strategy2,
      strategy3,
      totalBalance,
      totalMinPayment
    })
    setShowResults(true)

    setTimeout(() => {
      const resultsElement = document.getElementById('results-section')
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }, 100)
  }

  const handleReset = () => {
    setCards([{ id: '1', name: '', balance: 0, rate: 18, minPayment: 0 }])
    setAggressiveBudget(0)
    setConsolRate(7)
    setConsolTenure(7)
    setResults(null)
    setShowResults(false)
  }

  const getStrategyName = (strategyNum: number): string => {
    if (strategyNum === 1) {
      return t.cardSimulator.result.strategy1_name
    } else if (strategyNum === 2) {
      return t.cardSimulator.result.strategy2_name.replace(/\{\{budget\}\}/g, formatCurrency(aggressiveBudget))
    } else {
      return t.cardSimulator.result.strategy3_name
        .replace(/\{\{rate\}\}/g, formatPercentage(consolRate, 1))
        .replace(/\{\{tenure\}\}/g, consolTenure.toString())
    }
  }

  return (
    <div className="min-h-screen bg-black text-foreground">
      <ScrollProgress />
      <Header />

      <main className="pt-20 pb-32">
        <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/advisory"
              className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-mono text-sm uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tools
            </Link>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-primary mx-auto max-w-4xl text-balance text-5xl leading-tight tracking-wide md:text-7xl md:leading-tight md:tracking-wide lg:text-8xl lg:leading-tight lg:tracking-wide mb-4">
              {t.cardSimulator.header.title}
            </h1>
            <p className="text-secondary mx-auto max-w-3xl text-lg md:text-xl leading-relaxed mb-6">
              {t.cardSimulator.header.subtitle}
            </p>

            {/* Info Box */}
            <div className="max-w-4xl mx-auto p-6 bg-blue-900/20 border border-blue-800/50 rounded-xl">
              <p className="text-blue-200 text-sm leading-relaxed">
                {t.cardSimulator.header.notice}
              </p>
            </div>
          </div>

          {/* Input Section */}
          <section className="max-w-6xl mx-auto mb-16">
            <form onSubmit={handleSimulate} className="space-y-8">
              {/* Panel 1: Credit Cards */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2 uppercase tracking-widest font-mono text-sm">
                      {t.cardSimulator.input.cards_title}
                    </h3>
                    <p className="text-xs text-secondary">{t.cardSimulator.input.cards_helper}</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddCard}
                    className="flex items-center gap-2 px-4 py-2 border border-zinc-800 rounded-lg text-secondary hover:border-zinc-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    {t.cardSimulator.btn.addCard}
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.cardSimulator.table.cardName}</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.cardSimulator.table.balance}</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.cardSimulator.table.rate}</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.cardSimulator.table.minPayment}</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cards.map(card => (
                        <tr key={card.id} className="border-b border-zinc-800">
                          <td className="py-3 px-4">
                            <input
                              type="text"
                              value={card.name}
                              onChange={(e) => handleCardChange(card.id, 'name', e.target.value)}
                              placeholder="Card name / Bank"
                              className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary text-sm focus:outline-none focus:border-primary"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <input
                              type="number"
                              value={card.balance || ''}
                              onChange={(e) => handleCardChange(card.id, 'balance', parseFloat(e.target.value) || 0)}
                              min="0"
                              className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary text-sm font-mono focus:outline-none focus:border-primary"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <input
                              type="number"
                              value={card.rate || ''}
                              onChange={(e) => handleCardChange(card.id, 'rate', parseFloat(e.target.value) || 0)}
                              min="0"
                              max="30"
                              step="0.1"
                              className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary text-sm font-mono focus:outline-none focus:border-primary"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <input
                              type="number"
                              value={card.minPayment || ''}
                              onChange={(e) => handleCardChange(card.id, 'minPayment', parseFloat(e.target.value) || 0)}
                              min="0"
                              className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary text-sm font-mono focus:outline-none focus:border-primary"
                            />
                          </td>
                          <td className="py-3 px-4">
                            {cards.length > 1 && (
                              <button
                                type="button"
                                onClick={() => handleDeleteCard(card.id)}
                                className="text-red-400 hover:text-red-300"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Panel 2: Strategy Parameters */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                  {t.cardSimulator.input.strategy_title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.cardSimulator.input.aggressiveBudget_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={aggressiveBudget || ''}
                        onChange={(e) => setAggressiveBudget(parseFloat(e.target.value) || 0)}
                        min="0"
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                    <p className="mt-1 text-xs text-secondary">{t.cardSimulator.input.aggressiveBudget_helper}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.cardSimulator.input.consolRate_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={consolRate || ''}
                        onChange={(e) => setConsolRate(parseFloat(e.target.value) || 7)}
                        min="0"
                        max="30"
                        step="0.1"
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.cardSimulator.input.consolTenure_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={consolTenure || ''}
                        onChange={(e) => setConsolTenure(parseInt(e.target.value) || 7)}
                        min="1"
                        max="20"
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono text-xs">years</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-secondary">{t.cardSimulator.input.consol_helper}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-primary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-primary transition-all"
                >
                  {t.cardSimulator.btn.simulate}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all"
                >
                  {t.cardSimulator.btn.reset}
                </button>
              </div>
            </form>
          </section>

          {/* Results Section */}
          {showResults && results && (
            <section id="results-section" className="max-w-6xl mx-auto">
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">{t.cardSimulator.result.title}</h2>
                </div>

                {/* Summary Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-black border border-zinc-800 rounded-xl p-6">
                    <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-2">
                      {t.cardSimulator.result.totalBalance}
                    </span>
                    <div className="text-3xl font-bold text-primary">{formatCurrency(results.totalBalance)}</div>
                  </div>
                  <div className="bg-black border border-zinc-800 rounded-xl p-6">
                    <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-2">
                      {t.cardSimulator.result.totalMinPayment}
                    </span>
                    <div className="text-3xl font-bold text-primary">{formatCurrency(results.totalMinPayment)}</div>
                  </div>
                </div>

                {/* Strategy Comparison Table */}
                <div className="overflow-x-auto mb-8">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.cardSimulator.result.table_header_strategy}</th>
                        <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.cardSimulator.result.table_header_months}</th>
                        <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.cardSimulator.result.table_header_years}</th>
                        <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.cardSimulator.result.table_header_totalInterest}</th>
                        <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.cardSimulator.result.table_header_monthlyPayment}</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.cardSimulator.result.table_header_comment}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Strategy 1 */}
                      <tr className="border-b border-zinc-800">
                        <td className="py-4 px-4 text-primary font-semibold">{getStrategyName(1)}</td>
                        <td className="py-4 px-4 text-primary text-right font-mono">{results.strategy1.months}</td>
                        <td className="py-4 px-4 text-primary text-right font-mono">{(results.strategy1.months / 12).toFixed(1)}</td>
                        <td className="py-4 px-4 text-primary text-right font-mono">
                          {results.strategy1.totalInterest === Infinity ? '∞' : formatCurrency(results.strategy1.totalInterest)}
                        </td>
                        <td className="py-4 px-4 text-primary text-right font-mono">{formatCurrency(results.strategy1.monthlyPayment)}</td>
                        <td className="py-4 px-4 text-secondary text-sm">{t.cardSimulator.result.strategy1_comment}</td>
                      </tr>
                      {/* Strategy 2 */}
                      <tr className="border-b border-zinc-800">
                        <td className="py-4 px-4 text-primary font-semibold">{getStrategyName(2)}</td>
                        <td className="py-4 px-4 text-primary text-right font-mono">{results.strategy2.months}</td>
                        <td className="py-4 px-4 text-primary text-right font-mono">{(results.strategy2.months / 12).toFixed(1)}</td>
                        <td className="py-4 px-4 text-primary text-right font-mono">
                          {results.strategy2.totalInterest === Infinity ? '∞' : formatCurrency(results.strategy2.totalInterest)}
                        </td>
                        <td className="py-4 px-4 text-primary text-right font-mono">{formatCurrency(results.strategy2.monthlyPayment)}</td>
                        <td className="py-4 px-4 text-secondary text-sm">{t.cardSimulator.result.strategy2_comment}</td>
                      </tr>
                      {/* Strategy 3 */}
                      <tr className="border-b border-zinc-800">
                        <td className="py-4 px-4 text-primary font-semibold">{getStrategyName(3)}</td>
                        <td className="py-4 px-4 text-primary text-right font-mono">{results.strategy3.months}</td>
                        <td className="py-4 px-4 text-primary text-right font-mono">{(results.strategy3.months / 12).toFixed(1)}</td>
                        <td className="py-4 px-4 text-primary text-right font-mono">{formatCurrency(results.strategy3.totalInterest)}</td>
                        <td className="py-4 px-4 text-primary text-right font-mono">{formatCurrency(results.strategy3.monthlyPayment)}</td>
                        <td className="py-4 px-4 text-secondary text-sm">{t.cardSimulator.result.strategy3_comment}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Best Option Highlight */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-primary mb-3">{t.cardSimulator.result.bestOption_title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{t.cardSimulator.result.bestOption_text}</p>
                </div>

                {/* Disclaimer */}
                <div className="flex gap-4 p-6 bg-black border border-zinc-800 rounded-lg mb-6">
                  <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-secondary leading-relaxed">
                    {t.cardSimulator.disclaimer}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/loan-optimizer"
                    className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-primary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-primary transition-all flex items-center justify-center gap-2"
                  >
                    {t.cardSimulator.btn.ctosOptimizer}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/advisory"
                    className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
                  >
                    {t.cardSimulator.btn.exploreTools}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

