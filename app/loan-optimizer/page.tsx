'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowLeft, Upload, Plus, Trash2, FileText, TrendingDown, TrendingUp, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react'

interface LoanRow {
  id: string
  type: string
  bank: string
  outstanding: number
  rate: number
  tenure: number
  payment: number
}

interface AnalysisResult {
  currentTotalMonthly: number
  currentDSR: number
  currentTotalOutstanding: number
  currentApprovalOdds: number
  creditHealthScore: number
  creditHealthStatus: 'excellent' | 'good' | 'fair' | 'poor'
  optimizedTotalMonthly: number
  optimizedDSR: number
  consolidatedMonthly: number
  consolidationAmount: number
  optimizedApprovalOdds: number
  monthlySavings: number
  dsrImprovement: number
  approvalOddsImprovement: number
  consolidatedTotalInterest: number
  securedLoans: LoanRow[]
  unsecuredLoans: LoanRow[]
  creditHealthBreakdown: {
    dsrPts: number
    ctosPts: number
    repayPts: number
    empPts: number
    agePts: number
  }
}

export default function LoanOptimizerPage() {
  const { t } = useLanguage()
  
  // Primary concern
  const [concern, setConcern] = useState<string>('')
  
  // CTOS upload
  const [ctosFile, setCtosFile] = useState<File | null>(null)
  
  // Credit profile
  const [creditScore, setCreditScore] = useState<number>(0)
  const [repaymentBehaviour, setRepaymentBehaviour] = useState<string>('')
  const [employment, setEmployment] = useState<string>('')
  const [sector, setSector] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const [savings, setSavings] = useState<number>(0)
  
  // Income & constraints
  const [monthlyIncome, setMonthlyIncome] = useState<number>(5000)
  const [otherCommit, setOtherCommit] = useState<number>(0)
  const [targetDSR, setTargetDSR] = useState<number>(50)
  
  // Loans table
  const [loans, setLoans] = useState<LoanRow[]>([
    { id: '1', type: 'creditCard', bank: '', outstanding: 0, rate: 18, tenure: 0, payment: 0 }
  ])
  
  // Results
  const [results, setResults] = useState<AnalysisResult | null>(null)
  const [showResults, setShowResults] = useState(false)

  const handleAddLoan = () => {
    setLoans([...loans, {
      id: Date.now().toString(),
      type: 'creditCard',
      bank: '',
      outstanding: 0,
      rate: 18,
      tenure: 0,
      payment: 0
    }])
  }

  const handleDeleteLoan = (id: string) => {
    if (loans.length > 1) {
      setLoans(loans.filter(l => l.id !== id))
    }
  }

  const handleLoanChange = (id: string, field: keyof LoanRow, value: any) => {
    setLoans(loans.map(l => l.id === id ? { ...l, [field]: value } : l))
  }

  const analyzeOptimization = (): AnalysisResult => {
    // 1. CURRENT STATE
    let currentTotalMonthly = otherCommit
    let currentTotalOutstanding = 0
    let unsecuredOutstanding = 0
    let securedOutstanding = 0
    
    loans.forEach(loan => {
      currentTotalMonthly += loan.payment
      currentTotalOutstanding += loan.outstanding
      
      if (['creditCard', 'personal', 'overdraft', 'business'].includes(loan.type)) {
        unsecuredOutstanding += loan.outstanding
      } else {
        securedOutstanding += loan.outstanding
      }
    })
    
    const currentDSR = (currentTotalMonthly / monthlyIncome) * 100
    
    // 2. CREDIT HEALTH ASSESSMENT
    let creditHealthScore = 50
    
    // DSR score (30 points)
    let dsrScore = 0
    const dsrRatio = currentDSR / 100
    if (dsrRatio < 0.30) dsrScore = 30
    else if (dsrRatio < 0.40) dsrScore = 28
    else if (dsrRatio < 0.50) dsrScore = 25
    else if (dsrRatio < 0.60) dsrScore = 20
    else if (dsrRatio < 0.70) dsrScore = 12
    else dsrScore = 0
    creditHealthScore += dsrScore
    
    // CTOS score (25 points)
    let ctosScore = 0
    if (creditScore >= 800) ctosScore = 25
    else if (creditScore >= 650) ctosScore = 20
    else if (creditScore >= 500) ctosScore = 12
    else ctosScore = 0
    creditHealthScore += ctosScore
    
    // Repayment behaviour (20 points)
    let repayScore = 0
    if (repaymentBehaviour === 'excellent') repayScore = 20
    else if (repaymentBehaviour === 'good') repayScore = 15
    else if (repaymentBehaviour === 'fair') repayScore = 8
    else repayScore = 0
    creditHealthScore += repayScore
    
    // Employment stability (15 points)
    let empScore = 0
    if (employment === 'govt') empScore = 15
    else if (employment === 'private') empScore = 12
    else if (employment === 'self') empScore = 8
    else if (employment === 'parttime') empScore = 4
    else empScore = 0
    creditHealthScore += empScore
    
    // Age (10 points)
    let ageScore = 0
    if (age >= 30 && age <= 55) ageScore = 10
    else if ((age >= 25 && age < 30) || (age > 55 && age <= 65)) ageScore = 7
    else ageScore = 0
    creditHealthScore += ageScore
    
    // Determine status
    let creditHealthStatus: 'excellent' | 'good' | 'fair' | 'poor'
    if (creditHealthScore >= 85) creditHealthStatus = 'excellent'
    else if (creditHealthScore >= 70) creditHealthStatus = 'good'
    else if (creditHealthScore >= 50) creditHealthStatus = 'fair'
    else creditHealthStatus = 'poor'
    
    // 3. APPROVAL ODDS (Before)
    let approvalOdds = 0
    if (dsrRatio < 0.50) approvalOdds += 40
    else if (dsrRatio < 0.60) approvalOdds += 25
    else if (dsrRatio < 0.70) approvalOdds += 10
    
    if (creditHealthStatus === 'excellent') approvalOdds += 35
    else if (creditHealthStatus === 'good') approvalOdds += 25
    else if (creditHealthStatus === 'fair') approvalOdds += 12
    
    const stabilityScore = (empScore + ageScore) / 2
    if (stabilityScore >= 12) approvalOdds += 25
    else if (stabilityScore >= 8) approvalOdds += 15
    else if (stabilityScore >= 4) approvalOdds += 8
    
    approvalOdds = Math.min(approvalOdds, 100)
    
    // 4. OPTIMIZED STATE
    const consolidationRate = 7
    const consolidationTenure = 7
    const consolidationAmount = unsecuredOutstanding
    
    let consolidatedMonthly = 0
    if (consolidationAmount > 0) {
      const monthlyRate = consolidationRate / 100 / 12
      const numMonths = consolidationTenure * 12
      const numerator = monthlyRate * Math.pow(1 + monthlyRate, numMonths)
      const denominator = Math.pow(1 + monthlyRate, numMonths) - 1
      consolidatedMonthly = consolidationAmount * (numerator / denominator)
    }
    
    let securedMonthly = 0
    loans.forEach(loan => {
      if (['housing', 'car'].includes(loan.type)) {
        securedMonthly += loan.payment
      }
    })
    
    const optimizedTotalMonthly = otherCommit + securedMonthly + consolidatedMonthly
    const optimizedDSR = (optimizedTotalMonthly / monthlyIncome) * 100
    
    // Recalculate approval odds after
    let optimizedApprovalOdds = 0
    const optimizedDSRRatio = optimizedDSR / 100
    if (optimizedDSRRatio < 0.50) optimizedApprovalOdds += 40
    else if (optimizedDSRRatio < 0.60) optimizedApprovalOdds += 25
    else if (optimizedDSRRatio < 0.70) optimizedApprovalOdds += 10
    
    optimizedApprovalOdds += (creditHealthScore / 100 * 35)
    optimizedApprovalOdds += (stabilityScore / 20 * 25)
    optimizedApprovalOdds = Math.min(optimizedApprovalOdds, 100)
    
    // 5. SAVINGS
    const consolidatedTotalInterest = (consolidatedMonthly * consolidationTenure * 12) - consolidationAmount
    const monthlySavings = currentTotalMonthly - optimizedTotalMonthly
    
    return {
      currentTotalMonthly,
      currentDSR,
      currentTotalOutstanding,
      currentApprovalOdds: approvalOdds,
      creditHealthScore,
      creditHealthStatus,
      optimizedTotalMonthly,
      optimizedDSR,
      consolidatedMonthly,
      consolidationAmount,
      optimizedApprovalOdds,
      monthlySavings,
      dsrImprovement: currentDSR - optimizedDSR,
      approvalOddsImprovement: optimizedApprovalOdds - approvalOdds,
      consolidatedTotalInterest,
      securedLoans: loans.filter(l => ['housing', 'car'].includes(l.type)),
      unsecuredLoans: loans.filter(l => ['creditCard', 'personal', 'overdraft', 'business'].includes(l.type)),
      creditHealthBreakdown: {
        dsrPts: dsrScore,
        ctosPts: ctosScore,
        repayPts: repayScore,
        empPts: empScore,
        agePts: ageScore
      }
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

  const getRecommendation = (concern: string, result: AnalysisResult): string => {
    const recKey = `rec_${concern}` as keyof typeof t.loanOptimizer.result
    let recommendation = t.loanOptimizer.result[recKey] as string
    
    // Replace placeholders
    recommendation = recommendation.replace(/\{\{count\}\}/g, result.unsecuredLoans.length.toString())
    recommendation = recommendation.replace(/\{\{current\}\}/g, formatCurrency(result.currentTotalMonthly))
    recommendation = recommendation.replace(/\{\{optimized\}\}/g, formatCurrency(result.optimizedTotalMonthly))
    recommendation = recommendation.replace(/\{\{savings\}\}/g, formatCurrency(result.monthlySavings))
    recommendation = recommendation.replace(/\{\{currentDSR\}\}/g, formatPercentage(result.currentDSR))
    recommendation = recommendation.replace(/\{\{optimizedDSR\}\}/g, formatPercentage(result.optimizedDSR))
    recommendation = recommendation.replace(/\{\{currentOdds\}\}/g, formatPercentage(result.currentApprovalOdds))
    recommendation = recommendation.replace(/\{\{optimizedOdds\}\}/g, formatPercentage(result.optimizedApprovalOdds))
    recommendation = recommendation.replace(/\{\{totalInterestSaved\}\}/g, formatCurrency(result.consolidatedTotalInterest))
    recommendation = recommendation.replace(/\{\{consolidationTenure\}\}/g, '7')
    
    // Calculate weighted average rate for unsecured loans
    let totalInterest = 0
    let totalOutstanding = 0
    result.unsecuredLoans.forEach(loan => {
      totalInterest += loan.outstanding * loan.rate / 100
      totalOutstanding += loan.outstanding
    })
    const weightedRate = totalOutstanding > 0 ? (totalInterest / totalOutstanding) * 100 : 0
    recommendation = recommendation.replace(/\{\{currentWeightedRate\}\}/g, formatPercentage(weightedRate, 1))
    
    // Estimate months to pay off (rough calculation)
    const monthsToPayOff = result.consolidationAmount > 0 && result.monthlySavings > 0
      ? Math.ceil(result.consolidationAmount / (result.consolidatedMonthly + result.monthlySavings))
      : 84
    recommendation = recommendation.replace(/\{\{months\}\}/g, monthsToPayOff.toString())
    
    return recommendation
  }

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (monthlyIncome <= 0) {
      alert('Please enter a valid monthly income')
      return
    }
    
    if (loans.length === 0 || loans.every(l => l.outstanding === 0)) {
      alert('Please enter at least one loan')
      return
    }
    
    const analysisResults = analyzeOptimization()
    setResults(analysisResults)
    setShowResults(true)
    
    setTimeout(() => {
      const resultsElement = document.getElementById('results-section')
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }, 100)
  }

  const handleReset = () => {
    setConcern('')
    setCtosFile(null)
    setCreditScore(0)
    setRepaymentBehaviour('')
    setEmployment('')
    setSector('')
    setAge(0)
    setSavings(0)
    setMonthlyIncome(5000)
    setOtherCommit(0)
    setTargetDSR(50)
    setLoans([{ id: '1', type: 'creditCard', bank: '', outstanding: 0, rate: 18, tenure: 0, payment: 0 }])
    setResults(null)
    setShowResults(false)
  }

  const getDSRColor = (dsr: number): string => {
    if (dsr <= 40) return 'text-green-400'
    if (dsr <= 50) return 'text-yellow-400'
    if (dsr <= 60) return 'text-orange-400'
    if (dsr <= 70) return 'text-red-400'
    return 'text-red-600'
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
              {t.loanOptimizer.header.title}
            </h1>
            <p className="text-secondary mx-auto max-w-3xl text-lg md:text-xl leading-relaxed mb-6">
              {t.loanOptimizer.header.subtitle}
            </p>
            
            {/* Important Notice Box */}
            <div className="max-w-4xl mx-auto p-6 bg-blue-900/20 border border-blue-800/50 rounded-xl">
              <p className="text-blue-200 text-sm leading-relaxed">
                {t.loanOptimizer.header.notice}
              </p>
            </div>
          </div>

          {/* Input Section */}
          <section className="max-w-6xl mx-auto mb-16">
            <form onSubmit={handleAnalyze} className="space-y-8">
              {/* Panel 1: Primary Concern */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-4 uppercase tracking-widest font-mono text-sm">
                  Primary Concern
                </h3>
                <label className="block text-sm font-medium mb-4 text-primary">
                  {t.loanOptimizer.input.concern_label}
                </label>
                <div className="space-y-3">
                  {['a', 'b', 'c', 'd', 'e'].map(opt => (
                    <label key={opt} className="flex items-start gap-3 p-4 border border-zinc-800 rounded-lg hover:border-zinc-700 cursor-pointer">
                      <input
                        type="radio"
                        name="concern"
                        value={opt}
                        checked={concern === opt}
                        onChange={(e) => setConcern(e.target.value)}
                        className="mt-1"
                      />
                      <span className="text-secondary">{t.loanOptimizer.input[`concern_${opt}` as keyof typeof t.loanOptimizer.input]}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Panel 2: CTOS Upload */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-4 uppercase tracking-widest font-mono text-sm">
                  {t.loanOptimizer.input.ctos_label}
                </h3>
                <p className="text-xs text-secondary mb-4">{t.loanOptimizer.input.ctos_helper}</p>
                <div className="border-2 border-dashed border-zinc-800 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => setCtosFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="ctos-upload"
                  />
                  <label htmlFor="ctos-upload" className="cursor-pointer flex flex-col items-center gap-2">
                    <Upload className="w-8 h-8 text-secondary" />
                    <span className="text-sm text-secondary">
                      {ctosFile ? ctosFile.name : 'Click to upload CTOS report'}
                    </span>
                  </label>
                </div>
              </div>

              {/* Panel 3: Credit Profile */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                  Credit Profile & Demographics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.loanOptimizer.input.creditScore_label}
                    </label>
                    <input
                      type="number"
                      value={creditScore || ''}
                      onChange={(e) => setCreditScore(parseInt(e.target.value) || 0)}
                      min="0"
                      max="1000"
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                    />
                    <p className="mt-1 text-xs text-secondary">{t.loanOptimizer.input.creditScore_helper}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.loanOptimizer.input.repaymentBehaviour_label}
                    </label>
                    <select
                      value={repaymentBehaviour}
                      onChange={(e) => setRepaymentBehaviour(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="excellent">{t.loanOptimizer.input.repayment_excellent}</option>
                      <option value="good">{t.loanOptimizer.input.repayment_good}</option>
                      <option value="fair">{t.loanOptimizer.input.repayment_fair}</option>
                      <option value="poor">{t.loanOptimizer.input.repayment_poor}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.loanOptimizer.input.employment_label}
                    </label>
                    <select
                      value={employment}
                      onChange={(e) => setEmployment(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="private">{t.loanOptimizer.input.employment_private}</option>
                      <option value="govt">{t.loanOptimizer.input.employment_govt}</option>
                      <option value="self">{t.loanOptimizer.input.employment_self}</option>
                      <option value="parttime">{t.loanOptimizer.input.employment_parttime}</option>
                      <option value="retired">{t.loanOptimizer.input.employment_retired}</option>
                      <option value="unemployed">{t.loanOptimizer.input.employment_unemployed}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.loanOptimizer.input.sector_label}
                    </label>
                    <input
                      type="text"
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      placeholder="e.g. IT, Finance, Manufacturing"
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                    />
                    <p className="mt-1 text-xs text-secondary">{t.loanOptimizer.input.sector_helper}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.loanOptimizer.input.age_label}
                    </label>
                    <input
                      type="number"
                      value={age || ''}
                      onChange={(e) => setAge(parseInt(e.target.value) || 0)}
                      min="18"
                      max="120"
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.loanOptimizer.input.savings_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={savings || ''}
                        onChange={(e) => setSavings(parseFloat(e.target.value) || 0)}
                        min="0"
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                    <p className="mt-1 text-xs text-secondary">{t.loanOptimizer.input.savings_helper}</p>
                  </div>
                </div>
              </div>

              {/* Panel 4: Manual Loan Entry */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-primary uppercase tracking-widest font-mono text-sm">
                    Loan Details
                  </h3>
                  <button
                    type="button"
                    onClick={handleAddLoan}
                    className="flex items-center gap-2 px-4 py-2 border border-zinc-800 rounded-lg text-secondary hover:border-zinc-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    {t.loanOptimizer.btn.addLoan}
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.loanOptimizer.table.type}</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.loanOptimizer.table.bank}</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.loanOptimizer.table.outstanding}</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.loanOptimizer.table.rate}</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.loanOptimizer.table.tenure}</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.loanOptimizer.table.payment}</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.loanOptimizer.table.action}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loans.map(loan => (
                        <tr key={loan.id} className="border-b border-zinc-800">
                          <td className="py-3 px-4">
                            <select
                              value={loan.type}
                              onChange={(e) => handleLoanChange(loan.id, 'type', e.target.value)}
                              className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary text-sm focus:outline-none focus:border-primary"
                            >
                              <option value="housing">{t.loanOptimizer.loanType.housing}</option>
                              <option value="car">{t.loanOptimizer.loanType.car}</option>
                              <option value="personal">{t.loanOptimizer.loanType.personal}</option>
                              <option value="creditCard">{t.loanOptimizer.loanType.creditCard}</option>
                              <option value="overdraft">{t.loanOptimizer.loanType.overdraft}</option>
                              <option value="business">{t.loanOptimizer.loanType.business}</option>
                              <option value="others">{t.loanOptimizer.loanType.others}</option>
                            </select>
                          </td>
                          <td className="py-3 px-4">
                            <input
                              type="text"
                              value={loan.bank}
                              onChange={(e) => handleLoanChange(loan.id, 'bank', e.target.value)}
                              placeholder="Bank name"
                              className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary text-sm focus:outline-none focus:border-primary"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <input
                              type="number"
                              value={loan.outstanding || ''}
                              onChange={(e) => handleLoanChange(loan.id, 'outstanding', parseFloat(e.target.value) || 0)}
                              min="0"
                              className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary text-sm font-mono focus:outline-none focus:border-primary"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <input
                              type="number"
                              value={loan.rate || ''}
                              onChange={(e) => handleLoanChange(loan.id, 'rate', parseFloat(e.target.value) || 0)}
                              min="0"
                              max="30"
                              step="0.1"
                              className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary text-sm font-mono focus:outline-none focus:border-primary"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <input
                              type="number"
                              value={loan.tenure || ''}
                              onChange={(e) => handleLoanChange(loan.id, 'tenure', parseInt(e.target.value) || 0)}
                              min="0"
                              max="35"
                              className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary text-sm font-mono focus:outline-none focus:border-primary"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <input
                              type="number"
                              value={loan.payment || ''}
                              onChange={(e) => handleLoanChange(loan.id, 'payment', parseFloat(e.target.value) || 0)}
                              min="0"
                              className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary text-sm font-mono focus:outline-none focus:border-primary"
                            />
                          </td>
                          <td className="py-3 px-4">
                            {loans.length > 1 && (
                              <button
                                type="button"
                                onClick={() => handleDeleteLoan(loan.id)}
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

              {/* Panel 5: Income & Constraints */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                  Income & Constraints
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.loanOptimizer.input.income_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={monthlyIncome || ''}
                        onChange={(e) => setMonthlyIncome(parseFloat(e.target.value) || 0)}
                        min="0"
                        required
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.loanOptimizer.input.otherCommit_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={otherCommit || ''}
                        onChange={(e) => setOtherCommit(parseFloat(e.target.value) || 0)}
                        min="0"
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.loanOptimizer.input.targetDSR_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={targetDSR || ''}
                        onChange={(e) => setTargetDSR(parseFloat(e.target.value) || 50)}
                        min="0"
                        max="100"
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">%</span>
                    </div>
                    <p className="mt-1 text-xs text-secondary">{t.loanOptimizer.input.targetDSR_helper}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-primary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-primary transition-all"
                >
                  {t.loanOptimizer.btn.analyze}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all"
                >
                  {t.loanOptimizer.btn.reset}
                </button>
              </div>
            </form>
          </section>

          {/* Results Section */}
          {showResults && results && (
            <section id="results-section" className="max-w-6xl mx-auto">
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">{t.loanOptimizer.result.title}</h2>
                </div>

                {/* Before/After Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Current State */}
                  <div className="bg-black border border-zinc-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-primary mb-4">{t.loanOptimizer.result.current_label}</h3>
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">DSR</span>
                        <div className={`text-2xl font-bold ${getDSRColor(results.currentDSR)}`}>
                          {formatPercentage(results.currentDSR)}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Credit Health</span>
                        <div className="text-lg font-bold text-primary">
                          {results.creditHealthStatus.charAt(0).toUpperCase() + results.creditHealthStatus.slice(1)} - {results.creditHealthScore}/100
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Approval Odds</span>
                        <div className="text-lg font-bold text-primary">{formatPercentage(results.currentApprovalOdds)}</div>
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="bg-black border border-zinc-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-primary mb-4">Key Metrics</h3>
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Monthly Commitment</span>
                        <div className="text-lg font-bold text-primary">
                          {formatCurrency(results.currentTotalMonthly)} → {formatCurrency(results.optimizedTotalMonthly)}
                        </div>
                        {results.monthlySavings > 0 && (
                          <div className="text-sm text-green-400 flex items-center gap-1 mt-1">
                            <TrendingDown className="w-4 h-4" />
                            Save {formatCurrency(results.monthlySavings)}/month
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Approval Likelihood</span>
                        <div className="text-lg font-bold text-primary">
                          {formatPercentage(results.currentApprovalOdds)} → {formatPercentage(results.optimizedApprovalOdds)}
                        </div>
                        {results.approvalOddsImprovement > 0 && (
                          <div className="text-sm text-green-400 flex items-center gap-1 mt-1">
                            <TrendingUp className="w-4 h-4" />
                            +{formatPercentage(results.approvalOddsImprovement)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Optimized State */}
                  <div className="bg-black border border-zinc-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-primary mb-4">{t.loanOptimizer.result.after_label}</h3>
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">DSR</span>
                        <div className={`text-2xl font-bold ${getDSRColor(results.optimizedDSR)}`}>
                          {formatPercentage(results.optimizedDSR)}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Credit Health</span>
                        <div className="text-lg font-bold text-primary">
                          {results.creditHealthStatus.charAt(0).toUpperCase() + results.creditHealthStatus.slice(1)} - {results.creditHealthScore}/100
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Approval Odds</span>
                        <div className="text-lg font-bold text-primary">{formatPercentage(results.optimizedApprovalOdds)}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monthly Savings Highlight */}
                {results.monthlySavings > 0 && (
                  <div className="bg-green-900/20 border border-green-800/50 rounded-xl p-6 mb-8 text-center">
                    <div className="text-sm text-secondary uppercase tracking-widest font-mono mb-2">{t.loanOptimizer.result.monthlySavings}</div>
                    <div className="text-4xl font-bold text-green-400">{formatCurrency(results.monthlySavings)}</div>
                    <div className="text-sm text-green-300 mt-2">per month</div>
                  </div>
                )}

                {/* Credit Health Deep Dive */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-primary mb-4">Credit Health Assessment</h3>
                  <p className="text-secondary text-sm leading-relaxed mb-4">
                    {t.loanOptimizer.result.creditHealthExplain
                      .replace(/\{\{score\}\}/g, results.creditHealthScore.toString())
                      .replace(/\{\{dsrPts\}\}/g, results.creditHealthBreakdown.dsrPts.toString())
                      .replace(/\{\{ctosPts\}\}/g, results.creditHealthBreakdown.ctosPts.toString())
                      .replace(/\{\{repayPts\}\}/g, results.creditHealthBreakdown.repayPts.toString())
                      .replace(/\{\{empPts\}\}/g, results.creditHealthBreakdown.empPts.toString())
                      .replace(/\{\{agePts\}\}/g, results.creditHealthBreakdown.agePts.toString())}
                  </p>
                  <p className="text-secondary text-sm leading-relaxed">
                    {t.loanOptimizer.result.approvalFactors}
                  </p>
                </div>

                {/* Loan Breakdown */}
                {results.securedLoans.length > 0 && (
                  <div className="bg-black border border-zinc-800 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-primary mb-4">{t.loanOptimizer.result.secured_title}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-zinc-800">
                            <th className="text-left py-2 px-4 text-xs text-secondary uppercase">Type</th>
                            <th className="text-left py-2 px-4 text-xs text-secondary uppercase">Bank</th>
                            <th className="text-right py-2 px-4 text-xs text-secondary uppercase">Outstanding</th>
                            <th className="text-right py-2 px-4 text-xs text-secondary uppercase">Rate</th>
                            <th className="text-right py-2 px-4 text-xs text-secondary uppercase">Monthly</th>
                          </tr>
                        </thead>
                        <tbody>
                          {results.securedLoans.map((loan, idx) => (
                            <tr key={idx} className="border-b border-zinc-800">
                              <td className="py-2 px-4 text-primary">{t.loanOptimizer.loanType[loan.type as keyof typeof t.loanOptimizer.loanType]}</td>
                              <td className="py-2 px-4 text-secondary">{loan.bank || '-'}</td>
                              <td className="py-2 px-4 text-primary text-right font-mono">{formatCurrency(loan.outstanding)}</td>
                              <td className="py-2 px-4 text-primary text-right font-mono">{formatPercentage(loan.rate, 1)}</td>
                              <td className="py-2 px-4 text-primary text-right font-mono">{formatCurrency(loan.payment)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-secondary mt-4">{t.loanOptimizer.result.secured_note}</p>
                  </div>
                )}

                {results.unsecuredLoans.length > 0 && (
                  <div className="bg-black border border-zinc-800 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-primary mb-4">{t.loanOptimizer.result.unsecured_title}</h3>
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-zinc-800">
                            <th className="text-left py-2 px-4 text-xs text-secondary uppercase">Type</th>
                            <th className="text-left py-2 px-4 text-xs text-secondary uppercase">Bank</th>
                            <th className="text-right py-2 px-4 text-xs text-secondary uppercase">Outstanding</th>
                            <th className="text-right py-2 px-4 text-xs text-secondary uppercase">Rate</th>
                            <th className="text-right py-2 px-4 text-xs text-secondary uppercase">Monthly</th>
                          </tr>
                        </thead>
                        <tbody>
                          {results.unsecuredLoans.map((loan, idx) => (
                            <tr key={idx} className="border-b border-zinc-800">
                              <td className="py-2 px-4 text-primary">{t.loanOptimizer.loanType[loan.type as keyof typeof t.loanOptimizer.loanType]}</td>
                              <td className="py-2 px-4 text-secondary">{loan.bank || '-'}</td>
                              <td className="py-2 px-4 text-primary text-right font-mono">{formatCurrency(loan.outstanding)}</td>
                              <td className="py-2 px-4 text-primary text-right font-mono">{formatPercentage(loan.rate, 1)}</td>
                              <td className="py-2 px-4 text-primary text-right font-mono">{formatCurrency(loan.payment)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                      <p className="text-sm text-primary font-semibold mb-2">{t.loanOptimizer.result.consolidation_proposal}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-xs text-secondary block mb-1">Consolidation Amount</span>
                          <div className="text-primary font-mono">{formatCurrency(results.consolidationAmount)}</div>
                        </div>
                        <div>
                          <span className="text-xs text-secondary block mb-1">Proposed Rate</span>
                          <div className="text-primary font-mono">7% p.a.</div>
                        </div>
                        <div>
                          <span className="text-xs text-secondary block mb-1">Proposed Tenure</span>
                          <div className="text-primary font-mono">7 years</div>
                        </div>
                        <div>
                          <span className="text-xs text-secondary block mb-1">New Monthly Payment</span>
                          <div className="text-primary font-mono">{formatCurrency(results.consolidatedMonthly)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Personalized Recommendation */}
                {concern && (
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-primary mb-4">Personalized Recommendation</h3>
                    <p className="text-secondary leading-relaxed mb-4">
                      {getRecommendation(concern, results)}
                    </p>
                    <p className="text-secondary text-sm leading-relaxed">
                      {t.loanOptimizer.result.approvalNote}
                    </p>
                  </div>
                )}

                {/* Disclaimer */}
                <div className="flex gap-4 p-6 bg-black border border-zinc-800 rounded-lg mb-6">
                  <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-secondary leading-relaxed">
                    {t.loanOptimizer.disclaimer}
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
                    {t.loanOptimizer.btn.contactAdvisor}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/tools"
                    className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
                  >
                    {t.loanOptimizer.btn.exploreMore}
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
