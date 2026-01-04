'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowLeft, Plus, Trash2, AlertCircle, ArrowRight, TrendingUp, CheckCircle, AlertTriangle, XCircle, Download } from 'lucide-react'

interface Goal {
  id: string
  type: string
  name: string
  targetAmount: number
  timelineValue: number
  timelineUnit: 'months' | 'years'
  priority: 'high' | 'medium' | 'low'
  alreadySaved: number
  // Additional fields for specific goals
  propertyPrice?: number
  vehiclePrice?: number
  childrenCount?: number
  universityDuration?: number
  annualCost?: number
  retirementAge?: number
  annualSpending?: number
  retirementYears?: number
  tripBudget?: number
  monthlyExpenses?: number
}

interface GoalResult extends Goal {
  inflationAdjustedAmount: number
  remainingNeeded: number
  monthlyNeededNoReturn: number
  monthlyNeededWithReturn: number
  projectedMonths: number
  projectedDate: Date
  onTrack: boolean
  allocation?: number
  timelineMonths: number
}

interface PlanResult {
  goals: GoalResult[]
  allocation: Record<string, number>
  totalMonthlySavingsNeeded: number
  totalMonthlySavingsAvailable: number
  surplus: number
  deficit: number
  feasibility: 'achievable' | 'challenging'
  investmentStrategy: string
  expectedAnnualReturn: number
}

const GOAL_TYPES = ['emergency', 'homeDownPayment', 'vehicle', 'education', 'retirement', 'vacation', 'custom']

export default function SavingsInvestmentGoalPlannerPage() {
  const { t } = useLanguage()

  // State
  const [goals, setGoals] = useState<Goal[]>([])
  const [monthlySavings, setMonthlySavings] = useState<number>(1000)
  const [allocationStrategy, setAllocationStrategy] = useState<string>('priority')
  const [investmentStrategy, setInvestmentStrategy] = useState<string>('balanced')
  const [inflation, setInflation] = useState<number>(3)
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(5000)

  // Results
  const [results, setResults] = useState<PlanResult | null>(null)
  const [showResults, setShowResults] = useState(false)

  // Get return by strategy
  const getReturnByStrategy = (strategy: string): number => {
    const strategies: Record<string, number> = {
      'savings_only': 0,
      'conservative': 3,
      'balanced': 6,
      'growth': 8,
      'aggressive': 10
    }
    return strategies[strategy] || 0
  }

  // Calculate months to goal
  const calculateMonthsToGoal = (targetAmount: number, monthlySavings: number, annualReturn: number): number => {
    if (monthlySavings <= 0) return Infinity

    const monthlyReturn = Math.pow(1 + annualReturn / 100, 1/12) - 1

    if (monthlyReturn === 0) {
      return Math.ceil(targetAmount / monthlySavings)
    }

    const ratio = (targetAmount * monthlyReturn / monthlySavings) + 1
    if (ratio <= 0) return Infinity

    const months = Math.log(ratio) / Math.log(1 + monthlyReturn)
    return Math.ceil(months)
  }

  // Calculate goal requirements
  const calculateGoalRequirements = (): PlanResult => {
    // 1. ADJUST GOAL AMOUNTS FOR INFLATION
    let processedGoals: Array<Goal & { inflationAdjustedAmount: number; remainingNeeded: number; timelineMonths: number }> = goals.map(goal => {
      const monthsToGoal = goal.timelineUnit === 'years' ? goal.timelineValue * 12 : goal.timelineValue
      const yearsToGoal = monthsToGoal / 12
      const inflationAdjustedAmount = goal.targetAmount * Math.pow(1 + inflation / 100, yearsToGoal)
      const remainingNeeded = inflationAdjustedAmount - goal.alreadySaved

      return {
        ...goal,
        inflationAdjustedAmount: Math.round(inflationAdjustedAmount),
        remainingNeeded: Math.max(0, Math.round(remainingNeeded)),
        timelineMonths: monthsToGoal
      }
    })

    // 2. CALCULATE MONTHLY SAVINGS NEEDED PER GOAL
    let processedGoals2: Array<Goal & { inflationAdjustedAmount: number; remainingNeeded: number; timelineMonths: number; monthlyNeededNoReturn: number }> = processedGoals.map(goal => {
      const monthsToGoal = goal.timelineMonths
      const monthlyNeeded = goal.remainingNeeded / monthsToGoal
      return { ...goal, monthlyNeededNoReturn: monthlyNeeded }
    })

    // 3. CALCULATE MONTHLY SAVINGS NEEDED WITH INVESTMENT RETURNS
    const annualReturn = getReturnByStrategy(investmentStrategy)

    let processedGoals3: Array<Goal & { inflationAdjustedAmount: number; remainingNeeded: number; timelineMonths: number; monthlyNeededNoReturn: number; monthlyNeededWithReturn: number }> = processedGoals2.map(goal => {
      const monthsToGoal = goal.timelineMonths
      const monthlyReturn = Math.pow(1 + annualReturn / 100, 1/12) - 1

      if (monthlyReturn === 0) {
        return { ...goal, monthlyNeededWithReturn: goal.monthlyNeededNoReturn }
      }

      const numerator = goal.remainingNeeded
      const denominator = (Math.pow(1 + monthlyReturn, monthsToGoal) - 1) / monthlyReturn
      const monthlyNeededWithReturn = numerator / denominator

      return { ...goal, monthlyNeededWithReturn: monthlyNeededWithReturn }
    })

    // 4. CALCULATE ALLOCATION
    let allocation: Record<string, number> = {}

    if (allocationStrategy === 'equal') {
      const perGoal = monthlySavings / goals.length
      goals.forEach(goal => {
        allocation[goal.id] = perGoal
      })
    } else if (allocationStrategy === 'priority') {
      const highGoals = goals.filter(g => g.priority === 'high')
      const mediumGoals = goals.filter(g => g.priority === 'medium')
      const lowGoals = goals.filter(g => g.priority === 'low')

      const highAllocation = monthlySavings * 0.5 / (highGoals.length || 1)
      const mediumAllocation = monthlySavings * 0.3 / (mediumGoals.length || 1)
      const lowAllocation = monthlySavings * 0.2 / (lowGoals.length || 1)

      goals.forEach(goal => {
        if (goal.priority === 'high') allocation[goal.id] = highAllocation
        else if (goal.priority === 'medium') allocation[goal.id] = mediumAllocation
        else allocation[goal.id] = lowAllocation
      })
    }

    // 5. FEASIBILITY ASSESSMENT
    const totalNeeded = processedGoals3.reduce((sum, g) => sum + g.monthlyNeededWithReturn, 0)
    const feasibility = monthlySavings >= totalNeeded ? 'achievable' : 'challenging'

    // 6. TIMELINE PROJECTION
    const goalResults: GoalResult[] = processedGoals3.map(goal => {
      const allocated = allocation[goal.id] || 0
      const projectedMonths = calculateMonthsToGoal(goal.remainingNeeded, allocated, annualReturn)
      const projectedDate = new Date()
      projectedDate.setMonth(projectedDate.getMonth() + projectedMonths)

      return {
        ...goal,
        projectedMonths: projectedMonths,
        projectedDate: projectedDate,
        onTrack: projectedMonths <= goal.timelineMonths,
        allocation: allocated
      }
    })

    return {
      goals: goalResults,
      allocation: allocation,
      totalMonthlySavingsNeeded: totalNeeded,
      totalMonthlySavingsAvailable: monthlySavings,
      surplus: Math.max(0, monthlySavings - totalNeeded),
      deficit: Math.max(0, totalNeeded - monthlySavings),
      feasibility: feasibility,
      investmentStrategy: investmentStrategy,
      expectedAnnualReturn: annualReturn
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

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-MY', { year: 'numeric', month: 'short', day: 'numeric' })
  }

  const handleAddGoal = (type: string) => {
    const newGoal: Goal = {
      id: Date.now().toString(),
      type: type,
      name: t.savingsGoal.goal[type as keyof typeof t.savingsGoal.goal] || type,
      targetAmount: 0,
      timelineValue: 12,
      timelineUnit: 'months',
      priority: 'medium',
      alreadySaved: 0
    }

    // Set default values based on goal type
    if (type === 'emergency') {
      newGoal.targetAmount = monthlyExpenses * 3
      newGoal.monthlyExpenses = monthlyExpenses
    } else if (type === 'homeDownPayment') {
      newGoal.propertyPrice = 500000
      newGoal.targetAmount = 500000 * 0.2
      newGoal.timelineValue = 5
      newGoal.timelineUnit = 'years'
    } else if (type === 'vehicle') {
      newGoal.vehiclePrice = 100000
      newGoal.targetAmount = 100000 * 0.1
      newGoal.timelineValue = 2
      newGoal.timelineUnit = 'years'
    } else if (type === 'education') {
      newGoal.childrenCount = 1
      newGoal.universityDuration = 4
      newGoal.annualCost = 30000
      newGoal.targetAmount = 30000 * 4
      newGoal.timelineValue = 15
      newGoal.timelineUnit = 'years'
    } else if (type === 'retirement') {
      newGoal.retirementAge = 60
      newGoal.annualSpending = 60000
      newGoal.retirementYears = 20
      newGoal.targetAmount = 60000 * 20
      newGoal.timelineValue = 30
      newGoal.timelineUnit = 'years'
    } else if (type === 'vacation') {
      newGoal.tripBudget = 10000
      newGoal.targetAmount = 10000
      newGoal.timelineValue = 12
      newGoal.timelineUnit = 'months'
    }

    setGoals([...goals, newGoal])
  }

  const handleDeleteGoal = (id: string) => {
    setGoals(goals.filter(g => g.id !== id))
  }

  const handleGoalChange = (id: string, field: keyof Goal, value: any) => {
    setGoals(goals.map(goal => {
      if (goal.id === id) {
        const updated = { ...goal, [field]: value }

        // Auto-calculate target amount for specific goals
        if (field === 'propertyPrice' && goal.type === 'homeDownPayment') {
          updated.targetAmount = (value || 0) * 0.2
        } else if (field === 'vehiclePrice' && goal.type === 'vehicle') {
          updated.targetAmount = (value || 0) * 0.1
        } else if (field === 'monthlyExpenses' && goal.type === 'emergency') {
          updated.targetAmount = (value || 0) * 3
        } else if (field === 'annualCost' && goal.type === 'education') {
          updated.targetAmount = (value || 0) * (goal.universityDuration || 4)
        } else if (field === 'universityDuration' && goal.type === 'education') {
          updated.targetAmount = (goal.annualCost || 0) * (value || 4)
        } else if (field === 'annualSpending' && goal.type === 'retirement') {
          updated.targetAmount = (value || 0) * (goal.retirementYears || 20)
        } else if (field === 'retirementYears' && goal.type === 'retirement') {
          updated.targetAmount = (goal.annualSpending || 0) * (value || 20)
        } else if (field === 'tripBudget' && goal.type === 'vacation') {
          updated.targetAmount = value || 0
        }

        return updated
      }
      return goal
    }))
  }

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()

    if (goals.length === 0) {
      alert('Please add at least one goal')
      return
    }

    if (monthlySavings <= 0) {
      alert('Please enter a valid monthly savings amount')
      return
    }

    const calculatedResults = calculateGoalRequirements()
    setResults(calculatedResults)
    setShowResults(true)

    setTimeout(() => {
      const resultsElement = document.getElementById('results-section')
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }, 100)
  }

  const handleReset = () => {
    setGoals([])
    setMonthlySavings(1000)
    setAllocationStrategy('priority')
    setInvestmentStrategy('balanced')
    setInflation(3)
    setMonthlyExpenses(5000)
    setResults(null)
    setShowResults(false)
  }

  const getStatusBadge = (goal: GoalResult) => {
    const allocation = goal.allocation || 0
    const needed = goal.monthlyNeededWithReturn
    const ratio = allocation / needed

    if (ratio >= 1) {
      return { text: t.savingsGoal.result.onTrack, color: 'text-green-400', bg: 'bg-green-400/20', icon: CheckCircle }
    } else if (ratio >= 0.8) {
      return { text: t.savingsGoal.result.tight, color: 'text-yellow-400', bg: 'bg-yellow-400/20', icon: AlertTriangle }
    } else {
      return { text: t.savingsGoal.result.needsAdjustment, color: 'text-red-400', bg: 'bg-red-400/20', icon: XCircle }
    }
  }

  const getPriorityColor = (priority: string) => {
    if (priority === 'high') return 'text-red-400 bg-red-400/20'
    if (priority === 'medium') return 'text-yellow-400 bg-yellow-400/20'
    return 'text-blue-400 bg-blue-400/20'
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
              {t.savingsGoal.header.title}
            </h1>
            <p className="text-secondary mx-auto max-w-3xl text-lg md:text-xl leading-relaxed mb-6">
              {t.savingsGoal.header.subtitle}
            </p>

            {/* Notice Box */}
            <div className="max-w-4xl mx-auto p-6 bg-yellow-900/20 border border-yellow-800/50 rounded-xl">
              <p className="text-yellow-200 text-sm leading-relaxed">
                {t.savingsGoal.header.notice}
              </p>
            </div>
          </div>

          {/* Input Section */}
          <section className="max-w-6xl mx-auto mb-16">
            <form onSubmit={handleCalculate} className="space-y-8">
              {/* Panel 1: Financial Goal Selection */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                  {t.savingsGoal.input.goalType_label}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {GOAL_TYPES.map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleAddGoal(type)}
                      className="p-4 bg-black border border-zinc-800 rounded-lg text-left hover:border-zinc-700 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Plus className="w-4 h-4 text-primary" />
                        <span className="text-primary font-semibold">{t.savingsGoal.goal[type as keyof typeof t.savingsGoal.goal]}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Monthly Expenses Input (for emergency fund calculation) */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                    Monthly Expenses (for Emergency Fund calculation)
                  </label>
                  <div className="relative max-w-xs">
                    <input
                      type="number"
                      value={monthlyExpenses || ''}
                      onChange={(e) => setMonthlyExpenses(parseFloat(e.target.value) || 0)}
                      min="0"
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                  </div>
                </div>
              </div>

              {/* Panel 2: Goal Target Details */}
              {goals.length > 0 && (
                <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                    Goal Target Details
                  </h3>

                  <div className="space-y-6">
                    {goals.map(goal => (
                      <div key={goal.id} className="bg-black border border-zinc-800 rounded-xl p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-primary mb-2">{goal.name}</h4>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(goal.priority)}`}>
                              {t.savingsGoal.priority[goal.priority as keyof typeof t.savingsGoal.priority]}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleDeleteGoal(goal.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Goal-specific inputs */}
                          {goal.type === 'homeDownPayment' && (
                            <div>
                              <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                                Property Price (RM)
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  value={goal.propertyPrice || ''}
                                  onChange={(e) => handleGoalChange(goal.id, 'propertyPrice', parseFloat(e.target.value) || 0)}
                                  min="0"
                                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                              </div>
                            </div>
                          )}

                          {goal.type === 'vehicle' && (
                            <div>
                              <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                                Vehicle Price (RM)
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  value={goal.vehiclePrice || ''}
                                  onChange={(e) => handleGoalChange(goal.id, 'vehiclePrice', parseFloat(e.target.value) || 0)}
                                  min="0"
                                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                              </div>
                            </div>
                          )}

                          {goal.type === 'education' && (
                            <>
                              <div>
                                <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                                  Number of Children
                                </label>
                                <input
                                  type="number"
                                  value={goal.childrenCount || ''}
                                  onChange={(e) => handleGoalChange(goal.id, 'childrenCount', parseInt(e.target.value) || 1)}
                                  min="1"
                                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                                  University Duration (Years)
                                </label>
                                <input
                                  type="number"
                                  value={goal.universityDuration || ''}
                                  onChange={(e) => handleGoalChange(goal.id, 'universityDuration', parseInt(e.target.value) || 4)}
                                  min="1"
                                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                                  Annual Cost (RM)
                                </label>
                                <div className="relative">
                                  <input
                                    type="number"
                                    value={goal.annualCost || ''}
                                    onChange={(e) => handleGoalChange(goal.id, 'annualCost', parseFloat(e.target.value) || 0)}
                                    min="0"
                                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary"
                                  />
                                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                                </div>
                              </div>
                            </>
                          )}

                          {goal.type === 'retirement' && (
                            <>
                              <div>
                                <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                                  Target Retirement Age
                                </label>
                                <input
                                  type="number"
                                  value={goal.retirementAge || ''}
                                  onChange={(e) => handleGoalChange(goal.id, 'retirementAge', parseInt(e.target.value) || 60)}
                                  min="50"
                                  max="70"
                                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                                  Annual Retirement Spending (RM)
                                </label>
                                <div className="relative">
                                  <input
                                    type="number"
                                    value={goal.annualSpending || ''}
                                    onChange={(e) => handleGoalChange(goal.id, 'annualSpending', parseFloat(e.target.value) || 0)}
                                    min="0"
                                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary"
                                  />
                                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                                  Years in Retirement
                                </label>
                                <input
                                  type="number"
                                  value={goal.retirementYears || ''}
                                  onChange={(e) => handleGoalChange(goal.id, 'retirementYears', parseInt(e.target.value) || 20)}
                                  min="10"
                                  max="40"
                                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary"
                                />
                              </div>
                            </>
                          )}

                          {goal.type === 'vacation' && (
                            <div>
                              <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                                Trip Budget (RM)
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  value={goal.tripBudget || ''}
                                  onChange={(e) => handleGoalChange(goal.id, 'tripBudget', parseFloat(e.target.value) || 0)}
                                  min="0"
                                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                              </div>
                            </div>
                          )}

                          {goal.type === 'custom' && (
                            <div>
                              <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                                Goal Name
                              </label>
                              <input
                                type="text"
                                value={goal.name}
                                onChange={(e) => handleGoalChange(goal.id, 'name', e.target.value)}
                                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary"
                              />
                            </div>
                          )}

                          {/* Common fields */}
                          <div>
                            <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                              Target Amount (RM)
                            </label>
                            <div className="relative">
                              <input
                                type="number"
                                value={goal.targetAmount || ''}
                                onChange={(e) => handleGoalChange(goal.id, 'targetAmount', parseFloat(e.target.value) || 0)}
                                min="0"
                                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary"
                              />
                              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                              {t.savingsGoal.input.timeline_label}
                            </label>
                            <div className="flex gap-2">
                              <input
                                type="number"
                                value={goal.timelineValue || ''}
                                onChange={(e) => handleGoalChange(goal.id, 'timelineValue', parseFloat(e.target.value) || 0)}
                                min="1"
                                className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary"
                              />
                              <select
                                value={goal.timelineUnit}
                                onChange={(e) => handleGoalChange(goal.id, 'timelineUnit', e.target.value)}
                                className="px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary"
                              >
                                <option value="months">Months</option>
                                <option value="years">Years</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                              {t.savingsGoal.input.priority_label}
                            </label>
                            <select
                              value={goal.priority}
                              onChange={(e) => handleGoalChange(goal.id, 'priority', e.target.value)}
                              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary"
                            >
                              <option value="high">{t.savingsGoal.priority.high}</option>
                              <option value="medium">{t.savingsGoal.priority.medium}</option>
                              <option value="low">{t.savingsGoal.priority.low}</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                              {t.savingsGoal.input.goalStatus_label}
                            </label>
                            <div className="relative">
                              <input
                                type="number"
                                value={goal.alreadySaved || ''}
                                onChange={(e) => handleGoalChange(goal.id, 'alreadySaved', parseFloat(e.target.value) || 0)}
                                min="0"
                                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary"
                              />
                              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Panel 3: Savings & Investment Strategy */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                  Savings & Investment Strategy
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.savingsGoal.input.monthlySavings_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={monthlySavings || ''}
                        onChange={(e) => setMonthlySavings(parseFloat(e.target.value) || 0)}
                        min="0"
                        required
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                    <p className="text-xs text-secondary mt-1">Amount left after expenses, debts, and essentials</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.savingsGoal.input.allocation_label}
                    </label>
                    <select
                      value={allocationStrategy}
                      onChange={(e) => setAllocationStrategy(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="equal">{t.savingsGoal.allocation.equal}</option>
                      <option value="priority">{t.savingsGoal.allocation.priority}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.savingsGoal.input.investmentStrategy_label}
                    </label>
                    <select
                      value={investmentStrategy}
                      onChange={(e) => setInvestmentStrategy(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="savings_only">{t.savingsGoal.investmentStrategy.savings_only}</option>
                      <option value="conservative">{t.savingsGoal.investmentStrategy.conservative}</option>
                      <option value="balanced">{t.savingsGoal.investmentStrategy.balanced}</option>
                      <option value="growth">{t.savingsGoal.investmentStrategy.growth}</option>
                      <option value="aggressive">{t.savingsGoal.investmentStrategy.aggressive}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.savingsGoal.input.inflation_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={inflation || ''}
                        onChange={(e) => setInflation(parseFloat(e.target.value) || 0)}
                        min="0"
                        max="10"
                        step="0.1"
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">%</span>
                    </div>
                    <p className="text-xs text-secondary mt-1">Malaysia's typical inflation: 2-4% annually</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-primary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-primary transition-all"
                >
                  {t.savingsGoal.btn.calculate}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all"
                >
                  {t.savingsGoal.btn.reset}
                </button>
              </div>
            </form>
          </section>

          {/* Results Section */}
          {showResults && results && (
            <section id="results-section" className="max-w-6xl mx-auto">
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">{t.savingsGoal.result.title}</h2>
                </div>

                {/* Feasibility Assessment */}
                <div className={`mb-8 p-6 rounded-xl border ${results.feasibility === 'achievable' ? 'bg-green-900/20 border-green-800/50' : 'bg-yellow-900/20 border-yellow-800/50'}`}>
                  <h3 className="text-lg font-semibold text-primary mb-3">Overall Assessment</h3>
                  <p className="text-secondary leading-relaxed">
                    {results.feasibility === 'achievable'
                      ? t.savingsGoal.result.achievable
                          .replace(/\{\{available\}\}/g, formatCurrency(results.totalMonthlySavingsAvailable))
                          .replace(/\{\{surplus\}\}/g, formatCurrency(results.surplus))
                      : t.savingsGoal.result.challenging
                          .replace(/\{\{available\}\}/g, formatCurrency(results.totalMonthlySavingsAvailable))
                          .replace(/\{\{deficit\}\}/g, formatCurrency(results.deficit))}
                  </p>
                </div>

                {/* Goal Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {results.goals.map(goal => {
                    const statusBadge = getStatusBadge(goal)
                    const StatusIcon = statusBadge.icon
                    const timelineMonths = goal.timelineUnit === 'years' ? goal.timelineValue * 12 : goal.timelineValue

                    return (
                      <div key={goal.id} className="bg-black border border-zinc-800 rounded-xl p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold text-primary">{goal.name}</h3>
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${statusBadge.bg} ${statusBadge.color}`}>
                            <StatusIcon className="w-3 h-3" />
                            {statusBadge.text}
                          </span>
                        </div>

                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-secondary">Target Amount:</span>
                            <span className="text-primary font-mono font-semibold">{formatCurrency(goal.inflationAdjustedAmount)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-secondary">Already Saved:</span>
                            <span className="text-primary font-mono">{formatCurrency(goal.alreadySaved)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-secondary">Remaining Needed:</span>
                            <span className="text-primary font-mono font-semibold">{formatCurrency(goal.remainingNeeded)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-secondary">Timeline:</span>
                            <span className="text-primary">{timelineMonths} months ({goal.timelineValue} {goal.timelineUnit})</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-secondary">Monthly Needed (No Return):</span>
                            <span className="text-primary font-mono">{formatCurrency(goal.monthlyNeededNoReturn)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-secondary">Monthly Needed (With {results.expectedAnnualReturn}% return):</span>
                            <span className="text-primary font-mono font-semibold">{formatCurrency(goal.monthlyNeededWithReturn)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-secondary">Your Allocation:</span>
                            <span className="text-primary font-mono">{formatCurrency(goal.allocation || 0)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-secondary">Projected Achievement:</span>
                            <span className="text-primary">{formatDate(goal.projectedDate)}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Goals Comparison Table */}
                <div className="mb-8 overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Goal</th>
                        <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Target (RM)</th>
                        <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Remaining (RM)</th>
                        <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Monthly Needed</th>
                        <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Your Allocation</th>
                        <th className="text-center py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.goals.map(goal => {
                        const statusBadge = getStatusBadge(goal)
                        const StatusIcon = statusBadge.icon
                        return (
                          <tr key={goal.id} className="border-b border-zinc-800">
                            <td className="py-4 px-4 text-primary font-semibold">{goal.name}</td>
                            <td className="py-4 px-4 text-primary text-right font-mono">{formatCurrency(goal.inflationAdjustedAmount)}</td>
                            <td className="py-4 px-4 text-primary text-right font-mono">{formatCurrency(goal.remainingNeeded)}</td>
                            <td className="py-4 px-4 text-primary text-right font-mono">{formatCurrency(goal.monthlyNeededWithReturn)}</td>
                            <td className="py-4 px-4 text-primary text-right font-mono">{formatCurrency(goal.allocation || 0)}</td>
                            <td className="py-4 px-4 text-center">
                              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${statusBadge.bg} ${statusBadge.color}`}>
                                <StatusIcon className="w-3 h-3" />
                                {statusBadge.text}
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Action Plan */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-primary mb-3">Action Plan</h3>
                  <p className="text-secondary leading-relaxed whitespace-pre-line">
                    {t.savingsGoal.result.actionPlan.replace(/\{\{allocation\}\}/g, formatCurrency(monthlySavings))}
                  </p>
                </div>

                {/* Disclaimer */}
                <div className="flex gap-4 p-6 bg-black border border-zinc-800 rounded-lg mb-6">
                  <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-secondary leading-relaxed">
                    {t.savingsGoal.disclaimer}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://wa.me/60123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-primary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-primary transition-all flex items-center justify-center gap-2"
                  >
                    {t.savingsGoal.btn.openAccount}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/60123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
                  >
                    {t.savingsGoal.btn.advisor}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => alert('PDF download feature coming soon!')}
                    className="px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
                  >
                    {t.savingsGoal.btn.downloadPlan}
                    <Download className="w-4 h-4" />
                  </button>
                  <Link
                    href="/advisory"
                    className="px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
                  >
                    {t.savingsGoal.btn.tools}
                    <ArrowLeft className="w-4 h-4" />
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

