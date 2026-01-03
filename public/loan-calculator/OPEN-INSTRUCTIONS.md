# 如何打开贷款计算器

## 方法 1: 直接在浏览器中打开（推荐）

1. 找到文件：`public/loan-calculator/index.html`
2. 右键点击文件
3. 选择"打开方式" → 选择你的浏览器（Chrome, Safari, Firefox等）
4. 或者直接双击文件（如果浏览器是默认打开方式）

## 方法 2: 通过 Next.js 开发服务器

1. 启动开发服务器：
   ```bash
   npm run dev
   ```

2. 在浏览器中访问：
   ```
   http://localhost:3000/loan-calculator
   ```

   这会自动重定向到 `/loan-calculator/index.html`

## 方法 3: 使用本地服务器（测试用）

在 `public/loan-calculator` 目录下运行：
```bash
python3 -m http.server 8000
```

然后访问：`http://localhost:8000/index.html`

## 故障排除

如果页面无法打开：

1. **检查文件是否存在**：
   ```bash
   ls -la public/loan-calculator/
   ```
   应该看到：index.html, styles.css, script.js

2. **检查浏览器控制台**：
   - 按 F12 打开开发者工具
   - 查看 Console 标签是否有错误
   - 查看 Network 标签，确认 CSS 和 JS 文件是否加载

3. **检查文件路径**：
   - 确保所有文件在同一目录
   - CSS 和 JS 使用相对路径（styles.css, script.js）

4. **测试页面**：
   - 打开 `test.html` 查看文件加载状态

## 常见问题

**Q: 页面是空白的？**
A: 检查浏览器控制台，可能是 JavaScript 错误

**Q: 样式没有加载？**
A: 检查 styles.css 文件路径，确保在同一目录

**Q: 计算器不工作？**
A: 检查 script.js 是否加载，查看控制台错误

**Q: 通过 Next.js 访问时出错？**
A: 确保开发服务器正在运行，并且访问正确的路由
