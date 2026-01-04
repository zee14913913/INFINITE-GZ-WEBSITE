# 按钮样式指南

## 桃红色按钮样式（#FF007F）

网站现在支持两种桃红色按钮样式：

### 方案1：黑背景 + 莹白色字样 + 桃红色描边
```tsx
<button className="btn-pink-outline">
  按钮文字
</button>
```

**样式特点：**
- 背景：纯黑 (`bg-black`)
- 文字：莹白色 (`text-primary`)，使用 x.ai 标准文字样式
- 边框：桃红色 (`border-[#FF007F]`)
- Hover效果：轻微桃红色背景 + 发光阴影

**使用场景：**
- 次要操作按钮
- 需要与主要按钮区分时
- 导航按钮

---

### 方案2：桃红色背景 + 莹白色字样 + 莹白色描边
```tsx
<button className="btn-pink-filled">
  按钮文字
</button>
```

**样式特点：**
- 背景：桃红色 (`bg-[#FF007F]`)
- 文字：莹白色 (`text-primary`)，使用 x.ai 标准文字样式
- 边框：莹白色 (`border-primary`)
- Hover效果：更深桃红色 + 强烈发光阴影

**使用场景：**
- 主要操作按钮
- CTA按钮
- 需要突出显示的操作

---

## 现有按钮样式

### 标准按钮（X.AI 风格）
```tsx
<button className="btn-xai">
  按钮文字
</button>
```

### 主按钮（白色背景）
```tsx
<button className="btn-xai-primary">
  按钮文字
</button>
```

---

## 使用建议

1. **主要操作**：使用 `btn-pink-filled` 或 `btn-xai-primary`
2. **次要操作**：使用 `btn-pink-outline` 或 `btn-xai`
3. **导航按钮**：使用 `btn-pink-outline`
4. **表单提交**：使用 `btn-pink-filled`

---

## 颜色代码

- 桃红色：`#FF007F`
- 莹白色：`#FFFFFF` (white)
- 黑色背景：`#000000` (black)

