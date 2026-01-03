'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowLeft, Plus, Trash2, AlertCircle, ArrowRight, TrendingUp, TrendingDown } from 'lucide-react'

interface DebtRow {
  id: string
  type: string
  creditor: string
  balance: number
  paymentStatus: string
  monthsDefault: number
  monthlyPayment: number
}

interface SettlementScenario {
  id: string
  name: string
  amount: number
  method: 'lumpsum' | 'installment'
  arrangement: 'full' | 'partial' | 'formal'
  installmentMonths: number
}

interface ScenarioResult {
  scenario: SettlementScenario
  currentDSR: number
  afterDSR: number
  dsrImprovement: number
  monthlySavings: number
  currentCTOS: number
  ctos6mo: number
  ctos12mo: number
  ctos24mo: number
  approvalOdds6mo: number
  approvalOdds12mo: number
  approvalOdds24mo: number
  totalCost: number
  savings: number
}

export default function SettlementAnalyzerPage() {
  const { t } = useLanguage()
  
  // Debts
  const [debts, setDebts] = useState<DebtRow[]>([
    { id: '1', type: 'creditCard', creditor: '', balance: 0, paymentStatus: 'default', monthsDefault: 0, monthlyPayment: 0 }
  ])
  
  // Scenarios
  const [scenarios, setScenarios] = useState<SettlementScenario[]>([
    { id: '1', name: '70% Settlement', amount: 0, method: 'lumpsum', arrangement: 'partial', installmentMonths: 0 }
  ])
  
  // Financial snapshot
  const [income, setIncome] = useState<number>(8000)
  const [otherDebt, setOtherDebt] = useState<number>(0)
  const [ctosScore, setCtosScore] = useState<number>(600)
  
  // Timeline
  const [settleDate, setSettleDate] = useState<string>('')
  const [assessmentDate, setAssessmentDate] = useState<string>('12')
  
  // Results
  const [results, setResults] = useState<ScenarioResult[] | null>(null)
  const [showResults, setShowResults] = useState(false)

  const handleAddDebt = () => {
    setDebts([...debts, {
      id: Date.now().toString(),
      type: 'creditCard',
      creditor: '',
      balance: 0,
      paymentStatus: 'default',
      monthsDefault: 0,
      monthlyPayment: 0
    }])
  }

  const handleDeleteDebt = (id: string) => {
    if (debts.length > 1) {
      setDebts(debts.filter(d => d.id !== id))
    }
  }

  const handleDebtChange = (id: string, field: keyof DebtRow, value: any) => {
    setDebts(debts.map(d => d.id === id ? { ...d, [field]: value } : d))
  }

  const handleAddScenario = () => {
    setScenarios([...scenarios, {
      id: Date.now().toString(),
      name: `Scenario ${scenarios.length + 1}`,
      amount: 0,
      method: 'lumpsum',
      arrangement: 'partial',
      installmentMonths: 12
    }])
  }

  const handleDeleteScenario = (id: string) => {
    if (scenarios.length > 1) {
      setScenarios(scenarios.filter(s => s.id !== id))
    }
  }

  const handleScenarioChange = (id: string, field: keyof SettlementScenario, value: any) => {
    setScenarios(scenarios.map(s => s.id === id ? { ...s, [field]: value } : s))
  }

  // Calculate current DSR
  const calculateCurrentDSR = (): number => {
    const totalMonthly = debts.reduce((sum, d) => sum + d.monthlyPayment, 0) + otherDebt
    return income > 0 ? (totalMonthly / income) * 100 : 0
  }

  // Calculate CTOS recovery
  const calculateCTOSRecovery = (currentScore: number, arrangement: string, monthsElapsed: number): number => {
    let recovery = currentScore
    
    // Initial impact based on arrangement type
    if (arrangement === 'full') {
      // Full settlement: +15-25 points over 6-12 months
      recovery += Math.min(monthsElapsed * 2, 25)
    } else if (arrangement === 'formal') {
      // Formal arrangement: +10-20 points
      recovery += Math.min(monthsElapsed * 1.5, 20)
    } else if (arrangement === 'partial') {
      // Partial: -20 initially, then gradual recovery
      recovery = Math.max(currentScore - 20, 400)
      recovery += Math.min(monthsElapsed * 1.5, 30)
    }
    
    // Cap at reasonable maximum
    return Math.min(recovery, 850)
  }

  // Calculate approval odds
  const calculateApprovalOdds = (dsr: number, ctosScore: number, monthsAfterSettlement: number): number => {
    let odds = 30 // Baseline for someone with settlement history
    
    // DSR factor (max 35 points)
    const dsrRatio = dsr / 100
    if (dsrRatio < 0.50) odds += 35
    else if (dsrRatio < 0.60) odds += 25
    else if (dsrRatio < 0.70) odds += 15
    else odds += 5
    
    // CTOS factor (max 30 points)
    if (ctosScore >= 750) odds += 30
    else if (ctosScore >= 700) odds += 25
    else if (ctosScore >= 650) odds += 18
    else if (ctosScore >= 600) odds += 12
    else odds += 5
    
    // Time factor (max 35 points) - more time = better
    if (monthsAfterSettlement >= 24) odds += 35
    else if (monthsAfterSettlement >= 12) odds += 25
    else if (monthsAfterSettlement >= 6) odds += 15
    else odds += 5
    
    return Math.min(odds, 100)
  }

  // Calculate scenario result
  const calculateScenarioResult = (scenario: SettlementScenario, totalDebtBalance: number): ScenarioResult => {
    const currentDSR = calculateCurrentDSR()
    
    // Calculate settlement amount (default to scenario amount or 100% if not set)
    const settleAmount = scenario.amount > 0 ? scenario.amount : totalDebtBalance
    
    // Calculate monthly payment for settlement
    let monthlyPayment = 0
    if (scenario.method === 'installment' && scenario.installmentMonths > 0) {
      monthlyPayment = settleAmount / scenario.installmentMonths
    }
    
    // Calculate DSR after settlement
    // If lumpsum: immediate DSR drop
    // If installment: gradual DSR improvement
    const currentMonthlyDebt = debts.reduce((sum, d) => sum + d.monthlyPayment, 0) + otherDebt
    const afterMonthlyDebt = scenario.method === 'lumpsum' 
      ? otherDebt 
      : otherDebt + monthlyPayment
    
    const afterDSR = income > 0 ? (afterMonthlyDebt / income) * 100 : 0
    const dsrImprovement = currentDSR - afterDSR
    const monthlySavings = currentMonthlyDebt - afterMonthlyDebt
    
    // CTOS recovery trajectory
    const currentCTOS = ctosScore
    const ctos6mo = calculateCTOSRecovery(currentCTOS, scenario.arrangement, 6)
    const ctos12mo = calculateCTOSRecovery(currentCTOS, scenario.arrangement, 12)
    const ctos24mo = calculateCTOSRecovery(currentCTOS, scenario.arrangement, 24)
    
    // Approval odds at different time points
    const approvalOdds6mo = calculateApprovalOdds(afterDSR, ctos6mo, 6)
    const approvalOdds12mo = calculateApprovalOdds(afterDSR, ctos12mo, 12)
    const approvalOdds24mo = calculateApprovalOdds(afterDSR, ctos24mo, 24)
    
    // Total cost comparison
    // Estimate current cost: minimum payments forever (simplified)
    const currentMonthlyMin = debts.reduce((sum, d) => sum + d.monthlyPayment, 0)
    const estimatedYearsToPay = 10 // Rough estimate
    const currentTotalCost = currentMonthlyMin * 12 * estimatedYearsToPay
    const settlementTotalCost = settleAmount
    const savings = currentTotalCost - settlementTotalCost
    
    return {
      scenario,
      currentDSR,
      afterDSR,
      dsrImprovement,
      monthlySavings,
      currentCTOS,
      ctos6mo,
      ctos12mo,
      ctos24mo,
      approvalOdds6mo,
      approvalOdds12mo,
      approvalOdds24mo,
      totalCost: settlementTotalCost,
      savings
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

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (debts.length === 0 || debts.every(d => d.balance === 0)) {
      alert('Please enter at least one debt')
      return
    }
    
    if (income <= 0) {
      alert('Please enter a valid income')
      return
    }
    
    const totalDebtBalance = debts.reduce((sum, d) => sum + d.balance, 0)
    
    // Auto-set scenario amounts if not set
    const processedScenarios = scenarios.map(s => ({
      ...s,
      amount: s.amount > 0 ? s.amount : totalDebtBalance * (s.name.includes('70%') ? 0.7 : s.name.includes('Full') ? 1.0 : 0.8)
    }))
    
    const scenarioResults = processedScenarios.map(scenario => 
      calculateScenarioResult(scenario, totalDebtBalance)
    )
    
    setResults(scenarioResults)
    setShowResults(true)
    
    setTimeout(() => {
      const resultsElement = document.getElementById('results-section')
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }, 100)
  }

  const handleReset = () => {
    setDebts([{ id: '1', type: 'creditCard', creditor: '', balance: 0, paymentStatus: 'default', monthsDefault: 0, monthlyPayment: 0 }])
    setScenarios([{ id: '1', name: '70% Settlement', amount: 0, method: 'lumpsum', arrangement: 'partial', installmentMonths: 0 }])
    setIncome(8000)
    setOtherDebt(0)
    setCtosScore(600)
    setSettleDate('')
    setAssessmentDate('12')
    setResults(null)
    setShowResults(false)
  }

  const getBestScenario = (): string => {
    if (!results || results.length === 0) return ''
    
    // Find scenario with best approval odds at 12 months
    const best = results.reduce((max, r) => 
      r.approvalOdds12mo > max.approvalOdds12mo ? r : max
    )
    
    return best.scenario.name
  }

  const totalDebtBalance = debts.reduce((sum, d) => sum + d.balance, 0)

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
              {t.settlementAnalyzer.header.title}
            </h1>
            <p className="text-secondary mx-auto max-w-3xl text-lg md:text-xl leading-relaxed mb-6">
              {t.settlementAnalyzer.header.subtitle}
            </p>
            
            {/* Notice Box */}
            <div className="max-w-4xl mx-auto p-6 bg-yellow-900/20 border border-yellow-800/50 rounded-xl">
              <p className="text-yellow-200 text-sm leading-relaxed">
                {t.settlementAnalyzer.header.notice}
              </p>
            </div>
          </div>

          {/* Input Section */}
          <section className="max-w-6xl mx-auto mb-16">
            <form onSubmit={handleAnalyze} className="space-y-8">
              {/* Panel 1: Outstanding Debts */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-primary uppercase tracking-widest font-mono text-sm">
                    Outstanding Debt Details
                  </h3>
                  <button
                    type="button"
                    onClick={handleAddDebt}
                    className="flex items-center gap-2 px-4 py-2 border border-zinc-800 rounded-lg text-secondary hover:border-zinc-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    {t.settlementAnalyzer.btn.addDebt}
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.settlementAnalyzer.table.debtType}</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.settlementAnalyzer.table.creditor}</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.settlementAnalyzer.table.balance}</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.settlementAnalyzer.table.paymentStatus}</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">{t.settlementAnalyzer.table.monthsDefault}</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Monthly Payment</th>
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {debts.map(debt => (
                        <tr key={debt.id} className="border-b border-zinc-800">
                          <td className="py-3 px-4">
                            <select
                              value={debt.type}
                              onChange={(e) => handleDebtChange(debt.id, 'type', e.target.value)}
                              className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary text-sm focus:outline-none focus:border-primary"
                            >
                              <option value="creditCard">{t.settlementAnalyzer.debtType.creditCard}</option>
                              <option value="personal">{t.settlementAnalyzer.debtType.personal}</option>
                              <option value="overdraft">{t.settlementAnalyzer.debtType.overdraft}</option>
                              <option value="business">{t.settlementAnalyzer.debtType.business}</option>
                              <option value="other">{t.settlementAnalyzer.debtType.other}</option>
                            </select>
                          </td>
                          <td className="py-3 px-4">
                            <input
                              type="text"
                              value={debt.creditor}
                              onChange={(e) => handleDebtChange(debt.id, 'creditor', e.target.value)}
                              placeholder="Bank name"
                              className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary text-sm focus:outline-none focus:border-primary"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <input
                              type="number"
                              value={debt.balance || ''}
                              onChange={(e) => handleDebtChange(debt.id, 'balance', parseFloat(e.target.value) || 0)}
                              min="0"
                              className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary text-sm font-mono focus:outline-none focus:border-primary"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <select
                              value={debt.paymentStatus}
                              onChange={(e) => handleDebtChange(debt.id, 'paymentStatus', e.target.value)}
                              className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary text-sm focus:outline-none focus:border-primary"
                            >
                              <option value="ontime">{t.settlementAnalyzer.paymentStatus.ontime}</option>
                              <option value="late30">{t.settlementAnalyzer.paymentStatus.late30}</option>
                              <option value="late60">{t.settlementAnalyzer.paymentStatus.late60}</option>
                              <option value="default">{t.settlementAnalyzer.paymentStatus.default}</option>
                            </select>
                          </td>
                          <td className="py-3 px-4">
                            <input
                              type="number"
                              value={debt.monthsDefault || ''}
                              onChange={(e) => handleDebtChange(debt.id, 'monthsDefault', parseInt(e.target.value) || 0)}
                              min="0"
                              className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary text-sm font-mono focus:outline-none focus:border-primary"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <input
                              type="number"
                              value={debt.monthlyPayment || ''}
                              onChange={(e) => handleDebtChange(debt.id, 'monthlyPayment', parseFloat(e.target.value) || 0)}
                              min="0"
                              className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary text-sm font-mono focus:outline-none focus:border-primary"
                            />
                          </td>
                          <td className="py-3 px-4">
                            {debts.length > 1 && (
                              <button
                                type="button"
                                onClick={() => handleDeleteDebt(debt.id)}
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

              {/* Panel 2: Settlement Scenarios */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-primary uppercase tracking-widest font-mono text-sm">
                    Settlement Scenarios
                  </h3>
                  <button
                    type="button"
                    onClick={handleAddScenario}
                    className="flex items-center gap-2 px-4 py-2 border border-zinc-800 rounded-lg text-secondary hover:border-zinc-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    {t.settlementAnalyzer.btn.addScenario}
                  </button>
                </div>
                
                <div className="space-y-6">
                  {scenarios.map(scenario => (
                    <div key={scenario.id} className="bg-black border border-zinc-800 rounded-xl p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-semibold text-primary">Scenario: {scenario.name}</h4>
                        {scenarios.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleDeleteScenario(scenario.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                            {t.settlementAnalyzer.scenario.name_label}
                          </label>
                          <input
                            type="text"
                            value={scenario.name}
                            onChange={(e) => handleScenarioChange(scenario.id, 'name', e.target.value)}
                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                            {t.settlementAnalyzer.scenario.amount_label}
                          </label>
                          <div className="relative">
                            <input
                              type="number"
                              value={scenario.amount || ''}
                              onChange={(e) => handleScenarioChange(scenario.id, 'amount', parseFloat(e.target.value) || 0)}
                              min="0"
                              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                            {t.settlementAnalyzer.scenario.method_label}
                          </label>
                          <select
                            value={scenario.method}
                            onChange={(e) => handleScenarioChange(scenario.id, 'method', e.target.value)}
                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary"
                          >
                            <option value="lumpsum">{t.settlementAnalyzer.scenario.method_lumpsum}</option>
                            <option value="installment">{t.settlementAnalyzer.scenario.method_installment}</option>
                          </select>
                        </div>
                        
                        {scenario.method === 'installment' && (
                          <div>
                            <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                              {t.settlementAnalyzer.scenario.installmentMonths_label}
                            </label>
                            <input
                              type="number"
                              value={scenario.installmentMonths || ''}
                              onChange={(e) => handleScenarioChange(scenario.id, 'installmentMonths', parseInt(e.target.value) || 12)}
                              min="1"
                              max="60"
                              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary"
                            />
                          </div>
                        )}
                        
                        <div>
                          <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                            {t.settlementAnalyzer.scenario.arrangement_label}
                          </label>
                          <select
                            value={scenario.arrangement}
                            onChange={(e) => handleScenarioChange(scenario.id, 'arrangement', e.target.value)}
                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary"
                          >
                            <option value="full">{t.settlementAnalyzer.scenario.arrangement_full}</option>
                            <option value="partial">{t.settlementAnalyzer.scenario.arrangement_partial}</option>
                            <option value="formal">{t.settlementAnalyzer.scenario.arrangement_formal}</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 3: Financial Snapshot */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                  Current Financial Snapshot
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.settlementAnalyzer.input.income_label}
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

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.settlementAnalyzer.input.otherDebt_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={otherDebt || ''}
                        onChange={(e) => setOtherDebt(parseFloat(e.target.value) || 0)}
                        min="0"
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.settlementAnalyzer.input.ctosScore_label}
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
                </div>
              </div>

              {/* Panel 4: Timeline */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                  Post-Settlement Timeline
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.settlementAnalyzer.input.settleDate_label}
                    </label>
                    <input
                      type="date"
                      value={settleDate}
                      onChange={(e) => setSettleDate(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono">
                      {t.settlementAnalyzer.input.assessmentDate_label}
                    </label>
                    <select
                      value={assessmentDate}
                      onChange={(e) => setAssessmentDate(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="6">6 months after settlement</option>
                      <option value="12">1 year after settlement</option>
                      <option value="24">2 years after settlement</option>
                      <option value="36">3+ years after settlement</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-primary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-primary transition-all"
                >
                  {t.settlementAnalyzer.btn.analyze}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all"
                >
                  {t.settlementAnalyzer.btn.reset}
                </button>
              </div>
            </form>
          </section>

          {/* Results Section */}
          {showResults && results && (
            <section id="results-section" className="max-w-6xl mx-auto">
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">{t.settlementAnalyzer.result.title}</h2>
                </div>

                {/* Summary */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-black border border-zinc-800 rounded-xl p-4">
                    <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Total Debt</span>
                    <div className="text-lg font-bold text-primary">{formatCurrency(totalDebtBalance)}</div>
                  </div>
                  <div className="bg-black border border-zinc-800 rounded-xl p-4">
                    <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Current DSR</span>
                    <div className="text-lg font-bold text-primary">{formatPercentage(calculateCurrentDSR(), 1)}</div>
                  </div>
                  <div className="bg-black border border-zinc-800 rounded-xl p-4">
                    <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Current CTOS</span>
                    <div className="text-lg font-bold text-primary">{ctosScore}</div>
                  </div>
                  <div className="bg-black border border-zinc-800 rounded-xl p-4">
                    <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">Monthly Income</span>
                    <div className="text-lg font-bold text-primary">{formatCurrency(income)}</div>
                  </div>
                </div>

                {/* Comparative Table */}
                <div className="overflow-x-auto mb-8">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Scenario</th>
                        <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Settlement Amount</th>
                        <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">DSR After</th>
                        <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">CTOS (6mo)</th>
                        <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">CTOS (12mo)</th>
                        <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Approval Odds (12mo)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((result, idx) => (
                        <tr key={result.scenario.id} className="border-b border-zinc-800">
                          <td className="py-4 px-4 text-primary font-semibold">{result.scenario.name}</td>
                          <td className="py-4 px-4 text-primary text-right font-mono">{formatCurrency(result.totalCost)}</td>
                          <td className="py-4 px-4 text-primary text-right font-mono">{formatPercentage(result.afterDSR, 1)}</td>
                          <td className="py-4 px-4 text-primary text-right font-mono">{Math.round(result.ctos6mo)}</td>
                          <td className="py-4 px-4 text-primary text-right font-mono">{Math.round(result.ctos12mo)}</td>
                          <td className="py-4 px-4 text-primary text-right font-mono">{formatPercentage(result.approvalOdds12mo, 0)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Scenario Results */}
                <div className="space-y-8 mb-8">
                  {results.map((result, idx) => (
                    <div key={result.scenario.id} className="bg-black border border-zinc-800 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-primary mb-6">{t.settlementAnalyzer.result.scenario_title} {idx + 1}: {result.scenario.name}</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Settlement Details */}
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-widest font-mono">
                            {t.settlementAnalyzer.result.settlementDetails}
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-secondary">Settlement Amount:</span>
                              <span className="text-primary font-mono">{formatCurrency(result.totalCost)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-secondary">Payment Method:</span>
                              <span className="text-primary">
                                {result.scenario.method === 'lumpsum' 
                                  ? t.settlementAnalyzer.scenario.method_lumpsum 
                                  : `${t.settlementAnalyzer.scenario.method_installment} (${result.scenario.installmentMonths} months)`}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-secondary">Arrangement:</span>
                              <span className="text-primary">
                                {result.scenario.arrangement === 'full' 
                                  ? t.settlementAnalyzer.scenario.arrangement_full
                                  : result.scenario.arrangement === 'partial'
                                  ? t.settlementAnalyzer.scenario.arrangement_partial
                                  : t.settlementAnalyzer.scenario.arrangement_formal}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Immediate DSR Impact */}
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-widest font-mono">
                            {t.settlementAnalyzer.result.immediateDSR}
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-secondary">Current DSR:</span>
                              <span className="text-primary font-mono">{formatPercentage(result.currentDSR, 1)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-secondary">After Settlement:</span>
                              <span className="text-primary font-mono flex items-center gap-1">
                                {formatPercentage(result.afterDSR, 1)}
                                {result.dsrImprovement > 0 && (
                                  <span className="text-green-400 flex items-center gap-1">
                                    <TrendingDown className="w-3 h-3" />
                                    {formatPercentage(result.dsrImprovement, 1)}
                                  </span>
                                )}
                              </span>
                            </div>
                            {result.monthlySavings > 0 && (
                              <div className="flex justify-between">
                                <span className="text-secondary">Monthly Savings:</span>
                                <span className="text-green-400 font-mono">{formatCurrency(result.monthlySavings)}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* CTOS Recovery Timeline */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-widest font-mono">
                          {t.settlementAnalyzer.result.ctosRecovery}
                        </h4>
                        <div className="grid grid-cols-4 gap-4">
                          <div className="text-center">
                            <div className="text-xs text-secondary mb-1">Current</div>
                            <div className="text-lg font-bold text-primary">{result.currentCTOS}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-secondary mb-1">6 months</div>
                            <div className="text-lg font-bold text-primary">{Math.round(result.ctos6mo)}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-secondary mb-1">12 months</div>
                            <div className="text-lg font-bold text-primary">{Math.round(result.ctos12mo)}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-secondary mb-1">24 months</div>
                            <div className="text-lg font-bold text-primary">{Math.round(result.ctos24mo)}</div>
                          </div>
                        </div>
                      </div>

                      {/* Future Approval Odds */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-widest font-mono">
                          {t.settlementAnalyzer.result.futureApproval}
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-center">
                            <div className="text-xs text-secondary mb-2">6 months after</div>
                            <div className="text-2xl font-bold text-primary">{formatPercentage(result.approvalOdds6mo, 0)}</div>
                          </div>
                          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-center">
                            <div className="text-xs text-secondary mb-2">12 months after</div>
                            <div className="text-2xl font-bold text-primary">{formatPercentage(result.approvalOdds12mo, 0)}</div>
                          </div>
                          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-center">
                            <div className="text-xs text-secondary mb-2">24 months after</div>
                            <div className="text-2xl font-bold text-primary">{formatPercentage(result.approvalOdds24mo, 0)}</div>
                          </div>
                        </div>
                      </div>

                      {/* Total Cost Comparison */}
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-widest font-mono">
                          {t.settlementAnalyzer.result.totalCost}
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-secondary">Settlement Cost:</span>
                            <span className="text-primary font-mono">{formatCurrency(result.totalCost)}</span>
                          </div>
                          {result.savings > 0 && (
                            <div className="flex justify-between">
                              <span className="text-secondary">Estimated Savings:</span>
                              <span className="text-green-400 font-mono">{formatCurrency(result.savings)}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Insight */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-primary mb-3">Key Insight</h3>
                  <p className="text-secondary leading-relaxed">
                    {t.settlementAnalyzer.result.insight.replace(/\{\{bestScenario\}\}/g, getBestScenario())}
                  </p>
                </div>

                {/* Disclaimer */}
                <div className="flex gap-4 p-6 bg-black border border-zinc-800 rounded-lg mb-6">
                  <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-secondary leading-relaxed">
                    {t.settlementAnalyzer.disclaimer}
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
                    {t.settlementAnalyzer.btn.negotiateGuide}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/60123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
                  >
                    {t.settlementAnalyzer.btn.advisors}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/tools"
                    className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
                  >
                    {t.settlementAnalyzer.btn.again}
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

