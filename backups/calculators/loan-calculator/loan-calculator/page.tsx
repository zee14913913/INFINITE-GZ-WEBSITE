'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowLeft, AlertCircle, ArrowRight, TrendingUp, TrendingDown } from 'lucide-react'

interface CalculationResult {
  currentDSR: number
  newLoanMonthlyPayment: number
  totalNewCommitment: number
  newDSR: number
  totalInterest: number
  affordabilityStatus: 'comfortable' | 'manageable' | 'tight' | 'highRisk' | 'critical'
  dsrIncrease: number
}

export default function LoanCalculatorPage() {
  const { t } = useLanguage()

  // Input states
  const [monthlyIncome, setMonthlyIncome] = useState(5000)
  const [existingCommit, setExistingCommit] = useState(0)
  const [maxDSR, setMaxDSR] = useState(60)
  const [proposedLoan, setProposedLoan] = useState(100000)
  const [loanRate, setLoanRate] = useState(5.0)
  const [loanTenure, setLoanTenure] = useState(20)

  // Results state
  const [results, setResults] = useState<CalculationResult | null>(null)
  const [showResults, setShowResults] = useState(false)

  // Calculate affordability function
  const calculateAffordability = (
    income: number,
    existingCommit: number,
    proposedLoan: number,
    loanRate: number,
    loanTenure: number
  ): CalculationResult => {
    // 1. Current DSR (before new loan)
    const currentDSR = (existingCommit / income) * 100

    // 2. New loan monthly payment (using standard amortization formula)
    const monthlyRate = loanRate / 100 / 12
    const numMonths = loanTenure * 12

    let newLoanMonthlyPayment = 0
    if (monthlyRate === 0) {
      newLoanMonthlyPayment = proposedLoan / numMonths
    } else {
      const numerator = monthlyRate * Math.pow(1 + monthlyRate, numMonths)
      const denominator = Math.pow(1 + monthlyRate, numMonths) - 1
      newLoanMonthlyPayment = proposedLoan * (numerator / denominator)
    }

    // 3. Total monthly commitment after new loan
    const totalNewCommitment = existingCommit + newLoanMonthlyPayment

    // 4. New DSR (after new loan)
    const newDSR = (totalNewCommitment / income) * 100

    // 5. Total interest paid over loan tenure
    const totalPaid = newLoanMonthlyPayment * numMonths
    const totalInterest = totalPaid - proposedLoan

    // 6. Affordability classification
    let affordabilityStatus: 'comfortable' | 'manageable' | 'tight' | 'highRisk' | 'critical'
    if (newDSR <= 40) {
      affordabilityStatus = 'comfortable'
    } else if (newDSR <= 50) {
      affordabilityStatus = 'manageable'
    } else if (newDSR <= 60) {
      affordabilityStatus = 'tight'
    } else if (newDSR <= 70) {
      affordabilityStatus = 'highRisk'
    } else {
      affordabilityStatus = 'critical'
    }

    return {
      currentDSR,
      newLoanMonthlyPayment,
      totalNewCommitment,
      newDSR,
      totalInterest,
      affordabilityStatus,
      dsrIncrease: newDSR - currentDSR
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

  const formatPercentage = (value: number, decimals: number = 2): string => {
    return `${value.toFixed(decimals)}%`
  }

  const getDSRColor = (dsr: number): string => {
    if (dsr <= 40) return 'text-green-400'
    if (dsr <= 50) return 'text-yellow-400'
    if (dsr <= 60) return 'text-orange-400'
    if (dsr <= 70) return 'text-red-400'
    return 'text-red-600'
  }

  const getDSRStatus = (dsr: number): 'comfortable' | 'manageable' | 'tight' | 'highRisk' | 'critical' => {
    if (dsr <= 40) return 'comfortable'
    if (dsr <= 50) return 'manageable'
    if (dsr <= 60) return 'tight'
    if (dsr <= 70) return 'highRisk'
    return 'critical'
  }

  const getRecommendation = (status: string, newDSR: number): string => {
    const recKey = `rec_${status}` as keyof typeof t.loanCalculator.result
    let recommendation = t.loanCalculator.result[recKey] as string
    // Replace {{dsr}} placeholder
    recommendation = recommendation.replace(/\{\{dsr\}\}/g, formatPercentage(newDSR))
    return recommendation
  }

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()

    if (monthlyIncome <= 0) {
      alert(t.loanCalculator.input.monthlyIncome.help)
      return
    }

    if (proposedLoan <= 0) {
      alert(t.loanCalculator.input.proposedLoan.helper)
      return
    }

    const calculationResults = calculateAffordability(
      monthlyIncome,
      existingCommit,
      proposedLoan,
      loanRate,
      loanTenure
    )

    setResults(calculationResults)
    setShowResults(true)

    // Scroll to results
    setTimeout(() => {
      const resultsElement = document.getElementById('results-section')
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }, 100)
  }

  const handleReset = () => {
    setMonthlyIncome(5000)
    setExistingCommit(0)
    setMaxDSR(60)
    setProposedLoan(100000)
    setLoanRate(5.0)
    setLoanTenure(20)
    setResults(null)
    setShowResults(false)
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
              href="/tools"
              className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-mono text-sm uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tools
            </Link>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-primary mx-auto max-w-4xl text-balance text-5xl leading-tight tracking-wide md:text-7xl md:leading-tight md:tracking-wide lg:text-8xl lg:leading-tight lg:tracking-wide mb-4">
              {t.loanCalculator.header.title}
            </h1>
            <p className="text-secondary mx-auto max-w-3xl text-lg md:text-xl leading-relaxed mb-6">
              {t.loanCalculator.header.subtitle}
            </p>

            {/* Important Notice Box */}
            <div className="max-w-4xl mx-auto flex gap-4 p-6 bg-black border border-zinc-800 rounded-xl">
              <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <p className="text-secondary text-sm leading-relaxed">
                {t.loanCalculator.header.notice}
              </p>
            </div>
          </div>

          {/* Input Section */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8 md:p-12">
              <form onSubmit={handleCalculate} className="space-y-6">
                {/* Panel 1: Income & Commitments */}
                <div className="space-y-6 pb-6 border-b border-zinc-800">
                  <h3 className="text-xl font-semibold text-primary mb-4 uppercase tracking-widest font-mono text-sm">Income & Commitments</h3>

                  {/* Monthly Gross Income */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.loanCalculator.input.monthlyIncome.label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={monthlyIncome}
                        onChange={(e) => setMonthlyIncome(parseFloat(e.target.value) || 0)}
                        min="0"
                        step="100"
                        required
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                        placeholder={t.loanCalculator.input.monthlyIncome.placeholder}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                    <p className="mt-1 text-xs text-secondary">{t.loanCalculator.input.monthlyIncome.help}</p>
                  </div>

                  {/* Existing Monthly Commitments */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.loanCalculator.input.existingCommit.label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={existingCommit}
                        onChange={(e) => setExistingCommit(parseFloat(e.target.value) || 0)}
                        min="0"
                        step="100"
                        required
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                        placeholder={t.loanCalculator.input.existingCommit.placeholder}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                    <p className="mt-1 text-xs text-secondary">{t.loanCalculator.input.existingCommit.helper}</p>
                  </div>

                  {/* Maximum DSR */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.loanCalculator.input.maxDSR.label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={maxDSR}
                        onChange={(e) => setMaxDSR(parseFloat(e.target.value) || 60)}
                        min="0"
                        max="100"
                        step="5"
                        required
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">%</span>
                    </div>
                    <p className="mt-1 text-xs text-secondary">{t.loanCalculator.input.maxDSR.helper}</p>
                  </div>
                </div>

                {/* Panel 2: Loan Details */}
                <div className="space-y-6 pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-4 uppercase tracking-widest font-mono text-sm">Proposed Loan Details</h3>

                  {/* Proposed Loan Amount */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.loanCalculator.input.proposedLoan.label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={proposedLoan}
                        onChange={(e) => setProposedLoan(parseFloat(e.target.value) || 0)}
                        min="0"
                        step="1000"
                        required
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                        placeholder={t.loanCalculator.input.proposedLoan.placeholder}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                    <p className="mt-1 text-xs text-secondary">{t.loanCalculator.input.proposedLoan.helper}</p>
                  </div>

                  {/* Loan Interest Rate */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.loanCalculator.input.loanRate.label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={loanRate}
                        onChange={(e) => setLoanRate(parseFloat(e.target.value) || 0)}
                        min="0"
                        max="30"
                        step="0.1"
                        required
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">%</span>
                    </div>
                    <p className="mt-1 text-xs text-secondary">{t.loanCalculator.input.loanRate.helper}</p>
                  </div>

                  {/* Loan Tenure */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.loanCalculator.input.loanTenure.label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={loanTenure}
                        onChange={(e) => setLoanTenure(parseInt(e.target.value) || 1)}
                        min="1"
                        max="35"
                        step="1"
                        required
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono text-xs">years</span>
                    </div>
                    <p className="mt-1 text-xs text-secondary">{t.loanCalculator.input.loanTenure.helper}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-primary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-primary transition-all"
                  >
                    {t.loanCalculator.btn.calculate}
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all"
                  >
                    {t.loanCalculator.btn.reset}
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Results Section */}
          {showResults && results && (
            <section id="results-section" className="max-w-6xl mx-auto">
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">{t.loanCalculator.result.title}</h2>
                </div>

                {/* Before/After Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Current State */}
                  <div className="bg-black border border-zinc-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-primary mb-4">{t.loanCalculator.result.current_label}</h3>
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">
                          {t.loanCalculator.result.monthlyCommit}
                        </span>
                        <div className="text-2xl font-bold text-primary">{formatCurrency(existingCommit)}</div>
                      </div>
                      <div>
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">
                          {t.loanCalculator.result.currentDSR}
                        </span>
                        <div className={`text-2xl font-bold ${getDSRColor(results.currentDSR)}`}>
                          {formatPercentage(results.currentDSR)}
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-zinc-800">
                        <span className="text-xs font-mono text-primary">
                          {t.loanCalculator.dsr_status[getDSRStatus(results.currentDSR)]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* After New Loan */}
                  <div className="bg-black border border-zinc-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-primary mb-4">{t.loanCalculator.result.after_label}</h3>
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">
                          {t.loanCalculator.result.newLoanPayment}
                        </span>
                        <div className="text-2xl font-bold text-primary">{formatCurrency(results.newLoanMonthlyPayment)}</div>
                      </div>
                      <div>
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">
                          {t.loanCalculator.result.totalNewCommit}
                        </span>
                        <div className="text-2xl font-bold text-primary">
                          {formatCurrency(results.totalNewCommitment)}
                          {results.totalNewCommitment > existingCommit && (
                            <span className="ml-2 text-sm text-green-400 flex items-center gap-1">
                              <TrendingUp className="w-4 h-4" />
                              ↑ {formatCurrency(results.totalNewCommitment - existingCommit)}
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">
                          {t.loanCalculator.result.newDSR}
                        </span>
                        <div className={`text-2xl font-bold ${getDSRColor(results.newDSR)} flex items-center gap-2`}>
                          {formatPercentage(results.newDSR)}
                          {results.dsrIncrease > 0 && (
                            <span className="text-sm text-red-400 flex items-center gap-1">
                              <TrendingUp className="w-4 h-4" />
                              ↑ {formatPercentage(results.dsrIncrease)}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-zinc-800">
                        <span className="text-xs font-mono text-primary">
                          {t.loanCalculator.dsr_status[results.affordabilityStatus]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Loan Details Summary */}
                <div className="bg-black border border-zinc-800 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-primary mb-4 uppercase tracking-widest font-mono text-sm">Loan Details Summary</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div>
                      <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">
                        {t.loanCalculator.result.loanAmount}
                      </span>
                      <div className="text-lg font-bold text-primary">{formatCurrency(proposedLoan)}</div>
                    </div>
                    <div>
                      <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">
                        {t.loanCalculator.result.interestRate}
                      </span>
                      <div className="text-lg font-bold text-primary">{formatPercentage(loanRate, 1)}</div>
                    </div>
                    <div>
                      <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">
                        {t.loanCalculator.result.tenure}
                      </span>
                      <div className="text-lg font-bold text-primary">{loanTenure} {loanTenure === 1 ? 'year' : 'years'}</div>
                    </div>
                    <div>
                      <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">
                        {t.loanCalculator.result.monthlyInstalment}
                      </span>
                      <div className="text-lg font-bold text-primary">{formatCurrency(results.newLoanMonthlyPayment)}</div>
                    </div>
                    <div>
                      <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">
                        {t.loanCalculator.result.totalInterest}
                      </span>
                      <div className="text-lg font-bold text-primary">{formatCurrency(results.totalInterest)}</div>
                    </div>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-primary mb-4 uppercase tracking-widest font-mono text-sm">Key Findings & Recommendation</h3>
                  <p className="text-secondary leading-relaxed">
                    {getRecommendation(results.affordabilityStatus, results.newDSR)}
                  </p>
                </div>

                {/* Disclaimer */}
                <div className="flex gap-4 p-6 bg-black border border-zinc-800 rounded-lg mb-6">
                  <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-secondary leading-relaxed">
                    {t.loanCalculator.disclaimer}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/loan-optimizer"
                    className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-primary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-primary transition-all flex items-center justify-center gap-2"
                  >
                    {t.loanCalculator.btn.ctosOptimizer}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/tools"
                    className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
                  >
                    {t.loanCalculator.btn.exploreMore}
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
