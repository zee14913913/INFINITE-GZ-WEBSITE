/* ============================================
   Loan Affordability Calculator
   Professional Financial Tool for Malaysia
   ============================================ */

// ============================================
// Internationalization (i18n)
// ============================================
const translations = {
  en: {
    'header.subtitle': 'Loan Affordability Calculator',
    'input.title': 'Financial Information',
    'input.description': 'Enter your financial details to calculate your borrowing capacity',
    'input.monthlyIncome.label': 'Monthly Gross Income (RM)',
    'input.monthlyIncome.placeholder': 'Enter monthly income',
    'input.monthlyIncome.help': 'Your total monthly income before deductions',
    'input.existingCommitments.label': 'Existing Monthly Commitments (RM)',
    'input.existingCommitments.placeholder': 'Enter existing commitments',
    'input.existingCommitments.help': 'All current debt obligations (loans, credit cards, etc.)',
    'input.maxDSR.label': 'Maximum DSR Tolerance (%)',
    'input.maxDSR.help': 'Debt Service Ratio limit. Most banks use 60% as standard.',
    'input.tenure.label': 'Loan Tenure (years)',
    'input.tenure.help': 'Repayment period for the loan',
    'input.interestRate.label': 'Annual Interest Rate (% p.a.)',
    'input.interestRate.placeholder': 'Enter interest rate',
    'input.interestRate.help': 'Annual percentage rate for the loan',
    'input.calculate': 'Calculate',
    'info.dsr.title': 'What is DSR?',
    'info.dsr.description': 'Debt Service Ratio (DSR) is the percentage of your monthly income used to service debt. Banks typically approve loans if your total DSR stays below 60-70%.',
    'results.title': 'Your Borrowing Capacity',
    'results.description': 'Based on your inputs, here are your estimates:',
    'results.personalLoan.title': 'Personal Loan',
    'results.personalLoan.maxAmount': 'Max Loan Amount',
    'results.personalLoan.monthlyPayment': 'Monthly Payment',
    'results.personalLoan.totalDSR': 'Total DSR',
    'results.housingLoan.title': 'Housing Loan',
    'results.housingLoan.maxAmount': 'Max Loan Amount',
    'results.housingLoan.monthlyPayment': 'Monthly Payment',
    'results.housingLoan.totalDSR': 'Total DSR',
    'results.housingLoan.note': 'Based on 4.5% p.a., 30 years',
    'results.vehicleFinancing.title': 'Vehicle Financing',
    'results.vehicleFinancing.maxAmount': 'Max Financing Amount',
    'results.vehicleFinancing.monthlyPayment': 'Monthly Payment',
    'results.vehicleFinancing.totalDSR': 'Total DSR',
    'results.vehicleFinancing.note': 'Based on 3.0% p.a., 9 years',
    'results.creditCard.title': 'Credit Card Capacity',
    'results.creditCard.maxLimit': 'Max Combined Limit',
    'results.creditCard.estimatedMonthly': 'Est. Monthly Payment',
    'results.creditCard.totalDSR': 'Total DSR',
    'results.creditCard.note': 'Assumes 5% minimum payment',
    'summary.currentDSR': 'Current DSR:',
    'summary.availableDSR': 'Available DSR Headroom:',
    'summary.insufficient': 'Insufficient capacity for new financing',
    'disclaimer.text': 'This calculator provides estimates only and does not constitute a formal credit offer. Actual borrowing capacity is subject to individual financial institutions\' policies, credit assessment, and regulatory requirements.',
    'footer.text': '© 2025 INFINITE GZ. Professional financial advisory services in Malaysia.',
    'footer.home': 'Home',
    'footer.contact': 'Contact Us',
    'footer.resources': 'Resources',
    'error.insufficientCapacity': 'Your current commitments exceed your DSR limit. Please reduce existing commitments or increase income.',
    'error.invalidInput': 'Please enter valid numbers for all fields.'
  },
  zh: {
    'header.subtitle': '贷款负担能力计算器',
    'input.title': '财务信息',
    'input.description': '输入您的财务详情以计算您的借贷能力',
    'input.monthlyIncome.label': '月总收入 (RM)',
    'input.monthlyIncome.placeholder': '输入月收入',
    'input.monthlyIncome.help': '扣除前的总月收入',
    'input.existingCommitments.label': '现有月供 (RM)',
    'input.existingCommitments.placeholder': '输入现有月供',
    'input.existingCommitments.help': '所有当前债务义务（贷款、信用卡等）',
    'input.maxDSR.label': '最高 DSR 容忍度 (%)',
    'input.maxDSR.help': '债务服务比率限制。大多数银行使用 60% 作为标准。',
    'input.tenure.label': '贷款期限 (年)',
    'input.tenure.help': '贷款的还款期',
    'input.interestRate.label': '年利率 (% 年)',
    'input.interestRate.placeholder': '输入利率',
    'input.interestRate.help': '贷款的年百分比利率',
    'input.calculate': '计算',
    'info.dsr.title': '什么是 DSR？',
    'info.dsr.description': '债务服务比率 (DSR) 是您月收入中用于偿还债务的百分比。如果您的总 DSR 保持在 60-70% 以下，银行通常会批准贷款。',
    'results.title': '您的借贷能力',
    'results.description': '根据您的输入，以下是您的估算：',
    'results.personalLoan.title': '个人贷款',
    'results.personalLoan.maxAmount': '最高贷款额',
    'results.personalLoan.monthlyPayment': '月供',
    'results.personalLoan.totalDSR': '总 DSR',
    'results.housingLoan.title': '房屋贷款',
    'results.housingLoan.maxAmount': '最高贷款额',
    'results.housingLoan.monthlyPayment': '月供',
    'results.housingLoan.totalDSR': '总 DSR',
    'results.housingLoan.note': '基于 4.5% 年利率，30 年',
    'results.vehicleFinancing.title': '汽车融资',
    'results.vehicleFinancing.maxAmount': '最高融资额',
    'results.vehicleFinancing.monthlyPayment': '月供',
    'results.vehicleFinancing.totalDSR': '总 DSR',
    'results.vehicleFinancing.note': '基于 3.0% 年利率，9 年',
    'results.creditCard.title': '信用卡额度',
    'results.creditCard.maxLimit': '最高总限额',
    'results.creditCard.estimatedMonthly': '估计月供',
    'results.creditCard.totalDSR': '总 DSR',
    'results.creditCard.note': '假设最低还款 5%',
    'summary.currentDSR': '当前 DSR:',
    'summary.availableDSR': '可用 DSR 空间:',
    'summary.insufficient': '新融资能力不足',
    'disclaimer.text': '此计算器仅提供估算，不构成正式信贷要约。实际借贷能力取决于各金融机构的政策、信用评估和监管要求。',
    'footer.text': '© 2025 INFINITE GZ。马来西亚专业财务咨询服务。',
    'footer.home': '首页',
    'footer.contact': '联系我们',
    'footer.resources': '资源',
    'error.insufficientCapacity': '您当前的债务超过了 DSR 限制。请减少现有债务或增加收入。',
    'error.invalidInput': '请为所有字段输入有效数字。'
  },
  ms: {
    'header.subtitle': 'Kalkulator Keupayaan Pinjaman',
    'input.title': 'Maklumat Kewangan',
    'input.description': 'Masukkan butiran kewangan anda untuk mengira keupayaan pinjaman',
    'input.monthlyIncome.label': 'Pendapatan Bulanan Kasar (RM)',
    'input.monthlyIncome.placeholder': 'Masukkan pendapatan bulanan',
    'input.monthlyIncome.help': 'Jumlah pendapatan bulanan anda sebelum potongan',
    'input.existingCommitments.label': 'Komitmen Bulanan Sedia Ada (RM)',
    'input.existingCommitments.placeholder': 'Masukkan komitmen sedia ada',
    'input.existingCommitments.help': 'Semua obligasi hutang semasa (pinjaman, kad kredit, dll.)',
    'input.maxDSR.label': 'Toleransi DSR Maksimum (%)',
    'input.maxDSR.help': 'Had Nisbah Perkhidmatan Hutang. Kebanyakan bank menggunakan 60% sebagai standard.',
    'input.tenure.label': 'Tempoh Pinjaman (tahun)',
    'input.tenure.help': 'Tempoh pembayaran balik untuk pinjaman',
    'input.interestRate.label': 'Kadar Faedah Tahunan (% setahun)',
    'input.interestRate.placeholder': 'Masukkan kadar faedah',
    'input.interestRate.help': 'Kadar peratusan tahunan untuk pinjaman',
    'input.calculate': 'Kira',
    'info.dsr.title': 'Apakah DSR?',
    'info.dsr.description': 'Nisbah Perkhidmatan Hutang (DSR) ialah peratusan pendapatan bulanan anda yang digunakan untuk membayar hutang. Bank biasanya meluluskan pinjaman jika jumlah DSR anda kekal di bawah 60-70%.',
    'results.title': 'Keupayaan Pinjaman Anda',
    'results.description': 'Berdasarkan input anda, berikut adalah anggaran anda:',
    'results.personalLoan.title': 'Pinjaman Peribadi',
    'results.personalLoan.maxAmount': 'Jumlah Pinjaman Maks',
    'results.personalLoan.monthlyPayment': 'Bayaran Bulanan',
    'results.personalLoan.totalDSR': 'Jumlah DSR',
    'results.housingLoan.title': 'Pinjaman Perumahan',
    'results.housingLoan.maxAmount': 'Jumlah Pinjaman Maks',
    'results.housingLoan.monthlyPayment': 'Bayaran Bulanan',
    'results.housingLoan.totalDSR': 'Jumlah DSR',
    'results.housingLoan.note': 'Berdasarkan 4.5% setahun, 30 tahun',
    'results.vehicleFinancing.title': 'Pembiayaan Kenderaan',
    'results.vehicleFinancing.maxAmount': 'Jumlah Pembiayaan Maks',
    'results.vehicleFinancing.monthlyPayment': 'Bayaran Bulanan',
    'results.vehicleFinancing.totalDSR': 'Jumlah DSR',
    'results.vehicleFinancing.note': 'Berdasarkan 3.0% setahun, 9 tahun',
    'results.creditCard.title': 'Keupayaan Kad Kredit',
    'results.creditCard.maxLimit': 'Had Gabungan Maks',
    'results.creditCard.estimatedMonthly': 'Angg. Bayaran Bulanan',
    'results.creditCard.totalDSR': 'Jumlah DSR',
    'results.creditCard.note': 'Anggapkan bayaran minimum 5%',
    'summary.currentDSR': 'DSR Semasa:',
    'summary.availableDSR': 'Ruang DSR Tersedia:',
    'summary.insufficient': 'Keupayaan tidak mencukupi untuk pembiayaan baharu',
    'disclaimer.text': 'Kalkulator ini hanya memberikan anggaran dan tidak merupakan tawaran kredit formal. Keupayaan pinjaman sebenar tertakluk kepada dasar institusi kewangan individu, penilaian kredit, dan keperluan kawal selia.',
    'footer.text': '© 2025 INFINITE GZ. Perkhidmatan nasihat kewangan profesional di Malaysia.',
    'footer.home': 'Laman Utama',
    'footer.contact': 'Hubungi Kami',
    'footer.resources': 'Sumber',
    'error.insufficientCapacity': 'Komitmen semasa anda melebihi had DSR. Sila kurangkan komitmen sedia ada atau tingkatkan pendapatan.',
    'error.invalidInput': 'Sila masukkan nombor yang sah untuk semua medan.'
  }
};

// ============================================
// Configuration & Constants
// ============================================
const DEFAULT_CONFIG = {
  housingLoanRate: 4.5, // % p.a.
  housingLoanTenure: 30, // years
  vehicleFinancingRate: 3.0, // % p.a.
  vehicleFinancingTenure: 9, // years
  creditCardMinPaymentRate: 0.05 // 5% of outstanding balance
};

// ============================================
// State Management
// ============================================
let currentLanguage = localStorage.getItem('loan-calculator-lang') || 'en';

// ============================================
// Utility Functions
// ============================================

/**
 * Format currency in Malaysian Ringgit
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency string
 */
function formatCurrency(amount) {
  if (isNaN(amount) || amount === null || amount === undefined) {
    return 'RM 0';
  }
  return new Intl.NumberFormat('en-MY', {
    style: 'currency',
    currency: 'MYR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Format percentage
 * @param {number} value - Percentage value
 * @param {number} decimals - Number of decimal places
 * @returns {string} Formatted percentage string
 */
function formatPercentage(value, decimals = 1) {
  if (isNaN(value) || value === null || value === undefined) {
    return '0%';
  }
  return `${value.toFixed(decimals)}%`;
}

/**
 * Get translation for a key
 * @param {string} key - Translation key
 * @returns {string} Translated text
 */
function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

/**
 * Update all translatable elements
 */
function updateTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = t(key);
    
    if (element.tagName === 'INPUT' && element.hasAttribute('data-i18n-placeholder')) {
      const placeholderKey = element.getAttribute('data-i18n-placeholder');
      element.placeholder = t(placeholderKey);
    } else {
      element.textContent = translation;
    }
  });

  // Update select options for tenure
  const tenureSelect = document.getElementById('loan-tenure');
  if (tenureSelect) {
    const selectedValue = tenureSelect.value;
    tenureSelect.innerHTML = '';
    for (let i = 1; i <= 30; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i === 1 ? `${i} year` : `${i} years`;
      if (i === parseInt(selectedValue)) {
        option.selected = true;
      }
      tenureSelect.appendChild(option);
    }
  }
}

// ============================================
// Calculation Functions
// ============================================

/**
 * Calculate maximum loan amount given monthly payment, rate, and tenure
 * @param {number} maxMonthlyPayment - Maximum monthly payment
 * @param {number} annualRate - Annual interest rate (%)
 * @param {number} tenureYears - Loan tenure in years
 * @returns {number} Maximum loan amount
 */
function calculateMaxLoan(maxMonthlyPayment, annualRate, tenureYears) {
  if (maxMonthlyPayment <= 0) return 0;
  
  const monthlyRate = annualRate / 100 / 12;
  const numPayments = tenureYears * 12;
  
  if (monthlyRate === 0) {
    return maxMonthlyPayment * numPayments;
  }
  
  // PMT = P × [r(1+r)^n] / [(1+r)^n - 1]
  // Rearranged: P = PMT × [(1+r)^n - 1] / [r(1+r)^n]
  const numerator = Math.pow(1 + monthlyRate, numPayments) - 1;
  const denominator = monthlyRate * Math.pow(1 + monthlyRate, numPayments);
  
  return maxMonthlyPayment * (numerator / denominator);
}

/**
 * Calculate monthly payment for a loan
 * @param {number} principal - Loan amount
 * @param {number} annualRate - Annual interest rate (%)
 * @param {number} tenureYears - Loan tenure in years
 * @returns {number} Monthly payment
 */
function calculateMonthlyPayment(principal, annualRate, tenureYears) {
  if (principal <= 0) return 0;
  
  const monthlyRate = annualRate / 100 / 12;
  const numPayments = tenureYears * 12;
  
  if (monthlyRate === 0) {
    return principal / numPayments;
  }
  
  const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                 (Math.pow(1 + monthlyRate, numPayments) - 1);
  
  return payment;
}

/**
 * Calculate DSR (Debt Service Ratio)
 * @param {number} monthlyCommitments - Total monthly commitments
 * @param {number} monthlyIncome - Monthly gross income
 * @returns {number} DSR percentage
 */
function calculateDSR(monthlyCommitments, monthlyIncome) {
  if (monthlyIncome <= 0) return 0;
  return (monthlyCommitments / monthlyIncome) * 100;
}

/**
 * Get DSR status class (low, medium, high)
 * @param {number} dsr - DSR percentage
 * @returns {string} Status class
 */
function getDSRStatus(dsr) {
  if (dsr <= 60) return 'low';
  if (dsr <= 70) return 'medium';
  return 'high';
}

// ============================================
// Main Calculation Logic
// ============================================

/**
 * Perform all calculations and display results
 */
function calculateResults() {
  // Get input values
  const monthlyIncome = parseFloat(document.getElementById('monthly-income').value) || 0;
  const existingCommitments = parseFloat(document.getElementById('existing-commitments').value) || 0;
  const maxDSR = parseFloat(document.getElementById('max-dsr').value) || 60;
  const loanTenure = parseInt(document.getElementById('loan-tenure').value) || 5;
  const interestRate = parseFloat(document.getElementById('interest-rate').value) || 8.0;

  // Validate inputs
  if (monthlyIncome <= 0) {
    alert(t('error.invalidInput'));
    return;
  }

  // Calculate current DSR
  const currentDSR = calculateDSR(existingCommitments, monthlyIncome);
  
  // Calculate available DSR headroom
  const availableDSRHeadroom = maxDSR - currentDSR;
  
  // Check if there's capacity for new financing
  if (availableDSRHeadroom <= 0) {
    showInsufficientCapacity();
    return;
  }

  // Calculate maximum new monthly installment
  const maxNewMonthlyInstallment = (availableDSRHeadroom / 100) * monthlyIncome;

  // Calculate results for each product type
  const results = {
    personalLoan: calculatePersonalLoan(maxNewMonthlyInstallment, interestRate, loanTenure),
    housingLoan: calculateHousingLoan(maxNewMonthlyInstallment),
    vehicleFinancing: calculateVehicleFinancing(maxNewMonthlyInstallment),
    creditCard: calculateCreditCardCapacity(maxNewMonthlyInstallment, monthlyIncome)
  };

  // Update DSR summary
  updateDSRSummary(currentDSR, availableDSRHeadroom);

  // Display results
  displayResults(results, existingCommitments, monthlyIncome);
}

/**
 * Calculate personal loan results
 */
function calculatePersonalLoan(maxMonthlyPayment, rate, tenure) {
  const maxLoan = calculateMaxLoan(maxMonthlyPayment, rate, tenure);
  const monthlyPayment = calculateMonthlyPayment(maxLoan, rate, tenure);
  return {
    maxLoan,
    monthlyPayment,
    rate,
    tenure
  };
}

/**
 * Calculate housing loan results
 */
function calculateHousingLoan(maxMonthlyPayment) {
  const rate = DEFAULT_CONFIG.housingLoanRate;
  const tenure = DEFAULT_CONFIG.housingLoanTenure;
  const maxLoan = calculateMaxLoan(maxMonthlyPayment, rate, tenure);
  const monthlyPayment = calculateMonthlyPayment(maxLoan, rate, tenure);
  return {
    maxLoan,
    monthlyPayment,
    rate,
    tenure
  };
}

/**
 * Calculate vehicle financing results
 */
function calculateVehicleFinancing(maxMonthlyPayment) {
  const rate = DEFAULT_CONFIG.vehicleFinancingRate;
  const tenure = DEFAULT_CONFIG.vehicleFinancingTenure;
  const maxLoan = calculateMaxLoan(maxMonthlyPayment, rate, tenure);
  const monthlyPayment = calculateMonthlyPayment(maxLoan, rate, tenure);
  return {
    maxLoan,
    monthlyPayment,
    rate,
    tenure
  };
}

/**
 * Calculate credit card capacity
 */
function calculateCreditCardCapacity(maxMonthlyPayment, monthlyIncome) {
  // Assumes minimum payment is 5% of outstanding balance
  const maxTotalLimit = maxMonthlyPayment / DEFAULT_CONFIG.creditCardMinPaymentRate;
  const estimatedMonthlyPayment = maxMonthlyPayment;
  return {
    maxLimit: maxTotalLimit,
    estimatedMonthlyPayment
  };
}

/**
 * Display results in the UI
 */
function displayResults(results, existingCommitments, monthlyIncome) {
  const resultsPanel = document.getElementById('results-panel');
  const resultsGrid = document.getElementById('results-grid');
  
  resultsPanel.style.display = 'block';
  resultsGrid.innerHTML = '';

  // Personal Loan Card
  const personalLoanCard = createResultCard({
    title: t('results.personalLoan.title'),
    maxAmount: results.personalLoan.maxLoan,
    monthlyPayment: results.personalLoan.monthlyPayment,
    totalDSR: calculateDSR(existingCommitments + results.personalLoan.monthlyPayment, monthlyIncome),
    note: null
  });
  resultsGrid.appendChild(personalLoanCard);

  // Housing Loan Card
  const housingLoanCard = createResultCard({
    title: t('results.housingLoan.title'),
    maxAmount: results.housingLoan.maxLoan,
    monthlyPayment: results.housingLoan.monthlyPayment,
    totalDSR: calculateDSR(existingCommitments + results.housingLoan.monthlyPayment, monthlyIncome),
    note: t('results.housingLoan.note')
  });
  resultsGrid.appendChild(housingLoanCard);

  // Vehicle Financing Card
  const vehicleCard = createResultCard({
    title: t('results.vehicleFinancing.title'),
    maxAmount: results.vehicleFinancing.maxLoan,
    monthlyPayment: results.vehicleFinancing.monthlyPayment,
    totalDSR: calculateDSR(existingCommitments + results.vehicleFinancing.monthlyPayment, monthlyIncome),
    note: t('results.vehicleFinancing.note')
  });
  resultsGrid.appendChild(vehicleCard);

  // Credit Card Card
  const creditCardCard = createResultCard({
    title: t('results.creditCard.title'),
    maxAmount: results.creditCard.maxLimit,
    monthlyPayment: results.creditCard.estimatedMonthlyPayment,
    totalDSR: calculateDSR(existingCommitments + results.creditCard.estimatedMonthlyPayment, monthlyIncome),
    isCreditCard: true,
    note: t('results.creditCard.note')
  });
  resultsGrid.appendChild(creditCardCard);

  // Scroll to results
  resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Create a result card element
 */
function createResultCard(data) {
  const card = document.createElement('div');
  card.className = 'result-card';

  const dsrStatus = getDSRStatus(data.totalDSR);
  const maxLabel = data.isCreditCard ? t('results.creditCard.maxLimit') : t('results.personalLoan.maxAmount');
  const monthlyLabel = data.isCreditCard ? t('results.creditCard.estimatedMonthly') : t('results.personalLoan.monthlyPayment');

  card.innerHTML = `
    <h3 class="result-card-title">${data.title}</h3>
    <div class="result-metric">
      <span class="result-metric-label">${maxLabel}</span>
      <div class="result-metric-value">${formatCurrency(data.maxAmount)}</div>
    </div>
    <div class="result-metric">
      <span class="result-metric-label">${monthlyLabel}</span>
      <div class="result-metric-secondary">${formatCurrency(data.monthlyPayment)}</div>
    </div>
    <div class="result-dsr ${dsrStatus}">
      ${t('results.personalLoan.totalDSR')}: ${formatPercentage(data.totalDSR)}
    </div>
    ${data.note ? `<p class="result-card-note">${data.note}</p>` : ''}
  `;

  return card;
}

/**
 * Update DSR summary section
 */
function updateDSRSummary(currentDSR, availableDSR) {
  document.getElementById('current-dsr').textContent = formatPercentage(currentDSR);
  document.getElementById('available-dsr').textContent = formatPercentage(availableDSR);
}

/**
 * Show insufficient capacity message
 */
function showInsufficientCapacity() {
  const resultsPanel = document.getElementById('results-panel');
  const resultsGrid = document.getElementById('results-grid');
  
  resultsPanel.style.display = 'block';
  resultsGrid.innerHTML = `
    <div class="result-card" style="grid-column: 1 / -1; text-align: center; padding: 48px 24px;">
      <h3 style="color: var(--error); margin-bottom: 16px;">${t('summary.insufficient')}</h3>
      <p style="color: var(--text-secondary);">${t('error.insufficientCapacity')}</p>
    </div>
  `;
  
  updateDSRSummary(
    calculateDSR(
      parseFloat(document.getElementById('existing-commitments').value) || 0,
      parseFloat(document.getElementById('monthly-income').value) || 1
    ),
    0
  );
  
  resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================
// Event Handlers
// ============================================

/**
 * Handle language switching
 */
function setupLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      currentLanguage = lang;
      localStorage.setItem('loan-calculator-lang', lang);
      
      // Update active button
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update translations
      updateTranslations();
      
      // Recalculate if results are shown
      if (document.getElementById('results-panel').style.display !== 'none') {
        calculateResults();
      }
    });
  });
}

/**
 * Handle form submission
 */
function setupFormHandler() {
  const form = document.getElementById('calculator-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateResults();
  });
}

/**
 * Set active language button on load
 */
function setActiveLanguage() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLanguage) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// ============================================
// Initialization
// ============================================

/**
 * Initialize the application
 */
function init() {
  setActiveLanguage();
  updateTranslations();
  setupLanguageSwitcher();
  setupFormHandler();
  
  // Reinitialize Feather Icons after DOM updates
  if (typeof feather !== 'undefined') {
    feather.replace();
  }
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

