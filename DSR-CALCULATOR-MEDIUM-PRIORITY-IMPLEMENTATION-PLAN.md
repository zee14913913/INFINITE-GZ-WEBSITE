# 🟡 DSR计算器中优先级功能实施计划（最终版）

**创建日期**: 2025-01-29
**状态**: ✅ 需求已确认 - 准备实施
**优先级**: 🟡 中优先级

---

## 📋 需求确认总结

基于用户反馈，以下需求已明确：

### ✅ 任务1: 收入计算增强

- **津贴输入**: ❌ 不需要区分应税/免税津贴
- **奖金输入**:
  - 输入年/月奖金数目
  - **或** 上传每月薪资单/银行月份流水账单（文件上传功能）
- **其他收入**: 租金、投资收入等（需要6个月以上记录）
- **所得税**: 输入/上传Borang B/BE的报税数目
- **SOCSO**: ⚠️ 不太重要（可选功能）

### ✅ 任务2: 债务管理增强

- **债务类型**: 设置会在CTOS/CCRIS里出现的那些债务类型
- **债务详情**:
  - 输入申请的债务数目、申请多长的年份、年率
  - **或** 上传最新的CTOS报告（文件上传功能）
  - **自动计算**: ✅ 需要根据总额、利率、期限自动计算月供
- **动态管理**: 类似信用卡的添加/移除方式

### ✅ 任务3: PDF导出功能

- **报告结构**:
  1. 优化收入&债务内容
  2. 贷款需求
  3. 银行贷款的对比&推荐

- **核心功能**: ⭐⭐⭐ **前后对比效果**
  - 客户可以省多少钱？
  - 客户可以省下多少时间？
  - 明确显示客户期望得到的关键部分
  - 前后对比效果差异要清晰可见

---

## 🎯 任务1: 收入计算增强 - 详细实施计划

### 1.1 功能需求

#### 新增字段

```typescript
// 收入信息（增强版）
const [grossSalary, setGrossSalary] = useState(6000);
const [allowances, setAllowances] = useState(0); // 固定津贴（不区分应税/免税）
const [bonusAnnual, setBonusAnnual] = useState(0); // 年奖金
const [bonusMonthly, setBonusMonthly] = useState(0); // 月奖金（可选，如果输入年奖金则自动计算）
const [otherIncome, setOtherIncome] = useState(0); // 其他收入（租金、投资等）
const [otherIncomeMonths, setOtherIncomeMonths] = useState(0); // 其他收入持续月数（需≥6个月）
const [incomeTax, setIncomeTax] = useState(300); // 所得税（手动输入或上传报税表）
const [epfDeduction, setEpfDeduction] = useState(480);
const [socso, setSocso] = useState(50); // SOCSO（可选，不太重要）
const [otherDeductions, setOtherDeductions] = useState(0);
```

#### 文件上传与自动解析功能 ✅

**需要支持的文件类型**:
- 薪资单（PDF/图片）
- 银行流水账单（PDF/图片）
- Borang B/BE报税表（PDF）
- CTOS报告（PDF）

**技术方案**:
- **PDF解析库**: `pdf-parse` 或 `pdfjs-dist` (Mozilla PDF.js)
- **图片OCR** (可选): `tesseract.js` 或 `@tesseract.js/tesseract`
- 文件在客户端处理（不上传到服务器）
- 自动提取关键数据，用户可验证和修改

**实施策略**:
- **阶段1**: PDF文本提取（使用pdf-parse）
- **阶段2**: 数据提取（使用正则表达式和关键词匹配）
- **阶段3**: OCR支持（如果需要图片格式支持）

**数据提取规则**:
```typescript
// 薪资单解析规则
interface SalarySlipData {
  grossSalary?: number;
  epf?: number;
  incomeTax?: number;
  socso?: number;
  allowances?: number;
  netSalary?: number;
}

// Borang B/BE解析规则
interface TaxFormData {
  annualIncome?: number;
  taxableIncome?: number;
  taxPayable?: number;
}

// 银行流水解析规则（提取收入数据）
interface BankStatementData {
  monthlyIncome?: number;
  averageMonthlyIncome?: number;
}

// CTOS报告解析规则
interface CTOSReportData {
  debts: Array<{
    type: string;
    lender: string;
    amount: number;
    monthlyPayment?: number;
    interestRate?: number;
  }>;
}
```

**UI设计**:
```
[输入字段] [或] [上传文件] 按钮
点击上传 → 文件选择器 → 解析中... →
显示提取的数据 → 用户验证/修改 → 确认
```

### 1.2 计算逻辑

#### 奖金计算

```typescript
// 如果输入年奖金，自动计算月均奖金
useEffect(() => {
  if (bonusAnnual > 0) {
    setBonusMonthly(bonusAnnual / 12);
  }
}, [bonusAnnual]);
```

#### 其他收入验证

```typescript
// 验证其他收入是否≥6个月
const isOtherIncomeValid = otherIncomeMonths >= 6;
if (otherIncome > 0 && !isOtherIncomeValid) {
  // 显示警告：其他收入需要至少6个月记录
}
```

#### 净收入计算（更新）

```typescript
useEffect(() => {
  const totalGross = grossSalary + allowances + bonusMonthly + otherIncome;
  const totalDeductions = epfDeduction + incomeTax + socso + otherDeductions;
  const calculated = totalGross - totalDeductions;
  setNetIncome(Math.max(0, calculated));
}, [
  grossSalary,
  allowances,
  bonusMonthly,
  otherIncome,
  epfDeduction,
  incomeTax,
  socso,
  otherDeductions
]);
```

### 1.3 UI设计

```
Step 2: 收入信息
├── 基本收入
│   ├── 月度总薪资 *
│   ├── 固定津贴（可选）
│   └── EPF扣除（自动计算）
│
├── 奖金收入
│   ├── 年奖金（输入年奖金，自动计算月均）
│   │   └── [或上传薪资单/银行流水]
│   └── 月均奖金显示（自动计算）
│
├── 其他收入
│   ├── 其他收入金额
│   ├── 收入类型（租金/投资/其他）
│   └── 持续月数（需≥6个月）*
│
└── 扣除项
    ├── 所得税 *
    │   └── [或上传Borang B/BE]
    ├── SOCSO（可选）
    └── 其他扣除（可选）
```

### 1.4 实施步骤

1. **添加状态变量** (30分钟)
2. **更新计算逻辑** (30分钟)
3. **更新UI组件** (2小时)
4. **添加文件上传UI** (1小时)
5. **添加验证逻辑** (30分钟)
6. **测试** (1小时)

**总工作量**: 约5-6小时

---

## 🎯 任务2: 债务管理增强 - 详细实施计划

### 2.1 CTOS/CCRIS常见债务类型

**需要添加的债务类型**:
1. 房贷 (Housing Loan) ✅ 已有
2. 车贷 (Car Loan) ✅ 已有
3. 个人贷款 (Personal Loan) ✅ 已有
4. PTPTN ✅ 已有
5. 信用卡 (Credit Card) ✅ 已有
6. **商业贷款** (Business Loan) - 新增
7. **透支额度** (Overdraft) - 新增
8. **分期付款** (Installment) - 新增
9. **其他债务** (Other Debt) - 动态管理

### 2.2 数据结构设计

```typescript
// 固定债务类型（保持现有）
const [housingLoan, setHousingLoan] = useState(0);
const [autoLoan, setAutoLoan] = useState(0);
const [personalLoan, setPersonalLoan] = useState(0);
const [ptptn, setPtptn] = useState(0);
const [creditCards, setCreditCards] = useState<Array<{ used: number; limit: number }>>([]);

// 新增固定债务类型
const [businessLoan, setBusinessLoan] = useState(0);
const [overdraft, setOverdraft] = useState(0);
const [installments, setInstallments] = useState<Array<{
  name: string;
  monthlyPayment: number;
}>>([]);

// 其他债务（动态管理）
interface OtherDebt {
  id: string;
  name: string;
  totalAmount: number;      // 债务总额
  interestRate: number;      // 年利率
  loanYears: number;         // 贷款年限
  monthlyPayment: number;     // 月供（自动计算或手动输入）
  remainingMonths?: number;  // 剩余期数（可选）
  notes?: string;            // 备注（可选）
}

const [otherDebts, setOtherDebts] = useState<OtherDebt[]>([]);
```

### 2.3 自动计算月供功能

```typescript
// 根据总额、利率、期限自动计算月供
function calculateMonthlyPayment(
  totalAmount: number,
  interestRate: number,
  loanYears: number
): number {
  if (totalAmount <= 0 || loanYears <= 0) return 0;

  return calculateDiminishingRateMonthlyPayment(
    totalAmount,
    loanYears,
    interestRate
  ).monthlyPayment;
}

// 在债务输入时自动计算
useEffect(() => {
  const updated = otherDebts.map(debt => {
    if (debt.totalAmount > 0 && debt.interestRate >= 0 && debt.loanYears > 0) {
      return {
        ...debt,
        monthlyPayment: calculateMonthlyPayment(
          debt.totalAmount,
          debt.interestRate,
          debt.loanYears
        )
      };
    }
    return debt;
  });
  setOtherDebts(updated);
}, [otherDebts.map(d => `${d.totalAmount}-${d.interestRate}-${d.loanYears}`).join(',')]);
```

### 2.4 CTOS报告上传功能

**功能说明**:
- 用户上传CTOS报告（PDF）
- 系统解析报告（或用户手动输入）
- 自动填充债务信息

**技术方案**:
- 第一阶段：文件上传，用户手动输入数据
- 第二阶段：PDF解析（如果可行）

### 2.5 UI设计

```
Step 3: 现有债务
├── 固定债务类型
│   ├── 房贷月供
│   ├── 车贷月供
│   ├── 个人贷款月供
│   ├── PTPTN月供
│   ├── 商业贷款月供（新增）
│   └── 透支额度月供（新增）
│
├── 分期付款（新增）
│   └── [添加分期付款] 按钮
│       └── 弹出表单：名称、月供
│
├── 信用卡管理
│   └── [添加信用卡] 按钮
│
├── 其他债务（动态管理）
│   ├── 债务列表（卡片）
│   │   ├── 债务名称
│   │   ├── 债务总额 *
│   │   ├── 年利率 *
│   │   ├── 贷款年限 *
│   │   ├── 月供（自动计算）
│   │   └── [删除]
│   │
│   └── [+ 添加其他债务] 按钮
│       └── [或上传CTOS报告] 按钮
│
└── 总承诺显示
    └── RM [总金额]
```

### 2.6 实施步骤

1. **添加新债务类型状态** (30分钟)
2. **实现自动计算月供功能** (1小时)
3. **更新UI组件** (3-4小时)
4. **添加文件上传功能** (1-2小时)
5. **更新总承诺计算逻辑** (30分钟)
6. **测试** (1-2小时)

**总工作量**: 约7-10小时

---

## 🎯 任务3: PDF导出功能 - 详细实施计划

### 3.1 前后对比功能设计 ⭐⭐⭐

**核心目标**: 让客户清楚看到优化前后的差异

#### 对比维度

1. **财务对比**
   - 优化前月供总额 vs 优化后月供总额
   - 节省金额（每月/每年/总节省）
   - 优化前DSR vs 优化后DSR
   - 优化前可贷金额 vs 优化后可贷金额

2. **时间对比**
   - 优化前还款期限 vs 优化后还款期限
   - 节省时间（月数/年数）

3. **银行批准率对比**
   - 优化前批准银行数量 vs 优化后批准银行数量
   - 优化前推荐银行 vs 优化后推荐银行

4. **客户期望目标对比**
   - 客户期望的贷款金额/利率/期限
   - 优化后实际可获得的贷款金额/利率/期限
   - 差距分析

### 3.2 困境分析与优化预期算法 ✅

```typescript
interface CurrentSituation {
  problems: Array<{
    type: 'high_dsr' | 'low_income' | 'high_debt' | 'low_approval' | 'cannot_meet_requirement';
    severity: 'critical' | 'high' | 'medium' | 'low';
    title: string;
    description: string;
    impact: string;
  }>;
  currentDSR: number;
  currentApprovalRate: number;
  canMeetRequirement: boolean;
}

interface OptimizedProjection {
  projectedDSR: number;
  projectedApprovalRate: number;
  projectedLoanCapacity: number;
  projectedMonthlySavings: number;
  projectedTimeSavings: number; // 月数
  canMeetRequirementAfter: boolean;
  requirementGapBefore: {
    loanAmount: number;
    interestRate: number;
    loanYears: number;
  };
  requirementGapAfter: {
    loanAmount: number;
    interestRate: number;
    loanYears: number;
  };
}

function analyzeCurrentSituation(
  currentDSR: number,
  netIncome: number,
  totalDebts: number,
  approvedBanks: number,
  customerRequirement?: CustomerRequirement
): CurrentSituation {
  const problems = [];

  // 分析高DSR问题
  if (currentDSR > 70) {
    problems.push({
      type: 'high_dsr',
      severity: 'critical',
      title: 'DSR过高',
      description: `您的DSR为${currentDSR.toFixed(1)}%，远超过银行60-70%的限制`,
      impact: '大多数银行可能拒绝您的贷款申请'
    });
  } else if (currentDSR > 60) {
    problems.push({
      type: 'high_dsr',
      severity: 'high',
      title: 'DSR偏高',
      description: `您的DSR为${currentDSR.toFixed(1)}%，接近银行限制`,
      impact: '部分银行可能拒绝或要求担保人'
    });
  }

  // 分析收入问题
  if (netIncome < 3000) {
    problems.push({
      type: 'low_income',
      severity: 'high',
      title: '收入偏低',
      description: `您的净收入为RM ${netIncome.toLocaleString()}，低于多数银行要求`,
      impact: '贷款额度可能受限'
    });
  }

  // 分析债务负担
  if (totalDebts / netIncome > 0.5) {
    problems.push({
      type: 'high_debt',
      severity: 'medium',
      title: '债务负担较重',
      description: `您的月供占净收入${((totalDebts / netIncome) * 100).toFixed(1)}%`,
      impact: '影响贷款申请和额度'
    });
  }

  // 分析批准率
  const approvalRate = (approvedBanks / 15) * 100;
  if (approvalRate < 50) {
    problems.push({
      type: 'low_approval',
      severity: 'high',
      title: '银行批准率低',
      description: `目前只有${approvedBanks}家银行可能批准（${approvalRate.toFixed(0)}%）`,
      impact: '选择范围有限，可能无法获得最优条件'
    });
  }

  // 分析是否满足客户需求
  let canMeetRequirement = true;
  if (customerRequirement) {
    // 检查是否能满足期望贷款金额、利率、期限
    // ... 分析逻辑
    canMeetRequirement = false; // 假设分析结果
    if (!canMeetRequirement) {
      problems.push({
        type: 'cannot_meet_requirement',
        severity: 'high',
        title: '无法满足期望贷款需求',
        description: `当前情况下难以满足您的贷款期望`,
        impact: '需要优化财务状况才能获得期望的贷款条件'
      });
    }
  }

  return {
    problems,
    currentDSR,
    currentApprovalRate: approvalRate,
    canMeetRequirement
  };
}

function projectOptimizedResult(
  currentSituation: CurrentSituation,
  optimizationSuggestions: OptimizationSuggestion[],
  customerRequirement?: CustomerRequirement
): OptimizedProjection {
  // 计算优化后的预期结果
  let projectedDSR = currentSituation.currentDSR;
  let projectedMonthlySavings = 0;

  // 基于优化建议计算预期改善
  optimizationSuggestions.forEach(suggestion => {
    if (suggestion.impact.dsrImprovement) {
      projectedDSR += suggestion.impact.dsrImprovement;
    }
    if (suggestion.impact.monthlySavings) {
      projectedMonthlySavings += suggestion.impact.monthlySavings;
    }
  });

  projectedDSR = Math.max(0, Math.min(100, projectedDSR)); // 限制在0-100%

  // 计算预期批准率
  const projectedApprovalRate = calculateProjectedApprovalRate(projectedDSR);

  // 计算预期贷款能力
  const projectedLoanCapacity = calculateProjectedLoanCapacity(
    projectedDSR,
    projectedMonthlySavings
  );

  // 计算能否满足需求
  const canMeetRequirementAfter = checkIfCanMeetRequirement(
    projectedLoanCapacity,
    projectedDSR,
    customerRequirement
  );

  // 计算需求差距
  const requirementGapBefore = calculateRequirementGap(
    currentSituation,
    customerRequirement
  );
  const requirementGapAfter = calculateRequirementGap(
    { ...currentSituation, currentDSR: projectedDSR },
    customerRequirement,
    projectedLoanCapacity
  );

  return {
    projectedDSR,
    projectedApprovalRate,
    projectedLoanCapacity,
    projectedMonthlySavings,
    projectedTimeSavings: calculateTimeSavings(optimizationSuggestions),
    canMeetRequirementAfter,
    requirementGapBefore,
    requirementGapAfter
  };
}
```

### 3.3 报告结构设计

```
封面页
├── 报告标题
├── 生成日期
└── 客户基本信息摘要

第1页: 当前困境分析 ✅
├── 问题列表
│   ├── 问题1: DSR过高（严重程度：关键）
│   ├── 问题2: 收入偏低（严重程度：高）
│   └── 问题3: 银行批准率低（严重程度：高）
│
├── 当前状况总结
│   ├── 当前DSR: XX%
│   ├── 当前批准率: XX%
│   └── 是否满足期望: ❌ 否
│
└── 困境影响说明
    └── 如果不能解决这些问题，您将面临...

第2页: 优化前 vs 优化后 - 收入与债务对比
├── 收入优化
│   ├── 优化前收入明细
│   ├── 优化后收入明细
│   └── 收入提升金额
│
└── 债务优化
    ├── 优化前债务明细
    ├── 优化后债务明细
    └── 债务减少金额

第2页: 优化前 vs 优化后 - DSR与贷款能力对比
├── DSR对比
│   ├── 优化前DSR: XX%
│   ├── 优化后DSR: XX%
│   └── DSR改善: -XX%
│
├── 贷款能力对比
│   ├── 优化前可贷金额: RM XXX
│   ├── 优化后可贷金额: RM XXX
│   └── 贷款能力提升: +RM XXX
│
└── 节省金额总结
    ├── 每月节省: RM XXX
    ├── 每年节省: RM XXX
    └── 总节省（按贷款期限）: RM XXX

第3页: 优化前 vs 优化后 - 银行批准对比
├── 批准银行数量对比
│   ├── 优化前: X家银行批准
│   ├── 优化后: Y家银行批准
│   └── 改善: +Z家银行
│
├── 推荐银行对比
│   ├── 优化前推荐银行列表
│   └── 优化后推荐银行列表
│
└── 最佳方案银行详情
    ├── 银行名称
    ├── 可贷金额
    ├── 利率范围
    └── 批准概率

第4页: 客户期望目标 vs 当前 vs 优化后对比 ✅
├── 客户期望目标（如果已填写）
│   ├── 期望贷款金额: RM XXX
│   ├── 期望利率: X%
│   ├── 期望期限: X年
│   └── 月供预算: RM XXX
│
├── 当前情况下可达成
│   ├── 可贷金额: RM XXX
│   ├── 利率: X%
│   ├── 期限: X年
│   ├── 月供: RM XXX
│   └── 是否满足期望: ❌ 否
│
├── 优化后预期可达成
│   ├── 可贷金额: RM XXX
│   ├── 利率: X%
│   ├── 期限: X年
│   ├── 月供: RM XXX
│   └── 是否满足期望: ✅ 是
│
└── 差距分析
    ├── 当前 vs 期望
    │   ├── 金额差距: -RM XXX（不足）
    │   ├── 利率差距: +X%（更高）
    │   └── 达成度: XX%
    │
    └── 优化后 vs 期望
        ├── 金额差距: ±RM XXX
        ├── 利率差距: ±X%
        └── 达成度: XX%（显著改善）

第5页: 优化建议与行动计划
├── 收入优化建议
├── 债务优化建议
├── 贷款申请建议
└── 时间表
```

### 3.3 数据收集需求

为了生成前后对比，需要：

1. **优化前数据**（用户输入）
   - 当前收入
   - 当前债务
   - 当前DSR
   - 当前贷款需求

2. **优化后数据**（系统计算）
   - 优化后的收入（如果有优化建议）
   - 优化后的债务（如果有优化建议）
   - 优化后的DSR
   - 优化后的贷款能力

3. **优化建议**（系统生成）
   - 收入优化建议
   - 债务优化建议
   - 贷款申请建议

### 3.4 优化建议算法

```typescript
interface OptimizationSuggestion {
  type: 'income' | 'debt' | 'loan';
  title: string;
  description: string;
  impact: {
    monthlySavings?: number;
    dsrImprovement?: number;
    approvalRateImprovement?: number;
  };
  actionItems: string[];
  timeline: string;
}

function generateOptimizationSuggestions(
  currentIncome: number,
  currentDebts: DebtCommitment[],
  currentDSR: number,
  targetLoanAmount: number
): OptimizationSuggestion[] {
  const suggestions: OptimizationSuggestion[] = [];

  // 收入优化建议
  if (currentDSR > 60) {
    suggestions.push({
      type: 'income',
      title: '增加收入来源',
      description: '考虑增加租金收入或其他稳定收入来源',
      impact: {
        dsrImprovement: -5, // 降低5% DSR
      },
      actionItems: [
        '寻找租金收入机会',
        '考虑副业收入',
      ],
      timeline: '3-6个月'
    });
  }

  // 债务优化建议
  const highInterestDebts = currentDebts.filter(d => d.interestRate > 8);
  if (highInterestDebts.length > 0) {
    suggestions.push({
      type: 'debt',
      title: '优先偿还高利率债务',
      description: `优先偿还${highInterestDebts.length}笔高利率债务`,
      impact: {
        monthlySavings: calculateMonthlySavings(highInterestDebts),
        dsrImprovement: -3,
      },
      actionItems: [
        '列出所有高利率债务',
        '制定还款计划',
      ],
      timeline: '1-3个月'
    });
  }

  // 贷款优化建议
  // ...

  return suggestions;
}
```

### 3.5 PDF组件实现

```typescript
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

interface ComparisonData {
  // 优化前
  before: {
    income: number;
    debts: number;
    dsr: number;
    loanCapacity: number;
    approvedBanks: number;
  };
  // 优化后
  after: {
    income: number;
    debts: number;
    dsr: number;
    loanCapacity: number;
    approvedBanks: number;
  };
  // 节省
  savings: {
    monthly: number;
    annual: number;
    total: number;
    timeMonths: number;
  };
  // 客户期望 vs 实际
  targetVsActual: {
    loanAmount: { target: number; actual: number; gap: number };
    interestRate: { target: number; actual: number; gap: number };
    loanYears: { target: number; actual: number; gap: number };
  };
}

export function DSRReportPDF({
  data,
  comparison
}: {
  data: DSRReportData;
  comparison: ComparisonData;
}) {
  return (
    <Document>
      {/* 封面 */}
      <Page style={styles.page}>
        <View style={styles.cover}>
          <Text style={styles.title}>DSR计算与优化报告</Text>
          <Text style={styles.date}>生成日期: {new Date().toLocaleDateString()}</Text>
        </View>
      </Page>

      {/* 第1页: 前后对比 - 收入与债务 */}
      <Page style={styles.page}>
        <Text style={styles.sectionTitle}>优化前 vs 优化后对比</Text>

        {/* 收入对比表格 */}
        <View style={styles.comparisonTable}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>项目</Text>
            <Text style={styles.tableHeader}>优化前</Text>
            <Text style={styles.tableHeader}>优化后</Text>
            <Text style={styles.tableHeader}>差异</Text>
          </View>
          <View style={styles.tableRow}>
            <Text>总收入</Text>
            <Text>RM {comparison.before.income.toLocaleString()}</Text>
            <Text>RM {comparison.after.income.toLocaleString()}</Text>
            <Text style={styles.positive}>
              +RM {(comparison.after.income - comparison.before.income).toLocaleString()}
            </Text>
          </View>
          {/* 更多行... */}
        </View>

        {/* 节省金额突出显示 */}
        <View style={styles.savingsBox}>
          <Text style={styles.savingsTitle}>💰 每月节省</Text>
          <Text style={styles.savingsAmount}>
            RM {comparison.savings.monthly.toLocaleString()}
          </Text>
          <Text style={styles.savingsSubtext}>
            每年节省: RM {comparison.savings.annual.toLocaleString()}
          </Text>
        </View>
      </Page>

      {/* 第2页: DSR与贷款能力对比 */}
      <Page style={styles.page}>
        <Text style={styles.sectionTitle}>DSR与贷款能力对比</Text>

        {/* DSR对比图表（文字版） */}
        <View style={styles.dsrComparison}>
          <View style={styles.dsrBox}>
            <Text style={styles.dsrLabel}>优化前DSR</Text>
            <Text style={[styles.dsrValue, styles.dsrHigh]}>
              {comparison.before.dsr.toFixed(1)}%
            </Text>
          </View>
          <Text style={styles.arrow}>→</Text>
          <View style={styles.dsrBox}>
            <Text style={styles.dsrLabel}>优化后DSR</Text>
            <Text style={[styles.dsrValue, styles.dsrLow]}>
              {comparison.after.dsr.toFixed(1)}%
            </Text>
          </View>
        </View>

        {/* 改善幅度 */}
        <View style={styles.improvementBox}>
          <Text style={styles.improvementTitle}>📈 DSR改善</Text>
          <Text style={styles.improvementAmount}>
            -{(comparison.before.dsr - comparison.after.dsr).toFixed(1)}%
          </Text>
        </View>
      </Page>

      {/* 第3页: 银行批准对比 */}
      {/* ... */}

      {/* 第4页: 客户期望 vs 实际可达成 */}
      {/* ... */}

      {/* 第5页: 优化建议 */}
      {/* ... */}
    </Document>
  );
}
```

### 3.6 文件解析功能实施 ✅

#### 技术选型

**PDF解析库**:
```bash
npm install pdf-parse
# 或
npm install pdfjs-dist
```

**推荐**: `pdf-parse` (更简单) 或 `pdfjs-dist` (功能更强)

#### PDF解析实现

**文件**: `lib/pdfParser.ts`

```typescript
import pdfParse from 'pdf-parse';

interface ParsedSalarySlip {
  grossSalary?: number;
  epf?: number;
  incomeTax?: number;
  socso?: number;
  allowances?: number;
  netSalary?: number;
}

export async function parseSalarySlip(file: File): Promise<ParsedSalarySlip> {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const data = await pdfParse(buffer);

  const text = data.text;
  const result: ParsedSalarySlip = {};

  // 使用正则表达式提取数据
  // 例如：提取总薪资
  const grossSalaryMatch = text.match(/总薪资|Gross Salary|Gaji Kasar[:\s]+RM?\s*([\d,]+\.?\d*)/i);
  if (grossSalaryMatch) {
    result.grossSalary = parseFloat(grossSalaryMatch[1].replace(/,/g, ''));
  }

  // 提取EPF
  const epfMatch = text.match(/EPF|KWSP[:\s]+RM?\s*([\d,]+\.?\d*)/i);
  if (epfMatch) {
    result.epf = parseFloat(epfMatch[1].replace(/,/g, ''));
  }

  // ... 更多提取规则

  return result;
}

export async function parseCTOSReport(file: File): Promise<CTOSReportData> {
  // CTOS报告解析逻辑
  // ...
}

export async function parseTaxForm(file: File): Promise<TaxFormData> {
  // Borang B/BE解析逻辑
  // ...
}
```

#### UI集成

```typescript
const [uploadingFile, setUploadingFile] = useState(false);
const [parsedData, setParsedData] = useState<any>(null);

const handleFileUpload = async (file: File, fileType: 'salary' | 'tax' | 'ctos') => {
  setUploadingFile(true);
  try {
    let data;
    if (fileType === 'salary') {
      data = await parseSalarySlip(file);
    } else if (fileType === 'tax') {
      data = await parseTaxForm(file);
    } else if (fileType === 'ctos') {
      data = await parseCTOSReport(file);
    }

    setParsedData(data);
    // 自动填充表单字段
    if (data.grossSalary) setGrossSalary(data.grossSalary);
    if (data.epf) setEpfDeduction(data.epf);
    // ...
  } catch (error) {
    console.error('解析失败:', error);
    // 显示错误提示
  } finally {
    setUploadingFile(false);
  }
};
```

### 3.7 实施步骤

1. **添加客户需求输入UI** (1-2小时)
2. **实现困境分析算法** (2-3小时)
3. **实现PDF解析功能** (3-4小时) ✅
4. **设计对比数据结构** (1小时)
5. **实现优化建议算法** (2-3小时)
6. **实现优化预期计算** (2-3小时) ✅
7. **开发PDF组件** (4-5小时)
8. **实现前后对比逻辑** (2-3小时)
9. **样式设计与美化** (2-3小时)
10. **测试与优化** (2-3小时)

**总工作量**: 约21-29小时

---

## 📊 实施优先级与时间表

### 推荐顺序

1. **任务2: 债务管理增强** (7-10小时)
   - 相对独立
   - 用户价值高
   - 为PDF报告提供数据基础

2. **任务1: 收入计算增强** (5-6小时)
   - 完善数据输入
   - 为优化建议提供基础

3. **任务3: PDF导出功能** (13-17小时)
   - 最复杂但最重要
   - 需要前两个任务的数据支持

### 分阶段实施计划

**第1周**: 债务管理增强
- Day 1-2: 添加新债务类型和自动计算功能
- Day 3-4: 实现动态管理和文件上传
- Day 5: 测试和优化

**第2周**: 收入计算增强
- Day 1-2: 添加新字段和计算逻辑
- Day 3: 实现文件上传功能
- Day 4-5: 测试和优化

**第3-4周**: PDF导出功能
- Week 3 Day 1-2: 实现PDF解析功能 ✅
- Week 3 Day 3-4: 实现困境分析和优化预期算法 ✅
- Week 3 Day 5: 添加客户需求输入功能 ✅
- Week 4 Day 1-3: 开发PDF组件
- Week 4 Day 4-5: 实现前后对比和困境对比功能 ✅

---

## 📦 需要创建的新文件

1. `lib/debtCalculator.ts` - 债务计算辅助函数
2. `lib/optimizationEngine.ts` - 优化建议算法
3. `lib/situationAnalyzer.ts` - 困境分析算法 ✅
4. `lib/pdfParser.ts` - PDF文件解析功能 ✅
5. `lib/projectionCalculator.ts` - 优化预期计算 ✅
6. `components/DSRReportPDF.tsx` - PDF报告组件
7. `components/FileUpload.tsx` - 文件上传组件（可复用）
8. `components/CustomerRequirementInput.tsx` - 客户需求输入组件 ✅
9. `styles/pdfStyles.ts` - PDF样式定义

---

## ✅ 下一步行动

1. **确认技术方案**: 确认所有技术选型
2. **开始实施**: 按照优先级顺序开始开发
3. **分阶段测试**: 每个任务完成后进行测试
4. **用户反馈**: 收集用户反馈并优化

---

**文档状态**: ✅ 需求已确认，准备实施
**最后更新**: 2025-01-29

