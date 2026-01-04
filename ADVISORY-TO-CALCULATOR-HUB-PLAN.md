# Advisory页面改造成计算器总页面计划

## 实施步骤

### 步骤1：检查内容一致性 ✅
- Advisory和Solutions的8项服务内容已基本一致
- 无需额外整合（内容已经相同）

### 步骤2：将Advisory页面改造成计算器总页面

**新Advisory页面结构**：
1. Hero Section - "Financial Calculators & Tools"
2. 所有计算器卡片网格（列出所有实际存在的计算器）
3. CTA Section

**需要列出的计算器**（基于实际存在的页面）：
1. Loan Calculator (贷款计算器) - `/loan-calculator`
2. Loan Optimizer (贷款优化器) - `/loan-optimizer`
3. Loan Analyzer (贷款分析器) - `/loan-analyzer`
4. Loan Matcher (贷款匹配器) - `/loan-matcher`
5. Card Simulator (信用卡模拟器) - `/card-simulator`
6. Financial Optimization (财务优化) - `/financial-optimization`
7. Property Renovation Planner (房产装修规划器) - `/property-renovation-planner`
8. Settlement Analyzer (结算分析器) - `/settlement-analyzer`
9. Expense Tracker (支出跟踪器) - `/expense-tracker`
10. Insurance Coverage Planner (保险覆盖规划器) - `/insurance-coverage-planner`
11. Savings Investment Goal Planner (储蓄投资目标规划器) - `/savings-investment-goal-planner`
12. Cash Flow Optimization (现金流优化) - `/cash-flow-optimization`

**设计风格**：
- 参考tools页面但使用PageLayout、PageHero、SectionContainer等组件
- 保持X.AI纯黑色设计风格
- 使用图标和卡片布局

### 步骤3：更新翻译文件
- 添加advisory页面的新翻译内容（计算器相关的）

### 步骤4：更新导航链接
- Solutions页面中链接到Advisory的按钮需要更新（因为Advisory不再是服务页面）
- 但用户说先不改，等设置好后再处理

## 下一步
开始改造Advisory页面

