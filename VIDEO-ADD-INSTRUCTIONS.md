# 📹 Credit Pilot 页面视频添加说明

## 🎯 如何添加视频到 Hero Banner

由于无法直接发送视频文件，请按照以下步骤操作：

### 步骤 1：准备视频文件

**推荐视频规格：**
- **格式**：MP4 (H.264编码)
- **分辨率**：1920x1080 或更高（支持超大屏显示）
- **时长**：10-30秒（将循环播放）
- **文件大小**：建议 < 10MB（优化加载速度）
- **内容**：适合作为背景的视频，不要太复杂

### 步骤 2：放置视频文件

1. 将视频文件重命名为：`creditpilot-hero-bg.mp4`
2. 将文件放入项目的 `public/videos/` 目录
3. 完整路径应该是：`public/videos/creditpilot-hero-bg.mp4`

**目录结构：**
```
infinite-gz-temp/
  └── public/
      └── videos/
          ├── hero-bg.mp4 (首页视频)
          ├── solutions-hero-bg.mp4 (Solutions页面视频)
          └── creditpilot-hero-bg.mp4 (Credit Pilot页面视频) ← 您的视频放这里
```

### 步骤 3：视频自动生效

视频文件放置后，代码会自动检测并使用。当前设置：
- ✅ 自动播放
- ✅ 循环播放
- ✅ 静音播放
- ✅ 50%透明度（确保文字清晰可读）
- ✅ 渐变遮罩（顶部10%黑色，底部50%黑色）

### 步骤 4：调整视频效果（可选）

如果需要调整视频的视觉效果，可以修改 `app/creditpilot/page.tsx` 文件：

**调整视频透明度：**
```tsx
// 第28行，修改 opacity-50 的值（0-100）
className="w-full h-full object-cover opacity-50"  // 50%透明度
// 改为：
className="w-full h-full object-cover opacity-30"  // 30%透明度（更暗）
```

**调整渐变遮罩：**
```tsx
// 第36行，修改渐变遮罩的强度
<div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-transparent to-black/50"></div>
// 改为：
<div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/70"></div>
// 数字越大，遮罩越暗
```

### 步骤 5：测试视频

1. 启动开发服务器：`npm run dev`
2. 访问：`http://localhost:3000/creditpilot`
3. 检查视频是否正常播放

### 📝 注意事项

1. **视频文件路径**：确保文件名是 `creditpilot-hero-bg.mp4`（代码中已设置）
2. **文件大小**：如果视频文件太大，会影响页面加载速度，建议压缩
3. **视频格式**：只支持 MP4 格式（H.264编码）
4. **浏览器兼容性**：现代浏览器都支持，如果视频不显示，检查浏览器控制台错误信息

### 🎨 视频效果预览

视频将作为 Hero Banner 的背景：
- 视频覆盖整个屏幕（全屏显示）
- 视频上方显示文字内容（标题、副标题、按钮）
- 视频有渐变遮罩，确保文字清晰可读
- 视频自动循环播放，无声

### ❓ 问题排查

如果视频不显示：

1. **检查文件路径**：确认文件在 `public/videos/creditpilot-hero-bg.mp4`
2. **检查文件名**：文件名必须完全匹配（区分大小写）
3. **检查浏览器控制台**：查看是否有错误信息
4. **检查视频格式**：确认是 MP4 格式
5. **清除缓存**：尝试硬刷新页面（Ctrl+Shift+R 或 Cmd+Shift+R）

### 📧 如需帮助

如果遇到问题，请提供：
- 视频文件的详细信息（格式、大小、分辨率）
- 浏览器控制台的错误信息（如果有）
- 视频是否在其他页面正常显示

