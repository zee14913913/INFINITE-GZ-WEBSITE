'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowLeft, AlertCircle, ArrowRight, TrendingDown, TrendingUp } from 'lucide-react'

interface StrategyResult {
  homeLoan: {
    amount: number
    rate: number
    tenure: number
    monthlyPayment: number
    totalInterest: number
  }
  renoFinancing?: {
    type: string
    amount: number
    rate: number
    tenure: number
    monthlyPayment: number
    totalInterest: number
  }
  combined?: {
    amount: number
    rate: number
    tenure: number
    monthlyPayment: number
    totalInterest: number
  }
  totalMonthly: number
  totalInterest: number
  newDSR: number
  approvalOdds: number
}

export default function PropertyRenovationPlannerPage() {
  const { t } = useLanguage()
  
  // Property details
  const [propertyPrice, setPropertyPrice] = useState<number>(500000)
  const [downPayment, setDownPayment] = useState<number>(50000)
  
  // Renovation
  const [renoBudget, setRenoBudget] = useState<number>(50000)
  const [renoFinType, setRenoFinType] = useState<string>('topup')
  
  // Credit profile
  const [ctosScore, setCtosScore] = useState<number>(700)
  const [existingDebt, setExistingDebt] = useState<number>(0)
  const [income, setIncome] = useState<number>(10000)
  
  // Loan terms
  const [homeLoanTenure, setHomeLoanTenure] = useState<number>(25)
  const [homeRate, setHomeRate] = useState<number>(3.5)
  
  // Results
  const [results, setResults] = useState<{
    strategy1: StrategyResult
    strategy2: StrategyResult
    ltv: number
    downPaymentPercent: number
    totalToFinance: number
  } | null>(null)
  const [showResults, setShowResults] = useState(false)

  // Calculate monthly payment using amortization
  const calculateMonthlyPayment = (principal: number, annualRate: number, tenureYears: number): number => {
    if (principal <= 0) return 0
    
    const r = annualRate / 100 / 12
    const n = tenureYears * 12
    
    if (r === 0) {
      return principal / n
    }
    
    const numerator = r * Math.pow(1 + r, n)
    const denominator = Math.pow(1 + r, n) - 1
    return principal * (numerator / denominator)
  }

  // Calculate total interest
  const calculateTotalInterest = (monthlyPayment: number, tenureYears: number, principal: number): number => {
    return (monthlyPayment * tenureYears * 12) - principal
  }

  // Calculate approval odds
  const calculateApprovalOdds = (ltv: number, dsr: number, ctosScore: number, downPaymentPercent: number): number => {
    let odds = 50 // Baseline
    
    // LTV factor (max 25 points)
    if (ltv < 0.70) odds += 25
    else if (ltv < 0.80) odds += 20
    else if (ltv < 0.90) odds += 12
    else odds += 0
    
    // DSR factor (max 30 points)
    if (dsr < 0.50) odds += 30
    else if (dsr < 0.60) odds += 20
    else if (dsr < 0.70) odds += 10
    else odds += 0
    
    // CTOS factor (max 25 points)
    if (ctosScore >= 750) odds += 25
    else if (ctosScore >= 700) odds += 20
    else if (ctosScore >= 650) odds += 12
    else odds += 0
    
    // Down payment factor (max 20 points)
    if (downPaymentPercent >= 0.25) odds += 20
    else if (downPaymentPercent >= 0.20) odds += 18
    else if (downPaymentPercent >= 0.15) odds += 15
    else if (downPaymentPercent >= 0.10) odds += 12
    else odds += 0
    
    return Math.min(odds, 100)
  }

  // Strategy 1: Separate loans
  const calculateStrategy1 = (): StrategyResult => {
    const homeLoanAmount = propertyPrice - downPayment
    const homeMonthly = calculateMonthlyPayment(homeLoanAmount, homeRate, homeLoanTenure)
    const homeInterest = calculateTotalInterest(homeMonthly, homeLoanTenure, homeLoanAmount)
    
    // Renovation financing
    let renoRate = 3.5
    let renoTenure = 25
    
    if (renoFinType === 'personal') {
      renoRate = 10
      renoTenure = 7
    } else if (renoFinType === 'renoLoan') {
      renoRate = 7.5
      renoTenure = 15
    } else if (renoFinType === 'topup') {
      renoRate = homeRate
      renoTenure = homeLoanTenure
    }
    
    const renoMonthly = calculateMonthlyPayment(renoBudget, renoRate, renoTenure)
    const renoInterest = calculateTotalInterest(renoMonthly, renoTenure, renoBudget)
    
    const totalMonthly = homeMonthly + renoMonthly + existingDebt
    const newDSR = (totalMonthly / income) * 100
    const totalLoan = homeLoanAmount + renoBudget
    const ltv = totalLoan / propertyPrice
    const downPaymentPercent = downPayment / propertyPrice
    const approvalOdds = calculateApprovalOdds(ltv, newDSR / 100, ctosScore, downPaymentPercent)
    
    return {
      homeLoan: {
        amount: homeLoanAmount,
        rate: homeRate,
        tenure: homeLoanTenure,
        monthlyPayment: homeMonthly,
        totalInterest: homeInterest
      },
      renoFinancing: {
        type: renoFinType,
        amount: renoBudget,
        rate: renoRate,
        tenure: renoTenure,
        monthlyPayment: renoMonthly,
        totalInterest: renoInterest
      },
      totalMonthly,
      totalInterest: homeInterest + renoInterest,
      newDSR,
      approvalOdds
    }
  }

  // Strategy 2: Combined structure
  const calculateStrategy2 = (): StrategyResult => {
    const combinedAmount = (propertyPrice - downPayment) + renoBudget
    const combinedMonthly = calculateMonthlyPayment(combinedAmount, homeRate, homeLoanTenure)
    const combinedInterest = calculateTotalInterest(combinedMonthly, homeLoanTenure, combinedAmount)
    
    const totalMonthly = combinedMonthly + existingDebt
    const newDSR = (totalMonthly / income) * 100
    const ltv = combinedAmount / propertyPrice
    const downPaymentPercent = downPayment / propertyPrice
    const approvalOdds = calculateApprovalOdds(ltv, newDSR / 100, ctosScore, downPaymentPercent)
    
    return {
      homeLoan: {
        amount: propertyPrice - downPayment,
        rate: homeRate,
        tenure: homeLoanTenure,
        monthlyPayment: calculateMonthlyPayment(propertyPrice - downPayment, homeRate, homeLoanTenure),
        totalInterest: calculateTotalInterest(calculateMonthlyPayment(propertyPrice - downPayment, homeRate, homeLoanTenure), homeLoanTenure, propertyPrice - downPayment)
      },
      combined: {
        amount: combinedAmount,
        rate: homeRate,
        tenure: homeLoanTenure,
        monthlyPayment: combinedMonthly,
        totalInterest: combinedInterest
      },
      totalMonthly,
      totalInterest: combinedInterest,
      newDSR,
      approvalOdds
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

  const getLTVComment = (ltv: number): string => {
    if (ltv < 0.70) return 'Excellent – strong loan approval odds.'
    if (ltv < 0.80) return 'Good – favorable approval odds.'
    if (ltv < 0.90) return 'Acceptable – standard approval process.'
    return 'High – may require additional documentation or guarantor.'
  }

  const getDSRComment = (dsr: number): string => {
    if (dsr < 50) return 'Excellent – strong financial position.'
    if (dsr < 60) return 'Good – comfortable debt level.'
    return 'Caution – tight budget, may be flagged by banks.'
  }

  const getRenoFinTypeName = (type: string): string => {
    if (type === 'personal') return t.propertyRenovationPlanner.input.renoFinType_personal
    if (type === 'renoLoan') return t.propertyRenovationPlanner.input.renoFinType_renoLoan
    return t.propertyRenovationPlanner.input.renoFinType_topup
  }

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (propertyPrice <= 0 || downPayment < 0 || income <= 0) {
      alert('Please enter valid values')
      return
    }
    
    if (downPayment >= propertyPrice) {
      alert('Down payment cannot exceed property price')
      return
    }
    
    const strategy1 = calculateStrategy1()
    const strategy2 = calculateStrategy2()
    
    const totalToFinance = (propertyPrice - downPayment) + renoBudget
    const ltv = totalToFinance / propertyPrice
    const downPaymentPercent = downPayment / propertyPrice
    
    setResults({
      strategy1,
      strategy2,
      ltv,
      downPaymentPercent,
      totalToFinance
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
    setPropertyPrice(500000)
    setDownPayment(50000)
    setRenoBudget(50000)
    setRenoFinType('topup')
    setCtosScore(700)
    setExistingDebt(0)
    setIncome(10000)
    setHomeLoanTenure(25)
    setHomeRate(3.5)
    setResults(null)
    setShowResults(false)
  }

  const getRecommendation = (): string => {
    if (!results) return ''
    
    const strategy1 = results.strategy1
    const strategy2 = results.strategy2
    
    // Determine best strategy
    let bestStrategy = 1
    let reason = ''
    let savingsReason = ''
    
    if (strategy1.totalInterest < strategy2.totalInterest) {
      bestStrategy = 1
      reason = 'Strategy 1 allows you to pay lower interest on the renovation portion'
      const interestSaving = strategy2.totalInterest - strategy1.totalInterest
      savingsReason = `you save approximately ${formatCurrency(interestSaving)} in total interest`
    } else if (strategy2.totalMonthly < strategy1.totalMonthly) {
      bestStrategy = 2
      reason = 'Strategy 2 simplifies to a single monthly payment and improves your DSR'
      savingsReason = `your monthly payment is ${formatCurrency(strategy1.totalMonthly - strategy2.totalMonthly)} lower`
    } else {
      bestStrategy = 1
      reason = 'Strategy 1 provides more flexibility with separate loans'
      savingsReason = 'both strategies have similar costs'
    }
    
    const avgOdds = Math.round((strategy1.approvalOdds + strategy2.approvalOdds) / 2)
    
    let recommendation = t.propertyRenovationPlanner.result.recommendation
    recommendation = recommendation.replace(/\{\{bestStrategy\}\}/g, bestStrategy.toString())
    recommendation = recommendation.replace(/\{\{reason\}\}/g, reason)
    recommendation = recommendation.replace(/\{\{odds\}\}/g, avgOdds.toString())
    recommendation = recommendation.replace(/\{\{savingsReason\}\}/g, savingsReason)
    
    return recommendation
  }

  const downPaymentPercent = propertyPrice > 0 ? (downPayment / propertyPrice) * 100 : 0

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
              {t.propertyRenovationPlanner.header.title}
            </h1>
            <p className="text-secondary mx-auto max-w-3xl text-lg md:text-xl leading-relaxed mb-6">
              {t.propertyRenovationPlanner.header.subtitle}
            </p>
            
            {/* Notice Box */}
            <div className="max-w-4xl mx-auto p-6 bg-blue-900/20 border border-blue-800/50 rounded-xl">
              <p className="text-blue-200 text-sm leading-relaxed">
                {t.propertyRenovationPlanner.header.notice}
              </p>
            </div>
          </div>

          {/* Input Section */}
          <section className="max-w-6xl mx-auto mb-16">
            <form onSubmit={handleCalculate} className="space-y-8">
              {/* Panel 1: Property Details */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                  Property Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.propertyRenovationPlanner.input.propertyPrice_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={propertyPrice || ''}
                        onChange={(e) => setPropertyPrice(parseFloat(e.target.value) || 0)}
                        min="0"
                        step="1000"
                        required
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.propertyRenovationPlanner.input.downPayment_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={downPayment || ''}
                        onChange={(e) => setDownPayment(parseFloat(e.target.value) || 0)}
                        min="0"
                        step="1000"
                        required
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                    <p className="mt-1 text-xs text-secondary">{t.propertyRenovationPlanner.input.downPayment_helper}</p>
                    {propertyPrice > 0 && (
                      <p className="mt-1 text-xs text-primary">
                        You are putting {formatPercentage(downPaymentPercent, 1)} down.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Panel 2: Renovation Budget */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                  Renovation Budget
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.propertyRenovationPlanner.input.renoBudget_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={renoBudget || ''}
                        onChange={(e) => setRenoBudget(parseFloat(e.target.value) || 0)}
                        min="0"
                        step="1000"
                        required
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-4 text-primary">
                      {t.propertyRenovationPlanner.input.renoFinType_label}
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3 p-4 border border-zinc-800 rounded-lg hover:border-zinc-700 cursor-pointer">
                        <input
                          type="radio"
                          name="renoFinType"
                          value="personal"
                          checked={renoFinType === 'personal'}
                          onChange={(e) => setRenoFinType(e.target.value)}
                          className="mt-1"
                        />
                        <span className="text-secondary text-sm">{t.propertyRenovationPlanner.input.renoFinType_personal}</span>
                      </label>
                      <label className="flex items-start gap-3 p-4 border border-zinc-800 rounded-lg hover:border-zinc-700 cursor-pointer">
                        <input
                          type="radio"
                          name="renoFinType"
                          value="renoLoan"
                          checked={renoFinType === 'renoLoan'}
                          onChange={(e) => setRenoFinType(e.target.value)}
                          className="mt-1"
                        />
                        <span className="text-secondary text-sm">{t.propertyRenovationPlanner.input.renoFinType_renoLoan}</span>
                      </label>
                      <label className="flex items-start gap-3 p-4 border border-zinc-800 rounded-lg hover:border-zinc-700 cursor-pointer">
                        <input
                          type="radio"
                          name="renoFinType"
                          value="topup"
                          checked={renoFinType === 'topup'}
                          onChange={(e) => setRenoFinType(e.target.value)}
                          className="mt-1"
                        />
                        <span className="text-secondary text-sm">{t.propertyRenovationPlanner.input.renoFinType_topup}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 3: Credit Profile */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                  Credit Profile (Optional but Recommended)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.propertyRenovationPlanner.input.ctosScore_label}
                    </label>
                    <input
                      type="number"
                      value={ctosScore || ''}
                      onChange={(e) => setCtosScore(parseInt(e.target.value) || 0)}
                      min="0"
                      max="1000"
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.propertyRenovationPlanner.input.existingDebt_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={existingDebt || ''}
                        onChange={(e) => setExistingDebt(parseFloat(e.target.value) || 0)}
                        min="0"
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                    <p className="mt-1 text-xs text-secondary">{t.propertyRenovationPlanner.input.existingDebt_helper}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.propertyRenovationPlanner.input.income_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={income || ''}
                        onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
                        min="0"
                        required
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 4: Loan Terms */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                  Loan Terms Preferences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.propertyRenovationPlanner.input.homeLoanTenure_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={homeLoanTenure || ''}
                        onChange={(e) => setHomeLoanTenure(parseInt(e.target.value) || 25)}
                        min="15"
                        max="35"
                        required
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono text-xs">years</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.propertyRenovationPlanner.input.homeRate_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={homeRate || ''}
                        onChange={(e) => setHomeRate(parseFloat(e.target.value) || 3.5)}
                        min="0"
                        max="10"
                        step="0.1"
                        required
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">%</span>
                    </div>
                    <p className="mt-1 text-xs text-secondary">{t.propertyRenovationPlanner.input.homeRate_helper}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-primary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-primary transition-all"
                >
                  {t.propertyRenovationPlanner.btn.calculate}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all"
                >
                  {t.propertyRenovationPlanner.btn.reset}
                </button>
              </div>
            </form>
          </section>

          {/* Results Section */}
          {showResults && results && (
            <section id="results-section" className="max-w-6xl mx-auto">
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">{t.propertyRenovationPlanner.result.title}</h2>
                </div>

                {/* Summary Card */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                  <div className="bg-black border border-zinc-800 rounded-xl p-4">
                    <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Property Price</span>
                    <div className="text-lg font-bold text-primary">{formatCurrency(propertyPrice)}</div>
                  </div>
                  <div className="bg-black border border-zinc-800 rounded-xl p-4">
                    <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Down Payment</span>
                    <div className="text-lg font-bold text-primary">{formatCurrency(downPayment)}</div>
                    <div className="text-xs text-secondary mt-1">{formatPercentage(results.downPaymentPercent * 100, 1)}</div>
                  </div>
                  <div className="bg-black border border-zinc-800 rounded-xl p-4">
                    <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">LTV</span>
                    <div className="text-lg font-bold text-primary">{formatPercentage(results.ltv * 100, 1)}</div>
                  </div>
                  <div className="bg-black border border-zinc-800 rounded-xl p-4">
                    <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Total to Finance</span>
                    <div className="text-lg font-bold text-primary">{formatCurrency(results.totalToFinance)}</div>
                  </div>
                  <div className="bg-black border border-zinc-800 rounded-xl p-4">
                    <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Approval Odds</span>
                    <div className="text-lg font-bold text-primary">{formatPercentage((results.strategy1.approvalOdds + results.strategy2.approvalOdds) / 2, 0)}</div>
                  </div>
                </div>

                {/* Strategy Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Strategy 1 */}
                  <div className="bg-black border border-zinc-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-primary mb-4">{t.propertyRenovationPlanner.result.strategy1_name}</h3>
                    
                    <div className="space-y-4 mb-4">
                      <div>
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Home Loan</span>
                        <div className="text-sm text-primary space-y-1">
                          <div>Amount: {formatCurrency(results.strategy1.homeLoan.amount)}</div>
                          <div>Rate: {formatPercentage(results.strategy1.homeLoan.rate, 1)} p.a.</div>
                          <div>Tenure: {results.strategy1.homeLoan.tenure} years</div>
                          <div>Monthly: {formatCurrency(results.strategy1.homeLoan.monthlyPayment)}</div>
                          <div>Total Interest: {formatCurrency(results.strategy1.homeLoan.totalInterest)}</div>
                        </div>
                      </div>
                      
                      {results.strategy1.renoFinancing && (
                        <div>
                          <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Renovation Financing</span>
                          <div className="text-sm text-primary space-y-1">
                            <div>Type: {getRenoFinTypeName(results.strategy1.renoFinancing.type)}</div>
                            <div>Amount: {formatCurrency(results.strategy1.renoFinancing.amount)}</div>
                            <div>Rate: {formatPercentage(results.strategy1.renoFinancing.rate, 1)} p.a.</div>
                            <div>Tenure: {results.strategy1.renoFinancing.tenure} years</div>
                            <div>Monthly: {formatCurrency(results.strategy1.renoFinancing.monthlyPayment)}</div>
                            <div>Total Interest: {formatCurrency(results.strategy1.renoFinancing.totalInterest)}</div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="border-t border-zinc-800 pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono">Total Monthly</span>
                        <span className="text-primary font-mono font-bold">{formatCurrency(results.strategy1.totalMonthly)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono">Total Interest</span>
                        <span className="text-primary font-mono">{formatCurrency(results.strategy1.totalInterest)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono">New DSR</span>
                        <span className="text-primary font-mono">{formatPercentage(results.strategy1.newDSR, 1)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono">Approval Odds</span>
                        <span className="text-primary font-mono">{formatPercentage(results.strategy1.approvalOdds, 0)}</span>
                      </div>
                    </div>
                    <p className="text-xs text-secondary mt-4">{t.propertyRenovationPlanner.result.strategy1_note}</p>
                  </div>

                  {/* Strategy 2 */}
                  <div className="bg-black border border-zinc-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-primary mb-4">{t.propertyRenovationPlanner.result.strategy2_name}</h3>
                    
                    {results.strategy2.combined && (
                      <div className="space-y-4 mb-4">
                        <div>
                          <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Combined Loan</span>
                          <div className="text-sm text-primary space-y-1">
                            <div>Amount: {formatCurrency(results.strategy2.combined.amount)}</div>
                            <div>Rate: {formatPercentage(results.strategy2.combined.rate, 1)} p.a.</div>
                            <div>Tenure: {results.strategy2.combined.tenure} years</div>
                            <div>Monthly: {formatCurrency(results.strategy2.combined.monthlyPayment)}</div>
                            <div>Total Interest: {formatCurrency(results.strategy2.combined.totalInterest)}</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="border-t border-zinc-800 pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono">Total Monthly</span>
                        <span className="text-primary font-mono font-bold">{formatCurrency(results.strategy2.totalMonthly)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono">Total Interest</span>
                        <span className="text-primary font-mono">{formatCurrency(results.strategy2.totalInterest)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono">New DSR</span>
                        <span className="text-primary font-mono">{formatPercentage(results.strategy2.newDSR, 1)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono">Approval Odds</span>
                        <span className="text-primary font-mono">{formatPercentage(results.strategy2.approvalOdds, 0)}</span>
                      </div>
                    </div>
                    <p className="text-xs text-secondary mt-4">{t.propertyRenovationPlanner.result.strategy2_note}</p>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-primary mb-4">Recommendation</h3>
                  <p className="text-secondary leading-relaxed mb-4">
                    {getRecommendation()}
                  </p>
                </div>

                {/* Additional Considerations */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-primary mb-4">Important Considerations</h3>
                  <div className="space-y-3 text-sm text-secondary">
                    <p>
                      <strong className="text-primary">LTV Status:</strong> Your LTV is {formatPercentage(results.ltv * 100, 1)}. {getLTVComment(results.ltv)}
                    </p>
                    <p>
                      <strong className="text-primary">DSR Status:</strong> Your DSR with the new loans will be {formatPercentage((results.strategy1.newDSR + results.strategy2.newDSR) / 2, 1)}%. {getDSRComment((results.strategy1.newDSR + results.strategy2.newDSR) / 2)}
                    </p>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="flex gap-4 p-6 bg-black border border-zinc-800 rounded-lg mb-6">
                  <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-secondary leading-relaxed">
                    {t.propertyRenovationPlanner.disclaimer}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/60123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-primary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-primary transition-all flex items-center justify-center gap-2"
                  >
                    {t.propertyRenovationPlanner.btn.contactAdvisor}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/tools"
                    className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
                  >
                    {t.propertyRenovationPlanner.btn.tools}
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

