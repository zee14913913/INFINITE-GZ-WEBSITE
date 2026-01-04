'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowLeft, Plus, Download, TrendingUp, TrendingDown, AlertCircle, Filter } from 'lucide-react'

interface Expense {
  id: string
  date: string
  category: string
  amount: number
  description: string
}

interface Budget {
  category: string
  budget: number
}

const CATEGORIES = ['food', 'transport', 'utilities', 'shopping', 'entertainment', 'health', 'education', 'miscellaneous', 'other']

const CATEGORY_COLORS: Record<string, string> = {
  food: '#ef4444',
  transport: '#3b82f6',
  utilities: '#10b981',
  shopping: '#f59e0b',
  entertainment: '#8b5cf6',
  health: '#ec4899',
  education: '#06b6d4',
  miscellaneous: '#64748b',
  other: '#94a3b8',
}

export default function ExpenseTrackerPage() {
  const { t } = useLanguage()

  // State
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [budgets, setBudgets] = useState<Budget[]>([])
  const [income, setIncome] = useState<number>(0)

  // Form state
  const [formDate, setFormDate] = useState<string>(new Date().toISOString().split('T')[0])
  const [formCategory, setFormCategory] = useState<string>('food')
  const [formAmount, setFormAmount] = useState<number>(0)
  const [formDescription, setFormDescription] = useState<string>('')

  // Filter state
  const [filterDateRange, setFilterDateRange] = useState<string>('current')
  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [filterMinAmount, setFilterMinAmount] = useState<number>(0)

  // Load from localStorage on mount
  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenseTracker_expenses')
    const savedBudgets = localStorage.getItem('expenseTracker_budgets')
    const savedIncome = localStorage.getItem('expenseTracker_income')

    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses))
    }

    if (savedBudgets) {
      setBudgets(JSON.parse(savedBudgets))
    } else {
      // Initialize default budgets
      const defaultBudgets: Budget[] = CATEGORIES.map(cat => ({ category: cat, budget: 0 }))
      setBudgets(defaultBudgets)
    }

    if (savedIncome) {
      setIncome(parseFloat(savedIncome))
    }
  }, [])

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (expenses.length > 0 || localStorage.getItem('expenseTracker_expenses')) {
      localStorage.setItem('expenseTracker_expenses', JSON.stringify(expenses))
    }
  }, [expenses])

  useEffect(() => {
    if (budgets.length > 0) {
      localStorage.setItem('expenseTracker_budgets', JSON.stringify(budgets))
    }
  }, [budgets])

  useEffect(() => {
    if (income > 0 || localStorage.getItem('expenseTracker_income')) {
      localStorage.setItem('expenseTracker_income', income.toString())
    }
  }, [income])

  // Get current month expenses
  const getCurrentMonthExpenses = (): Expense[] => {
    const now = new Date()
    const currentMonth = now.getMonth()
    const currentYear = now.getFullYear()

    return expenses.filter(exp => {
      const expDate = new Date(exp.date)
      return expDate.getMonth() === currentMonth && expDate.getFullYear() === currentYear
    })
  }

  // Get filtered expenses
  const getFilteredExpenses = (): Expense[] => {
    let filtered = expenses

    // Date range filter
    if (filterDateRange === 'current') {
      filtered = getCurrentMonthExpenses()
    } else if (filterDateRange === 'last') {
      const now = new Date()
      const lastMonth = now.getMonth() === 0 ? 11 : now.getMonth() - 1
      const lastYear = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear()

      filtered = expenses.filter(exp => {
        const expDate = new Date(exp.date)
        return expDate.getMonth() === lastMonth && expDate.getFullYear() === lastYear
      })
    }

    // Category filter
    if (filterCategory !== 'all') {
      filtered = filtered.filter(exp => exp.category === filterCategory)
    }

    // Amount filter
    if (filterMinAmount > 0) {
      filtered = filtered.filter(exp => exp.amount >= filterMinAmount)
    }

    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  // Calculate spending by category for current month
  const getSpendingByCategory = (): Record<string, number> => {
    const monthExpenses = getCurrentMonthExpenses()
    const spending: Record<string, number> = {}

    CATEGORIES.forEach(cat => {
      spending[cat] = monthExpenses
        .filter(exp => exp.category === cat)
        .reduce((sum, exp) => sum + exp.amount, 0)
    })

    return spending
  }

  // Calculate totals
  const currentMonthExpenses = getCurrentMonthExpenses()
  const totalExpenses = currentMonthExpenses.reduce((sum, exp) => sum + exp.amount, 0)
  const remainingBalance = income - totalExpenses
  const savingsRate = income > 0 ? (remainingBalance / income) * 100 : 0
  const spendingByCategory = getSpendingByCategory()

  // Get category name
  const getCategoryName = (category: string): string => {
    return t.expenseTracker.category[category as keyof typeof t.expenseTracker.category] || category
  }

  // Handle add expense
  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault()

    if (formAmount <= 0) {
      alert('Please enter a valid amount')
      return
    }

    const newExpense: Expense = {
      id: Date.now().toString(),
      date: formDate,
      category: formCategory,
      amount: formAmount,
      description: formDescription,
    }

    setExpenses([...expenses, newExpense])

    // Reset form
    setFormAmount(0)
    setFormDescription('')
  }

  // Handle budget update
  const handleBudgetUpdate = (category: string, budget: number) => {
    setBudgets(budgets.map(b =>
      b.category === category ? { ...b, budget } : b
    ))
  }

  // Handle save budgets
  const handleSaveBudgets = () => {
    localStorage.setItem('expenseTracker_budgets', JSON.stringify(budgets))
    alert('Budgets saved successfully!')
  }

  // Export to CSV
  const handleExportCSV = () => {
    const filtered = getFilteredExpenses()
    const headers = ['Date', 'Category', 'Description', 'Amount (RM)']
    const rows = filtered.map(exp => [
      exp.date,
      getCategoryName(exp.category),
      exp.description || '',
      exp.amount.toFixed(2),
    ])

    const csv = [headers.join(','), ...rows.map(row => row.join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `expenses_${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  // Get insights
  const getInsights = () => {
    const monthExpenses = getCurrentMonthExpenses()

    // Highest spending category
    let highestCategory = ''
    let highestAmount = 0
    Object.entries(spendingByCategory).forEach(([cat, amount]) => {
      if (amount > highestAmount) {
        highestAmount = amount
        highestCategory = cat
      }
    })

    const highestPercent = totalExpenses > 0 ? (highestAmount / totalExpenses) * 100 : 0

    // Most frequent
    const transactionCount = monthExpenses.length
    const averageTransaction = transactionCount > 0 ? totalExpenses / transactionCount : 0

    // Budget status
    let onTrackCount = 0
    let overBudgetCount = 0
    budgets.forEach(budget => {
      const spent = spendingByCategory[budget.category] || 0
      if (budget.budget > 0) {
        if (spent <= budget.budget) {
          onTrackCount++
        } else {
          overBudgetCount++
        }
      }
    })

    // Saving recommendation
    let recommendation = ''
    if (highestAmount > 0 && highestCategory) {
      const savings = highestAmount * 0.2
      recommendation = t.expenseTracker.result.savingRecommendation
        .replace(/\{\{category\}\}/g, getCategoryName(highestCategory))
        .replace(/\{\{percent\}\}/g, '20')
        .replace(/\{\{savings\}\}/g, savings.toFixed(0))
    }

    return {
      highestCategory,
      highestAmount,
      highestPercent,
      transactionCount,
      averageTransaction,
      onTrackCount,
      overBudgetCount,
      recommendation,
    }
  }

  const insights = getInsights()
  const filteredExpenses = getFilteredExpenses()

  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency: 'MYR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  // Calculate running balance
  const calculateRunningBalance = (expense: Expense, index: number): number => {
    const expensesUpToThis = filteredExpenses.slice(index).reverse()
    let balance = income
    expensesUpToThis.forEach(exp => {
      balance -= exp.amount
    })
    return balance
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
              {t.expenseTracker.header.title}
            </h1>
            <p className="text-secondary mx-auto max-w-3xl text-lg md:text-xl leading-relaxed">
              {t.expenseTracker.header.subtitle}
            </p>
          </div>

          {/* Quick Expense Entry */}
          <section className="max-w-6xl mx-auto mb-8">
            <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                Quick Expense Entry
              </h3>

              <form onSubmit={handleAddExpense} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                    {t.expenseTracker.input.date_label}
                  </label>
                  <input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                    {t.expenseTracker.input.category_label}
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary transition-colors"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{getCategoryName(cat)}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                    {t.expenseTracker.input.amount_label}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={formAmount || ''}
                      onChange={(e) => setFormAmount(parseFloat(e.target.value) || 0)}
                      min="0"
                      step="0.01"
                      required
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                    {t.expenseTracker.input.description_label}
                  </label>
                  <input
                    type="text"
                    value={formDescription}
                    onChange={(e) => setFormDescription(e.target.value)}
                    placeholder="Optional"
                    className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-primary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-primary transition-all flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    {t.expenseTracker.btn.addExpense}
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Dashboard Summary */}
          <section className="max-w-6xl mx-auto mb-8">
            <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                {t.expenseTracker.dashboard.currentMonth}
              </h3>

              {/* Income Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                  {t.expenseTracker.dashboard.totalIncome}
                </label>
                <div className="relative max-w-xs">
                  <input
                    type="number"
                    value={income || ''}
                    onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
                    min="0"
                    className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-black border border-zinc-800 rounded-xl p-4">
                  <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">
                    {t.expenseTracker.dashboard.totalExpenses}
                  </span>
                  <div className="text-2xl font-bold text-primary">{formatCurrency(totalExpenses)}</div>
                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-4">
                  <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">
                    {t.expenseTracker.dashboard.remainingBalance}
                  </span>
                  <div className={`text-2xl font-bold ${remainingBalance >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {formatCurrency(remainingBalance)}
                  </div>
                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-4">
                  <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">
                    {t.expenseTracker.dashboard.savingsRate}
                  </span>
                  <div className={`text-2xl font-bold flex items-center gap-2 ${savingsRate >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {savingsRate >= 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                    {savingsRate.toFixed(1)}%
                  </div>
                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-4">
                  <span className="text-xs text-secondary uppercase tracking-widest font-mono block mb-1">
                    Transactions
                  </span>
                  <div className="text-2xl font-bold text-primary">{currentMonthExpenses.length}</div>
                </div>
              </div>

              {/* Spending by Category (Simple Bar Chart) */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-widest font-mono">
                  Spending by Category
                </h4>
                <div className="space-y-3">
                  {CATEGORIES.map(cat => {
                    const spent = spendingByCategory[cat] || 0
                    const percent = totalExpenses > 0 ? (spent / totalExpenses) * 100 : 0
                    const budget = budgets.find(b => b.category === cat)?.budget || 0
                    const overBudget = budget > 0 && spent > budget

                    return (
                      <div key={cat} className="space-y-1">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-primary">{getCategoryName(cat)}</span>
                          <span className="text-secondary font-mono">{formatCurrency(spent)}</span>
                        </div>
                        <div className="relative h-3 bg-zinc-900 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${Math.min(percent, 100)}%`,
                              backgroundColor: overBudget ? '#ef4444' : CATEGORY_COLORS[cat],
                            }}
                          />
                        </div>
                        {budget > 0 && (
                          <div className="flex justify-between items-center text-xs text-secondary">
                            <span>Budget: {formatCurrency(budget)}</span>
                            <span className={overBudget ? 'text-red-400' : 'text-green-400'}>
                              {overBudget ? 'Over by ' + formatCurrency(spent - budget) : 'Remaining: ' + formatCurrency(budget - spent)}
                            </span>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Monthly Budget Settings */}
          <section className="max-w-6xl mx-auto mb-8">
            <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-primary uppercase tracking-widest font-mono text-sm">
                  Monthly Budget Settings
                </h3>
                <button
                  onClick={handleSaveBudgets}
                  className="px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-primary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-primary transition-all"
                >
                  {t.expenseTracker.btn.saveBudget}
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">
                        {t.expenseTracker.budget.category}
                      </th>
                      <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">
                        {t.expenseTracker.budget.monthlyBudget}
                      </th>
                      <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">
                        {t.expenseTracker.budget.spentYTD}
                      </th>
                      <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">
                        {t.expenseTracker.budget.percentUsed}
                      </th>
                      <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">
                        {t.expenseTracker.budget.remaining}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CATEGORIES.map(cat => {
                      const budget = budgets.find(b => b.category === cat)?.budget || 0
                      const spent = spendingByCategory[cat] || 0
                      const percentUsed = budget > 0 ? (spent / budget) * 100 : 0
                      const remaining = budget - spent

                      return (
                        <tr key={cat} className="border-b border-zinc-800">
                          <td className="py-3 px-4 text-primary">{getCategoryName(cat)}</td>
                          <td className="py-3 px-4">
                            <div className="relative">
                              <input
                                type="number"
                                value={budget || ''}
                                onChange={(e) => handleBudgetUpdate(cat, parseFloat(e.target.value) || 0)}
                                min="0"
                                className="w-full px-3 py-2 bg-black border border-zinc-800 rounded text-primary font-mono text-sm text-right focus:outline-none focus:border-primary"
                              />
                              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary font-mono text-xs">RM</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-primary font-mono text-right">{formatCurrency(spent)}</td>
                          <td className={`py-3 px-4 font-mono text-right ${percentUsed > 100 ? 'text-red-400' : percentUsed > 80 ? 'text-yellow-400' : 'text-green-400'}`}>
                            {percentUsed.toFixed(1)}%
                          </td>
                          <td className={`py-3 px-4 font-mono text-right ${remaining >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {formatCurrency(remaining)}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Expense List & Filtering */}
          <section className="max-w-6xl mx-auto mb-8">
            <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-primary uppercase tracking-widest font-mono text-sm">
                  Expense List
                </h3>
                <button
                  onClick={handleExportCSV}
                  className="flex items-center gap-2 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all"
                >
                  <Download className="w-4 h-4" />
                  {t.expenseTracker.btn.export}
                </button>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                    Date Range
                  </label>
                  <select
                    value={filterDateRange}
                    onChange={(e) => setFilterDateRange(e.target.value)}
                    className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="current">This Month</option>
                    <option value="last">Last Month</option>
                    <option value="all">All Time</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                    Category
                  </label>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="all">All Categories</option>
                    {CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{getCategoryName(cat)}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                    Min Amount (RM)
                  </label>
                  <input
                    type="number"
                    value={filterMinAmount || ''}
                    onChange={(e) => setFilterMinAmount(parseFloat(e.target.value) || 0)}
                    min="0"
                    className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Expense Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Date</th>
                      <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Category</th>
                      <th className="text-left py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Description</th>
                      <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Amount (RM)</th>
                      <th className="text-right py-3 px-4 text-xs text-secondary uppercase tracking-widest font-mono">Running Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredExpenses.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-secondary">
                          No expenses found. Add your first expense above.
                        </td>
                      </tr>
                    ) : (
                      filteredExpenses.map((expense, index) => {
                        const runningBalance = calculateRunningBalance(expense, index)
                        return (
                          <tr key={expense.id} className="border-b border-zinc-800">
                            <td className="py-3 px-4 text-primary font-mono text-sm">{expense.date}</td>
                            <td className="py-3 px-4 text-primary">{getCategoryName(expense.category)}</td>
                            <td className="py-3 px-4 text-secondary">{expense.description || '-'}</td>
                            <td className="py-3 px-4 text-primary font-mono text-right">{formatCurrency(expense.amount)}</td>
                            <td className={`py-3 px-4 font-mono text-right ${runningBalance >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {formatCurrency(runningBalance)}
                            </td>
                          </tr>
                        )
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Insights Section */}
          {currentMonthExpenses.length > 0 && (
            <section className="max-w-6xl mx-auto mb-8">
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                  Monthly Spending Insights
                </h3>

                <div className="space-y-4">
                  {insights.highestCategory && (
                    <div className="bg-black border border-zinc-800 rounded-xl p-4">
                      <p className="text-secondary">
                        {t.expenseTracker.result.highestCategory
                          .replace(/\{\{category\}\}/g, getCategoryName(insights.highestCategory))
                          .replace(/\{\{amount\}\}/g, formatCurrency(insights.highestAmount))
                          .replace(/\{\{percent\}\}/g, insights.highestPercent.toFixed(1))}
                      </p>
                    </div>
                  )}

                  <div className="bg-black border border-zinc-800 rounded-xl p-4">
                    <p className="text-secondary">
                      {t.expenseTracker.result.mostFrequent
                        .replace(/\{\{count\}\}/g, insights.transactionCount.toString())
                        .replace(/\{\{average\}\}/g, formatCurrency(insights.averageTransaction))}
                    </p>
                  </div>

                  <div className="bg-black border border-zinc-800 rounded-xl p-4">
                    <p className="text-secondary">
                      {t.expenseTracker.result.budgetStatus
                        .replace(/\{\{onTrack\}\}/g, insights.onTrackCount.toString())
                        .replace(/\{\{overBudget\}\}/g, insights.overBudgetCount.toString())}
                    </p>
                  </div>

                  {insights.recommendation && (
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                      <p className="text-primary font-semibold">{insights.recommendation}</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Footer & CTA */}
          <section className="max-w-6xl mx-auto">
            <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
              {/* Key Takeaway */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Key Takeaway</h3>
                <p className="text-secondary leading-relaxed">
                  {t.expenseTracker.result.takeaway
                    .replace(/\{\{total\}\}/g, formatCurrency(totalExpenses))
                    .replace(/\{\{categories\}\}/g, Object.values(spendingByCategory).filter(v => v > 0).length.toString())
                    .replace(/\{\{savings_opportunity\}\}/g, insights.recommendation || 'Keep tracking to identify more saving opportunities.')}
                </p>
              </div>

              {/* Disclaimer */}
              <div className="flex gap-4 p-6 bg-black border border-zinc-800 rounded-lg mb-6">
                <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-xs text-secondary leading-relaxed">
                  {t.expenseTracker.disclaimer}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleExportCSV}
                  className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-primary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-primary transition-all flex items-center justify-center gap-2"
                >
                  {t.expenseTracker.btn.download}
                  <Download className="w-4 h-4" />
                </button>
                <Link
                  href="/advisory"
                  className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
                >
                  {t.expenseTracker.btn.tools}
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

