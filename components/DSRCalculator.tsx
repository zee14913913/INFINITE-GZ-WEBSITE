'use client';

import React, { useState, useEffect } from 'react';
import {
  Calculator,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle,
  Download,
  BarChart3,
  Target,
  Clock,
  DollarSign,
  Sparkles,
  Shield,
  ChevronDown,
  ChevronUp,
  Upload
} from 'lucide-react';
import {
  bankStandardsReal2025,
  getDSRLimit,
  calculateRecognizedIncome,
  checkIdentityEligibility,
  type LoanType,
  type ApplicantIdentity,
  type EmploymentType
} from '@/lib/bankStandardsReal2025';
import { calculateDiminishingRateMonthlyPayment } from '@/lib/dsrCalculator';

// 身份类型
const IDENTITY_TYPES = [
  { value: 'citizen', label: 'Malaysian Citizen', labelZh: '马来西亚公民', labelMs: 'Warganegara Malaysia' },
  { value: 'pr', label: 'Permanent Resident', labelZh: '永久居民', labelMs: 'Pemastautin Tetap' },
  { value: 'civil_servant', label: 'Civil Servant', labelZh: '公务员', labelMs: 'Penjawat Awam' },
  { value: 'glc', label: 'GLC Employee', labelZh: 'GLC员工', labelMs: 'Pekerja GLC' },
  { value: 'self_employed', label: 'Self-Employed', labelZh: '自雇企业主', labelMs: 'Bekerja Sendiri' },
  { value: 'foreigner', label: 'Foreigner', labelZh: '外国人', labelMs: 'Warga Asing' },
];

// 就业类型
const EMPLOYMENT_TYPES = [
  { value: 'salaried', label: 'Salaried Employee', labelZh: '受薪员工', labelMs: 'Pekerja Bergaji' },
  { value: 'self_employed', label: 'Self-Employed', labelZh: '自雇', labelMs: 'Bekerja Sendiri' },
  { value: 'government', label: 'Government', labelZh: '政府公务员', labelMs: 'Kerajaan' },
  { value: 'contract', label: 'Contract', labelZh: '合约工', labelMs: 'Kontrak' },
];

// 贷款类型
const LOAN_TYPES = [
  { value: 'personal', label: 'Personal Loan', labelZh: '个人贷款', labelMs: 'Pinjaman Peribadi' },
  { value: 'housing', label: 'Housing Loan', labelZh: '房屋贷款', labelMs: 'Pinjaman Perumahan' },
  { value: 'auto', label: 'Auto Loan', labelZh: '汽车贷款', labelMs: 'Pinjaman Kereta' },
  { value: 'business', label: 'Business Loan', labelZh: '营运资金', labelMs: 'Pinjaman Perniagaan' },
];

// 映射函数：将UI中的贷款类型映射到数据模型中的LoanType
function mapLoanType(uiLoanType: string): LoanType {
  switch (uiLoanType) {
    case 'personal': return 'personal';
    case 'housing': return 'housing';
    case 'auto': return 'car';
    case 'business': return 'sme_loan';
    default: return 'personal';
  }
}

// 映射函数：将UI中的身份类型映射到数据模型中的ApplicantIdentity
function mapIdentityType(uiIdentityType: string): ApplicantIdentity {
  switch (uiIdentityType) {
    case 'citizen': return 'malaysian_citizen';
    case 'pr': return 'permanent_resident';
    case 'civil_servant': return 'government_employee';
    case 'glc': return 'glc_employee';
    case 'self_employed': return 'self_employed';
    case 'foreigner': return 'foreigner';
    default: return 'malaysian_citizen';
  }
}

// 映射函数：将UI中的就业类型映射到数据模型中的EmploymentType
function mapEmploymentType(uiEmploymentType: string): EmploymentType {
  switch (uiEmploymentType) {
    case 'salaried': return 'salaried';
    case 'self_employed': return 'self_employed';
    case 'government': return 'government';
    case 'contract': return 'contract';
    default: return 'salaried';
  }
}

interface DSRCalculatorProps {
  language?: 'en' | 'zh' | 'ms';
}

export default function DSRCalculator({ language = 'en' }: DSRCalculatorProps) {
  // 状态管理
  const [step, setStep] = useState(1);
  const [identityType, setIdentityType] = useState('citizen');
  const [employmentType, setEmploymentType] = useState('salaried');
  const [businessYears, setBusinessYears] = useState(3);

  // 收入信息（简化版：净月收入为主要字段）
  const [netIncome, setNetIncome] = useState(5170); // 主要字段：净月收入

  // 高级选项（可选，用于详细计算或显示）
  const [showAdvancedIncome, setShowAdvancedIncome] = useState(false);
  const [grossSalary, setGrossSalary] = useState(6000);
  const [epfDeduction, setEpfDeduction] = useState(480);
  const [incomeTax, setIncomeTax] = useState(300);
  const [socso, setSocso] = useState(50);

  // 现有债务
  const [housingLoan, setHousingLoan] = useState(0);
  const [autoLoan, setAutoLoan] = useState(0);
  const [personalLoan, setPersonalLoan] = useState(0);
  const [ptptn, setPtptn] = useState(0);
  const [businessLoan, setBusinessLoan] = useState(0); // 新增：商业贷款
  const [overdraft, setOverdraft] = useState(0); // 新增：透支额度
  const [creditCards, setCreditCards] = useState<Array<{ used: number; limit: number }>>([]);

  // 贷款需求
  const [loanType, setLoanType] = useState('personal');
  const [loanAmount, setLoanAmount] = useState(100000);
  const [loanYears, setLoanYears] = useState(5);
  const [interestRate, setInterestRate] = useState(7);

  // 计算结果
  const [totalCommitments, setTotalCommitments] = useState(0);
  const [newMonthlyPayment, setNewMonthlyPayment] = useState(0);
  const [dsr, setDsr] = useState(0);
  const [bankResults, setBankResults] = useState<any[]>([]);
  const [recommendations, setRecommendations] = useState<any[]>([]);

  // 高级选项：自动计算净收入（如果用户使用高级选项）
  useEffect(() => {
    if (showAdvancedIncome && grossSalary > 0) {
      const calculated = grossSalary - epfDeduction - incomeTax - socso;
      setNetIncome(calculated);
    }
  }, [showAdvancedIncome, grossSalary, epfDeduction, incomeTax, socso]);

  // 高级选项：自动计算EPF（8%）
  useEffect(() => {
    if (showAdvancedIncome && grossSalary > 0) {
      setEpfDeduction(grossSalary * 0.08);
    }
  }, [showAdvancedIncome, grossSalary]);

  // 计算总承诺
  useEffect(() => {
    let total = housingLoan + autoLoan + personalLoan + ptptn + businessLoan + overdraft;
    creditCards.forEach(card => {
      total += card.used * 0.05; // 5%规则
    });
    setTotalCommitments(total);
  }, [housingLoan, autoLoan, personalLoan, ptptn, businessLoan, overdraft, creditCards]);

  // 计算新贷款月供（使用减余法/amortization公式）
  useEffect(() => {
    if (loanAmount > 0 && loanYears > 0 && interestRate >= 0) {
      const result = calculateDiminishingRateMonthlyPayment(
        loanAmount,
        loanYears,
        interestRate
      );
      setNewMonthlyPayment(result.monthlyPayment);
    } else {
      setNewMonthlyPayment(0);
    }
  }, [loanAmount, loanYears, interestRate]);

  // 计算DSR
  useEffect(() => {
    if (netIncome > 0) {
      const totalWithNewLoan = totalCommitments + newMonthlyPayment;
      const calculatedDsr = (totalWithNewLoan / netIncome) * 100;
      setDsr(calculatedDsr);
    }
  }, [totalCommitments, newMonthlyPayment, netIncome]);

  // 评估所有银行（使用完整的银行标准数据）
  useEffect(() => {
    if (netIncome <= 0) {
      setBankResults([]);
      setRecommendations([]);
      return;
    }

    // 映射类型
    const mappedLoanType = mapLoanType(loanType);
    const mappedIdentity = mapIdentityType(identityType);
    const mappedEmploymentType = mapEmploymentType(employmentType);

    const results = bankStandardsReal2025.map(bank => {
      // 1. 检查身份资格
      const eligibility = checkIdentityEligibility(bank.bankCode, mappedIdentity);
      if (!eligibility.accepted) {
        return {
          code: bank.bankCode,
          name: bank.bankName,
          status: 'rejected',
          statusColor: 'red',
          reason: eligibility.message,
          dsrLimit: 0,
          recognizedIncome: 0,
          adjustedDsr: 0,
          margin: 0,
        };
      }

      // 2. 计算认定收入（考虑就业类型和身份调整）
      // 如果用户使用了高级选项，使用总薪资；否则使用净收入作为基础
      const grossIncome = showAdvancedIncome && grossSalary > 0
        ? grossSalary
        : netIncome * 1.15; // 如果只输入净收入，估算总薪资（假设扣除约15%）

      const incomeRecognition = calculateRecognizedIncome(
        bank.bankCode,
        grossIncome,
        mappedEmploymentType,
        businessYears
      );

      let recognizedIncome = incomeRecognition.recognizedIncome;
      if (recognizedIncome <= 0) {
        // 如果认定收入为0（例如自雇年限不足），使用净收入作为fallback
        recognizedIncome = netIncome * 0.5; // 保守估计
      }

      // 3. 应用身份相关的DSR调整
      let dsrAdjustment = 0;
      if (eligibility.conditions?.dsrAdjustment) {
        dsrAdjustment = eligibility.conditions.dsrAdjustment;
      }

      // 4. 获取DSR限制
      const baseDsrLimit = getDSRLimit(bank.bankCode, mappedLoanType, recognizedIncome);
      const adjustedDsrLimit = Math.max(0, baseDsrLimit + dsrAdjustment);

      // 5. 计算调整后的DSR
      const totalMonthlyCommitment = totalCommitments + newMonthlyPayment;
      const adjustedDsr = recognizedIncome > 0
        ? (totalMonthlyCommitment / recognizedIncome) * 100
        : 100;

      // 6. 评估状态
      let status = 'rejected';
      let statusColor = 'red';
      if (adjustedDsr <= adjustedDsrLimit) {
        status = 'approved';
        statusColor = 'green';
      } else if (adjustedDsr <= adjustedDsrLimit + 10) {
        status = 'risky';
        statusColor = 'yellow';
      }

      return {
        code: bank.bankCode,
        name: bank.bankName,
        status,
        statusColor,
        reason: eligibility.conditions?.specialNotes || '',
        dsrLimit: adjustedDsrLimit,
        recognizedIncome,
        adjustedDsr,
        margin: adjustedDsrLimit - adjustedDsr,
        incomeRecognitionRate: incomeRecognition.recognitionRate,
      };
    });

    setBankResults(results);

    // 生成推荐（排序）
    const approved = results
      .filter(r => r.status === 'approved')
      .sort((a, b) => b.margin - a.margin);

    setRecommendations(approved);
  }, [
    dsr,
    netIncome,
    employmentType,
    identityType,
    loanType,
    businessYears,
    totalCommitments,
    newMonthlyPayment,
    showAdvancedIncome,
    grossSalary,
    epfDeduction,
    incomeTax,
    socso
  ]);

  // 添加信用卡
  const addCreditCard = () => {
    setCreditCards([...creditCards, { used: 0, limit: 5000 }]);
  };

  // 移除信用卡
  const removeCreditCard = (index: number) => {
    setCreditCards(creditCards.filter((_, i) => i !== index));
  };

  // 更新信用卡
  const updateCreditCard = (index: number, field: 'used' | 'limit', value: number) => {
    const updated = [...creditCards];
    updated[index][field] = value;
    setCreditCards(updated);
  };

  // DSR状态颜色
  const getDsrStatusColor = () => {
    if (dsr <= 30) return 'text-green-500';
    if (dsr <= 50) return 'text-blue-500';
    if (dsr <= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  // DSR状态文本
  const getDsrStatusText = () => {
    if (dsr <= 30) return 'Excellent';
    if (dsr <= 50) return 'Good';
    if (dsr <= 70) return 'Fair';
    return 'High Risk';
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* 进度指示器 */}
      <div className="mb-8 flex items-center justify-between">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= s ? 'bg-primary text-black' : 'bg-muted text-muted-foreground'
              }`}
            >
              {s}
            </div>
            {s < 4 && (
              <div
                className={`flex-1 h-1 mx-2 ${
                  step > s ? 'bg-primary' : 'bg-muted'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: 身份与就业信息 */}
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Step 1: Identity & Employment</h2>

          <div>
            <label className="block mb-2 font-medium">Identity Type</label>
            <select
              value={identityType}
              onChange={(e) => setIdentityType(e.target.value)}
              className="w-full p-3 rounded-lg bg-muted border border-border"
            >
              {IDENTITY_TYPES.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Employment Type</label>
            <select
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
              className="w-full p-3 rounded-lg bg-muted border border-border"
            >
              {EMPLOYMENT_TYPES.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {employmentType === 'self_employed' && (
            <div>
              <label className="block mb-2 font-medium">Business Operating Years</label>
              <input
                type="number"
                value={businessYears}
                onChange={(e) => setBusinessYears(Number(e.target.value))}
                className="w-full p-3 rounded-lg bg-muted border border-border"
                min="0"
              />
            </div>
          )}

          <button
            onClick={() => setStep(2)}
            className="w-full py-3 rounded-lg bg-primary text-black font-bold hover:bg-primary/90 transition"
          >
            Next: Income Information
          </button>
        </div>
      )}

      {/* Step 2: 收入信息（简化版） */}
      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Step 2: Income Information</h2>

          {/* 主要字段：净月收入 */}
          <div>
            <label className="block mb-2 font-medium">
              Net Monthly Income (RM) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={netIncome}
              onChange={(e) => setNetIncome(Number(e.target.value) || 0)}
              className="w-full p-3 rounded-lg bg-muted border border-border"
              placeholder="Enter your net monthly income"
            />
            <p className="mt-1 text-sm text-muted-foreground">
              Enter your net monthly income after all deductions (EPF, tax, SOCSO, etc.)
            </p>
          </div>

          {/* 高级选项（折叠） */}
          <div className="border border-border rounded-lg">
            <button
              onClick={() => setShowAdvancedIncome(!showAdvancedIncome)}
              className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition"
            >
              <span className="font-medium">Advanced Options (Optional)</span>
              {showAdvancedIncome ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {showAdvancedIncome && (
              <div className="p-4 space-y-4 border-t border-border">
                <div>
                  <label className="block mb-2 font-medium text-sm">Gross Monthly Salary (RM)</label>
                  <input
                    type="number"
                    value={grossSalary}
                    onChange={(e) => setGrossSalary(Number(e.target.value) || 0)}
                    className="w-full p-3 rounded-lg bg-muted border border-border"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-sm">EPF Deduction (8%) (RM)</label>
                  <input
                    type="number"
                    value={epfDeduction}
                    onChange={(e) => setEpfDeduction(Number(e.target.value) || 0)}
                    className="w-full p-3 rounded-lg bg-muted border border-border"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    Usually 8% of gross salary (auto-calculated if gross salary is entered)
                  </p>
                </div>

                <div>
                  <label className="block mb-2 font-medium text-sm">Income Tax (RM)</label>
                  <input
                    type="number"
                    value={incomeTax}
                    onChange={(e) => setIncomeTax(Number(e.target.value) || 0)}
                    className="w-full p-3 rounded-lg bg-muted border border-border"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-sm">SOCSO (RM)</label>
                  <input
                    type="number"
                    value={socso}
                    onChange={(e) => setSocso(Number(e.target.value) || 0)}
                    className="w-full p-3 rounded-lg bg-muted border border-border"
                  />
                </div>

                <div className="p-3 rounded-lg bg-muted/50 border border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Calculated Net Income:</span>
                    <span className="font-semibold">
                      RM {(grossSalary - epfDeduction - incomeTax - socso).toLocaleString()}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    This will update the Net Monthly Income above if all fields are filled
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 净收入显示（始终显示） */}
          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="flex items-center justify-between">
              <span className="font-bold">Net Monthly Income:</span>
              <span className="text-2xl font-bold text-primary">
                RM {netIncome.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(1)}
              className="flex-1 py-3 rounded-lg bg-muted text-foreground font-bold hover:bg-muted/80 transition"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="flex-1 py-3 rounded-lg bg-primary text-black font-bold hover:bg-primary/90 transition"
            >
              Next: Existing Debts
            </button>
          </div>
        </div>
      )}

      {/* Step 3: 现有债务 */}
      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Step 3: Existing Debts</h2>

          <div>
            <label className="block mb-2 font-medium">Housing Loan (RM/month)</label>
            <input
              type="number"
              value={housingLoan}
              onChange={(e) => setHousingLoan(Number(e.target.value))}
              className="w-full p-3 rounded-lg bg-muted border border-border"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Auto Loan (RM/month)</label>
            <input
              type="number"
              value={autoLoan}
              onChange={(e) => setAutoLoan(Number(e.target.value))}
              className="w-full p-3 rounded-lg bg-muted border border-border"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Personal Loan (RM/month)</label>
            <input
              type="number"
              value={personalLoan}
              onChange={(e) => setPersonalLoan(Number(e.target.value))}
              className="w-full p-3 rounded-lg bg-muted border border-border"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">PTPTN (RM/month)</label>
            <input
              type="number"
              value={ptptn}
              onChange={(e) => setPtptn(Number(e.target.value))}
              className="w-full p-3 rounded-lg bg-muted border border-border"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Business Loan (RM/month)</label>
            <input
              type="number"
              value={businessLoan}
              onChange={(e) => setBusinessLoan(Number(e.target.value) || 0)}
              className="w-full p-3 rounded-lg bg-muted border border-border"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Overdraft (RM/month)</label>
            <input
              type="number"
              value={overdraft}
              onChange={(e) => setOverdraft(Number(e.target.value) || 0)}
              className="w-full p-3 rounded-lg bg-muted border border-border"
            />
          </div>

          {/* 信用卡 */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="font-medium">Credit Cards</label>
              <button
                onClick={addCreditCard}
                className="px-4 py-2 rounded-lg bg-primary text-black text-sm font-bold hover:bg-primary/90 transition"
              >
                + Add Card
              </button>
            </div>

            {creditCards.map((card, index) => (
              <div key={index} className="mb-4 p-4 rounded-lg bg-muted border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Card {index + 1}</span>
                  <button
                    onClick={() => removeCreditCard(index)}
                    className="text-red-500 hover:text-red-400 text-sm"
                  >
                    Remove
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Used Amount (RM)</label>
                    <input
                      type="number"
                      value={card.used}
                      onChange={(e) => updateCreditCard(index, 'used', Number(e.target.value))}
                      className="w-full p-2 rounded bg-background border border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Credit Limit (RM)</label>
                    <input
                      type="number"
                      value={card.limit}
                      onChange={(e) => updateCreditCard(index, 'limit', Number(e.target.value))}
                      className="w-full p-2 rounded bg-background border border-border"
                    />
                  </div>
                </div>
                <div className="mt-2 text-sm text-primary">
                  Monthly Commitment: RM {(card.used * 0.05).toFixed(2)} (5% rule)
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="flex items-center justify-between">
              <span className="font-bold">Total Existing Commitments:</span>
              <span className="text-2xl font-bold text-primary">
                RM {totalCommitments.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(2)}
              className="flex-1 py-3 rounded-lg bg-muted text-foreground font-bold hover:bg-muted/80 transition"
            >
              Back
            </button>
            <button
              onClick={() => setStep(4)}
              className="flex-1 py-3 rounded-lg bg-primary text-black font-bold hover:bg-primary/90 transition"
            >
              Next: Loan Requirement
            </button>
          </div>
        </div>
      )}

      {/* Step 4: 贷款需求 & 结果 */}
      {step === 4 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Step 4: Loan Requirement</h2>

          <div>
            <label className="block mb-2 font-medium">Loan Type</label>
            <select
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
              className="w-full p-3 rounded-lg bg-muted border border-border"
            >
              {LOAN_TYPES.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Loan Amount (RM)</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full p-3 rounded-lg bg-muted border border-border"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Loan Period (Years)</label>
            <input
              type="number"
              value={loanYears}
              onChange={(e) => setLoanYears(Number(e.target.value))}
              className="w-full p-3 rounded-lg bg-muted border border-border"
              min="1"
              max="35"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Interest Rate (%)</label>
            <input
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full p-3 rounded-lg bg-muted border border-border"
            />
          </div>

          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="flex items-center justify-between">
              <span className="font-bold">Estimated Monthly Payment:</span>
              <span className="text-2xl font-bold text-primary">
                RM {newMonthlyPayment.toFixed(2)}
              </span>
            </div>
          </div>

          {/* DSR结果显示 */}
          <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Calculator className="w-8 h-8" />
              Your DSR Analysis
            </h3>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">Net Income</div>
                <div className="text-xl font-bold">RM {netIncome.toLocaleString()}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">Total Commitments</div>
                <div className="text-xl font-bold">RM {(totalCommitments + newMonthlyPayment).toFixed(2)}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">Your DSR</div>
                <div className={`text-3xl font-bold ${getDsrStatusColor()}`}>
                  {dsr.toFixed(2)}%
                </div>
                <div className="text-sm font-medium">{getDsrStatusText()}</div>
              </div>
            </div>
          </div>

          {/* 8家银行对比表 */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">8 Banks Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-3 text-left border border-border">Bank</th>
                    <th className="p-3 text-center border border-border">DSR Limit</th>
                    <th className="p-3 text-center border border-border">Your DSR</th>
                    <th className="p-3 text-center border border-border">Margin</th>
                    <th className="p-3 text-center border border-border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bankResults.map((bank) => (
                    <tr key={bank.code} className="hover:bg-muted/50">
                      <td className="p-3 border border-border font-bold">{bank.name}</td>
                      <td className="p-3 text-center border border-border">{bank.dsrLimit}%</td>
                      <td className="p-3 text-center border border-border">{bank.adjustedDsr.toFixed(2)}%</td>
                      <td className={`p-3 text-center border border-border font-bold ${
                        bank.margin > 0 ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {bank.margin > 0 ? '+' : ''}{bank.margin.toFixed(2)}%
                      </td>
                      <td className="p-3 text-center border border-border">
                        {bank.status === 'approved' && (
                          <span className="inline-flex items-center gap-1 text-green-500 font-bold">
                            <CheckCircle className="w-4 h-4" /> Approved
                          </span>
                        )}
                        {bank.status === 'risky' && (
                          <span className="inline-flex items-center gap-1 text-yellow-500 font-bold">
                            <AlertCircle className="w-4 h-4" /> Risky
                          </span>
                        )}
                        {bank.status === 'rejected' && (
                          <span className="inline-flex items-center gap-1 text-red-500 font-bold">
                            <XCircle className="w-4 h-4" /> Rejected
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 推荐银行 */}
          {recommendations.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-8 h-8 text-primary" />
                Recommended Banks
              </h3>
              <div className="space-y-4">
                {recommendations.slice(0, 3).map((bank, index) => (
                  <div
                    key={bank.code}
                    className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-2xl font-bold flex items-center gap-2">
                          {index + 1}. {bank.name}
                          <span className="text-primary">
                            {'⭐'.repeat(5 - index)}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          DSR Limit: {bank.dsrLimit}% | Your DSR: {bank.adjustedDsr.toFixed(2)}%
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-500">
                          +{bank.margin.toFixed(1)}%
                        </div>
                        <div className="text-sm text-muted-foreground">Safety Margin</div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>
                          {employmentType === 'self_employed'
                            ? `Self-employed income recognition: ${(bank.selfEmployedRate * 100).toFixed(0)}%`
                            : 'Standard income recognition'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Approval probability: {bank.margin > 15 ? 'Very High' : bank.margin > 10 ? 'High' : 'Moderate'}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => setStep(3)}
              className="flex-1 py-3 rounded-lg bg-muted text-foreground font-bold hover:bg-muted/80 transition"
            >
              Back
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 py-3 rounded-lg bg-primary text-black font-bold hover:bg-primary/90 transition flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
