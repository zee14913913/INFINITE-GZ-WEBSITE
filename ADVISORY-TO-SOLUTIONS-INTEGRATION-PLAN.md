# Advisory内容整合到Solutions + Advisory改造成计算器总页面方案

## 任务概述

1. ✅ 备份Advisory页面内容
2. 将Advisory的8项服务详细内容整合到Solutions页面
3. 将Advisory页面改造成所有计算器的总页面
4. 备份所有现有计算器页面内容
5. 删除不用的计算器页面

## 发现的现有计算器页面

需要确认所有计算器页面：
- `/tools` - 计算器工具集页面
- `/loan-calculator` - 贷款计算器页面
- `/loan-optimizer` - 贷款优化器页面
- `/card-simulator` - 信用卡模拟器页面
- `/financial-optimization` - 财务优化页面（可能包含DSR计算器）

## 步骤1：备份Advisory内容

Advisory页面的重要内容：
1. Hero section（标题、描述、按钮）
2. 8项服务的详细展示（services.items）
3. Key Benefits section（benefits）
4. CTA section

## 步骤2：整合到Solutions页面

将Advisory的8项服务详细内容替换Solutions页面的complementaryServices部分：
- 使用Advisory的详细描述
- 保持Solutions页面的布局结构
- 保留链接到Advisory页面的按钮（但Advisory页面会变成计算器页面）

## 步骤3：改造Advisory页面为计算器总页面

将Advisory页面改造成展示所有计算器选项的页面：
- 类似tools页面，但作为主要入口
- 展示所有可用的计算器工具
- 每个计算器有图标、标题、描述、链接

## 步骤4：备份计算器页面

在删除前，备份所有计算器页面的内容到备份文件。

## 步骤5：删除不用的计算器页面

根据用户需求，删除不再需要的计算器页面。

