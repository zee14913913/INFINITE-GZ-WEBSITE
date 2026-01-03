/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // X.AI 纯黑风格
        background: '#000000', // 纯黑背景
        foreground: '#FFFFFF', // 前景色
        primary: '#FFFFFF', // 主文字颜色
        secondary: '#A1A1AA', // 次要文字颜色 - zinc-400
        border: 'rgba(63, 63, 70, 0.5)', // 边框颜色 - zinc-700
        'border-color': 'rgba(63, 63, 70, 0.5)', // 边框颜色 - zinc-700 (兼容)
        'hover-bg': 'rgba(63, 63, 70, 0.3)', // Hover 背景
        accent: '#FFFFFF', // 强调色
        muted: '#A1A1AA', // 静音色
        card: '#000000', // 卡片背景
        'card-foreground': '#FFFFFF', // 卡片前景
        // 确保所有常用颜色都可用
        white: '#FFFFFF',
        black: '#000000',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
      fontFamily: {
        sans: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'xai-sm': ['14px', { lineHeight: '1.5' }],
        'xai-base': ['16px', { lineHeight: '24px' }],
        'xai-h2': ['36px', { lineHeight: '40px' }],
        'xai-hero': ['5rem', { lineHeight: '5rem' }],
      },
      spacing: {
        '128': '128px', // Section padding (py-32)
        '78': '78px', // Header height
      },
      borderRadius: {
        'full': '9999px',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
      },
      letterSpacing: {
        'widest': '0.1em',
      },
    },
  },
  plugins: [],
  // 确保所有动态类都被包含
  safelist: [
    'bg-background',
    'bg-primary',
    'bg-secondary',
    'text-primary',
    'text-secondary',
    'text-foreground',
    'border-border',
    'border-primary',
    'border-secondary',
    'hover:bg-hover-bg',
    'hover:border-primary/30',
    'hover:text-primary/80',
  ],
}