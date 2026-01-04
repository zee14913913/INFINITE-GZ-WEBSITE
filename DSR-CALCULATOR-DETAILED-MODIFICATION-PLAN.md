# 🔧 DSR计算器详细修改计划

**创建日期**: 2025-01-29
**目标文件**: `components/DSRCalculator.tsx`
**优先级**: 🔴 高优先级改进

---

## 📋 修改概览

| 序号 | 修改项 | 优先级 | 预计工作量 | 影响范围 |
|------|--------|--------|-----------|---------|
| 1 | 修复月供计算公式 | 🔴 高 | 30分钟 | 计算结果准确性 |
| 2 | 使用完整银行标准数据 | 🔴 高 | 1小时 | 银行对比准确性 |
| 3 | 应用身份类型规则 | 🔴 高 | 1.5小时 | DSR计算逻辑 |
| 4 | 增强收入计算 | 🟡 中 | 1小时 | Step 2功能 |
| 5 | 增强债务管理 | 🟡 中 | 1小时 | Step 3功能 |
| 6 | 添加结果导出 | 🟡 中 | 2小时 | Step 4功能 |

---

## 🔴 修改项1: 修复月供计算公式

### 问题描述

**当前代码位置**: `components/DSRCalculator.tsx` 第115-120行

**当前实现（简化公式）**:
```javascript
// 计算新贷款月供（平息法简化）
useEffect(() => {
  const monthlyInterest = (loanAmount * interestRate * loanYears) / 100 / 12 / loanYears;
  const monthlyPrincipal = loanAmount / (loanYears * 12);
  setNewMonthlyPayment(monthlyPrincipal + monthlyInterest);
}, [loanAmount, loanYears, interestRate]);
```

**问题**:
- 使用简化的平息法公式，**计算结果不准确**
- 不符合马来西亚银行的真实计算方式
- 会导致月供金额偏高，影响DSR计算准确性

**正确公式（减余法）**:
```
月供 = 本金 × [r(1+r)^n] / [(1+r)^n - 1]

其中：
r = 月利率 = 年利率 / 12
n = 总月数 = 年数 × 12
```

### 修改方案

#### 方案A: 直接修改（推荐）

**修改位置**: `components/DSRCalculator.tsx` 第115-120行

**新代码**:
```javascript
// 计算新贷款月供（减余法 - Diminishing Balance Method）
useEffect(() => {
  if (loanAmount > 0 && interestRate > 0 && loanYears > 0) {
    const monthlyRate = interestRate / 100 / 12; // 月利率
    const numMonths = loanYears * 12; // 总月数

    if (monthlyRate === 0) {
      // 零利率情况
      setNewMonthlyPayment(loanAmount / numMonths);
    } else {
      // 减余法公式
      const numerator = monthlyRate * Math.pow(1 + monthlyRate, numMonths);
      const denominator = Math.pow(1 + monthlyRate, numMonths) - 1;
      const monthlyPayment = loanAmount * (numerator / denominator);
      setNewMonthlyPayment(monthlyPayment);
    }
  } else {
    setNewMonthlyPayment(0);
  }
}, [loanAmount, loanYears, interestRate]);
```

#### 方案B: 使用库函数（更推荐）

**修改位置**:
1. 导入库函数
2. 使用库函数计算

**Step 1**: 在文件顶部添加导入
```javascript
import { calculateDiminishingRateMonthlyPayment } from '@/lib/dsrCalculator';
```

**Step 2**: 修改useEffect
```javascript
// 计算新贷款月供（使用库函数 - 减余法）
useEffect(() => {
  if (loanAmount > 0 && interestRate > 0 && loanYears > 0) {
    const result = calculateDiminishingRateMonthlyPayment(
      loanAmount,
      loanYears,
      interestRate / 100 // 转换为小数（如7% = 0.07）
    );
    setNewMonthlyPayment(result.monthlyPayment);
  } else {
    setNewMonthlyPayment(0);
  }
}, [loanAmount, loanYears, interestRate]);
```

### 验证测试

**测试用例**:
```javascript
// 测试用例1: 标准贷款
贷款金额: RM 100,000
利率: 7% p.a.
期限: 5年
预期月供: 约 RM 1,980.12

// 测试用例2: 房贷
贷款金额: RM 500,000
利率: 4.5% p.a.
期限: 30年
预期月供: 约 RM 2,533.43

// 测试用例3: 零利率
贷款金额: RM 50,000
利率: 0%
期限: 5年
预期月供: RM 833.33
```

### 影响分析

- **准确性提升**: 计算结果与银行实际月供一致
- **用户信任**: 提高计算器可信度
- **业务影响**: DSR计算结果更准确，推荐更可靠

---

## 🔴 修改项2: 使用完整银行标准数据

### 问题描述

**当前代码位置**: `components/DSRCalculator.tsx` 第45-55行

**当前实现（硬编码简化数据）**:
```javascript
// 银行标准（简化版，完整版应该从 bankStandardsReal2025.ts 导入）
const BANK_STANDARDS = [
  { code: 'MBB', name: 'Maybank', dsrLow: 40, dsrHigh: 70, selfEmployedRate: 0.7 },
  { code: 'CIMB', name: 'CIMB', dsrLow: 65, dsrHigh: 75, selfEmployedRate: 0.8 },
  { code: 'RHB', name: 'RHB', dsrLow: 55, dsrHigh: 60, selfEmployedRate: 0.6 },
  { code: 'HLB', name: 'Hong Leong', dsrLow: 60, dsrHigh: 80, selfEmployedRate: 0.9 },
  { code: 'PBB', name: 'Public Bank', dsrLow: 60, dsrHigh: 70, selfEmployedRate: 0.75 },
  { code: 'HSBC', name: 'HSBC', dsrLow: 60, dsrHigh: 70, selfEmployedRate: 0.75 },
  { code: 'BSN', name: 'BSN', dsrLow: 60, dsrHigh: 75, selfEmployedRate: 0.7 },
  { code: 'BIMB', name: 'Bank Islam', dsrLow: 50, dsrHigh: 70, selfEmployedRate: 0.7 },
];
```

**问题**:
- 数据过于简化，只有DSR限制和自雇比例
- 缺少不同贷款类型的DSR限制
- 缺少不同收入区间的DSR限制
- 缺少身份类型特殊条件
- 数据可能不准确或过时

**完整数据源**: `lib/bankStandardsReal2025.ts` 包含：
- 详细的DSR限制（按贷款类型、收入区间）
- 收入认定规则（按就业类型）
- 身份类型特殊条件
- 贷款限制
- 更多银行数据

### 修改方案

#### Step 1: 导入完整银行标准数据

**修改位置**: `components/DSRCalculator.tsx` 文件顶部（第18行后）

**添加导入**:
```javascript
import {
  BANK_STANDARDS_REAL_2025,
  getDSRLimitForBank,
  getIncomeRecognitionRate,
  type BankStandardReal
} from '@/lib/bankStandardsReal2025';
```

#### Step 2: 创建辅助函数来获取银行标准

**修改位置**: `components/DSRCalculator.tsx` 在组件定义前（第57行前）

**添加辅助函数**:
```javascript
// 获取银行的DSR限制（基于收入、贷款类型）
function getBankDSRLimit(
  bankCode: string,
  netIncome: number,
  loanType: string
): number {
  try {
    const bank = BANK_STANDARDS_REAL_2025.find(b => b.bankCode === bankCode);
    if (!bank) return 70; // 默认值

    // 根据贷款类型获取DSR限制
    const loanTypeKey = loanType === 'personal' ? 'personal' :
                       loanType === 'housing' ? 'housing' :
                       loanType === 'auto' ? 'car' : 'personal';

    // 获取该贷款类型的DSR限制数组
    const dsrLimits = bank.dsr[loanTypeKey] || [];

    // 找到匹配收入区间的DSR限制
    for (const limit of dsrLimits) {
      if (netIncome >= limit.minNetIncome &&
          (!limit.maxNetIncome || netIncome <= limit.maxNetIncome)) {
        return limit.dsrLimit;
      }
    }

    // 如果没有匹配，返回最后一个限制（通常是最高收入区间）
    return dsrLimits[dsrLimits.length - 1]?.dsrLimit || 70;
  } catch (error) {
    console.error('Error getting DSR limit:', error);
    return 70; // 默认值
  }
}

// 获取银行的收入认定比例
function getBankIncomeRecognitionRate(
  bankCode: string,
  employmentType: string
): number {
  try {
    const bank = BANK_STANDARDS_REAL_2025.find(b => b.bankCode === bankCode);
    if (!bank) return 1.0; // 默认100%

    const employmentKey = employmentType === 'salaried' ? 'salaried' :
                         employmentType === 'self_employed' ? 'self_employed' :
                         employmentType === 'government' ? 'government' : 'contract';

    const rule = bank.incomeRecognition[employmentKey];
    return rule?.recognitionRate || 1.0;
  } catch (error) {
    console.error('Error getting income recognition rate:', error);
    return 1.0; // 默认100%
  }
}
```

#### Step 3: 修改银行评估逻辑

**修改位置**: `components/DSRCalculator.tsx` 第131-176行（评估8家银行的useEffect）

**当前代码**:
```javascript
// 评估8家银行
useEffect(() => {
  const results = BANK_STANDARDS.map(bank => {
    // 根据收入决定DSR限制
    const dsrLimit = netIncome < 3000 ? bank.dsrLow : bank.dsrHigh;

    // 根据就业类型调整收入认定
    let recognizedIncome = netIncome;
    if (employmentType === 'self_employed') {
      recognizedIncome = netIncome * bank.selfEmployedRate;
    }

    // 重新计算DSR
    const adjustedDsr = netIncome > 0 ? ((totalCommitments + newMonthlyPayment) / recognizedIncome) * 100 : 0;

    // 评估状态
    let status = 'rejected';
    let statusColor = 'red';
    if (adjustedDsr <= dsrLimit) {
      status = 'approved';
      statusColor = 'green';
    } else if (adjustedDsr <= dsrLimit + 10) {
      status = 'risky';
      statusColor = 'yellow';
    }

    return {
      ...bank,
      dsrLimit,
      recognizedIncome,
      adjustedDsr,
      status,
      statusColor,
      margin: dsrLimit - adjustedDsr,
    };
  });

  setBankResults(results);

  // 生成推荐（排序）
  const approved = results
    .filter(r => r.status === 'approved')
    .sort((a, b) => b.margin - a.margin);

  setRecommendations(approved);
}, [dsr, netIncome, employmentType, totalCommitments, newMonthlyPayment]);
```

**新代码**:
```javascript
// 评估8家银行（使用完整银行标准数据）
useEffect(() => {
  if (netIncome <= 0) {
    setBankResults([]);
    setRecommendations([]);
    return;
  }

  const results = BANK_STANDARDS_REAL_2025.map(bank => {
    // 使用辅助函数获取DSR限制
    const dsrLimit = getBankDSRLimit(bank.bankCode, netIncome, loanType);

    // 使用辅助函数获取收入认定比例
    const recognitionRate = getBankIncomeRecognitionRate(bank.bankCode, employmentType);
    const recognizedIncome = netIncome * recognitionRate;

    // 重新计算调整后的DSR
    const adjustedDsr = recognizedIncome > 0
      ? ((totalCommitments + newMonthlyPayment) / recognizedIncome) * 100
      : 0;

    // 评估状态
    let status: 'approved' | 'risky' | 'rejected' = 'rejected';
    let statusColor = 'red';
    if (adjustedDsr <= dsrLimit) {
      status = 'approved';
      statusColor = 'green';
    } else if (adjustedDsr <= dsrLimit + 10) {
      status = 'risky';
      statusColor = 'yellow';
    }

    return {
      code: bank.bankCode,
      name: bank.bankName,
      dsrLimit,
      recognizedIncome,
      recognitionRate: recognitionRate * 100, // 转换为百分比
      adjustedDsr,
      status,
      statusColor,
      margin: dsrLimit - adjustedDsr,
    };
  });

  setBankResults(results);

  // 生成推荐（排序）
  const approved = results
    .filter(r => r.status === 'approved')
    .sort((a, b) => b.margin - a.margin);

  setRecommendations(approved);
}, [dsr, netIncome, employmentType, loanType, totalCommitments, newMonthlyPayment]);
```

#### Step 4: 移除旧的硬编码数据

**修改位置**: `components/DSRCalculator.tsx` 第45-55行

**删除或注释掉**:
```javascript
// 删除以下代码（已不再需要）
// const BANK_STANDARDS = [
//   { code: 'MBB', name: 'Maybank', dsrLow: 40, dsrHigh: 70, selfEmployedRate: 0.7 },
//   ...
// ];
```

### 数据类型更新

如果使用TypeScript，需要更新类型定义：

**添加类型定义**（在文件顶部）:
```typescript
interface BankResult {
  code: string;
  name: string;
  dsrLimit: number;
  recognizedIncome: number;
  recognitionRate: number;
  adjustedDsr: number;
  status: 'approved' | 'risky' | 'rejected';
  statusColor: string;
  margin: number;
}
```

**更新状态类型**:
```typescript
const [bankResults, setBankResults] = useState<BankResult[]>([]);
const [recommendations, setRecommendations] = useState<BankResult[]>([]);
```

### 验证测试

**测试用例**:
```javascript
// 测试用例1: 低收入区间
净收入: RM 2,500
贷款类型: 个人贷款
预期: Maybank DSR限制应该是40%（低收入区间）

// 测试用例2: 高收入区间
净收入: RM 10,000
贷款类型: 个人贷款
预期: Maybank DSR限制应该是70%（高收入区间）

// 测试用例3: 自雇收入认定
净收入: RM 8,000
就业类型: 自雇
预期: RHB收入认定60%，Hong Leong 90%
```

### 影响分析

- **准确性大幅提升**: 使用真实银行标准数据
- **功能更完整**: 支持不同贷款类型、收入区间
- **可维护性提升**: 数据集中管理，易于更新
- **扩展性提升**: 可以轻松添加更多银行

---

## 🔴 修改项3: 应用身份类型规则

### 问题描述

**当前代码位置**: `components/DSRCalculator.tsx` Step 1（第236-290行）

**当前实现**:
```javascript
// Step 1: 身份与就业信息
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
    // ... 其他字段
  </div>
)}
```

**问题**:
- 身份类型选择后，**没有应用到后续计算中**
- 不同身份类型应该有：
  - 不同的DSR限制调整
  - 不同的利率溢价
  - 不同的LTV限制（房贷）
  - 不同的文件要求

**完整数据源**: `lib/bankStandardsReal2025.ts` 中的 `identityConditions`

### 修改方案

#### Step 1: 导入身份条件数据

**修改位置**: 在导入部分添加

```javascript
import {
  BANK_STANDARDS_REAL_2025,
  type IdentityCondition
} from '@/lib/bankStandardsReal2025';
```

#### Step 2: 创建身份类型映射函数

**修改位置**: 在组件定义前添加辅助函数

```javascript
// 身份类型映射（组件内部使用的值 → 数据库中的值）
function mapIdentityTypeToDatabase(identityType: string): string {
  const mapping: Record<string, string> = {
    'citizen': 'malaysian_citizen',
    'pr': 'permanent_resident',
    'civil_servant': 'government_employee',
    'glc': 'glc_employee',
    'self_employed': 'self_employed',
    'foreigner': 'foreigner',
  };
  return mapping[identityType] || 'malaysian_citizen';
}

// 获取银行对特定身份类型的条件
function getBankIdentityCondition(
  bankCode: string,
  identityType: string
): IdentityCondition | null {
  try {
    const bank = BANK_STANDARDS_REAL_2025.find(b => b.bankCode === bankCode);
    if (!bank) return null;

    const dbIdentityType = mapIdentityTypeToDatabase(identityType);
    const condition = bank.identityConditions.find(
      ic => ic.identity === dbIdentityType
    );

    return condition || null;
  } catch (error) {
    console.error('Error getting identity condition:', error);
    return null;
  }
}
```

#### Step 3: 修改银行评估逻辑（应用身份类型规则）

**修改位置**: 在"评估8家银行"的useEffect中（第131-176行）

**在计算DSR限制后，应用身份类型调整**:

```javascript
// 评估8家银行（使用完整银行标准数据 + 身份类型规则）
useEffect(() => {
  if (netIncome <= 0) {
    setBankResults([]);
    setRecommendations([]);
    return;
  }

  const results = BANK_STANDARDS_REAL_2025.map(bank => {
    // 1. 获取基础DSR限制
    const baseDsrLimit = getBankDSRLimit(bank.bankCode, netIncome, loanType);

    // 2. 获取身份类型条件
    const identityCondition = getBankIdentityCondition(bank.bankCode, identityType);

    // 3. 应用身份类型的DSR调整
    let adjustedDsrLimit = baseDsrLimit;
    if (identityCondition) {
      if (identityCondition.dsrAdjustment) {
        adjustedDsrLimit = baseDsrLimit + identityCondition.dsrAdjustment;
        // 确保不超过100%
        adjustedDsrLimit = Math.min(adjustedDsrLimit, 100);
      }

      // 如果该身份类型不被接受，直接标记为rejected
      if (!identityCondition.accepted) {
        return {
          code: bank.bankCode,
          name: bank.bankName,
          dsrLimit: adjustedDsrLimit,
          recognizedIncome: 0,
          recognitionRate: 0,
          adjustedDsr: 0,
          status: 'rejected' as const,
          statusColor: 'red',
          margin: -100,
          rejectionReason: `Bank does not accept ${identityType}`,
        };
      }
    }

    // 4. 获取收入认定比例
    const recognitionRate = getBankIncomeRecognitionRate(bank.bankCode, employmentType);
    const recognizedIncome = netIncome * recognitionRate;

    // 5. 计算调整后的DSR
    const adjustedDsr = recognizedIncome > 0
      ? ((totalCommitments + newMonthlyPayment) / recognizedIncome) * 100
      : 0;

    // 6. 评估状态（使用调整后的DSR限制）
    let status: 'approved' | 'risky' | 'rejected' = 'rejected';
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
      dsrLimit: adjustedDsrLimit, // 使用调整后的限制
      baseDsrLimit, // 保留原始限制用于显示
      recognizedIncome,
      recognitionRate: recognitionRate * 100,
      adjustedDsr,
      status,
      statusColor,
      margin: adjustedDsrLimit - adjustedDsr,
      identityCondition: identityCondition ? {
        accepted: identityCondition.accepted,
        dsrAdjustment: identityCondition.dsrAdjustment,
        interestRatePremium: identityCondition.interestRatePremium,
      } : null,
    };
  });

  setBankResults(results);

  // 生成推荐（排序）
  const approved = results
    .filter(r => r.status === 'approved')
    .sort((a, b) => b.margin - a.margin);

  setRecommendations(approved);
}, [dsr, netIncome, employmentType, loanType, identityType, totalCommitments, newMonthlyPayment]);
```

**注意**: 在useEffect依赖数组中添加 `identityType`

#### Step 4: 在结果显示中展示身份类型影响

**修改位置**: Step 4的银行对比表和推荐部分

**在银行对比表中添加身份类型信息**（可选）:

```javascript
// 在表格中添加一列显示身份类型影响
<th className="p-3 text-center border border-border">Identity Impact</th>

// 在表格行中显示
<td className="p-3 text-center border border-border">
  {bank.identityCondition && (
    <div className="text-xs">
      {bank.identityCondition.accepted ? (
        <span className="text-green-500">
          ✓ Accepted
          {bank.identityCondition.dsrAdjustment && (
            <span> (DSR {bank.identityCondition.dsrAdjustment > 0 ? '+' : ''}{bank.identityCondition.dsrAdjustment}%)</span>
          )}
        </span>
      ) : (
        <span className="text-red-500">✗ Not Accepted</span>
      )}
    </div>
  )}
</td>
```

### 类型定义更新

```typescript
interface BankResult {
  code: string;
  name: string;
  dsrLimit: number;
  baseDsrLimit?: number;
  recognizedIncome: number;
  recognitionRate: number;
  adjustedDsr: number;
  status: 'approved' | 'risky' | 'rejected';
  statusColor: string;
  margin: number;
  rejectionReason?: string;
  identityCondition?: {
    accepted: boolean;
    dsrAdjustment?: number;
    interestRatePremium?: number;
  } | null;
}
```

### 验证测试

**测试用例**:
```javascript
// 测试用例1: 外国人身份
身份类型: Foreigner
预期: 某些银行可能不接受或DSR限制更严格

// 测试用例2: 公务员身份
身份类型: Civil Servant / Government Employee
预期: 某些银行DSR限制更宽松（+5%到+10%）

// 测试用例3: 永久居民
身份类型: Permanent Resident
预期: 通常与公民相同，但某些银行可能有差异
```

### 影响分析

- **准确性提升**: 考虑身份类型的实际影响
- **用户信任**: 更真实地反映审批可能性
- **差异化**: 展示不同身份类型的优势和限制

---

## 🟡 修改项4: 增强收入计算

### 问题描述

**当前代码位置**: `components/DSRCalculator.tsx` Step 2（第292-361行）

**当前实现限制**:
- 只有基本薪资输入
- EPF自动计算
- 所得税和SOCSO需要手动输入
- 没有津贴/奖金输入
- 没有其他收入来源

### 修改方案

#### 添加状态变量

**修改位置**: 在状态管理部分（第68-73行后）

**添加新的状态**:
```javascript
// 收入信息（增强）
const [grossSalary, setGrossSalary] = useState(6000);
const [allowances, setAllowances] = useState(0); // 新增：固定津贴
const [bonusMonthly, setBonusMonthly] = useState(0); // 新增：月均奖金
const [otherIncome, setOtherIncome] = useState(0); // 新增：其他收入
const [epfDeduction, setEpfDeduction] = useState(480);
const [incomeTax, setIncomeTax] = useState(300);
const [socso, setSocso] = useState(50);
const [otherDeductions, setOtherDeductions] = useState(0); // 新增：其他扣除
const [netIncome, setNetIncome] = useState(5170);
```

#### 修改净收入计算逻辑

**修改位置**: 第95-99行的useEffect

**新代码**:
```javascript
// 自动计算净收入（增强版）
useEffect(() => {
  const totalGross = grossSalary + allowances + bonusMonthly + otherIncome;
  const totalDeductions = epfDeduction + incomeTax + socso + otherDeductions;
  const calculated = totalGross - totalDeductions;
  setNetIncome(Math.max(0, calculated)); // 确保不为负
}, [grossSalary, allowances, bonusMonthly, otherIncome, epfDeduction, incomeTax, socso, otherDeductions]);
```

#### 在Step 2 UI中添加新字段

**修改位置**: Step 2的输入表单（第292-361行）

**在总薪资输入后添加**:
```javascript
{/* 新增字段：固定津贴 */}
<div>
  <label className="block mb-2 font-medium">
    Fixed Allowances (RM/month)
    <span className="text-sm text-muted-foreground ml-2">(Optional)</span>
  </label>
  <input
    type="number"
    value={allowances}
    onChange={(e) => setAllowances(Number(e.target.value) || 0)}
    className="w-full p-3 rounded-lg bg-muted border border-border"
    placeholder="0"
  />
  <p className="mt-1 text-xs text-muted-foreground">
    Fixed monthly allowances (housing, transport, etc.)
  </p>
</div>

{/* 新增字段：月均奖金 */}
<div>
  <label className="block mb-2 font-medium">
    Average Monthly Bonus (RM)
    <span className="text-sm text-muted-foreground ml-2">(Optional)</span>
  </label>
  <input
    type="number"
    value={bonusMonthly}
    onChange={(e) => setBonusMonthly(Number(e.target.value) || 0)}
    className="w-full p-3 rounded-lg bg-muted border border-border"
    placeholder="0"
  />
  <p className="mt-1 text-xs text-muted-foreground">
    Annual bonus divided by 12 months
  </p>
</div>

{/* 新增字段：其他收入 */}
<div>
  <label className="block mb-2 font-medium">
    Other Income (RM/month)
    <span className="text-sm text-muted-foreground ml-2">(Optional)</span>
  </label>
  <input
    type="number"
    value={otherIncome}
    onChange={(e) => setOtherIncome(Number(e.target.value) || 0)}
    className="w-full p-3 rounded-lg bg-muted border border-border"
    placeholder="0"
  />
  <p className="mt-1 text-xs text-muted-foreground">
    Rental income, investments, etc.
  </p>
</div>
```

**在SOCSO输入后添加**:
```javascript
{/* 新增字段：其他扣除 */}
<div>
  <label className="block mb-2 font-medium">
    Other Deductions (RM/month)
    <span className="text-sm text-muted-foreground ml-2">(Optional)</span>
  </label>
  <input
    type="number"
    value={otherDeductions}
    onChange={(e) => setOtherDeductions(Number(e.target.value) || 0)}
    className="w-full p-3 rounded-lg bg-muted border border-border"
    placeholder="0"
  />
  <p className="mt-1 text-xs text-muted-foreground">
    Insurance, union fees, etc.
  </p>
</div>
```

#### 更新净收入显示（显示明细）

**修改位置**: 净收入显示部分（第337-344行）

**新代码**:
```javascript
<div className="p-4 rounded-lg bg-primary/10 border border-primary space-y-2">
  {/* 收入明细 */}
  <div className="grid grid-cols-2 gap-2 text-sm">
    <div>
      <span className="text-muted-foreground">Total Gross Income:</span>
      <span className="ml-2 font-semibold">
        RM {(grossSalary + allowances + bonusMonthly + otherIncome).toLocaleString()}
      </span>
    </div>
    <div>
      <span className="text-muted-foreground">Total Deductions:</span>
      <span className="ml-2 font-semibold">
        RM {(epfDeduction + incomeTax + socso + otherDeductions).toLocaleString()}
      </span>
    </div>
  </div>

  {/* 净收入突出显示 */}
  <div className="flex items-center justify-between pt-2 border-t border-primary/20">
    <span className="font-bold">Net Income:</span>
    <span className="text-2xl font-bold text-primary">
      RM {netIncome.toLocaleString()}
    </span>
  </div>
</div>
```

### 可选增强：自动计算所得税和SOCSO

这是一个更复杂的功能，需要：
1. 马来西亚所得税表数据
2. SOCSO计算表数据
3. 年度收入计算

**如果实施，建议**：
- 创建一个单独的辅助函数文件
- 或使用现有的税务计算库

### 影响分析

- **功能完整性**: 支持更真实的收入计算
- **用户体验**: 用户可以输入完整收入信息
- **准确性**: 计算结果更接近实际情况

---

## 🟡 修改项5: 增强债务管理

### 问题描述

**当前代码位置**: `components/DSRCalculator.tsx` Step 3（第363-482行）

**当前实现限制**:
- 只有4种固定债务类型（房贷、车贷、个人贷、PTPTN）
- 信用卡支持多张，但功能有限
- 没有其他债务类型（如商业贷款、透支额度等）

### 修改方案

#### 添加"其他债务"功能

**添加状态变量**:
```javascript
// 现有债务（增强）
const [housingLoan, setHousingLoan] = useState(0);
const [autoLoan, setAutoLoan] = useState(0);
const [personalLoan, setPersonalLoan] = useState(0);
const [ptptn, setPtptn] = useState(0);
const [creditCards, setCreditCards] = useState<Array<{ used: number; limit: number }>>([]);
const [otherDebts, setOtherDebts] = useState<Array<{ name: string; monthlyPayment: number }>>([]); // 新增
```

#### 修改总承诺计算

**修改位置**: 第106-113行的useEffect

**新代码**:
```javascript
// 计算总承诺（增强版）
useEffect(() => {
  let total = housingLoan + autoLoan + personalLoan + ptptn;

  // 信用卡承诺（5%规则）
  creditCards.forEach(card => {
    total += card.used * 0.05;
  });

  // 其他债务
  otherDebts.forEach(debt => {
    total += debt.monthlyPayment;
  });

  setTotalCommitments(total);
}, [housingLoan, autoLoan, personalLoan, ptptn, creditCards, otherDebts]);
```

#### 在UI中添加"其他债务"管理

**修改位置**: Step 3的信用卡部分后（第456行后）

**添加代码**:
```javascript
{/* 其他债务 */}
<div>
  <div className="flex items-center justify-between mb-4">
    <label className="font-medium">Other Debts</label>
    <button
      onClick={() => setOtherDebts([...otherDebts, { name: '', monthlyPayment: 0 }])}
      className="px-4 py-2 rounded-lg bg-primary text-black text-sm font-bold hover:bg-primary/90 transition"
    >
      + Add Debt
    </button>
  </div>

  {otherDebts.map((debt, index) => (
    <div key={index} className="mb-4 p-4 rounded-lg bg-muted border border-border">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium">Debt {index + 1}</span>
        <button
          onClick={() => setOtherDebts(otherDebts.filter((_, i) => i !== index))}
          className="text-red-500 hover:text-red-400 text-sm"
        >
          Remove
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Debt Name</label>
          <input
            type="text"
            value={debt.name}
            onChange={(e) => {
              const updated = [...otherDebts];
              updated[index].name = e.target.value;
              setOtherDebts(updated);
            }}
            className="w-full p-2 rounded bg-background border border-border"
            placeholder="e.g. Business Loan"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Monthly Payment (RM)</label>
          <input
            type="number"
            value={debt.monthlyPayment}
            onChange={(e) => {
              const updated = [...otherDebts];
              updated[index].monthlyPayment = Number(e.target.value) || 0;
              setOtherDebts(updated);
            }}
            className="w-full p-2 rounded bg-background border border-border"
            placeholder="0"
          />
        </div>
      </div>
    </div>
  ))}
</div>
```

### 影响分析

- **灵活性提升**: 用户可以输入任何类型的债务
- **完整性提升**: 更真实地反映用户债务状况
- **用户体验**: 动态添加/删除，使用灵活

---

## 📊 修改优先级总结

### 🔴 高优先级（立即实施）

1. ✅ **修复月供计算公式** - 30分钟
2. ✅ **使用完整银行标准数据** - 1小时
3. ✅ **应用身份类型规则** - 1.5小时

**总工作量**: 约3小时

### 🟡 中优先级（近期实施）

4. ✅ **增强收入计算** - 1小时
5. ✅ **增强债务管理** - 1小时
6. ✅ **添加结果导出** - 2小时

**总工作量**: 约4小时

---

## 🚀 实施建议

### 阶段1: 立即修复（本周内）

1. 修复月供计算公式（使用减余法）
2. 使用完整银行标准数据
3. 应用身份类型规则

### 阶段2: 功能增强（下周）

4. 增强收入计算
5. 增强债务管理

### 阶段3: 用户体验优化（后续）

6. 添加结果导出功能
7. 添加可视化图表
8. 完整多语言支持

---

**文档完成日期**: 2025-01-29
**下一步**: 开始实施修改，或根据需要调整修改计划

