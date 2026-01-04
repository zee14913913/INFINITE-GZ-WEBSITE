import React from 'react';
import {
  CreditCard,
  Bell,
  ShoppingCart,
  TrendingUp,
  LifeBuoy,
  AlertTriangle,
  Clock,
  Layers
} from 'lucide-react';

export type Language = 'en' | 'zh' | 'ms';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    creditpilot: string;
    advisory: string;
    solutions: string;
    company: string;
    news: string;
    resources: string;
    careers: string;
    calculator: string;
    loanOptimizer: string;
  };

  // Common
  common: {
    learnMore: string;
    getStarted: string;
    readMore: string;
    viewAll: string;
    contactUs: string;
    applyNow: string;
    bookConsultation: string;
    whatsappUs: string;
    explore: string;
    viewDetails: string;
    useCreditPilot: string;
  };

  // Home Page
  home: {
    hero: {
      title: string;
      titleLine1?: string;
      titleLine2?: string;
      subtitle: string;
      description: string;
      descriptionLine1?: string;
      descriptionLine2?: string;
      bottomDescription: string;
    };
    products: {
      tag: string;
      title: string;
      items: Array<{
        tag: string;
        title: string;
        description: string;
        features: string[];
        linkText: string;
        linkUrl: string;
      }>;
    };
    content: {
      tag: string;
      title: string;
      description: string;
      features: Array<{
        title: string;
        description: string;
      }>;
      detailsTitle: string;
      details: Array<{
        title: string;
        description: string;
      }>;
    };
    news: {
      tag: string;
      title: string;
      description: string;
      items: Array<{
        date: string;
        title: string;
        description: string;
        category: string;
      }>;
    };
    footer: {
      title: string;
      description: string;
      copyright: string;
      sections: {
        try: string;
        products: string;
        company: string;
        resources: string;
      };
      links: {
        web: string;
        whatsapp: string;
        phone: string;
        creditpilot: string;
        advisory: string;
        creditCard: string;
        digital: string;
        accounting: string;
        about: string;
        careers: string;
        contact: string;
        newsUpdates: string;
        partners: string;
        dsrGuide: string;
        taxOptimization: string;
        faq: string;
        privacy: string;
        legal: string;
        terms: string;
      };
    };
  };

  // CreditPilot Page
  creditpilot: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      tag: string;
      title: string;
      subtitle: string;
      cta1: string;
      cta2: string;
    };
    capabilities: {
      tag: string;
      title: string;
      features: Array<{
        title: string;
        description: string;
      }>;
    };
    howItWorks: {
      tag: string;
      title: string;
      steps: Array<{
        number: string;
        title: string;
        description: string;
      }>;
    };
    cta: {
      title: string;
      description: string;
      buttonText: string;
    };
  };

  // Advisory Page
  advisory: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      tag: string;
      title: string;
      description: string;
    };
    services: {
      tag: string;
      title: string;
      items: Array<{
        num: string;
        title: string;
        description: string;
      }>;
    };
    benefits: {
      tag: string;
      title: string;
      items: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
    cta: {
      title: string;
      description: string;
    };
  };

  // Solutions Page
  solutions: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      tag: string;
      title: string;
      description: string;
    };
    products: Array<{
      tag: string;
      title: string;
      description: string;
      linkText: string;
    }>;
    coreBusiness: {
      tag: string;
      title: string;
      description: string;
      features: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
    complementaryServices: {
      tag: string;
      title: string;
      description: string;
      items: Array<{
        num: string;
        title: string;
        description: string;
      }>;
    };
    pricing: {
      tag: string;
      title: string;
      models: Array<{
        tag: string;
        title: string;
        price: string;
        description: string;
        features: string[];
      }>;
    };
    targetCustomers: {
      tag: string;
      title: string;
      customers: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
    cta: {
      title: string;
      description: string;
    };
  };

  // Credit Card Management Page
  creditCard: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      tag: string;
      title: string;
      subtitle: string;
      description: string;
      cta1: string;
      cta2: string;
      stats: string;
      clients: string;
      totalLimit: string;
      saved: string;
    };
    painPoints: {
      tag: string;
      title: string;
      description: string;
      items: Array<{
        icon: string;
        iconComponent: React.ReactNode;
        title: string;
        description: string;
        data: string;
      }>;
    };
    services: {
      tag: string;
      title: string;
      items: Array<{
        icon: string;
        iconComponent: React.ReactNode;
        title: string;
        description: string;
      }>;
    };
    cases: {
      tag: string;
      title: string;
      before: string;
      after: string;
      result: string;
      items: Array<{
        num: string;
        name: string;
        before: string;
        after: string;
        savings: string;
      }>;
    };
    pricing: {
      tag: string;
      title: string;
      plans: Array<{
        name: string;
        description: string;
        price: string;
        period: string;
        features: string[];
        cta: string;
        link: string;
        featured: boolean;
      }>;
    };
    social: {
      stats: Array<{
        value: string;
        label: string;
      }>;
      compliance: string;
      insurance: string;
    };
    faq: {
      tag: string;
      title: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    };
    cta: {
      title: string;
      description: string;
      relatedServices: string;
    };
  };

  // Company Page
  company: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      tag: string;
      title: string;
      description: string;
    };
    mission: {
      tag: string;
      title: string;
      description: string;
    };
    values: {
      tag: string;
      title: string;
      items: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
    cta: {
      title: string;
      description: string;
    };
  };

  // News Page
  news: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      tag: string;
      title: string;
      description: string;
    };
    items: Array<{
      title: string;
      date: string;
      category: string;
    }>;
  };

  // Resources Page
  resources: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      tag: string;
      title: string;
      description: string;
    };
    stats: Array<{
      number: string;
      title: string;
      description: string;
    }>;
    timeline: {
      tag: string;
      title: string;
      milestones: Array<{
        year: string;
        title: string;
        description: string;
      }>;
    };
  };

  // Careers Page
  careers: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      tag: string;
      title: string;
      description: string;
    };
    benefits: {
      tag: string;
      title: string;
      items: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
    jobs: {
      tag: string;
      title: string;
      positions: Array<{
        title: string;
        department: string;
        location: string;
        type: string;
      }>;
    };
    cta: {
      title: string;
      description: string;
    };
  };

  // FAQ Page
  faq: {
    hero: {
      tag: string;
      title: string;
      description: string;
    };
    items: Array<{
      question: string;
      answer: string;
    }>;
    cta: {
      title: string;
      description: string;
      contactUs: string;
      visitPortal: string;
    };
  };

  // Privacy Policy Page
  privacy: {
    hero: {
      tag: string;
      title: string;
      lastUpdated: string;
    };
    sections: {
      introduction: {
        title: string;
        content: string;
      };
      informationWeCollect: {
        title: string;
        description: string;
        items: string[];
      };
      howWeUse: {
        title: string;
        description: string;
        items: string[];
      };
      dataSecurity: {
        title: string;
        content: string;
      };
      yourRights: {
        title: string;
        description: string;
        items: string[];
      };
      contactUs: {
        title: string;
        description: string;
        email: string;
        whatsapp: string;
      };
    };
  };

  // Terms of Service Page
  terms: {
    hero: {
      tag: string;
      title: string;
      lastUpdated: string;
    };
    sections: {
      acceptance: {
        title: string;
        content: string;
      };
      useLicense: {
        title: string;
        content: string;
      };
      serviceDescription: {
        title: string;
        content: string;
      };
      userResponsibilities: {
        title: string;
        description: string;
        items: string[];
      };
      limitation: {
        title: string;
        content: string;
      };
      modifications: {
        title: string;
        content: string;
      };
      contact: {
        title: string;
        description: string;
        email: string;
        whatsapp: string;
      };
    };
  };

  // Legal Notice Page
  legal: {
    hero: {
      tag: string;
      title: string;
      description: string;
    };
    sections: {
      companyInfo: {
        title: string;
        description: string;
        registeredAddress: string;
        businessRegistration: string;
        licenseNumber: string;
      };
      regulatory: {
        title: string;
        content: string;
      };
      disclaimer: {
        title: string;
        content: string;
      };
      intellectualProperty: {
        title: string;
        content: string;
      };
      thirdPartyLinks: {
        title: string;
        content: string;
      };
      contact: {
        title: string;
        description: string;
        email: string;
        whatsapp: string;
      };
    };
  };

  // DSR Guide Page
  dsrGuide: {
    hero: {
      tag: string;
      title: string;
      description: string;
    };
    sections: {
      whatIsDSR: {
        title: string;
        description: string;
        formula: string;
        formulaLabel: string;
      };
      whyMatters: {
        title: string;
        description: string;
        items: string[];
      };
      thresholds: {
        title: string;
        excellent: {
          title: string;
          description: string;
        };
        good: {
          title: string;
          description: string;
        };
        acceptable: {
          title: string;
          description: string;
        };
        highRisk: {
          title: string;
          description: string;
        };
      };
      howToImprove: {
        title: string;
        items: Array<{
          title: string;
          description: string;
        }>;
      };
      calculate: {
        title: string;
        description: string;
        tryCalculator: string;
        loanAnalyzer: string;
      };
    };
  };

  // Tax Tips Page
  taxTips: {
    hero: {
      tag: string;
      title: string;
      description: string;
    };
    sections: {
      commonDeductions: {
        title: string;
        items: Array<{
          title: string;
          description: string;
        }>;
      };
      strategies: {
        title: string;
        items: Array<{
          title: string;
          description: string;
        }>;
      };
      creditCardBenefits: {
        title: string;
        description: string;
        items: string[];
        note: string;
      };
      professionalHelp: {
        title: string;
        description: string;
        bookConsultation: string;
        whatsappUs: string;
      };
      disclaimer: {
        title: string;
        content: string;
      };
    };
  };

  // Credit Card Management Page
    loanCalculator: {
      header: {
        title: string;
        subtitle: string;
        notice: string;
      };
      input: {
        monthlyIncome: { label: string; placeholder: string; help: string };
        existingCommit: { label: string; placeholder: string; helper: string };
        maxDSR: { label: string; helper: string };
        proposedLoan: { label: string; placeholder: string; helper: string };
        loanRate: { label: string; helper: string };
        loanTenure: { label: string; helper: string };
      };
      btn: {
        calculate: string;
        reset: string;
        ctosOptimizer: string;
        exploreMore: string;
      };
      result: {
        title: string;
        current_label: string;
        after_label: string;
        monthlyCommit: string;
        currentDSR: string;
        newLoanPayment: string;
        totalNewCommit: string;
        newDSR: string;
        loanAmount: string;
        interestRate: string;
        tenure: string;
        monthlyInstalment: string;
        totalInterest: string;
        rec_comfortable: string;
        rec_manageable: string;
        rec_tight: string;
        rec_highRisk: string;
        rec_critical: string;
      };
      dsr_status: {
        comfortable: string;
        manageable: string;
        tight: string;
        highRisk: string;
        critical: string;
      };
      disclaimer: string;
    };
    loanOptimizer: {
      header: {
        title: string;
        subtitle: string;
        notice: string;
      };
      input: {
        concern_label: string;
        concern_a: string;
        concern_b: string;
        concern_c: string;
        concern_d: string;
        concern_e: string;
        ctos_label: string;
        ctos_helper: string;
        creditScore_label: string;
        creditScore_helper: string;
        repaymentBehaviour_label: string;
        repayment_excellent: string;
        repayment_good: string;
        repayment_fair: string;
        repayment_poor: string;
        employment_label: string;
        employment_private: string;
        employment_govt: string;
        employment_self: string;
        employment_parttime: string;
        employment_retired: string;
        employment_unemployed: string;
        sector_label: string;
        sector_helper: string;
        age_label: string;
        savings_label: string;
        savings_helper: string;
        income_label: string;
        otherCommit_label: string;
        targetDSR_label: string;
        targetDSR_helper: string;
      };
      table: {
        type: string;
        bank: string;
        outstanding: string;
        rate: string;
        tenure: string;
        payment: string;
        action: string;
      };
      loanType: {
        housing: string;
        car: string;
        personal: string;
        creditCard: string;
        overdraft: string;
        business: string;
        others: string;
      };
      btn: {
        addLoan: string;
        deleteRow: string;
        analyze: string;
        reset: string;
        contactAdvisor: string;
        exploreMore: string;
      };
      result: {
        title: string;
        current_label: string;
        after_label: string;
        monthlySavings: string;
        approvalOddsImprovement: string;
        creditHealthExplain: string;
        approvalFactors: string;
        secured_title: string;
        secured_note: string;
        unsecured_title: string;
        consolidation_proposal: string;
        rec_a: string;
        rec_b: string;
        rec_c: string;
        rec_d: string;
        rec_e: string;
        approvalNote: string;
      };
      disclaimer: string;
    };
    cardSimulator: {
      header: {
        title: string;
        subtitle: string;
        notice: string;
      };
      input: {
        cards_title: string;
        cards_helper: string;
        strategy_title: string;
        aggressiveBudget_label: string;
        aggressiveBudget_helper: string;
        consolRate_label: string;
        consolTenure_label: string;
        consol_helper: string;
      };
      table: {
        cardName: string;
        balance: string;
        rate: string;
        minPayment: string;
      };
      btn: {
        addCard: string;
        deleteRow: string;
        simulate: string;
        reset: string;
        ctosOptimizer: string;
        exploreTools: string;
      };
      result: {
        title: string;
        totalBalance: string;
        totalMinPayment: string;
        table_header_strategy: string;
        table_header_months: string;
        table_header_years: string;
        table_header_totalInterest: string;
        table_header_monthlyPayment: string;
        table_header_comment: string;
        strategy1_name: string;
        strategy2_name: string;
        strategy3_name: string;
        strategy1_comment: string;
        strategy2_comment: string;
        strategy3_comment: string;
        bestOption_title: string;
        bestOption_text: string;
      };
      disclaimer: string;
    };
    propertyRenovationPlanner: {
      header: {
        title: string;
        subtitle: string;
        notice: string;
      };
      input: {
        propertyPrice_label: string;
        downPayment_label: string;
        downPayment_helper: string;
        renoBudget_label: string;
        renoFinType_label: string;
        renoFinType_personal: string;
        renoFinType_renoLoan: string;
        renoFinType_topup: string;
        ctosScore_label: string;
        existingDebt_label: string;
        existingDebt_helper: string;
        income_label: string;
        homeLoanTenure_label: string;
        homeRate_label: string;
        homeRate_helper: string;
      };
      btn: {
        calculate: string;
        reset: string;
        contactAdvisor: string;
        tools: string;
      };
      result: {
        title: string;
        strategy1_name: string;
        strategy2_name: string;
        strategy1_note: string;
        strategy2_note: string;
        recommendation: string;
        considerations: string;
      };
      disclaimer: string;
    };
    settlementAnalyzer: {
      header: {
        title: string;
        subtitle: string;
        notice: string;
      };
      input: {
        income_label: string;
        otherDebt_label: string;
        ctosScore_label: string;
        settleDate_label: string;
        assessmentDate_label: string;
      };
      table: {
        debtType: string;
        creditor: string;
        balance: string;
        paymentStatus: string;
        monthsDefault: string;
      };
      debtType: {
        creditCard: string;
        personal: string;
        overdraft: string;
        business: string;
        other: string;
      };
      paymentStatus: {
        ontime: string;
        late30: string;
        late60: string;
        default: string;
      };
      scenario: {
        name_label: string;
        amount_label: string;
        method_label: string;
        method_lumpsum: string;
        method_installment: string;
        arrangement_label: string;
        arrangement_full: string;
        arrangement_partial: string;
        arrangement_formal: string;
        installmentMonths_label: string;
      };
      btn: {
        addDebt: string;
        deleteRow: string;
        addScenario: string;
        analyze: string;
        reset: string;
        negotiateGuide: string;
        advisors: string;
        again: string;
      };
      result: {
        title: string;
        scenario_title: string;
        settlementDetails: string;
        immediateDSR: string;
        ctosRecovery: string;
        futureApproval: string;
        totalCost: string;
        insight: string;
      };
      disclaimer: string;
    };
    expenseTracker: {
      header: {
        title: string;
        subtitle: string;
      };
      input: {
        date_label: string;
        category_label: string;
        amount_label: string;
        description_label: string;
      };
      category: {
        food: string;
        transport: string;
        utilities: string;
        shopping: string;
        entertainment: string;
        health: string;
        education: string;
        miscellaneous: string;
        other: string;
      };
      budget: {
        category: string;
        monthlyBudget: string;
        spentYTD: string;
        percentUsed: string;
        remaining: string;
      };
      btn: {
        addExpense: string;
        saveBudget: string;
        export: string;
        download: string;
        savingsGoal: string;
        tools: string;
      };
      dashboard: {
        totalIncome: string;
        totalExpenses: string;
        remainingBalance: string;
        savingsRate: string;
        currentMonth: string;
        budgetVsActual: string;
      };
      result: {
        takeaway: string;
        highestCategory: string;
        mostFrequent: string;
        budgetStatus: string;
        savingRecommendation: string;
      };
      disclaimer: string;
    };
    insurancePlanner: {
      header: {
        title: string;
        subtitle: string;
        notice: string;
      };
      input: {
        age_label: string;
        gender_label: string;
        smoking_label: string;
        health_label: string;
        dependents_label: string;
        spouseIncome_label: string;
        income_label: string;
        debts_label: string;
        assets_label: string;
        homeOwnership_label: string;
        homeValue_label: string;
        goal_label: string;
        lifePreference_label: string;
        healthPreference_label: string;
        disabilityPreference_label: string;
      };
      gender: {
        male: string;
        female: string;
        preferNot: string;
      };
      smoking: {
        non: string;
        smoker: string;
        ex: string;
      };
      health: {
        excellent: string;
        good: string;
        fair: string;
        poor: string;
      };
      homeOwnership: {
        ownMortgage: string;
        ownPaid: string;
        renting: string;
        planning: string;
      };
      goal: {
        a: string;
        b: string;
        c: string;
        d: string;
      };
      lifePreference: {
        term: string;
        whole: string;
        combination: string;
      };
      healthPreference: {
        basic: string;
        comprehensive: string;
        premium: string;
      };
      disabilityPreference: {
        yes: string;
        no: string;
        optional: string;
      };
      btn: {
        calculate: string;
        reset: string;
        quotes: string;
        advisor: string;
        tools: string;
      };
      result: {
        title: string;
        lifeInsurance: string;
        healthInsurance: string;
        criticalIllness: string;
        disabilityInsurance: string;
        propertyInsurance: string;
        protectionScore: string;
        totalAnnualPremium: string;
        insight: string;
      };
      disclaimer: string;
    };
    savingsGoal: {
      header: {
        title: string;
        subtitle: string;
        notice: string;
      };
      input: {
        goalType_label: string;
        timeline_label: string;
        priority_label: string;
        goalStatus_label: string;
        monthlySavings_label: string;
        allocation_label: string;
        investmentStrategy_label: string;
        inflation_label: string;
      };
      goal: {
        emergency: string;
        homeDownPayment: string;
        vehicle: string;
        education: string;
        retirement: string;
        vacation: string;
        custom: string;
      };
      priority: {
        high: string;
        medium: string;
        low: string;
      };
      allocation: {
        equal: string;
        priority: string;
        custom: string;
      };
      investmentStrategy: {
        savings_only: string;
        conservative: string;
        balanced: string;
        growth: string;
        aggressive: string;
      };
      btn: {
        addGoal: string;
        calculate: string;
        reset: string;
        openAccount: string;
        advisor: string;
        tools: string;
        downloadPlan: string;
      };
      result: {
        title: string;
        actionPlan: string;
        onTrack: string;
        tight: string;
        needsAdjustment: string;
        achievable: string;
        challenging: string;
      };
      disclaimer: string;
    };
    toolsHub: {
      mainTitle: string;
      mainSubtitle: string;
      enterBtn: string;
      card1: {
        title: string;
        desc: string;
      };
      card2: {
        title: string;
        desc: string;
      };
      card3: {
        title: string;
        desc: string;
      };
      card4: {
        title: string;
        desc: string;
      };
      card5: {
        title: string;
        desc: string;
      };
      card6: {
        title: string;
        desc: string;
      };
      card7: {
        title: string;
        desc: string;
      };
      card8: {
        title: string;
        desc: string;
      };
      footerText: string;
      footerCTA_btn: string;
    };
  cardManagement: {
    hero: {
      tag: string;
      title: string;
      subtitle: string;
      benefits: Array<{
        icon: string;
        value: string;
        label: string;
      }>;
      cta1: string;
      cta2: string;
      socialProof: string;
    };
    painPoints: {
      tag: string;
      title: string;
      subtitle: string;
      points: Array<{
        icon: string;
        title: string;
        description: string;
        impact: string;
      }>;
      stats: Array<{
        value: string;
        label: string;
      }>;
    };
    solutions: {
      tag: string;
      title: string;
      subtitle: string;
      services: Array<{
        icon: string;
        title: string;
        description: string;
        benefits: string[];
      }>;
    };
    caseStudies: {
      tag: string;
      title: string;
      subtitle: string;
      before: string;
      after: string;
      cases: Array<{
        client: string;
        type: string;
        before: string;
        after: string;
        savings: string;
        period: string;
      }>;
    };
    pricing: {
      tag: string;
      title: string;
      subtitle: string;
      recommended: string;
      plans: {
        individual: {
          label: string;
          options: Array<{
            name: string;
            price: string;
            period: string;
            features: string[];
            recommended?: boolean;
            cta: {
              text: string;
              link: string;
            };
          }>;
        };
        corporate: {
          label: string;
          options: Array<{
            name: string;
            price: string;
            period: string;
            features: string[];
            recommended?: boolean;
            cta: {
              text: string;
              link: string;
            };
          }>;
        };
        loan: {
          label: string;
          options: Array<{
            name: string;
            price: string;
            period: string;
            features: string[];
            recommended?: boolean;
            cta: {
              text: string;
              link: string;
            };
          }>;
        };
      };
    };
    socialProof: {
      stats: Array<{
        value: string;
        label: string;
      }>;
      badges: string[];
    };
    faq: {
      title: string;
      subtitle: string;
      questions: Array<{
        question: string;
        answer: string;
      }>;
    };
    finalCta: {
      title: string;
      subtitle: string;
      cta1: string;
      cta2: string;
      relatedTitle: string;
      relatedServices: Array<{
        name: string;
        link: string;
      }>;
    };
  };

  // Financial Optimization Page
  financialOptimization: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      tag: string;
      title: string;
      subtitle: string;
      description: string;
      cta1: string;
      cta2: string;
      stats: Array<{
        value: string;
        label: string;
      }>;
    };
    coreValues: {
      tag: string;
      title: string;
      description: string;
      items: Array<{
        title: string;
        description: string;
        data: string;
      }>;
    };
    painPoints: {
      tag: string;
      title: string;
      description: string;
      items: Array<{
        title: string;
        description: string;
        data: string;
      }>;
    };
    calculator: {
      tag: string;
      title: string;
      description: string;
    };
    cases: {
      tag: string;
      title: string;
      description: string;
      items: Array<{
        name: string;
        age: string;
        income: string;
        before: string;
        after: string;
        result: string;
        savings: string;
        avatar: string;
      }>;
    };
    faq: {
      title: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    };
    finalCta: {
      title: string;
      description: string;
      cta1: string;
      cta2: string;
    };
  };

  // Business Planning Page
  businessPlanning: {
    hero: {
      tag: string;
      title: string;
      subtitle: string;
      stats: Array<{
        label: string;
        value: string;
        change: string;
      }>;
      cta1: string;
      cta2: string;
    };
    samples: {
      tag: string;
      title: string;
      description: string;
    };
    packages: {
      tag: string;
      title: string;
      description: string;
      mostPopular: string;
      delivery: string;
      getStarted: string;
      selectPackage: string;
    };
    guarantee: {
      title: string;
      description: string;
    };
    caseStudy: {
      tag: string;
      title: string;
      description: string;
    };
    faq: {
      title: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    };
  };

  // E-commerce Solutions Page
  ecommerceSolutions: {
    hero: {
      tag: string;
      title: string;
      subtitle: string;
      stats: Array<{
        value: string;
        label: string;
      }>;
      cta1: string;
      cta2: string;
    };
    platforms: {
      tag: string;
      title: string;
      description: string;
    };
    packages: {
      tag: string;
      title: string;
      description: string;
    };
    caseStudy: {
      tag: string;
      title: string;
      description: string;
    };
  };

  // Cash Flow Optimization Page
  cashFlowOptimization: {
    hero: {
      tag: string;
      title: string;
      subtitle: string;
      description: string;
      cta1: string;
      cta2: string;
    };
    calculator: {
      title: string;
      description: string;
    };
    services: {
      tag: string;
      title: string;
      description: string;
      items: Array<{
        title: string;
        description: string;
        features: string[];
      }>;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      creditpilot: 'CreditPilot',
      advisory: 'Advisory',
      solutions: 'Solutions',
      company: 'Company',
      news: 'News',
      resources: 'Resources',
      careers: 'Careers',
      calculator: 'Calculator',
      loanOptimizer: 'Loan Optimizer',
    },
    common: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      readMore: 'Read More',
      viewAll: 'View All',
      contactUs: 'Contact Us',
      applyNow: 'Apply Now',
      bookConsultation: 'Book Consultation',
      whatsappUs: 'WhatsApp Us',
      explore: 'Explore',
      viewDetails: 'View Details',
      useCreditPilot: 'Use CreditPilot',
    },
    home: {
      hero: {
        title: 'The World\'s Money, Made Yours.',
        titleLine1: 'The World\'s Money,',
        titleLine2: 'Made Yours.',
        subtitle: 'Smart Assessment First, Then Apply To The Right Bank',
        description: 'Stop wasting time on banks that will reject you. We analyze your DSR, optimize your debt structure, and match you with banks that will actually approve - before you apply.',
        descriptionLine1: 'Stop wasting time on banks that will reject you. We analyze your DSR, optimize your debt structure,',
        descriptionLine2: 'and match you with banks that will actually approve - before you apply.',
        bottomDescription: 'INFINITE GZ: Professional DSR optimization, debt consolidation, and AI-powered loan matching from 50+ Malaysian banks. Zero upfront fees. Success-based pricing only.',
      },
      products: {
        tag: 'Our Services',
        title: 'Complete Financial Solutions For Malaysian Businesses',
        items: [
          {
            tag: 'Smart Analysis',
            title: 'CreditPilot',
            description: 'AI-powered system finds best loan products from 50+ Malaysian banks and fintech companies.',
            features: ['DSR Beautification', 'Best Rate Matching', 'Smart Recommendations', 'Real-Time Analysis'],
            linkText: 'Use Now',
            linkUrl: 'https://portal.infinitegz.com/creditpilot',
          },
          {
            tag: 'Expert Guidance',
            title: 'Loan Advisory',
            description: 'Expert loan consultation. Zero upfront fees. Success-based pricing only.',
            features: ['Zero Upfront Cost', 'Expert Consultation', 'Success-Based Fee', 'All Loan Types'],
            linkText: 'Consult Now',
            linkUrl: 'https://portal.infinitegz.com/advisory',
          },
          {
            tag: 'Digital Transform',
            title: 'Digitalization & Accounting',
            description: 'Full digital transformation for businesses. E-commerce setup, accounting, tax optimization.',
            features: ['Online Store Setup', '15% Tax Optimization', 'Accounting Services', 'Business Planning'],
            linkText: 'Learn More',
            linkUrl: 'https://portal.infinitegz.com/digital',
          },
        ],
      },
      content: {
        tag: 'Financial Intelligence',
        title: 'Stop Loan Rejections. Get Approved.',
        description: '60% of loan applications in Malaysia are rejected due to DSR exceeding limits. We diagnose your financial profile, optimize your debt structure, and match you with banks that will actually approve - before you waste time applying.',
        features: [
          {
            title: 'DSR Optimization',
            description: 'Your DSR is 75%? Banks reject you. We restructure your debts, clear credit cards, optimize payment schedules. Result: DSR drops to 50%, approval rate increases 60-80%. Real example: RM 5,000/month debt → RM 3,200/month after consolidation.',
          },
          {
            title: 'Debt Consolidation',
            description: 'Multiple credit cards, personal loans, car loans crushing your cash flow? We consolidate into one lower-interest loan. Save RM 500-2,000/month. Real example: 3 cards (RM 2,500/month) → 1 consolidated loan (RM 1,800/month).',
          },
          {
            title: 'Tax Optimization',
            description: 'SME owners losing money on taxes? We help you claim 15% deductions, optimize business structure, file correctly with LHDN. Save RM 3,000-15,000/year legally. Real example: RM 100K revenue → RM 15K tax savings through proper planning.',
          },
          {
            title: 'Credit Score Repair',
            description: 'CCRIS/CTOS score too low? Late payments, high utilization hurting your record? We provide repair strategies, payment optimization, and 3-6 month improvement plans. Real example: Score 650 → 780 in 6 months, home loan approved.',
          },
        ],
        detailsTitle: 'Do More With CreditPilot',
        details: [
          {
            title: 'Smart Loan Matching',
            description: 'Our AI-Powered System Analyzes Your Financial Profile And Matches You With The Best Loan Products From All Legitimate Banks, Digital Banks, And Fintech Companies In Malaysia. Get Personalized Recommendations Based On Your Unique Situation.',
          },
          {
            title: 'Comprehensive Services',
            description: 'Beyond Loans, We Offer 8 Complementary Services Including Business Planning, Insurance Consultation, E-Commerce Setup, Accounting, And Credit Card Management - All Completely Free For Our Loan Clients. Your Success Is Our Success.',
          },
          {
            title: 'Zero Upfront Fees',
            description: 'We Only Charge Upon Successful Loan Approval. Our Success-Based Model Ensures We\'re Fully Committed To Getting You The Best Possible Outcome. No Hidden Fees, No Surprises - Just Transparent Service.',
          },
          {
            title: '100% Legal & Compliant',
            description: 'We Only Work With Licensed Financial Institutions Regulated By Bank Negara Malaysia. No Loan Sharks, No Illegal Lending - Your Financial Safety And Security Is Our Top Priority.',
          },
        ],
      },
      news: {
        tag: 'Latest Updates',
        title: 'News & Insights',
        description: 'Stay Informed With The Latest Financial News, Loan Policies, Success Stories, And Expert Insights',
        items: [
          {
            date: 'Dec 20, 2024',
            title: 'New OPR Rate Changes',
            description: 'Bank Negara announces new OPR. Impact on your loan applications.',
            category: 'Policy Update',
          },
          {
            date: 'Dec 15, 2024',
            title: 'RM 2M Business Loan Success',
            description: 'Manufacturing business secures RM 2M financing for digital expansion.',
            category: 'Case Study',
          },
          {
            date: 'Dec 10, 2024',
            title: 'Year-End Tax Planning 2024',
            description: 'Maximize tax relief claims before year-end deadline.',
            category: 'Financial Tips',
          },
          {
            date: 'Dec 5, 2024',
            title: 'Digital Vs Traditional Banks',
            description: 'Comprehensive Comparison Of Loan Products From Digital Banks And Traditional Banking Institutions In Malaysia.',
            category: 'Guide',
          },
          {
            date: 'Nov 28, 2024',
            title: 'Credit Card Debt Management',
            description: 'Learn Effective Strategies To Manage Multiple Credit Cards, Avoid Late Fees, And Optimize Utilization Ratios.',
            category: 'Financial Tips',
          },
          {
            date: 'Nov 20, 2024',
            title: 'Traditional Business Goes Digital',
            description: 'How A 40-Year-Old Retail Business Tripled Revenue Through Digital Transformation And Online Sales Channels.',
            category: 'Case Study',
          },
        ],
      },
      footer: {
        title: 'Ready To Optimize Your Finances?',
        description: 'Join Thousands Of Malaysian Businesses That Trust INFINITE GZ For Their Financial Success',
        copyright: '© 2024 INFINITE GZ SDN BHD. All Rights Reserved.',
        sections: {
          try: 'Try CreditPilot On',
          products: 'Products',
          company: 'Company',
          resources: 'Resources',
        },
        links: {
          web: 'Web',
          whatsapp: 'WhatsApp',
          phone: 'Phone',
          creditpilot: 'CreditPilot',
          advisory: 'Loan Advisory',
          creditCard: 'Credit Card Services',
          digital: 'Digitalization',
          accounting: 'Accounting Services',
          about: 'About Us',
          careers: 'Careers',
          contact: 'Contact',
          newsUpdates: 'News & Updates',
          partners: 'Partners',
          dsrGuide: 'DSR Guide',
          taxOptimization: 'Tax Optimization',
          faq: 'FAQ',
          privacy: 'Privacy Policy',
          legal: 'Legal',
          terms: 'Terms',
        },
      },
    },
    creditpilot: {
      meta: {
        title: 'CreditPilot | INFINITE GZ',
        description: 'AI-powered loan matching system that finds the best loan products from all Malaysian financial institutions. Check your DSR first, then apply to the right bank.',
      },
      hero: {
        tag: 'AI-Powered Loan Matching',
        title: 'Stop Applying To Banks That Will Reject You. We Show You Which Banks Will Actually Approve.',
        subtitle: '2-Minute Free Analysis. See Your DSR, Get Bank Recommendations, Know Your Approval Chances - Before You Waste Time Applying.',
        cta1: 'Start Free Analysis',
        cta2: 'Learn More',
      },
      capabilities: {
        tag: 'Why CreditPilot Is Different',
        title: 'We Don\'t Just Fill Forms - We Optimize Your Profile First',
        features: [
          {
            title: 'Smart Bank Matching (Not Just Product Listing)',
            description: 'Problem: You don\'t know which bank will approve you. Different banks have different DSR limits (Maybank 40-70%, Hong Leong 60-80%). Wrong bank = rejection + negative CCRIS record. Solution: Our AI analyzes your profile, DSR, income type, and matches you with 3 banks most likely to approve. Real example: Self-employed RM 10K/month, RHB only recognizes 60% (RM 6K), but Hong Leong recognizes 90% (RM 9K). We recommend Hong Leong. Result: Loan capacity difference RM 496K over 10 years.',
          },
          {
            title: 'DSR Optimization Before Application',
            description: 'Problem: Your DSR is 75%, banks reject you. Most agents just submit your application anyway. Solution: We analyze your debts, consolidate high-interest loans, optimize payment schedules. Result: DSR drops to 50%, approval rate increases 60-80%. Real example: RM 5,000/month debt → RM 3,200/month after consolidation. DSR 75% → 48%. CIMB approves RM 30K loan.',
          },
          {
            title: 'Real-Time Comparison With Approval Probability',
            description: 'Problem: You compare interest rates, but don\'t know which bank will actually approve you. Solution: We show you interest rates, fees, terms, AND approval probability for each bank based on your profile. Real-time data from 50+ Malaysian banks, digital banks, and fintech companies. 98% match accuracy. Average approval time: 21-25 days (vs market average 45 days).',
          },
        ],
      },
      howItWorks: {
        tag: 'How It Works',
        title: 'Get Your Results In 3 Simple Steps',
        steps: [
          {
            number: '01',
            title: 'Enter Your Financial Details (2 Minutes)',
            description: 'Provide: Monthly income, existing debts (credit cards, loans), employment type. All data encrypted and secure. No hard credit checks that affect your score.',
          },
          {
            number: '02',
            title: 'AI Analysis & DSR Calculation',
            description: 'Our system: (1) Calculates your exact DSR using real bank standards, (2) Analyzes 50+ institutions in real-time, (3) Identifies which banks will approve you based on your profile, (4) Ranks options by approval probability. Results in 2 minutes.',
          },
          {
            number: '03',
            title: 'Get Bank Recommendations & Optimization Plan',
            description: 'Receive: (1) Your current DSR and which banks will approve/reject, (2) Top 3 bank recommendations with approval probability, (3) DSR optimization plan if needed (debt consolidation, payment restructuring), (4) Complete application roadmap. All free. No obligation.',
          },
        ],
      },
      cta: {
        title: 'Ready To Find Your Best Loan Match?',
        description: 'Start your free 2-minute analysis now. See your DSR, get bank recommendations, and know your approval chances - before you waste time applying to banks that will reject you.',
        buttonText: 'Start Free Analysis',
      },
    },

    advisory: {
      meta: {
        title: 'Advisory Services | INFINITE GZ',
        description: '8 complementary business services completely free for loan clients. From DSR optimization to e-commerce setup, accounting, and tax planning.',
      },
      hero: {
        tag: 'Complete Financial Solutions',
        title: '8 Business Services - Completely FREE For Loan Clients',
        description: 'Most loan agents just help you fill forms. We do more: DSR optimization, debt consolidation, business planning, e-commerce setup, accounting, tax optimization - all FREE when you get a loan through us. Your success is our success.',
      },
      services: {
        tag: '8 Core Services',
        title: 'What You Get: Complete Business Support (All Free)',
        items: [
          {
            num: '01',
            title: 'Financial Optimization',
            description: 'DSR optimization (improve approval rate 60-80%), debt consolidation (save RM 500-2,000/month), credit score repair (650 → 780 in 6 months), cash flow management. Real value: RM 10K-50K saved in interest over 3 years.',
          },
          {
            num: '02',
            title: 'Marketing & Advertising',
            description: 'Channel design, marketing strategy, market planning, supplier advertising solutions. Help traditional businesses go digital and reach new customers. Real case: 40-year retail business tripled revenue through digital marketing.',
          },
          {
            num: '03',
            title: 'Business Planning',
            description: 'Professional business plans for bank loans (RM 1,500-3,500 value), financing design, business model development, market analysis. Average approval time: 21-25 days (vs market 45 days). 98% approval rate for our BP clients.',
          },
          {
            num: '04',
            title: 'Insurance Services',
            description: 'Product recommendations, insurance planning, coverage analysis. Ensure your business and personal assets are properly protected while optimizing costs.',
          },
          {
            num: '05',
            title: 'E-Commerce Solutions ⭐',
            description: 'Quick online store setup (Shopee, Lazada, own website), promotion strategies, operations support, channel building. Real case: Traditional manufacturer increased revenue 3x through e-commerce. Complete setup in 2-4 weeks.',
          },
          {
            num: '06',
            title: 'Membership System',
            description: 'System design, points & rewards programs, benefits planning. Build customer loyalty and increase repeat purchases. Real value: 20-30% increase in customer retention.',
          },
          {
            num: '07',
            title: 'Accounting & Tax Optimization',
            description: 'Bookkeeping, tax filing with LHDN, financial statements, audit support, 15% tax optimization. Save RM 3,000-15,000/year legally. Real case: RM 100K revenue → RM 15K tax savings through proper planning.',
          },
          {
            num: '08',
            title: 'Credit Card Management',
            description: 'Payment reminders, payment-on-behalf, purchase-on-behalf services. Save RM 1,200-5,000/year by avoiding late fees and maximizing rewards. 50/50 revenue share model or RM 99/month subscription.',
          },
        ],
      },
      benefits: {
        tag: 'Why This Is Different',
        title: 'We\'re Not Just Loan Agents - We\'re Your Business Partners',
        items: [
          {
            icon: '',
            title: 'Zero Upfront Cost',
            description: 'All 8 services are completely FREE for loan clients. We only charge after your loan is approved. No hidden fees, no surprises. If your loan is rejected, you pay nothing.',
          },
          {
            icon: '',
            title: 'We Make Your Business Loan-Ready',
            description: 'Problem: Traditional businesses can\'t get loans because banks don\'t see digital revenue, proper accounting, or growth potential. Solution: We help you digitize, organize accounts, create business plans, and optimize finances - making you attractive to banks.',
          },
          {
            icon: '',
            title: 'Ongoing Support & Optimization',
            description: 'We don\'t disappear after loan approval. Quarterly reviews, annual tax planning, continuous DSR monitoring, business growth support. Real example: Client got RM 2M loan, we helped them expand digitally, revenue increased 3x in 2 years.',
          },
        ],
      },
      cta: {
        title: 'Ready to Get Your Loan + Free Business Support?',
        description: 'Book a free consultation. We\'ll assess your loan eligibility, show you which banks will approve you, and explain how all 8 services can help your business grow - all at zero upfront cost.',
      },
    },
    solutions: {
      meta: {
        title: 'Solutions | INFINITE GZ',
        description: 'Financial solutions for all Malaysian businesses. From loan consulting to digital transformation.',
      },
      hero: {
        tag: 'Financial Solutions for all Malaysian businesses',
        title: 'Loan Rejected? DSR Too High? We Fix Everything - Then Get You Approved.',
        description: 'Most loan agents just fill forms. We do more: DSR optimization, debt consolidation, business planning, e-commerce setup, accounting, tax optimization - all FREE when you get a loan through us. We make your business loan-ready, then match you with banks that will actually approve. Zero upfront fees. Success-based pricing only.',
      },
      products: [
        {
          tag: 'AI SYSTEM',
          title: 'CreditPilot',
          description: 'AI-powered loan matching system that analyzes your financial profile and finds the best loan products from 50+ Malaysian banks and fintech companies. 98% match accuracy, 2-minute analysis.',
          linkText: 'Learn more',
        },
        {
          tag: '8 SERVICES',
          title: 'Advisory',
          description: 'Comprehensive business services including financial optimization, e-commerce solutions, accounting, marketing strategy, and more. All services completely free for loan clients.',
          linkText: 'View all services',
        },
        {
          tag: 'INFRASTRUCTURE',
          title: 'Resources',
          description: 'Powered by comprehensive loan database, real-time rate monitoring, and advanced DSR optimization algorithms. 50+ institutions, RM 500M+ facilitated, serving 5,000+ businesses.',
          linkText: 'Explore infrastructure',
        },
      ],
      coreBusiness: {
        tag: 'Core Business',
        title: 'We Don\'t Just Fill Forms - We Optimize Your Profile, Then Match You With The Right Bank',
        description: 'Problem: 60% of loan applications are rejected because DSR is too high, accounts are messy, or business structure doesn\'t meet bank requirements. Most agents just submit your application anyway. Solution: We analyze your DSR, optimize your debt structure, organize your accounts, create business plans, and THEN match you with banks that will actually approve. We work with 50+ licensed institutions (banks, digital banks, fintech) - 100% legal, no illegal loans.',
        features: [
          {
            icon: '',
            title: 'DSR Optimization (Improve Approval Rate 60-80%)',
            description: 'Real example: RM 5,000/month debt → RM 3,200/month after consolidation. DSR 75% → 48%. CIMB approves RM 30K loan. We analyze your debts, consolidate high-interest loans, optimize payment schedules BEFORE you apply.',
          },
          {
            icon: '',
            title: 'Smart Bank Matching (Not Just Product Listing)',
            description: 'Different banks have different DSR limits (Maybank 40-70%, Hong Leong 60-80%). Wrong bank = rejection + negative CCRIS record. We match you with 3 banks most likely to approve based on your profile. Real example: Self-employed RM 10K/month, RHB only recognizes 60% (RM 6K), but Hong Leong recognizes 90% (RM 9K). Loan capacity difference: RM 496K over 10 years.',
          },
          {
            icon: '',
            title: 'Business Planning (98% Approval Rate)',
            description: 'Traditional businesses can\'t get loans because banks don\'t see growth potential. We create professional business plans, organize accounts, and make you attractive to banks. Average approval time: 21-25 days (vs market 45 days).',
          },
          {
            icon: '',
            title: 'Debt Consolidation (Save RM 500-2,000/Month)',
            description: 'Multiple high-interest debts crushing cash flow? We consolidate them into one lower-interest payment. Real example: 3 credit cards (18% interest) → 1 loan (6-8% interest). Monthly payment drops, DSR improves, loan approval chances increase.',
          },
          {
            icon: '',
            title: 'Tax Optimization (Save RM 3,000-15,000/Year)',
            description: 'SME owners losing money on taxes? We help you claim 15% deductions, optimize business structure, file correctly with LHDN. Real example: RM 100K revenue → RM 15K tax savings through proper planning.',
          },
          {
            icon: '',
            title: 'Credit Score Repair (650 → 780 in 6 Months)',
            description: 'Low CCRIS/CTOS score blocking loans? We provide repair strategies, payment optimization, and 3-6 month improvement plans. Real example: Score 650 → 780 in 6 months, home loan approved.',
          },
        ],
      },
      complementaryServices: {
        tag: '8 Complementary Services',
        title: '8 Business Services - All FREE For Loan Clients',
        description: 'Most loan agents disappear after loan approval. We don\'t. We help you grow your business with 8 complementary services - all completely FREE when you get a loan through us. Your success is our success.',
        items: [
          {
            num: '01',
            title: 'Financial Optimization',
            description: 'DSR optimization (improve approval rate 60-80%), debt consolidation (save RM 500-2,000/month), credit score repair (650 → 780 in 6 months), cash flow management. Real value: RM 10K-50K saved in interest over 3 years.',
          },
          {
            num: '02',
            title: 'Marketing & Digital Strategy',
            description: 'Channel design, marketing strategy, market planning, supplier advertising. Help traditional businesses go digital and reach new customers. Real case: 40-year retail business tripled revenue through digital marketing.',
          },
          {
            num: '03',
            title: 'Business Planning',
            description: 'Professional business plans for bank loans (RM 1,500-3,500 value), financing design, business model development, market analysis. Average approval time: 21-25 days (vs market 45 days). 98% approval rate for our BP clients.',
          },
          {
            num: '04',
            title: 'Insurance Services',
            description: 'Product recommendations, insurance planning, coverage analysis. Ensure your business and personal assets are properly protected while optimizing costs.',
          },
          {
            num: '05',
            title: 'E-Commerce Solutions ⭐',
            description: 'Quick online store setup (Shopee, Lazada, own website), promotion strategies, operations support, channel building. Real case: Traditional manufacturer increased revenue 3x through e-commerce. Complete setup in 2-4 weeks.',
          },
          {
            num: '06',
            title: 'Membership System',
            description: 'System design, points & rewards programs, benefits planning. Build customer loyalty and increase repeat purchases. Real value: 20-30% increase in customer retention.',
          },
          {
            num: '07',
            title: 'Accounting & Tax Optimization',
            description: 'Bookkeeping, tax filing with LHDN, financial statements, audit support, 15% tax optimization. Save RM 3,000-15,000/year legally. Real case: RM 100K revenue → RM 15K tax savings through proper planning.',
          },
          {
            num: '08',
            title: 'Credit Card Management',
            description: 'Payment reminders, payment-on-behalf, purchase-on-behalf services. Save RM 1,200-5,000/year by avoiding late fees and maximizing rewards. 50/50 revenue share model or RM 99/month subscription.',
          },
        ],
      },
      pricing: {
        tag: 'Pricing Model',
        title: 'Zero Upfront Fees',
        models: [
          {
            tag: 'CORE SERVICE',
            title: 'Success Fee',
            price: '💼',
            description: 'Charge after loan approval. Only charge upon successful loan approval and disbursement.',
            features: ['No Upfront Cost', 'No Hidden Charges', 'Success-Based Pricing'],
          },
          {
            tag: '8 SERVICES',
            title: 'Completely FREE',
            price: '🎁',
            description: 'Completely free for loan clients. All 8 complementary services free for loan clients.',
            features: ['Financial Optimization', 'E-Commerce Solutions', 'Accounting & More'],
          },
          {
            tag: 'SPECIAL PARTNERS',
            title: '50/50 Split',
            price: '🤝',
            description: 'Profit sharing model. Profit sharing for credit card management services.',
            features: ['Revenue Sharing', 'Win-Win Partnership', 'Transparent Pricing'],
          },
        ],
      },
      targetCustomers: {
        tag: 'Target Customers',
        title: 'Who We Serve: Malaysian SMEs & Individuals With Debt Issues',
        customers: [
          {
            icon: '',
            title: 'Traditional Business Owners (40-50 Years Old)',
            description: 'Problem: Need loans for expansion but DSR too high, accounts messy, no digital revenue. Banks reject because they don\'t see growth potential. Solution: We help you digitize, organize accounts, create business plans, optimize DSR. Real case: 40-year retail business got RM 2M loan after our optimization, revenue increased 3x in 2 years.',
          },
          {
            icon: '',
            title: 'SME Companies (Manufacturing, Retail, F&B)',
            description: 'Problem: Multiple high-interest debts, cash flow unstable, can\'t get loans. Solution: We consolidate debts, optimize DSR, create business plans, set up e-commerce. Real case: Manufacturing company saved RM 10K/year in interest, got RM 500K loan for expansion.',
          },
          {
            icon: '',
            title: 'High Credit Card Debt',
            description: 'Clients with high credit card debt who need debt consolidation and financial optimization',
          },
          {
            icon: '',
            title: 'Business Partners',
            description: 'Suppliers, member customers who need comprehensive business support',
          },
        ],
      },
      cta: {
        title: 'Ready to Transform Your Business?',
        description: 'Join 5,000+ businesses that have secured better financing through INFINITE GZ',
      },
    },
    creditCard: {
      meta: {
        title: 'Credit Card Management | INFINITE GZ',
        description: 'Professional credit card management services. Save RM 1,200-5,000 annually through smart payment reminders, optimization, and debt management.',
      },
      hero: {
        tag: 'Professional Credit Card Management',
        title: 'Stop Missing Payments. Save RM 1,200-5,000/Year. Boost Your Credit Score.',
        subtitle: 'Malaysian credit card debt: RM 50.7B. RM 551.8M overdue (1.1%). Late payment = RM 150-300 penalty + credit score damage. We fix it.',
        description: 'Never miss a payment again. Maximize rewards. Improve credit score. All managed professionally.',
        cta1: 'Free Consultation',
        cta2: 'Calculate My Potential',
        stats: 'Trusted by',
        clients: 'Clients',
        totalLimit: 'Total Credit Managed',
        saved: 'Total Value Created',
      },
      painPoints: {
        tag: 'Common Challenges',
        title: '3 Major Struggles of Malaysian Credit Card Users',
        description: 'Malaysia\'s credit card debt: RM 50.7B. RM 551.8M overdue (1.1%). Each late payment = RM 150-300 penalty + credit score damage. High credit card usage = higher DSR = loan rejection. We fix all of this.',
        items: [
          {
            icon: '',
            iconComponent: React.createElement(AlertTriangle, { size: 32, strokeWidth: 1.5 }),
            title: 'Forgot Payment = RM 150-300 Penalty + Credit Score Damage',
            description: 'Multiple cards, different due dates, easily miss payments. Each late payment: RM 150-300 penalty + affects CCRIS/CTOS records + increases DSR. Real impact: Loan rejection due to high DSR from credit card debt.',
            data: 'RM 551.8M Overdue Debt',
          },
          {
            icon: '',
            iconComponent: React.createElement(TrendingUp, { size: 32, strokeWidth: 1.5 }),
            title: 'Poor Optimization = Lost RM 800-3,000/Year',
            description: 'Don\'t understand card rewards, wasted points, high annual fees. Not using the right card for purchases = missing cashback. Paying annual fees unnecessarily. Real impact: RM 800-3,000/year lost in benefits.',
            data: '18% Annual Interest Trap',
          },
          {
            icon: '',
            iconComponent: React.createElement(Layers, { size: 32, strokeWidth: 1.5 }),
            title: 'Multiple Cards Chaos = Stress + Missed Payments',
            description: 'Manage 2-3 cards, confused statements, different billing dates. Easy to miss payments. High credit utilization = higher DSR = loan rejection. Real impact: DSR 75% due to credit card debt, bank rejects loan application.',
            data: 'Average 2-3 Cards Per Person',
          },
        ],
      },
      services: {
        tag: 'Our Services',
        title: '5 Professional Services - Save RM 1,200-5,000/Year & Improve Credit Score',
        items: [
          {
            icon: '',
            iconComponent: React.createElement(Bell, { size: 28, strokeWidth: 1.5 }),
            title: 'Payment Reminders (Save RM 500-2,000/Year)',
            description: '3-tier reminder system (WhatsApp + SMS + Email) 7/3/1 days before due date. Never miss a payment again. Avoid RM 150-300 late fees per card. Real result: Save RM 500-2,000/year in late fees alone.',
          },
          {
            icon: '',
            iconComponent: React.createElement(CreditCard, { size: 28, strokeWidth: 1.5 }),
            title: 'Payment-On-Behalf (100% On-Time Guarantee)',
            description: 'We pay on your behalf within 2 business days. 100% on-time payment guarantee. Protect your credit score. Avoid late fees. Monthly reconciliation report. Real result: Credit score improvement (650 → 780 in 6 months).',
          },
          {
            icon: '',
            iconComponent: React.createElement(ShoppingCart, { size: 28, strokeWidth: 1.5 }),
            title: 'Purchase-On-Behalf (Maximize Rewards)',
            description: 'Intelligent card selection system. Automatically use the best card for each purchase to maximize cashback and points. 50/50 revenue share model. Real result: Extra RM 800-3,000/year in rewards.',
          },
          {
            icon: '',
            iconComponent: React.createElement(TrendingUp, { size: 28, strokeWidth: 1.5 }),
            title: 'Card Optimization (Save RM 500-1,500/Year)',
            description: 'Monthly spending analysis. Optimal card usage recommendations. Annual fee waiver negotiation (save RM 200-800/year per card). Rewards redemption reminders. Real result: Save RM 500-1,500/year in fees and maximize rewards.',
          },
          {
            icon: '',
            iconComponent: React.createElement(LifeBuoy, { size: 28, strokeWidth: 1.5 }),
            title: 'Debt Management (Improve DSR & Credit Score)',
            description: 'Free DSR calculation. Debt consolidation recommendations (save RM 500-2,000/month). Credit score improvement strategies (650 → 780 in 6 months). Lower interest rate solutions. Real result: DSR improves, loan approval chances increase 60-80%.',
          },
        ],
      },
      cases: {
        tag: 'Client Case Studies',
        title: 'Real Clients, Real Savings',
        before: 'Before',
        after: 'After',
        result: 'Annual Savings',
        items: [
          {
            num: '01',
            name: 'Mr. Wang',
            before: '4 cards in chaos, monthly payment RM 2,500, frequent late payments',
            after: 'Consolidated loan + smart management, on-time payments',
            savings: 'RM 3,200',
          },
          {
            num: '02',
            name: 'Ms. Li',
            before: 'Credit score 650, home loan rejected, high interest rates',
            after: 'Credit optimization, score improved to 780, loan approved',
            savings: 'RM 45,000',
          },
          {
            num: '03',
            name: 'Boss Chen',
            before: 'Corporate card not optimized, monthly spend RM 30K, wasted points',
            after: 'Smart purchasing, points maximized, annual fee waived',
            savings: 'RM 5,000+',
          },
        ],
      },
      pricing: {
        tag: 'Transparent Pricing',
        title: 'Choose Your Plan',
        plans: [
          {
            name: 'Individual',
            description: 'For personal credit card users',
            price: '50/50 Split',
            period: 'or RM 99/month',
            features: [
              'Up to 3 credit cards',
              'Payment reminders',
              'Card optimization',
              'Monthly benefit reports',
              'Payment-on-behalf +RM 50/mo',
            ],
            cta: 'Get Started',
            link: 'https://wa.me/60123456789',
            featured: false,
          },
          {
            name: 'Corporate',
            description: 'For businesses and SMEs',
            price: 'RM 299-999',
            period: 'per month',
            features: [
              '4-tier pricing',
              'Dedicated account manager',
              'Employee card management',
              'Quarterly strategy review',
              'Priority support',
            ],
            cta: 'Contact Sales',
            link: 'https://wa.me/60123456789',
            featured: true,
          },
          {
            name: 'Loan Clients',
            description: 'Exclusive for our loan clients',
            price: 'FREE',
            period: 'first 12 months',
            features: [
              'All standard features',
              '50% discount after 12 months',
              'Complimentary service',
              'No upfront fees',
              'Cancel anytime',
            ],
            cta: 'Apply for Loan',
            link: '/creditpilot',
            featured: false,
          },
        ],
      },
      social: {
        stats: [
          { value: '500+', label: 'Clients' },
          { value: '1,000+', label: 'Cards Managed' },
          { value: 'RM 600K+', label: 'Total Savings' },
          { value: '98%', label: 'Satisfaction' },
        ],
        compliance: 'PDPA 2010 Compliant',
        insurance: 'Professional Indemnity RM 1M',
      },
      faq: {
        tag: 'Frequently Asked Questions',
        title: 'Common Questions',
        items: [
          {
            question: 'How do you charge?',
            answer: 'We offer two pricing models: 1) Success-based 50/50 revenue share with no upfront fees, or 2) Monthly subscription starting at RM 99. Loan clients enjoy 12 months free service.',
          },
          {
            question: 'Is it safe and compliant?',
            answer: 'Yes. We fully comply with Personal Data Protection Act 2010 (PDPA), maintain RM 1M professional indemnity insurance, and use bank-grade encryption to protect your data. We never sell your data to third parties.',
          },
          {
            question: 'What information do I need to provide?',
            answer: 'You need to provide: 1) Credit card details (last 4 digits, bank, credit limit), 2) Monthly statement dates, 3) Bank account for payment-on-behalf service (optional). All information is encrypted and securely stored.',
          },
          {
            question: 'How soon will I see results?',
            answer: 'Payment reminders start immediately. Card optimization shows results within 1-2 months. Credit score improvement typically takes 3-6 months of consistent on-time payments. Annual fee waivers can be negotiated within 1 month.',
          },
          {
            question: 'Can I cancel anytime?',
            answer: 'Yes. Subscription plans can be cancelled anytime with 30 days notice. Success-based plans require 6-month minimum commitment. All outstanding fees must be settled within 14 days of termination.',
          },
        ],
      },
      cta: {
        title: 'Start Saving Today',
        description: 'Contact us for a free consultation on your credit card management strategy',
        relatedServices: 'Related Services',
      },
    },
    financialOptimization: {
      meta: {
        title: 'Financial Optimization | INFINITE GZ',
        description: 'Professional DSR optimization services. Through intelligent bank matching and expert analysis, increase loan approval rate by 80%+. Based on real standards from 8 major Malaysian banks.',
      },
      hero: {
        tag: 'Professional Financial Optimization',
        title: 'DSR Too High? We Optimize It, Then Match You With Banks That Will Approve.',
        subtitle: 'Stop Applying To Banks That Will Reject You. We Analyze Your DSR, Optimize Your Debt Structure, Then Show You Which 3 Banks Will Actually Approve.',
        description: 'Based on real 2025 standards from 8 major Malaysian banks (Maybank, CIMB, Hong Leong, RHB, etc.). 60% of loan applications are rejected because DSR exceeds bank limits. We fix it BEFORE you apply. Average approval rate improvement: 60-80%. Average loan capacity increase: RM 100K-500K.',
        cta1: 'Free DSR Assessment',
        cta2: 'WhatsApp Consultation',
        stats: [
          { value: '500+', label: 'Success Cases' },
          { value: '8', label: 'Bank Standards' },
          { value: 'RM 150K', label: 'Avg. Increase' },
          { value: '60-80%', label: 'Approval Boost' },
        ],
      },
      coreValues: {
        tag: 'Core Advantages',
        title: '5 Professional Services - How We Fix Your DSR & Get You Approved',
        description: 'Problem: Your DSR is 75%, banks reject you. Most agents just submit your application anyway. Solution: We optimize your DSR FIRST, then match you with banks that will actually approve.',
        items: [
          {
            title: '8 Banks DSR Standard Comparison (Avoid Wrong Bank = Rejection)',
            description: 'Problem: Different banks have different DSR limits. Maybank: 40-70% | CIMB: 65-75% | Hong Leong: 60-80%. Wrong bank = rejection + negative CCRIS record. Solution: We analyze which banks will approve you based on your exact DSR. Real example: DSR 70%, Maybank rejects, but Hong Leong approves. Result: Success rate +80%.',
            data: 'Success rate +80%',
          },
          {
            title: 'Intelligent Bank Recommendation System (Not Just Product Listing)',
            description: 'Problem: You don\'t know which bank will approve you. Solution: AI analyzes your identity, income type, employment type, DSR. Recommends top 3 banks most likely to approve. Real example: Self-employed RM 10K/month, RHB only recognizes 60% (RM 6K), but Hong Leong recognizes 90% (RM 9K). We recommend Hong Leong. Result: Loan capacity difference RM 496K over 10 years.',
            data: 'AI-Powered',
          },
          {
            title: 'Self-Employed Income Maximization (60% vs 90% Recognition)',
            description: 'Problem: Banks discount self-employed income. RHB only recognizes 60%, Hong Leong recognizes 90%. Monthly income RM10K, recognition diff RM3K! Solution: We help you choose banks that recognize more of your income. Real example: RM 10K/month, RHB recognizes RM 6K, Hong Leong recognizes RM 9K. Result: Recognition diff up to RM5K/month, loan capacity diff RM 496K over 10 years.',
            data: 'Recognition diff up to RM5K/month',
          },
          {
            title: 'Debt Restructuring Plan (Save RM 500-2,000/Month)',
            description: 'Problem: Multiple high-interest debts crushing cash flow. 3 credit cards (18% interest), personal loans (12% interest). Solution: We consolidate them into one lower-interest loan (6-8%). Real example: RM 5,000/month debt → RM 3,200/month after consolidation. DSR 75% → 48%. Result: Monthly payment -RM 500-2,000, DSR improves, loan approval chances increase.',
            data: 'Monthly payment -RM 500-2,000',
          },
          {
            title: '3-Year Financial Growth Roadmap (Save RM 50K-200K Interest)',
            description: 'Problem: You get a loan, but don\'t know how to optimize future financing. Solution: We create a 3-year roadmap: when to refinance, how to improve DSR further, which banks to target next. Real example: Client got RM 500K loan, we helped them optimize structure, refinanced after 2 years, saved RM 200K in interest over 10 years. Result: Save RM 50K-200K interest.',
            data: 'Save RM 50K-200K interest',
          },
        ],
      },
      painPoints: {
        tag: 'Common Challenges',
        title: '3 Major Financing Obstacles',
        description: 'These problems prevent thousands of businesses from obtaining financing',
        items: [
          {
            title: 'DSR Exceeds, Loan Rejected',
            description: '60% of loan applications rejected due to DSR exceeding limit. Different banks have vastly different standards (40%-80%).',
            data: 'RM 10B+ unmet loan demand',
          },
          {
            title: "Don't Know Which Bank Easiest to Approve",
            description: '8 banks have huge standard differences. Choosing wrong bank = wasting time + affecting credit record.',
            data: 'Wrong bank = 3 months wasted',
          },
          {
            title: 'Self-Employed Income Too Discounted',
            description: 'Bank recognition rate 60%-90%. Monthly income RM10K, might only recognize RM6K-9K.',
            data: 'Recognition diff up to RM5K/month',
          },
        ],
      },
      calculator: {
        tag: 'Professional Tool',
        title: 'Free DSR Assessment',
        description: 'Based on real 2025 standards from 8 Malaysian banks, get professional DSR analysis instantly',
      },
      cases: {
        tag: 'Success Stories',
        title: 'Real Clients, Real Results',
        description: 'Helping 500+ clients optimize DSR and successfully obtain financing',
        items: [
          {
            name: 'Mr. Zhang - Manufacturing',
            age: '45 years old',
            income: 'RM 2,744/month',
            before: 'DSR 72%, rejected by 3 banks',
            after: 'Clear credit card, DSR → 58%',
            result: 'CIMB approved RM 30K',
            savings: 'Save RM 10K/year interest',
            avatar: '👨‍💼',
          },
          {
            name: 'Ms. Lee - E-commerce Owner',
            age: '35 years old',
            income: 'RM 13,000/month',
            before: 'RHB only recognizes RM 6,600 (60%)',
            after: 'Switch to Hong Leong, recognizes RM 11,700 (90%)',
            result: 'Loan capacity diff RM 496K',
            savings: '10 years save RM 200K+ interest',
            avatar: '👩‍💼',
          },
          {
            name: 'Mr. Wang - Joint Housing Loan',
            age: '40 years old',
            income: 'Couple combined RM 5,700',
            before: 'Single application DSR 110%, rejected',
            after: 'Hong Leong 50% split rule',
            result: 'DSR → 78%, approved RM 400K',
            savings: 'Avoid guarantor cost RM 20K-50K',
            avatar: '👨‍👩‍👧',
          },
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'What is DSR?',
            answer: 'Debt Service Ratio = Monthly Debt ÷ Monthly Net Income × 100%. It is the key indicator banks use to assess your repayment ability.',
          },
          {
            question: 'Why do different banks have different DSR limits?',
            answer: 'Each bank has different risk policies. Maybank limits low-income customers to 40%, while Hong Leong allows high-income customers up to 80%.',
          },
          {
            question: 'Why is self-employed income discounted?',
            answer: 'Banks consider self-employed income unstable, so they discount it. RHB only recognizes 60%, Hong Leong recognizes 90%.',
          },
          {
            question: 'Do you charge for your services?',
            answer: '✅ Completely FREE for loan clients. Our income comes from bank partnership commissions.',
          },
          {
            question: 'How long to get assessment results?',
            answer: 'Free DSR assessment is instant. Complete bank recommendations and optimization plan delivered within 24 hours.',
          },
        ],
      },
      finalCta: {
        title: 'Ready to Optimize Your Financing?',
        description: 'Join 500+ businesses that have obtained better financing through INFINITE GZ',
        cta1: 'Start Free Assessment',
        cta2: 'WhatsApp Consultation',
      },
    },
    businessPlanning: {
      hero: {
        tag: 'Professional Business Planning',
        title: 'Bank Rejected Your BP? We Write One That Gets Approved - 98% Success Rate.',
        subtitle: '85% Loan Approval Rate | Bilingual | 7-14 Days Delivery | Average 21-25 Days Bank Approval (vs Market 45 Days)',
        stats: [
          { label: 'Approval Rate', value: '84.2%', change: '+6.5%' },
          { label: 'Avg Approval Time', value: '21 Days', change: '-53%' },
          { label: 'Avg Loan Amount', value: 'RM 500K', change: 'Up to RM 2M' },
          { label: 'Client Satisfaction', value: '4.9/5.0', change: '500+ reviews' },
        ],
        cta1: 'View Packages',
        cta2: 'View Sample BP',
      },
      samples: {
        tag: 'Document Gallery',
        title: 'See What You\'ll Receive',
        description: 'Real business plan samples from different industries. All approved by Malaysian banks.',
      },
      packages: {
        tag: 'Pricing Packages',
        title: 'Choose Your Package',
        description: 'All packages include professional formatting, bank-ready documents, and 1 free revision if rejected due to BP quality.',
        mostPopular: 'MOST POPULAR',
        delivery: 'Delivery',
        getStarted: 'Get Started Now',
        selectPackage: 'Select Package',
      },
      guarantee: {
        title: '100% Satisfaction Guarantee',
        description: 'If your loan is rejected due to BP quality issues (not your business fundamentals), we\'ll refund 50% of your payment. Real case: Client got RM 500K approved after our BP, vs previous rejection.',
      },
      caseStudy: {
        tag: 'Real Transformation',
        title: 'From Rejection to Approval',
        description: 'How we turned a rejected application into RM 500K approval. Real case: Factory owner spent 2 weeks writing 30-page BP, rejected by bank in 5 minutes. We wrote 45-page professional BP in 7 days, approved RM 500K @ 5.5% in 21 days.',
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'I don\'t know how to write financial projections, what do I do?',
            answer: 'We do it for you! Just provide your historical data (if any) and business goals. Our team will create professional 3-year financial projections with detailed assumptions. Real example: Manufacturing client provided 2 years of sales data, we created projections showing 15% growth, bank approved RM 500K.',
          },
          {
            question: 'What if the bank rejects my BP after I paid?',
            answer: 'We offer 1 FREE revision for Professional & Premium packages. If rejection is due to BP quality issues (not your business fundamentals), we refund 50% of your payment. Real case: Client got rejected initially, we revised BP based on bank feedback, approved on second submission.',
          },
          {
            question: 'Can I buy only the financial model without the full BP?',
            answer: 'Yes! We offer standalone financial modeling service at RM 1,500. However, we recommend the full BP package for better bank approval chances. Real data: 84% approval rate with full BP vs 60% with financial model only.',
          },
          {
            question: 'Do you provide Chinese AND English versions?',
            answer: 'Basic package includes Chinese version only. Professional includes English version. Premium includes both in a single integrated document. Real case: Client needed bilingual version for joint venture, Premium package approved RM 800K loan.',
          },
          {
            question: 'How long does the approval process take?',
            answer: 'Based on our 500+ clients: Average 21-25 days for approval (vs market average 45 days). Some clients get approved in as fast as 18 days. Fastest case: 15 days. We prepare bank-ready documents that speed up the process.',
          },
        ],
      },
    },
    ecommerceSolutions: {
      hero: {
        tag: 'Platform Integration Service',
        title: 'From Zero to 500% GMV Growth',
        subtitle: 'Shopee | Lazada | TikTok Shop | Multi-Channel Integration',
        stats: [
          { value: '71x', label: 'GMV Growth' },
          { value: '500%', label: 'Avg ROI' },
          { value: '6 Platforms', label: 'Integrated' },
          { value: '142', label: 'Clients Served' },
        ],
        cta1: 'View Packages',
        cta2: 'See Success Story',
      },
      platforms: {
        tag: 'Platform Ecosystem',
        title: 'We Integrate All Major Platforms',
        description: 'Multi-channel sync, unified management, explosive growth',
      },
      packages: {
        tag: 'Service Packages',
        title: 'Choose Your Integration Package',
        description: 'Complete e-commerce setup from platform integration to accounting automation',
      },
      caseStudy: {
        tag: 'Success Story',
        title: 'Real Client Results',
        description: 'How we helped businesses achieve 500% GMV growth through multi-channel integration',
      },
    },
    cashFlowOptimization: {
      hero: {
        tag: 'Cash Flow Management',
        title: 'Optimize Your Cash Flow, Unlock Growth',
        subtitle: 'Professional cash flow analysis and optimization services',
        description: 'Stop cash flow problems from blocking your growth. We analyze your DSO, DPO, DIO, and create strategies to improve cash conversion cycle, reduce working capital needs, and unlock RM 50K-500K in trapped cash.',
        cta1: 'Start Free Assessment',
        cta2: 'WhatsApp Consultation',
      },
      calculator: {
        title: 'Free Cash Flow Health Score',
        description: 'Calculate your cash flow health score based on DSO, DPO, DIO, and current ratio',
      },
      services: {
        tag: 'Our Services',
        title: 'Complete Cash Flow Solutions',
        description: 'From analysis to optimization, we help you unlock trapped cash and improve working capital efficiency',
        items: [
          {
            title: 'Cash Flow Analysis',
            description: 'Comprehensive analysis of your cash conversion cycle, working capital needs, and cash flow patterns',
            features: ['DSO Analysis', 'DPO Optimization', 'DIO Management', 'Working Capital Assessment'],
          },
          {
            title: 'Payment Terms Negotiation',
            description: 'Help you negotiate better payment terms with suppliers and customers to improve cash flow',
            features: ['Supplier Negotiation', 'Customer Terms', 'Payment Schedule', 'Discount Strategies'],
          },
          {
            title: 'Inventory Optimization',
            description: 'Reduce inventory holding costs and improve inventory turnover to free up cash',
            features: ['Inventory Analysis', 'Turnover Optimization', 'Safety Stock', 'ABC Analysis'],
          },
        ],
      },
    },
    company: {
      meta: {
        title: 'Company | INFINITE GZ',
        description: 'Learn about INFINITE GZ SDN BHD - Malaysia\'s leading financial technology and advisory services company helping 500+ businesses optimize DSR, consolidate debt, and secure better financing.',
      },
      hero: {
        tag: 'About Us',
        title: 'We Fix Financing Problems Before Banks Say No',
        description: 'INFINITE GZ is not just another loan agent. We optimize your DSR, consolidate your debt, plan your taxes, and match you with banks that will actually approve - all before you apply. 500+ businesses trust us. Average approval rate: 84.2%. Average approval time: 21 days (vs market 45 days).',
      },
      mission: {
        tag: 'Our Mission',
        title: 'Stop Loan Rejections. Start Smart Financing.',
        description: '60% of loan applications are rejected due to DSR issues, wrong bank selection, or poor documentation. Our mission: Fix these problems BEFORE you apply. We optimize DSR, consolidate debt, create professional business plans, and match you with banks that will approve - not reject. Result: 84.2% approval rate vs market average 40%.',
      },
      values: {
        tag: 'Our Values',
        title: 'What Makes Us Different',
        items: [
          {
            icon: '🎯',
            title: 'Fix First, Apply Later',
            description: 'We don\'t just submit applications. We optimize your DSR, consolidate debt, and improve your profile BEFORE matching you with banks. Real result: 60-80% approval rate boost.'
          },
          {
            icon: '🤖',
            title: 'AI-Powered Matching',
            description: 'Our system analyzes 50+ banks\' real standards and matches you with the 3 banks most likely to approve. Not just a product list - intelligent recommendations based on your exact profile.'
          },
          {
            icon: '💰',
            title: 'Zero Upfront Fees',
            description: 'No hidden costs. We only charge when you succeed. Core services: Success fee only. Complementary services (DSR optimization, debt consolidation, tax planning): FREE for loan clients.'
          },
          {
            icon: '📊',
            title: 'Real Results, Real Numbers',
            description: '500+ clients. RM 500M+ facilitated. Average 21-25 days approval (vs market 45 days). Average RM 150K extra loan capacity unlocked. We show you the data, not empty promises.'
          }
        ]
      },
      cta: {
        title: 'Ready To Transform Your Financing?',
        description: 'Join 500+ businesses that secured better financing through INFINITE GZ. Get a free DSR assessment, or book a consultation to discuss your specific needs.'
      }
    },
    news: {
      meta: {
        title: 'News | INFINITE GZ',
        description: 'Latest news, client success stories, and milestones from INFINITE GZ. See how we help 500+ businesses secure better financing with 84.2% approval rate vs market 40%.',
      },
      hero: {
        tag: 'Success Stories & Updates',
        title: 'Real Clients, Real Results: How We Help Businesses Get Approved',
        description: '500+ clients. RM 500M+ facilitated. 84.2% approval rate vs market 40%. Average approval time: 21-25 days vs market 45 days. Average extra loan capacity unlocked: RM 150K per client. Read how we helped businesses overcome DSR issues, consolidate debt, and secure financing that traditional agents couldn\'t deliver.',
      },

      items: [
        { title: 'RM 500M+ Financing Facilitated: 500+ Clients Successfully Secured Loans', date: '2024-12', category: 'Milestone' },
        { title: 'CreditPilot AI Upgrade: 98% Match Accuracy, 2-Minute Analysis', date: '2024-12', category: 'Product' },
        { title: 'Success Story: Manufacturing SME Got RM 500K After DSR Optimization', date: '2024-11', category: 'Case Study' },
        { title: 'Partnership with 50+ Banks: Real-Time Data Access for Better Matching', date: '2024-11', category: 'Partnership' },
        { title: 'INFINITE GZ Wins Fintech Award: Recognition for Innovation in Loan Matching', date: '2024-10', category: 'Recognition' },
        { title: 'Expanding Network: Now Covering 50+ Financial Institutions', date: '2024-10', category: 'Growth' },
      ],
    },

    resources: {
      meta: {
        title: 'Resources | INFINITE GZ',
        description: 'Comprehensive loan database covering 50+ Malaysian banks, real-time rate monitoring, and AI-powered optimization tools. RM 500M+ loans facilitated, 98% match accuracy, 84.2% approval rate vs market 40%.',
      },
      hero: {
        tag: 'Technology Infrastructure',
        title: '50+ Banks. Real-Time Data. 98% Match Accuracy. This Is How We Get You Approved.',
        description: 'Most loan agents use outdated product lists. We use real-time data from 50+ Malaysian banks, AI algorithms that analyze 8 banks\' DSR standards, and intelligent matching that shows you which banks will actually approve - not reject. Real result: 84.2% approval rate vs market average 40%. Average approval time: 21-25 days vs market 45 days. Average extra loan capacity unlocked: RM 150K per client.',
      },

      stats: [
        { number: '50+', title: 'Financial Institutions', description: 'Real-time data from Maybank, CIMB, Hong Leong, RHB, Public Bank, digital banks, and fintech companies. We know which bank approves which profile. Real example: Self-employed RM 10K/month, RHB recognizes 60% (RM 6K), Hong Leong recognizes 90% (RM 9K). We recommend Hong Leong. Result: Loan capacity difference RM 496K over 10 years.' },
        { number: 'RM 500M+', title: 'Loans Facilitated', description: 'Total financing secured for 500+ clients. Average approval time: 21-25 days (vs market 45 days). Average extra loan capacity unlocked: RM 150K per client. Real case: 40-year retail business got RM 2M loan after our optimization, revenue increased 3x in 2 years.' },
        { number: '2 Min', title: 'Analysis Time', description: 'Get your DSR calculated, bank recommendations, and approval probability - all in 2 minutes. No hard credit checks. No wasted time applying to wrong banks. Real result: Client with DSR 75% got matched with Hong Leong (allows up to 80%), approved RM 400K loan.' },
        { number: '98%', title: 'Match Accuracy', description: 'AI-powered precision based on real bank standards. We analyze your exact profile (DSR, income type, employment) and match you with banks that will approve - not reject. Real result: 84.2% approval rate vs market average 40%. Wrong bank choice = 3 months wasted + negative CCRIS record.' },
      ],
      timeline: {
        tag: 'Our Journey',
        title: 'From Vision To Results: How We Built The System That Gets Clients Approved',
        milestones: [
          { year: '2020', title: 'Company Founded', description: 'Started with a vision: Stop loan rejections. Fix DSR first, then match with the right bank. Built comprehensive database of Malaysian bank standards. Real problem identified: 60% of loan applications rejected due to DSR issues, wrong bank selection, or poor documentation.' },
          { year: '2021', title: 'First 1,000 Clients', description: 'Reached first major milestone: 1,000 clients secured financing. Average approval rate: 75% (vs market 40%). Proved our "fix first, apply later" approach works. Real result: Clients with DSR 75% got optimized to 50%, approval rate increased 60-80%.' },
          { year: '2022', title: 'CreditPilot Launch', description: 'Introduced AI-powered loan matching system. Real-time analysis of 50+ banks. 2-minute DSR calculation. 98% match accuracy. Result: Approval rate increased to 84.2%. Real case: Self-employed client got matched with Hong Leong (recognizes 90% income), approved RM 500K loan.' },
          { year: '2023', title: 'RM 100M+ Facilitated', description: 'Crossed significant financing milestone: RM 100M+ in loans facilitated. Average approval time: 21-25 days (vs market 45 days). Client satisfaction: 4.9/5.0. Real impact: Average RM 150K extra loan capacity unlocked per client through DSR optimization and smart bank matching.' },
          { year: '2024', title: '50+ Institution Network & RM 500M+', description: 'Expanded to comprehensive coverage: 50+ financial institutions. RM 500M+ facilitated. 500+ clients. 84.2% approval rate. Average RM 150K extra loan capacity unlocked per client. Real success: 40-year retail business got RM 2M loan after our optimization, revenue increased 3x in 2 years.' },
        ],
      },
    },
    careers: {
      meta: {
        title: 'Careers | INFINITE GZ',
        description: 'Join our team and help build the future of financial services in Malaysia. 500+ clients. RM 500M+ facilitated. 84.2% approval rate. Fast-growing fintech company.',
      },
      hero: {
        tag: 'Join Our Team',
        title: 'Build The Future Of Finance',
        description: 'Join a fast-growing fintech company that\'s transforming how Malaysian SMEs and individuals access financing. 500+ clients. RM 500M+ facilitated. 84.2% approval rate vs market 40%. We\'re building the future of financial services - and we need talented people like you.',
      },
      benefits: {
        tag: 'Benefits',
        title: 'Why Work With Us',
        items: [
          {
            icon: '',
            title: 'Competitive Salary',
            description: 'Above market rate compensation with performance bonuses. Real impact: Help 500+ clients secure financing, unlock RM 500M+ in loans.',
          },
          {
            icon: '',
            title: 'Health Benefits',
            description: 'Comprehensive medical and dental insurance. Plus: Mental health support, wellness programs.',
          },
          {
            icon: '',
            title: 'Learning & Development',
            description: 'Continuous training in fintech, AI/ML, financial analysis. Real growth: From junior to senior in 2-3 years (based on our team\'s track record).',
          },
          {
            icon: '',
            title: 'Flexible Work',
            description: 'Hybrid work arrangement with flexible hours. Work-life balance: 2-3 days WFH per week, flexible start times.',
          },
          {
            icon: '',
            title: 'Team Events',
            description: 'Regular team building activities, company events, quarterly celebrations. Real culture: Monthly team lunches, annual company trip.',
          },
          {
            icon: '',
            title: 'Career Growth',
            description: 'Clear career progression path in a fast-growing company. Real opportunity: 40% of our senior roles filled internally in 2024.',
          },
        ],
      },

      jobs: {
        tag: 'Open Positions',
        title: 'Join Our Growing Team',
        positions: [
          { title: 'Senior Financial Advisor', department: 'Advisory', location: 'Kuala Lumpur', type: 'Full-time' },
          { title: 'AI/ML Engineer', department: 'Technology', location: 'Kuala Lumpur / Remote', type: 'Full-time' },
          { title: 'Business Development Manager', department: 'Sales', location: 'Kuala Lumpur', type: 'Full-time' },
          { title: 'Digital Marketing Specialist', department: 'Marketing', location: 'Remote', type: 'Full-time' },
          { title: 'Accountant', department: 'Finance', location: 'Kuala Lumpur', type: 'Full-time' },
          { title: 'Customer Success Manager', department: 'Operations', location: 'Kuala Lumpur', type: 'Full-time' },
        ],
      },
      cta: {
        title: "Don't See Your Role?",
        description: "We're always looking for talented individuals who share our vision of transforming financial services in Malaysia. Send us your CV and tell us how you can contribute to our mission of helping 500+ businesses secure better financing.",
      },
    },
    faq: {
      hero: {
        tag: 'FAQ',
        title: 'Frequently Asked Questions',
        description: 'Real questions from real clients. Get honest answers about fees, success rates, timelines, and what happens if things don\'t work out.',
      },
      items: [
        {
          question: 'How do you charge? Is it really zero upfront fees?',
          answer: 'Yes, 100% zero upfront fees. We only charge after your loan is approved and disbursed. Our fee is a percentage of the loan amount (typically 1-3%), clearly stated before you commit. If your loan is rejected, you pay nothing. For DSR optimization and debt consolidation services, completely FREE for loan clients.',
        },
        {
          question: 'Will my loan definitely be approved? What if it fails?',
          answer: 'We can\'t guarantee 100% approval (no one can), but we significantly improve your chances. Based on 500+ clients: 60-80% approval rate after DSR optimization (vs 20-30% without optimization). If your loan is rejected after our optimization, you pay nothing. We also offer 1 FREE revision for our optimization plans.',
        },
        {
          question: 'Will using your services affect my credit record (CCRIS/CTOS)?',
          answer: 'No negative impact. We only do soft checks (no hard inquiries that affect your score). Our DSR optimization actually IMPROVES your credit score by helping you pay debts on time and reduce utilization. However, when you apply for loans through us, banks will do hard checks (this is normal and necessary).',
        },
        {
          question: 'What documents do I need to prepare?',
          answer: 'Basic documents: (1) IC copy, (2) Latest 3 months payslips or bank statements (for income proof), (3) Latest 3 months credit card statements and loan statements (for debt analysis), (4) EPF statement (if available). For self-employed: Business registration, 6 months bank statements, tax returns. We\'ll send you a complete checklist after initial consultation.',
        },
        {
          question: 'How long does the whole process take?',
          answer: 'DSR assessment: Instant (free online calculator) or 24 hours (detailed analysis). Debt restructuring plan: 3-5 business days. Loan application submission: 1-2 days (after you provide documents). Bank approval: Average 21-25 days (vs market average 45 days). Fastest case: 18 days. Slowest: 35 days.',
        },
        {
          question: 'What if the bank rejects my loan after I paid your fee?',
          answer: 'If rejection is due to our optimization quality issues (not your business fundamentals), we refund 50% of the fee. However, if rejection is due to factors beyond our control (e.g., sudden job loss, new debts you took on, bank policy changes), standard terms apply. We\'re transparent about this upfront.',
        },
        {
          question: 'Do you work with all banks in Malaysia?',
          answer: 'Yes, we work with 50+ licensed financial institutions: All major banks (Maybank, CIMB, Hong Leong, RHB, Public Bank, etc.), digital banks (GXBank, Boost Bank, etc.), and licensed fintech companies. We only work with Bank Negara Malaysia regulated institutions. No loan sharks, no illegal lenders.',
        },
        {
          question: 'I\'m self-employed. Can you still help me?',
          answer: 'Yes! In fact, self-employed clients benefit most from our services. Different banks recognize self-employed income differently (RHB: 60%, Hong Leong: 90%). We help you choose banks that recognize more of your income. Real example: RM 10K/month income, RHB recognizes RM 6K, Hong Leong recognizes RM 9K. Loan capacity difference: RM 496K over 10 years.',
        },
        {
          question: 'Can I use your services if I have bad credit (low CCRIS/CTOS score)?',
          answer: 'Yes, but results take longer. We provide credit repair strategies (3-6 months improvement plan). However, if your score is below 600, we recommend fixing credit first before applying for new loans. We can help with both: credit repair + loan application.',
        },
        {
          question: 'Do you provide services in multiple languages?',
          answer: 'Yes, our website and services are available in English, Chinese (中文), and Bahasa Malaysia. Our consultants can communicate in all three languages. WhatsApp consultations available in your preferred language.',
        },
      ],
      cta: {
        title: 'Still have questions?',
        description: 'Contact us via WhatsApp for a free consultation. No obligation, no pressure. We answer all your questions honestly.',
        contactUs: 'WhatsApp Us',
        visitPortal: 'Start Free Assessment',
      },
    },
    privacy: {
      hero: {
        tag: 'Privacy Policy',
        title: 'Privacy Policy',
        lastUpdated: 'Last updated',
      },
      sections: {
        introduction: {
          title: '1. Introduction',
          content: 'INFINITE GZ ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.',
        },
        informationWeCollect: {
          title: '2. Information We Collect',
          description: 'We may collect information about you in a variety of ways:',
          items: [
            'Personal identification information (name, email address, phone number)',
            'Financial information (credit card statements, loan details, income information)',
            'Usage data (how you interact with our website and services)',
            'Device information (IP address, browser type, operating system)',
          ],
        },
        howWeUse: {
          title: '3. How We Use Your Information',
          description: 'We use the information we collect to:',
          items: [
            'Provide, maintain, and improve our services',
            'Process your requests and transactions',
            'Send you technical notices and support messages',
            'Respond to your comments and questions',
            'Monitor and analyze trends and usage',
          ],
        },
        dataSecurity: {
          title: '4. Data Security',
          content: 'We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.',
        },
        yourRights: {
          title: '5. Your Rights',
          description: 'You have the right to:',
          items: [
            'Access your personal information',
            'Correct inaccurate information',
            'Request deletion of your information',
            'Object to processing of your information',
            'Request data portability',
          ],
        },
        contactUs: {
          title: '6. Contact Us',
          description: 'If you have questions about this Privacy Policy, please contact us at:',
          email: 'Email: privacy@infinitegz.com',
          whatsapp: 'WhatsApp: +60 12 345 6789',
        },
      },
    },
    terms: {
      hero: {
        tag: 'Terms of Service',
        title: 'Terms of Service',
        lastUpdated: 'Last updated',
      },
      sections: {
        acceptance: {
          title: '1. Acceptance of Terms',
          content: 'By accessing and using INFINITE GZ\'s website and services, you accept and agree to be bound by the terms and provision of this agreement.',
        },
        useLicense: {
          title: '2. Use License',
          content: 'Permission is granted to temporarily access the materials on INFINITE GZ\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.',
        },
        serviceDescription: {
          title: '3. Service Description',
          content: 'INFINITE GZ provides financial advisory, credit analysis, loan matching, and related financial services. We strive to provide accurate information, but we do not guarantee the accuracy, completeness, or usefulness of any information on our website.',
        },
        userResponsibilities: {
          title: '4. User Responsibilities',
          description: 'You agree to:',
          items: [
            'Provide accurate and complete information',
            'Maintain the security of your account credentials',
            'Use our services only for lawful purposes',
            'Not attempt to gain unauthorized access to our systems',
          ],
        },
        limitation: {
          title: '5. Limitation of Liability',
          content: 'INFINITE GZ shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.',
        },
        modifications: {
          title: '6. Modifications',
          content: 'INFINITE GZ reserves the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.',
        },
        contact: {
          title: '7. Contact Information',
          description: 'If you have any questions about these Terms of Service, please contact us:',
          email: 'Email: legal@infinitegz.com',
          whatsapp: 'WhatsApp: +60 12 345 6789',
        },
      },
    },
    legal: {
      hero: {
        tag: 'Legal Notice',
        title: 'Legal Notice',
        description: 'Important legal information about INFINITE GZ and our services.',
      },
      sections: {
        companyInfo: {
          title: 'Company Information',
          description: 'INFINITE GZ is a financial advisory and technology services company operating in Malaysia.',
          registeredAddress: 'Registered Address: [To be updated]',
          businessRegistration: 'Business Registration: [To be updated]',
          licenseNumber: 'License Number: [To be updated]',
        },
        regulatory: {
          title: 'Regulatory Compliance',
          content: 'INFINITE GZ operates in compliance with applicable Malaysian financial regulations. We are committed to maintaining the highest standards of professional conduct and regulatory compliance.',
        },
        disclaimer: {
          title: 'Disclaimer',
          content: 'The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.',
        },
        intellectualProperty: {
          title: 'Intellectual Property',
          content: 'All content on this website, including text, graphics, logos, and software, is the property of INFINITE GZ or its content suppliers and is protected by copyright and other intellectual property laws.',
        },
        thirdPartyLinks: {
          title: 'Third-Party Links',
          content: 'Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites.',
        },
        contact: {
          title: 'Contact',
          description: 'For legal inquiries, please contact:',
          email: 'Email: legal@infinitegz.com',
          whatsapp: 'WhatsApp: +60 12 345 6789',
        },
      },
    },
    dsrGuide: {
      hero: {
        tag: 'DSR Guide',
        title: 'Loan Rejected? Your DSR Is Too High. Here\'s How We Fix It.',
        description: '60% of loan applications in Malaysia are rejected because DSR exceeds bank limits. Multiple credit cards, personal loans, car loans crushing your cash flow? We show you exactly how to restructure your debts and get approved.',
      },
      sections: {
        whatIsDSR: {
          title: 'What is DSR? Why Banks Reject You',
          description: 'Debt Service Ratio (DSR) = Your Monthly Debt Payments ÷ Your Monthly Net Income × 100%. Banks in Malaysia use DSR to assess if you can afford new loans. Real problem: Different banks have vastly different DSR limits (40%-80%), and most people don\'t know which bank to apply to.',
          formula: 'DSR = (Total Monthly Debt Commitments / Net Monthly Income) × 100%',
          formulaLabel: 'DSR Formula:',
        },
        whyMatters: {
          title: 'Why Your DSR Gets You Rejected',
          description: 'When your DSR is too high, banks see you as high risk and reject your application. Here\'s what happens:',
          items: [
            'Maybank: Rejects if DSR > 40-70% (varies by income level)',
            'CIMB: Rejects if DSR > 65-75%',
            'Hong Leong: Allows up to 60-80% (most lenient)',
            'RHB: Rejects if DSR > 60-70%',
            'Wrong bank choice = 3 months wasted + negative CCRIS record',
          ],
        },
        thresholds: {
          title: 'DSR Standards by Major Malaysian Banks (2025)',
          excellent: {
            title: 'Excellent (0-30%)',
            description: 'All banks approve. Best interest rates. Highest loan amounts. Example: RM 10K income, RM 2K debt = 20% DSR = Approved everywhere.',
          },
          good: {
            title: 'Good (31-50%)',
            description: 'Most banks approve. Competitive rates. Real example: RM 8K income, RM 3.5K debt = 44% DSR = CIMB approves, Maybank may reject.',
          },
          acceptable: {
            title: 'Acceptable (51-70%)',
            description: 'Only lenient banks approve (Hong Leong, some digital banks). Higher interest rates. Real example: RM 6K income, RM 4.2K debt = 70% DSR = Only Hong Leong approves.',
          },
          highRisk: {
            title: 'High Risk (71%+)',
            description: 'All banks reject. Must reduce debt first. Real example: RM 5K income, RM 4K debt = 80% DSR = Rejected everywhere. Solution: Debt consolidation to reduce monthly payment.',
          },
        },
        howToImprove: {
          title: 'How We Help You Improve DSR: 4-Step Process',
          items: [
            {
              title: 'Step 1: Diagnose Your Current DSR',
              description: 'We calculate your exact DSR using real bank standards. We check: credit cards, personal loans, car loans, housing loans. Real case: Mr. Zhang, RM 2,744/month income, RM 1,980/month debt = 72% DSR = Rejected by 3 banks.',
            },
            {
              title: 'Step 2: Design Debt Restructuring Plan',
              description: 'We consolidate high-interest debts (credit cards 18%, personal loans 12%) into one lower-interest loan (6-8%). Result: Monthly payment drops from RM 5,000 to RM 3,200. DSR improves from 75% to 48%.',
            },
            {
              title: 'Step 3: Match You With The Right Bank',
              description: 'We analyze which bank will approve you based on your profile. Example: Self-employed with RM 10K/month, RHB only recognizes 60% (RM 6K), but Hong Leong recognizes 90% (RM 9K). Loan capacity difference: RM 496K over 10 years.',
            },
            {
              title: 'Step 4: Apply & Follow Up',
              description: 'We help you prepare documents, submit application, and follow up with bank. Average approval time: 21-25 days (vs market average 45 days). Some clients approved in 18 days.',
            },
          ],
        },
        calculate: {
          title: 'Real Example: How We Fixed Mr. Zhang\'s DSR',
          description: 'Before: RM 2,744/month income, RM 1,980/month debt (3 credit cards), DSR = 72%. Rejected by Maybank, CIMB, RHB. After: We consolidated 3 cards into 1 loan, monthly payment → RM 1,590, DSR → 58%. Result: CIMB approved RM 30K. Savings: RM 10K/year in interest.',
          tryCalculator: 'Calculate Your DSR Now',
          loanAnalyzer: 'Get Free Bank Recommendations',
        },
      },
    },
    taxTips: {
      hero: {
        tag: 'Tax Optimization',
        title: 'SME Owners Losing Money On Taxes? We Help You Save RM 3,000-15,000 Legally.',
        description: 'Tax filing messy? Don\'t know how to claim deductions? Afraid of LHDN audits? Accounts don\'t match reality? We help Malaysian SME owners organize accounts, plan tax strategies, and legally save thousands through proper 15% deductions and business structure optimization.',
      },
      sections: {
        commonDeductions: {
          title: 'Common SME Tax Problems We Fix',
          items: [
            {
              title: '1. Messy Tax Filing & Missing Deductions',
              description: 'Problem: Don\'t know what expenses are deductible. Missing RM 3,000-8,000 in deductions every year. Real example: RM 100K revenue, paying RM 24K tax. After our optimization: RM 15K tax (saving RM 9K through proper deductions).',
            },
            {
              title: '2. Accounts Don\'t Match Reality',
              description: 'Problem: Cash transactions not recorded, receipts lost, books don\'t reflect actual business. LHDN audit risk. Solution: We organize 6-12 months of records, reconcile accounts, prepare proper documentation.',
            },
            {
              title: '3. Not Using 15% Business Deduction',
              description: 'Problem: Eligible for 15% tax deduction on business expenses but not claiming properly. Real example: RM 50K eligible expenses → RM 7,500 tax savings. We help identify and document all eligible expenses.',
            },
            {
              title: '4. Afraid of LHDN Audits',
              description: 'Problem: Worried about LHDN questioning your returns. Solution: We ensure all claims are properly documented and compliant. We prepare audit-ready files and represent you if needed.',
            },
            {
              title: '5. Business Structure Not Tax-Optimized',
              description: 'Problem: Running as sole proprietorship when partnership or Sdn Bhd would save taxes. Real example: RM 200K profit, sole prop pays RM 30K tax, Sdn Bhd pays RM 24K (saving RM 6K). We analyze and recommend optimal structure.',
            },
          ],
        },
        strategies: {
          title: 'How We Help: 4-Step Tax Optimization Process',
          items: [
            {
              title: 'Step 1: Diagnose Your Current Tax Situation',
              description: 'We review your past 2-3 years tax returns, identify missed deductions, analyze business structure, and calculate potential savings. Real case: Found RM 12K in unclaimed deductions for a retail business owner.',
            },
            {
              title: 'Step 2: Plan Tax Strategy for Current Year',
              description: 'We create a tax planning roadmap: which expenses to maximize, when to make purchases, how to structure transactions. Example: Timing equipment purchases before year-end to maximize deductions. Result: Save RM 3,000-8,000 in current year.',
            },
            {
              title: 'Step 3: Organize Accounts & Prepare Documentation',
              description: 'We organize your receipts, reconcile bank statements, prepare proper accounting records, and ensure all deductible expenses are properly documented. We prepare LHDN-ready files. Timeline: 2-4 weeks for 12 months of records.',
            },
            {
              title: 'Step 4: File Returns & Annual Review',
              description: 'We file your tax returns correctly with LHDN, ensure all deductions are claimed, and provide annual review to optimize next year\'s strategy. Ongoing support: We review your tax situation quarterly and adjust strategy as needed.',
            },
          ],
        },
        creditCardBenefits: {
          title: '15% Business Expense Deduction: What You Can Claim',
          description: 'Many SME owners don\'t realize these expenses are deductible at 15%:',
          items: [
            'Office rent, utilities, internet (up to 15% of business income)',
            'Business equipment, computers, software (capital allowance)',
            'Marketing expenses, advertising, website development',
            'Professional fees (accounting, legal, consulting)',
            'Business travel, meals with clients (with proper receipts)',
            'Employee salaries, EPF contributions, training costs',
          ],
          note: 'Real example: RM 200K revenue, RM 50K eligible expenses → RM 7,500 tax savings. Our accounting service helps you track and document all these expenses properly.',
        },
        professionalHelp: {
          title: 'Why Choose Our Tax Optimization Service',
          description: 'We\'re not just tax filers - we\'re tax strategists. We help you save money legally while staying compliant with LHDN. Our team includes qualified accountants and tax advisors who understand Malaysian tax laws.',
          bookConsultation: 'Book Free Consultation',
          whatsappUs: 'WhatsApp Us',
        },
        disclaimer: {
          title: '⚠️ Important Disclaimer',
          content: 'This information is for general guidance only and should not be considered as professional tax advice. Tax laws and regulations may change, and individual circumstances vary. All tax strategies are legal and compliant with LHDN regulations. Please consult with a qualified tax advisor or the Inland Revenue Board of Malaysia (LHDN) for specific advice. We ensure all our recommendations comply with Malaysian tax laws.',
        },
      },
    },
    cardManagement: {
      hero: {
        tag: 'Professional Credit Card Management',
        title: 'Stop Missing Payments. Save RM 1,200-5,000/Year. Boost Your Credit Score.',
        subtitle: 'Malaysian credit card debt: RM 50.7B. RM 551.8M overdue (1.1%). Late payment = RM 150-300 penalty + credit score damage. We fix it.',
        benefits: [
          { icon: '', value: 'RM 500-2,000/year', label: 'Avoid Late Payment Penalties' },
          { icon: '', value: 'RM 800-3,000/year', label: 'Maximize Rewards & Cashback' },
          { icon: '', value: '50-100 Points', label: 'Credit Score Improvement (650 → 780)' },
        ],
        cta1: 'Free WhatsApp Consultation',
        cta2: 'View Pricing',
        socialProof: 'Over 500 clients | Managing 1,000+ cards | Total savings RM 600,000+',
      },
      painPoints: {
        tag: 'Common Problems',
        title: 'Are You Facing These Credit Card Challenges?',
        subtitle: 'Malaysian credit card debt: RM 50.7B | Overdue debt: RM 551.8M (1.1%)',
        points: [
          {
            icon: '',
            title: 'Forgot to Pay',
            description: 'Multiple cards, different due dates, easily miss payments',
            impact: 'Late fee RM 150-300/time + Credit score damage',
          },
          {
            icon: '',
            title: 'Don\'t Know How to Optimize',
            description: 'Don\'t understand card rewards, wasted points, high annual fees',
            impact: 'Lost RM 800-3,000/year in benefits',
          },
          {
            icon: '',
            title: 'Multiple Card Chaos',
            description: 'Manage 2-3 cards, confused statements, stress',
            impact: 'Minimum payment trap, 18% annual interest',
          },
        ],
        stats: [
          { value: 'RM 50.7B', label: 'Total Card Debt' },
          { value: '18% p.a.', label: 'Maximum Interest' },
          { value: 'RM 551.8M', label: 'Overdue Amount' },
          { value: '50,000+', label: 'Youths in Debt' },
        ],
      },
      solutions: {
        tag: 'Our Solutions',
        title: 'Professional 5-in-1 Service',
        subtitle: 'Comprehensive credit card management to maximize your benefits',
        services: [
          {
            icon: '',
            title: 'Payment Reminder Service',
            description: '3-tier reminder system ensures you never miss a payment',
            benefits: [
              'WhatsApp + SMS + Email triple notification',
              'Reminder 7/3/1 days before due date',
              'Monthly statement review',
              'Overdue alert system',
            ],
          },
          {
            icon: '',
            title: 'Payment-On-Behalf Service',
            description: 'We pay on your behalf to ensure timely payments',
            benefits: [
              '100% on-time payment guarantee',
              'Processed within 2 business days',
              'Automatic deduction from designated account',
              'Monthly reconciliation report',
            ],
          },
          {
            icon: '',
            title: 'Purchase-On-Behalf Service',
            description: 'Use the optimal card to maximize rewards',
            benefits: [
              'Intelligent card selection system',
              'Maximize cashback and points',
              '50/50 revenue share model',
              'Transparent transaction records',
            ],
          },
          {
            icon: '',
            title: 'Card Optimization',
            description: 'Spending pattern analysis and strategy recommendations',
            benefits: [
              'Monthly spending analysis',
              'Optimal card usage recommendations',
              'Annual fee waiver negotiation',
              'Rewards redemption reminders',
            ],
          },
          {
            icon: '',
            title: 'Debt Management Consultation',
            description: 'DSR analysis and debt consolidation recommendations',
            benefits: [
              'Free DSR calculation',
              'Debt consolidation plan',
              'Credit score improvement strategy',
              'Lower interest rate solutions',
            ],
          },
        ],
      },
      caseStudies: {
        tag: 'Success Stories',
        title: 'Real Client Results',
        subtitle: 'See how our clients save thousands annually',
        before: 'Before',
        after: 'After',
        cases: [
          {
            client: 'Mr. Wang',
            type: 'Individual | 4 Cards',
            before: 'Monthly payment RM 2,500 | Confused management | Frequent late fees',
            after: 'Consolidated loan + Smart management | Automated payments | Optimized rewards',
            savings: 'Saved RM 3,200',
            period: 'Within 12 months',
          },
          {
            client: 'Ms. Li',
            type: 'Professional | High Spending',
            before: 'Monthly RM 8,000 spending | Using wrong cards | Points wasted',
            after: 'Optimized card strategy | Maximized rewards | Annual fee waived',
            savings: 'Extra RM 5,000/year',
            period: 'Ongoing',
          },
          {
            client: 'ABC Company',
            type: 'SME | 10 Corporate Cards',
            before: 'Employee reimbursement chaos | High admin costs | Overspending',
            after: 'Centralized management | Automated reconciliation | Spending control',
            savings: 'Saved RM 12,000/year',
            period: 'First year',
          },
        ],
      },
      pricing: {
        tag: 'Transparent Pricing',
        title: 'Flexible Plans for Every Need',
        subtitle: 'Choose the plan that works best for you',
        recommended: 'Most Popular',
        plans: {
          individual: {
            label: 'Individual',
            options: [
              {
                name: 'Success-Based',
                price: '50/50 Split',
                period: 'Pay only when you save',
                features: [
                  'No upfront fees',
                  '50% of all savings/benefits',
                  'Annual fee waivers',
                  'Cashback & rewards optimization',
                  'Interest savings',
                  'Late fee avoidance',
                  'Quarterly billing',
                ],
                recommended: true,
                cta: { text: 'Get Started', link: 'https://wa.me/60123456789' },
              },
              {
                name: 'Monthly Subscription',
                price: 'RM 99/month',
                period: 'Up to 3 cards',
                features: [
                  'Additional RM 30/card',
                  'Payment reminder service',
                  'Card optimization',
                  'Monthly spending analysis',
                  'Annual fee negotiation',
                  'Payment-on-behalf: +RM 50/month',
                ],
                cta: { text: 'Subscribe Now', link: 'https://portal.infinitegz.com/card-management' },
              },
              {
                name: 'FREE for Loan Clients',
                price: 'RM 0',
                period: 'First 12 months',
                features: [
                  'All standard services included',
                  'Must have active loan with us',
                  '50% discount after 12 months',
                  'Full payment reminder service',
                  'Basic card optimization',
                ],
                cta: { text: 'Check Eligibility', link: '/creditpilot' },
              },
            ],
          },
          corporate: {
            label: 'Corporate',
            options: [
              {
                name: 'Tier 1',
                price: 'RM 299/month',
                period: 'RM 0-20K monthly spending',
                features: [
                  'Up to 10 corporate cards',
                  'Centralized management',
                  'Monthly reconciliation',
                  'Basic spending analytics',
                  'Employee card tracking',
                ],
                cta: { text: 'Contact Sales', link: 'https://wa.me/60123456789' },
              },
              {
                name: 'Tier 2',
                price: 'RM 599/month',
                period: 'RM 20-50K monthly spending',
                features: [
                  'Up to 25 corporate cards',
                  'Advanced analytics',
                  'Dedicated account manager',
                  'Custom spending limits',
                  'Automated approvals',
                  'Quarterly business review',
                ],
                recommended: true,
                cta: { text: 'Contact Sales', link: 'https://wa.me/60123456789' },
              },
              {
                name: 'Tier 3',
                price: 'RM 999/month',
                period: 'RM 50-100K monthly spending',
                features: [
                  'Unlimited corporate cards',
                  'Premium support',
                  'Custom integrations',
                  'Advanced fraud detection',
                  'Multi-entity management',
                  'White-label reporting',
                ],
                cta: { text: 'Contact Sales', link: 'https://wa.me/60123456789' },
              },
            ],
          },
          loan: {
            label: 'Loan Clients',
            options: [
              {
                name: 'Complimentary',
                price: 'FREE',
                period: 'First 12 months',
                features: [
                  'All individual services included',
                  'Priority support',
                  'Free debt consultation',
                  '50% discount after 12 months',
                  'Exclusive loan client benefits',
                ],
                recommended: true,
                cta: { text: 'Learn More', link: '/advisory' },
              },
            ],
          },
        },
      },
      socialProof: {
        stats: [
          { value: '500+', label: 'Happy Clients' },
          { value: '1,000+', label: 'Cards Managed' },
          { value: 'RM 600K+', label: 'Total Savings' },
          { value: '98%', label: 'Satisfaction Rate' },
        ],
        badges: [
          'PDPA 2010 Compliant',
          'Licensed Financial Advisor',
          'Bank Negara Approved',
          'ISO 27001 Certified',
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you need to know',
        questions: [
          {
            question: 'How do you charge?',
            answer: 'We offer 3 pricing models: (1) Success-based: 50% of savings generated, no upfront fees. (2) Monthly subscription: RM 99/month for up to 3 cards. (3) FREE for loan clients for first 12 months. Choose what works best for you.',
          },
          {
            question: 'Is payment-on-behalf service safe?',
            answer: 'Absolutely. We only debit from your designated account with your authorization. All transactions are recorded and you receive monthly reconciliation reports. We maintain RM 1M professional indemnity insurance.',
          },
          {
            question: 'How do I cancel the service?',
            answer: 'You can cancel anytime with 30 days written notice. For subscription plans, you get a prorated refund. For success-based plans within commitment period, early termination fee applies (50% of remaining fees or RM 500, whichever is lower).',
          },
          {
            question: 'Do you support all banks in Malaysia?',
            answer: 'Yes, we support all major banks including Maybank, CIMB, Public Bank, Hong Leong, RHB, Am Bank, and digital banks. We can manage cards from any licensed financial institution in Malaysia.',
          },
          {
            question: 'Will you see my credit card number?',
            answer: 'No. We only need your card statements (which show last 4 digits). For payment-on-behalf service, payments are made directly from your bank account to the credit card issuer. We never store full card numbers.',
          },
          {
            question: 'What if I miss a payment even with your service?',
            answer: 'We provide 3-tier reminders and best-effort service. However, if you don\'t maintain sufficient funds in your account, we cannot be held liable. Our liability is capped at RM 10,000 or 12 months\' fees, whichever is lower.',
          },
          {
            question: 'Can I use this for my company cards?',
            answer: 'Yes! We have dedicated corporate plans starting from RM 299/month. Perfect for SMEs managing multiple employee cards. Includes centralized management, reconciliation, and spending analytics.',
          },
        ],
      },
      finalCta: {
        title: 'Ready to Start Saving?',
        subtitle: 'Join 500+ satisfied clients and start maximizing your credit card benefits today',
        cta1: 'WhatsApp Free Consultation',
        cta2: 'Book Appointment',
        relatedTitle: 'Related Services',
        relatedServices: [
          { name: 'CreditPilot (Smart Loan Matching)', link: '/creditpilot' },
          { name: 'Loan Advisory', link: '/advisory' },
          { name: 'Financial Optimization', link: '/solutions' },
        ],
      },
    },
    loanCalculator: {
      header: {
        title: 'Loan Affordability Quick Check',
        subtitle: 'Find out how much you can borrow based on your income and current commitments. Instant DSR calculation.',
        notice: '⚠️ Important: This is ONLY a quick affordability estimate based on DSR. Malaysian banks assess many other factors including: CTOS/CCRIS credit history, repayment behaviour, employment stability, age, monthly savings, existing credit limits, loan purpose, property value (if applicable), and internal bank policies. Your DSR being acceptable does NOT guarantee loan approval.',
      },
      input: {
        monthlyIncome: {
          label: 'Monthly Gross Income (RM)',
          placeholder: 'e.g. 5000',
          help: 'Your total monthly income before deductions',
        },
        existingCommit: {
          label: 'Existing Monthly Loan Commitments (RM)',
          placeholder: 'e.g. 2000 (all loans, cards, overdraft combined)',
          helper: 'Include all loan instalments, credit card minimum payments, overdraft, etc.',
        },
        maxDSR: {
          label: 'Maximum DSR You Wish to Maintain (%)',
          helper: 'Malaysian banks typically approve loans up to 60% DSR, but 40–50% is more comfortable. Adjust based on your preference.',
        },
        proposedLoan: {
          label: 'Proposed Loan Amount (RM)',
          placeholder: 'e.g. 100000',
          helper: 'The amount you plan to borrow. Adjust to see impact on affordability.',
        },
        loanRate: {
          label: 'Loan Annual Interest Rate (%)',
          helper: 'Typical rates: Housing 3–5%, Personal Loan 6–9%, Car 3–4%',
        },
        loanTenure: {
          label: 'Loan Tenure (Years)',
          helper: 'Longer tenure = lower monthly payment but higher total interest.',
        },
      },
      btn: {
        calculate: 'Calculate Affordability',
        reset: 'Reset',
        ctosOptimizer: 'Get Deeper Analysis with CTOS Optimizer',
        exploreMore: 'Explore More Tools',
      },
      result: {
        title: 'Affordability Analysis Results',
        current_label: 'Current State',
        after_label: 'After This Loan',
        monthlyCommit: 'Monthly Commitment (RM)',
        currentDSR: 'Your Current DSR',
        newLoanPayment: 'New Loan Monthly Payment (RM)',
        totalNewCommit: 'Total Monthly Commitment (RM)',
        newDSR: 'Your New DSR',
        loanAmount: 'Loan Amount (RM)',
        interestRate: 'Annual Interest Rate (%)',
        tenure: 'Loan Tenure (Years)',
        monthlyInstalment: 'Monthly Instalment (RM)',
        totalInterest: 'Total Interest Over Tenure (RM)',
        rec_comfortable: 'Excellent! Your DSR is healthy and you have good borrowing capacity. This loan is very affordable from a DSR perspective. However, banks will also review your credit history, repayment behaviour, and employment stability. Consider exploring deeper analysis with our CTOS Optimizer if you want a more realistic approval assessment.',
        rec_manageable: 'Good! Your DSR is within a comfortable range from a lending perspective. This loan is affordable and you should have reasonable monthly cashflow. However, actual approval depends on your complete credit profile (CTOS/CCRIS, payment history, employment type, age, etc.). Proceed cautiously and consult our CTOS Optimizer for a more detailed assessment.',
        rec_tight: 'Your DSR will be tight at {{dsr}}%. While banks may technically approve loans with DSR up to 60%, your approval will heavily depend on other credit factors: excellent CTOS/CCRIS record, stable employment, strong repayment history, and existing credit facilities. We strongly recommend using our CTOS Optimizer to see a more realistic picture before applying.',
        rec_highRisk: '⚠️ Your DSR will be very high at {{dsr}}%. While banks may approve loans with DSR up to 60-70% in exceptional cases, this is unlikely without an excellent credit profile. Banks will scrutinize: CTOS/CCRIS score, payment discipline, employment sector, age, savings ratio, and existing credit limits. Approval probability is LOW. We recommend exploring debt consolidation or refinancing options first to reduce your existing commitments. Talk to our advisors.',
        rec_critical: '🛑 Your DSR will be extremely high at {{dsr}}%. Banks are VERY unlikely to approve this loan. Even with an exceptional credit profile, DSR above 70% is considered extremely risky by most lenders. You MUST restructure your existing debt first (consolidation, settlement, or refinancing). Please speak with our financial advisors immediately to explore options for reducing your current commitments before applying for any new loan.',
      },
      dsr_status: {
        comfortable: 'Comfortable',
        manageable: 'Manageable',
        tight: 'Tight',
        highRisk: 'High Risk',
        critical: 'Critical',
      },
      disclaimer: '**Disclaimer:** This calculator provides DSR estimation only and is for educational purposes. Results do NOT constitute loan approval or guarantee. Actual loan approval depends on: (1) Your CTOS/CCRIS credit report, (2) Payment history and credit discipline, (3) Employment stability and sector, (4) Age and experience, (5) Monthly savings and cash reserve, (6) Existing credit facilities and limits, (7) Loan purpose and property value (if applicable), (8) Bank\'s internal credit policy and risk appetite. Each bank has different standards and may approve or reject your application based on factors beyond DSR alone. This tool is NOT a substitute for professional financial advice.',
    },
    loanOptimizer: {
      header: {
        title: 'CTOS Loan Optimisation Diagnosis',
        subtitle: 'Analyze your current debts and get a detailed before/after restructuring plan. Upload your CTOS report or enter your loans manually. Discover how much you can save monthly and improve your overall credit position.',
        notice: 'ℹ️ About This Tool: This optimizer assesses your loans across multiple factors that Malaysian banks consider: DSR, credit score (CTOS/CCRIS), repayment history, employment stability, age, savings ratio, existing credit limits, and loan purpose. Results show realistic restructuring scenarios, but actual approval depends on which banks you approach and their individual policies.',
      },
      input: {
        concern_label: 'What is your primary financial concern?',
        concern_a: 'I want to lower my monthly loan payments',
        concern_b: 'I want to pay off my debts faster',
        concern_c: 'I want to improve my credit score and approval odds for a major purchase (home, car)',
        concern_d: 'I want to reduce total interest paid',
        concern_e: 'I want financial flexibility and breathing room each month',
        ctos_label: 'Upload CTOS Report (Optional)',
        ctos_helper: 'Upload your latest CTOS report in PDF or image format. This helps us extract credit score, loan details, and repayment history automatically. Or, enter your loans and credit info manually below.',
        creditScore_label: 'Your CTOS Credit Score (or estimated)',
        creditScore_helper: 'You can find this on your CTOS report or estimate based on payment history.',
        repaymentBehaviour_label: 'Your Typical Repayment Behaviour',
        repayment_excellent: 'Excellent (Always on-time, no defaults)',
        repayment_good: 'Good (Mostly on-time, rare late payments)',
        repayment_fair: 'Fair (Some late payments or defaults)',
        repayment_poor: 'Poor (Frequent late payments or defaults)',
        employment_label: 'Employment Status',
        employment_private: 'Full-time (Private sector)',
        employment_govt: 'Full-time (Government/Public sector)',
        employment_self: 'Self-employed / Business owner',
        employment_parttime: 'Part-time / Freelance',
        employment_retired: 'Retired / Pensioner',
        employment_unemployed: 'Unemployed / Job seeker',
        sector_label: 'Industry Sector',
        sector_helper: 'Banks assess risk differently by sector. Some sectors are considered more stable.',
        age_label: 'Age (Years)',
        savings_label: 'Approximate Monthly Savings / Cash Reserve (RM)',
        savings_helper: 'Banks view savings as a sign of financial discipline and emergency buffer.',
        income_label: 'Monthly Gross Income (RM)',
        otherCommit_label: 'Other Monthly Commitments (RM)',
        targetDSR_label: 'Target DSR You Want to Achieve (%)',
        targetDSR_helper: 'Comfortable range: 40–50%',
      },
      table: {
        type: 'Loan Type',
        bank: 'Bank / Institution',
        outstanding: 'Outstanding Balance (RM)',
        rate: 'Interest Rate (% p.a.)',
        tenure: 'Remaining Tenure (Years)',
        payment: 'Monthly Payment (RM)',
        action: 'Action',
      },
      loanType: {
        housing: 'Housing Loan',
        car: 'Car Loan',
        personal: 'Personal Loan',
        creditCard: 'Credit Card',
        overdraft: 'Overdraft',
        business: 'Business Loan',
        others: 'Others',
      },
      btn: {
        addLoan: 'Add Another Loan',
        deleteRow: 'Delete',
        analyze: 'Analyze & Compare Plans',
        reset: 'Reset',
        contactAdvisor: 'Contact Our Advisors for Implementation',
        exploreMore: 'Explore More Tools',
      },
      result: {
        title: 'Optimisation Analysis & Restructuring Plan',
        current_label: 'Your Current Credit Position',
        after_label: 'After Restructuring',
        monthlySavings: 'Monthly Savings (RM)',
        approvalOddsImprovement: 'Approval Odds Improvement',
        creditHealthExplain: 'Your credit health score ({{score}}/100) is based on: (1) DSR ratio - {{dsrPts}} points, (2) CTOS/CCRIS score - {{ctosPts}} points, (3) Repayment behaviour - {{repayPts}} points, (4) Employment stability - {{empPts}} points, (5) Age profile - {{agePts}} points. A higher score improves your chances with most banks.',
        approvalFactors: 'Banks assess: (40%) DSR - your monthly payment capacity, (35%) Credit health - your credit score and repayment record, (25%) Stability - your employment type, age, and savings. Restructuring lowers your DSR and improves approval odds, but won\'t change your credit history retroactively. Building a clean repayment record takes time.',
        secured_title: 'Secured Loans (No Change Recommended)',
        secured_note: 'These loans typically have better rates and secured status, so we don\'t recommend consolidating them.',
        unsecured_title: 'Unsecured Loans (Recommended for Consolidation)',
        consolidation_proposal: 'Consolidate into 1 personal loan @ 7% p.a. over 7 years',
        rec_a: 'By consolidating your {{count}} unsecured loans into a single personal loan at 7% p.a., you can reduce your monthly commitment from RM {{current}} to RM {{optimized}}, saving you RM {{savings}} per month. Your DSR improves from {{currentDSR}}% to {{optimizedDSR}}%, and your approval odds increase from {{currentOdds}}% to {{optimizedOdds}}%. This is the best option for your goal. However, actual approval depends on the specific bank\'s policy and their assessment of your credit history.',
        rec_b: 'If you use the RM {{savings}} monthly savings to pay extra towards your consolidated loan (using the avalanche or snowball method), you could become debt-free {{months}} months faster. This aggressive payoff strategy would significantly reduce total interest paid. Your improved DSR and reduced debt will also enhance your approval odds for future loans.',
        rec_c: 'Consolidating now improves your DSR from {{currentDSR}}% to {{optimizedDSR}}%, raising your approval odds from {{currentOdds}}% to {{optimizedOdds}}%. For a major purchase (home or car), a lower DSR is critical. Additionally, starting a clean repayment record with the consolidated loan over the next 6-12 months will further strengthen your credit profile. Plan your major purchase timeline accordingly.',
        rec_d: 'Consolidating saves you approximately RM {{totalInterestSaved}} in total interest over {{consolidationTenure}} years compared to your current structure. The lower interest rate (7% vs. your current weighted average of {{currentWeightedRate}}%) is the key driver. Combined with the improved DSR and approval odds, this is a compelling financial move.',
        rec_e: 'Reducing your monthly commitment from RM {{current}} to RM {{optimized}} (RM {{savings}} savings) gives you much-needed breathing room. This flexibility allows you to handle emergencies, invest, or increase savings without feeling financially stretched. Your approval odds also improve to {{optimizedOdds}}%, opening doors for future opportunities.',
        approvalNote: 'While this analysis provides a realistic assessment based on multiple factors, actual loan approval is determined by each bank individually. Different banks have different risk appetites, policies, and criteria. Factors such as employment sector volatility, relationship history with the bank, and macroeconomic conditions also play a role. We recommend consulting with multiple banks or using our advisor service for personalized guidance.',
      },
      disclaimer: '**Disclaimer:** This optimizer provides analysis based on typical Malaysian bank lending criteria and is for educational purposes. Results do NOT constitute actual loan approval or guarantee. Approval depends on: (1) Your actual CTOS/CCRIS report, (2) Payment history, (3) Employment verification, (4) Income documentation, (5) Property appraisal (if applicable), (6) Bank\'s internal risk models, (7) Macroeconomic factors. Each bank has proprietary credit scoring models. We do not guarantee accuracy of consolidation terms or rates. This is NOT professional financial advice. Consult licensed financial advisors for personalized recommendations.',
    },
    cardSimulator: {
      header: {
        title: 'Credit Card Debt Payoff Simulator',
        subtitle: 'Compare three payoff strategies: minimum payments, aggressive repayment, or a consolidation loan. See how long it takes, how much interest you pay, and which option fits your cashflow.',
        notice: 'Important: This simulator focuses on credit card debt scenarios. It helps you understand payoff time and interest cost, but does not represent actual bank offers. Consolidation loan rates and approvals depend on your credit profile and bank policies.',
      },
      input: {
        cards_title: 'Your Credit Cards',
        cards_helper: 'List each card with its current balance, interest rate, and minimum monthly payment. The simulator will calculate payoff time and interest under different strategies.',
        strategy_title: 'Payoff Strategies Settings',
        aggressiveBudget_label: 'Monthly Budget for Aggressive Repayment (RM)',
        aggressiveBudget_helper: 'Total amount you can commit every month to clear all cards. The simulator will allocate this using a debt snowball or avalanche method.',
        consolRate_label: 'Consolidation Loan Interest Rate (% p.a.)',
        consolTenure_label: 'Consolidation Loan Tenure (Years)',
        consol_helper: 'The consolidation strategy assumes you take one personal loan to fully settle all listed card balances, then pay only this fixed instalment every month.',
      },
      table: {
        cardName: 'Card Name / Bank',
        balance: 'Current Balance (RM)',
        rate: 'Interest Rate (% p.a.)',
        minPayment: 'Minimum Monthly Payment (RM)',
      },
      btn: {
        addCard: 'Add Another Card',
        deleteRow: 'Delete',
        simulate: 'Simulate 3 Strategies',
        reset: 'Reset',
        ctosOptimizer: 'Need a Full CTOS-Based Plan?',
        exploreTools: 'Back to All Tools',
      },
      result: {
        title: 'Payoff Strategy Comparison',
        totalBalance: 'Total Current Card Balance',
        totalMinPayment: 'Total Minimum Monthly Payment',
        table_header_strategy: 'Strategy',
        table_header_months: 'Months to Clear',
        table_header_years: 'Approx. Years',
        table_header_totalInterest: 'Total Interest Paid (RM)',
        table_header_monthlyPayment: 'Monthly Payment (RM)',
        table_header_comment: 'Comment',
        strategy1_name: 'Minimum Payments Only',
        strategy2_name: 'Aggressive Repayment (Budget RM {{budget}})',
        strategy3_name: 'Consolidation Loan @ {{rate}}% for {{tenure}} years',
        strategy1_comment: 'Slowest and most expensive. You will pay the highest total interest and remain in debt for the longest time.',
        strategy2_comment: 'Faster and cheaper than minimum payments. The more budget you commit, the more interest you save and sooner you become debt-free.',
        strategy3_comment: 'Simplifies multiple cards into one fixed instalment. Usually lowers monthly payment but extends tenure. Good for cashflow control, but check actual bank rates and fees.',
        bestOption_title: 'Which Strategy Is Best?',
        bestOption_text: 'For pure savings, the strategy with lowest total interest is best. For cashflow, the strategy with lowest monthly payment is easier to manage. Choose based on your priority, or discuss with our advisors.',
      },
      disclaimer: 'This simulator is for estimation and educational purposes only. It does not reflect exact bank charges, late payment fees, or promotional balance transfer offers. Actual consolidation loan rates and approval depend on your credit profile, CTOS/CCRIS report, and each bank\'s policy.',
    },
    propertyRenovationPlanner: {
      header: {
        title: 'Property & Renovation Loan Structuring',
        subtitle: 'Plan your property purchase and renovation financing. Compare two strategies: separate loans (home + renovation) or combined structure. See monthly payments, approval odds, and total interest cost.',
        notice: 'Important: This calculator assumes standard Malaysian mortgage terms (35 years max for home loan, higher rates for renovation loans). Actual approval depends on property valuation, your credit profile (CTOS/CCRIS), DSR, and bank policies. Renovation loans typically carry higher interest rates than home loans.',
      },
      input: {
        propertyPrice_label: 'Property Price (RM)',
        downPayment_label: 'Down Payment (RM)',
        downPayment_helper: 'Typically 10-20% for Malaysian banks. Higher down payment = lower LTV = better approval odds.',
        renoBudget_label: 'Renovation Budget (RM)',
        renoFinType_label: 'How do you want to finance renovation?',
        renoFinType_personal: 'Personal Loan (Higher rate, ~10% p.a., max 7-10 years)',
        renoFinType_renoLoan: 'Renovation Loan (Special product, ~7-8% p.a., max 15 years)',
        renoFinType_topup: 'Top-up Home Loan (Same as home loan rate, ~3.5% p.a., up to LTV limit)',
        ctosScore_label: 'Your CTOS Credit Score (or estimate)',
        existingDebt_label: 'Your Current Monthly Debt Commitments (RM)',
        existingDebt_helper: 'Include car loans, personal loans, credit card minimums, etc. (excluding proposed property loan)',
        income_label: 'Your Monthly Gross Income (RM)',
        homeLoanTenure_label: 'Home Loan Tenure (Years)',
        homeRate_label: 'Expected Home Loan Rate (% p.a.)',
        homeRate_helper: 'Current typical range: 3.2–3.8% depending on bank and credit profile.',
      },
      btn: {
        calculate: 'Compare Financing Options',
        reset: 'Reset',
        contactAdvisor: 'Contact Our Mortgage Advisor',
        tools: 'Back to All Tools',
      },
      result: {
        title: 'Financing Options Comparison',
        strategy1_name: 'Separate Home + Renovation Loans',
        strategy2_name: 'Combined Home Loan (Property + Renovation)',
        strategy1_note: 'Separate loans allow different rates and tenures for property and renovation portions.',
        strategy2_note: 'Combined structure only available if bank allows. Check with your bank if renovation amount within LTV limits.',
        recommendation: '**Strategy {{bestStrategy}} is recommended** for your profile. Here\'s why: {{reason}}. Your approval odds are {{odds}}% with either strategy, but {{savingsReason}}.',
        considerations: 'Important Considerations: Your LTV is {{ltv}}%. {{ltvComment}} Your DSR with the new loans will be {{dsr}}%. {{dsrComment}}',
      },
      disclaimer: 'This calculator is for estimation purposes and does not constitute a loan offer. Actual approval depends on: (1) Property valuation by bank\'s appointed valuer, (2) Your credit report (CTOS/CCRIS), (3) Income verification and stability, (4) Employment details, (5) Bank\'s internal policies and risk models, (6) Current market interest rates. Interest rates shown are typical ranges and may vary. Renovation loans may have additional conditions (e.g., renovation timeline, contractor approval). Always verify final terms with your chosen bank.',
    },
    settlementAnalyzer: {
      header: {
        title: 'Debt Settlement & Negotiation Impact Analyzer',
        subtitle: 'Understand how settling outstanding debts (partial or full) affects your credit score, DSR, and future loan approval odds. Compare negotiation strategies and their long-term impact.',
        notice: 'Settlement impacts your CTOS/CCRIS record differently based on negotiation outcome. Full settlement or formal arrangement may improve future approval odds. Partial settlement may show as \'resolved\' but still affects credit history. Consult a licensed debt counselor before negotiating.',
      },
      input: {
        income_label: 'Monthly Gross Income (RM)',
        otherDebt_label: 'Other Monthly Debt Obligations (RM)',
        ctosScore_label: 'Current CTOS Score (or estimated)',
        settleDate_label: 'Target Settlement Date',
        assessmentDate_label: 'When do you plan to apply for a new loan?',
      },
      table: {
        debtType: 'Debt Type',
        creditor: 'Creditor / Bank',
        balance: 'Current Outstanding Balance (RM)',
        paymentStatus: 'Last Payment Status',
        monthsDefault: 'Months in Default',
      },
      debtType: {
        creditCard: 'Credit Card',
        personal: 'Personal Loan',
        overdraft: 'Overdraft',
        business: 'Business Loan',
        other: 'Other',
      },
      paymentStatus: {
        ontime: 'On-time',
        late30: 'Late 30 days',
        late60: 'Late 60+ days',
        default: 'In default',
      },
      scenario: {
        name_label: 'Scenario Name',
        amount_label: 'Settlement Amount (RM)',
        method_label: 'Payment Method',
        method_lumpsum: 'Lump-sum (one-time payment)',
        method_installment: 'Installment (monthly payments)',
        arrangement_label: 'Settlement Arrangement Type',
        arrangement_full: 'Full Settlement (no future obligations)',
        arrangement_partial: 'Partial Settlement (negotiated reduction)',
        arrangement_formal: 'Formal Arrangement (registered with creditor)',
        installmentMonths_label: 'Number of Installment Months',
      },
      btn: {
        addDebt: 'Add Another Debt',
        deleteRow: 'Delete',
        addScenario: 'Add Settlement Scenario',
        analyze: 'Analyze Settlement Impact',
        reset: 'Reset',
        negotiateGuide: 'Get Negotiation Guide',
        advisors: 'Connect with Financial Advisors',
        again: 'Try Another Scenario',
      },
      result: {
        title: 'Settlement Impact Analysis',
        scenario_title: 'Scenario Analysis',
        settlementDetails: 'Settlement Details',
        immediateDSR: 'Immediate DSR Impact',
        ctosRecovery: 'CTOS Score Recovery',
        futureApproval: 'Future Approval Odds',
        totalCost: 'Total Cost Comparison',
        insight: 'Settling your debt now improves your DSR immediately and can recover your CTOS score within 6–12 months. {{bestScenario}} is the most advantageous option, allowing you to qualify for new loans with higher approval odds.',
      },
      disclaimer: 'This analysis estimates CTOS recovery and approval odds based on typical Malaysian bank criteria. Actual recovery time and approval odds vary by bank, settlement amount, payment history, and macroeconomic factors. A settlement agreement must be negotiated directly with your creditor—consult a licensed debt counselor or financial advisor before proceeding. This is NOT legal or financial advice.',
    },
    expenseTracker: {
      header: {
        title: 'Expense Tracker & Budget Dashboard',
        subtitle: 'Track your daily expenses, set monthly budgets by category, and see where your money goes. Identify saving opportunities and improve your financial discipline.',
      },
      input: {
        date_label: 'Date',
        category_label: 'Category',
        amount_label: 'Amount (RM)',
        description_label: 'Description (Optional)',
      },
      category: {
        food: 'Food & Dining',
        transport: 'Transport',
        utilities: 'Utilities',
        shopping: 'Shopping',
        entertainment: 'Entertainment',
        health: 'Health & Wellness',
        education: 'Education',
        miscellaneous: 'Miscellaneous',
        other: 'Other',
      },
      budget: {
        category: 'Category',
        monthlyBudget: 'Monthly Budget (RM)',
        spentYTD: 'Spent This Month (RM)',
        percentUsed: '% Used',
        remaining: 'Remaining (RM)',
      },
      btn: {
        addExpense: 'Add Expense',
        saveBudget: 'Save Monthly Budgets',
        export: 'Export to CSV',
        download: 'Download Monthly Report',
        savingsGoal: 'Set Savings Goal',
        tools: 'Back to All Tools',
      },
      dashboard: {
        totalIncome: 'Total Income This Month',
        totalExpenses: 'Total Expenses This Month',
        remainingBalance: 'Remaining Balance',
        savingsRate: 'Savings Rate',
        currentMonth: 'Current Month Overview',
        budgetVsActual: 'Budget vs. Actual',
      },
      result: {
        takeaway: 'You\'ve spent RM {{total}} this month across {{categories}} categories. {{savings_opportunity}}',
        highestCategory: 'Your top spending is {{category}} at RM {{amount}} ({{percent}}% of total)',
        mostFrequent: 'You made {{count}} transactions this month. Your average transaction was RM {{average}}.',
        budgetStatus: 'You\'re on track with {{onTrack}} categories, over budget in {{overBudget}} categories',
        savingRecommendation: 'If you reduce {{category}} by {{percent}}%, you could save RM {{savings}} this month.',
      },
      disclaimer: 'This tracker is for personal use only. Data is stored locally in your browser and is not shared with third parties unless you export it. Regularly review and update your budgets to match your spending habits.',
    },
    insurancePlanner: {
      header: {
        title: 'Insurance Coverage & Protection Planner',
        subtitle: 'Assess your insurance needs across life, health, disability, critical illness, and property. Calculate recommended coverage amounts and compare coverage scenarios with estimated annual premiums.',
        notice: 'This planner provides estimated coverage recommendations based on general financial planning principles. Actual insurance needs vary by personal circumstances, family situation, and risk tolerance. Consult a licensed insurance advisor for personalized quotation and policy selection.',
      },
      input: {
        age_label: 'Your Age (Years)',
        gender_label: 'Gender',
        smoking_label: 'Smoking Status',
        health_label: 'General Health Status',
        dependents_label: 'Number of Dependents (Children, Spouse, Parents)',
        spouseIncome_label: 'Spouse\'s Annual Income (RM, if applicable)',
        income_label: 'Your Monthly Gross Income (RM)',
        debts_label: 'Total Outstanding Debts (Home, Car, Personal Loans, RM)',
        assets_label: 'Total Assets (Cash, Property, Investments, RM)',
        homeOwnership_label: 'Home Ownership Status',
        homeValue_label: 'Estimated Home Value (RM)',
        goal_label: 'What is your primary insurance goal?',
        lifePreference_label: 'Preferred Life Insurance Type',
        healthPreference_label: 'Health Insurance Priority',
        disabilityPreference_label: 'Include Disability / Income Protection Insurance?',
      },
      gender: {
        male: 'Male',
        female: 'Female',
        preferNot: 'Prefer Not to Say',
      },
      smoking: {
        non: 'Non-smoker',
        smoker: 'Smoker',
        ex: 'Ex-smoker',
      },
      health: {
        excellent: 'Excellent',
        good: 'Good',
        fair: 'Fair',
        poor: 'Poor',
      },
      homeOwnership: {
        ownMortgage: 'Own (with mortgage)',
        ownPaid: 'Own (fully paid)',
        renting: 'Renting',
        planning: 'Planning to buy',
      },
      goal: {
        a: 'Protect my family if I pass away',
        b: 'Cover major health events (critical illness, hospitalization)',
        c: 'Protect against income loss due to disability or job loss',
        d: 'Comprehensive coverage across all protection needs',
      },
      lifePreference: {
        term: 'Term Life (affordable, limited term)',
        whole: 'Whole Life (lifelong coverage, higher cost)',
        combination: 'Combination',
      },
      healthPreference: {
        basic: 'Basic Coverage (hospitalisation)',
        comprehensive: 'Comprehensive (include outpatient, critical illness)',
        premium: 'Premium (all-inclusive)',
      },
      disabilityPreference: {
        yes: 'Yes',
        no: 'No',
        optional: 'Optional (unsure)',
      },
      btn: {
        calculate: 'Calculate Insurance Needs',
        reset: 'Reset',
        quotes: 'Get Insurance Quotes from Partners',
        advisor: 'Consult a Licensed Advisor',
        tools: 'Back to All Tools',
      },
      result: {
        title: 'Insurance Coverage Recommendations',
        lifeInsurance: 'Life Insurance',
        healthInsurance: 'Health Insurance',
        criticalIllness: 'Critical Illness Insurance',
        disabilityInsurance: 'Disability Insurance',
        propertyInsurance: 'Property Insurance',
        protectionScore: 'Protection Coverage Score',
        totalAnnualPremium: 'Total Annual Premium',
        insight: 'Based on your profile, your recommended total annual insurance investment is RM {{total}}. This {{percent}}% of your monthly income provides comprehensive protection for your family and assets.',
      },
      disclaimer: 'This planner provides estimated coverage recommendations and premium estimates for educational purposes. Actual premiums vary by insurer, underwriting assessment, medical examination, and claims history. This is NOT a quote. Consult a licensed insurance advisor for accurate quotation, policy comparison, and customized recommendations based on your specific needs.',
    },
    savingsGoal: {
      header: {
        title: 'Savings & Investment Goal Planner',
        subtitle: 'Set your financial goals and calculate how much you need to save or invest each month to reach them. Compare different savings and investment strategies with realistic return projections.',
        notice: 'This planner provides estimates based on assumed return rates and inflation. Actual investment returns vary based on market conditions, asset allocation, and risk tolerance. Past performance is not indicative of future returns. Consult a financial advisor for personalized investment strategy.',
      },
      input: {
        goalType_label: 'What is your primary financial goal?',
        timeline_label: 'Timeline to Achieve (Months or Years)',
        priority_label: 'Goal Priority',
        goalStatus_label: 'Already Saved Towards This Goal (RM)',
        monthlySavings_label: 'Monthly Savings Available (RM)',
        allocation_label: 'How will you allocate your savings?',
        investmentStrategy_label: 'Investment Strategy (if applicable)',
        inflation_label: 'Assumed Annual Inflation Rate (%)',
      },
      goal: {
        emergency: 'Emergency Fund (3-6 months of expenses)',
        homeDownPayment: 'Home Down Payment (20% of property price)',
        vehicle: 'Vehicle Purchase (Car / Motorcycle Down Payment)',
        education: 'Education Fund (Children\'s University / Tertiary)',
        retirement: 'Retirement Fund (Corpus needed at retirement)',
        vacation: 'Vacation / Trip Fund',
        custom: 'Custom Financial Goal',
      },
      priority: {
        high: 'High',
        medium: 'Medium',
        low: 'Low',
      },
      allocation: {
        equal: 'Equal Distribution',
        priority: 'Priority-Based',
        custom: 'Custom Distribution',
      },
      investmentStrategy: {
        savings_only: 'Savings Only (0% return)',
        conservative: 'Conservative (3% annual return)',
        balanced: 'Balanced (6% annual return)',
        growth: 'Growth (8% annual return)',
        aggressive: 'Aggressive (10%+ annual return)',
      },
      btn: {
        addGoal: 'Add Goal',
        calculate: 'Calculate Savings Plan',
        reset: 'Reset',
        openAccount: 'Open Investment Account with Partner Banks',
        advisor: 'Consult a Financial Advisor',
        tools: 'Back to All Tools',
        downloadPlan: 'Download My Savings Plan (PDF)',
      },
      result: {
        title: 'Your Savings & Investment Plan',
        actionPlan: '1. Set up automatic monthly transfers of RM {{allocation}} to dedicated savings/investment accounts. 2. Review and rebalance quarterly. 3. Adjust goals if circumstances change (salary increase, bonus, life events). 4. Stay disciplined—compound growth requires consistency.',
        onTrack: 'On Track',
        tight: 'Tight',
        needsAdjustment: 'Needs Adjustment',
        achievable: 'Excellent! Your monthly savings of RM {{available}} can cover all goals with {{surplus}} RM left over each month.',
        challenging: 'Your allocated monthly savings (RM {{available}}) is {{deficit}} RM short of what\'s needed to achieve all goals simultaneously.',
      },
      disclaimer: 'This planner provides estimates based on assumed return rates, inflation, and savings discipline. Actual results depend on market performance, investment choices, and consistency of savings. Investment returns are not guaranteed. Past performance is not indicative of future results. Consult a financial advisor for personalized investment strategy and risk assessment.',
    },
    toolsHub: {
      mainTitle: 'Financial Calculators & Planning Tools',
      mainSubtitle: 'Choose the calculator that matches your financial situation. Each tool provides clear before & after comparisons to help you make informed decisions.',
      enterBtn: 'Enter Calculator',
      card1: {
        title: 'Loan Affordability Quick Check',
        desc: 'Instantly calculate your borrowing capacity and Debt Service Ratio (DSR) based on income and existing commitments. See how much you can borrow.',
      },
      card2: {
        title: 'CTOS Loan Optimisation Diagnosis',
        desc: 'Upload your CTOS report and income proof. Get a detailed before/after analysis showing how consolidation and restructuring can reduce monthly payments, lower interest, and improve your DSR.',
      },
      card3: {
        title: 'Credit Card Debt Payoff Simulator',
        desc: 'Compare three payoff strategies: minimum payments, aggressive repayment, or consolidation loan. See the time, interest, and monthly cost differences clearly.',
      },
      card4: {
        title: 'Property & Renovation Cost Planner',
        desc: 'Plan a property purchase + renovation in one tool. Compare basic, standard, and premium renovation scenarios. See upfront cash needed and monthly commitment impact.',
      },
      card5: {
        title: 'Loan Settlement & Restructuring Analyzer',
        desc: 'Calculate settlement amounts for your loans. Upload CTOS, analyze which loans to settle/consolidate, and get a before/after comparison of monthly savings.',
      },
      card6: {
        title: 'Business Cashflow & Breakeven Planner',
        desc: 'Plan your new business: set startup costs, monthly expenses, and sales projections. Compare pessimistic, base, and optimistic scenarios to understand sustainability.',
      },
      card7: {
        title: 'Debt Health Dashboard',
        desc: 'Get a comprehensive view of your total debt, monthly commitments, and DSR. See a breakdown by loan type and health classification (strong, manageable, stretched, critical).',
      },
      card8: {
        title: 'Net Worth & Leverage Snapshot',
        desc: 'Calculate your total assets, liabilities, net worth, and leverage ratio. Understand your financial position and get insights on asset/liability composition.',
      },
      footerText: 'All calculators are for estimation and educational purposes only. Results do not constitute loan approval or professional financial advice. For personalized recommendations, consult with our financial advisors.',
      footerCTA_btn: 'Need Help? Speak with an Advisor',
    },
  },
  zh: {
    nav: {
      home: '首页',
      creditpilot: '智能贷款',
      advisory: '咨询服务',
      solutions: '解决方案',
      company: '公司介绍',
      news: '新闻动态',
      resources: '资源中心',
      careers: '招聘信息',
      calculator: '贷款计算器',
      loanOptimizer: '贷款优化工具',
    },
    common: {
      learnMore: '了解更多',
      getStarted: '立即开始',
      readMore: '阅读更多',
      viewAll: '查看全部',
      contactUs: '联系我们',
      applyNow: '立即申请',
      bookConsultation: '预约咨询',
      whatsappUs: 'WhatsApp联系',
      explore: '探索',
      viewDetails: '查看详情',
      useCreditPilot: '使用 CreditPilot',
    },
        home: {
      hero: {
        title: '世界的资金，为您所用。',
        titleLine1: '世界的资金，',
        titleLine2: '为您所用。',
        subtitle: '先评估，再决定申请哪一家银行',
        description: '别再浪费时间申请会拒绝您的银行。我们分析您的DSR，优化债务结构，匹配真正会批准您的银行 - 在您申请之前。',
        descriptionLine1: '别再浪费时间申请会拒绝您的银行。我们分析您的DSR，优化债务结构，',
        descriptionLine2: '匹配真正会批准您的银行 - 在您申请之前。',
        bottomDescription: 'INFINITE GZ：专业DSR优化、债务整合，以及AI智能匹配50+马来西亚银行。零前期费用。仅成功收费。',
      },
      products: {
        tag: '我们的服务',
        title: '马来西亚企业的完整金融解决方案',
        items: [
          {
            tag: '智能分析',
            title: 'CreditPilot智能贷款',
            description: '智能贷款分析系统，通过AI驱动的匹配，从所有马来西亚银行、数字银行和金融科技公司中找到最佳贷款产品。',
            features: ['DSR 美化', '最佳利率匹配', '智能推荐', '实时分析'],
            linkText: '立即使用',
            linkUrl: 'https://portal.infinitegz.com/creditpilot',
          },
          {
            tag: '专家指导',
            title: '贷款咨询',
            description: '专业咨询服务涵盖所有贷款类型，包括房屋、汽车和商业融资，零前期费用，基于成功的定价。',
            features: ['零前期成本', '专家咨询', '成功收费', '所有贷款类型'],
            linkText: '立即咨询',
            linkUrl: 'https://portal.infinitegz.com/advisory',
          },
          {
            tag: '数字化转型',
            title: '数字化与会计服务',
            description: '传统企业的完整数字化转型，包括电子商务设置、在线商店管理、会计服务和税务优化。',
            features: ['在线商店设置', '15%税务优化', '会计服务', '业务规划'],
            linkText: '了解更多',
            linkUrl: 'https://portal.infinitegz.com/digital',
          },
        ],
      },
      content: {
        tag: '金融智能',
        title: '停止贷款被拒。获得批准。',
        description: '马来西亚60%的贷款申请因DSR超标被拒。我们诊断您的财务状况，优化债务结构，匹配真正会批准您的银行 - 在您浪费时间申请之前。',
        features: [
          {
            title: 'DSR优化',
            description: '您的DSR是75%？银行拒绝您。我们重组您的债务，清理信用卡，优化还款计划。结果：DSR降至50%，批准率提高60-80%。真实案例：月供RM 5,000 → 整合后RM 3,200。',
          },
          {
            title: '债务整合',
            description: '多张信用卡、个人贷、车贷压垮现金流？我们整合为一笔低息贷款。每月节省RM 500-2,000。真实案例：3张卡（月供RM 2,500）→ 1笔整合贷款（月供RM 1,800）。',
          },
          {
            title: '税务优化',
            description: 'SME老板在税务上亏钱？我们帮您申请15%扣税，优化业务结构，正确向LHDN报税。每年合法节省RM 3,000-15,000。真实案例：RM 100K营收 → 通过合理规划节省RM 15K税务。',
          },
          {
            title: '信用评分修复',
            description: 'CCRIS/CTOS评分太低？逾期付款、高使用率损害记录？我们提供修复策略、付款优化、3-6个月改善计划。真实案例：评分650 → 6个月后780，房贷获批。',
          },
        ],
        detailsTitle: '使用 CreditPilot 做更多事情',
        details: [
          {
            title: '智能贷款匹配',
            description: '我们的AI驱动系统分析您的财务状况，并从所有合法银行、数字银行和马来西亚金融科技公司为您匹配最佳贷款产品。根据您的独特情况获得个性化推荐。',
          },
          {
            title: '全面服务',
            description: '除了贷款，我们还提供8项互补服务，包括业务规划、保险咨询、电子商务设置、会计和信用卡管理 - 所有服务对我们的贷款客户完全免费。您的成功就是我们的成功。',
          },
          {
            title: '零前期费用',
            description: '我们仅在贷款成功批准后收费。我们的基于成功的模式确保我们完全致力于为您获得最佳结果。没有隐藏费用，没有意外 - 只有透明的服务。',
          },
          {
            title: '100%合法合规',
            description: '我们只与马来西亚国家银行监管的持牌金融机构合作。没有高利贷，没有非法借贷 - 您的财务安全是我们的首要任务。',
          },
        ],
      },
      news: {
        tag: '最新动态',
        title: '新闻与见解',
        description: '了解最新的金融新闻、贷款政策、成功案例和专家见解',
        items: [
          {
            date: '2024年12月20日',
            title: '新OPR利率变化',
            description: '马来西亚国家银行宣布新的隔夜政策利率。了解这如何影响您现有和未来的贷款申请。',
            category: '政策更新',
          },
          {
            date: '2024年12月15日',
            title: 'RM 200万商业贷款成功案例',
            description: '我们如何帮助一家传统制造企业为数字化转型和扩张计划获得融资。',
            category: '案例研究',
          },
          {
            date: '2024年12月10日',
            title: '2024年年终税务规划',
            description: '在年底截止日期临近之前，最大化您的税收减免申请并优化您的财务状况。',
            category: '财务提示',
          },
          {
            date: '2024年12月5日',
            title: '数字银行vs传统银行',
            description: '全面比较马来西亚数字银行和传统银行机构的贷款产品。',
            category: '指南',
          },
          {
            date: '2024年11月28日',
            title: '信用卡债务管理',
            description: '学习有效的策略来管理多张信用卡，避免滞纳金并优化使用率。',
            category: '财务提示',
          },
          {
            date: '2024年11月20日',
            title: '传统企业走向数字化',
            description: '一家有40年历史的零售企业如何通过数字化转型和在线销售渠道将收入提高三倍。',
            category: '案例研究',
          },
        ],
      },
      footer: {
        title: '准备优化您的财务了吗？',
        description: '加入数千家信赖INFINITE GZ实现财务成功的马来西亚企业',
        copyright: '© 2024 INFINITE GZ SDN BHD. 版权所有。',
        sections: {
          try: '在这里使用CreditPilot',
          products: '产品',
          company: '公司',
          resources: '资源',
        },
        links: {
          web: '网页',
          whatsapp: 'WhatsApp',
          phone: '电话',
          creditpilot: 'CreditPilot',
          advisory: '贷款咨询',
          creditCard: '信用卡服务',
          digital: '数字化',
          accounting: '会计服务',
          about: '关于我们',
          careers: '招聘',
          contact: '联系',
          newsUpdates: '新闻动态',
          partners: '合作伙伴',
          dsrGuide: 'DSR指南',
          taxOptimization: '税务优化',
          faq: '常见问题',
          privacy: '隐私政策',
          legal: '法律',
          terms: '条款',
        },
      },
    },
    creditpilot: {
      meta: {
        title: '智能贷款 | INFINITE GZ',
        description: 'AI智能贷款匹配系统，从所有马来西亚金融机构中找到最佳贷款产品。先看DSR，再决定申请哪家银行。',
      },
      hero: {
        tag: 'AI智能贷款匹配',
        title: '智能贷款匹配',
        subtitle: '2分钟免费分析。查看您的DSR，获得银行推荐，了解批准概率 - 在您浪费时间申请之前。',
        cta1: '开始免费分析',
        cta2: '了解更多',
      },
      capabilities: {
        tag: '为什么CreditPilot不同',
        title: '我们不只是填表 - 我们先优化您的资料',
        features: [
          {
            title: '智能银行匹配（不只是产品列表）',
            description: '问题：您不知道哪家银行会批准您。不同银行的DSR标准不同（Maybank 40-70%，Hong Leong 60-80%）。选错银行 = 被拒 + CCRIS负面记录。解决方案：我们的AI分析您的资料、DSR、收入类型，匹配3家最可能批准您的银行。真实案例：自雇月入RM 10K，RHB只认60%（RM 6K），但Hong Leong认90%（RM 9K）。我们推荐Hong Leong。结果：贷款额度差异10年相差RM 496K。',
          },
          {
            title: '申请前先优化DSR',
            description: '问题：您的DSR是75%，银行拒绝您。大多数agent只是提交申请。解决方案：我们分析您的债务，整合高息贷款，优化还款计划。结果：DSR降至50%，批准率提高60-80%。真实案例：月供RM 5,000 → 整合后RM 3,200。DSR 75% → 48%。CIMB批准RM 30K贷款。',
          },
          {
            title: '实时比较 + 批准概率',
            description: '问题：您比较利率，但不知道哪家银行会真正批准您。解决方案：我们显示利率、费用、条款，以及每家银行基于您资料的批准概率。50+马来西亚银行、数字银行、金融科技公司的实时数据。98%匹配准确率。平均批准时间：21-25天（市场平均45天）。',
          },
        ],
      },
      howItWorks: {
        tag: '工作流程',
        title: '3步轻松获取结果',
        steps: [
          {
            number: '01',
            title: '输入您的财务详情（2分钟）',
            description: '提供：月收入、现有债务（信用卡、贷款）、就业类型。所有数据加密安全。不做影响评分的硬查询。',
          },
          {
            number: '02',
            title: 'AI分析 & DSR计算',
            description: '我们的系统：(1) 使用真实银行标准计算您的精确DSR，(2) 实时分析50+机构，(3) 识别哪些银行会根据您的资料批准您，(4) 按批准概率排名。2分钟出结果。',
          },
          {
            number: '03',
            title: '获得银行推荐 & 优化方案',
            description: '获得：(1) 您当前的DSR和哪些银行会批准/拒绝，(2) 前3名银行推荐及批准概率，(3) 如需要，DSR优化方案（债务整合、还款重组），(4) 完整申请路线图。全部免费。无义务。',
          },
        ],
      },
      cta: {
        title: '准备好找到最佳贷款匹配了吗？',
        description: '立即开始免费2分钟分析。查看您的DSR，获得银行推荐，了解批准概率 - 在您浪费时间申请会拒绝您的银行之前。',
        buttonText: '开始免费分析',
      },
    },

    advisory: {
      meta: {
        title: '咨询服务 | INFINITE GZ',
        description: '8项互补业务服务对贷款客户完全免费。从DSR优化到电商建设、会计、税务规划。',
      },
      hero: {
        tag: '完整金融解决方案',
        title: '免费业务服务',
        description: '大多数贷款agent只帮您填表。我们做得更多：DSR优化、债务整合、商业计划、电商建设、会计、税务优化 - 通过我们获得贷款，全部免费。您的成功就是我们的成功。',
      },
      services: {
        tag: '8大核心服务',
        title: '您将获得：全面业务支持（全部免费）',
        items: [
          {
            num: '01',
            title: '财务优化',
            description: 'DSR优化（提高批准率60-80%）、债务整合（每月节省RM 500-2,000）、信用评分修复（6个月650 → 780）、现金流管理。真实价值：3年节省RM 10K-50K利息。',
          },
          {
            num: '02',
            title: '营销与广告',
            description: '渠道设计、营销策略、市场规划、供应商广告解决方案。帮助传统企业数字化并触达新客户。真实案例：40年零售企业通过数字营销收入增长3倍。',
          },
          {
            num: '03',
            title: '商业计划',
            description: '银行贷款专业商业计划书（价值RM 1,500-3,500）、融资方案设计、商业模式开发、市场分析。平均批准时间：21-25天（市场45天）。我们的BP客户98%批准率。',
          },
          {
            num: '04',
            title: '保险服务',
            description: '产品推荐、保险规划、覆盖面分析。确保您的企业和个人资产得到适当保护，同时优化成本。',
          },
          {
            num: '05',
            title: '电商解决方案 ⭐',
            description: '快速在线商店建设（Shopee、Lazada、自有网站）、推广策略、运营支持、渠道建设。真实案例：传统制造商通过电商收入增长3倍。2-4周完成建设。',
          },
          {
            num: '06',
            title: '会员系统',
            description: '系统设计、积分与奖励计划、福利规划。建立客户忠诚度，增加重复购买。真实价值：客户保留率提高20-30%。',
          },
          {
            num: '07',
            title: '会计与税务优化',
            description: '记账服务、向LHDN报税、财务报表、审计支持、15%税务优化。每年合法节省RM 3,000-15,000。真实案例：RM 100K营收 → 通过合理规划节省RM 15K税务。',
          },
          {
            num: '08',
            title: '信用卡管理',
            description: '付款提醒、代付、代买服务。通过避免逾期费用和最大化奖励，每年节省RM 1,200-5,000。50/50收益分成模式或RM 99/月订阅。',
          },
        ],
      },
      benefits: {
        tag: '为什么这不同',
        title: '我们不只是贷款agent - 我们是您的业务伙伴',
        items: [
          {
            icon: '',
            title: '零前期成本',
            description: '所有8项服务对贷款客户完全免费。我们只在您的贷款获批后收费。无隐藏费用，无意外。如果您的贷款被拒，您无需支付任何费用。',
          },
          {
            icon: '',
            title: '我们让您的业务符合贷款条件',
            description: '问题：传统企业无法获得贷款，因为银行看不到数字营收、完整会计或增长潜力。解决方案：我们帮您数字化、整理账务、创建商业计划、优化财务 - 让您对银行有吸引力。',
          },
          {
            icon: '',
            title: '持续支持 & 优化',
            description: '我们不会在贷款获批后消失。季度审查、年度税务规划、持续DSR监控、业务增长支持。真实案例：客户获得RM 200万贷款，我们帮助他们数字化扩张，2年收入增长3倍。',
          },
        ],
      },
      cta: {
        title: '准备好获得贷款 + 免费业务支持了吗？',
        description: '预约免费咨询。我们将评估您的贷款资格，告诉您哪些银行会批准您，并说明所有8项服务如何帮助您的业务增长 - 全部零前期成本。',
      },
    },
    solutions: {
      meta: {
        title: '解决方案 | INFINITE GZ',
        description: '为所有马来西亚企业提供金融解决方案。从贷款咨询到数字化转型。',
      },
      hero: {
        tag: '为所有马来西亚企业提供金融解决方案',
        title: '贷款解决方案',
        description: '大多数贷款agent只帮您填表。我们做得更多：DSR优化、债务整合、商业计划、电商建设、会计、税务优化 - 通过我们获得贷款，全部免费。我们让您的业务符合贷款条件，然后匹配会真正批准您的银行。零前期费用。仅基于成功的定价。',
      },
      products: [
        {
          tag: 'AI系统',
          title: 'CreditPilot',
          description: 'AI智能贷款匹配系统，分析您的财务状况，从50+马来西亚银行和金融科技公司中找到最佳贷款产品。98%匹配准确率，2分钟分析。',
          linkText: '了解更多',
        },
        {
          tag: '8项服务',
          title: '咨询服务',
          description: '全面的商业服务，包括财务优化、电商解决方案、会计、营销策略等。对贷款客户完全免费。',
          linkText: '查看所有服务',
        },
        {
          tag: '基础设施',
          title: '资源中心',
          description: '由全面的贷款数据库、实时利率监控和先进的DSR优化算法提供支持。50+机构，RM 500M+便利，服务5,000+企业。',
          linkText: '探索基础设施',
        },
      ],
      coreBusiness: {
        tag: '核心业务',
        title: '我们不只是填表 - 我们先优化您的资料，然后匹配正确的银行',
        description: '问题：60%的贷款申请因DSR太高、账目混乱或业务结构不符合银行要求而被拒。大多数agent只是提交申请。解决方案：我们分析您的DSR，优化债务结构，整理账务，创建商业计划，然后匹配会真正批准您的银行。我们与50+持牌机构合作（银行、数字银行、金融科技）- 100%合法，无非法贷款。',
        features: [
          {
            icon: '',
            title: 'DSR优化（提高批准率60-80%）',
            description: '真实案例：月供RM 5,000 → 整合后RM 3,200。DSR 75% → 48%。CIMB批准RM 30K贷款。我们在您申请前分析债务、整合高息贷款、优化还款计划。',
          },
          {
            icon: '',
            title: '智能银行匹配（不只是产品列表）',
            description: '不同银行的DSR标准不同（Maybank 40-70%，Hong Leong 60-80%）。选错银行 = 被拒 + CCRIS负面记录。我们根据您的资料匹配3家最可能批准您的银行。真实案例：自雇月入RM 10K，RHB只认60%（RM 6K），但Hong Leong认90%（RM 9K）。贷款额度差异：10年相差RM 496K。',
          },
          {
            icon: '',
            title: '商业计划（98%批准率）',
            description: '传统企业无法获得贷款，因为银行看不到增长潜力。我们创建专业商业计划，整理账务，让您对银行有吸引力。平均批准时间：21-25天（市场45天）。',
          },
          {
            icon: '',
            title: '债务整合（每月节省RM 500-2,000）',
            description: '多笔高息债务压垮现金流？我们将其整合为一笔低息月供。真实案例：3张信用卡（18%利息）→ 1笔贷款（6-8%利息）。月供下降，DSR改善，贷款批准机会增加。',
          },
          {
            icon: '',
            title: '税务优化（每年节省RM 3,000-15,000）',
            description: 'SME老板在税务上亏钱？我们帮您申请15%扣税，优化业务结构，正确向LHDN报税。真实案例：RM 100K营收 → 通过合理规划节省RM 15K税务。',
          },
          {
            icon: '',
            title: '信用评分修复（6个月650 → 780）',
            description: '低CCRIS/CTOS评分阻碍贷款？我们提供修复策略、付款优化、3-6个月改善计划。真实案例：评分650 → 6个月后780，房贷获批。',
          },
        ],
      },
      complementaryServices: {
        tag: '8大衍生业务',
        title: '8项业务服务 - 对贷款客户全部免费',
        description: '大多数贷款agent在贷款获批后消失。我们不会。我们通过8项互补服务帮助您发展业务 - 通过我们获得贷款，全部完全免费。您的成功就是我们的成功。',
        items: [
          {
            num: '01',
            title: '财务优化',
            description: 'DSR优化（提高批准率60-80%）、债务整合（每月节省RM 500-2,000）、信用评分修复（6个月650 → 780）、现金流管理。真实价值：3年节省RM 10K-50K利息。',
          },
          {
            num: '02',
            title: '营销与数字策略',
            description: '渠道设计、营销策略、市场规划、供应商广告。帮助传统企业数字化并触达新客户。真实案例：40年零售企业通过数字营销收入增长3倍。',
          },
          {
            num: '03',
            title: '商业计划',
            description: '银行贷款专业商业计划书（价值RM 1,500-3,500）、融资方案设计、商业模式开发、市场分析。平均批准时间：21-25天（市场45天）。我们的BP客户98%批准率。',
          },
          {
            num: '04',
            title: '保险服务',
            description: '产品推荐、保险规划、覆盖面分析。确保您的企业和个人资产得到适当保护，同时优化成本。',
          },
          {
            num: '05',
            title: '电商解决方案 ⭐',
            description: '快速在线商店建设（Shopee、Lazada、自有网站）、推广策略、运营支持、渠道建设。真实案例：传统制造商通过电商收入增长3倍。2-4周完成建设。',
          },
          {
            num: '06',
            title: '会员系统',
            description: '系统设计、积分与奖励计划、福利规划。建立客户忠诚度，增加重复购买。真实价值：客户保留率提高20-30%。',
          },
          {
            num: '07',
            title: '会计与税务优化',
            description: '记账服务、向LHDN报税、财务报表、审计支持、15%税务优化。每年合法节省RM 3,000-15,000。真实案例：RM 100K营收 → 通过合理规划节省RM 15K税务。',
          },
          {
            num: '08',
            title: '信用卡管理',
            description: '付款提醒、代付、代买服务。通过避免逾期费用和最大化奖励，每年节省RM 1,200-5,000。50/50收益分成模式或RM 99/月订阅。',
          },
        ],
      },
      pricing: {
        tag: '收费模式',
        title: '零前期费用',
        models: [
          {
            tag: '核心服务',
            title: '成功费',
            price: '💼',
            description: '贷款批准后收费。只在贷款成功批准和发放后收费。',
            features: ['无前期成本', '无隐藏费用', '基于成功的定价'],
          },
          {
            tag: '8项服务',
            title: '完全免费',
            price: '🎁',
            description: '对贷款客户完全免费。对贷款客户的所有8项互补服务免费。',
            features: ['财务优化', '电商解决方案', '会计及更多'],
          },
          {
            tag: '特殊合作伙伴',
            title: '50/50分成',
            price: '🤝',
            description: '利润分享模式。信用卡管理服务的利润分享。',
            features: ['收入分享', '双赢合作', '透明定价'],
          },
        ],
      },
      targetCustomers: {
        tag: '目标客户',
        title: '我们服务的对象：马来西亚SME及有债务问题的个人',
        customers: [
          {
            icon: '',
            title: '传统企业主（40-50岁）',
            description: '问题：需要贷款扩张但DSR太高、账目混乱、无数字营收。银行因看不到增长潜力而拒绝。解决方案：我们帮您数字化、整理账务、创建商业计划、优化DSR。真实案例：40年零售企业经过我们优化后获得RM 200万贷款，2年收入增长3倍。',
          },
          {
            icon: '',
            title: '中小企业（制造业、零售、餐饮）',
            description: '问题：多笔高息债务、现金流不稳定、无法获得贷款。解决方案：我们整合债务、优化DSR、创建商业计划、建设电商。真实案例：制造公司每年节省RM 10K利息，获得RM 50万贷款用于扩张。',
          },
          {
            icon: '',
            title: '高信用卡债务',
            description: '高信用卡债务客户，需要债务整合和财务优化',
          },
          {
            icon: '',
            title: '业务合作伙伴',
            description: '供应商、会员客户，需要全面的业务支持',
          },
        ],
      },
      cta: {
        title: '准备好转型您的业务了吗？',
        description: '加入5,000+通过INFINITE GZ获得更好融资的企业',
      },
    },
    creditCard: {
      meta: {
        title: '信用卡管理 | INFINITE GZ',
        description: '专业信用卡管理服务。通过智能支付提醒、优化和债务管理，每年节省RM 1,200-5,000。',
      },
      hero: {
        tag: '专业信用卡管理',
        title: '信用卡管理',
        subtitle: '马来西亚信用卡债务：RM 50.7B。RM 551.8M逾期（1.1%）。逾期付款 = RM 150-300罚款 + 信用评分受损。我们帮您解决。',
        description: '再也不会错过付款。最大化奖励。改善信用评分。专业管理一切。',
        cta1: '免费咨询',
        cta2: '计算我的潜力',
        stats: '信赖于',
        clients: '客户',
        totalLimit: '管理信用总额',
        saved: '创造总价值',
      },
      painPoints: {
        tag: '常见困境',
        title: '马来西亚信用卡用户的3大困境',
        description: '马来西亚信用卡债务：RM 50.7B。RM 551.8M逾期（1.1%）。每次逾期 = RM 150-300罚款 + 信用评分受损。高信用卡使用率 = 更高DSR = 贷款被拒。我们帮您解决所有这些问题。',
        items: [
          {
            icon: '',
            iconComponent: React.createElement(AlertTriangle, { size: 32, strokeWidth: 1.5 }),
            title: '忘记还款 = RM 150-300罚款 + 信用评分受损',
            description: '多张卡、不同还款日期，容易遗漏。每次逾期：RM 150-300罚款 + 影响CCRIS/CTOS记录 + 提高DSR。真实影响：因信用卡债务导致DSR过高，银行拒绝贷款申请。',
            data: 'RM 551.8M 逾期债务',
          },
          {
            icon: '',
            iconComponent: React.createElement(TrendingUp, { size: 32, strokeWidth: 1.5 }),
            title: '不懂优化 = 每年损失RM 800-3,000',
            description: '不了解信用卡奖励、浪费积分、高额年费。没有为每笔消费选择正确的卡 = 错失现金返还。支付不必要的年费。真实影响：每年损失RM 800-3,000的福利。',
            data: '18% 年利率陷阱',
          },
          {
            icon: '',
            iconComponent: React.createElement(Layers, { size: 32, strokeWidth: 1.5 }),
            title: '多卡混乱 = 压力 + 遗漏付款',
            description: '管理2-3张卡，混乱的账单，不同的账单日期。容易遗漏付款。高信用使用率 = 更高DSR = 贷款被拒。真实影响：因信用卡债务导致DSR 75%，银行拒绝贷款申请。',
            data: '平均每人2-3张卡',
          },
        ],
      },
      services: {
        tag: '我们的服务',
        title: '5大专业服务 - 每年节省RM 1,200-5,000并改善信用评分',
        items: [
          {
            icon: '',
            iconComponent: React.createElement(Bell, { size: 28, strokeWidth: 1.5 }),
            title: '支付提醒（每年节省RM 500-2,000）',
            description: '3级提醒系统（WhatsApp + 短信 + 电邮），到期前7/3/1天提醒。再也不会错过付款。避免每张卡RM 150-300的逾期费用。真实结果：仅逾期费用就节省RM 500-2,000/年。',
          },
          {
            icon: '',
            iconComponent: React.createElement(CreditCard, { size: 28, strokeWidth: 1.5 }),
            title: '代付服务（100%按时保证）',
            description: '我们在2个工作日内代您付款。100%按时付款保证。保护您的信用评分。避免逾期费用。每月对账报告。真实结果：信用评分改善（6个月内650 → 780）。',
          },
          {
            icon: '',
            iconComponent: React.createElement(ShoppingCart, { size: 28, strokeWidth: 1.5 }),
            title: '代购服务（最大化奖励）',
            description: '智能选卡系统。自动为每笔消费选择最佳卡，最大化现金返还和积分。50/50收益分成模式。真实结果：每年额外获得RM 800-3,000的奖励。',
          },
          {
            icon: '',
            iconComponent: React.createElement(TrendingUp, { size: 28, strokeWidth: 1.5 }),
            title: '卡片优化（每年节省RM 500-1,500）',
            description: '每月消费分析。最优用卡建议。年费豁免谈判（每张卡每年节省RM 200-800）。奖励兑换提醒。真实结果：每年节省RM 500-1,500的费用并最大化奖励。',
          },
          {
            icon: '',
            iconComponent: React.createElement(LifeBuoy, { size: 28, strokeWidth: 1.5 }),
            title: '债务管理（改善DSR和信用评分）',
            description: '免费DSR计算。债务整合建议（每月节省RM 500-2,000）。信用评分改善策略（6个月内650 → 780）。低利率解决方案。真实结果：DSR改善，贷款批准机会增加60-80%。',
          },
        ],
      },
      cases: {
        tag: '客户案例',
        title: '真实客户，真实收益',
        before: '使用前',
        after: '使用后',
        result: '年度节省',
        items: [
          {
            num: '01',
            name: '王先生',
            before: '4张卡混乱，月还RM 2,500，经常逾期',
            after: '整合贷款 + 智能管理，按时还款',
            savings: 'RM 3,200',
          },
          {
            num: '02',
            name: '李女士',
            before: '信用分650，房贷被拒，利率高',
            after: '信用优化，分数提升至780，贷款批准',
            savings: 'RM 45,000',
          },
          {
            num: '03',
            name: '陈老板',
            before: '企业卡无优化，月消费RM 30K，浪费积分',
            after: '智能代购，积分最大化，年费豁免',
            savings: 'RM 5,000+',
          },
        ],
      },
      pricing: {
        tag: '透明定价',
        title: '选择您的方案',
        plans: [
          {
            name: '个人客户',
            description: '适合个人信用卡用户',
            price: '50/50 分成',
            period: '或 RM 99/月',
            features: [
              '最多3张信用卡',
              '支付提醒',
              '卡片优化',
              '月度收益报告',
              '代付服务 +RM 50/月',
            ],
            cta: '立即开始',
            link: 'https://wa.me/60123456789',
            featured: false,
          },
          {
            name: '企业客户',
            description: '适合企业和中小企业',
            price: 'RM 299-999',
            period: '每月',
            features: [
              '4级定价',
              '专属客户经理',
              '员工卡管理',
              '季度策略审查',
              '优先支持',
            ],
            cta: '联系销售',
            link: 'https://wa.me/60123456789',
            featured: true,
          },
          {
            name: '贷款客户',
            description: '贷款客户专享',
            price: '免费',
            period: '前12个月',
            features: [
              '所有标准功能',
              '12个月后50%折扣',
              '免费服务',
              '无预付费用',
              '随时取消',
            ],
            cta: '申请贷款',
            link: '/creditpilot',
            featured: false,
          },
        ],
      },
      social: {
        stats: [
          { value: '500+', label: '客户' },
          { value: '1,000+', label: '管理卡片' },
          { value: 'RM 600K+', label: '累计节省' },
          { value: '98%', label: '满意度' },
        ],
        compliance: 'PDPA 2010 合规',
        insurance: '专业责任保险 RM 1M',
      },
      faq: {
        tag: '常见问题',
        title: '常见问题解答',
        items: [
          {
            question: '如何收费？',
            answer: '我们提供两种定价模式：1) 基于成功的50/50收益分成，无预付费用，或 2) 月度订阅，从RM 99起。贷款客户享受12个月免费服务。',
          },
          {
            question: '是否安全合规？',
            answer: '是的。我们完全遵守2010年个人数据保护法案（PDPA），维持RM 1M专业责任保险，并使用银行级加密保护您的数据。我们绝不向第三方出售您的数据。',
          },
          {
            question: '需要提供哪些信息？',
            answer: '您需要提供：1) 信用卡详情（后4位数字、银行、信用额度），2) 月度账单日期，3) 代付服务的银行账户（可选）。所有信息都经过加密并安全存储。',
          },
          {
            question: '多久能看到效果？',
            answer: '支付提醒立即开始。卡片优化在1-2个月内显示效果。信用评分改善通常需要3-6个月的持续按时还款。年费豁免可在1个月内协商。',
          },
          {
            question: '可以随时取消吗？',
            answer: '可以。订阅计划可随时取消，需提前30天通知。基于成功的计划需要6个月最低承诺。所有未付费用必须在终止后14天内结清。',
          },
        ],
      },
      cta: {
        title: '立即开始节省',
        description: '联系我们，获取您的信用卡管理策略免费咨询',
        relatedServices: '相关服务',
      },
    },
    financialOptimization: {
      meta: {
        title: '财务优化 | INFINITE GZ',
        description: '专业DSR优化服务。通过智能银行匹配和专家分析，提升贷款批准率80%+。基于8家马来西亚主流银行的真实标准。',
      },
      hero: {
        tag: '专业财务优化',
        title: '财务优化',
        subtitle: '别再申请会拒绝您的银行。我们分析您的DSR，优化债务结构，然后告诉您哪3家银行会真正批准您。',
        description: '基于8家马来西亚主流银行2025年真实标准（Maybank、CIMB、Hong Leong、RHB等）。60%的贷款申请因DSR超过银行限制而被拒。我们在您申请前修复它。平均批准率提升：60-80%。平均贷款额度增加：RM 100K-500K。',
        cta1: '免费DSR评估',
        cta2: 'WhatsApp咨询',
        stats: [
          { value: '500+', label: '成功案例' },
          { value: '8家', label: '银行标准' },
          { value: 'RM 150K', label: '平均提升' },
          { value: '60-80%', label: '批准率提升' },
        ],
      },
      coreValues: {
        tag: '核心优势',
        title: '5大专业服务 - 我们如何修复您的DSR并让您获批',
        description: '问题：您的DSR是75%，银行拒绝您。大多数agent只是提交申请。解决方案：我们先优化您的DSR，然后匹配会真正批准您的银行。',
        items: [
          {
            title: '8家银行DSR标准对比（避免选错银行 = 被拒）',
            description: '问题：不同银行的DSR标准不同。Maybank: 40-70% | CIMB: 65-75% | Hong Leong: 60-80%。选错银行 = 被拒 + CCRIS负面记录。解决方案：我们分析哪些银行会根据您的精确DSR批准您。真实案例：DSR 70%，Maybank拒绝，但Hong Leong批准。结果：成功率 +80%。',
            data: '成功率 +80%',
          },
          {
            title: '智能银行推荐系统（不只是产品列表）',
            description: '问题：您不知道哪家银行会批准您。解决方案：AI分析您的身份、收入类型、就业类型、DSR。推荐最可能批准您的3家银行。真实案例：自雇月入RM 10K，RHB只认60%（RM 6K），但Hong Leong认90%（RM 9K）。我们推荐Hong Leong。结果：贷款额度差异10年相差RM 496K。',
            data: 'AI驱动',
          },
          {
            title: '自雇收入最大化认定（60% vs 90%认定）',
            description: '问题：银行对自雇收入打折。RHB只认60%，Hong Leong认90%。月收入RM10K，认定差RM3K！解决方案：我们帮您选择认定更多收入的银行。真实案例：月入RM 10K，RHB认RM 6K，Hong Leong认RM 9K。结果：认定差异达RM5K/月，贷款额度差异10年相差RM 496K。',
            data: '认定差异达RM5K/月',
          },
          {
            title: '债务重组优化方案（每月节省RM 500-2,000）',
            description: '问题：多笔高息债务压垮现金流。3张信用卡（18%利息）、个人贷款（12%利息）。解决方案：我们将其整合为一笔低息贷款（6-8%）。真实案例：月供RM 5,000 → 整合后RM 3,200。DSR 75% → 48%。结果：月供 -RM 500-2,000，DSR改善，贷款批准机会增加。',
            data: '月供 -RM 500-2,000',
          },
          {
            title: '3年财务成长路线图（节省RM 50K-200K利息）',
            description: '问题：您获得贷款，但不知道如何优化未来融资。解决方案：我们创建3年路线图：何时再融资、如何进一步改善DSR、下一步瞄准哪些银行。真实案例：客户获得RM 50万贷款，我们帮助他们优化结构，2年后再融资，10年节省RM 20万利息。结果：节省RM 50K-200K利息。',
            data: '节省RM 50K-200K利息',
          },
        ],
      },
      painPoints: {
        tag: '常见挑战',
        title: '3大融资障碍',
        description: '这些问题阻止了数千家企业获得融资',
        items: [
          {
            title: 'DSR超标，贷款被拒',
            description: '60%的贷款申请因DSR超标被拒。不同银行标准差异巨大（40%-80%）。',
            data: 'RM 10B+ 未满足贷款需求',
          },
          {
            title: '不知道哪家银行最容易批',
            description: '8家银行标准差异巨大。选错银行 = 浪费时间 + 影响信用记录。',
            data: '错误银行=浪费3个月',
          },
          {
            title: '自雇收入被银行打折太多',
            description: '银行认定率60%-90%。月收入RM10K，可能只认RM6K-9K。',
            data: '认定差异达RM5K/月',
          },
        ],
      },
      calculator: {
        tag: '专业工具',
        title: '免费DSR评估',
        description: '基于8家马来西亚银行2025年真实标准，立即获得专业DSR分析',
      },
      cases: {
        tag: '成功案例',
        title: '真实客户，真实收益',
        description: '帮助500+客户优化DSR并成功获得融资',
        items: [
          {
            name: '张先生 - 制造业',
            age: '45岁',
            income: '月净收入 RM 2,744',
            before: 'DSR 72%，被3家银行拒绝',
            after: '清付信用卡，DSR → 58%',
            result: 'CIMB批准 RM 30K',
            savings: '每年省RM 10K利息',
            avatar: '👨‍💼',
          },
          {
            name: '李女士 - 电商老板',
            age: '35岁',
            income: '月收入 RM 13,000',
            before: 'RHB仅认定 RM 6,600 (60%)',
            after: '换Hong Leong，认定 RM 11,700 (90%)',
            result: '可贷额度差 RM 496K',
            savings: '10年省RM 200K+利息',
            avatar: '👩‍💼',
          },
          {
            name: '王先生 - 联名房贷',
            age: '40岁',
            income: '夫妻合计 RM 5,700',
            before: '单独申请DSR 110%，被拒',
            after: 'Hong Leong 50%拆分规则',
            result: 'DSR → 78%，批准 RM 400K',
            savings: '避免担保人成本 RM 20K-50K',
            avatar: '👨‍👩‍👧',
          },
        ],
      },
      faq: {
        title: '常见问题',
        items: [
          {
            question: '什么是DSR？',
            answer: 'DSR（债务偿还比率）= 月度债务 ÷ 月净收入 × 100%。这是银行评估您还款能力的关键指标。',
          },
          {
            question: '为什么不同银行的DSR限制不同？',
            answer: '每家银行的风险政策不同。Maybank对低收入客户限制40%，而Hong Leong对高收入客户可达80%。',
          },
          {
            question: '为什么自雇收入会被打折？',
            answer: '银行认为自雇收入不稳定，会打折认定。RHB仅认60%，Hong Leong认90%。',
          },
          {
            question: '你们的服务收费吗？',
            answer: '✅ 对贷款客户完全免费。我们的收入来自银行的合作佣金。',
          },
          {
            question: '需要多久能拿到评估结果？',
            answer: '免费DSR评估即时完成。完整的银行推荐和优化方案24小时内交付。',
          },
        ],
      },
      finalCta: {
        title: '准备好优化您的融资了吗？',
        description: '加入500+通过INFINITE GZ获得更好融资的企业',
        cta1: '开始免费评估',
        cta2: 'WhatsApp咨询',
      },
    },
    businessPlanning: {
      hero: {
        tag: '专业商业计划',
        title: '商业计划',
        subtitle: '85%贷款批准率 | 双语 | 7-14天交付 | 平均21-25天银行批准（市场45天）',
        stats: [
          { label: '批准率', value: '84.2%', change: '+6.5%' },
          { label: '平均批准时间', value: '21天', change: '-53%' },
          { label: '平均贷款金额', value: 'RM 500K', change: '最高RM 200万' },
          { label: '客户满意度', value: '4.9/5.0', change: '500+评价' },
        ],
        cta1: '查看套餐',
        cta2: '查看样本BP',
      },
      samples: {
        tag: '文档库',
        title: '查看您将获得的内容',
        description: '来自不同行业的真实商业计划样本。全部获得马来西亚银行批准。',
      },
      packages: {
        tag: '定价套餐',
        title: '选择您的套餐',
        description: '所有套餐包括专业格式、银行就绪文件，以及如果因BP质量问题被拒，1次免费修订。',
        mostPopular: '最受欢迎',
        delivery: '交付时间',
        getStarted: '立即开始',
        selectPackage: '选择套餐',
      },
      guarantee: {
        title: '100%满意度保证',
        description: '如果您的贷款因BP质量问题被拒（非您的业务基本面），我们退还50%费用。真实案例：客户使用我们的BP后获得RM 50万批准，而之前被拒。',
      },
      caseStudy: {
        tag: '真实转变',
        title: '从被拒到获批',
        description: '我们如何将一份被拒的申请转变为RM 50万批准。真实案例：工厂老板花2周写30页BP，银行5分钟拒绝。我们7天写出45页专业BP，21天获批RM 50万 @ 5.5%。',
      },
      faq: {
        title: '常见问题',
        items: [
          {
            question: '我不知道如何写财务预测，怎么办？',
            answer: '我们帮您写！只需提供您的历史数据（如有）和业务目标。我们的团队将创建专业的3年财务预测，包含详细假设。真实案例：制造客户提供2年销售数据，我们创建显示15%增长的预测，银行批准RM 50万。',
          },
          {
            question: '如果我付了费用后银行拒绝了我的BP怎么办？',
            answer: '我们为Professional和Premium套餐提供1次免费修订。如果拒绝是由于BP质量问题（非您的业务基本面），我们退还50%费用。真实案例：客户最初被拒，我们根据银行反馈修订BP，第二次提交获批。',
          },
          {
            question: '我可以只买财务模型而不买完整BP吗？',
            answer: '可以！我们提供独立的财务建模服务，价格RM 1,500。但是，我们推荐完整BP套餐以获得更好的银行批准机会。真实数据：完整BP批准率84% vs 仅财务模型60%。',
          },
          {
            question: '你们是否提供中文和英文版本？',
            answer: 'Basic套餐仅包括中文版本。Professional包括英文版本。Premium包括双语集成文档。真实案例：客户需要双语版本用于合资企业，Premium套餐获批RM 80万贷款。',
          },
          {
            question: '批准流程需要多长时间？',
            answer: '基于我们500+客户：平均21-25天获批（市场平均45天）。部分客户最快18天获批。最快案例：15天。我们准备银行就绪文件，加快流程。',
          },
        ],
      },
    },
    ecommerceSolutions: {
      hero: {
        tag: '平台集成服务',
        title: '电商解决方案',
        subtitle: 'Shopee | Lazada | TikTok Shop | 多渠道集成',
        stats: [
          { value: '71倍', label: 'GMV增长' },
          { value: '500%', label: '平均ROI' },
          { value: '6个平台', label: '已集成' },
          { value: '142', label: '服务客户' },
        ],
        cta1: '查看套餐',
        cta2: '查看成功案例',
      },
      platforms: {
        tag: '平台生态',
        title: '我们集成所有主要平台',
        description: '多渠道同步、统一管理、爆发式增长',
      },
      packages: {
        tag: '服务套餐',
        title: '选择您的集成套餐',
        description: '从平台集成到会计自动化的完整电商设置',
      },
      caseStudy: {
        tag: '成功案例',
        title: '真实客户成果',
        description: '我们如何通过多渠道集成帮助企业实现500% GMV增长',
      },
    },
    cashFlowOptimization: {
      hero: {
        tag: '现金流管理',
        title: '现金流优化',
        subtitle: '专业现金流分析和优化服务',
        description: '停止让现金流问题阻碍您的增长。我们分析您的DSO、DPO、DIO，并创建策略以改善现金转换周期，减少营运资金需求，释放RM 50K-500K的被困现金。',
        cta1: '开始免费评估',
        cta2: 'WhatsApp咨询',
      },
      calculator: {
        title: '免费现金流健康评分',
        description: '基于DSO、DPO、DIO和流动比率计算您的现金流健康评分',
      },
      services: {
        tag: '我们的服务',
        title: '完整现金流解决方案',
        description: '从分析到优化，我们帮助您释放被困现金并改善营运资金效率',
        items: [
          {
            title: '现金流分析',
            description: '全面分析您的现金转换周期、营运资金需求和现金流模式',
            features: ['DSO分析', 'DPO优化', 'DIO管理', '营运资金评估'],
          },
          {
            title: '付款条件谈判',
            description: '帮助您与供应商和客户谈判更好的付款条件以改善现金流',
            features: ['供应商谈判', '客户条件', '付款计划', '折扣策略'],
          },
          {
            title: '库存优化',
            description: '减少库存持有成本并改善库存周转率以释放现金',
            features: ['库存分析', '周转优化', '安全库存', 'ABC分析'],
          },
        ],
      },
    },
    company: {
      meta: {
        title: '公司介绍 | INFINITE GZ',
        description: '了解INFINITE GZ SDN BHD - 马来西亚领先的金融科技和咨询服务公司，帮助500+企业优化DSR、整合债务并获得更好的融资。',
      },
      hero: {
        tag: '关于我们',
        title: '关于我们',
        description: 'INFINITE GZ不仅仅是另一个贷款agent。我们优化您的DSR、整合您的债务、规划您的税务，并为您匹配真正会批准的银行——所有这些都在您申请之前完成。500+企业信任我们。平均批准率：84.2%。平均批准时间：21天（市场45天）。',
      },
      mission: {
        tag: '我们的使命',
        title: '停止贷款被拒。开始智能融资。',
        description: '60%的贷款申请因DSR问题、选错银行或文件不佳而被拒。我们的使命：在您申请之前修复这些问题。我们优化DSR、整合债务、创建专业商业计划，并为您匹配会批准——而非拒绝的银行。结果：84.2%批准率 vs 市场平均40%。',
      },
      values: {
        tag: '我们的价值观',
        title: '让我们与众不同的原因',
        items: [
          {
            icon: '🎯',
            title: '先修复，再申请',
            description: '我们不只是提交申请。我们优化您的DSR、整合债务，并在为您匹配银行之前改善您的档案。真实结果：批准率提升60-80%。'
          },
          {
            icon: '🤖',
            title: 'AI驱动的匹配',
            description: '我们的系统分析50+银行的真实标准，并为您匹配最可能批准的3家银行。不仅仅是产品列表——基于您的确切档案的智能推荐。'
          },
          {
            icon: '💰',
            title: '零前期费用',
            description: '无隐藏成本。我们只在您成功时收费。核心服务：仅成功费。补充服务（DSR优化、债务整合、税务规划）：对贷款客户免费。'
          },
          {
            icon: '📊',
            title: '真实结果，真实数字',
            description: '500+客户。RM 500M+促成。平均21-25天批准（市场45天）。平均释放RM 150K额外贷款额度。我们向您展示数据，而非空头承诺。'
          }
        ]
      },
      cta: {
        title: '准备改变您的融资了吗？',
        description: '加入500+通过INFINITE GZ获得更好融资的企业。获得免费DSR评估，或预约咨询以讨论您的具体需求。'
      }
    },
    resources: {
      meta: {
        title: '资源中心 | INFINITE GZ',
        description: '全面的贷款数据库覆盖50+马来西亚银行、实时利率监控和AI驱动的优化工具。促成RM 5亿+贷款，98%匹配准确度，84.2%批准率 vs 市场40%。',
      },
      hero: {
        tag: '技术基础设施',
        title: '资源中心',
        description: '大多数贷款agent使用过时的产品列表。我们使用50+马来西亚银行的实时数据、分析8家银行DSR标准的AI算法，以及智能匹配系统，向您展示哪些银行会真正批准——而非拒绝。真实结果：84.2%批准率 vs 市场平均40%。平均批准时间：21-25天 vs 市场45天。平均释放额外贷款额度：每位客户RM 150K。',
      },

      stats: [
        { number: '50+', title: '金融机构', description: '来自Maybank、CIMB、Hong Leong、RHB、Public Bank、数字银行和金融科技公司的实时数据。我们知道哪家银行会批准哪种档案。真实案例：自雇月入RM 10K，RHB认60%（RM 6K），Hong Leong认90%（RM 9K）。我们推荐Hong Leong。结果：贷款额度差异10年相差RM 496K。' },
        { number: 'RM 5亿+', title: '促成贷款', description: '为500+客户获得的总融资额。平均批准时间：21-25天（市场45天）。平均释放额外贷款额度：每位客户RM 150K。真实案例：40年零售企业经过我们优化后获得RM 200万贷款，2年收入增长3倍。' },
        { number: '2分钟', title: '分析时间', description: '2分钟内获得DSR计算、银行推荐和批准概率。无硬信用查询。不会浪费时间申请错误的银行。真实结果：DSR 75%的客户匹配到Hong Leong（允许最高80%），获批RM 40万贷款。' },
        { number: '98%', title: '匹配准确度', description: '基于真实银行标准的AI驱动精准度。我们分析您的确切档案（DSR、收入类型、就业类型），并为您匹配会批准——而非拒绝的银行。真实结果：84.2%批准率 vs 市场平均40%。选错银行 = 浪费3个月 + CCRIS负面记录。' },
      ],
      timeline: {
        tag: '我们的旅程',
        title: '从愿景到结果：我们如何构建让客户获得批准的系统',
        milestones: [
          { year: '2020', title: '公司成立', description: '带着愿景起步：停止贷款被拒。先修复DSR，然后匹配正确的银行。建立马来西亚银行标准的全面数据库。识别的真实问题：60%的贷款申请因DSR问题、选错银行或文件不佳而被拒。' },
          { year: '2021', title: '首批1000名客户', description: '达成第一个重要里程碑：1000名客户获得融资。平均批准率：75%（市场40%）。证明我们的"先修复，再申请"方法有效。真实结果：DSR 75%的客户优化至50%，批准率提高60-80%。' },
          { year: '2022', title: 'CreditPilot 推出', description: '推出AI驱动的贷款匹配系统。50+银行的实时分析。2分钟DSR计算。98%匹配准确度。结果：批准率提升至84.2%。真实案例：自雇客户匹配到Hong Leong（认90%收入），获批RM 50万贷款。' },
          { year: '2023', title: '促成RM 1亿+', description: '跨越重要的融资里程碑：促成RM 1亿+贷款。平均批准时间：21-25天（市场45天）。客户满意度：4.9/5.0。真实影响：通过DSR优化和智能银行匹配，平均每位客户释放RM 150K额外贷款额度。' },
          { year: '2024', title: '50+机构网络 & RM 5亿+', description: '扩展至全面覆盖：50+金融机构。促成RM 5亿+。500+客户。84.2%批准率。平均每位客户释放RM 150K额外贷款额度。真实成功：40年零售企业经过我们优化后获得RM 200万贷款，2年收入增长3倍。' },
        ],
      },
    },
    news: {
      meta: {
        title: '新闻动态 | INFINITE GZ',
        description: '最新新闻、客户成功案例和里程碑。了解我们如何帮助500+企业获得更好的融资，84.2%批准率 vs 市场40%。',
      },
      hero: {
        tag: '成功案例与动态',
        title: '新闻动态',
        description: '500+客户。RM 5亿+促成。84.2%批准率 vs 市场40%。平均批准时间：21-25天 vs 市场45天。平均释放额外贷款额度：每位客户RM 150K。阅读我们如何帮助企业克服DSR问题、整合债务并获得传统agent无法提供的融资。',
      },

      items: [
        { title: '促成RM 5亿+融资：500+客户成功获得贷款', date: '2024-12', category: '里程碑' },
        { title: 'CreditPilot AI升级：98%匹配准确度，2分钟分析', date: '2024-12', category: '产品' },
        { title: '成功案例：制造SME在DSR优化后获得RM 50万', date: '2024-11', category: '案例研究' },
        { title: '与50+银行合作：实时数据访问，更好匹配', date: '2024-11', category: '合作伙伴' },
        { title: 'INFINITE GZ获得金融科技奖：贷款匹配创新认可', date: '2024-10', category: '认可' },
        { title: '网络扩展：现覆盖50+金融机构', date: '2024-10', category: '增长' },
      ],
    },
    careers: {
      meta: {
        title: '招聘信息 | INFINITE GZ',
        description: '加入我们的团队，帮助构建马来西亚金融服务的未来。500+客户。RM 5亿+促成。84.2%批准率。快速成长的金融科技公司。',
      },
      hero: {
        tag: '加入我们的团队',
        title: '加入我们',
        description: '加入一家快速成长的金融科技公司，我们正在改变马来西亚中小企业和个人获得融资的方式。500+客户。RM 5亿+促成。84.2%批准率 vs 市场40%。我们正在构建金融服务的未来——我们需要像您这样有才华的人。',
      },
      benefits: {
        tag: '福利',
        title: '为什么与我们合作',
        items: [
          {
            icon: '',
            title: '有竞争力的薪资',
            description: '高于市场水平的薪酬和绩效奖金。真实影响：帮助500+客户获得融资，释放RM 5亿+贷款。',
          },
          {
            icon: '',
            title: '健康福利',
            description: '全面的医疗和牙科保险。额外：心理健康支持、健康计划。',
          },
          {
            icon: '',
            title: '学习与发展',
            description: '持续培训金融科技、AI/ML、财务分析。真实成长：从初级到高级2-3年（基于我们团队的记录）。',
          },
          {
            icon: '',
            title: '灵活工作',
            description: '混合工作安排，工作时间灵活。工作生活平衡：每周2-3天在家办公，灵活上班时间。',
          },
          {
            icon: '',
            title: '团队活动',
            description: '定期的团队建设活动、公司活动、季度庆祝。真实文化：月度团队午餐、年度公司旅行。',
          },
          {
            icon: '',
            title: '职业成长',
            description: '在快速成长的公司中明确的职业发展路径。真实机会：2024年40%的高级职位由内部晋升。',
          },
        ],
      },

      jobs: {
        tag: '开放职位',
        title: '加入我们成长的团队',
        positions: [
          { title: '高级财务顾问', department: '咨询', location: '吉隆坡', type: '全职' },
          { title: 'AI/ML 工程师', department: '技术', location: '吉隆坡/远程', type: '全职' },
          { title: '业务拓展经理', department: '销售', location: '吉隆坡', type: '全职' },
          { title: '数字营销专员', department: '营销', location: '远程', type: '全职' },
          { title: '会计师', department: '财务', location: '吉隆坡', type: '全职' },
          { title: '客户成功经理', department: '运营', location: '吉隆坡', type: '全职' },
        ],
      },
      cta: {
        title: '找不到适合的职位？',
        description: '我们一直在寻找有才华的人才，他们与我们有着共同的愿景：改变马来西亚的金融服务。发送您的简历，告诉我们您能如何为我们的使命做出贡献——帮助500+企业获得更好的融资。',
      },
    },
    faq: {
      hero: {
        tag: '常见问题',
        title: '常见问题',
        description: '来自真实客户的真实问题。关于费用、成功率、时间线，以及如果事情不顺利会发生什么，获得诚实的答案。',
      },
      items: [
        {
          question: '你们如何收费？真的零前期费用吗？',
          answer: '是的，100%零前期费用。我们只在您的贷款获批并放款后收费。我们的费用是贷款金额的百分比（通常1-3%），在您承诺之前会清楚说明。如果您的贷款被拒，您无需支付任何费用。DSR优化和债务整合服务对贷款客户完全免费。',
        },
        {
          question: '我的贷款一定会获批吗？如果失败了怎么办？',
          answer: '我们无法保证100%获批（没有人能保证），但我们会显著提高您的成功率。基于500+客户：DSR优化后批准率60-80%（未优化仅20-30%）。如果优化后贷款仍被拒，您无需支付任何费用。我们还为优化方案提供1次免费修订。',
        },
        {
          question: '使用你们的服务会影响我的信用记录（CCRIS/CTOS）吗？',
          answer: '不会有负面影响。我们只做软查询（不影响评分的查询）。我们的DSR优化实际上会改善您的信用评分，通过帮助您按时还款和降低使用率。但是，当您通过我们申请贷款时，银行会做硬查询（这是正常且必要的）。',
        },
        {
          question: '我需要准备哪些文件？',
          answer: '基本文件：(1) 身份证副本，(2) 最近3个月工资单或银行月结单（收入证明），(3) 最近3个月信用卡账单和贷款账单（债务分析），(4) EPF对账单（如有）。自雇人士：商业注册、6个月银行月结单、税务申报表。我们会在初步咨询后发送完整清单。',
        },
        {
          question: '整个流程需要多长时间？',
          answer: 'DSR评估：即时（免费在线计算器）或24小时（详细分析）。债务重组方案：3-5个工作日。贷款申请提交：1-2天（您提供文件后）。银行批准：平均21-25天（市场平均45天）。最快案例：18天。最慢：35天。',
        },
        {
          question: '如果我付了费用后银行拒绝了我的贷款怎么办？',
          answer: '如果拒绝是由于我们的优化质量问题（非您的业务基本面），我们退还50%的费用。但是，如果拒绝是由于我们无法控制的因素（例如突然失业、您新增的债务、银行政策变化），则适用标准条款。我们会提前透明说明。',
        },
        {
          question: '你们与马来西亚所有银行合作吗？',
          answer: '是的，我们与50+持牌金融机构合作：所有主要银行（Maybank、CIMB、Hong Leong、RHB、Public Bank等）、数字银行（GXBank、Boost Bank等）和持牌金融科技公司。我们只与马来西亚国家银行监管的机构合作。没有高利贷，没有非法放贷。',
        },
        {
          question: '我是自雇人士。你们还能帮助我吗？',
          answer: '可以！事实上，自雇客户从我们的服务中受益最大。不同银行对自雇收入的认定不同（RHB：60%，Hong Leong：90%）。我们帮您选择认定更多收入的银行。真实案例：月入RM 10K，RHB只认RM 6K，Hong Leong认RM 9K。贷款额度差异：10年相差RM 496K。',
        },
        {
          question: '如果我的信用不好（CCRIS/CTOS评分低），可以使用你们的服务吗？',
          answer: '可以，但结果需要更长时间。我们提供信用修复策略（3-6个月改善计划）。但是，如果您的评分低于600，我们建议先修复信用再申请新贷款。我们可以同时帮助：信用修复 + 贷款申请。',
        },
        {
          question: '你们是否提供多语言服务？',
          answer: '是的，我们的网站和服务提供英语、中文（简体）和马来语版本。我们的顾问可以用三种语言沟通。WhatsApp咨询可用您首选的语言。',
        },
      ],
      cta: {
        title: '还有其他问题？',
        description: '通过WhatsApp联系我们进行免费咨询。无义务，无压力。我们诚实地回答您的所有问题。',
        contactUs: 'WhatsApp联系我们',
        visitPortal: '开始免费评估',
      },
    },
    privacy: {
      hero: {
        tag: '隐私政策',
        title: '隐私政策',
        lastUpdated: '最后更新',
      },
      sections: {
        introduction: {
          title: '1. 介绍',
          content: 'INFINITE GZ（"我们"、"我们的"或"本公司"）致力于保护您的隐私。本隐私政策说明我们在您访问我们的网站和使用我们的服务时如何收集、使用、披露和保护您的信息。',
        },
        informationWeCollect: {
          title: '2. 我们收集的信息',
          description: '我们可能通过多种方式收集有关您的信息：',
          items: [
            '个人身份信息（姓名、电子邮件地址、电话号码）',
            '财务信息（信用卡账单、贷款详情、收入信息）',
            '使用数据（您如何与我们的网站和服务互动）',
            '设备信息（IP地址、浏览器类型、操作系统）',
          ],
        },
        howWeUse: {
          title: '3. 我们如何使用您的信息',
          description: '我们使用收集的信息来：',
          items: [
            '提供、维护和改进我们的服务',
            '处理您的请求和交易',
            '向您发送技术通知和支持消息',
            '回复您的评论和问题',
            '监控和分析趋势和使用情况',
          ],
        },
        dataSecurity: {
          title: '4. 数据安全',
          content: '我们实施适当的技术和组织安全措施来保护您的个人信息。但是，通过互联网传输的方法都不是100%安全的，我们无法保证绝对安全。',
        },
        yourRights: {
          title: '5. 您的权利',
          description: '您有权：',
          items: [
            '访问您的个人信息',
            '更正不准确的信息',
            '请求删除您的信息',
            '反对处理您的信息',
            '请求数据可移植性',
          ],
        },
        contactUs: {
          title: '6. 联系我们',
          description: '如果您对本隐私政策有任何疑问，请通过以下方式联系我们：',
          email: '电子邮件：privacy@infinitegz.com',
          whatsapp: 'WhatsApp：+60 12 345 6789',
        },
      },
    },
    terms: {
      hero: {
        tag: '服务条款',
        title: '服务条款',
        lastUpdated: '最后更新',
      },
      sections: {
        acceptance: {
          title: '1. 接受条款',
          content: '通过访问和使用 INFINITE GZ 的网站和服务，您接受并同意受本协议条款和规定的约束。',
        },
        useLicense: {
          title: '2. 使用许可',
          content: '允许临时访问 INFINITE GZ 网站上的材料，仅供个人、非商业临时查看。这是许可的授予，不是所有权的转让。',
        },
        serviceDescription: {
          title: '3. 服务说明',
          content: 'INFINITE GZ 提供财务咨询、信用分析、贷款匹配和相关金融服务。我们努力提供准确的信息，但我们不保证网站上任何信息的准确性、完整性或有用性。',
        },
        userResponsibilities: {
          title: '4. 用户责任',
          description: '您同意：',
          items: [
            '提供准确和完整的信息',
            '维护您账户凭证的安全性',
            '仅将我们的服务用于合法目的',
            '不尝试未经授权访问我们的系统',
          ],
        },
        limitation: {
          title: '5. 责任限制',
          content: 'INFINITE GZ 不对因您使用或无法使用我们的服务而产生的任何间接、偶然、特殊、后果性或惩罚性损害承担责任。',
        },
        modifications: {
          title: '6. 修改',
          content: 'INFINITE GZ 保留随时修改这些服务条款的权利，恕不另行通知。使用本网站即表示您同意受当时这些服务条款的当前版本约束。',
        },
        contact: {
          title: '7. 联系信息',
          description: '如果您对这些服务条款有任何疑问，请联系我们：',
          email: '电子邮件：legal@infinitegz.com',
          whatsapp: 'WhatsApp：+60 12 345 6789',
        },
      },
    },
    legal: {
      hero: {
        tag: '法律声明',
        title: '法律声明',
        description: '关于 INFINITE GZ 和我们服务的重要法律信息。',
      },
      sections: {
        companyInfo: {
          title: '公司信息',
          description: 'INFINITE GZ 是一家在马来西亚运营的财务咨询和技术服务公司。',
          registeredAddress: '注册地址：[待更新]',
          businessRegistration: '商业注册：[待更新]',
          licenseNumber: '许可证号码：[待更新]',
        },
        regulatory: {
          title: '监管合规',
          content: 'INFINITE GZ 遵守适用的马来西亚金融法规运营。我们致力于保持最高的专业行为标准和监管合规性。',
        },
        disclaimer: {
          title: '免责声明',
          content: '本网站上提供的信息仅供参考。虽然我们努力保持信息的更新和正确，但我们不对信息的完整性、准确性、可靠性或适用性作任何明示或暗示的陈述或保证。',
        },
        intellectualProperty: {
          title: '知识产权',
          content: '本网站上的所有内容，包括文本、图形、徽标和软件，均为 INFINITE GZ 或其内容供应商的财产，受版权和其他知识产权法保护。',
        },
        thirdPartyLinks: {
          title: '第三方链接',
          content: '我们的网站可能包含指向第三方网站的链接。我们不对这些外部网站的内容或隐私做法负责。',
        },
        contact: {
          title: '联系',
          description: '如有法律咨询，请联系：',
          email: '电子邮件：legal@infinitegz.com',
          whatsapp: 'WhatsApp：+60 12 345 6789',
        },
      },
    },
    dsrGuide: {
      hero: {
        tag: 'DSR 指南',
        title: 'DSR指南',
        description: '马来西亚60%的贷款申请因DSR超标被拒。多张信用卡、个人贷、车贷压垮现金流？我们详细说明如何重组债务并获得批准。',
      },
      sections: {
        whatIsDSR: {
          title: '什么是DSR？为什么银行会拒绝您',
          description: '债务服务比率 (DSR) = 您的月债务还款 ÷ 您的月净收入 × 100%。马来西亚银行用DSR评估您是否有能力偿还新贷款。实际问题：不同银行的DSR标准差异巨大（40%-80%），大多数人不知道应该申请哪家银行。',
          formula: 'DSR = (总月债务承诺 / 净月收入) × 100%',
          formulaLabel: 'DSR 公式：',
        },
        whyMatters: {
          title: '为什么您的DSR会让您被拒',
          description: '当您的DSR太高时，银行认为您风险高，会拒绝您的申请。实际情况是：',
          items: [
            'Maybank：DSR > 40-70% 拒绝（根据收入水平不同）',
            'CIMB：DSR > 65-75% 拒绝',
            'Hong Leong：允许60-80%（最宽松）',
            'RHB：DSR > 60-70% 拒绝',
            '选错银行 = 浪费3个月 + CCRIS负面记录',
          ],
        },
        thresholds: {
          title: '马来西亚主要银行DSR标准（2025年）',
          excellent: {
            title: '优秀 (0-30%)',
            description: '所有银行都批准。最佳利率。最高贷款额度。案例：月入RM 10K，月供RM 2K = 20% DSR = 所有银行都批准。',
          },
          good: {
            title: '良好 (31-50%)',
            description: '大多数银行批准。有竞争力的利率。真实案例：月入RM 8K，月供RM 3.5K = 44% DSR = CIMB批准，Maybank可能拒绝。',
          },
          acceptable: {
            title: '可接受 (51-70%)',
            description: '只有宽松的银行批准（Hong Leong、部分数字银行）。利率较高。真实案例：月入RM 6K，月供RM 4.2K = 70% DSR = 只有Hong Leong批准。',
          },
          highRisk: {
            title: '高风险 (71%+)',
            description: '所有银行都拒绝。必须先减少债务。真实案例：月入RM 5K，月供RM 4K = 80% DSR = 所有银行都拒绝。解决方案：债务整合以减少月供。',
          },
        },
        howToImprove: {
          title: '我们如何帮您改善DSR：4步流程',
          items: [
            {
              title: '步骤1：诊断您当前的DSR',
              description: '我们使用真实银行标准计算您的精确DSR。我们检查：信用卡、个人贷、车贷、房贷。真实案例：张先生，月入RM 2,744，月供RM 1,980 = 72% DSR = 被3家银行拒绝。',
            },
            {
              title: '步骤2：设计债务重组方案',
              description: '我们将高息债务（信用卡18%、个人贷12%）整合为一笔低息贷款（6-8%）。结果：月供从RM 5,000降至RM 3,200。DSR从75%改善至48%。',
            },
            {
              title: '步骤3：匹配最适合您的银行',
              description: '我们分析哪家银行会根据您的资料批准您。案例：自雇月入RM 10K，RHB只认60%（RM 6K），但Hong Leong认90%（RM 9K）。贷款额度差异：10年相差RM 496K。',
            },
            {
              title: '步骤4：申请与跟进',
              description: '我们帮您准备文件、提交申请、跟进银行。平均批准时间：21-25天（市场平均45天）。部分客户18天获批。',
            },
          ],
        },
        calculate: {
          title: '真实案例：我们如何修复张先生的DSR',
          description: '之前：月入RM 2,744，月供RM 1,980（3张信用卡），DSR = 72%。被Maybank、CIMB、RHB拒绝。之后：我们将3张卡整合为1笔贷款，月供 → RM 1,590，DSR → 58%。结果：CIMB批准RM 30K。节省：每年RM 10K利息。',
          tryCalculator: '立即计算您的DSR',
          loanAnalyzer: '获取免费银行推荐',
        },
      },
    },
    taxTips: {
      hero: {
        tag: '税务优化',
        title: '税务优化',
        description: '报税一团乱？不知道如何申请扣税？怕LHDN查账？账目与实际不符？我们帮助马来西亚SME老板整理账务、规划税务策略，通过合理的15%扣税和业务结构优化，合法节省数千令吉。',
      },
      sections: {
        commonDeductions: {
          title: '我们解决的常见SME税务问题',
          items: [
            {
              title: '1. 报税混乱 & 遗漏扣税',
              description: '问题：不知道哪些费用可以扣税。每年遗漏RM 3,000-8,000的扣税。真实案例：RM 100K营收，缴税RM 24K。经过我们优化后：RM 15K税务（通过合理扣税节省RM 9K）。',
            },
            {
              title: '2. 账目与实际不符',
              description: '问题：现金交易未记录、收据丢失、账本不能反映实际业务。LHDN查账风险。解决方案：我们整理6-12个月的记录，核对账目，准备完整文件。',
            },
            {
              title: '3. 不会使用15%业务扣税',
              description: '问题：符合15%业务费用扣税条件但没有正确申请。真实案例：RM 50K符合条件费用 → RM 7,500税务节省。我们帮您识别并记录所有符合条件费用。',
            },
            {
              title: '4. 害怕LHDN查账',
              description: '问题：担心LHDN质疑您的报税。解决方案：我们确保所有申请都有完整文件且合规。我们准备查账就绪的文件，必要时代表您应对。',
            },
            {
              title: '5. 业务结构未税务优化',
              description: '问题：以独资经营，但合伙或Sdn Bhd可以节省税务。真实案例：RM 200K利润，独资缴税RM 30K，Sdn Bhd缴税RM 24K（节省RM 6K）。我们分析并推荐最优结构。',
            },
          ],
        },
        strategies: {
          title: '我们如何帮助：4步税务优化流程',
          items: [
            {
              title: '步骤1：诊断您当前的税务状况',
              description: '我们审查您过去2-3年的报税记录，识别遗漏的扣税，分析业务结构，计算潜在节省。真实案例：为一位零售老板发现RM 12K未申请的扣税。',
            },
            {
              title: '步骤2：规划本年度税务策略',
              description: '我们制定税务规划路线图：最大化哪些费用、何时采购、如何构建交易。案例：在年底前安排设备采购以最大化扣税。结果：本年度节省RM 3,000-8,000。',
            },
            {
              title: '步骤3：整理账务 & 准备文件',
              description: '我们整理您的收据、核对银行月结单、准备完整会计记录，确保所有可扣税费用都有完整文件。我们准备LHDN就绪的文件。时间：2-4周完成12个月记录。',
            },
            {
              title: '步骤4：报税 & 年度审查',
              description: '我们正确向LHDN报税，确保所有扣税都申请，并提供年度审查以优化下一年策略。持续支持：我们每季度审查您的税务状况，根据需要调整策略。',
            },
          ],
        },
        creditCardBenefits: {
          title: '15%业务费用扣税：您可以申请的项目',
          description: '许多SME老板不知道这些费用可以扣税15%：',
          items: [
            '办公室租金、水电、网络（最多业务收入的15%）',
            '业务设备、电脑、软件（资本津贴）',
            '营销费用、广告、网站开发',
            '专业费用（会计、法律、咨询）',
            '业务差旅、客户用餐（需有完整收据）',
            '员工薪资、EPF供款、培训费用',
          ],
          note: '真实案例：RM 200K营收，RM 50K符合条件费用 → RM 7,500税务节省。我们的会计服务帮您跟踪并记录所有这些费用。',
        },
        professionalHelp: {
          title: '为什么选择我们的税务优化服务',
          description: '我们不只是报税员 - 我们是税务策略师。我们帮您合法省钱，同时保持与LHDN的合规。我们的团队包括合格的会计师和税务顾问，了解马来西亚税法。',
          bookConsultation: '预约免费咨询',
          whatsappUs: 'WhatsApp联系我们',
        },
        disclaimer: {
          title: '⚠️ 重要免责声明',
          content: '此信息仅供参考，不应被视为专业税务建议。税法和法规可能会发生变化，个人情况各不相同。所有税务策略都是合法的，符合LHDN规定。请咨询合格的税务顾问或马来西亚内陆税收局 (LHDN) 以获取具体建议。我们确保所有建议都符合马来西亚税法。',
        },
      },
    },
    loanCalculator: {
      header: {
        title: '快速贷款可负担性检查',
        subtitle: '根据你的收入和现有债务，立即计算能借多少钱和你的DSR。',
        notice: '⚠️ 重要提示：本工具只是基于DSR的快速估算。马来西亚银行在审批时还会综合考虑：CTOS/CCRIS信用记录、还款行为、工作稳定性、年龄、月度储蓄、现有信用额度、贷款用途、房产价值（如适用）以及各家银行的内部政策。DSR合格并不保证贷款获批。',
      },
      input: {
        monthlyIncome: {
          label: '月总收入（马币）',
          placeholder: '例如：5000',
          help: '扣除前的总月收入',
        },
        existingCommit: {
          label: '现有月度债务承诺（马币）',
          placeholder: '例如：2000（所有贷款、信用卡、透支合计）',
          helper: '包括所有贷款月供、信用卡最低还款、透支等。',
        },
        maxDSR: {
          label: '你希望保持的最大DSR比率(%)',
          helper: '马来西亚银行通常批准至60% DSR，但40–50%更舒适。根据你的偏好调整。',
        },
        proposedLoan: {
          label: '拟议贷款金额（马币）',
          placeholder: '例如：100000',
          helper: '你计划借的金额。调整以查看对可负担性的影响。',
        },
        loanRate: {
          label: '贷款年利率(%)',
          helper: '典型利率：房屋贷款 3–5%，个人贷款 6–9%，汽车贷款 3–4%',
        },
        loanTenure: {
          label: '贷款期限（年）',
          helper: '期限越长 = 月供越低但总利息越高。',
        },
      },
      btn: {
        calculate: '计算可负担性',
        reset: '重置',
        ctosOptimizer: '使用CTOS优化诊断获得深入分析',
        exploreMore: '探索更多工具',
      },
      result: {
        title: '可负担性分析结果',
        current_label: '当前状态',
        after_label: '获得此贷款后',
        monthlyCommit: '月度承诺（马币）',
        currentDSR: '你当前的DSR',
        newLoanPayment: '新贷款月供（马币）',
        totalNewCommit: '总月度承诺（马币）',
        newDSR: '你的新DSR',
        loanAmount: '贷款金额（马币）',
        interestRate: '年利率(%)',
        tenure: '贷款期限（年）',
        monthlyInstalment: '月供（马币）',
        totalInterest: '总利息（马币）',
        rec_comfortable: '很好！你的DSR健康，借贷能力强。从DSR角度看，这笔贷款完全可负担。但银行还会审查你的信用记录、还款行为和工作稳定性。如果你想获得更真实的批准评估，可以考虑使用我们的CTOS优化诊断工具。',
        rec_manageable: '好！你的DSR在贷款机构认为舒适的范围内。这笔贷款可负担，你应有合理的月现金流。但实际批准取决于你完整的信用资料（CTOS/CCRIS、还款记录、工作类型、年龄等）。谨慎进行，并咨询我们的CTOS优化诊断工具做更详细的评估。',
        rec_tight: '你的DSR会很紧张（{{dsr}}%）。虽然银行可能会在60% DSR以下批准贷款，但你的批准很大程度取决于其他信用因素：优异的CTOS/CCRIS记录、稳定的工作、良好的还款历史和现有信用额度。我们强烈建议在申请前使用我们的CTOS优化诊断工具，了解更真实的情况。',
        rec_highRisk: '⚠️ 你的DSR会很高（{{dsr}}%）。虽然在特殊情况下，银行可能会批准DSR至60-70%的贷款，但如果没有优异的信用资料，这不太可能。银行会重点审查：CTOS/CCRIS评分、还款纪律、工作行业、年龄、储蓄比率和现有信用额度。批准可能性很低。我们建议先探索债务整合或再融资选项，以降低现有承诺。请咨询我们的顾问。',
        rec_critical: '🛑 你的DSR会非常高（{{dsr}}%）。银行极不可能批准此贷款。即使拥有优异的信用资料，超过70%的DSR也被大多数贷款机构认为风险极高。你必须先重组现有债务（整合、结清或再融资）。请立即咨询我们的财务顾问，探索在申请任何新贷款之前降低当前承诺的选项。',
      },
      dsr_status: {
        comfortable: '舒适',
        manageable: '可控',
        tight: '紧张',
        highRisk: '高风险',
        critical: '危急',
      },
      disclaimer: '**免责声明：** 本计算器仅提供DSR估算，用于教育目的。结果并不代表贷款批准或保证。实际贷款批准取决于：(1)你的CTOS/CCRIS信用报告、(2)还款历史和信用纪律、(3)工作稳定性和行业、(4)年龄和经验、(5)月度储蓄和现金储备、(6)现有信用额度和限制、(7)贷款用途和房产价值（如适用）、(8)银行的内部信用政策和风险偏好。每家银行的标准不同，可能基于超出DSR以外的因素批准或拒绝你的申请。本工具不是专业财务建议的替代品。',
    },
    loanOptimizer: {
      header: {
        title: 'CTOS贷款优化诊断',
        subtitle: '分析你的现有债务，获得详细的重组前后方案。上传你的CTOS报告或手动输入贷款。了解你能节省多少月供和改善整体信用状况。',
        notice: 'ℹ️ 关于本工具：本优化工具从多个因素评估你的贷款，这些是马来西亚银行会考虑的：DSR、信用评分（CTOS/CCRIS）、还款历史、工作稳定性、年龄、储蓄比率、现有信用额度和贷款用途。结果显示了现实的重组场景，但实际批准取决于你选择的银行及其各自的政策。',
      },
      input: {
        concern_label: '你的主要财务关切是什么？',
        concern_a: '我想降低月度贷款供款',
        concern_b: '我想更快地偿还债务',
        concern_c: '我想改善信用评分和申请重大购买的批准几率',
        concern_d: '我想减少总利息支出',
        concern_e: '我想要财务灵活性和每月的喘息空间',
        ctos_label: '上传CTOS报告（可选）',
        ctos_helper: '上传你最新的CTOS报告（PDF或图像格式）。这有助于我们自动提取信用评分、贷款详情和还款历史。或者，在下方手动输入。',
        creditScore_label: '你的CTOS信用评分（或估计）',
        creditScore_helper: '你可以在CTOS报告上找到，或根据还款历史估计。',
        repaymentBehaviour_label: '你的典型还款行为',
        repayment_excellent: '优秀（总是按时，无违约）',
        repayment_good: '良好（大多按时，偶尔延迟）',
        repayment_fair: '一般（有延迟或违约）',
        repayment_poor: '较差（经常延迟或违约）',
        employment_label: '就业状况',
        employment_private: '全职（私营部门）',
        employment_govt: '全职（政府/公共部门）',
        employment_self: '自雇/企业主',
        employment_parttime: '兼职/自由职业',
        employment_retired: '退休/领取养老金',
        employment_unemployed: '失业/求职中',
        sector_label: '行业部门',
        sector_helper: '银行按行业评估风险。某些行业被认为更稳定。',
        age_label: '年龄（岁）',
        savings_label: '大约月度储蓄/现金储备（马币）',
        savings_helper: '银行将储蓄视为财务纪律和应急缓冲的标志。',
        income_label: '月总收入(马币)',
        otherCommit_label: '其他月度承诺(马币)',
        targetDSR_label: '你想达到的目标DSR(%)',
        targetDSR_helper: '舒适范围：40–50%',
      },
      table: {
        type: '贷款类型',
        bank: '银行/机构',
        outstanding: '未偿余额(马币)',
        rate: '利率(% p.a.)',
        tenure: '剩余期限(年)',
        payment: '月供(马币)',
        action: '操作',
      },
      loanType: {
        housing: '房屋贷款',
        car: '汽车贷款',
        personal: '个人贷款',
        creditCard: '信用卡',
        overdraft: '透支',
        business: '商业贷款',
        others: '其他',
      },
      btn: {
        addLoan: '添加另一贷款',
        deleteRow: '删除',
        analyze: '分析并比较方案',
        reset: '重置',
        contactAdvisor: '咨询我们的顾问以实施此方案',
        exploreMore: '探索更多工具',
      },
      result: {
        title: '优化分析与重组方案',
        current_label: '你当前的信用状况',
        after_label: '重组后',
        monthlySavings: '月度节省（马币）',
        approvalOddsImprovement: '批准几率改善',
        creditHealthExplain: '你的信用健康评分（{{score}}/100）基于：(1)DSR比率 - {{dsrPts}}分、(2)CTOS/CCRIS评分 - {{ctosPts}}分、(3)还款行为 - {{repayPts}}分、(4)工作稳定性 - {{empPts}}分、(5)年龄概况 - {{agePts}}分。评分越高，你与大多数银行合作的机会越大。',
        approvalFactors: '银行评估：(40%) DSR - 你的月度支付能力、(35%)信用健康 - 你的信用评分和还款记录、(25%)稳定性 - 你的工作类型、年龄和储蓄。重组降低你的DSR并改善批准几率，但不会改变你过去的信用记录。建立干净的还款记录需要时间。',
        secured_title: '有担保贷款（不建议更改）',
        secured_note: '这些贷款通常有更好的利率和担保状态，因此我们不建议整合它们。',
        unsecured_title: '无担保贷款（建议整合）',
        consolidation_proposal: '整合为1笔个人贷款 @ 7% p.a.，期限7年',
        rec_a: '通过将{{count}}笔无担保贷款整合为7% p.a.的个人贷款，你可以将月承诺从{{current}}马币降低到{{optimized}}马币，每月节省{{savings}}马币。你的DSR从{{currentDSR}}%改善到{{optimizedDSR}}%，批准几率从{{currentOdds}}%增加到{{optimizedOdds}}%。这是实现你目标的最佳选择。但实际批准取决于具体银行的政策和他们对你信用历史的评估。',
        rec_b: '如果你将{{savings}}马币的月度节省用于额外偿还整合贷款（使用雪崩或滚雪球方法），你可以提前{{months}}个月还清债务。这种积极的还款策略将显著减少总利息支出。你改善的DSR和减少的债务也将提高未来贷款的批准几率。',
        rec_c: '现在整合将你的DSR从{{currentDSR}}%改善到{{optimizedDSR}}%，将批准几率从{{currentOdds}}%提高到{{optimizedOdds}}%。对于重大购买（房屋或汽车），较低的DSR至关重要。此外，在未来6-12个月内与整合贷款建立干净的还款记录将进一步强化你的信用资料。相应地规划你的重大购买时间表。',
        rec_d: '整合在{{consolidationTenure}}年内为你节省约{{totalInterestSaved}}马币的总利息，相比你当前的结构。较低的利率（7% vs. 你当前的加权平均{{currentWeightedRate}}%）是关键驱动因素。结合改善的DSR和批准几率，这是一个有吸引力的财务举措。',
        rec_e: '将月承诺从{{current}}马币降低到{{optimized}}马币（节省{{savings}}马币）为你提供了急需的喘息空间。这种灵活性允许你处理紧急情况、投资或增加储蓄，而不会感到财务紧张。你的批准几率也改善到{{optimizedOdds}}%，为未来机会打开大门。',
        approvalNote: '虽然此分析基于多个因素提供了现实的评估，但实际贷款批准由每家银行个别决定。不同的银行有不同的风险偏好、政策和标准。就业部门波动性、与银行的关系历史和宏观经济条件等因素也起作用。我们建议咨询多家银行或使用我们的顾问服务以获得个性化指导。',
      },
      disclaimer: '**免责声明：** 本优化工具基于典型的马来西亚银行贷款标准提供分析，仅供教育用途。结果并不代表实际贷款批准或保证。批准取决于：(1)你的实际CTOS/CCRIS报告、(2)还款历史、(3)工作验证、(4)收入文件、(5)房产评估（如适用）、(6)银行的内部风险模型、(7)宏观经济因素。每家银行都有专有的信用评分模型。我们不保证整合条款或利率的准确性。这不是专业财务建议。请咨询持证财务顾问以获得个性化建议。',
    },
    cardSimulator: {
      header: {
        title: '信用卡债务清偿模拟器',
        subtitle: '对比三种清债策略：最低还款、积极还款或整合贷款。清晰看到需要多久、总利息多少，以及哪种更适合你的现金流。',
        notice: '重要提示：本模拟器专注于信用卡债务情境。它帮助你了解清债时间和利息成本，但不代表银行的真实报价。整合贷款的利率和批准与个人信用状况及银行政策有关。',
      },
      input: {
        cards_title: '你的信用卡资料',
        cards_helper: '列出每张卡的当前欠款、利率和最低月供。本工具会根据不同策略计算清偿时间和利息。',
        strategy_title: '清偿策略设置',
        aggressiveBudget_label: '积极清偿预算的月度金额（马币）',
        aggressiveBudget_helper: '你每月愿意用来清偿所有信用卡的总金额。本工具会按"雪球法"或"雪崩法"分配。',
        consolRate_label: '整合贷款年利率(% p.a.)',
        consolTenure_label: '整合贷款期限（年）',
        consol_helper: '整合策略假设你通过一笔个人贷款一次性结清所有列出的信用卡，然后每月只付这笔固定分期。',
      },
      table: {
        cardName: '卡名称 / 银行',
        balance: '当前欠款（马币）',
        rate: '年利率(% p.a.)',
        minPayment: '最低月供（马币）',
      },
      btn: {
        addCard: '添加另一张信用卡',
        deleteRow: '删除',
        simulate: '模拟3种清偿策略',
        reset: '重置',
        ctosOptimizer: '需要基于CTOS的完整方案？',
        exploreTools: '返回所有工具',
      },
      result: {
        title: '清偿策略对比结果',
        totalBalance: '当前信用卡总欠款',
        totalMinPayment: '最低月供总额',
        table_header_strategy: '策略',
        table_header_months: '清偿月数',
        table_header_years: '约年数',
        table_header_totalInterest: '总利息（马币）',
        table_header_monthlyPayment: '月供（马币）',
        table_header_comment: '说明',
        strategy1_name: '只付最低还款',
        strategy2_name: '积极清偿（预算 {{budget}} 马币/月）',
        strategy3_name: '整合贷款 @ {{rate}}%，{{tenure}} 年期',
        strategy1_comment: '最慢且最昂贵。你将支付最高的总利息，并长期处于债务中。',
        strategy2_comment: '比最低还款更快更便宜。你投入的预算越多，节省的利息越多，越早还清债务。',
        strategy3_comment: '将多张卡简化为一个固定分期。通常降低月供但延长期限。有利于现金流控制，但需检查实际银行利率和费用。',
        bestOption_title: '哪种策略最好？',
        bestOption_text: '从纯节省角度看，总利息最低的策略最好。从现金流角度看，月供最低的策略更容易管理。根据你的优先级选择，或咨询我们的顾问。',
      },
      disclaimer: '本模拟器仅供估算和教育用途。结果不反映银行的实际收费、逾期费用或促销余额转移方案。整合贷款的实际利率和批准取决于你的信用状况、CTOS/CCRIS报告以及各家银行的政策。',
    },
    propertyRenovationPlanner: {
      header: {
        title: '房产与装修贷款结构计算',
        subtitle: '规划你的房产购买和装修融资。对比两种策略：分离贷款（住房+装修）或综合结构。查看月度供款、批准几率和总利息成本。',
        notice: '重要提示：本计算器假设标准的马来西亚抵押条款（住房贷款最长35年，装修贷款利率更高）。实际批准取决于房产评估、你的信用概况（CTOS/CCRIS）、DSR和银行政策。装修贷款通常利率比住房贷款高。',
      },
      input: {
        propertyPrice_label: '房产价格（马币）',
        downPayment_label: '首付（马币）',
        downPayment_helper: '通常为马来西亚银行的10-20%。更高的首付=更低的LTV=更好的批准几率。',
        renoBudget_label: '装修预算（马币）',
        renoFinType_label: '你想如何融资装修？',
        renoFinType_personal: '个人贷款（利率较高，约10% p.a.，最长7-10年）',
        renoFinType_renoLoan: '装修贷款（特殊产品，约7-8% p.a.，最长15年）',
        renoFinType_topup: '住房贷款加额（与住房贷款利率相同，约3.5% p.a.，受LTV限制）',
        ctosScore_label: '你的CTOS信用评分（或估计）',
        existingDebt_label: '你目前的月度债务承诺（马币）',
        existingDebt_helper: '包括汽车贷款、个人贷款、信用卡最低还款等（不包括拟议的房产贷款）',
        income_label: '你的月总收入（马币）',
        homeLoanTenure_label: '住房贷款期限（年）',
        homeRate_label: '预期住房贷款利率(% p.a.)',
        homeRate_helper: '当前典型范围：3.2–3.8%，取决于银行和信用状况。',
      },
      btn: {
        calculate: '对比融资方案',
        reset: '重置',
        contactAdvisor: '咨询我们的抵押贷款顾问',
        tools: '返回所有工具',
      },
      result: {
        title: '融资方案对比',
        strategy1_name: '分离住房+装修贷款',
        strategy2_name: '综合住房贷款（房产+装修）',
        strategy1_note: '分离贷款允许房产和装修部分使用不同的利率和期限。',
        strategy2_note: '综合结构仅在银行允许时可用。请与银行确认装修金额是否在LTV限制内。',
        recommendation: '**策略{{bestStrategy}}推荐**用于你的情况。原因如下：{{reason}}。两种策略的批准几率都是{{odds}}%，但{{savingsReason}}。',
        considerations: '重要考虑因素：你的LTV是{{ltv}}%。{{ltvComment}}新贷款的DSR将是{{dsr}}%。{{dsrComment}}',
      },
      disclaimer: '本计算器仅供估算之用，不构成贷款报价。实际批准取决于：(1)银行指定估值师的房产评估、(2)你的信用报告(CTOS/CCRIS)、(3)收入验证和稳定性、(4)工作详情、(5)银行的内部政策和风险模型、(6)当前市场利率。所示利率为典型范围，可能有所变化。装修贷款可能有附加条件（如装修时间表、承包商批准）。始终与选定的银行核实最终条款。',
    },
    settlementAnalyzer: {
      header: {
        title: '债务结算与谈判影响分析器',
        subtitle: '了解结算未偿债务（部分或全部）如何影响你的信用评分、DSR和未来贷款批准几率。比较谈判策略及其长期影响。',
        notice: '结算根据谈判结果对CTOS/CCRIS记录的影响不同。全额结算或正式安排可能改善未来批准几率。部分结算可能显示为"已解决"但仍影响信用历史。谈判前咨询持证债务顾问。',
      },
      input: {
        income_label: '月总收入（马币）',
        otherDebt_label: '其他月度债务承诺（马币）',
        ctosScore_label: '当前CTOS评分（或估计）',
        settleDate_label: '目标结算日期',
        assessmentDate_label: '你计划何时申请新贷款？',
      },
      table: {
        debtType: '债务类型',
        creditor: '债权人/银行',
        balance: '当前未偿余额（马币）',
        paymentStatus: '最后还款状态',
        monthsDefault: '违约月数',
      },
      debtType: {
        creditCard: '信用卡',
        personal: '个人贷款',
        overdraft: '透支',
        business: '商业贷款',
        other: '其他',
      },
      paymentStatus: {
        ontime: '按时',
        late30: '延迟30天',
        late60: '延迟60+天',
        default: '违约',
      },
      scenario: {
        name_label: '场景名称',
        amount_label: '结算金额（马币）',
        method_label: '付款方式',
        method_lumpsum: '一次性付款',
        method_installment: '分期付款（月度付款）',
        arrangement_label: '结算安排类型',
        arrangement_full: '全额结算（无未来义务）',
        arrangement_partial: '部分结算（协商减少）',
        arrangement_formal: '正式安排（与债权人注册）',
        installmentMonths_label: '分期月数',
      },
      btn: {
        addDebt: '添加另一债务',
        deleteRow: '删除',
        addScenario: '添加结算场景',
        analyze: '分析结算影响',
        reset: '重置',
        negotiateGuide: '获取谈判指南',
        advisors: '连接财务顾问',
        again: '尝试另一个场景',
      },
      result: {
        title: '结算影响分析',
        scenario_title: '场景分析',
        settlementDetails: '结算详情',
        immediateDSR: '立即DSR影响',
        ctosRecovery: 'CTOS评分恢复',
        futureApproval: '未来批准几率',
        totalCost: '总成本对比',
        insight: '现在结算债务会立即改善你的DSR，并能在6–12个月内恢复你的CTOS评分。{{bestScenario}}是最有利的选择，让你有更高的批准几率获得新贷款。',
      },
      disclaimer: '本分析基于典型的马来西亚银行标准估算CTOS恢复和批准几率。实际恢复时间和批准几率因银行、结算金额、还款历史和宏观经济因素而异。结算协议必须直接与债权人协商——在继续之前咨询持证债务顾问或财务顾问。这不是法律或财务建议。',
    },
    expenseTracker: {
      header: {
        title: '支出跟踪与预算仪表板',
        subtitle: '跟踪你的日常支出，按类别设定月度预算，看看你的钱花在哪里。识别节省机会并改善财务纪律。',
      },
      input: {
        date_label: '日期',
        category_label: '类别',
        amount_label: '金额（马币）',
        description_label: '描述（可选）',
      },
      category: {
        food: '餐饮',
        transport: '交通',
        utilities: '水电费',
        shopping: '购物',
        entertainment: '娱乐',
        health: '健康与保健',
        education: '教育',
        miscellaneous: '杂项',
        other: '其他',
      },
      budget: {
        category: '类别',
        monthlyBudget: '月度预算（马币）',
        spentYTD: '本月已花（马币）',
        percentUsed: '使用百分比',
        remaining: '剩余（马币）',
      },
      btn: {
        addExpense: '添加支出',
        saveBudget: '保存月度预算',
        export: '导出为CSV',
        download: '下载月度报告',
        savingsGoal: '设置储蓄目标',
        tools: '返回所有工具',
      },
      dashboard: {
        totalIncome: '本月总收入',
        totalExpenses: '本月总支出',
        remainingBalance: '剩余余额',
        savingsRate: '储蓄率',
        currentMonth: '当前月概览',
        budgetVsActual: '预算 vs 实际',
      },
      result: {
        takeaway: '你本月在{{categories}}个类别中花费了{{total}}马币。{{savings_opportunity}}',
        highestCategory: '你的最高支出是{{category}}，金额为{{amount}}马币（占总数的{{percent}}%）',
        mostFrequent: '你本月进行了{{count}}笔交易。平均每笔交易为{{average}}马币。',
        budgetStatus: '你在{{onTrack}}个类别中按预算进行，在{{overBudget}}个类别中超出预算',
        savingRecommendation: '如果你将{{category}}减少{{percent}}%，本月可以节省{{savings}}马币。',
      },
      disclaimer: '本跟踪器仅供个人使用。数据仅存储在浏览器本地，除非你导出，否则不会与第三方共享。定期审查和更新你的预算以匹配你的消费习惯。',
    },
    insurancePlanner: {
      header: {
        title: '保险覆盖与保护规划器',
        subtitle: '评估你在人寿、健康、残疾、重症和财产保险方面的保险需求。计算推荐的覆盖金额并比较不同的覆盖方案及估计的年度保费。',
        notice: '本规划器基于常见的财务规划原则提供估计的覆盖建议。实际保险需求因个人情况、家庭状况和风险承受能力而异。咨询持证保险顾问以获取个性化报价和保单选择。',
      },
      input: {
        age_label: '你的年龄（岁）',
        gender_label: '性别',
        smoking_label: '吸烟状况',
        health_label: '一般健康状况',
        dependents_label: '受养人数量（子女、配偶、父母）',
        spouseIncome_label: '配偶年收入（马币，如适用）',
        income_label: '你的月总收入（马币）',
        debts_label: '总未偿债务（房屋、汽车、个人贷款，马币）',
        assets_label: '总资产（现金、房产、投资，马币）',
        homeOwnership_label: '房屋所有权状况',
        homeValue_label: '估计房屋价值（马币）',
        goal_label: '你的主要保险目标是什么？',
        lifePreference_label: '首选人寿保险类型',
        healthPreference_label: '健康保险优先级',
        disabilityPreference_label: '包括残疾/收入保护保险吗？',
      },
      gender: {
        male: '男性',
        female: '女性',
        preferNot: '不愿透露',
      },
      smoking: {
        non: '不吸烟',
        smoker: '吸烟',
        ex: '已戒烟',
      },
      health: {
        excellent: '优秀',
        good: '良好',
        fair: '一般',
        poor: '较差',
      },
      homeOwnership: {
        ownMortgage: '拥有（有按揭）',
        ownPaid: '拥有（已付清）',
        renting: '租住',
        planning: '计划购买',
      },
      goal: {
        a: '如果我去世，保护我的家人',
        b: '涵盖重大健康事件（重症、住院）',
        c: '保护免受残疾或失业导致的收入损失',
        d: '涵盖所有保护需求的全面保险',
      },
      lifePreference: {
        term: '定期人寿保险（经济实惠，有限期限）',
        whole: '终身人寿保险（终身覆盖，成本较高）',
        combination: '组合型',
      },
      healthPreference: {
        basic: '基本覆盖（住院）',
        comprehensive: '全面覆盖（包括门诊、重症）',
        premium: '高级覆盖（全包）',
      },
      disabilityPreference: {
        yes: '是',
        no: '否',
        optional: '可选（不确定）',
      },
      btn: {
        calculate: '计算保险需求',
        reset: '重置',
        quotes: '从合作伙伴获取保险报价',
        advisor: '咨询持证顾问',
        tools: '返回所有工具',
      },
      result: {
        title: '保险覆盖建议',
        lifeInsurance: '人寿保险',
        healthInsurance: '健康保险',
        criticalIllness: '重症保险',
        disabilityInsurance: '残疾保险',
        propertyInsurance: '财产保险',
        protectionScore: '保护覆盖评分',
        totalAnnualPremium: '年度总保费',
        insight: '根据你的资料，你推荐的年度总保险投资为{{total}}马币。这占你月收入的{{percent}}%，为你的家人和资产提供全面保护。',
      },
      disclaimer: '本规划器提供估计的覆盖建议和保费估算，仅供教育用途。实际保费因保险公司、承保评估、体检和理赔历史而异。这不是报价。咨询持证保险顾问以获取准确的报价、保单比较和基于你特定需求的定制建议。',
    },
    savingsGoal: {
      header: {
        title: '储蓄与投资目标规划器',
        subtitle: '设定你的财务目标，计算每月需要节省或投资多少才能实现这些目标。比较不同的储蓄和投资策略及现实的回报预测。',
        notice: '本规划器基于假定的回报率和通胀情景提供估计。实际投资回报因市场条件、资产配置和风险承受能力而异。过往表现不代表未来回报。咨询财务顾问以获取个性化投资策略。',
      },
      input: {
        goalType_label: '你的主要财务目标是什么？',
        timeline_label: '实现时间表（月份或年份）',
        priority_label: '目标优先级',
        goalStatus_label: '已为此目标节省的金额（马币）',
        monthlySavings_label: '每月可用储蓄（马币）',
        allocation_label: '你将如何分配你的储蓄？',
        investmentStrategy_label: '投资策略（如适用）',
        inflation_label: '假定的年度通胀率（%）',
      },
      goal: {
        emergency: '应急基金（3-6个月的支出）',
        homeDownPayment: '房屋首付（房产价格的20%）',
        vehicle: '车辆购买（汽车/摩托车首付）',
        education: '教育基金（子女大学/高等教育）',
        retirement: '退休基金（退休时所需的本金）',
        vacation: '假期/旅行基金',
        custom: '自定义财务目标',
      },
      priority: {
        high: '高',
        medium: '中',
        low: '低',
      },
      allocation: {
        equal: '平均分配',
        priority: '基于优先级',
        custom: '自定义分配',
      },
      investmentStrategy: {
        savings_only: '仅储蓄（0%回报）',
        conservative: '保守型（3%年回报）',
        balanced: '平衡型（6%年回报）',
        growth: '增长型（8%年回报）',
        aggressive: '激进型（10%+年回报）',
      },
      btn: {
        addGoal: '添加目标',
        calculate: '计算储蓄计划',
        reset: '重置',
        openAccount: '与合作银行开设投资账户',
        advisor: '咨询财务顾问',
        tools: '返回所有工具',
        downloadPlan: '下载我的储蓄计划（PDF）',
      },
      result: {
        title: '你的储蓄与投资计划',
        actionPlan: '1. 设置每月自动转账{{allocation}}马币到专用储蓄/投资账户。2. 每季度审查和重新平衡。3. 如果情况发生变化（加薪、奖金、生活事件），调整目标。4. 保持纪律——复利增长需要一致性。',
        onTrack: '按计划进行',
        tight: '紧张',
        needsAdjustment: '需要调整',
        achievable: '优秀！你每月{{available}}马币的储蓄可以覆盖所有目标，每月还有{{surplus}}马币的剩余。',
        challenging: '你分配的月度储蓄（{{available}}马币）比同时实现所有目标所需的金额少{{deficit}}马币。',
      },
      disclaimer: '本规划器基于假定的回报率、通胀和储蓄纪律提供估计。实际结果取决于市场表现、投资选择和储蓄的一致性。投资回报不保证。过往表现不代表未来结果。咨询财务顾问以获取个性化投资策略和风险评估。',
    },
    toolsHub: {
      mainTitle: '金融计算器与规划工具',
      mainSubtitle: '选择符合你财务情况的计算器。每个工具都提供清晰的前后对比，帮助你做出明智决定。',
      enterBtn: '进入计算器',
      card1: {
        title: '快速贷款可负担性检查',
        desc: '根据收入和现有债务，快速计算你的可借金额和DSR。一目了然你还能借多少。',
      },
      card2: {
        title: 'CTOS贷款优化诊断',
        desc: '上传你的CTOS报告和收入证明。获得详细的优化前后对比，显示如何通过重组降低月供、利息和DSR。',
      },
      card3: {
        title: '信用卡债务清偿模拟器',
        desc: '对比三种清债策略：最低还款、积极还款或整合贷款。清晰看到时间、利息和月供的差别。',
      },
      card4: {
        title: '房产与装修成本规划器',
        desc: '在一个工具里规划房产购买+装修。对比基础、标准和高端装修方案。看清需要的首期和月供影响。',
      },
      card5: {
        title: '贷款结清与重组分析器',
        desc: '计算贷款结清金额。上传CTOS，分析哪些贷款应结清/整合，获得月供节省的前后对比。',
      },
      card6: {
        title: '生意现金流与损益平衡规划器',
        desc: '规划你的新生意：设定启动成本、月度支出和销售预估。对比悲观、正常和乐观场景，了解可持续性。',
      },
      card7: {
        title: '债务健康仪表板',
        desc: '全面了解你的总债务、月供和DSR。看清按贷款类型的分布和健康分类（稳健、可管、紧张、危急）。',
      },
      card8: {
        title: '资产净值与杠杆快照',
        desc: '计算你的总资产、负债、资产净值和杠杆比率。了解你的财务地位和资产/负债组成洞察。',
      },
      footerText: '所有计算器仅供估算和教育用途。结果不构成贷款批准或专业财务建议。如需个性化建议，请咨询我们的财务顾问。',
      footerCTA_btn: '需要帮助？咨询我们的顾问',
    },
    cardManagement: {
      hero: {
        tag: '专业信用卡管理',
        title: '每年节省 RM 1,200-5,000',
        subtitle: '通过专业信用卡管理服务',
        benefits: [
          { icon: '', value: 'RM 500-2,000/年', label: '避免逾期罚款' },
          { icon: '', value: 'RM 800-3,000/年', label: '额外奖励与现金返还' },
          { icon: '', value: '50-100分', label: '信用评分提升' },
        ],
        cta1: '免费WhatsApp咨询',
        cta2: '查看定价',
        socialProof: '超过500位客户 | 管理1,000+张卡 | 累计节省RM 600,000+',
      },
      painPoints: {
        tag: '常见问题',
        title: '您是否也遇到这些信用卡困扰？',
        subtitle: '马来西亚信用卡债务：RM 50.7B | 逾期债务：RM 551.8M (1.1%)',
        points: [
          {
            icon: '',
            title: '忘记还款',
            description: '多张卡片，不同到期日，容易错过还款',
            impact: '逾期费RM 150-300/次 + 信用评分损害',
          },
          {
            icon: '',
            title: '不懂优化',
            description: '不了解卡片奖励，积分浪费，年费高昂',
            impact: '每年损失RM 800-3,000收益',
          },
          {
            icon: '',
            title: '多卡混乱',
            description: '管理2-3张卡，账单混乱，压力大',
            impact: '最低还款陷阱，18%年利率',
          },
        ],
        stats: [
          { value: 'RM 50.7B', label: '信用卡总债务' },
          { value: '18% p.a.', label: '最高利率' },
          { value: 'RM 551.8M', label: '逾期金额' },
          { value: '50,000+', label: '负债年轻人' },
        ],
      },
      solutions: {
        tag: '我们的解决方案',
        title: '专业5合1服务',
        subtitle: '全方位信用卡管理，最大化您的收益',
        services: [
          {
            icon: '',
            title: '支付提醒服务',
            description: '三重提醒系统，确保您永不错过还款',
            benefits: [
              'WhatsApp + 短信 + 邮件三重通知',
              '到期前7/3/1天提醒',
              '月度账单审查',
              '逾期警报系统',
            ],
          },
          {
            icon: '',
            title: '代付服务',
            description: '我们代您支付，确保按时还款',
            benefits: [
              '100%按时还款保证',
              '2个工作日内处理',
              '从指定账户自动扣款',
              '月度对账报告',
            ],
          },
          {
            icon: '',
            title: '代购服务',
            description: '使用最优信用卡，最大化奖励',
            benefits: [
              '智能选卡系统',
              '最大化现金返还和积分',
              '50/50收益分成模式',
              '透明交易记录',
            ],
          },
          {
            icon: '',
            title: '信用卡优化',
            description: '消费模式分析与策略建议',
            benefits: [
              '月度消费分析',
              '最优信用卡使用建议',
              '年费豁免谈判',
              '奖励兑换提醒',
            ],
          },
          {
            icon: '',
            title: '债务管理咨询',
            description: 'DSR分析与债务整合建议',
            benefits: [
              '免费DSR计算',
              '债务整合方案',
              '信用评分改善策略',
              '降低利率解决方案',
            ],
          },
        ],
      },
      caseStudies: {
        tag: '成功案例',
        title: '真实客户成果',
        subtitle: '看看我们的客户如何每年节省数千令吉',
        before: '使用前',
        after: '使用后',
        cases: [
          {
            client: '王先生',
            type: '个人 | 4张卡',
            before: '月还RM 2,500 | 管理混乱 | 经常逾期',
            after: '整合贷款 + 智能管理 | 自动还款 | 优化奖励',
            savings: '节省RM 3,200',
            period: '12个月内',
          },
          {
            client: '李女士',
            type: '专业人士 | 高消费',
            before: '月消费RM 8,000 | 用错卡 | 积分浪费',
            after: '优化用卡策略 | 最大化奖励 | 年费豁免',
            savings: '额外RM 5,000/年',
            period: '持续收益',
          },
          {
            client: 'ABC公司',
            type: '中小企业 | 10张企业卡',
            before: '员工报销混乱 | 管理成本高 | 超支',
            after: '集中管理 | 自动对账 | 支出控制',
            savings: '节省RM 12,000/年',
            period: '第一年',
          },
        ],
      },
      pricing: {
        tag: '透明定价',
        title: '灵活方案满足各种需求',
        subtitle: '选择最适合您的方案',
        recommended: '最受欢迎',
        plans: {
          individual: {
            label: '个人客户',
            options: [
              {
                name: '成功费用',
                price: '50/50分成',
                period: '只在您节省时付费',
                features: [
                  '无预付费用',
                  '所有节省/收益的50%',
                  '年费豁免',
                  '现金返还与奖励优化',
                  '利息节省',
                  '避免逾期费',
                  '每季度结算',
                ],
                recommended: true,
                cta: { text: '立即开始', link: 'https://wa.me/60123456789' },
              },
              {
                name: '月度订阅',
                price: 'RM 99/月',
                period: '最多3张卡',
                features: [
                  '额外RM 30/卡',
                  '支付提醒服务',
                  '信用卡优化',
                  '月度消费分析',
                  '年费谈判',
                  '代付服务：+RM 50/月',
                ],
                cta: { text: '立即订阅', link: 'https://portal.infinitegz.com/card-management' },
              },
              {
                name: '贷款客户免费',
                price: 'RM 0',
                period: '前12个月',
                features: [
                  '包含所有标准服务',
                  '须有我们的有效贷款',
                  '12个月后50%折扣',
                  '完整支付提醒服务',
                  '基础信用卡优化',
                ],
                cta: { text: '检查资格', link: '/creditpilot' },
              },
            ],
          },
          corporate: {
            label: '企业客户',
            options: [
              {
                name: '级别1',
                price: 'RM 299/月',
                period: 'RM 0-20K月消费',
                features: [
                  '最多10张企业卡',
                  '集中管理',
                  '月度对账',
                  '基础消费分析',
                  '员工卡追踪',
                ],
                cta: { text: '联系销售', link: 'https://wa.me/60123456789' },
              },
              {
                name: '级别2',
                price: 'RM 599/月',
                period: 'RM 20-50K月消费',
                features: [
                  '最多25张企业卡',
                  '高级分析',
                  '专属客户经理',
                  '自定义支出限额',
                  '自动审批',
                  '季度业务审查',
                ],
                recommended: true,
                cta: { text: '联系销售', link: 'https://wa.me/60123456789' },
              },
              {
                name: '级别3',
                price: 'RM 999/月',
                period: 'RM 50-100K月消费',
                features: [
                  '无限企业卡',
                  '高级支持',
                  '自定义集成',
                  '高级欺诈检测',
                  '多实体管理',
                  '白标报告',
                ],
                cta: { text: '联系销售', link: 'https://wa.me/60123456789' },
              },
            ],
          },
          loan: {
            label: '贷款客户',
            options: [
              {
                name: '免费服务',
                price: '免费',
                period: '前12个月',
                features: [
                  '包含所有个人服务',
                  '优先支持',
                  '免费债务咨询',
                  '12个月后50%折扣',
                  '专属贷款客户福利',
                ],
                recommended: true,
                cta: { text: '了解更多', link: '/advisory' },
              },
            ],
          },
        },
      },
      socialProof: {
        stats: [
          { value: '500+', label: '满意客户' },
          { value: '1,000+', label: '管理卡片' },
          { value: 'RM 600K+', label: '累计节省' },
          { value: '98%', label: '满意度' },
        ],
        badges: [
          'PDPA 2010合规',
          '持牌财务顾问',
          'Bank Negara认可',
          'ISO 27001认证',
        ],
      },
      faq: {
        title: '常见问题',
        subtitle: '您需要了解的一切',
        questions: [
          {
            question: '如何收费？',
            answer: '我们提供3种定价模式：(1) 成功费用：节省金额的50%，无预付费。(2) 月度订阅：最多3张卡每月RM 99。(3) 贷款客户前12个月免费。选择最适合您的方式。',
          },
          {
            question: '代付服务安全吗？',
            answer: '绝对安全。我们仅在您授权下从指定账户扣款。所有交易都有记录，您会收到月度对账报告。我们维持RM 100万专业责任保险。',
          },
          {
            question: '如何取消服务？',
            answer: '您可以提前30天书面通知随时取消。订阅计划可获得按比例退款。成功费用计划在承诺期内取消，需支付提前终止费（剩余费用的50%或RM 500，取较低者）。',
          },
          {
            question: '支持马来西亚所有银行吗？',
            answer: '是的，我们支持所有主要银行，包括Maybank、CIMB、Public Bank、Hong Leong、RHB、AmBank和数字银行。我们可以管理马来西亚任何持牌金融机构的信用卡。',
          },
          {
            question: '您会看到我的信用卡号吗？',
            answer: '不会。我们只需要您的信用卡账单（显示最后4位数字）。对于代付服务，款项直接从您的银行账户支付给信用卡发卡机构。我们从不存储完整的卡号。',
          },
          {
            question: '如果使用您的服务还是错过付款怎么办？',
            answer: '我们提供三重提醒和尽最大努力的服务。但是，如果您账户资金不足，我们不承担责任。我们的责任上限为RM 10,000或12个月费用，取较低者。',
          },
          {
            question: '可以用于公司卡吗？',
            answer: '可以！我们有专门的企业计划，起价RM 299/月。非常适合管理多张员工卡的中小企业。包括集中管理、对账和支出分析。',
          },
        ],
      },
      finalCta: {
        title: '准备开始节省了吗？',
        subtitle: '加入500+满意客户，今天开始最大化您的信用卡收益',
        cta1: 'WhatsApp免费咨询',
        cta2: '预约咨询',
        relatedTitle: '相关服务',
        relatedServices: [
          { name: 'CreditPilot（智能贷款匹配）', link: '/creditpilot' },
          { name: '贷款咨询', link: '/advisory' },
          { name: '财务优化', link: '/solutions' },
        ],
      },
    },
  },
  ms: {
    nav: {
      home: 'Laman Utama',
      creditpilot: 'CreditPilot',
      advisory: 'Perkhidmatan',
      solutions: 'Penyelesaian',
      company: 'Syarikat',
      news: 'Berita',
      resources: 'Sumber',
      careers: 'Kerjaya',
      calculator: 'Kalkulator Pinjaman',
      loanOptimizer: 'Alat Pengoptimuman Pinjaman',
    },
    common: {
      learnMore: 'Ketahui Lebih Lanjut',
      getStarted: 'Mulakan',
      readMore: 'Baca Lagi',
      viewAll: 'Lihat Semua',
      contactUs: 'Hubungi Kami',
      applyNow: 'Mohon Sekarang',
      bookConsultation: 'Tempah Konsultasi',
      whatsappUs: 'WhatsApp Kami',
      explore: 'Terokai',
      viewDetails: 'Lihat Butiran',
      useCreditPilot: 'Guna CreditPilot',
    },
        home: {
      hero: {
        title: 'Wang Dunia, Milik Anda.',
        titleLine1: 'Wang Dunia,',
        titleLine2: 'Milik Anda.',
        subtitle: 'Penyelesaian Sehenti Anda',
        description: 'Untuk Pinjaman, Pengoptimuman Kewangan, Dan Perkhidmatan Nasihat Digital Untuk Perniagaan Anda.',
        descriptionLine1: 'Untuk Pinjaman, Pengoptimuman Kewangan,',
        descriptionLine2: 'Dan Perkhidmatan Nasihat Digital Untuk Perniagaan Anda.',
        bottomDescription: 'INFINITE GZ Menyediakan Analisis Kewangan Menyeluruh, Padanan Pinjaman Dari Semua Bank Dan Syarikat Fintech Malaysia, Serta 8 Perkhidmatan Pelengkap - Semua Tanpa Yuran Pendahuluan.',
      },
      products: {
        tag: 'Perkhidmatan Kami',
        title: 'Penyelesaian Kewangan Lengkap Untuk Perniagaan Malaysia',
        items: [
          {
            tag: 'Analisis Pintar',
            title: 'CreditPilot',
            description: 'Sistem Analisis Pinjaman Pintar Yang Mencari Produk Pinjaman Terbaik Dari Semua Bank Malaysia, Bank Digital, Dan Syarikat Fintech Dengan Padanan Berkuasa AI.',
            features: ['Penambahbaikan DSR', 'Padanan Kadar Terbaik', 'Cadangan Pintar', 'Analisis Masa Nyata'],
            linkText: 'Guna Sekarang',
            linkUrl: 'https://portal.infinitegz.com/creditpilot',
          },
          {
            tag: 'Bimbingan Pakar',
            title: 'Nasihat Pinjaman',
            description: 'Perundingan Profesional Untuk Semua Jenis Pinjaman Termasuk Perumahan, Automotif, Dan Pembiayaan Perniagaan Dengan Yuran Pendahuluan Sifar Dan Harga Berasaskan Kejayaan.',
            features: ['Kos Pendahuluan Sifar', 'Perundingan Pakar', 'Yuran Berasaskan Kejayaan', 'Semua Jenis Pinjaman'],
            linkText: 'Berunding Sekarang',
            linkUrl: 'https://portal.infinitegz.com/advisory',
          },
          {
            tag: 'Transformasi Digital',
            title: 'Pendigitalan & Perakaunan',
            description: 'Transformasi Digital Lengkap Untuk Perniagaan Tradisional Termasuk Persediaan E-Dagang, Pengurusan Kedai Dalam Talian, Perkhidmatan Perakaunan, Dan Pengoptimuman Cukai.',
            features: ['Persediaan Kedai Dalam Talian', 'Pengoptimuman Cukai 15%', 'Perkhidmatan Perakaunan', 'Perancangan Perniagaan'],
            linkText: 'Ketahui Lebih Lanjut',
            linkUrl: 'https://portal.infinitegz.com/digital',
          },
        ],
      },
      content: {
        tag: 'Kecerdasan Kewangan',
        title: 'Hentikan Penolakan Pinjaman. Dapatkan Kelulusan.',
        description: '60% permohonan pinjaman di Malaysia ditolak kerana DSR melebihi had. Kami mendiagnosis profil kewangan anda, mengoptimumkan struktur hutang, dan memadankan anda dengan bank yang benar-benar akan meluluskan - sebelum anda membuang masa memohon.',
        features: [
          {
            title: 'Pengoptimuman DSR',
            description: 'DSR anda 75%? Bank menolak anda. Kami menyusun semula hutang anda, membersihkan kad kredit, mengoptimumkan jadual pembayaran. Hasil: DSR turun kepada 50%, kadar kelulusan meningkat 60-80%. Contoh sebenar: Hutang RM 5,000/bulan → RM 3,200/bulan selepas penyatuan.',
          },
          {
            title: 'Penyatuan Hutang',
            description: 'Pelbagai kad kredit, pinjaman peribadi, pinjaman kereta menghancurkan aliran tunai anda? Kami menyatukan menjadi satu pinjaman faedah rendah. Jimat RM 500-2,000/bulan. Contoh sebenar: 3 kad (RM 2,500/bulan) → 1 pinjaman bersatu (RM 1,800/bulan).',
          },
          {
            title: 'Pengoptimuman Cukai',
            description: 'Pemilik SME kehilangan wang pada cukai? Kami membantu anda menuntut potongan 15%, mengoptimumkan struktur perniagaan, memfail dengan betul dengan LHDN. Jimat RM 3,000-15,000/tahun secara sah. Contoh sebenar: Hasil RM 100K → Penjimatan cukai RM 15K melalui perancangan yang betul.',
          },
          {
            title: 'Pembaikan Skor Kredit',
            description: 'Skor CCRIS/CTOS terlalu rendah? Pembayaran lewat, penggunaan tinggi merosakkan rekod anda? Kami menyediakan strategi pembaikan, pengoptimuman pembayaran, dan pelan peningkatan 3-6 bulan. Contoh sebenar: Skor 650 → 780 dalam 6 bulan, pinjaman perumahan diluluskan.',
          },
        ],
        detailsTitle: 'Lakukan Lebih Dengan CreditPilot',
        details: [
          {
            title: 'Padanan Pinjaman Pintar',
            description: 'Sistem Berkuasa AI Kami Menganalisis Profil Kewangan Anda Dan Memadankan Anda Dengan Produk Pinjaman Terbaik Dari Semua Bank Sah, Bank Digital, Dan Syarikat Fintech Di Malaysia. Dapatkan Cadangan Diperibadikan Berdasarkan Situasi Unik Anda.',
          },
          {
            title: 'Perkhidmatan Menyeluruh',
            description: 'Selain Pinjaman, Kami Menawarkan 8 Perkhidmatan Pelengkap Termasuk Perancangan Perniagaan, Perundingan Insurans, Persediaan E-Dagang, Perakaunan, Dan Pengurusan Kad Kredit - Semua Percuma Sepenuhnya Untuk Pelanggan Pinjaman Kami. Kejayaan Anda Adalah Kejayaan Kami.',
          },
          {
            title: 'Yuran Pendahuluan Sifar',
            description: 'Kami Hanya Mengenakan Bayaran Selepas Kelulusan Pinjaman Berjaya. Model Berasaskan Kejayaan Kami Memastikan Kami Komited Sepenuhnya Untuk Mendapatkan Hasil Terbaik Untuk Anda. Tiada Yuran Tersembunyi, Tiada Kejutan - Hanya Perkhidmatan Telus.',
          },
          {
            title: '100% Sah & Patuh',
            description: 'Kami Hanya Bekerja Dengan Institusi Kewangan Berlesen Yang Dikawal Oleh Bank Negara Malaysia. Tiada Along, Tiada Pinjaman Haram - Keselamatan Dan Keamanan Kewangan Anda Adalah Keutamaan Utama Kami.',
          },
        ],
      },
      news: {
        tag: 'Kemas Kini Terkini',
        title: 'Berita & Pandangan',
        description: 'Kekal Bermaklumat Dengan Berita Kewangan Terkini, Dasar Pinjaman, Kisah Kejayaan, Dan Pandangan Pakar',
        items: [
          {
            date: '20 Dis 2024',
            title: 'Perubahan Kadar OPR Baru',
            description: 'Bank Negara Malaysia Mengumumkan Kadar Dasar Semalaman Baru. Ketahui Bagaimana Ini Memberi Kesan Kepada Permohonan Pinjaman Sedia Ada Dan Masa Hadapan Anda.',
            category: 'Kemas Kini Dasar',
          },
          {
            date: '15 Dis 2024',
            title: 'Kejayaan Pinjaman Perniagaan RM 2 Juta',
            description: 'Bagaimana Kami Membantu Perniagaan Pembuatan Tradisional Mendapatkan Pembiayaan Untuk Transformasi Digital Dan Rancangan Pengembangan.',
            category: 'Kajian Kes',
          },
          {
            date: '10 Dis 2024',
            title: 'Perancangan Cukai Akhir Tahun 2024',
            description: 'Maksimumkan Tuntutan Pelepasan Cukai Anda Dan Optimumkan Kedudukan Kewangan Anda Sebelum Tarikh Akhir Akhir Tahun Menghampiri.',
            category: 'Petua Kewangan',
          },
          {
            date: '5 Dis 2024',
            title: 'Bank Digital Vs Bank Tradisional',
            description: 'Perbandingan Menyeluruh Produk Pinjaman Dari Bank Digital Dan Institusi Perbankan Tradisional Di Malaysia.',
            category: 'Panduan',
          },
          {
            date: '28 Nov 2024',
            title: 'Pengurusan Hutang Kad Kredit',
            description: 'Pelajari Strategi Berkesan Untuk Menguruskan Pelbagai Kad Kredit, Elakkan Yuran Lewat, Dan Optimumkan Nisbah Penggunaan.',
            category: 'Petua Kewangan',
          },
          {
            date: '20 Nov 2024',
            title: 'Perniagaan Tradisional Menjadi Digital',
            description: 'Bagaimana Perniagaan Runcit Berusia 40 Tahun Meningkatkan Hasil Tiga Kali Ganda Melalui Transformasi Digital Dan Saluran Jualan Dalam Talian.',
            category: 'Kajian Kes',
          },
        ],
      },
      footer: {
        title: 'Bersedia Untuk Mengoptimumkan Kewangan Anda?',
        description: 'Sertai Ribuan Perniagaan Malaysia Yang Mempercayai INFINITE GZ Untuk Kejayaan Kewangan Mereka',
        copyright: '© 2024 INFINITE GZ SDN BHD. Hak Cipta Terpelihara.',
        sections: {
          try: 'Cuba CreditPilot Di',
          products: 'Produk',
          company: 'Syarikat',
          resources: 'Sumber',
        },
        links: {
          web: 'Web',
          whatsapp: 'WhatsApp',
          phone: 'Telefon',
          creditpilot: 'CreditPilot',
          advisory: 'Nasihat Pinjaman',
          creditCard: 'Perkhidmatan Kad Kredit',
          digital: 'Pendigitalan',
          accounting: 'Perkhidmatan Perakaunan',
          about: 'Tentang Kami',
          careers: 'Kerjaya',
          contact: 'Hubungi',
          newsUpdates: 'Berita & Kemas Kini',
          partners: 'Rakan Kongsi',
          dsrGuide: 'Panduan DSR',
          taxOptimization: 'Pengoptimuman Cukai',
          faq: 'Soalan Lazim',
          privacy: 'Dasar Privasi',
          legal: 'Undang-undang',
          terms: 'Terma',
        },
      },
    },
    creditpilot: {
      meta: {
        title: 'CreditPilot | INFINITE GZ',
        description: 'Sistem padanan pinjaman berkuasa AI yang mencari produk pinjaman terbaik dari semua institusi kewangan Malaysia. Semak DSR anda dahulu, kemudian mohon kepada bank yang betul.',
      },
      hero: {
        tag: 'Padanan Pinjaman Berkuasa AI',
        title: 'Berhenti Memohon Kepada Bank Yang Akan Menolak Anda. Kami Tunjukkan Bank Mana Yang Akan Meluluskan.',
        subtitle: 'Analisis Percuma 2 Minit. Lihat DSR Anda, Dapatkan Cadangan Bank, Ketahui Peluang Kelulusan Anda - Sebelum Anda Membuang Masa Memohon.',
        cta1: 'Mulakan Analisis Percuma',
        cta2: 'Ketahui Lebih Lanjut',
      },
      capabilities: {
        tag: 'Mengapa CreditPilot Berbeza',
        title: 'Kami Bukan Hanya Mengisi Borang - Kami Mengoptimumkan Profil Anda Terlebih Dahulu',
        features: [
          {
            title: 'Padanan Bank Pintar (Bukan Hanya Senarai Produk)',
            description: 'Masalah: Anda tidak tahu bank mana yang akan meluluskan anda. Bank berbeza mempunyai had DSR yang berbeza (Maybank 40-70%, Hong Leong 60-80%). Bank salah = penolakan + rekod CCRIS negatif. Penyelesaian: AI kami menganalisis profil anda, DSR, jenis pendapatan, dan memadankan anda dengan 3 bank yang paling mungkin meluluskan. Contoh sebenar: Bebas RM 10K/bulan, RHB hanya mengiktiraf 60% (RM 6K), tetapi Hong Leong mengiktiraf 90% (RM 9K). Kami mengesyorkan Hong Leong. Hasil: Perbezaan kapasiti pinjaman RM 496K lebih 10 tahun.',
          },
          {
            title: 'Pengoptimuman DSR Sebelum Permohonan',
            description: 'Masalah: DSR anda 75%, bank menolak anda. Kebanyakan ejen hanya menghantar permohonan anda. Penyelesaian: Kami menganalisis hutang anda, menyatukan pinjaman faedah tinggi, mengoptimumkan jadual pembayaran. Hasil: DSR turun kepada 50%, kadar kelulusan meningkat 60-80%. Contoh sebenar: Hutang RM 5,000/bulan → RM 3,200/bulan selepas penyatuan. DSR 75% → 48%. CIMB meluluskan pinjaman RM 30K.',
          },
          {
            title: 'Perbandingan Masa Nyata Dengan Kebarangkalian Kelulusan',
            description: 'Masalah: Anda membandingkan kadar faedah, tetapi tidak tahu bank mana yang akan benar-benar meluluskan anda. Penyelesaian: Kami menunjukkan kadar faedah, yuran, terma, DAN kebarangkalian kelulusan untuk setiap bank berdasarkan profil anda. Data masa nyata dari 50+ bank Malaysia, bank digital, dan syarikat fintech. Ketepatan padanan 98%. Masa kelulusan purata: 21-25 hari (vs purata pasaran 45 hari).',
          },
        ],
      },
      howItWorks: {
        tag: 'Cara Ia Berfungsi',
        title: 'Dapatkan Keputusan Anda Dalam 3 Langkah Mudah',
        steps: [
          {
            number: '01',
            title: 'Masukkan Butiran Kewangan Anda (2 Minit)',
            description: 'Berikan: Pendapatan bulanan, hutang sedia ada (kad kredit, pinjaman), jenis pekerjaan. Semua data disulitkan dan selamat. Tiada semakan kredit keras yang menjejaskan skor anda.',
          },
          {
            number: '02',
            title: 'Analisis AI & Pengiraan DSR',
            description: 'Sistem kami: (1) Mengira DSR tepat anda menggunakan standard bank sebenar, (2) Menganalisis 50+ institusi secara masa nyata, (3) Mengenal pasti bank mana yang akan meluluskan anda berdasarkan profil anda, (4) Menyusun pilihan mengikut kebarangkalian kelulusan. Keputusan dalam 2 minit.',
          },
          {
            number: '03',
            title: 'Dapatkan Cadangan Bank & Pelan Pengoptimuman',
            description: 'Terima: (1) DSR semasa anda dan bank mana yang akan meluluskan/menolak, (2) 3 cadangan bank teratas dengan kebarangkalian kelulusan, (3) Pelan pengoptimuman DSR jika diperlukan (penyatuan hutang, penyusunan semula pembayaran), (4) Peta jalan permohonan lengkap. Semua percuma. Tiada kewajipan.',
          },
        ],
      },
      cta: {
        title: 'Bersedia Untuk Mencari Padanan Pinjaman Terbaik Anda?',
        description: 'Mulakan analisis percuma 2 minit anda sekarang. Lihat DSR anda, dapatkan cadangan bank, dan ketahui peluang kelulusan anda - sebelum anda membuang masa memohon kepada bank yang akan menolak anda.',
        buttonText: 'Mulakan Analisis Percuma',
      },
    },

    advisory: {
      meta: {
        title: 'Perkhidmatan Nasihat | INFINITE GZ',
        description: '8 perkhidmatan perniagaan pelengkap percuma sepenuhnya untuk pelanggan pinjaman. Dari pengoptimuman DSR hingga persediaan e-dagang, perakaunan, dan perancangan cukai.',
      },
      hero: {
        tag: 'Penyelesaian Kewangan Lengkap',
        title: '8 Perkhidmatan Perniagaan - Percuma Sepenuhnya Untuk Pelanggan Pinjaman',
        description: 'Kebanyakan ejen pinjaman hanya membantu anda mengisi borang. Kami melakukan lebih: pengoptimuman DSR, penyatuan hutang, perancangan perniagaan, persediaan e-dagang, perakaunan, pengoptimuman cukai - semua PERCUMA apabila anda mendapat pinjaman melalui kami. Kejayaan anda adalah kejayaan kami.',
      },
      services: {
        tag: '8 Perkhidmatan Teras',
        title: 'Apa Yang Anda Dapat: Sokongan Perniagaan Lengkap (Semua Percuma)',
        items: [
          {
            num: '01',
            title: 'Pengoptimuman Kewangan',
            description: 'Pengoptimuman DSR (meningkatkan kadar kelulusan 60-80%), penyatuan hutang (menjimatkan RM 500-2,000/bulan), pembaikan skor kredit (650 → 780 dalam 6 bulan), pengurusan aliran tunai. Nilai sebenar: RM 10K-50K dijimatkan dalam faedah lebih 3 tahun.',
          },
          {
            num: '02',
            title: 'Pemasaran & Pengiklanan',
            description: 'Reka bentuk saluran, strategi pemasaran, perancangan pasaran, penyelesaian pengiklanan pembekal. Membantu perniagaan tradisional menjadi digital dan mencapai pelanggan baharu. Kes sebenar: Perniagaan runcit 40 tahun meningkatkan hasil 3 kali ganda melalui pemasaran digital.',
          },
          {
            num: '03',
            title: 'Perancangan Perniagaan',
            description: 'Pelan perniagaan profesional untuk pinjaman bank (nilai RM 1,500-3,500), reka bentuk pembiayaan, pembangunan model perniagaan, analisis pasaran. Masa kelulusan purata: 21-25 hari (vs pasaran 45 hari). Kadar kelulusan 98% untuk pelanggan BP kami.',
          },
          {
            num: '04',
            title: 'Perkhidmatan Insurans',
            description: 'Cadangan produk, perancangan insurans, analisis liputan. Memastikan perniagaan dan aset peribadi anda dilindungi dengan betul sambil mengoptimumkan kos.',
          },
          {
            num: '05',
            title: 'Penyelesaian E-Dagang ⭐',
            description: 'Persediaan kedai dalam talian pantas (Shopee, Lazada, laman web sendiri), strategi promosi, sokongan operasi, pembinaan saluran. Kes sebenar: Pengilang tradisional meningkatkan hasil 3 kali ganda melalui e-dagang. Persediaan lengkap dalam 2-4 minggu.',
          },
          {
            num: '06',
            title: 'Sistem Keahlian',
            description: 'Reka bentuk sistem, program mata & ganjaran, perancangan faedah. Membina kesetiaan pelanggan dan meningkatkan pembelian berulang. Nilai sebenar: Peningkatan pengekalan pelanggan 20-30%.',
          },
          {
            num: '07',
            title: 'Perakaunan & Pengoptimuman Cukai',
            description: 'Simpan kira, pemfailan cukai dengan LHDN, penyata kewangan, sokongan audit, pengoptimuman cukai 15%. Jimat RM 3,000-15,000/tahun secara sah. Kes sebenar: Hasil RM 100K → Penjimatan cukai RM 15K melalui perancangan yang betul.',
          },
          {
            num: '08',
            title: 'Pengurusan Kad Kredit',
            description: 'Peringatan pembayaran, pembayaran bagi pihak, perkhidmatan pembelian bagi pihak. Jimat RM 1,200-5,000/tahun dengan mengelakkan yuran lewat dan memaksimumkan ganjaran. Model perkongsian hasil 50/50 atau langganan RM 99/bulan.',
          },
        ],
      },
      benefits: {
        tag: 'Mengapa Ini Berbeza',
        title: 'Kami Bukan Hanya Ejen Pinjaman - Kami Adalah Rakan Kongsi Perniagaan Anda',
        items: [
          {
            icon: '',
            title: 'Kos Pendahuluan Sifar',
            description: 'Semua 8 perkhidmatan adalah PERCUMA sepenuhnya untuk pelanggan pinjaman. Kami hanya mengenakan bayaran selepas pinjaman anda diluluskan. Tiada yuran tersembunyi, tiada kejutan. Jika pinjaman anda ditolak, anda tidak membayar apa-apa.',
          },
          {
            icon: '',
            title: 'Kami Membuat Perniagaan Anda Sedia Pinjaman',
            description: 'Masalah: Perniagaan tradisional tidak boleh mendapat pinjaman kerana bank tidak melihat hasil digital, perakaunan yang betul, atau potensi pertumbuhan. Penyelesaian: Kami membantu anda mendigitalkan, mengatur akaun, mencipta pelan perniagaan, dan mengoptimumkan kewangan - menjadikan anda menarik kepada bank.',
          },
          {
            icon: '',
            title: 'Sokongan & Pengoptimuman Berterusan',
            description: 'Kami tidak hilang selepas kelulusan pinjaman. Semakan suku tahunan, perancangan cukai tahunan, pemantauan DSR berterusan, sokongan pertumbuhan perniagaan. Contoh sebenar: Pelanggan mendapat pinjaman RM 2M, kami membantu mereka berkembang secara digital, hasil meningkat 3 kali ganda dalam 2 tahun.',
          },
        ],
      },
      cta: {
        title: 'Bersedia Untuk Mendapatkan Pinjaman + Sokongan Perniagaan Percuma?',
        description: 'Tempah konsultasi percuma. Kami akan menilai kelayakan pinjaman anda, menunjukkan bank mana yang akan meluluskan anda, dan menerangkan bagaimana semua 8 perkhidmatan boleh membantu perniagaan anda berkembang - semuanya pada kos pendahuluan sifar.',
      },
    },
    solutions: {
      meta: {
        title: 'Penyelesaian | INFINITE GZ',
        description: 'Penyelesaian kewangan untuk semua perniagaan Malaysia. Dari perundingan pinjaman hingga transformasi digital.',
      },
      hero: {
        tag: 'Penyelesaian kewangan untuk semua perniagaan Malaysia',
        title: 'Pinjaman Ditolak? DSR Terlalu Tinggi? Kami Membetulkan Segala-galanya - Kemudian Membuat Anda Diluluskan.',
        description: 'Kebanyakan ejen pinjaman hanya mengisi borang. Kami melakukan lebih: pengoptimuman DSR, penyatuan hutang, perancangan perniagaan, persediaan e-dagang, perakaunan, pengoptimuman cukai - semuanya PERCUMA apabila anda mendapat pinjaman melalui kami. Kami membuat perniagaan anda sedia pinjaman, kemudian memadankan anda dengan bank yang akan benar-benar meluluskan. Kos pendahuluan sifar. Harga berasaskan kejayaan sahaja.',
      },
      products: [
        {
          tag: 'SISTEM AI',
          title: 'CreditPilot',
          description: 'Sistem padanan pinjaman berkuasa AI yang menganalisis profil kewangan anda dan mencari produk pinjaman terbaik dari 50+ bank dan syarikat fintech Malaysia. Ketepatan padanan 98%, analisis 2 minit.',
          linkText: 'Ketahui lebih lanjut',
        },
        {
          tag: '8 PERKHIDMATAN',
          title: 'Nasihat',
          description: 'Perkhidmatan perniagaan yang komprehensif termasuk pengoptimuman kewangan, penyelesaian e-dagang, perakaunan, strategi pemasaran, dan banyak lagi. Semua perkhidmatan percuma sepenuhnya untuk pelanggan pinjaman.',
          linkText: 'Lihat semua perkhidmatan',
        },
        {
          tag: 'INFRASTRUKTUR',
          title: 'Sumber',
          description: 'Dikuasakan oleh pangkalan data pinjaman yang komprehensif, pemantauan kadar masa nyata, dan algoritma pengoptimuman DSR yang canggih. 50+ institusi, RM 500J+ difasilitasi, melayani 5,000+ perniagaan.',
          linkText: 'Terokai infrastruktur',
        },
      ],
      coreBusiness: {
        tag: 'Perniagaan Teras',
        title: 'Kami Bukan Hanya Mengisi Borang - Kami Mengoptimumkan Profil Anda Terlebih Dahulu, Kemudian Padankan Anda Dengan Bank Yang Betul',
        description: 'Masalah: 60% permohonan pinjaman ditolak kerana DSR terlalu tinggi, akaun kacau, atau struktur perniagaan tidak memenuhi keperluan bank. Kebanyakan ejen hanya menghantar permohonan anda. Penyelesaian: Kami menganalisis DSR anda, mengoptimumkan struktur hutang, mengatur akaun, mencipta pelan perniagaan, dan KEMUDIAN memadankan anda dengan bank yang akan benar-benar meluluskan. Kami bekerja dengan 50+ institusi berlesen (bank, bank digital, fintech) - 100% sah, tiada pinjaman haram.',
        features: [
          {
            icon: '',
            title: 'Pengoptimuman DSR (Meningkatkan Kadar Kelulusan 60-80%)',
            description: 'Contoh sebenar: Hutang RM 5,000/bulan → RM 3,200/bulan selepas penyatuan. DSR 75% → 48%. CIMB meluluskan pinjaman RM 30K. Kami menganalisis hutang anda, menyatukan pinjaman faedah tinggi, mengoptimumkan jadual pembayaran SEBELUM anda memohon.',
          },
          {
            icon: '',
            title: 'Padanan Bank Pintar (Bukan Hanya Senarai Produk)',
            description: 'Bank berbeza mempunyai had DSR yang berbeza (Maybank 40-70%, Hong Leong 60-80%). Bank salah = penolakan + rekod CCRIS negatif. Kami memadankan anda dengan 3 bank yang paling mungkin meluluskan berdasarkan profil anda. Contoh sebenar: Bebas RM 10K/bulan, RHB hanya mengiktiraf 60% (RM 6K), tetapi Hong Leong mengiktiraf 90% (RM 9K). Perbezaan kapasiti pinjaman: RM 496K lebih 10 tahun.',
          },
          {
            icon: '',
            title: 'Perancangan Perniagaan (Kadar Kelulusan 98%)',
            description: 'Perniagaan tradisional tidak boleh mendapat pinjaman kerana bank tidak melihat potensi pertumbuhan. Kami mencipta pelan perniagaan profesional, mengatur akaun, dan menjadikan anda menarik kepada bank. Masa kelulusan purata: 21-25 hari (vs pasaran 45 hari).',
          },
          {
            icon: '',
            title: 'Penyatuan Hutang (Jimat RM 500-2,000/Bulan)',
            description: 'Pelbagai hutang faedah tinggi menghancurkan aliran tunai? Kami menyatukannya menjadi satu pembayaran faedah rendah. Contoh sebenar: 3 kad kredit (faedah 18%) → 1 pinjaman (faedah 6-8%). Bayaran bulanan turun, DSR bertambah baik, peluang kelulusan pinjaman meningkat.',
          },
          {
            icon: '',
            title: 'Pengoptimuman Cukai (Jimat RM 3,000-15,000/Tahun)',
            description: 'Pemilik SME kehilangan wang pada cukai? Kami membantu anda menuntut potongan 15%, mengoptimumkan struktur perniagaan, memfailkan dengan betul dengan LHDN. Contoh sebenar: Hasil RM 100K → Penjimatan cukai RM 15K melalui perancangan yang betul.',
          },
          {
            icon: '',
            title: 'Pembaikan Skor Kredit (650 → 780 dalam 6 Bulan)',
            description: 'Skor CCRIS/CTOS rendah menghalang pinjaman? Kami menyediakan strategi pembaikan, pengoptimuman pembayaran, dan pelan peningkatan 3-6 bulan. Contoh sebenar: Skor 650 → 780 dalam 6 bulan, pinjaman perumahan diluluskan.',
          },
        ],
      },
      complementaryServices: {
        tag: '8 Perkhidmatan Pelengkap',
        title: '8 Perkhidmatan Perniagaan - Semua PERCUMA Untuk Pelanggan Pinjaman',
        description: 'Kebanyakan ejen pinjaman hilang selepas kelulusan pinjaman. Kami tidak. Kami membantu anda membesar perniagaan anda dengan 8 perkhidmatan pelengkap - semuanya PERCUMA sepenuhnya apabila anda mendapat pinjaman melalui kami. Kejayaan anda adalah kejayaan kami.',
        items: [
          {
            num: '01',
            title: 'Pengoptimuman Kewangan',
            description: 'Pengoptimuman DSR (meningkatkan kadar kelulusan 60-80%), penyatuan hutang (menjimatkan RM 500-2,000/bulan), pembaikan skor kredit (650 → 780 dalam 6 bulan), pengurusan aliran tunai. Nilai sebenar: RM 10K-50K dijimatkan dalam faedah lebih 3 tahun.',
          },
          {
            num: '02',
            title: 'Strategi Pemasaran & Digital',
            description: 'Reka bentuk saluran, strategi pemasaran, perancangan pasaran, penyelesaian pengiklanan pembekal. Membantu perniagaan tradisional menjadi digital dan mencapai pelanggan baharu. Kes sebenar: Perniagaan runcit 40 tahun meningkatkan hasil 3 kali ganda melalui pemasaran digital.',
          },
          {
            num: '03',
            title: 'Perancangan Perniagaan',
            description: 'Pelan perniagaan profesional untuk pinjaman bank (nilai RM 1,500-3,500), reka bentuk pembiayaan, pembangunan model perniagaan, analisis pasaran. Masa kelulusan purata: 21-25 hari (vs pasaran 45 hari). Kadar kelulusan 98% untuk pelanggan BP kami.',
          },
          {
            num: '04',
            title: 'Perkhidmatan Insurans',
            description: 'Cadangan produk, perancangan insurans, analisis liputan. Memastikan perniagaan dan aset peribadi anda dilindungi dengan betul sambil mengoptimumkan kos.',
          },
          {
            num: '05',
            title: 'Penyelesaian E-Dagang ⭐',
            description: 'Persediaan kedai dalam talian pantas (Shopee, Lazada, laman web sendiri), strategi promosi, sokongan operasi, pembinaan saluran. Kes sebenar: Pengilang tradisional meningkatkan hasil 3 kali ganda melalui e-dagang. Persediaan lengkap dalam 2-4 minggu.',
          },
          {
            num: '06',
            title: 'Sistem Keahlian',
            description: 'Reka bentuk sistem, program mata & ganjaran, perancangan faedah. Membina kesetiaan pelanggan dan meningkatkan pembelian berulang. Nilai sebenar: Peningkatan pengekalan pelanggan 20-30%.',
          },
          {
            num: '07',
            title: 'Perakaunan & Pengoptimuman Cukai',
            description: 'Simpan kira, pemfailan cukai dengan LHDN, penyata kewangan, sokongan audit, pengoptimuman cukai 15%. Jimat RM 3,000-15,000/tahun secara sah. Kes sebenar: Hasil RM 100K → Penjimatan cukai RM 15K melalui perancangan yang betul.',
          },
          {
            num: '08',
            title: 'Pengurusan Kad Kredit',
            description: 'Peringatan pembayaran, pembayaran bagi pihak, perkhidmatan pembelian bagi pihak. Jimat RM 1,200-5,000/tahun dengan mengelakkan yuran lewat dan memaksimumkan ganjaran. Model perkongsian hasil 50/50 atau langganan RM 99/bulan.',
          },
        ],
      },
      pricing: {
        tag: 'Model Harga',
        title: 'Tiada Yuran Pendahuluan',
        models: [
          {
            tag: 'PERKHIDMATAN TERAS',
            title: 'Yuran Kejayaan',
            price: '💼',
            description: 'Caj selepas kelulusan pinjaman. Hanya caj selepas kelulusan pinjaman yang berjaya dan pengeluaran.',
            features: ['Tiada Kos Pendahuluan', 'Tiada Caj Tersembunyi', 'Harga Berasaskan Kejayaan'],
          },
          {
            tag: '8 PERKHIDMATAN',
            title: 'Percuma Sepenuhnya',
            price: '🎁',
            description: 'Percuma sepenuhnya untuk pelanggan pinjaman. Semua 8 perkhidmatan pelengkap percuma untuk pelanggan pinjaman.',
            features: ['Pengoptimuman Kewangan', 'Penyelesaian E-Dagang', 'Perakaunan & Lain-lain'],
          },
          {
            tag: 'RAKAN KONGSI KHAS',
            title: 'Perkongsian 50/50',
            price: '🤝',
            description: 'Model perkongsian keuntungan. Perkongsian keuntungan untuk perkhidmatan pengurusan kad kredit.',
            features: ['Perkongsian Hasil', 'Perkongsian Menang-Menang', 'Harga Telus'],
          },
        ],
      },
      targetCustomers: {
        tag: 'Pelanggan Sasaran',
        title: 'Siapa Yang Kami Layani: PKS Malaysia & Individu Dengan Masalah Hutang',
        customers: [
          {
            icon: '',
            title: 'Pemilik Perniagaan Tradisional (40-50 Tahun)',
            description: 'Masalah: Memerlukan pinjaman untuk pengembangan tetapi DSR terlalu tinggi, akaun kacau, tiada hasil digital. Bank menolak kerana tidak melihat potensi pertumbuhan. Penyelesaian: Kami membantu anda mendigitalkan, mengatur akaun, mencipta pelan perniagaan, mengoptimumkan DSR. Kes sebenar: Perniagaan runcit 40 tahun mendapat pinjaman RM 2M selepas pengoptimuman kami, hasil meningkat 3 kali ganda dalam 2 tahun.',
          },
          {
            icon: '',
            title: 'Syarikat PKS (Pembuatan, Runcit, F&B)',
            description: 'Masalah: Pelbagai hutang faedah tinggi, aliran tunai tidak stabil, tidak boleh mendapat pinjaman. Penyelesaian: Kami menyatukan hutang, mengoptimumkan DSR, mencipta pelan perniagaan, menyediakan e-dagang. Kes sebenar: Syarikat pembuatan menjimatkan RM 10K/tahun dalam faedah, mendapat pinjaman RM 500K untuk pengembangan.',
          },
          {
            icon: '',
            title: 'Hutang Kad Kredit Tinggi',
            description: 'Pelanggan dengan hutang kad kredit tinggi yang memerlukan penyatuan hutang dan pengoptimuman kewangan',
          },
          {
            icon: '',
            title: 'Rakan Kongsi Perniagaan',
            description: 'Pembekal, pelanggan ahli yang memerlukan sokongan perniagaan yang menyeluruh',
          },
        ],
      },
      cta: {
        title: 'Bersedia Untuk Mengubah Perniagaan Anda?',
        description: 'Sertai 5,000+ perniagaan yang telah mendapat pembiayaan yang lebih baik melalui INFINITE GZ',
      },
    },
    creditCard: {
      meta: {
        title: 'Pengurusan Kad Kredit | INFINITE GZ',
        description: 'Perkhidmatan pengurusan kad kredit profesional. Jimat RM 1,200-5,000 setahun melalui peringatan pembayaran pintar, pengoptimuman, dan pengurusan hutang.',
      },
      hero: {
        tag: 'Pengurusan Kad Kredit Profesional',
        title: 'Hentikan Terlepas Bayaran. Jimat RM 1,200-5,000/Tahun. Tingkatkan Skor Kredit Anda.',
        subtitle: 'Hutang kad kredit Malaysia: RM 50.7B. RM 551.8M tertunggak (1.1%). Bayaran lewat = penalti RM 150-300 + kerosakan skor kredit. Kami membetulkannya.',
        description: 'Tidak akan terlepas bayaran lagi. Maksimumkan ganjaran. Perbaiki skor kredit. Semua diuruskan secara profesional.',
        cta1: 'Perundingan Percuma',
        cta2: 'Kira Potensi Saya',
        stats: 'Dipercayai oleh',
        clients: 'Pelanggan',
        totalLimit: 'Jumlah Kredit Diuruskan',
        saved: 'Jumlah Nilai Dicipta',
      },
      painPoints: {
        tag: 'Cabaran Biasa',
        title: '3 Masalah Utama Pengguna Kad Kredit Malaysia',
        description: 'Hutang kad kredit Malaysia: RM 50.7B. RM 551.8M tertunggak (1.1%). Setiap bayaran lewat = penalti RM 150-300 + kerosakan skor kredit. Penggunaan kad kredit tinggi = DSR lebih tinggi = penolakan pinjaman. Kami membetulkan semua ini.',
        items: [
          {
            icon: '',
            iconComponent: React.createElement(AlertTriangle, { size: 32, strokeWidth: 1.5 }),
            title: 'Terlupa Bayaran = Penalti RM 150-300 + Kerosakan Skor Kredit',
            description: 'Pelbagai kad, tarikh bayaran berbeza, mudah terlepas. Setiap bayaran lewat: penalti RM 150-300 + menjejaskan rekod CCRIS/CTOS + meningkatkan DSR. Kesan sebenar: Penolakan pinjaman kerana DSR terlalu tinggi dari hutang kad kredit.',
            data: 'RM 551.8M Hutang Tertunggak',
          },
          {
            icon: '',
            iconComponent: React.createElement(TrendingUp, { size: 32, strokeWidth: 1.5 }),
            title: 'Pengoptimuman Lemah = Kehilangan RM 800-3,000/Tahun',
            description: 'Tidak memahami ganjaran kad, mata terbuang, yuran tahunan tinggi. Tidak menggunakan kad yang betul untuk pembelian = kehilangan pulangan tunai. Membayar yuran tahunan yang tidak perlu. Kesan sebenar: Kehilangan RM 800-3,000/tahun dalam faedah.',
            data: 'Perangkap Faedah 18% Setahun',
          },
          {
            icon: '',
            iconComponent: React.createElement(Layers, { size: 32, strokeWidth: 1.5 }),
            title: 'Kad Pelbagai Keliru = Tekanan + Terlepas Bayaran',
            description: 'Menguruskan 2-3 kad, penyata keliru, tarikh pengebilan berbeza. Mudah terlepas bayaran. Penggunaan kredit tinggi = DSR lebih tinggi = penolakan pinjaman. Kesan sebenar: DSR 75% kerana hutang kad kredit, bank menolak permohonan pinjaman.',
            data: 'Purata 2-3 Kad Per Orang',
          },
        ],
      },
      services: {
        tag: 'Perkhidmatan Kami',
        title: '5 Perkhidmatan Profesional - Jimat RM 1,200-5,000/Tahun & Perbaiki Skor Kredit',
        items: [
          {
            icon: '',
            iconComponent: React.createElement(Bell, { size: 28, strokeWidth: 1.5 }),
            title: 'Peringatan Pembayaran (Jimat RM 500-2,000/Tahun)',
            description: 'Sistem peringatan 3 peringkat (WhatsApp + SMS + Email) 7/3/1 hari sebelum tarikh tamat. Tidak akan terlepas bayaran lagi. Elakkan penalti bayaran lewat RM 150-300 setiap kad. Hasil sebenar: Hanya yuran lewat menjimatkan RM 500-2,000/tahun.',
          },
          {
            icon: '',
            iconComponent: React.createElement(CreditCard, { size: 28, strokeWidth: 1.5 }),
            title: 'Bayaran Bagi Pihak (Jaminan 100% Tepat Masa)',
            description: 'Kami membayar bagi pihak anda dalam 2 hari bekerja. Jaminan pembayaran tepat masa 100%. Melindungi skor kredit anda. Elakkan yuran lewat. Laporan penyelarasan bulanan. Hasil sebenar: Peningkatan skor kredit (650 → 780 dalam 6 bulan).',
          },
          {
            icon: '',
            iconComponent: React.createElement(ShoppingCart, { size: 28, strokeWidth: 1.5 }),
            title: 'Pembelian Bagi Pihak (Maksimumkan Ganjaran)',
            description: 'Sistem pemilihan kad pintar. Secara automatik menggunakan kad terbaik untuk setiap pembelian untuk memaksimumkan pulangan tunai dan mata. Model perkongsian hasil 50/50. Hasil sebenar: Ganjaran tambahan RM 800-3,000/tahun.',
          },
          {
            icon: '',
            iconComponent: React.createElement(TrendingUp, { size: 28, strokeWidth: 1.5 }),
            title: 'Pengoptimuman Kad (Jimat RM 500-1,500/Tahun)',
            description: 'Analisis perbelanjaan bulanan. Cadangan penggunaan kad optimum. Perundingan pengecualian yuran tahunan (jimat RM 200-800/tahun setiap kad). Peringatan penebusan ganjaran. Hasil sebenar: Jimat RM 500-1,500/tahun dalam yuran dan maksimumkan ganjaran.',
          },
          {
            icon: '',
            iconComponent: React.createElement(LifeBuoy, { size: 28, strokeWidth: 1.5 }),
            title: 'Pengurusan Hutang (Perbaiki DSR & Skor Kredit)',
            description: 'Pengiraan DSR percuma. Cadangan penyatuan hutang (jimat RM 500-2,000/bulan). Strategi peningkatan skor kredit (650 → 780 dalam 6 bulan). Penyelesaian kadar faedah lebih rendah. Hasil sebenar: DSR bertambah baik, peluang kelulusan pinjaman meningkat 60-80%.',
          },
        ],
      },
      cases: {
        tag: 'Kajian Kes Pelanggan',
        title: 'Pelanggan Sebenar, Penjimatan Sebenar',
        before: 'Sebelum',
        after: 'Selepas',
        result: 'Penjimatan Tahunan',
        items: [
          {
            num: '01',
            name: 'Encik Wang',
            before: '4 kad keliru, bayaran bulanan RM 2,500, selalu lewat',
            after: 'Pinjaman disatukan + pengurusan pintar, bayaran tepat masa',
            savings: 'RM 3,200',
          },
          {
            num: '02',
            name: 'Cik Li',
            before: 'Skor kredit 650, pinjaman rumah ditolak, kadar faedah tinggi',
            after: 'Pengoptimuman kredit, skor meningkat ke 780, pinjaman diluluskan',
            savings: 'RM 45,000',
          },
          {
            num: '03',
            name: 'Boss Chen',
            before: 'Kad korporat tidak dioptimumkan, perbelanjaan bulanan RM 30K, mata terbuang',
            after: 'Pembelian pintar, mata maksimum, yuran tahunan dikecualikan',
            savings: 'RM 5,000+',
          },
        ],
      },
      pricing: {
        tag: 'Harga Telus',
        title: 'Pilih Pelan Anda',
        plans: [
          {
            name: 'Individu',
            description: 'Untuk pengguna kad kredit peribadi',
            price: '50/50 Kongsi',
            period: 'atau RM 99/bulan',
            features: [
              'Sehingga 3 kad kredit',
              'Peringatan pembayaran',
              'Pengoptimuman kad',
              'Laporan faedah bulanan',
              'Bayaran-bagi-pihak +RM 50/bln',
            ],
            cta: 'Mulakan',
            link: 'https://wa.me/60123456789',
            featured: false,
          },
          {
            name: 'Korporat',
            description: 'Untuk perniagaan dan PKS',
            price: 'RM 299-999',
            period: 'sebulan',
            features: [
              'Harga 4 peringkat',
              'Pengurus akaun khusus',
              'Pengurusan kad pekerja',
              'Kajian strategi suku tahun',
              'Sokongan keutamaan',
            ],
            cta: 'Hubungi Jualan',
            link: 'https://wa.me/60123456789',
            featured: true,
          },
          {
            name: 'Pelanggan Pinjaman',
            description: 'Eksklusif untuk pelanggan pinjaman kami',
            price: 'PERCUMA',
            period: '12 bulan pertama',
            features: [
              'Semua ciri standard',
              'Diskaun 50% selepas 12 bulan',
              'Perkhidmatan percuma',
              'Tiada bayaran pendahuluan',
              'Batal bila-bila masa',
            ],
            cta: 'Mohon Pinjaman',
            link: '/creditpilot',
            featured: false,
          },
        ],
      },
      social: {
        stats: [
          { value: '500+', label: 'Pelanggan' },
          { value: '1,000+', label: 'Kad Diuruskan' },
          { value: 'RM 600K+', label: 'Jumlah Penjimatan' },
          { value: '98%', label: 'Kepuasan' },
        ],
        compliance: 'Mematuhi PDPA 2010',
        insurance: 'Insurans Indemniti Profesional RM 1M',
      },
      faq: {
        tag: 'Soalan Lazim',
        title: 'Soalan Lazim',
        items: [
          {
            question: 'Bagaimana anda mengenakan bayaran?',
            answer: 'Kami menawarkan dua model harga: 1) Perkongsian hasil 50/50 berasaskan kejayaan tanpa bayaran pendahuluan, atau 2) Langganan bulanan bermula dari RM 99. Pelanggan pinjaman menikmati 12 bulan perkhidmatan percuma.',
          },
          {
            question: 'Adakah ia selamat dan mematuhi?',
            answer: 'Ya. Kami mematuhi sepenuhnya Akta Perlindungan Data Peribadi 2010 (PDPA), mengekalkan insurans indemniti profesional RM 1M, dan menggunakan penyulitan gred bank untuk melindungi data anda. Kami tidak sekali-kali menjual data anda kepada pihak ketiga.',
          },
          {
            question: 'Maklumat apa yang perlu saya berikan?',
            answer: 'Anda perlu memberikan: 1) Butiran kad kredit (4 digit terakhir, bank, had kredit), 2) Tarikh penyata bulanan, 3) Akaun bank untuk perkhidmatan bayaran-bagi-pihak (pilihan). Semua maklumat disulitkan dan disimpan dengan selamat.',
          },
          {
            question: 'Berapa lama saya akan melihat hasil?',
            answer: 'Peringatan pembayaran bermula serta-merta. Pengoptimuman kad menunjukkan hasil dalam 1-2 bulan. Peningkatan skor kredit biasanya mengambil masa 3-6 bulan pembayaran tepat masa yang konsisten. Pengecualian yuran tahunan boleh dirundingkan dalam 1 bulan.',
          },
          {
            question: 'Bolehkah saya membatal bila-bila masa?',
            answer: 'Boleh. Pelan langganan boleh dibatalkan bila-bila masa dengan notis 30 hari. Pelan berasaskan kejayaan memerlukan komitmen minimum 6 bulan. Semua yuran tertunggak mesti diselesaikan dalam 14 hari selepas penamatan.',
          },
        ],
      },
      cta: {
        title: 'Mula Jimat Hari Ini',
        description: 'Hubungi kami untuk perundingan percuma mengenai strategi pengurusan kad kredit anda',
        relatedServices: 'Perkhidmatan Berkaitan',
      },
    },
    financialOptimization: {
      meta: {
        title: 'Pengoptimuman Kewangan | INFINITE GZ',
        description: 'Perkhidmatan pengoptimuman DSR profesional. Melalui padanan bank pintar dan analisis pakar, tingkatkan kadar kelulusan pinjaman 80%+. Berdasarkan piawaian sebenar dari 8 bank utama Malaysia.',
      },
      hero: {
        tag: 'Pengoptimuman Kewangan Profesional',
        title: 'DSR Terlalu Tinggi? Kami Mengoptimumkannya, Kemudian Padankan Anda Dengan Bank Yang Akan Meluluskan.',
        subtitle: 'Berhenti Memohon Kepada Bank Yang Akan Menolak Anda. Kami Menganalisis DSR Anda, Mengoptimumkan Struktur Hutang, Kemudian Tunjukkan 3 Bank Yang Akan Benar-Benar Meluluskan.',
        description: 'Berdasarkan piawaian sebenar 2025 dari 8 bank utama Malaysia (Maybank, CIMB, Hong Leong, RHB, dll.). 60% permohonan pinjaman ditolak kerana DSR melebihi had bank. Kami membetulkannya SEBELUM anda memohon. Purata peningkatan kadar kelulusan: 60-80%. Purata peningkatan kapasiti pinjaman: RM 100K-500K.',
        cta1: 'Penilaian DSR Percuma',
        cta2: 'Perundingan WhatsApp',
        stats: [
          { value: '500+', label: 'Kes Kejayaan' },
          { value: '8', label: 'Piawaian Bank' },
          { value: 'RM 150K', label: 'Purata Peningkatan' },
          { value: '60-80%', label: 'Rangsangan Kelulusan' },
        ],
      },
      coreValues: {
        tag: 'Kelebihan Utama',
        title: '5 Perkhidmatan Profesional - Cara Kami Membetulkan DSR Anda & Membuat Anda Diluluskan',
        description: 'Masalah: DSR anda 75%, bank menolak anda. Kebanyakan ejen hanya menghantar permohonan anda. Penyelesaian: Kami mengoptimumkan DSR anda TERLEBIH DAHULU, kemudian memadankan anda dengan bank yang akan benar-benar meluluskan.',
        items: [
          {
            title: 'Perbandingan Piawaian DSR 8 Bank (Elak Bank Salah = Penolakan)',
            description: 'Masalah: Bank berbeza mempunyai had DSR yang berbeza. Maybank: 40-70% | CIMB: 65-75% | Hong Leong: 60-80%. Bank salah = penolakan + rekod CCRIS negatif. Penyelesaian: Kami menganalisis bank mana yang akan meluluskan anda berdasarkan DSR tepat anda. Contoh sebenar: DSR 70%, Maybank menolak, tetapi Hong Leong meluluskan. Hasil: Kadar kejayaan +80%.',
            data: 'Kadar kejayaan +80%',
          },
          {
            title: 'Sistem Cadangan Bank Pintar (Bukan Hanya Senarai Produk)',
            description: 'Masalah: Anda tidak tahu bank mana yang akan meluluskan anda. Penyelesaian: AI menganalisis identiti, jenis pendapatan, jenis pekerjaan, DSR anda. Mencadangkan 3 bank teratas yang paling mungkin meluluskan. Contoh sebenar: Bebas RM 10K/bulan, RHB hanya mengiktiraf 60% (RM 6K), tetapi Hong Leong mengiktiraf 90% (RM 9K). Kami mengesyorkan Hong Leong. Hasil: Perbezaan kapasiti pinjaman RM 496K lebih 10 tahun.',
            data: 'Dikuasakan AI',
          },
          {
            title: 'Maksimumkan Pengiktirafan Pendapatan Bekerja Sendiri (60% vs 90% Pengiktirafan)',
            description: 'Masalah: Bank mendiskaun pendapatan bekerja sendiri. RHB hanya mengiktiraf 60%, Hong Leong mengiktiraf 90%. Pendapatan bulanan RM10K, perbezaan pengiktirafan RM3K! Penyelesaian: Kami membantu anda memilih bank yang mengiktiraf lebih banyak pendapatan anda. Contoh sebenar: RM 10K/bulan, RHB mengiktiraf RM 6K, Hong Leong mengiktiraf RM 9K. Hasil: Perbezaan pengiktirafan sehingga RM5K/bulan, perbezaan kapasiti pinjaman RM 496K lebih 10 tahun.',
            data: 'Perbezaan pengiktirafan sehingga RM5K/bulan',
          },
          {
            title: 'Pelan Penstrukturan Semula Hutang (Jimat RM 500-2,000/Bulan)',
            description: 'Masalah: Pelbagai hutang faedah tinggi menghancurkan aliran tunai. 3 kad kredit (faedah 18%), pinjaman peribadi (faedah 12%). Penyelesaian: Kami menyatukannya menjadi satu pinjaman faedah rendah (6-8%). Contoh sebenar: Hutang RM 5,000/bulan → RM 3,200/bulan selepas penyatuan. DSR 75% → 48%. Hasil: Bayaran bulanan -RM 500-2,000, DSR bertambah baik, peluang kelulusan pinjaman meningkat.',
            data: 'Bayaran bulanan -RM 500-2,000',
          },
          {
            title: 'Peta Jalan Pertumbuhan Kewangan 3 Tahun (Jimat RM 50K-200K Faedah)',
            description: 'Masalah: Anda mendapat pinjaman, tetapi tidak tahu cara mengoptimumkan pembiayaan masa hadapan. Penyelesaian: Kami mencipta peta jalan 3 tahun: bila untuk pembiayaan semula, cara meningkatkan DSR lebih lanjut, bank mana untuk disasarkan seterusnya. Contoh sebenar: Pelanggan mendapat pinjaman RM 500K, kami membantu mereka mengoptimumkan struktur, pembiayaan semula selepas 2 tahun, menjimatkan RM 200K dalam faedah lebih 10 tahun. Hasil: Jimat RM 50K-200K faedah.',
            data: 'Jimat RM 50K-200K faedah',
          },
        ],
      },
      painPoints: {
        tag: 'Cabaran Biasa',
        title: '3 Halangan Pembiayaan Utama',
        description: 'Masalah ini menghalang beribu-ribu perniagaan daripada mendapatkan pembiayaan',
        items: [
          {
            title: 'DSR Melebihi, Pinjaman Ditolak',
            description: '60% permohonan pinjaman ditolak kerana DSR melebihi had. Bank berbeza mempunyai piawaian yang sangat berbeza (40%-80%).',
            data: 'RM 10B+ permintaan pinjaman tidak dipenuhi',
          },
          {
            title: 'Tidak Tahu Bank Mana Paling Mudah Lulus',
            description: '8 bank mempunyai perbezaan piawaian yang besar. Memilih bank yang salah = membuang masa + menjejaskan rekod kredit.',
            data: 'Bank salah = 3 bulan terbuang',
          },
          {
            title: 'Pendapatan Bekerja Sendiri Terlalu Didiskaun',
            description: 'Kadar pengiktirafan bank 60%-90%. Pendapatan bulanan RM10K, mungkin hanya diiktiraf RM6K-9K.',
            data: 'Perbezaan pengiktirafan sehingga RM5K/bulan',
          },
        ],
      },
      calculator: {
        tag: 'Alat Profesional',
        title: 'Penilaian DSR Percuma',
        description: 'Berdasarkan piawaian sebenar 2025 dari 8 bank Malaysia, dapatkan analisis DSR profesional dengan serta-merta',
      },
      cases: {
        tag: 'Kisah Kejayaan',
        title: 'Pelanggan Sebenar, Hasil Sebenar',
        description: 'Membantu 500+ pelanggan mengoptimumkan DSR dan berjaya mendapatkan pembiayaan',
        items: [
          {
            name: 'Encik Zhang - Pembuatan',
            age: '45 tahun',
            income: 'RM 2,744/bulan',
            before: 'DSR 72%, ditolak oleh 3 bank',
            after: 'Bayar kad kredit, DSR → 58%',
            result: 'CIMB luluskan RM 30K',
            savings: 'Jimat RM 10K/tahun faedah',
            avatar: '👨‍💼',
          },
          {
            name: 'Puan Lee - Pemilik E-dagang',
            age: '35 tahun',
            income: 'RM 13,000/bulan',
            before: 'RHB hanya mengiktiraf RM 6,600 (60%)',
            after: 'Tukar ke Hong Leong, mengiktiraf RM 11,700 (90%)',
            result: 'Perbezaan kapasiti pinjaman RM 496K',
            savings: '10 tahun jimat RM 200K+ faedah',
            avatar: '👩‍💼',
          },
          {
            name: 'Encik Wang - Pinjaman Perumahan Bersama',
            age: '40 tahun',
            income: 'Pasangan gabungan RM 5,700',
            before: 'Permohonan tunggal DSR 110%, ditolak',
            after: 'Peraturan pecahan 50% Hong Leong',
            result: 'DSR → 78%, diluluskan RM 400K',
            savings: 'Elak kos penjamin RM 20K-50K',
            avatar: '👨‍👩‍👧',
          },
        ],
      },
      faq: {
        title: 'Soalan Lazim',
        items: [
          {
            question: 'Apakah DSR?',
            answer: 'Debt Service Ratio = Hutang Bulanan ÷ Pendapatan Bersih Bulanan × 100%. Ia adalah penunjuk utama yang digunakan bank untuk menilai keupayaan pembayaran balik anda.',
          },
          {
            question: 'Mengapa bank berbeza mempunyai had DSR yang berbeza?',
            answer: 'Setiap bank mempunyai dasar risiko yang berbeza. Maybank mengehadkan pelanggan berpendapatan rendah kepada 40%, manakala Hong Leong membenarkan pelanggan berpendapatan tinggi sehingga 80%.',
          },
          {
            question: 'Mengapa pendapatan bekerja sendiri didiskaun?',
            answer: 'Bank menganggap pendapatan bekerja sendiri tidak stabil, jadi mereka mendiskaunkannya. RHB hanya mengiktiraf 60%, Hong Leong mengiktiraf 90%.',
          },
          {
            question: 'Adakah anda mengenakan bayaran untuk perkhidmatan anda?',
            answer: '✅ Percuma sepenuhnya untuk pelanggan pinjaman. Pendapatan kami datang dari komisen perkongsian bank.',
          },
          {
            question: 'Berapa lama untuk mendapatkan keputusan penilaian?',
            answer: 'Penilaian DSR percuma adalah segera. Cadangan bank lengkap dan pelan pengoptimuman dihantar dalam masa 24 jam.',
          },
        ],
      },
      finalCta: {
        title: 'Bersedia untuk Mengoptimumkan Pembiayaan Anda?',
        description: 'Sertai 500+ perniagaan yang telah mendapat pembiayaan yang lebih baik melalui INFINITE GZ',
        cta1: 'Mulakan Penilaian Percuma',
        cta2: 'Perundingan WhatsApp',
      },
    },
    businessPlanning: {
      hero: {
        tag: 'Perancangan Perniagaan Profesional',
        title: 'Bank Menolak BP Anda? Kami Menulis Satu Yang Akan Diluluskan - 98% Kadar Kejayaan.',
        subtitle: '85% Kadar Kelulusan Pinjaman | Dwibahasa | Penghantaran 7-14 Hari | Purata 21-25 Hari Kelulusan Bank (vs Pasaran 45 Hari)',
        stats: [
          { label: 'Kadar Kelulusan', value: '84.2%', change: '+6.5%' },
          { label: 'Masa Kelulusan Purata', value: '21 Hari', change: '-53%' },
          { label: 'Jumlah Pinjaman Purata', value: 'RM 500K', change: 'Sehingga RM 2M' },
          { label: 'Kepuasan Pelanggan', value: '4.9/5.0', change: '500+ ulasan' },
        ],
        cta1: 'Lihat Pakej',
        cta2: 'Lihat Sampel BP',
      },
      samples: {
        tag: 'Galeri Dokumen',
        title: 'Lihat Apa Yang Akan Anda Terima',
        description: 'Sampel pelan perniagaan sebenar dari pelbagai industri. Semua diluluskan oleh bank Malaysia.',
      },
      packages: {
        tag: 'Pakej Harga',
        title: 'Pilih Pakej Anda',
        description: 'Semua pakej termasuk pemformatan profesional, dokumen siap bank, dan 1 semakan percuma jika ditolak kerana isu kualiti BP.',
        mostPopular: 'PALING POPULAR',
        delivery: 'Penghantaran',
        getStarted: 'Mula Sekarang',
        selectPackage: 'Pilih Pakej',
      },
      guarantee: {
        title: 'Jaminan Kepuasan 100%',
        description: 'Jika pinjaman anda ditolak kerana isu kualiti BP (bukan asas perniagaan anda), kami akan membayar balik 50% pembayaran anda. Kes sebenar: Pelanggan mendapat RM 500K diluluskan selepas BP kami, vs penolakan sebelumnya.',
      },
      caseStudy: {
        tag: 'Transformasi Sebenar',
        title: 'Dari Penolakan ke Kelulusan',
        description: 'Bagaimana kami menukar permohonan yang ditolak menjadi kelulusan RM 500K. Kes sebenar: Pemilik kilang menghabiskan 2 minggu menulis BP 30 muka surat, ditolak oleh bank dalam 5 minit. Kami menulis BP profesional 45 muka surat dalam 7 hari, diluluskan RM 500K @ 5.5% dalam 21 hari.',
      },
      faq: {
        title: 'Soalan Lazim',
        items: [
          {
            question: 'Saya tidak tahu cara menulis unjuran kewangan, apa yang perlu saya lakukan?',
            answer: 'Kami melakukannya untuk anda! Hanya berikan data sejarah anda (jika ada) dan matlamat perniagaan. Pasukan kami akan mencipta unjuran kewangan 3 tahun profesional dengan andaian terperinci. Contoh sebenar: Pelanggan pembuatan menyediakan 2 tahun data jualan, kami mencipta unjuran menunjukkan pertumbuhan 15%, bank meluluskan RM 500K.',
          },
          {
            question: 'Bagaimana jika bank menolak BP saya selepas saya membayar?',
            answer: 'Kami menawarkan 1 SEMAKAN PERCUMA untuk pakej Professional & Premium. Jika penolakan adalah kerana isu kualiti BP (bukan asas perniagaan anda), kami membayar balik 50% pembayaran anda. Kes sebenar: Pelanggan ditolak pada mulanya, kami menyemak BP berdasarkan maklum balas bank, diluluskan pada penyerahan kedua.',
          },
          {
            question: 'Bolehkah saya membeli hanya model kewangan tanpa BP penuh?',
            answer: 'Ya! Kami menawarkan perkhidmatan pemodelan kewangan berdiri sendiri pada RM 1,500. Walau bagaimanapun, kami mengesyorkan pakej BP penuh untuk peluang kelulusan bank yang lebih baik. Data sebenar: 84% kadar kelulusan dengan BP penuh vs 60% dengan model kewangan sahaja.',
          },
          {
            question: 'Adakah anda menyediakan versi Cina DAN Inggeris?',
            answer: 'Pakej Basic termasuk versi Cina sahaja. Professional termasuk versi Inggeris. Premium termasuk kedua-duanya dalam satu dokumen bersepadu. Kes sebenar: Pelanggan memerlukan versi dwibahasa untuk usaha sama, pakej Premium diluluskan pinjaman RM 800K.',
          },
          {
            question: 'Berapa lama proses kelulusan mengambil masa?',
            answer: 'Berdasarkan 500+ pelanggan kami: Purata 21-25 hari untuk kelulusan (vs purata pasaran 45 hari). Sesetengah pelanggan diluluskan secepat 18 hari. Kes terpantas: 15 hari. Kami menyediakan dokumen siap bank yang mempercepatkan proses.',
          },
        ],
      },
    },
    ecommerceSolutions: {
      hero: {
        tag: 'Perkhidmatan Integrasi Platform',
        title: 'Dari Sifar ke Pertumbuhan GMV 500%',
        subtitle: 'Shopee | Lazada | TikTok Shop | Integrasi Multi-Saluran',
        stats: [
          { value: '71x', label: 'Pertumbuhan GMV' },
          { value: '500%', label: 'ROI Purata' },
          { value: '6 Platform', label: 'Diintegrasikan' },
          { value: '142', label: 'Pelanggan Dilayan' },
        ],
        cta1: 'Lihat Pakej',
        cta2: 'Lihat Kisah Kejayaan',
      },
      platforms: {
        tag: 'Ekosistem Platform',
        title: 'Kami Mengintegrasikan Semua Platform Utama',
        description: 'Segerak multi-saluran, pengurusan bersatu, pertumbuhan meletup',
      },
      packages: {
        tag: 'Pakej Perkhidmatan',
        title: 'Pilih Pakej Integrasi Anda',
        description: 'Persediaan e-dagang lengkap dari integrasi platform hingga automasi perakaunan',
      },
      caseStudy: {
        tag: 'Kisah Kejayaan',
        title: 'Hasil Pelanggan Sebenar',
        description: 'Bagaimana kami membantu perniagaan mencapai pertumbuhan GMV 500% melalui integrasi multi-saluran',
      },
    },
    cashFlowOptimization: {
      hero: {
        tag: 'Pengurusan Aliran Tunai',
        title: 'Optimumkan Aliran Tunai Anda, Buka Kunci Pertumbuhan',
        subtitle: 'Perkhidmatan analisis dan pengoptimuman aliran tunai profesional',
        description: 'Hentikan masalah aliran tunai daripada menyekat pertumbuhan anda. Kami menganalisis DSO, DPO, DIO anda, dan mencipta strategi untuk memperbaiki kitaran penukaran tunai, mengurangkan keperluan modal kerja, dan membuka kunci RM 50K-500K dalam tunai terperangkap.',
        cta1: 'Mulakan Penilaian Percuma',
        cta2: 'Perundingan WhatsApp',
      },
      calculator: {
        title: 'Skor Kesihatan Aliran Tunai Percuma',
        description: 'Kira skor kesihatan aliran tunai anda berdasarkan DSO, DPO, DIO, dan nisbah semasa',
      },
      services: {
        tag: 'Perkhidmatan Kami',
        title: 'Penyelesaian Aliran Tunai Lengkap',
        description: 'Dari analisis hingga pengoptimuman, kami membantu anda membuka kunci tunai terperangkap dan memperbaiki kecekapan modal kerja',
        items: [
          {
            title: 'Analisis Aliran Tunai',
            description: 'Analisis menyeluruh kitaran penukaran tunai, keperluan modal kerja, dan corak aliran tunai anda',
            features: ['Analisis DSO', 'Pengoptimuman DPO', 'Pengurusan DIO', 'Penilaian Modal Kerja'],
          },
          {
            title: 'Perundingan Terma Pembayaran',
            description: 'Membantu anda merundingkan terma pembayaran yang lebih baik dengan pembekal dan pelanggan untuk memperbaiki aliran tunai',
            features: ['Perundingan Pembekal', 'Terma Pelanggan', 'Jadual Pembayaran', 'Strategi Diskaun'],
          },
          {
            title: 'Pengoptimuman Inventori',
            description: 'Mengurangkan kos pegangan inventori dan memperbaiki kadar pusing ganti inventori untuk membebaskan tunai',
            features: ['Analisis Inventori', 'Pengoptimuman Pusing Ganti', 'Stok Keselamatan', 'Analisis ABC'],
          },
        ],
      },
    },
    company: {
      meta: {
        title: 'Syarikat | INFINITE GZ',
        description: 'Ketahui tentang INFINITE GZ SDN BHD - syarikat teknologi kewangan dan perkhidmatan nasihat terkemuka Malaysia membantu 500+ perniagaan mengoptimumkan DSR, menyatukan hutang, dan mendapatkan pembiayaan yang lebih baik.',
      },
      hero: {
        tag: 'Tentang Kami',
        title: 'Kami Membaiki Masalah Pembiayaan Sebelum Bank Berkata Tidak',
        description: 'INFINITE GZ bukan sekadar ejen pinjaman lain. Kami mengoptimumkan DSR anda, menyatukan hutang anda, merancang cukai anda, dan memadankan anda dengan bank yang akan benar-benar meluluskan - semua sebelum anda memohon. 500+ perniagaan mempercayai kami. Kadar kelulusan purata: 84.2%. Masa kelulusan purata: 21 hari (vs pasaran 45 hari).',
      },
      mission: {
        tag: 'Misi Kami',
        title: 'Hentikan Penolakan Pinjaman. Mula Pembiayaan Pintar.',
        description: '60% permohonan pinjaman ditolak kerana isu DSR, pilihan bank yang salah, atau dokumentasi yang lemah. Misi kami: Betulkan masalah ini SEBELUM anda memohon. Kami mengoptimumkan DSR, menyatukan hutang, mencipta pelan perniagaan profesional, dan memadankan anda dengan bank yang akan meluluskan - bukan menolak. Hasil: 84.2% kadar kelulusan vs purata pasaran 40%.',
      },
      values: {
        tag: 'Nilai Kami',
        title: 'Apa Yang Membuat Kami Berbeza',
        items: [
          {
            icon: '🎯',
            title: 'Betulkan Dahulu, Mohon Kemudian',
            description: 'Kami bukan sekadar menghantar permohonan. Kami mengoptimumkan DSR anda, menyatukan hutang, dan memperbaiki profil anda SEBELUM memadankan anda dengan bank. Hasil sebenar: Rangsangan kadar kelulusan 60-80%.'
          },
          {
            icon: '🤖',
            title: 'Padanan Berkuasa AI',
            description: 'Sistem kami menganalisis piawaian sebenar 50+ bank dan memadankan anda dengan 3 bank yang paling mungkin meluluskan. Bukan sekadar senarai produk - cadangan pintar berdasarkan profil tepat anda.'
          },
          {
            icon: '💰',
            title: 'Yuran Pendahuluan Sifar',
            description: 'Tiada kos tersembunyi. Kami hanya mengenakan bayaran apabila anda berjaya. Perkhidmatan teras: Yuran kejayaan sahaja. Perkhidmatan pelengkap (pengoptimuman DSR, penyatuan hutang, perancangan cukai): PERCUMA untuk pelanggan pinjaman.'
          },
          {
            icon: '📊',
            title: 'Hasil Sebenar, Nombor Sebenar',
            description: '500+ pelanggan. RM 500M+ difasilitasi. Purata 21-25 hari kelulusan (vs pasaran 45 hari). Purata RM 150K kapasiti pinjaman tambahan dibuka kunci. Kami menunjukkan data kepada anda, bukan janji kosong.'
          }
        ]
      },
      cta: {
        title: 'Bersedia Untuk Mengubah Pembiayaan Anda?',
        description: 'Sertai 500+ perniagaan yang mendapat pembiayaan yang lebih baik melalui INFINITE GZ. Dapatkan penilaian DSR percuma, atau tempah perundingan untuk membincangkan keperluan khusus anda.'
      }
    },
    resources: {
      meta: {
        title: 'Sumber | INFINITE GZ',
        description: 'Pangkalan data pinjaman komprehensif merangkumi 50+ bank Malaysia, pemantauan kadar masa nyata, dan alat pengoptimuman berkuasa AI. RM 500M+ pinjaman difasilitasi, 98% ketepatan padanan, 84.2% kadar kelulusan vs pasaran 40%.',
      },
      hero: {
        tag: 'Infrastruktur Teknologi',
        title: '50+ Bank. Data Masa Nyata. 98% Ketepatan Padanan. Beginilah Cara Kami Membuat Anda Diluluskan.',
        description: 'Kebanyakan ejen pinjaman menggunakan senarai produk yang ketinggalan zaman. Kami menggunakan data masa nyata dari 50+ bank Malaysia, algoritma AI yang menganalisis piawaian DSR 8 bank, dan padanan pintar yang menunjukkan bank mana yang akan benar-benar meluluskan - bukan menolak. Hasil sebenar: 84.2% kadar kelulusan vs purata pasaran 40%. Masa kelulusan purata: 21-25 hari vs pasaran 45 hari. Purata kapasiti pinjaman tambahan dibuka kunci: RM 150K setiap pelanggan.',
      },

      stats: [
        { number: '50+', title: 'Institusi Kewangan', description: 'Data masa nyata dari Maybank, CIMB, Hong Leong, RHB, Public Bank, bank digital, dan syarikat fintech. Kami tahu bank mana yang meluluskan profil mana. Contoh sebenar: Bebas RM 10K/bulan, RHB hanya mengiktiraf 60% (RM 6K), tetapi Hong Leong mengiktiraf 90% (RM 9K). Kami mengesyorkan Hong Leong. Hasil: Perbezaan kapasiti pinjaman RM 496K lebih 10 tahun.' },
        { number: 'RM 500 Juta+', title: 'Pinjaman Difasilitasi', description: 'Jumlah pembiayaan yang dijamin untuk 500+ pelanggan. Masa kelulusan purata: 21-25 hari (vs pasaran 45 hari). Purata kapasiti pinjaman tambahan dibuka kunci: RM 150K setiap pelanggan. Kes sebenar: Perniagaan runcit 40 tahun mendapat pinjaman RM 2M selepas pengoptimuman kami, hasil meningkat 3 kali ganda dalam 2 tahun.' },
        { number: '2 Minit', title: 'Masa Analisis', description: 'Dapatkan DSR anda dikira, cadangan bank, dan kebarangkalian kelulusan - semua dalam 2 minit. Tiada semakan kredit keras. Tiada masa terbuang memohon kepada bank yang salah. Hasil sebenar: Pelanggan dengan DSR 75% dipadankan dengan Hong Leong (membenarkan sehingga 80%), diluluskan pinjaman RM 400K.' },
        { number: '98%', title: 'Ketepatan Padanan', description: 'Ketepatan berkuasa AI berdasarkan piawaian bank sebenar. Kami menganalisis profil tepat anda (DSR, jenis pendapatan, pekerjaan) dan memadankan anda dengan bank yang akan meluluskan - bukan menolak. Hasil sebenar: 84.2% kadar kelulusan vs purata pasaran 40%. Pilihan bank yang salah = 3 bulan terbuang + rekod CCRIS negatif.' },
      ],
      timeline: {
        tag: 'Perjalanan Kami',
        title: 'Dari Visi Ke Hasil: Bagaimana Kami Membina Sistem Yang Membuat Pelanggan Diluluskan',
        milestones: [
          { year: '2020', title: 'Syarikat Ditubuhkan', description: 'Bermula dengan visi: Hentikan penolakan pinjaman. Betulkan DSR dahulu, kemudian padankan dengan bank yang betul. Membina pangkalan data komprehensif piawaian bank Malaysia. Masalah sebenar dikenal pasti: 60% permohonan pinjaman ditolak kerana isu DSR, pilihan bank yang salah, atau dokumentasi yang lemah.' },
          { year: '2021', title: '1,000 Pelanggan Pertama', description: 'Mencapai pencapaian utama pertama: 1,000 pelanggan mendapat pembiayaan. Kadar kelulusan purata: 75% (vs pasaran 40%). Membuktikan pendekatan "betulkan dahulu, mohon kemudian" kami berfungsi. Hasil sebenar: Pelanggan dengan DSR 75% dioptimumkan kepada 50%, kadar kelulusan meningkat 60-80%.' },
          { year: '2022', title: 'Pelancaran CreditPilot', description: 'Memperkenalkan sistem padanan pinjaman berkuasa AI. Analisis masa nyata 50+ bank. Pengiraan DSR 2 minit. 98% ketepatan padanan. Hasil: Kadar kelulusan meningkat kepada 84.2%. Kes sebenar: Pelanggan bebas dipadankan dengan Hong Leong (mengiktiraf 90% pendapatan), diluluskan pinjaman RM 500K.' },
          { year: '2023', title: 'RM 100 Juta+ Difasilitasi', description: 'Melepasi pencapaian pembiayaan yang signifikan: RM 100M+ dalam pinjaman difasilitasi. Masa kelulusan purata: 21-25 hari (vs pasaran 45 hari). Kepuasan pelanggan: 4.9/5.0. Kesan sebenar: Purata RM 150K kapasiti pinjaman tambahan dibuka kunci setiap pelanggan melalui pengoptimuman DSR dan padanan bank pintar.' },
          { year: '2024', title: 'Rangkaian 50+ Institusi & RM 500 Juta+', description: 'Mengembang ke liputan komprehensif: 50+ institusi kewangan. RM 500M+ difasilitasi. 500+ pelanggan. 84.2% kadar kelulusan. Purata RM 150K kapasiti pinjaman tambahan dibuka kunci setiap pelanggan. Kejayaan sebenar: Perniagaan runcit 40 tahun mendapat pinjaman RM 2M selepas pengoptimuman kami, hasil meningkat 3 kali ganda dalam 2 tahun.' },
        ],
      },
    },
    news: {
      meta: {
        title: 'Berita | INFINITE GZ',
        description: 'Berita terkini, kisah kejayaan pelanggan, dan pencapaian dari INFINITE GZ. Lihat bagaimana kami membantu 500+ perniagaan mendapatkan pembiayaan yang lebih baik dengan 84.2% kadar kelulusan vs pasaran 40%.',
      },
      hero: {
        tag: 'Kisah Kejayaan & Kemas Kini',
        title: 'Pelanggan Sebenar, Hasil Sebenar: Bagaimana Kami Membantu Perniagaan Diluluskan',
        description: '500+ pelanggan. RM 500M+ difasilitasi. 84.2% kadar kelulusan vs pasaran 40%. Masa kelulusan purata: 21-25 hari vs pasaran 45 hari. Purata kapasiti pinjaman tambahan dibuka kunci: RM 150K setiap pelanggan. Baca bagaimana kami membantu perniagaan mengatasi masalah DSR, menyatukan hutang, dan mendapatkan pembiayaan yang ejen tradisional tidak dapat berikan.',
      },

      items: [
        { title: 'RM 500M+ Pembiayaan Difasilitasi: 500+ Pelanggan Berjaya Mendapatkan Pinjaman', date: '2024-12', category: 'Pencapaian' },
        { title: 'Kemas Kini AI CreditPilot: 98% Ketepatan Padanan, Analisis 2 Minit', date: '2024-12', category: 'Produk' },
        { title: 'Kisah Kejayaan: SME Pembuatan Mendapat RM 500K Selepas Pengoptimuman DSR', date: '2024-11', category: 'Kajian Kes' },
        { title: 'Perkongsian dengan 50+ Bank: Akses Data Masa Nyata untuk Padanan Lebih Baik', date: '2024-11', category: 'Perkongsian' },
        { title: 'INFINITE GZ Memenangi Anugerah Fintech: Pengiktirafan untuk Inovasi dalam Padanan Pinjaman', date: '2024-10', category: 'Pengiktirafan' },
        { title: 'Pengembangan Rangkaian: Kini Merangkumi 50+ Institusi Kewangan', date: '2024-10', category: 'Pertumbuhan' },
      ],
    },
    careers: {
      meta: {
        title: 'Kerjaya | INFINITE GZ',
        description: 'Sertai pasukan kami dan bantu membina masa depan perkhidmatan kewangan di Malaysia. 500+ pelanggan. RM 500M+ difasilitasi. 84.2% kadar kelulusan. Syarikat fintech yang berkembang pesat.',
      },
      hero: {
        tag: 'Sertai Pasukan Kami',
        title: 'Membina Masa Depan Kewangan',
        description: 'Sertai syarikat fintech yang berkembang pesat yang mengubah cara PKS dan individu Malaysia mengakses pembiayaan. 500+ pelanggan. RM 500M+ difasilitasi. 84.2% kadar kelulusan vs pasaran 40%. Kami sedang membina masa depan perkhidmatan kewangan - dan kami memerlukan individu berbakat seperti anda.',
      },
      benefits: {
        tag: 'Faedah',
        title: 'Mengapa Bekerja Dengan Kami',
        items: [
          {
            icon: '',
            title: 'Gaji Kompetitif',
            description: 'Pampasan di atas kadar pasaran dengan bonus prestasi. Kesan sebenar: Membantu 500+ pelanggan mendapatkan pembiayaan, membuka kunci RM 500M+ pinjaman.',
          },
          {
            icon: '',
            title: 'Faedah Kesihatan',
            description: 'Insurans perubatan dan pergigian yang menyeluruh. Tambahan: Sokongan kesihatan mental, program kesihatan.',
          },
          {
            icon: '',
            title: 'Pembelajaran & Pembangunan',
            description: 'Latihan berterusan dalam fintech, AI/ML, analisis kewangan. Pertumbuhan sebenar: Dari junior ke senior dalam 2-3 tahun (berdasarkan rekod pasukan kami).',
          },
          {
            icon: '',
            title: 'Kerja Fleksibel',
            description: 'Susunan kerja hibrid dengan waktu fleksibel. Keseimbangan kerja-hidup: 2-3 hari WFH seminggu, waktu mula fleksibel.',
          },
          {
            icon: '',
            title: 'Acara Pasukan',
            description: 'Aktiviti pembinaan pasukan secara berkala, acara syarikat, sambutan suku tahunan. Budaya sebenar: Makan tengah hari pasukan bulanan, perjalanan syarikat tahunan.',
          },
          {
            icon: '',
            title: 'Pertumbuhan Kerjaya',
            description: 'Laluan kemajuan kerjaya yang jelas dalam syarikat yang berkembang pesat. Peluang sebenar: 40% peranan senior kami diisi secara dalaman pada 2024.',
          },
        ],
      },

      jobs: {
        tag: 'Jawatan Kosong',
        title: 'Sertai Pasukan Kami Yang Berkembang',
        positions: [
          { title: 'Penasihat Kewangan Kanan', department: 'Nasihat', location: 'Kuala Lumpur', type: 'Sepenuh Masa' },
          { title: 'Jurutera AI/ML', department: 'Teknologi', location: 'Kuala Lumpur / Jauh', type: 'Sepenuh Masa' },
          { title: 'Pengurus Pembangunan Perniagaan', department: 'Jualan', location: 'Kuala Lumpur', type: 'Sepenuh Masa' },
          { title: 'Pakar Pemasaran Digital', department: 'Pemasaran', location: 'Jauh', type: 'Sepenuh Masa' },
          { title: 'Akauntan', department: 'Kewangan', location: 'Kuala Lumpur', type: 'Sepenuh Masa' },
          { title: 'Pengurus Kejayaan Pelanggan', department: 'Operasi', location: 'Kuala Lumpur', type: 'Sepenuh Masa' },
        ],
      },
      cta: {
        title: 'Tidak Jumpa Peranan Anda?',
        description: 'Kami sentiasa mencari individu berbakat yang berkongsi visi kami untuk mengubah perkhidmatan kewangan di Malaysia. Hantar CV anda dan beritahu kami bagaimana anda boleh menyumbang kepada misi kami membantu 500+ perniagaan mendapatkan pembiayaan yang lebih baik.',
      },
    },
    faq: {
      hero: {
        tag: 'Soalan Lazim',
        title: 'Soalan Lazim',
        description: 'Soalan sebenar daripada pelanggan sebenar. Dapatkan jawapan jujur tentang yuran, kadar kejayaan, garis masa, dan apa yang berlaku jika perkara tidak berjalan lancar.',
      },
      items: [
        {
          question: 'Bagaimana anda mengenakan bayaran? Adakah benar-benar tiada yuran pendahuluan?',
          answer: 'Ya, 100% tiada yuran pendahuluan. Kami hanya mengenakan bayaran selepas pinjaman anda diluluskan dan dibayar. Yuran kami adalah peratusan jumlah pinjaman (biasanya 1-3%), dinyatakan dengan jelas sebelum anda komited. Jika pinjaman anda ditolak, anda tidak membayar apa-apa. Perkhidmatan pengoptimuman DSR dan penyatuan hutang adalah PERCUMA sepenuhnya untuk pelanggan pinjaman.',
        },
        {
          question: 'Adakah pinjaman saya pasti akan diluluskan? Bagaimana jika gagal?',
          answer: 'Kami tidak boleh menjamin 100% kelulusan (tiada sesiapa boleh), tetapi kami meningkatkan peluang anda dengan ketara. Berdasarkan 500+ pelanggan: Kadar kelulusan 60-80% selepas pengoptimuman DSR (vs 20-30% tanpa pengoptimuman). Jika pinjaman anda ditolak selepas pengoptimuman kami, anda tidak membayar apa-apa. Kami juga menawarkan 1 semakan PERCUMA untuk pelan pengoptimuman kami.',
        },
        {
          question: 'Adakah menggunakan perkhidmatan anda akan menjejaskan rekod kredit saya (CCRIS/CTOS)?',
          answer: 'Tiada kesan negatif. Kami hanya melakukan semakan lembut (tiada pertanyaan keras yang menjejaskan skor anda). Pengoptimuman DSR kami sebenarnya MENINGKATKAN skor kredit anda dengan membantu anda membayar hutang tepat pada masanya dan mengurangkan penggunaan. Walau bagaimanapun, apabila anda memohon pinjaman melalui kami, bank akan melakukan semakan keras (ini adalah normal dan perlu).',
        },
        {
          question: 'Dokumen apa yang perlu saya sediakan?',
          answer: 'Dokumen asas: (1) Salinan IC, (2) Slip gaji atau penyata bank 3 bulan terkini (untuk bukti pendapatan), (3) Penyata kad kredit dan pinjaman 3 bulan terkini (untuk analisis hutang), (4) Penyata EPF (jika ada). Untuk bekerja sendiri: Pendaftaran perniagaan, penyata bank 6 bulan, penyata cukai. Kami akan menghantar senarai semak lengkap selepas perundingan awal.',
        },
        {
          question: 'Berapa lama masa yang diperlukan untuk keseluruhan proses?',
          answer: 'Penilaian DSR: Segera (kalkulator dalam talian percuma) atau 24 jam (analisis terperinci). Pelan penyusunan semula hutang: 3-5 hari bekerja. Penghantaran permohonan pinjaman: 1-2 hari (selepas anda menyediakan dokumen). Kelulusan bank: Purata 21-25 hari (vs purata pasaran 45 hari). Kes terpantas: 18 hari. Terlambat: 35 hari.',
        },
        {
          question: 'Bagaimana jika bank menolak pinjaman saya selepas saya membayar yuran anda?',
          answer: 'Jika penolakan adalah disebabkan isu kualiti pengoptimuman kami (bukan asas perniagaan anda), kami memulangkan 50% yuran. Walau bagaimanapun, jika penolakan adalah disebabkan faktor di luar kawalan kami (contohnya, kehilangan pekerjaan secara tiba-tiba, hutang baharu yang anda ambil, perubahan dasar bank), terma standard terpakai. Kami telus tentang ini terlebih dahulu.',
        },
        {
          question: 'Adakah anda bekerjasama dengan semua bank di Malaysia?',
          answer: 'Ya, kami bekerjasama dengan 50+ institusi kewangan berlesen: Semua bank utama (Maybank, CIMB, Hong Leong, RHB, Public Bank, dll.), bank digital (GXBank, Boost Bank, dll.), dan syarikat fintech berlesen. Kami hanya bekerjasama dengan institusi yang dikawal oleh Bank Negara Malaysia. Tiada along, tiada pemberi pinjaman haram.',
        },
        {
          question: 'Saya bekerja sendiri. Bolehkah anda masih membantu saya?',
          answer: 'Boleh! Malah, pelanggan bekerja sendiri mendapat manfaat paling banyak daripada perkhidmatan kami. Bank berbeza mengiktiraf pendapatan bekerja sendiri secara berbeza (RHB: 60%, Hong Leong: 90%). Kami membantu anda memilih bank yang mengiktiraf lebih banyak pendapatan anda. Contoh sebenar: Pendapatan RM 10K/bulan, RHB hanya mengiktiraf RM 6K, Hong Leong mengiktiraf RM 9K. Perbezaan kapasiti pinjaman: RM 496K lebih 10 tahun.',
        },
        {
          question: 'Bolehkah saya menggunakan perkhidmatan anda jika saya mempunyai kredit buruk (skor CCRIS/CTOS rendah)?',
          answer: 'Boleh, tetapi hasil mengambil masa lebih lama. Kami menyediakan strategi pembaikan kredit (pelan peningkatan 3-6 bulan). Walau bagaimanapun, jika skor anda di bawah 600, kami mengesyorkan membetulkan kredit terlebih dahulu sebelum memohon pinjaman baharu. Kami boleh membantu kedua-duanya: pembaikan kredit + permohonan pinjaman.',
        },
        {
          question: 'Adakah anda menyediakan perkhidmatan dalam pelbagai bahasa?',
          answer: 'Ya, laman web dan perkhidmatan kami tersedia dalam Bahasa Inggeris, Cina (中文), dan Bahasa Malaysia. Perunding kami boleh berkomunikasi dalam ketiga-tiga bahasa. Perundingan WhatsApp tersedia dalam bahasa pilihan anda.',
        },
      ],
      cta: {
        title: 'Masih ada soalan?',
        description: 'Hubungi kami melalui WhatsApp untuk perundingan percuma. Tiada kewajipan, tiada tekanan. Kami menjawab semua soalan anda dengan jujur.',
        contactUs: 'WhatsApp Kami',
        visitPortal: 'Mulakan Penilaian Percuma',
      },
    },
    privacy: {
      hero: {
        tag: 'Dasar Privasi',
        title: 'Dasar Privasi',
        lastUpdated: 'Kemaskini terakhir',
      },
      sections: {
        introduction: {
          title: '1. Pengenalan',
          content: 'INFINITE GZ ("kami", "kami", atau "kami") komited untuk melindungi privasi anda. Dasar Privasi ini menerangkan bagaimana kami mengumpul, menggunakan, mendedahkan, dan melindungi maklumat anda apabila anda melawat laman web kami dan menggunakan perkhidmatan kami.',
        },
        informationWeCollect: {
          title: '2. Maklumat Yang Kami Kumpul',
          description: 'Kami mungkin mengumpul maklumat tentang anda dalam pelbagai cara:',
          items: [
            'Maklumat pengenalan peribadi (nama, alamat e-mel, nombor telefon)',
            'Maklumat kewangan (penyata kad kredit, butiran pinjaman, maklumat pendapatan)',
            'Data penggunaan (bagaimana anda berinteraksi dengan laman web dan perkhidmatan kami)',
            'Maklumat peranti (alamat IP, jenis pelayar, sistem pengendalian)',
          ],
        },
        howWeUse: {
          title: '3. Bagaimana Kami Menggunakan Maklumat Anda',
          description: 'Kami menggunakan maklumat yang kami kumpul untuk:',
          items: [
            'Menyediakan, mengekalkan, dan meningkatkan perkhidmatan kami',
            'Memproses permintaan dan transaksi anda',
            'Menghantar notis teknikal dan mesej sokongan kepada anda',
            'Membalas komen dan soalan anda',
            'Memantau dan menganalisis trend dan penggunaan',
          ],
        },
        dataSecurity: {
          title: '4. Keselamatan Data',
          content: 'Kami melaksanakan langkah keselamatan teknikal dan organisasi yang sesuai untuk melindungi maklumat peribadi anda. Walau bagaimanapun, tiada kaedah penghantaran melalui Internet adalah 100% selamat, dan kami tidak boleh menjamin keselamatan mutlak.',
        },
        yourRights: {
          title: '5. Hak Anda',
          description: 'Anda berhak:',
          items: [
            'Mengakses maklumat peribadi anda',
            'Membetulkan maklumat yang tidak tepat',
            'Meminta pemadaman maklumat anda',
            'Membantah pemprosesan maklumat anda',
            'Meminta kebolehportakan data',
          ],
        },
        contactUs: {
          title: '6. Hubungi Kami',
          description: 'Jika anda mempunyai soalan tentang Dasar Privasi ini, sila hubungi kami di:',
          email: 'E-mel: privacy@infinitegz.com',
          whatsapp: 'WhatsApp: +60 12 345 6789',
        },
      },
    },
    terms: {
      hero: {
        tag: 'Terma Perkhidmatan',
        title: 'Terma Perkhidmatan',
        lastUpdated: 'Kemaskini terakhir',
      },
      sections: {
        acceptance: {
          title: '1. Penerimaan Terma',
          content: 'Dengan mengakses dan menggunakan laman web dan perkhidmatan INFINITE GZ, anda menerima dan bersetuju untuk terikat dengan terma dan peruntukan perjanjian ini.',
        },
        useLicense: {
          title: '2. Lesen Penggunaan',
          content: 'Kebenaran diberikan untuk mengakses sementara bahan di laman web INFINITE GZ untuk tujuan peribadi, bukan komersial, melihat sementara sahaja. Ini adalah pemberian lesen, bukan pemindahan hak milik.',
        },
        serviceDescription: {
          title: '3. Penerangan Perkhidmatan',
          content: 'INFINITE GZ menyediakan nasihat kewangan, analisis kredit, padanan pinjaman, dan perkhidmatan kewangan yang berkaitan. Kami berusaha untuk menyediakan maklumat yang tepat, tetapi kami tidak menjamin ketepatan, kelengkapan, atau kegunaan sebarang maklumat di laman web kami.',
        },
        userResponsibilities: {
          title: '4. Tanggungjawab Pengguna',
          description: 'Anda bersetuju untuk:',
          items: [
            'Menyediakan maklumat yang tepat dan lengkap',
            'Mengekalkan keselamatan kredensial akaun anda',
            'Menggunakan perkhidmatan kami hanya untuk tujuan yang sah',
            'Tidak cuba mendapatkan akses tanpa kebenaran kepada sistem kami',
          ],
        },
        limitation: {
          title: '5. Had Liabiliti',
          content: 'INFINITE GZ tidak akan bertanggungjawab untuk sebarang kerosakan tidak langsung, insidental, khas, akibat, atau hukuman yang terhasil daripada penggunaan atau ketidakupayaan anda untuk menggunakan perkhidmatan kami.',
        },
        modifications: {
          title: '6. Pengubahsuaian',
          content: 'INFINITE GZ berhak untuk menyemak semula terma perkhidmatan ini pada bila-bila masa tanpa notis. Dengan menggunakan laman web ini, anda bersetuju untuk terikat dengan versi semasa terma perkhidmatan ini.',
        },
        contact: {
          title: '7. Maklumat Hubungan',
          description: 'Jika anda mempunyai sebarang soalan tentang Terma Perkhidmatan ini, sila hubungi kami:',
          email: 'E-mel: legal@infinitegz.com',
          whatsapp: 'WhatsApp: +60 12 345 6789',
        },
      },
    },
    legal: {
      hero: {
        tag: 'Notis Undang-undang',
        title: 'Notis Undang-undang',
        description: 'Maklumat undang-undang penting tentang INFINITE GZ dan perkhidmatan kami.',
      },
      sections: {
        companyInfo: {
          title: 'Maklumat Syarikat',
          description: 'INFINITE GZ adalah syarikat nasihat kewangan dan perkhidmatan teknologi yang beroperasi di Malaysia.',
          registeredAddress: 'Alamat Berdaftar: [Untuk dikemaskini]',
          businessRegistration: 'Pendaftaran Perniagaan: [Untuk dikemaskini]',
          licenseNumber: 'Nombor Lesen: [Untuk dikemaskini]',
        },
        regulatory: {
          title: 'Pematuhan Peraturan',
          content: 'INFINITE GZ beroperasi mematuhi peraturan kewangan Malaysia yang berkenaan. Kami komited untuk mengekalkan standard tertinggi tingkah laku profesional dan pematuhan peraturan.',
        },
        disclaimer: {
          title: 'Penafian',
          content: 'Maklumat yang disediakan di laman web ini adalah untuk tujuan maklumat umum sahaja. Walaupun kami berusaha untuk mengekalkan maklumat terkini dan betul, kami tidak membuat sebarang pernyataan atau jaminan, tersurat atau tersirat, tentang kelengkapan, ketepatan, kebolehpercayaan, atau kesesuaian maklumat.',
        },
        intellectualProperty: {
          title: 'Harta Intelek',
          content: 'Semua kandungan di laman web ini, termasuk teks, grafik, logo, dan perisian, adalah harta INFINITE GZ atau pembekal kandungannya dan dilindungi oleh undang-undang hak cipta dan harta intelek lain.',
        },
        thirdPartyLinks: {
          title: 'Pautan Pihak Ketiga',
          content: 'Laman web kami mungkin mengandungi pautan ke laman web pihak ketiga. Kami tidak bertanggungjawab untuk kandungan atau amalan privasi laman luaran ini.',
        },
        contact: {
          title: 'Hubungan',
          description: 'Untuk pertanyaan undang-undang, sila hubungi:',
          email: 'E-mel: legal@infinitegz.com',
          whatsapp: 'WhatsApp: +60 12 345 6789',
        },
      },
    },
    dsrGuide: {
      hero: {
        tag: 'Panduan DSR',
        title: 'Pinjaman Ditolak? DSR Anda Terlalu Tinggi. Inilah Cara Kami Membetulkannya.',
        description: '60% permohonan pinjaman di Malaysia ditolak kerana DSR melebihi had bank. Pelbagai kad kredit, pinjaman peribadi, pinjaman kereta menghancurkan aliran tunai anda? Kami tunjukkan dengan tepat cara menyusun semula hutang anda dan mendapat kelulusan.',
      },
      sections: {
        whatIsDSR: {
          title: 'Apakah DSR? Mengapa Bank Menolak Anda',
          description: 'Nisbah Perkhidmatan Hutang (DSR) = Bayaran Hutang Bulanan Anda ÷ Pendapatan Bulanan Bersih Anda × 100%. Bank di Malaysia menggunakan DSR untuk menilai sama ada anda mampu membayar pinjaman baharu. Masalah sebenar: Bank berbeza mempunyai had DSR yang sangat berbeza (40%-80%), dan kebanyakan orang tidak tahu bank mana yang perlu dipohon.',
          formula: 'DSR = (Jumlah Komitmen Hutang Bulanan / Pendapatan Bulanan Bersih) × 100%',
          formulaLabel: 'Formula DSR:',
        },
        whyMatters: {
          title: 'Mengapa DSR Anda Membuat Anda Ditolak',
          description: 'Apabila DSR anda terlalu tinggi, bank melihat anda sebagai risiko tinggi dan menolak permohonan anda. Inilah yang berlaku:',
          items: [
            'Maybank: Menolak jika DSR > 40-70% (berbeza mengikut tahap pendapatan)',
            'CIMB: Menolak jika DSR > 65-75%',
            'Hong Leong: Membenarkan sehingga 60-80% (paling longgar)',
            'RHB: Menolak jika DSR > 60-70%',
            'Pilihan bank salah = 3 bulan terbuang + rekod CCRIS negatif',
          ],
        },
        thresholds: {
          title: 'Standard DSR oleh Bank Utama Malaysia (2025)',
          excellent: {
            title: 'Cemerlang (0-30%)',
            description: 'Semua bank meluluskan. Kadar faedah terbaik. Jumlah pinjaman tertinggi. Contoh: Pendapatan RM 10K, Hutang RM 2K = 20% DSR = Diluluskan di mana-mana.',
          },
          good: {
            title: 'Baik (31-50%)',
            description: 'Kebanyakan bank meluluskan. Kadar kompetitif. Contoh sebenar: Pendapatan RM 8K, Hutang RM 3.5K = 44% DSR = CIMB meluluskan, Maybank mungkin menolak.',
          },
          acceptable: {
            title: 'Boleh diterima (51-70%)',
            description: 'Hanya bank longgar meluluskan (Hong Leong, beberapa bank digital). Kadar faedah lebih tinggi. Contoh sebenar: Pendapatan RM 6K, Hutang RM 4.2K = 70% DSR = Hanya Hong Leong meluluskan.',
          },
          highRisk: {
            title: 'Risiko Tinggi (71%+)',
            description: 'Semua bank menolak. Mesti kurangkan hutang terlebih dahulu. Contoh sebenar: Pendapatan RM 5K, Hutang RM 4K = 80% DSR = Ditolak di mana-mana. Penyelesaian: Penyatuan hutang untuk mengurangkan bayaran bulanan.',
          },
        },
        howToImprove: {
          title: 'Cara Kami Membantu Anda Meningkatkan DSR: Proses 4 Langkah',
          items: [
            {
              title: 'Langkah 1: Diagnosis DSR Semasa Anda',
              description: 'Kami mengira DSR tepat anda menggunakan standard bank sebenar. Kami semak: kad kredit, pinjaman peribadi, pinjaman kereta, pinjaman perumahan. Kes sebenar: Encik Zhang, pendapatan RM 2,744/bulan, hutang RM 1,980/bulan = 72% DSR = Ditolak oleh 3 bank.',
            },
            {
              title: 'Langkah 2: Reka Pelan Penyusunan Semula Hutang',
              description: 'Kami menyatukan hutang faedah tinggi (kad kredit 18%, pinjaman peribadi 12%) menjadi satu pinjaman faedah rendah (6-8%). Hasil: Bayaran bulanan turun dari RM 5,000 kepada RM 3,200. DSR bertambah baik dari 75% kepada 48%.',
            },
            {
              title: 'Langkah 3: Padankan Anda Dengan Bank Yang Betul',
              description: 'Kami menganalisis bank mana yang akan meluluskan anda berdasarkan profil anda. Contoh: Bebas dengan RM 10K/bulan, RHB hanya mengiktiraf 60% (RM 6K), tetapi Hong Leong mengiktiraf 90% (RM 9K). Perbezaan kapasiti pinjaman: RM 496K lebih 10 tahun.',
            },
            {
              title: 'Langkah 4: Mohon & Susulan',
              description: 'Kami membantu anda menyediakan dokumen, menghantar permohonan, dan susulan dengan bank. Masa kelulusan purata: 21-25 hari (vs purata pasaran 45 hari). Sesetengah pelanggan diluluskan dalam 18 hari.',
            },
          ],
        },
        calculate: {
          title: 'Contoh Sebenar: Cara Kami Membetulkan DSR Encik Zhang',
          description: 'Sebelum: Pendapatan RM 2,744/bulan, Hutang RM 1,980/bulan (3 kad kredit), DSR = 72%. Ditolak oleh Maybank, CIMB, RHB. Selepas: Kami menyatukan 3 kad menjadi 1 pinjaman, bayaran bulanan → RM 1,590, DSR → 58%. Hasil: CIMB meluluskan RM 30K. Penjimatan: RM 10K/tahun dalam faedah.',
          tryCalculator: 'Kira DSR Anda Sekarang',
          loanAnalyzer: 'Dapatkan Cadangan Bank Percuma',
        },
      },
    },
    taxTips: {
      hero: {
        tag: 'Pengoptimuman Cukai',
        title: 'Pemilik SME Kehilangan Wang Pada Cukai? Kami Membantu Anda Jimat RM 3,000-15,000 Secara Sah.',
        description: 'Pemfailan cukai kacau? Tidak tahu cara menuntut potongan? Takut audit LHDN? Akaun tidak sepadan dengan realiti? Kami membantu pemilik SME Malaysia mengatur akaun, merancang strategi cukai, dan menjimatkan ribuan secara sah melalui potongan 15% yang betul dan pengoptimuman struktur perniagaan.',
      },
      sections: {
        commonDeductions: {
          title: 'Masalah Cukai SME Biasa Yang Kami Selesaikan',
          items: [
            {
              title: '1. Pemfailan Cukai Kacau & Potongan Tertinggal',
              description: 'Masalah: Tidak tahu perbelanjaan mana yang boleh ditolak. Tertinggal RM 3,000-8,000 dalam potongan setiap tahun. Contoh sebenar: Hasil RM 100K, membayar cukai RM 24K. Selepas pengoptimuman kami: Cukai RM 15K (menjimatkan RM 9K melalui potongan yang betul).',
            },
            {
              title: '2. Akaun Tidak Sepadan Dengan Realiti',
              description: 'Masalah: Transaksi tunai tidak direkodkan, resit hilang, buku tidak mencerminkan perniagaan sebenar. Risiko audit LHDN. Penyelesaian: Kami mengatur rekod 6-12 bulan, menyelaraskan akaun, menyediakan dokumentasi yang betul.',
            },
            {
              title: '3. Tidak Menggunakan Potongan Perniagaan 15%',
              description: 'Masalah: Layak untuk potongan cukai 15% pada perbelanjaan perniagaan tetapi tidak menuntut dengan betul. Contoh sebenar: Perbelanjaan layak RM 50K → Penjimatan cukai RM 7,500. Kami membantu mengenal pasti dan mendokumentasikan semua perbelanjaan layak.',
            },
            {
              title: '4. Takut Audit LHDN',
              description: 'Masalah: Bimbang LHDN mempersoalkan pulangan anda. Penyelesaian: Kami memastikan semua tuntutan didokumentasikan dengan betul dan patuh. Kami menyediakan fail sedia audit dan mewakili anda jika diperlukan.',
            },
            {
              title: '5. Struktur Perniagaan Tidak Dioptimumkan Cukai',
              description: 'Masalah: Berjalan sebagai pemilik tunggal apabila perkongsian atau Sdn Bhd akan menjimatkan cukai. Contoh sebenar: Keuntungan RM 200K, pemilik tunggal membayar cukai RM 30K, Sdn Bhd membayar RM 24K (menjimatkan RM 6K). Kami menganalisis dan mengesyorkan struktur optimum.',
            },
          ],
        },
        strategies: {
          title: 'Cara Kami Membantu: Proses Pengoptimuman Cukai 4 Langkah',
          items: [
            {
              title: 'Langkah 1: Diagnosis Situasi Cukai Semasa Anda',
              description: 'Kami mengkaji semula pulangan cukai 2-3 tahun lepas anda, mengenal pasti potongan tertinggal, menganalisis struktur perniagaan, dan mengira penjimatan berpotensi. Kes sebenar: Menemui RM 12K dalam potongan tidak dituntut untuk pemilik perniagaan runcit.',
            },
            {
              title: 'Langkah 2: Rancang Strategi Cukai untuk Tahun Semasa',
              description: 'Kami mencipta peta jalan perancangan cukai: perbelanjaan mana untuk dimaksimumkan, bila untuk membuat pembelian, cara untuk menyusun transaksi. Contoh: Masa pembelian peralatan sebelum akhir tahun untuk memaksimumkan potongan. Hasil: Jimat RM 3,000-8,000 pada tahun semasa.',
            },
            {
              title: 'Langkah 3: Atur Akaun & Sediakan Dokumentasi',
              description: 'Kami mengatur resit anda, menyelaraskan penyata bank, menyediakan rekod perakaunan yang betul, dan memastikan semua perbelanjaan boleh ditolak didokumentasikan dengan betul. Kami menyediakan fail sedia LHDN. Masa: 2-4 minggu untuk rekod 12 bulan.',
            },
            {
              title: 'Langkah 4: Fail Pulangan & Semakan Tahunan',
              description: 'Kami memfailkan pulangan cukai anda dengan betul dengan LHDN, memastikan semua potongan dituntut, dan menyediakan semakan tahunan untuk mengoptimumkan strategi tahun hadapan. Sokongan berterusan: Kami mengkaji semula situasi cukai anda setiap suku tahun dan menyesuaikan strategi mengikut keperluan.',
            },
          ],
        },
        creditCardBenefits: {
          title: 'Potongan Perbelanjaan Perniagaan 15%: Apa Yang Boleh Anda Tuntut',
          description: 'Ramai pemilik SME tidak menyedari perbelanjaan ini boleh ditolak pada 15%:',
          items: [
            'Sewa pejabat, utiliti, internet (sehingga 15% daripada pendapatan perniagaan)',
            'Peralatan perniagaan, komputer, perisian (elaun modal)',
            'Perbelanjaan pemasaran, pengiklanan, pembangunan laman web',
            'Yuran profesional (perakaunan, undang-undang, perundingan)',
            'Perjalanan perniagaan, makanan dengan pelanggan (dengan resit yang betul)',
            'Gaji pekerja, caruman EPF, kos latihan',
          ],
          note: 'Contoh sebenar: Hasil RM 200K, perbelanjaan layak RM 50K → Penjimatan cukai RM 7,500. Perkhidmatan perakaunan kami membantu anda menjejaki dan mendokumentasikan semua perbelanjaan ini dengan betul.',
        },
        professionalHelp: {
          title: 'Mengapa Pilih Perkhidmatan Pengoptimuman Cukai Kami',
          description: 'Kami bukan sekadar pemfail cukai - kami adalah strategis cukai. Kami membantu anda menjimatkan wang secara sah sambil kekal patuh dengan LHDN. Pasukan kami termasuk akauntan dan penasihat cukai yang berkelayakan yang memahami undang-undang cukai Malaysia.',
          bookConsultation: 'Tempah Perundingan Percuma',
          whatsappUs: 'WhatsApp Kami',
        },
        disclaimer: {
          title: '⚠️ Penafian Penting',
          content: 'Maklumat ini adalah untuk panduan umum sahaja dan tidak boleh dianggap sebagai nasihat cukai profesional. Undang-undang dan peraturan cukai mungkin berubah, dan keadaan individu berbeza. Semua strategi cukai adalah sah dan patuh dengan peraturan LHDN. Sila berunding dengan penasihat cukai yang berkelayakan atau Lembaga Hasil Dalam Negeri Malaysia (LHDN) untuk nasihat khusus. Kami memastikan semua cadangan kami mematuhi undang-undang cukai Malaysia.',
        },
      },
    },
    loanCalculator: {
      header: {
        title: 'Pemeriksaan Kelayakan Pinjaman Cepat',
        subtitle: 'Ketahui berapa banyak anda boleh meminjam berdasarkan pendapatan dan komitmen anda. Pengiraan DSR instan.',
        notice: '⚠️ Penting: Ini HANYA anggaran kelayakan pantas berdasarkan DSR. Bank Malaysia menilai banyak faktor lain termasuk: sejarah kredit CTOS/CCRIS, rekod pembayaran, kestabilan pekerjaan, umur, simpanan bulanan, had kredit sedia ada, tujuan pinjaman, nilai harta (jika berkaitan), dan polisi dalaman bank. DSR yang boleh diterima TIDAK menjamin kelulusan pinjaman.',
      },
      input: {
        monthlyIncome: {
          label: 'Pendapatan Kasar Bulanan (RM)',
          placeholder: 'cth. 5000',
          help: 'Jumlah pendapatan bulanan anda sebelum potongan',
        },
        existingCommit: {
          label: 'Komitmen Pinjaman Bulanan yang Sedia Ada (RM)',
          placeholder: 'cth. 2000 (semua pinjaman, kad, terlebih debit digabungkan)',
          helper: 'Sertakan semua ansuran pinjaman, pembayaran minimum kad kredit, terlebih debit, dll.',
        },
        maxDSR: {
          label: 'Nisbah DSR Maksimum yang Anda Ingin Kekalkan (%)',
          helper: 'Bank Malaysia biasanya meluluskan pinjaman sehingga DSR 60%, tetapi 40–50% lebih selesa. Sesuaikan berdasarkan keutamaan anda.',
        },
        proposedLoan: {
          label: 'Jumlah Pinjaman yang Dicadangkan (RM)',
          placeholder: 'cth. 100000',
          helper: 'Jumlah yang anda rancang untuk meminjam. Laraskan untuk melihat kesan ke atas kelayakan.',
        },
        loanRate: {
          label: 'Kadar Faedah Tahunan Pinjaman (%)',
          helper: 'Kadar biasa: Perumahan 3–5%, Pinjaman Peribadi 6–9%, Kereta 3–4%',
        },
        loanTenure: {
          label: 'Tempoh Pinjaman (Tahun)',
          helper: 'Tempoh lebih lama = bayaran bulanan lebih rendah tetapi jumlah faedah lebih tinggi.',
        },
      },
      btn: {
        calculate: 'Hitung Kelayakan',
        reset: 'Tetapkan Semula',
        ctosOptimizer: 'Dapatkan Analisis Lebih Mendalam dengan Pengoptimal CTOS',
        exploreMore: 'Jelajahi Alat Lainnya',
      },
      result: {
        title: 'Hasil Analisis Kelayakan',
        current_label: 'Keadaan Semasa',
        after_label: 'Selepas Pinjaman Ini',
        monthlyCommit: 'Komitmen Bulanan (RM)',
        currentDSR: 'DSR Semasa Anda',
        newLoanPayment: 'Bayaran Bulanan Pinjaman Baharu (RM)',
        totalNewCommit: 'Jumlah Komitmen Bulanan (RM)',
        newDSR: 'DSR Baharu Anda',
        loanAmount: 'Jumlah Pinjaman (RM)',
        interestRate: 'Kadar Faedah Tahunan (%)',
        tenure: 'Tempoh Pinjaman (Tahun)',
        monthlyInstalment: 'Ansuran Bulanan (RM)',
        totalInterest: 'Jumlah Faedah Sepanjang Tempoh (RM)',
        rec_comfortable: 'Cemerlang! DSR anda sihat dan anda mempunyai kapasiti pinjaman yang baik. Dari perspektif DSR, pinjaman ini sangat mampu milik. Namun, bank juga akan meninjau sejarah kredit anda, rekod pembayaran, dan kestabilan pekerjaan. Pertimbangkan menggunakan Diagnosis Pengoptimuman CTOS kami untuk penilaian kelulusan yang lebih realistik.',
        rec_manageable: 'Baik! DSR anda dalam julat yang selesa dari perspektif pemberian pinjaman. Pinjaman ini mampu milik dan anda sepatutnya mempunyai aliran tunai bulanan yang munasabah. Namun, kelulusan sebenar bergantung pada profil kredit lengkap anda (CTOS/CCRIS, sejarah pembayaran, jenis pekerjaan, umur, dll.). Teruskan dengan berhati-hati dan rujuk Diagnosis Pengoptimuman CTOS kami untuk penilaian yang lebih terperinci.',
        rec_tight: 'DSR anda akan ketat di {{dsr}}%. Walaupun bank mungkin secara teknikal meluluskan pinjaman dengan DSR sehingga 60%, kelulusan anda akan sangat bergantung pada faktor kredit lain: rekod CTOS/CCRIS yang cemerlang, pekerjaan yang stabil, sejarah pembayaran yang kuat, dan kemudahan kredit sedia ada. Kami sangat mengesyorkan menggunakan Diagnosis Pengoptimuman CTOS kami untuk melihat gambaran yang lebih realistik sebelum memohon.',
        rec_highRisk: '⚠️ DSR anda akan sangat tinggi di {{dsr}}%. Walaupun bank mungkin meluluskan pinjaman dengan DSR sehingga 60-70% dalam kes luar biasa, ini tidak mungkin tanpa profil kredit yang cemerlang. Bank akan meneliti: skor CTOS/CCRIS, disiplin pembayaran, sektor pekerjaan, umur, nisbah simpanan, dan had kredit sedia ada. Kemungkinan kelulusan adalah RENDAH. Kami mengesyorkan meneroka penyatuan hutang atau pilihan pembiayaan semula terlebih dahulu untuk mengurangkan komitmen sedia ada anda. Bercakap dengan penasihat kami.',
        rec_critical: '🛑 DSR anda akan sangat tinggi di {{dsr}}%. Bank SANGAT tidak mungkin meluluskan pinjaman ini. Walaupun mempunyai profil kredit yang cemerlang, DSR melebihi 70% dianggap sangat berisiko oleh kebanyakan pemberi pinjaman. Anda MESTI menstruktur semula hutang sedia ada anda terlebih dahulu (penyatuan, penyelesaian, atau pembiayaan semula). Sila bercakap dengan penasihat kewangan kami segera untuk meneroka pilihan mengurangkan komitmen semasa anda sebelum memohon pinjaman baharu.',
      },
      dsr_status: {
        comfortable: 'Selesa',
        manageable: 'Boleh Dikawal',
        tight: 'Ketat',
        highRisk: 'Risiko Tinggi',
        critical: 'Kritis',
      },
      disclaimer: '**Penafian:** Kalkulator ini hanya menyediakan anggaran DSR dan untuk tujuan pendidikan. Hasil TIDAK merupakan kelulusan pinjaman atau jaminan. Kelulusan pinjaman sebenar bergantung pada: (1)Laporan kredit CTOS/CCRIS anda, (2)Sejarah pembayaran dan disiplin kredit, (3)Kestabilan pekerjaan dan sektor, (4)Umur dan pengalaman, (5)Simpanan bulanan dan simpanan tunai, (6)Kemudahan kredit dan had sedia ada, (7)Tujuan pinjaman dan nilai harta (jika berkaitan), (8)Polisi kredit dalaman bank dan selera risiko. Setiap bank mempunyai piawaian berbeza dan boleh meluluskan atau menolak permohonan anda berdasarkan faktor di luar DSR sahaja. Alat ini BUKAN pengganti nasihat kewangan profesional.',
    },
    loanOptimizer: {
      header: {
        title: 'Diagnosis Pengoptimuman Pinjaman CTOS',
        subtitle: 'Analisis hutang semasa anda dan dapatkan rancangan penstrukturan semula yang terperinci. Muat naik laporan CTOS anda atau masukkan pinjaman anda secara manual. Ketahui berapa banyak yang boleh anda jimat setiap bulan dan tingkatkan kedudukan kredit keseluruhan anda.',
        notice: 'ℹ️ Tentang Alat Ini: Pengoptimal ini menilai pinjaman anda merentas pelbagai faktor yang dipertimbangkan oleh bank Malaysia: DSR, skor kredit (CTOS/CCRIS), sejarah pembayaran, kestabilan pekerjaan, umur, nisbah simpanan, had kredit sedia ada, dan tujuan pinjaman. Hasil menunjukkan senario penstrukturan semula yang realistik, tetapi kelulusan sebenar bergantung pada bank mana yang anda hubungi dan polisi individu mereka.',
      },
      input: {
        concern_label: 'Apakah kekhawatiran kewangan utama anda?',
        concern_a: 'Saya ingin menurunkan pembayaran pinjaman bulanan saya',
        concern_b: 'Saya ingin membayar hutang saya lebih cepat',
        concern_c: 'Saya ingin meningkatkan skor kredit saya dan kemungkinan persetujuan untuk pembelian besar',
        concern_d: 'Saya ingin mengurangi jumlah faedah yang dibayar',
        concern_e: 'Saya mahukan kelonggaran kewangan dan ruang untuk bernafas setiap bulan',
        ctos_label: 'Muat Naik Laporan CTOS (Pilihan)',
        ctos_helper: 'Muat naik laporan CTOS terbaru anda dalam format PDF atau imej. Ini membantu kami mengekstrak skor kredit, butiran pinjaman dan sejarah pembayaran secara automatik. Atau, masukkan pinjaman dan maklumat kredit anda secara manual di bawah.',
        creditScore_label: 'Skor Kredit CTOS Anda (atau dianggarkan)',
        creditScore_helper: 'Anda boleh menemuinya dalam laporan CTOS anda atau anggarkan berdasarkan sejarah pembayaran.',
        repaymentBehaviour_label: 'Kelakuan Pembayaran Biasa Anda',
        repayment_excellent: 'Cemerlang (Sentiasa tepat masa, tiada lalai)',
        repayment_good: 'Baik (Kebanyakannya tepat masa, jarang lewat bayar)',
        repayment_fair: 'Sederhana (Beberapa bayaran lewat atau lalai)',
        repayment_poor: 'Lemah (Kerap lewat bayar atau lalai)',
        employment_label: 'Status Pekerjaan',
        employment_private: 'Sepenuh masa (Sektor swasta)',
        employment_govt: 'Sepenuh masa (Sektor Kerajaan/Awam)',
        employment_self: 'Bekerja sendiri / Pemilik perniagaan',
        employment_parttime: 'Sambilan / Bebas',
        employment_retired: 'Bersara / Pencen',
        employment_unemployed: 'Menganggur / Pencari kerja',
        sector_label: 'Sektor Industri',
        sector_helper: 'Bank menilai risiko secara berbeza mengikut sektor. Sesetengah sektor dianggap lebih stabil.',
        age_label: 'Umur (Tahun)',
        savings_label: 'Simpanan / Rizab Tunai Bulanan Anggaran (RM)',
        savings_helper: 'Bank melihat simpanan sebagai tanda disiplin kewangan dan penampan kecemasan.',
        income_label: 'Pendapatan Kasar Bulanan (RM)',
        otherCommit_label: 'Komitmen Bulanan Lain (RM)',
        targetDSR_label: 'Sasaran DSR yang Anda Ingin Capai (%)',
        targetDSR_helper: 'Julat selesa: 40–50%',
      },
      table: {
        type: 'Jenis Pinjaman',
        bank: 'Bank / Institusi',
        outstanding: 'Baki Tertunggak (RM)',
        rate: 'Kadar Faedah (% p.a.)',
        tenure: 'Tempoh Baki (Tahun)',
        payment: 'Bayaran Bulanan (RM)',
        action: 'Tindakan',
      },
      loanType: {
        housing: 'Pinjaman Perumahan',
        car: 'Pinjaman Kereta',
        personal: 'Pinjaman Peribadi',
        creditCard: 'Kad Kredit',
        overdraft: 'Terlebih Debit',
        business: 'Pinjaman Perniagaan',
        others: 'Lain-lain',
      },
      btn: {
        addLoan: 'Tambah Pinjaman Lain',
        deleteRow: 'Hapus',
        analyze: 'Analisis & Bandingkan Pelan',
        reset: 'Tetapkan Semula',
        contactAdvisor: 'Hubungi Penasihat Kami untuk Pelaksanaan',
        exploreMore: 'Jelajahi Alat Lainnya',
      },
      result: {
        title: 'Analisis Pengoptimuman & Rancangan Penstrukturan Semula',
        current_label: 'Kedudukan Kredit Semasa Anda',
        after_label: 'Selepas Penstrukturan Semula',
        monthlySavings: 'Penjimatan Bulanan (RM)',
        approvalOddsImprovement: 'Peningkatan Kemungkinan Kelulusan',
        creditHealthExplain: 'Skor kesihatan kredit anda ({{score}}/100) adalah berdasarkan: (1)Nisbah DSR - {{dsrPts}} mata, (2)Skor CTOS/CCRIS - {{ctosPts}} mata, (3)Kelakuan pembayaran - {{repayPts}} mata, (4)Kestabilan pekerjaan - {{empPts}} mata, (5)Profil umur - {{agePts}} mata. Skor yang lebih tinggi meningkatkan peluang anda dengan kebanyakan bank.',
        approvalFactors: 'Bank menilai: (40%) DSR - kapasiti pembayaran bulanan anda, (35%)Kesihatan kredit - skor kredit dan rekod pembayaran anda, (25%)Kestabilan - jenis pekerjaan, umur, dan simpanan anda. Penstrukturan semula menurunkan DSR anda dan meningkatkan kemungkinan kelulusan, tetapi tidak akan mengubah sejarah kredit anda secara retroaktif. Membina rekod pembayaran yang bersih memerlukan masa.',
        secured_title: 'Pinjaman Bercagar (Tiada Perubahan Disyorkan)',
        secured_note: 'Pinjaman ini biasanya mempunyai kadar yang lebih baik dan status bercagar, jadi kami tidak mengesyorkan menyatukannya.',
        unsecured_title: 'Pinjaman Tidak Bercagar (Disyorkan untuk Penyatuan)',
        consolidation_proposal: 'Satukan menjadi 1 pinjaman peribadi @ 7% p.a. selama 7 tahun',
        rec_a: 'Dengan menyatukan {{count}} pinjaman tidak bercagar anda menjadi satu pinjaman peribadi pada 7% p.a., anda boleh mengurangkan komitmen bulanan anda dari RM {{current}} kepada RM {{optimized}}, menjimatkan RM {{savings}} setiap bulan. DSR anda bertambah baik dari {{currentDSR}}% kepada {{optimizedDSR}}%, dan kemungkinan kelulusan anda meningkat dari {{currentOdds}}% kepada {{optimizedOdds}}%. Ini adalah pilihan terbaik untuk matlamat anda. Walau bagaimanapun, kelulusan sebenar bergantung pada polisi bank tertentu dan penilaian mereka terhadap sejarah kredit anda.',
        rec_b: 'Jika anda menggunakan penjimatan bulanan RM {{savings}} untuk membayar tambahan ke arah pinjaman disatukan anda (menggunakan kaedah avalanche atau snowball), anda boleh bebas hutang {{months}} bulan lebih cepat. Strategi pembayaran agresif ini akan mengurangkan jumlah faedah yang dibayar dengan ketara. DSR yang bertambah baik dan hutang yang berkurangan juga akan meningkatkan kemungkinan kelulusan untuk pinjaman masa hadapan.',
        rec_c: 'Menyatukan sekarang meningkatkan DSR anda dari {{currentDSR}}% kepada {{optimizedDSR}}%, meningkatkan kemungkinan kelulusan anda dari {{currentOdds}}% kepada {{optimizedOdds}}%. Untuk pembelian besar (rumah atau kereta), DSR yang lebih rendah adalah kritikal. Selain itu, memulakan rekod pembayaran yang bersih dengan pinjaman disatukan dalam 6-12 bulan akan datang akan mengukuhkan profil kredit anda. Rancang garis masa pembelian besar anda dengan sewajarnya.',
        rec_d: 'Menyatukan menjimatkan anda kira-kira RM {{totalInterestSaved}} dalam jumlah faedah selama {{consolidationTenure}} tahun berbanding struktur semasa anda. Kadar faedah yang lebih rendah (7% vs. purata wajaran semasa anda {{currentWeightedRate}}%) adalah pemacu utama. Digabungkan dengan DSR yang bertambah baik dan kemungkinan kelulusan, ini adalah langkah kewangan yang menarik.',
        rec_e: 'Mengurangkan komitmen bulanan anda dari RM {{current}} kepada RM {{optimized}} (penjimatan RM {{savings}}) memberi anda ruang untuk bernafas yang sangat diperlukan. Kelonggaran ini membolehkan anda menangani kecemasan, melabur, atau meningkatkan simpanan tanpa merasa tertekan secara kewangan. Kemungkinan kelulusan anda juga bertambah baik kepada {{optimizedOdds}}%, membuka pintu untuk peluang masa hadapan.',
        approvalNote: 'Walaupun analisis ini memberikan penilaian yang realistik berdasarkan pelbagai faktor, kelulusan pinjaman sebenar ditentukan oleh setiap bank secara individu. Bank yang berbeza mempunyai selera risiko, polisi, dan kriteria yang berbeza. Faktor seperti turun naik sektor pekerjaan, sejarah hubungan dengan bank, dan keadaan makroekonomi juga memainkan peranan. Kami mengesyorkan berunding dengan pelbagai bank atau menggunakan perkhidmatan penasihat kami untuk panduan yang dipersonalisasi.',
      },
      disclaimer: '**Penafian:** Pengoptimal ini memberikan analisis berdasarkan kriteria pemberian pinjaman bank Malaysia yang khas dan untuk tujuan pendidikan. Hasil TIDAK membentuk kelulusan atau jaminan pinjaman sebenar. Kelulusan bergantung pada: (1)Laporan CTOS/CCRIS sebenar anda, (2)Sejarah pembayaran, (3)Pengesahan pekerjaan, (4)Dokumentasi pendapatan, (5)Penilaian harta (jika berkaitan), (6)Model risiko dalaman bank, (7)Faktor makroekonomi. Setiap bank mempunyai model penilaian kredit proprietari. Kami tidak menjamin ketepatan syarat atau kadar penyatuan. Ini BUKAN nasihat kewangan profesional. Berunding dengan penasihat kewangan berlesen untuk cadangan yang dipersonalisasi.',
    },
    toolsHub: {
      mainTitle: 'Peralatan Kalkulator Kewangan & Perancangan',
      mainSubtitle: 'Pilih kalkulator yang sesuai dengan situasi kewangan anda. Setiap alat menyediakan perbandingan sebelum dan sesudah untuk membantu anda membuat keputusan yang bijak.',
      enterBtn: 'Masuki Kalkulator',
      card1: {
        title: 'Pemeriksaan Kelayakan Pinjaman Cepat',
        desc: 'Hitung dengan cepat kapasiti pinjaman anda dan Nisbah Khidmat Hutang (DSR) berdasarkan pendapatan. Lihat berapa banyak anda boleh meminjam.',
      },
      card2: {
        title: 'Diagnosis Pengoptimuman Pinjaman CTOS',
        desc: 'Muat naik laporan CTOS dan bukti pendapatan anda. Dapatkan analisis perbandingan sebelum dan sesudah yang menunjukkan bagaimana penyatuan dan penstrukturan semula dapat mengurangkan pembayaran bulanan, faedah, dan DSR anda.',
      },
      card3: {
        title: 'Simulator Pembayaran Hutang Kad Kredit',
        desc: 'Bandingkan tiga strategi pembayaran: pembayaran minimum, pembayaran agresif, atau pinjaman penyatuan. Lihat perbezaan masa, faedah, dan kos bulanan dengan jelas.',
      },
      card4: {
        title: 'Perancang Kos Harta & Renovasi',
        desc: 'Rancang pembelian harta + renovasi dalam satu alat. Bandingkan senario renovasi asas, standard, dan premium. Lihat tunai pendahuluan yang diperlukan dan kesan komitmen bulanan.',
      },
      card5: {
        title: 'Analyzer Penyelesaian & Penstrukturan Semula Pinjaman',
        desc: 'Hitung jumlah penyelesaian untuk pinjaman anda. Muat naik CTOS, analisis pinjaman mana yang perlu diselesaikan/disatukan, dan dapatkan perbandingan penjimatan bulanan sebelum dan sesudah.',
      },
      card6: {
        title: 'Perancang Aliran Tunai & Pulang Modal Perniagaan',
        desc: 'Rancang perniagaan baru anda: tetapkan kos permulaan, perbelanjaan bulanan, dan unjuran jualan. Bandingkan senario pesimis, asas, dan optimis untuk memahami keberlanjutan.',
      },
      card7: {
        title: 'Papan Pemuka Kesihatan Hutang',
        desc: 'Dapatkan pandangan komprehensif tentang jumlah hutang anda, komitmen bulanan, dan DSR. Lihat penguraian mengikut jenis pinjaman dan klasifikasi kesihatan.',
      },
      card8: {
        title: 'Potret Nilai Bersih & Leverage',
        desc: 'Hitung jumlah aset anda, liabiliti, nilai bersih, dan nisbah leverage. Fahami kedudukan kewangan anda dan dapatkan pandangan tentang komposisi aset/liabiliti.',
      },
      footerText: 'Semua kalkulator hanya untuk tujuan anggaran dan pendidikan. Hasil tidak membentuk kelulusan pinjaman atau nasihat kewangan profesional. Untuk cadangan yang dipersonalisasi, berunding dengan penasihat kewangan kami.',
      footerCTA_btn: 'Perlukan Bantuan? Bercakap dengan Penasihat',
    },
    cardSimulator: {
      header: {
        title: 'Simulator Pembayaran Hutang Kad Kredit',
        subtitle: 'Bandingkan tiga strategi pembayaran: pembayaran minimum, pembayaran agresif, atau pinjaman penyatuan. Lihat berapa lama ia mengambil masa, berapa banyak faedah dibayar, dan pilihan mana yang sesuai dengan aliran tunai anda.',
        notice: 'Penting: Simulator ini memfokuskan pada senario hutang kad kredit. Ia membantu anda memahami tempoh bayaran dan kos faedah, tetapi tidak mewakili tawaran sebenar bank. Kadar dan kelulusan pinjaman penyatuan bergantung pada profil kredit anda dan polisi bank.',
      },
      input: {
        cards_title: 'Maklumat Kad Kredit Anda',
        cards_helper: 'Senaraikan setiap kad dengan baki semasa, kadar faedah, dan bayaran minimum bulanan. Simulator akan mengira tempoh bayaran dan faedah di bawah strategi berbeza.',
        strategy_title: 'Tetapan Strategi Pembayaran',
        aggressiveBudget_label: 'Bajet Bulanan untuk Pembayaran Agresif (RM)',
        aggressiveBudget_helper: 'Jumlah yang anda sanggup komit setiap bulan untuk menyelesaikan semua kad. Simulator akan mengagihkan menggunakan kaedah snowball atau avalanche.',
        consolRate_label: 'Kadar Faedah Tahunan Pinjaman Penyatuan (% p.a.)',
        consolTenure_label: 'Tempoh Pinjaman Penyatuan (Tahun)',
        consol_helper: 'Strategi penyatuan menganggap anda mengambil satu pinjaman peribadi untuk menyelesaikan semua baki kad yang disenaraikan, kemudian hanya membayar ansuran tetap ini setiap bulan.',
      },
      table: {
        cardName: 'Nama Kad / Bank',
        balance: 'Baki Semasa (RM)',
        rate: 'Kadar Faedah Tahunan (% p.a.)',
        minPayment: 'Bayaran Minimum Bulanan (RM)',
      },
      btn: {
        addCard: 'Tambah Kad Lain',
        deleteRow: 'Hapus',
        simulate: 'Simulasikan 3 Strategi',
        reset: 'Tetapkan Semula',
        ctosOptimizer: 'Perlu Pelan Penuh Berdasarkan CTOS?',
        exploreTools: 'Kembali ke Semua Alat',
      },
      result: {
        title: 'Keputusan Perbandingan Strategi Pembayaran',
        totalBalance: 'Jumlah Baki Kad Semasa',
        totalMinPayment: 'Jumlah Bayaran Minimum Bulanan',
        table_header_strategy: 'Strategi',
        table_header_months: 'Bulan untuk Menjelaskan',
        table_header_years: 'Kira-kira Tahun',
        table_header_totalInterest: 'Jumlah Faedah Dibayar (RM)',
        table_header_monthlyPayment: 'Bayaran Bulanan (RM)',
        table_header_comment: 'Komen',
        strategy1_name: 'Hanya Bayaran Minimum',
        strategy2_name: 'Pembayaran Agresif (Bajet RM {{budget}})',
        strategy3_name: 'Pinjaman Penyatuan @ {{rate}}% untuk {{tenure}} tahun',
        strategy1_comment: 'Paling perlahan dan paling mahal. Anda akan membayar jumlah faedah tertinggi dan kekal dalam hutang untuk tempoh terpanjang.',
        strategy2_comment: 'Lebih cepat dan lebih murah daripada pembayaran minimum. Semakin banyak bajet yang anda komit, semakin banyak faedah yang anda jimat dan lebih cepat anda bebas hutang.',
        strategy3_comment: 'Memudahkan pelbagai kad menjadi satu ansuran tetap. Biasanya menurunkan bayaran bulanan tetapi memanjangkan tempoh. Baik untuk kawalan aliran tunai, tetapi semak kadar dan yuran bank sebenar.',
        bestOption_title: 'Strategi Mana Terbaik?',
        bestOption_text: 'Untuk penjimatan tulen, strategi dengan jumlah faedah terendah adalah terbaik. Untuk aliran tunai, strategi dengan bayaran bulanan terendah lebih mudah dikawal. Pilih berdasarkan keutamaan anda, atau bincangkan dengan penasihat kami.',
      },
      disclaimer: 'Simulator ini hanya untuk tujuan anggaran dan pendidikan. Ia tidak menggambarkan caj sebenar bank, yuran bayaran lewat, atau tawaran pemindahan baki promosi. Kadar pinjaman penyatuan dan kelulusan sebenar bergantung pada profil kredit anda, laporan CTOS/CCRIS, dan polisi setiap bank.',
    },
    propertyRenovationPlanner: {
      header: {
        title: 'Struktur Pinjaman Harta & Pengubahsuaian',
        subtitle: 'Rancang pembiayaan pembelian harta dan pengubahsuaian anda. Bandingkan dua strategi: pinjaman berasingan (rumah + pengubahsuaian) atau struktur gabungan. Lihat pembayaran bulanan, kemungkinan persetujuan dan jumlah kos faedah.',
        notice: 'Penting: Kalkulator ini menganggap syarat gadai janji Malaysia standard (maksimum 35 tahun untuk pinjaman rumah, kadar lebih tinggi untuk pinjaman pengubahsuaian). Persetujuan sebenar bergantung pada penilaian harta, profil kredit anda (CTOS/CCRIS), DSR dan polisi bank. Pinjaman pengubahsuaian biasanya membawa kadar faedah lebih tinggi daripada pinjaman rumah.',
      },
      input: {
        propertyPrice_label: 'Harga Harta (RM)',
        downPayment_label: 'Bayaran Pendahuluan (RM)',
        downPayment_helper: 'Biasanya 10-20% untuk bank Malaysia. Bayaran pendahuluan lebih tinggi = LTV lebih rendah = kemungkinan persetujuan lebih baik.',
        renoBudget_label: 'Bajet Pengubahsuaian (RM)',
        renoFinType_label: 'Bagaimana anda ingin membiayai pengubahsuaian?',
        renoFinType_personal: 'Pinjaman Peribadi (Kadar lebih tinggi, ~10% p.a., maksimum 7-10 tahun)',
        renoFinType_renoLoan: 'Pinjaman Pengubahsuaian (Produk khas, ~7-8% p.a., maksimum 15 tahun)',
        renoFinType_topup: 'Top-up Pinjaman Rumah (Sama seperti kadar pinjaman rumah, ~3.5% p.a., sehingga had LTV)',
        ctosScore_label: 'Skor Kredit CTOS Anda (atau anggaran)',
        existingDebt_label: 'Komitmen Hutang Bulanan Semasa Anda (RM)',
        existingDebt_helper: 'Sertakan pinjaman kereta, pinjaman peribadi, minimum kad kredit, dll. (tidak termasuk pinjaman harta yang dicadangkan)',
        income_label: 'Pendapatan Kasar Bulanan Anda (RM)',
        homeLoanTenure_label: 'Tempoh Pinjaman Rumah (Tahun)',
        homeRate_label: 'Kadar Pinjaman Rumah Dijangka (% p.a.)',
        homeRate_helper: 'Julat tipikal semasa: 3.2–3.8% bergantung pada bank dan profil kredit.',
      },
      btn: {
        calculate: 'Bandingkan Pilihan Pembiayaan',
        reset: 'Tetapkan Semula',
        contactAdvisor: 'Hubungi Penasihat Gadai Janji Kami',
        tools: 'Kembali ke Semua Alat',
      },
      result: {
        title: 'Perbandingan Pilihan Pembiayaan',
        strategy1_name: 'Pinjaman Rumah + Pengubahsuaian Berasingan',
        strategy2_name: 'Pinjaman Rumah Gabungan (Harta + Pengubahsuaian)',
        strategy1_note: 'Pinjaman berasingan membenarkan kadar dan tempoh berbeza untuk bahagian harta dan pengubahsuaian.',
        strategy2_note: 'Struktur gabungan hanya tersedia jika bank membenarkan. Semak dengan bank anda jika jumlah pengubahsuaian dalam had LTV.',
        recommendation: '**Strategi {{bestStrategy}} disyorkan** untuk profil anda. Inilah sebabnya: {{reason}}. Kemungkinan persetujuan anda adalah {{odds}}% dengan mana-mana strategi, tetapi {{savingsReason}}.',
        considerations: 'Pertimbangan Penting: LTV anda adalah {{ltv}}%. {{ltvComment}} DSR anda dengan pinjaman baharu akan menjadi {{dsr}}%. {{dsrComment}}',
      },
      disclaimer: 'Kalkulator ini untuk tujuan anggaran dan tidak membentuk tawaran pinjaman. Persetujuan sebenar bergantung pada: (1)Penilaian harta oleh penilai yang dilantik bank, (2)Laporan kredit anda (CTOS/CCRIS), (3)Pengesahan dan kestabilan pendapatan, (4)Butiran pekerjaan, (5)Polisi dalaman dan model risiko bank, (6)Kadar faedah pasaran semasa. Kadar faedah ditunjukkan ialah julat tipikal dan mungkin berbeza. Pinjaman pengubahsuaian mungkin mempunyai syarat tambahan (cth. jadual pengubahsuaian, kelulusan kontraktor). Sentiasa sahkan syarat akhir dengan bank pilihan anda.',
    },
    settlementAnalyzer: {
      header: {
        title: 'Penganalisa Kesan Penyelesaian Hutang & Rundingan',
        subtitle: 'Fahami bagaimana menyelesaikan hutang tertunggak (sebahagian atau penuh) mempengaruhi skor kredit anda, DSR, dan kemungkinan persetujuan pinjaman masa depan. Bandingkan strategi rundingan dan kesannya jangka panjang.',
        notice: 'Penyelesaian memberi kesan kepada rekod CTOS/CCRIS anda secara berbeza berdasarkan hasil rundingan. Penyelesaian penuh atau pengaturan formal mungkin meningkatkan kemungkinan persetujuan masa depan. Penyelesaian sebahagian mungkin ditunjukkan sebagai \'diselesaikan\' tetapi masih menjejaskan sejarah kredit. Berunding dengan penasihat hutang berlesen sebelum berunding.',
      },
      input: {
        income_label: 'Pendapatan Kasar Bulanan (RM)',
        otherDebt_label: 'Obligasi Hutang Bulanan Lain (RM)',
        ctosScore_label: 'Skor CTOS Semasa (atau dianggarkan)',
        settleDate_label: 'Tarikh Penyelesaian Sasaran',
        assessmentDate_label: 'Bilakah anda merancang memohon pinjaman baru?',
      },
      table: {
        debtType: 'Jenis Hutang',
        creditor: 'Pemiutang / Bank',
        balance: 'Baki Tertunggak Semasa (RM)',
        paymentStatus: 'Status Pembayaran Terakhir',
        monthsDefault: 'Bulan dalam Lalai',
      },
      debtType: {
        creditCard: 'Kad Kredit',
        personal: 'Pinjaman Peribadi',
        overdraft: 'Terlebih Debit',
        business: 'Pinjaman Perniagaan',
        other: 'Lain-lain',
      },
      paymentStatus: {
        ontime: 'Tepat masa',
        late30: 'Lewat 30 hari',
        late60: 'Lewat 60+ hari',
        default: 'Dalam lalai',
      },
      scenario: {
        name_label: 'Nama Senario',
        amount_label: 'Jumlah Penyelesaian (RM)',
        method_label: 'Kaedah Pembayaran',
        method_lumpsum: 'Jumlah sekali gus (pembayaran sekali)',
        method_installment: 'Ansuran (pembayaran bulanan)',
        arrangement_label: 'Jenis Pengaturan Penyelesaian',
        arrangement_full: 'Penyelesaian Penuh (tiada obligasi masa depan)',
        arrangement_partial: 'Penyelesaian Separa (pengurangan dirundingkan)',
        arrangement_formal: 'Pengaturan Formal (didaftarkan dengan pemiutang)',
        installmentMonths_label: 'Bilangan Bulan Ansuran',
      },
      btn: {
        addDebt: 'Tambah Hutang Lain',
        deleteRow: 'Hapus',
        addScenario: 'Tambah Senario Penyelesaian',
        analyze: 'Analisis Kesan Penyelesaian',
        reset: 'Tetapkan Semula',
        negotiateGuide: 'Dapatkan Panduan Rundingan',
        advisors: 'Sambung dengan Penasihat Kewangan',
        again: 'Cuba Senario Lain',
      },
      result: {
        title: 'Analisis Kesan Penyelesaian',
        scenario_title: 'Analisis Senario',
        settlementDetails: 'Butiran Penyelesaian',
        immediateDSR: 'Kesan DSR Segera',
        ctosRecovery: 'Pemulihan Skor CTOS',
        futureApproval: 'Kemungkinan Persetujuan Masa Depan',
        totalCost: 'Perbandingan Jumlah Kos',
        insight: 'Menyelesaikan hutang anda sekarang meningkatkan DSR anda dengan segera dan boleh memulihkan skor CTOS anda dalam 6–12 bulan. {{bestScenario}} adalah pilihan yang paling menguntungkan, membolehkan anda layak untuk pinjaman baharu dengan kemungkinan persetujuan yang lebih tinggi.',
      },
      disclaimer: 'Analisis ini menganggarkan pemulihan CTOS dan kemungkinan persetujuan berdasarkan kriteria bank Malaysia yang tipikal. Masa pemulihan dan kemungkinan persetujuan sebenar berbeza mengikut bank, jumlah penyelesaian, sejarah pembayaran, dan faktor makroekonomi. Perjanjian penyelesaian mesti dirundingkan terus dengan pemiutang anda—berunding dengan penasihat hutang berlesen atau penasihat kewangan sebelum meneruskan. Ini BUKAN nasihat undang-undang atau kewangan.',
    },
    expenseTracker: {
      header: {
        title: 'Penjejak Perbelanjaan & Papan Pemuka Bajet',
        subtitle: 'Jejaki perbelanjaan harian anda, tetapkan bajet bulanan mengikut kategori, dan lihat ke mana wang anda pergi. Kenal pasti peluang penjimatan dan tingkatkan disiplin kewangan anda.',
      },
      input: {
        date_label: 'Tarikh',
        category_label: 'Kategori',
        amount_label: 'Jumlah (RM)',
        description_label: 'Penerangan (Opsional)',
      },
      category: {
        food: 'Makanan & Makan',
        transport: 'Pengangkutan',
        utilities: 'Utiliti',
        shopping: 'Membeli-belah',
        entertainment: 'Hiburan',
        health: 'Kesihatan & Kesejahteraan',
        education: 'Pendidikan',
        miscellaneous: 'Pelbagai',
        other: 'Lain-lain',
      },
      budget: {
        category: 'Kategori',
        monthlyBudget: 'Bajet Bulanan (RM)',
        spentYTD: 'Dibelanjakan Bulan Ini (RM)',
        percentUsed: '% Digunakan',
        remaining: 'Baki (RM)',
      },
      btn: {
        addExpense: 'Tambah Perbelanjaan',
        saveBudget: 'Simpan Bajet Bulanan',
        export: 'Eksport ke CSV',
        download: 'Muat Turun Laporan Bulanan',
        savingsGoal: 'Tetapkan Sasaran Simpanan',
        tools: 'Kembali ke Semua Alat',
      },
      dashboard: {
        totalIncome: 'Jumlah Pendapatan Bulan Ini',
        totalExpenses: 'Jumlah Perbelanjaan Bulan Ini',
        remainingBalance: 'Baki Baki',
        savingsRate: 'Kadar Simpanan',
        currentMonth: 'Gambaran Keseluruhan Bulan Semasa',
        budgetVsActual: 'Bajet vs. Sebenar',
      },
      result: {
        takeaway: 'Anda telah membelanjakan RM {{total}} bulan ini merentas {{categories}} kategori. {{savings_opportunity}}',
        highestCategory: 'Perbelanjaan teratas anda ialah {{category}} pada RM {{amount}} ({{percent}}% daripada jumlah)',
        mostFrequent: 'Anda membuat {{count}} transaksi bulan ini. Purata transaksi anda ialah RM {{average}}.',
        budgetStatus: 'Anda berada di landasan dengan {{onTrack}} kategori, melebihi bajet dalam {{overBudget}} kategori',
        savingRecommendation: 'Jika anda mengurangkan {{category}} sebanyak {{percent}}%, anda boleh menjimatkan RM {{savings}} bulan ini.',
      },
      disclaimer: 'Penjejak ini hanya untuk kegunaan peribadi. Data disimpan secara tempatan dalam penyemak imbas anda dan tidak dikongsi dengan pihak ketiga melainkan anda mengeksportnya. Semak dan kemas kini bajet anda secara berkala untuk sepadan dengan tabiat perbelanjaan anda.',
    },
    insurancePlanner: {
      header: {
        title: 'Perancang Perlindungan & Perlindungan Insurans',
        subtitle: 'Nilai keperluan insurans anda merentas hayat, kesihatan, hilang upaya, penyakit kritikal, dan harta. Kira jumlah perlindungan yang disyorkan dan bandingkan senario perlindungan dengan premium tahunan yang dianggarkan.',
        notice: 'Perancang ini memberikan cadangan perlindungan yang dianggarkan berdasarkan prinsip perancangan kewangan umum. Keperluan insurans sebenar berbeza-beza mengikut keadaan peribadi, situasi keluarga, dan toleransi risiko anda. Berunding dengan penasihat insurans berlesen untuk sebut harga yang dipersonalisasi dan pemilihan polisi.',
      },
      input: {
        age_label: 'Umur Anda (Tahun)',
        gender_label: 'Jantina',
        smoking_label: 'Status Merokok',
        health_label: 'Status Kesihatan Umum',
        dependents_label: 'Bilangan Tanggungan (Anak-anak, Pasangan, Ibu Bapa)',
        spouseIncome_label: 'Pendapatan Tahunan Pasangan (RM, jika berkaitan)',
        income_label: 'Pendapatan Kasar Bulanan Anda (RM)',
        debts_label: 'Jumlah Hutang Tertunggak (Rumah, Kereta, Pinjaman Peribadi, RM)',
        assets_label: 'Jumlah Aset (Tunai, Harta, Pelaburan, RM)',
        homeOwnership_label: 'Status Pemilikan Rumah',
        homeValue_label: 'Nilai Rumah yang Dianggarkan (RM)',
        goal_label: 'Apakah matlamat insurans utama anda?',
        lifePreference_label: 'Jenis Insurans Hayat Pilihan',
        healthPreference_label: 'Prioriti Insurans Kesihatan',
        disabilityPreference_label: 'Sertakan Insurans Hilang Upaya / Perlindungan Pendapatan?',
      },
      gender: {
        male: 'Lelaki',
        female: 'Perempuan',
        preferNot: 'Tidak Mahu Nyatakan',
      },
      smoking: {
        non: 'Bukan perokok',
        smoker: 'Perokok',
        ex: 'Bekas perokok',
      },
      health: {
        excellent: 'Cemerlang',
        good: 'Baik',
        fair: 'Sederhana',
        poor: 'Lemah',
      },
      homeOwnership: {
        ownMortgage: 'Pemilik (dengan gadai janji)',
        ownPaid: 'Pemilik (dibayar penuh)',
        renting: 'Menyewa',
        planning: 'Merancang untuk membeli',
      },
      goal: {
        a: 'Melindungi keluarga saya jika saya meninggal dunia',
        b: 'Tutup peristiwa kesihatan utama (penyakit kritikal, perawatan di hospital)',
        c: 'Lindungi daripada kehilangan pendapatan akibat hilang upaya atau kehilangan pekerjaan',
        d: 'Perlindungan komprehensif merentas semua keperluan perlindungan',
      },
      lifePreference: {
        term: 'Insurans Hayat Jangka (berpatutan, tempoh terhad)',
        whole: 'Insurans Hayat Sepanjang Hayat (perlindungan sepanjang hayat, kos lebih tinggi)',
        combination: 'Gabungan',
      },
      healthPreference: {
        basic: 'Perlindungan Asas (perawatan di hospital)',
        comprehensive: 'Komprehensif (termasuk pesakit luar, penyakit kritikal)',
        premium: 'Premium (semua termasuk)',
      },
      disabilityPreference: {
        yes: 'Ya',
        no: 'Tidak',
        optional: 'Pilihan (tidak pasti)',
      },
      btn: {
        calculate: 'Kira Keperluan Insurans',
        reset: 'Tetapkan Semula',
        quotes: 'Dapatkan Sebut Harga Insurans dari Rakan Kongsi',
        advisor: 'Berunding dengan Penasihat Berlesen',
        tools: 'Kembali ke Semua Alat',
      },
      result: {
        title: 'Cadangan Perlindungan Insurans',
        lifeInsurance: 'Insurans Hayat',
        healthInsurance: 'Insurans Kesihatan',
        criticalIllness: 'Insurans Penyakit Kritikal',
        disabilityInsurance: 'Insurans Hilang Upaya',
        propertyInsurance: 'Insurans Harta',
        protectionScore: 'Skor Perlindungan Perlindungan',
        totalAnnualPremium: 'Premium Tahunan Jumlah',
        insight: 'Berdasarkan profil anda, pelaburan insurans tahunan jumlah yang disyorkan anda ialah RM {{total}}. Ini {{percent}}% daripada pendapatan bulanan anda memberikan perlindungan komprehensif untuk keluarga dan aset anda.',
      },
      disclaimer: 'Perancang ini memberikan cadangan perlindungan yang dianggarkan dan anggaran premium untuk tujuan pendidikan. Premium sebenar berbeza-beza mengikut penanggung insurans, penilaian underwriting, pemeriksaan perubatan, dan sejarah tuntutan. Ini BUKAN sebut harga. Berunding dengan penasihat insurans berlesen untuk sebut harga yang tepat, perbandingan polisi, dan cadangan yang disesuaikan berdasarkan keperluan khusus anda.',
    },
    savingsGoal: {
      header: {
        title: 'Perancang Sasaran Simpanan & Pelaburan',
        subtitle: 'Tetapkan matlamat kewangan anda dan kira berapa banyak yang perlu anda simpan atau laburkan setiap bulan untuk mencapainya. Bandingkan strategi simpanan dan pelaburan yang berbeza dengan unjuran pulangan yang realistik.',
        notice: 'Perancang ini memberikan anggaran berdasarkan kadar pulangan yang diandaikan dan senario inflasi. Pulangan pelaburan sebenar berbeza-beza bergantung pada keadaan pasaran, peruntukan aset, dan toleransi risiko. Prestasi masa lalu tidak menunjukkan pulangan masa depan. Berunding dengan penasihat kewangan untuk strategi pelaburan yang dipersonalisasi.',
      },
      input: {
        goalType_label: 'Apakah matlamat kewangan utama anda?',
        timeline_label: 'Jadual untuk Mencapai (Bulan atau Tahun)',
        priority_label: 'Prioriti Sasaran',
        goalStatus_label: 'Sudah Disimpan untuk Sasaran Ini (RM)',
        monthlySavings_label: 'Simpanan Bulanan Tersedia (RM)',
        allocation_label: 'Bagaimana anda akan memperuntukkan simpanan anda?',
        investmentStrategy_label: 'Strategi Pelaburan (jika berkaitan)',
        inflation_label: 'Kadar Inflasi Tahunan Diandaikan (%)',
      },
      goal: {
        emergency: 'Dana Kecemasan (3-6 bulan perbelanjaan)',
        homeDownPayment: 'Bayaran Muka Rumah (20% daripada harga harta)',
        vehicle: 'Pembelian Kenderaan (Bayaran Muka Kereta / Motosikal)',
        education: 'Dana Pendidikan (Universiti / Pendidikan Tinggi Anak-anak)',
        retirement: 'Dana Persaraan (Korpus yang diperlukan semasa persaraan)',
        vacation: 'Dana Cuti / Perjalanan',
        custom: 'Sasaran Kewangan Khusus',
      },
      priority: {
        high: 'Tinggi',
        medium: 'Sederhana',
        low: 'Rendah',
      },
      allocation: {
        equal: 'Pengagihan Sama',
        priority: 'Berdasarkan Prioriti',
        custom: 'Pengagihan Khusus',
      },
      investmentStrategy: {
        savings_only: 'Hanya Simpanan (0% pulangan)',
        conservative: 'Konservatif (3% pulangan tahunan)',
        balanced: 'Seimbang (6% pulangan tahunan)',
        growth: 'Pertumbuhan (8% pulangan tahunan)',
        aggressive: 'Agresif (10%+ pulangan tahunan)',
      },
      btn: {
        addGoal: 'Tambah Sasaran',
        calculate: 'Kira Rancangan Simpanan',
        reset: 'Tetapkan Semula',
        openAccount: 'Buka Akaun Pelaburan dengan Bank Rakan Kongsi',
        advisor: 'Berunding dengan Penasihat Kewangan',
        tools: 'Kembali ke Semua Alat',
        downloadPlan: 'Muat Turun Rancangan Simpanan Saya (PDF)',
      },
      result: {
        title: 'Rancangan Simpanan & Pelaburan Anda',
        actionPlan: '1. Sediakan pemindahan bulanan automatik RM {{allocation}} ke akaun simpanan/pelaburan khusus. 2. Semak dan seimbang semula setiap suku tahun. 3. Laraskan matlamat jika keadaan berubah (kenaikan gaji, bonus, peristiwa hidup). 4. Kekal berdisiplin—pertumbuhan kompaun memerlukan konsistensi.',
        onTrack: 'Di Landasan',
        tight: 'Ketat',
        needsAdjustment: 'Perlu Pelarasan',
        achievable: 'Cemerlang! Simpanan bulanan anda sebanyak RM {{available}} boleh menampung semua matlamat dengan baki RM {{surplus}} setiap bulan.',
        challenging: 'Simpanan bulanan yang diperuntukkan anda (RM {{available}}) adalah {{deficit}} RM kurang daripada yang diperlukan untuk mencapai semua matlamat secara serentak.',
      },
      disclaimer: 'Perancang ini memberikan anggaran berdasarkan kadar pulangan yang diandaikan, inflasi, dan disiplin simpanan. Hasil sebenar bergantung pada prestasi pasaran, pilihan pelaburan, dan konsistensi simpanan. Pulangan pelaburan tidak dijamin. Prestasi masa lalu tidak menunjukkan hasil masa depan. Berunding dengan penasihat kewangan untuk strategi pelaburan yang dipersonalisasi dan penilaian risiko.',
    },
    cardManagement: {
      hero: {
        tag: 'Pengurusan Kad Kredit Profesional',
        title: 'Jimat RM 1,200-5,000 Setahun',
        subtitle: 'Melalui Perkhidmatan Pengurusan Kad Kredit Profesional',
        benefits: [
          { icon: '', value: 'RM 500-2,000/tahun', label: 'Elak Penalti Lewat Bayar' },
          { icon: '', value: 'RM 800-3,000/tahun', label: 'Ganjaran & Pulangan Tunai Tambahan' },
          { icon: '', value: '50-100 Mata', label: 'Peningkatan Skor Kredit' },
        ],
        cta1: 'Perundingan WhatsApp Percuma',
        cta2: 'Lihat Harga',
        socialProof: 'Lebih 500 pelanggan | Menguruskan 1,000+ kad | Jumlah penjimatan RM 600,000+',
      },
      painPoints: {
        tag: 'Masalah Biasa',
        title: 'Adakah Anda Menghadapi Cabaran Kad Kredit Ini?',
        subtitle: 'Hutang kad kredit Malaysia: RM 50.7B | Hutang tertunggak: RM 551.8M (1.1%)',
        points: [
          {
            icon: '',
            title: 'Terlupa Bayar',
            description: 'Pelbagai kad, tarikh tamat berbeza, mudah terlepas bayaran',
            impact: 'Yuran lewat RM 150-300/kali + Kerosakan skor kredit',
          },
          {
            icon: '',
            title: 'Tidak Tahu Cara Optimalkan',
            description: 'Tidak faham ganjaran kad, mata terbuang, yuran tahunan tinggi',
            impact: 'Kehilangan RM 800-3,000/tahun faedah',
          },
          {
            icon: '',
            title: 'Kekacauan Pelbagai Kad',
            description: 'Urus 2-3 kad, penyata keliru, tekanan',
            impact: 'Perangkap bayaran minimum, faedah 18% setahun',
          },
        ],
        stats: [
          { value: 'RM 50.7B', label: 'Jumlah Hutang Kad' },
          { value: '18% p.a.', label: 'Kadar Faedah Maksimum' },
          { value: 'RM 551.8M', label: 'Jumlah Tertunggak' },
          { value: '50,000+', label: 'Belia Berhutang' },
        ],
      },
      solutions: {
        tag: 'Penyelesaian Kami',
        title: 'Perkhidmatan Profesional 5-dalam-1',
        subtitle: 'Pengurusan kad kredit menyeluruh untuk memaksimumkan faedah anda',
        services: [
          {
            icon: '',
            title: 'Perkhidmatan Peringatan Bayaran',
            description: 'Sistem peringatan 3 peringkat memastikan anda tidak terlepas bayaran',
            benefits: [
              'WhatsApp + SMS + E-mel tiga kali notifikasi',
              'Peringatan 7/3/1 hari sebelum tarikh tamat',
              'Semakan penyata bulanan',
              'Sistem amaran tertunggak',
            ],
          },
          {
            icon: '',
            title: 'Perkhidmatan Bayaran Wakil',
            description: 'Kami bayar bagi pihak anda untuk memastikan bayaran tepat masa',
            benefits: [
              'Jaminan bayaran tepat masa 100%',
              'Diproses dalam 2 hari bekerja',
              'Potongan automatik dari akaun yang ditetapkan',
              'Laporan penyesuaian bulanan',
            ],
          },
          {
            icon: '',
            title: 'Perkhidmatan Pembelian Wakil',
            description: 'Gunakan kad yang paling optimum untuk memaksimumkan ganjaran',
            benefits: [
              'Sistem pemilihan kad pintar',
              'Maksimumkan pulangan tunai dan mata',
              'Model perkongsian hasil 50/50',
              'Rekod transaksi telus',
            ],
          },
          {
            icon: '',
            title: 'Pengoptimuman Kad',
            description: 'Analisis corak perbelanjaan dan cadangan strategi',
            benefits: [
              'Analisis perbelanjaan bulanan',
              'Cadangan penggunaan kad optimum',
              'Rundingan pengecualian yuran tahunan',
              'Peringatan penebusan ganjaran',
            ],
          },
          {
            icon: '',
            title: 'Perundingan Pengurusan Hutang',
            description: 'Analisis DSR dan cadangan penyatuan hutang',
            benefits: [
              'Pengiraan DSR percuma',
              'Pelan penyatuan hutang',
              'Strategi peningkatan skor kredit',
              'Penyelesaian kadar faedah lebih rendah',
            ],
          },
        ],
      },
      caseStudies: {
        tag: 'Kisah Kejayaan',
        title: 'Hasil Pelanggan Sebenar',
        subtitle: 'Lihat bagaimana pelanggan kami menjimatkan ribuan setiap tahun',
        before: 'Sebelum',
        after: 'Selepas',
        cases: [
          {
            client: 'Encik Wang',
            type: 'Individu | 4 Kad',
            before: 'Bayaran bulanan RM 2,500 | Pengurusan keliru | Sering lewat bayar',
            after: 'Pinjaman disatukan + Pengurusan pintar | Bayaran automatik | Ganjaran optimum',
            savings: 'Jimat RM 3,200',
            period: 'Dalam 12 bulan',
          },
          {
            client: 'Puan Li',
            type: 'Profesional | Perbelanjaan Tinggi',
            before: 'Perbelanjaan bulanan RM 8,000 | Guna kad yang salah | Mata terbuang',
            after: 'Strategi kad optimum | Ganjaran maksimum | Yuran tahunan dikecualikan',
            savings: 'Tambahan RM 5,000/tahun',
            period: 'Berterusan',
          },
          {
            client: 'Syarikat ABC',
            type: 'PKS | 10 Kad Korporat',
            before: 'Kekacauan tuntutan pekerja | Kos pentadbiran tinggi | Berbelanja lebih',
            after: 'Pengurusan berpusat | Penyesuaian automatik | Kawalan perbelanjaan',
            savings: 'Jimat RM 12,000/tahun',
            period: 'Tahun pertama',
          },
        ],
      },
      pricing: {
        tag: 'Harga Telus',
        title: 'Pelan Fleksibel untuk Setiap Keperluan',
        subtitle: 'Pilih pelan yang paling sesuai untuk anda',
        recommended: 'Paling Popular',
        plans: {
          individual: {
            label: 'Individu',
            options: [
              {
                name: 'Yuran Berjaya',
                price: 'Perkongsian 50/50',
                period: 'Bayar hanya apabila anda jimat',
                features: [
                  'Tiada yuran pendahuluan',
                  '50% daripada semua penjimatan/faedah',
                  'Pengecualian yuran tahunan',
                  'Pengoptimuman pulangan tunai & ganjaran',
                  'Penjimatan faedah',
                  'Elakkan yuran lewat',
                  'Bil suku tahunan',
                ],
                recommended: true,
                cta: { text: 'Mulakan Sekarang', link: 'https://wa.me/60123456789' },
              },
              {
                name: 'Langganan Bulanan',
                price: 'RM 99/bulan',
                period: 'Sehingga 3 kad',
                features: [
                  'Tambahan RM 30/kad',
                  'Perkhidmatan peringatan bayaran',
                  'Pengoptimuman kad',
                  'Analisis perbelanjaan bulanan',
                  'Rundingan yuran tahunan',
                  'Bayaran wakil: +RM 50/bulan',
                ],
                cta: { text: 'Langgan Sekarang', link: 'https://portal.infinitegz.com/card-management' },
              },
              {
                name: 'PERCUMA untuk Pelanggan Pinjaman',
                price: 'RM 0',
                period: '12 bulan pertama',
                features: [
                  'Semua perkhidmatan standard termasuk',
                  'Mesti ada pinjaman aktif dengan kami',
                  'Diskaun 50% selepas 12 bulan',
                  'Perkhidmatan peringatan bayaran penuh',
                  'Pengoptimuman kad asas',
                ],
                cta: { text: 'Semak Kelayakan', link: '/creditpilot' },
              },
            ],
          },
          corporate: {
            label: 'Korporat',
            options: [
              {
                name: 'Tahap 1',
                price: 'RM 299/bulan',
                period: 'RM 0-20K perbelanjaan bulanan',
                features: [
                  'Sehingga 10 kad korporat',
                  'Pengurusan berpusat',
                  'Penyesuaian bulanan',
                  'Analitik perbelanjaan asas',
                  'Penjejakan kad pekerja',
                ],
                cta: { text: 'Hubungi Jualan', link: 'https://wa.me/60123456789' },
              },
              {
                name: 'Tahap 2',
                price: 'RM 599/bulan',
                period: 'RM 20-50K perbelanjaan bulanan',
                features: [
                  'Sehingga 25 kad korporat',
                  'Analitik lanjutan',
                  'Pengurus akaun khusus',
                  'Had perbelanjaan tersuai',
                  'Kelulusan automatik',
                  'Semakan perniagaan suku tahunan',
                ],
                recommended: true,
                cta: { text: 'Hubungi Jualan', link: 'https://wa.me/60123456789' },
              },
              {
                name: 'Tahap 3',
                price: 'RM 999/bulan',
                period: 'RM 50-100K perbelanjaan bulanan',
                features: [
                  'Kad korporat tanpa had',
                  'Sokongan premium',
                  'Integrasi tersuai',
                  'Pengesanan penipuan lanjutan',
                  'Pengurusan pelbagai entiti',
                  'Pelaporan label putih',
                ],
                cta: { text: 'Hubungi Jualan', link: 'https://wa.me/60123456789' },
              },
            ],
          },
          loan: {
            label: 'Pelanggan Pinjaman',
            options: [
              {
                name: 'Percuma',
                price: 'PERCUMA',
                period: '12 bulan pertama',
                features: [
                  'Semua perkhidmatan individu termasuk',
                  'Sokongan keutamaan',
                  'Perundingan hutang percuma',
                  'Diskaun 50% selepas 12 bulan',
                  'Faedah eksklusif pelanggan pinjaman',
                ],
                recommended: true,
                cta: { text: 'Ketahui Lebih Lanjut', link: '/advisory' },
              },
            ],
          },
        },
      },
      socialProof: {
        stats: [
          { value: '500+', label: 'Pelanggan Gembira' },
          { value: '1,000+', label: 'Kad Diuruskan' },
          { value: 'RM 600K+', label: 'Jumlah Penjimatan' },
          { value: '98%', label: 'Kadar Kepuasan' },
        ],
        badges: [
          'Patuh PDPA 2010',
          'Penasihat Kewangan Berlesen',
          'Diluluskan Bank Negara',
          'Diperakui ISO 27001',
        ],
      },
      faq: {
        title: 'Soalan Lazim',
        subtitle: 'Segala yang anda perlu tahu',
        questions: [
          {
            question: 'Bagaimana anda mengenakan bayaran?',
            answer: 'Kami menawarkan 3 model harga: (1) Yuran berjaya: 50% daripada penjimatan yang dijana, tiada yuran pendahuluan. (2) Langganan bulanan: RM 99/bulan untuk sehingga 3 kad. (3) PERCUMA untuk pelanggan pinjaman untuk 12 bulan pertama. Pilih yang paling sesuai untuk anda.',
          },
          {
            question: 'Adakah perkhidmatan bayaran wakil selamat?',
            answer: 'Sudah tentu. Kami hanya mendebit dari akaun yang anda tetapkan dengan kebenaran anda. Semua transaksi direkodkan dan anda menerima laporan penyesuaian bulanan. Kami mengekalkan insurans indemniti profesional RM 1M.',
          },
          {
            question: 'Bagaimana cara membatalkan perkhidmatan?',
            answer: 'Anda boleh membatalkan pada bila-bila masa dengan notis bertulis 30 hari. Untuk pelan langganan, anda mendapat bayaran balik pro-rata. Untuk pelan yuran berjaya dalam tempoh komitmen, yuran penamatan awal dikenakan (50% yuran baki atau RM 500, mana yang lebih rendah).',
          },
          {
            question: 'Adakah anda menyokong semua bank di Malaysia?',
            answer: 'Ya, kami menyokong semua bank utama termasuk Maybank, CIMB, Public Bank, Hong Leong, RHB, AmBank, dan bank digital. Kami boleh menguruskan kad daripada mana-mana institusi kewangan berlesen di Malaysia.',
          },
          {
            question: 'Adakah anda akan melihat nombor kad kredit saya?',
            answer: 'Tidak. Kami hanya memerlukan penyata kad kredit anda (yang menunjukkan 4 digit terakhir). Untuk perkhidmatan bayaran wakil, bayaran dibuat terus dari akaun bank anda kepada pengeluar kad kredit. Kami tidak pernah menyimpan nombor kad penuh.',
          },
          {
            question: 'Bagaimana jika saya terlepas bayaran walaupun dengan perkhidmatan anda?',
            answer: 'Kami menyediakan peringatan 3 peringkat dan perkhidmatan terbaik. Walau bagaimanapun, jika anda tidak mengekalkan dana yang mencukupi dalam akaun anda, kami tidak boleh bertanggungjawab. Liabiliti kami dihadkan kepada RM 10,000 atau yuran 12 bulan, mana yang lebih rendah.',
          },
          {
            question: 'Bolehkah saya gunakan ini untuk kad syarikat?',
            answer: 'Boleh! Kami mempunyai pelan korporat khusus bermula dari RM 299/bulan. Sempurna untuk PKS yang menguruskan pelbagai kad pekerja. Termasuk pengurusan berpusat, penyesuaian, dan analitik perbelanjaan.',
          },
        ],
      },
      finalCta: {
        title: 'Bersedia untuk Mula Menjimat?',
        subtitle: 'Sertai 500+ pelanggan yang berpuas hati dan mula memaksimumkan faedah kad kredit anda hari ini',
        cta1: 'Perundingan Percuma WhatsApp',
        cta2: 'Tempah Temu Janji',
        relatedTitle: 'Perkhidmatan Berkaitan',
        relatedServices: [
          { name: 'CreditPilot (Padanan Pinjaman Pintar)', link: '/creditpilot' },
          { name: 'Nasihat Pinjaman', link: '/advisory' },
          { name: 'Pengoptimuman Kewangan', link: '/solutions' },
        ],
      },
    },
  },
};
