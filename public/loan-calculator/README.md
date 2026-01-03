# Loan Affordability Calculator

Professional multi-language loan affordability calculator for INFINITE GZ.

## Features

- ✅ **X.ai-inspired Design**: Minimal, professional, institutional aesthetic
- ✅ **Multi-language Support**: English, Simplified Chinese (中文), Malay (Bahasa Malaysia)
- ✅ **Multiple Product Types**: 
  - Personal Loans
  - Housing Loans
  - Vehicle Financing
  - Credit Card Capacity
- ✅ **DSR-based Calculations**: Accurate Debt Service Ratio calculations
- ✅ **Dark Mode Support**: Automatic dark mode based on system preference
- ✅ **Responsive Design**: Mobile-first, works on all devices
- ✅ **Standalone**: Pure HTML/CSS/JS, no build step required

## Usage

### Option 1: Direct Browser Access
Simply open `index.html` in any modern browser. The calculator works completely standalone.

### Option 2: Via Next.js Website
Access through the website at `/loan-calculator` route.

## File Structure

```
public/loan-calculator/
├── index.html      # Main HTML file
├── styles.css      # X.ai-inspired styling
├── script.js       # Calculation logic & i18n
└── README.md       # This file
```

## Technical Details

### Calculation Methodology

1. **Current DSR Calculation**:
   ```
   Current DSR = (Existing Monthly Commitments / Monthly Gross Income) × 100
   ```

2. **Available DSR Headroom**:
   ```
   Available Headroom = Maximum DSR Tolerance - Current DSR
   ```

3. **Maximum New Monthly Installment**:
   ```
   Max New Installment = (Available Headroom / 100) × Monthly Gross Income
   ```

4. **Maximum Loan Amount** (for loans):
   ```
   P = PMT × [(1+r)^n - 1] / [r(1+r)^n]
   Where:
   - P = Principal (loan amount)
   - PMT = Monthly payment
   - r = Monthly interest rate
   - n = Number of payments
   ```

5. **Credit Card Capacity**:
   ```
   Max Total Limit = Max Monthly Payment / 0.05
   (Assumes 5% minimum payment)
   ```

### Product-Specific Defaults

- **Housing Loan**: 4.5% p.a., 30 years
- **Vehicle Financing**: 3.0% p.a., 9 years
- **Personal Loan**: Uses user-specified rate and tenure
- **Credit Card**: 5% minimum payment assumption

## Design System

### Colors
- Primary Background: `#FFFFFF` (light) / `#0A0E27` (dark)
- Accent: `#0066CC` (professional blue)
- Success: `#059669` (green)
- Warning: `#D97706` (amber)
- Error: `#DC2626` (red)

### Typography
- Font: System stack (`-apple-system, BlinkMacSystemFont, "Segoe UI"`)
- Base size: 16px
- Line height: 1.5

### Spacing
- Base unit: 8px
- Scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 INFINITE GZ. All rights reserved.

