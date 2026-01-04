# 🟡 DSR计算器中优先级功能实施计划（简化版）

**创建日期**: 2025-01-29
**最后更新**: 2025-01-29
**状态**: ✅ 需求已确认 - 简化实施方案
**优先级**: 🟡 中优先级

---

## 📋 简化需求总结

基于用户反馈，以下简化需求已明确：

### ✅ 任务1: 收入计算增强（简化版）

- **收入输入**: ✅ 只需要输入 **净月收入（Net Monthly Income）**
- **文件上传**:
  - 支持上传薪资单/银行流水（用于参考，用户可手动输入）
  - **CTOS解析**: 不需要太仔细，只是普通文件分析，用户会核对
- **其他字段**: 可选的辅助字段（津贴、奖金等），但不强制

### ✅ 任务2: 债务管理增强

- **债务类型**: CTOS/CCRIS常见类型
- **债务详情**: 总额、利率、期限 → 自动计算月供
- **文件上传**: CTOS报告上传（简单解析，用户核对）
- **动态管理**: 类似信用卡的添加/移除方式

### ✅ 任务3: PDF导出功能（简化版）

- **设计风格**: 与网站一致，简单设计即可
- **报告内容**:
  1. 优化收入&债务内容
  2. 贷款需求
  3. 银行贷款的对比&推荐
- **核心功能**: 前后对比效果（客户可以省多少钱、多少时间）

---

## 🎯 任务1: 收入计算增强 - 简化实施

### 1.1 简化后的字段设计

```typescript
// 收入信息（简化版）
const [netMonthlyIncome, setNetMonthlyIncome] = useState(5170); // 主要字段

// 可选辅助字段（折叠/高级选项）
const [grossSalary, setGrossSalary] = useState(0); // 可选：用于显示
const [allowances, setAllowances] = useState(0); // 可选
const [bonusMonthly, setBonusMonthly] = useState(0); // 可选
const [otherIncome, setOtherIncome] = useState(0); // 可选
const [incomeTax, setIncomeTax] = useState(0); // 可选
```

### 1.2 UI设计（简化版）

```
Step 2: 收入信息
├── 净月收入 *（主要字段）
│   ├── [输入框] RM _______
│   ├── [或] [上传薪资单/银行流水] 按钮
│   └── 说明：请输入扣除所有扣除项后的净收入
│
└── 高级选项（可选，默认折叠）
    ├── 总薪资（可选）
    ├── 固定津贴（可选）
    ├── 月均奖金（可选）
    └── 其他收入（可选）
```

### 1.3 文件上传（简化版）

**功能说明**:
- 上传文件用于参考
- 简单的文本提取（不强制完美解析）
- 用户手动输入净月收入

**技术方案**:
```typescript
// 简单的PDF文本提取
export async function extractTextFromPDF(file: File): Promise<string> {
  // 使用pdf-parse提取文本
  // 返回原始文本，不强制解析
}

// UI: 显示提取的文本，用户手动输入
```

### 1.4 实施步骤（简化）

1. **添加净月收入输入字段** (30分钟)
2. **添加可选高级字段（折叠）** (1小时)
3. **简单的文件上传UI** (1小时)
4. **测试** (30分钟)

**总工作量**: 约3小时

---

## 🎯 任务2: 债务管理增强

### 2.1 数据结构（保持）

```typescript
// 固定债务类型
const [housingLoan, setHousingLoan] = useState(0);
const [autoLoan, setAutoLoan] = useState(0);
const [personalLoan, setPersonalLoan] = useState(0);
const [ptptn, setPtptn] = useState(0);
const [businessLoan, setBusinessLoan] = useState(0); // 新增
const [overdraft, setOverdraft] = useState(0); // 新增

// 其他债务（动态管理）
interface OtherDebt {
  id: string;
  name: string;
  totalAmount: number;
  interestRate: number;
  loanYears: number;
  monthlyPayment: number; // 自动计算
}
```

### 2.2 CTOS报告上传（简化版）

**功能说明**:
- 上传CTOS报告（PDF）
- 简单文本提取，显示关键信息
- 用户手动核对和输入债务数据

**技术方案**:
```typescript
// 简单的文本提取，不强制完美解析
export async function extractCTOSText(file: File): Promise<string> {
  // 提取PDF文本
  // 返回原始文本供用户参考
}

// UI: 显示提取的文本，用户手动输入债务数据
```

### 2.3 实施步骤

1. **添加新债务类型字段** (30分钟)
2. **实现自动计算月供** (1小时)
3. **更新UI组件** (2-3小时)
4. **简单的CTOS文件上传** (1小时)
5. **测试** (1小时)

**总工作量**: 约5-6小时

---

## 🎯 任务3: PDF导出功能 - 简化实施

### 3.1 设计原则

- **简单设计**: 与网站风格一致
- **清晰布局**: 不复杂，易于阅读
- **核心信息**: 突出前后对比和关键数据

### 3.2 PDF库选择

**推荐**: `jspdf`（项目已有）或 `@react-pdf/renderer`

由于项目已有 `jspdf`，可以使用它来生成简单的PDF。

### 3.3 报告结构（简化版 - 3-4页）

```
第1页: 基本信息与总结
├── 报告标题
├── 生成日期
├── 客户基本信息
└── 关键数据总结
    ├── 当前DSR: XX%
    ├── 优化后DSR: XX%
    └── 每月节省: RM XXX

第2页: 前后对比
├── 收入与债务对比表
├── DSR对比
└── 节省金额突出显示

第3页: 银行对比与推荐
├── 15家银行对比表（简化）
└── 推荐银行列表

第4页: 优化建议（如果有）
└── 简要建议列表
```

### 3.4 前后对比数据

```typescript
interface ComparisonData {
  before: {
    netIncome: number;
    totalDebts: number;
    dsr: number;
    approvedBanks: number;
  };
  after: {
    netIncome: number;
    totalDebts: number;
    dsr: number;
    approvedBanks: number;
  };
  savings: {
    monthly: number;
    annual: number;
  };
}
```

### 3.5 PDF生成（使用jspdf）

```typescript
import jsPDF from 'jspdf';

export function generateDSRReportPDF(
  data: DSRReportData,
  comparison: ComparisonData
) {
  const doc = new jsPDF();

  // 第1页
  doc.setFontSize(20);
  doc.text('DSR计算报告', 105, 20, { align: 'center' });

  // 基本信息
  doc.setFontSize(12);
  doc.text(`生成日期: ${new Date().toLocaleDateString()}`, 20, 40);

  // 关键数据
  doc.setFontSize(14);
  doc.text('关键数据', 20, 60);
  doc.setFontSize(12);
  doc.text(`当前DSR: ${comparison.before.dsr.toFixed(1)}%`, 20, 75);
  doc.text(`优化后DSR: ${comparison.after.dsr.toFixed(1)}%`, 20, 85);
  doc.text(`每月节省: RM ${comparison.savings.monthly.toLocaleString()}`, 20, 95);

  // 第2页
  doc.addPage();
  // ... 前后对比表格

  // 第3页
  doc.addPage();
  // ... 银行对比表

  // 保存
  doc.save(`DSR-Report-${new Date().toISOString().split('T')[0]}.pdf`);
}
```

### 3.6 实施步骤（简化）

1. **设计简单的PDF布局** (1小时)
2. **实现PDF生成函数** (2-3小时)
3. **集成前后对比数据** (1-2小时)
4. **测试** (1小时)

**总工作量**: 约5-7小时

---

## 📊 简化后的实施优先级与时间表

### 推荐顺序

1. **任务2: 债务管理增强** (5-6小时)
   - 相对独立
   - 用户价值高

2. **任务1: 收入计算增强** (3小时)
   - 简化后工作量小
   - 快速完成

3. **任务3: PDF导出功能** (5-7小时)
   - 使用现有jspdf库
   - 简单设计

### 分阶段实施计划

**第1周**: 债务管理增强 + 收入计算简化
- Day 1-2: 债务管理增强
- Day 3: 收入计算简化
- Day 4-5: 测试和优化

**第2周**: PDF导出功能
- Day 1-2: PDF布局设计和生成函数
- Day 3-4: 前后对比数据集成
- Day 5: 测试和优化

---

## 📦 需要创建的新文件（简化）

1. `lib/debtCalculator.ts` - 债务计算辅助函数
2. `lib/pdfGenerator.ts` - PDF生成函数（使用jspdf）
3. `components/FileUpload.tsx` - 简单的文件上传组件

---

## ✅ 关键简化点总结

### 收入计算
- ✅ 主要字段：净月收入（Net Monthly Income）
- ✅ 其他字段：可选，折叠显示
- ✅ 文件上传：简单文本提取，用户手动输入

### 债务管理
- ✅ CTOS解析：简单文本提取，用户核对输入
- ✅ 自动计算：总额、利率、期限 → 月供

### PDF导出
- ✅ 设计：简单，与网站一致
- ✅ 页数：3-4页
- ✅ 库：使用现有jspdf
- ✅ 内容：核心前后对比数据

---

## 📊 总工作量（简化后）

- **任务1**: 3小时
- **任务2**: 5-6小时
- **任务3**: 5-7小时
- **总计**: 约13-16小时（约2周）

---

## ✅ 下一步行动

1. **确认简化方案**: 确认以上简化方案符合需求
2. **开始实施**: 按照优先级顺序开始开发
3. **分阶段测试**: 每个任务完成后进行测试

---

**文档状态**: ✅ 简化需求已确认，准备实施
**最后更新**: 2025-01-29

