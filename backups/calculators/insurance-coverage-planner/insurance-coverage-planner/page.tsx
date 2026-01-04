'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowLeft, AlertCircle, ArrowRight, Shield, Heart, AlertTriangle, Home, TrendingUp } from 'lucide-react'

interface InsuranceResult {
  lifeInsuranceNeed: number
  healthInsuranceNeed: number
  criticalIllnessNeed: number
  disabilityInsuranceNeed: number
  propertyInsuranceNeed: number
  lifeInsurancePremium: number
  healthInsurancePremium: number
  criticalIllnessPremium: number
  disabilityInsurancePremium: number
  propertyInsurancePremium: number
  totalAnnualPremium: number
  protectionScore: number
  protectionLevel: 'excellent' | 'good' | 'fair'
}

export default function InsuranceCoveragePlannerPage() {
  const { t } = useLanguage()
  
  // Personal & Family Profile
  const [age, setAge] = useState<number>(30)
  const [gender, setGender] = useState<string>('male')
  const [smoking, setSmoking] = useState<string>('non')
  const [health, setHealth] = useState<string>('good')
  const [dependents, setDependents] = useState<number>(0)
  const [spouseIncome, setSpouseIncome] = useState<number>(0)
  
  // Financial Profile
  const [income, setIncome] = useState<number>(8000)
  const [debts, setDebts] = useState<number>(0)
  const [assets, setAssets] = useState<number>(0)
  const [homeOwnership, setHomeOwnership] = useState<string>('renting')
  const [homeValue, setHomeValue] = useState<number>(0)
  
  // Insurance Goals & Preferences
  const [goal, setGoal] = useState<string>('a')
  const [lifePreference, setLifePreference] = useState<string>('term')
  const [healthPreference, setHealthPreference] = useState<string>('basic')
  const [disabilityPreference, setDisabilityPreference] = useState<string>('optional')
  
  // Results
  const [results, setResults] = useState<InsuranceResult | null>(null)
  const [showResults, setShowResults] = useState(false)

  // Calculate insurance needs
  const calculateInsuranceNeeds = (): InsuranceResult => {
    // 1. LIFE INSURANCE RECOMMENDATION
    const annualIncome = income * 12
    const lifeInsuranceNeed = (annualIncome * 10) + debts
    
    // Adjust for dependents
    const dependentMultiplier = 1 + (dependents * 0.5)
    const adjustedLifeInsurance = lifeInsuranceNeed * dependentMultiplier
    
    // 2. HEALTH INSURANCE RECOMMENDATION
    let healthInsuranceNeed = 100000
    if (healthPreference === 'comprehensive') healthInsuranceNeed = 200000
    else if (healthPreference === 'premium') healthInsuranceNeed = 300000
    
    // Critical illness rider: 50-70% of life insurance
    const criticalIllnessNeed = adjustedLifeInsurance * 0.5
    
    // 3. DISABILITY / INCOME PROTECTION
    const disabilityMonthlyBenefit = income * 0.65
    const disabilityInsuranceNeed = disabilityMonthlyBenefit * 36 // 3 years
    
    // 4. PROPERTY INSURANCE
    let propertyInsuranceNeed = 0
    if (homeValue > 0) {
      propertyInsuranceNeed = homeValue + 50000 // Home + contents
    }
    
    // 5. ANNUAL PREMIUM ESTIMATES
    // Life Insurance Premium (per 100k coverage)
    let lifeInsurancePremium = 0
    if (lifePreference === 'term') {
      const basePremium = gender === 'male' ? 150 : 120
      const ageFactor = age < 30 ? 1 : age < 40 ? 1.5 : age < 50 ? 2.5 : 4
      const smokingFactor = smoking === 'smoker' ? 2 : 1
      lifeInsurancePremium = (adjustedLifeInsurance / 100000) * basePremium * ageFactor * smokingFactor
    } else if (lifePreference === 'whole') {
      lifeInsurancePremium = (adjustedLifeInsurance / 100000) * 800 // Approximate
    }
    
    // Health Insurance Premium
    const healthInsurancePremium = (healthInsuranceNeed / 100000) * 150 * (age < 40 ? 1 : age < 50 ? 1.3 : 1.6)
    
    // Critical Illness Premium
    const criticalIllnessPremium = (criticalIllnessNeed / 100000) * 100
    
    // Disability Insurance Premium
    const disabilityInsurancePremium = (disabilityMonthlyBenefit / 1000) * 30
    
    // Property Insurance Premium
    let propertyInsurancePremium = 0
    if (propertyInsuranceNeed > 0) {
      propertyInsurancePremium = (propertyInsuranceNeed / 100000) * 200
    }
    
    // Total Annual Premium
    const totalAnnualPremium = 
      lifeInsurancePremium + 
      healthInsurancePremium + 
      criticalIllnessPremium +
      (disabilityPreference === 'yes' || disabilityPreference === 'optional' ? disabilityInsurancePremium : 0) +
      propertyInsurancePremium
    
    // 6. PROTECTION COVERAGE SCORE (0-100)
    let protectionScore = 0
    
    // Life insurance score
    if (adjustedLifeInsurance >= annualIncome * 10) protectionScore += 30
    else if (adjustedLifeInsurance >= annualIncome * 5) protectionScore += 20
    else protectionScore += 10
    
    // Health insurance score
    if (healthPreference === 'premium') protectionScore += 25
    else if (healthPreference === 'comprehensive') protectionScore += 15
    else protectionScore += 8
    
    // Disability insurance score
    if (disabilityPreference === 'yes') protectionScore += 20
    else if (disabilityPreference === 'optional') protectionScore += 10
    
    // Property insurance score
    if (propertyInsuranceNeed > 0) protectionScore += 15
    
    // Age/Health adjustment
    if (age < 40 && health === 'good') protectionScore += 5
    
    return {
      lifeInsuranceNeed: Math.round(adjustedLifeInsurance),
      healthInsuranceNeed: healthInsuranceNeed,
      criticalIllnessNeed: Math.round(criticalIllnessNeed),
      disabilityInsuranceNeed: Math.round(disabilityInsuranceNeed),
      propertyInsuranceNeed: Math.round(propertyInsuranceNeed),
      lifeInsurancePremium: Math.round(lifeInsurancePremium),
      healthInsurancePremium: Math.round(healthInsurancePremium),
      criticalIllnessPremium: Math.round(criticalIllnessPremium),
      disabilityInsurancePremium: Math.round(disabilityInsurancePremium),
      propertyInsurancePremium: Math.round(propertyInsurancePremium),
      totalAnnualPremium: Math.round(totalAnnualPremium),
      protectionScore: Math.min(protectionScore, 100),
      protectionLevel: protectionScore >= 80 ? 'excellent' : protectionScore >= 60 ? 'good' : 'fair'
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

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (income <= 0) {
      alert('Please enter a valid income')
      return
    }
    
    const calculatedResults = calculateInsuranceNeeds()
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
    setAge(30)
    setGender('male')
    setSmoking('non')
    setHealth('good')
    setDependents(0)
    setSpouseIncome(0)
    setIncome(8000)
    setDebts(0)
    setAssets(0)
    setHomeOwnership('renting')
    setHomeValue(0)
    setGoal('a')
    setLifePreference('term')
    setHealthPreference('basic')
    setDisabilityPreference('optional')
    setResults(null)
    setShowResults(false)
  }

  const getProtectionScoreColor = (score: number): string => {
    if (score >= 80) return 'text-green-400'
    if (score >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getProtectionScoreBgColor = (score: number): string => {
    if (score >= 80) return 'bg-green-400'
    if (score >= 60) return 'bg-yellow-400'
    return 'bg-red-400'
  }

  const premiumPercentOfIncome = results && income > 0 
    ? (results.totalAnnualPremium / (income * 12)) * 100 
    : 0

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
              {t.insurancePlanner.header.title}
            </h1>
            <p className="text-secondary mx-auto max-w-3xl text-lg md:text-xl leading-relaxed mb-6">
              {t.insurancePlanner.header.subtitle}
            </p>
            
            {/* Notice Box */}
            <div className="max-w-4xl mx-auto p-6 bg-yellow-900/20 border border-yellow-800/50 rounded-xl">
              <p className="text-yellow-200 text-sm leading-relaxed">
                {t.insurancePlanner.header.notice}
              </p>
            </div>
          </div>

          {/* Input Section */}
          <section className="max-w-6xl mx-auto mb-16">
            <form onSubmit={handleCalculate} className="space-y-8">
              {/* Panel 1: Personal & Family Profile */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                  Personal & Family Profile
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.insurancePlanner.input.age_label}
                    </label>
                    <input
                      type="number"
                      value={age || ''}
                      onChange={(e) => setAge(parseInt(e.target.value) || 18)}
                      min="18"
                      max="80"
                      required
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.insurancePlanner.input.gender_label}
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="male">{t.insurancePlanner.gender.male}</option>
                      <option value="female">{t.insurancePlanner.gender.female}</option>
                      <option value="preferNot">{t.insurancePlanner.gender.preferNot}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.insurancePlanner.input.smoking_label}
                    </label>
                    <select
                      value={smoking}
                      onChange={(e) => setSmoking(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="non">{t.insurancePlanner.smoking.non}</option>
                      <option value="smoker">{t.insurancePlanner.smoking.smoker}</option>
                      <option value="ex">{t.insurancePlanner.smoking.ex}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.insurancePlanner.input.health_label}
                    </label>
                    <select
                      value={health}
                      onChange={(e) => setHealth(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="excellent">{t.insurancePlanner.health.excellent}</option>
                      <option value="good">{t.insurancePlanner.health.good}</option>
                      <option value="fair">{t.insurancePlanner.health.fair}</option>
                      <option value="poor">{t.insurancePlanner.health.poor}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.insurancePlanner.input.dependents_label}
                    </label>
                    <input
                      type="number"
                      value={dependents || ''}
                      onChange={(e) => setDependents(parseInt(e.target.value) || 0)}
                      min="0"
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.insurancePlanner.input.spouseIncome_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={spouseIncome || ''}
                        onChange={(e) => setSpouseIncome(parseFloat(e.target.value) || 0)}
                        min="0"
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 2: Financial Profile */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                  Financial Profile
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.insurancePlanner.input.income_label}
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
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.insurancePlanner.input.debts_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={debts || ''}
                        onChange={(e) => setDebts(parseFloat(e.target.value) || 0)}
                        min="0"
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.insurancePlanner.input.assets_label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={assets || ''}
                        onChange={(e) => setAssets(parseFloat(e.target.value) || 0)}
                        min="0"
                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.insurancePlanner.input.homeOwnership_label}
                    </label>
                    <select
                      value={homeOwnership}
                      onChange={(e) => setHomeOwnership(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="ownMortgage">{t.insurancePlanner.homeOwnership.ownMortgage}</option>
                      <option value="ownPaid">{t.insurancePlanner.homeOwnership.ownPaid}</option>
                      <option value="renting">{t.insurancePlanner.homeOwnership.renting}</option>
                      <option value="planning">{t.insurancePlanner.homeOwnership.planning}</option>
                    </select>
                  </div>
                  
                  {homeOwnership !== 'renting' && (
                    <div>
                      <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                        {t.insurancePlanner.input.homeValue_label}
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={homeValue || ''}
                          onChange={(e) => setHomeValue(parseFloat(e.target.value) || 0)}
                          min="0"
                          className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary font-mono focus:outline-none focus:border-primary transition-colors"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary font-mono">RM</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Panel 3: Insurance Coverage Goals */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                  {t.insurancePlanner.input.goal_label}
                </h3>
                
                <div className="space-y-4">
                  <label className="flex items-start gap-3 p-4 bg-black border border-zinc-800 rounded-lg cursor-pointer hover:border-zinc-700 transition-colors">
                    <input
                      type="radio"
                      name="goal"
                      value="a"
                      checked={goal === 'a'}
                      onChange={(e) => setGoal(e.target.value)}
                      className="mt-1"
                    />
                    <div>
                      <div className="text-primary font-semibold">{t.insurancePlanner.goal.a}</div>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 p-4 bg-black border border-zinc-800 rounded-lg cursor-pointer hover:border-zinc-700 transition-colors">
                    <input
                      type="radio"
                      name="goal"
                      value="b"
                      checked={goal === 'b'}
                      onChange={(e) => setGoal(e.target.value)}
                      className="mt-1"
                    />
                    <div>
                      <div className="text-primary font-semibold">{t.insurancePlanner.goal.b}</div>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 p-4 bg-black border border-zinc-800 rounded-lg cursor-pointer hover:border-zinc-700 transition-colors">
                    <input
                      type="radio"
                      name="goal"
                      value="c"
                      checked={goal === 'c'}
                      onChange={(e) => setGoal(e.target.value)}
                      className="mt-1"
                    />
                    <div>
                      <div className="text-primary font-semibold">{t.insurancePlanner.goal.c}</div>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 p-4 bg-black border border-zinc-800 rounded-lg cursor-pointer hover:border-zinc-700 transition-colors">
                    <input
                      type="radio"
                      name="goal"
                      value="d"
                      checked={goal === 'd'}
                      onChange={(e) => setGoal(e.target.value)}
                      className="mt-1"
                    />
                    <div>
                      <div className="text-primary font-semibold">{t.insurancePlanner.goal.d}</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Panel 4: Coverage Preferences */}
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-widest font-mono text-sm">
                  Coverage Preferences
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.insurancePlanner.input.lifePreference_label}
                    </label>
                    <select
                      value={lifePreference}
                      onChange={(e) => setLifePreference(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="term">{t.insurancePlanner.lifePreference.term}</option>
                      <option value="whole">{t.insurancePlanner.lifePreference.whole}</option>
                      <option value="combination">{t.insurancePlanner.lifePreference.combination}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.insurancePlanner.input.healthPreference_label}
                    </label>
                    <select
                      value={healthPreference}
                      onChange={(e) => setHealthPreference(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="basic">{t.insurancePlanner.healthPreference.basic}</option>
                      <option value="comprehensive">{t.insurancePlanner.healthPreference.comprehensive}</option>
                      <option value="premium">{t.insurancePlanner.healthPreference.premium}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary uppercase tracking-widest font-mono text-xs">
                      {t.insurancePlanner.input.disabilityPreference_label}
                    </label>
                    <select
                      value={disabilityPreference}
                      onChange={(e) => setDisabilityPreference(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-primary focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="yes">{t.insurancePlanner.disabilityPreference.yes}</option>
                      <option value="no">{t.insurancePlanner.disabilityPreference.no}</option>
                      <option value="optional">{t.insurancePlanner.disabilityPreference.optional}</option>
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
                  {t.insurancePlanner.btn.calculate}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all"
                >
                  {t.insurancePlanner.btn.reset}
                </button>
              </div>
            </form>
          </section>

          {/* Results Section */}
          {showResults && results && (
            <section id="results-section" className="max-w-6xl mx-auto">
              <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">{t.insurancePlanner.result.title}</h2>
                </div>

                {/* Protection Score */}
                <div className="mb-8">
                  <div className="bg-black border border-zinc-800 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-primary">{t.insurancePlanner.result.protectionScore}</h3>
                      <div className={`text-3xl font-bold ${getProtectionScoreColor(results.protectionScore)}`}>
                        {results.protectionScore}/100
                      </div>
                    </div>
                    <div className="relative h-4 bg-zinc-900 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${getProtectionScoreBgColor(results.protectionScore)}`}
                        style={{ width: `${results.protectionScore}%` }}
                      />
                    </div>
                    <p className="text-sm text-secondary mt-2">
                      Protection Level: <span className="text-primary font-semibold capitalize">{results.protectionLevel}</span>
                    </p>
                  </div>
                </div>

                {/* Coverage Recommendation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Life Insurance */}
                  <div className="bg-black border border-zinc-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-primary">{t.insurancePlanner.result.lifeInsurance}</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-secondary">Recommended Coverage:</span>
                        <span className="text-primary font-mono font-semibold">{formatCurrency(results.lifeInsuranceNeed)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary">Type:</span>
                        <span className="text-primary">{lifePreference === 'term' ? 'Term Life' : lifePreference === 'whole' ? 'Whole Life' : 'Combination'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary">Annual Premium:</span>
                        <span className="text-primary font-mono">{formatCurrency(results.lifeInsurancePremium)}</span>
                      </div>
                      <p className="text-xs text-secondary mt-3">
                        Protects {dependents} dependents + covers {formatCurrency(debts)} in debts
                      </p>
                    </div>
                  </div>

                  {/* Health Insurance */}
                  <div className="bg-black border border-zinc-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-primary">{t.insurancePlanner.result.healthInsurance}</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-secondary">Recommended Coverage:</span>
                        <span className="text-primary font-mono font-semibold">{formatCurrency(results.healthInsuranceNeed)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary">Type:</span>
                        <span className="text-primary capitalize">{healthPreference}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary">Annual Premium:</span>
                        <span className="text-primary font-mono">{formatCurrency(results.healthInsurancePremium)}</span>
                      </div>
                      <p className="text-xs text-secondary mt-3">
                        Covers hospitalisation, outpatient, critical illness
                      </p>
                    </div>
                  </div>

                  {/* Critical Illness */}
                  <div className="bg-black border border-zinc-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-primary">{t.insurancePlanner.result.criticalIllness}</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-secondary">Recommended Coverage:</span>
                        <span className="text-primary font-mono font-semibold">{formatCurrency(results.criticalIllnessNeed)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary">Annual Premium:</span>
                        <span className="text-primary font-mono">{formatCurrency(results.criticalIllnessPremium)}</span>
                      </div>
                      <p className="text-xs text-secondary mt-3">
                        Covers cancer, heart attack, stroke, and other critical conditions
                      </p>
                    </div>
                  </div>

                  {/* Disability Insurance */}
                  {(disabilityPreference === 'yes' || disabilityPreference === 'optional') && (
                    <div className="bg-black border border-zinc-800 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-6 h-6 text-primary" />
                        <h3 className="text-lg font-semibold text-primary">{t.insurancePlanner.result.disabilityInsurance}</h3>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-secondary">Monthly Benefit:</span>
                          <span className="text-primary font-mono font-semibold">{formatCurrency(income * 0.65)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary">Coverage:</span>
                          <span className="text-primary font-mono">{formatCurrency(results.disabilityInsuranceNeed)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary">Annual Premium:</span>
                          <span className="text-primary font-mono">{formatCurrency(results.disabilityInsurancePremium)}</span>
                        </div>
                        <p className="text-xs text-secondary mt-3">
                          Replaces 65% income for 36 months if unable to work
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Property Insurance */}
                  {results.propertyInsuranceNeed > 0 && (
                    <div className="bg-black border border-zinc-800 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Home className="w-6 h-6 text-primary" />
                        <h3 className="text-lg font-semibold text-primary">{t.insurancePlanner.result.propertyInsurance}</h3>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-secondary">Recommended Coverage:</span>
                          <span className="text-primary font-mono font-semibold">{formatCurrency(results.propertyInsuranceNeed)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary">Annual Premium:</span>
                          <span className="text-primary font-mono">{formatCurrency(results.propertyInsurancePremium)}</span>
                        </div>
                        <p className="text-xs text-secondary mt-3">
                          Covers house structure, contents, and liability
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Annual Premium Summary */}
                <div className="bg-black border border-zinc-800 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-primary mb-4">{t.insurancePlanner.result.totalAnnualPremium}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">Total Annual Premium:</span>
                      <span className="text-2xl font-bold text-primary font-mono">{formatCurrency(results.totalAnnualPremium)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">Monthly Equivalent:</span>
                      <span className="text-lg font-semibold text-primary font-mono">{formatCurrency(results.totalAnnualPremium / 12)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">% of Monthly Income:</span>
                      <span className="text-lg font-semibold text-primary">{formatPercentage(premiumPercentOfIncome, 1)}</span>
                    </div>
                  </div>
                </div>

                {/* Key Insight */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-primary mb-3">Key Insight</h3>
                  <p className="text-secondary leading-relaxed">
                    {t.insurancePlanner.result.insight
                      .replace(/\{\{total\}\}/g, formatCurrency(results.totalAnnualPremium))
                      .replace(/\{\{percent\}\}/g, premiumPercentOfIncome.toFixed(1))}
                  </p>
                </div>

                {/* Disclaimer */}
                <div className="flex gap-4 p-6 bg-black border border-zinc-800 rounded-lg mb-6">
                  <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-secondary leading-relaxed">
                    {t.insurancePlanner.disclaimer}
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
                    {t.insurancePlanner.btn.quotes}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/60123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
                  >
                    {t.insurancePlanner.btn.advisor}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/tools"
                    className="flex-1 px-6 py-3 bg-transparent border border-zinc-800 rounded-full text-secondary font-mono text-sm uppercase tracking-widest hover:bg-zinc-900/50 hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
                  >
                    {t.insurancePlanner.btn.tools}
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

