import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'
import nine from '../assets/svg/projects/nine.svg'
import ten from '../assets/svg/projects/ten.svg'

export const projectsData = [
  {
    id: 'smart-po',
    title: 'Smart PO — BRAC Microfinance Enterprise App',
    shortDesc: 'Nationwide enterprise Android platform enabling thousands of field Programme Organizers to collect microloans and disburse funds with offline-first synchronization.',
    tags: ['Android', 'Kotlin', 'Java', 'Room SQLite', 'MVVM', 'Offline-First'],
    featured: true,
    impact: 'Powers daily transactions across hundreds of rural & urban branches',
    image: five,
    demo: 'https://www.bracits.com/product/smartpo',
    code: '', // Enterprise proprietary
    appStore: '',
    playStore: 'https://www.bracits.com/product/smartpo',
    caseStudy: {
      overview: 'Smart PO is the operational backbone of BRAC Microfinance field operations. It replaced paper ledgers with an intelligent mobile system utilized daily by thousands of Programme Organizers across Bangladesh.',
      problem: 'Field officers operating in remote rural areas constantly faced intermittent 2G/3G connectivity, causing transaction failures, double entries, and multi-hour data synchronization delays with central mainframes.',
      constraints: 'Strict regulatory financial compliance, battery life constraints in rural areas without power, low-spec Android devices (2GB RAM), zero tolerance for lost financial ledger entries.',
      architecture: 'Clean Architecture with MVVM, Room SQLite for encrypted local caching, bidirectional conflict-free sync engine using queued background work (WorkManager), and secure tokenized REST APIs.',
      keyDecisions: [
        'Selected SQLite Room over cloud-direct sync to guarantee zero-latency field interactions even with zero cell connectivity.',
        'Engineered an incremental cryptographic hashing protocol for syncing dirty records, cutting bandwidth consumption by over 60%.',
        'Implemented rigorous local data encryption (SQLCipher) adhering to financial security guidelines.'
      ],
      hardestChallenge: 'Handling distributed transaction conflicts when multiple field officers interacted with shared group borrower accounts offline. Solved via deterministic timestamp version vectors and server reconciliation logic.',
      results: [
        'Empowered 10,000+ field officers across Bangladesh.',
        'Reduced branch ledger reconciliation time from 3 hours to under 15 minutes daily.',
        'Achieved 99.98% offline-to-online sync reliability under spotty 2G network conditions.'
      ]
    }
  },
  {
    id: 'brac-agami',
    title: 'BRAC Agami — Microfinance & Savings Platform',
    shortDesc: 'Customer-facing financial mobile app for BRAC clients to manage loans, track savings deposits, and perform self-service digital transactions on iOS and Android.',
    tags: ['Flutter', 'Dart', 'GetX', 'Biometrics', 'Fintech', 'REST APIs'],
    featured: true,
    impact: 'Published on Google Play & App Store serving digital microfinance clients',
    image: seven,
    demo: 'https://play.google.com/store/apps/details?id=net.brac.agami',
    code: '',
    appStore: 'https://apps.apple.com/app/brac-agami/id6475736735',
    playStore: 'https://play.google.com/store/apps/details?id=net.brac.agami',
    caseStudy: {
      overview: 'BRAC Agami is the customer-facing digital financial services platform allowing BRAC clients to monitor microfinance loan balances, review savings deposits, and access account services securely on iOS and Android.',
      problem: 'Clients lacked a direct mobile self-service interface to track payment installments and savings balances without physically visiting branch offices or waiting for field officers.',
      constraints: 'Strict financial regulatory compliance, multi-device cross-platform UI parity, low-bandwidth optimization, and robust hardware biometric authentication.',
      architecture: 'Flutter cross-platform application utilizing GetX reactive state management, clean data layer abstraction, biometric authentication (fingerprint/Face ID), and secure tokenized REST API gateway.',
      keyDecisions: [
        'Adopted Flutter with GetX for instant reactive state propagation and unified UI across both iOS and Android.',
        'Integrated device-level biometric authentication and token refresh cycles to secure personal financial statements.',
        'Implemented lightweight client-side payload caching to ensure fluid UX on entry-level mobile devices under spotty connectivity.'
      ],
      hardestChallenge: 'Ensuring consistent cryptographic biometric session storage across fragmented Android OEM Keystores and iOS Keychain services without credential desynchronization. Solved via unified biometric hardware wrappers with secure fallback challenges.',
      results: [
        'Published and live on both Google Play Store and Apple App Store.',
        'Reduced branch inquiry counter foot-traffic by providing direct mobile loan statement visibility.',
        'Maintained sub-second transaction statement rendering and smooth 60fps performance.'
      ]
    }
  },
  {
    id: 'smart-survey',
    title: 'Smart Survey — Enterprise Dynamic UI & Data Engine',
    shortDesc: 'Enterprise field survey and data collection platform featuring a schema-driven Dynamic UI Engine, complex validation rules, and offline-first cloud sync.',
    tags: ['Flutter', 'Dart', 'Dynamic UI', 'GetX', 'SQLite', 'Offline-First'],
    featured: true,
    impact: 'Dynamic schema engine powering nationwide socio-economic field research',
    image: eight,
    demo: 'https://www.bracits.com',
    code: '',
    appStore: '',
    playStore: '',
    caseStudy: {
      overview: 'Smart Survey is an enterprise mobile platform built for BRAC field enumerators and researchers to conduct extensive socio-economic assessments and demographic evaluations with zero network reliance.',
      problem: 'Survey formats and conditional logic frequently changed between campaigns, requiring constant native app releases and risking data loss during remote village enumerations.',
      constraints: 'Support for deeply nested branching logic, multi-page validation constraints, image attachments, and 100% offline survey completions.',
      architecture: 'Dynamic JSON schema rendering engine in Flutter with GetX, local SQLite relational schema for draft persistence, and background sync worker with differential data compression.',
      keyDecisions: [
        'Designed a declarative Dynamic UI Engine that interprets remote JSON schemas into native Flutter form widgets without requiring new app releases.',
        'Engineered transactional SQLite state snapshots to prevent data loss if the device powers down mid-survey.',
        'Implemented compressed image batching with client-side EXIF stripping before background queue sync.'
      ],
      hardestChallenge: 'Evaluating deeply nested conditional visibility rules and cross-field mathematical validations in real time without lagging the UI thread during multi-hundred question surveys. Solved by offloading validation graph resolution to background isolates.',
      results: [
        'Eliminated app store redeployment cycles for new survey questionnaires through schema-driven updates.',
        'Guaranteed zero survey responses lost during nationwide offline data collection campaigns.',
        'Processed hundreds of thousands of structured survey responses seamlessly into central data warehouses.'
      ]
    }
  },
  {
    id: 'royal-touch',
    title: 'Royal Touch — Capital Market Trading Platform',
    shortDesc: 'Real-time stock trading and portfolio analysis mobile app for stock investors with live tickers, order execution, and portfolio analytics.',
    tags: ['Flutter', 'Dart', 'C#', 'WebSockets', 'BLoC Pattern'],
    featured: true,
    impact: 'Live order routing & stock tracking with sub-second price updates',
    image: one,
    demo: 'https://play.google.com/store/apps/details?id=com.royalcapitalbd.apps.royalcapital',
    code: '',
    appStore: 'https://apps.apple.com/us/app/royal-touch/id1612836493',
    playStore: 'https://play.google.com/store/apps/details?id=com.royalcapitalbd.apps.royalcapital',
    caseStudy: {
      overview: 'Royal Touch is a premier stock market application developed for Royal Capital Ltd., allowing retail and institutional investors to execute trades and analyze real-time market data on iOS and Android.',
      problem: 'Investors suffered from delayed market data feeds and unstable sessions during peak market opening hours on high-volatility trading days.',
      constraints: 'Sub-second real-time streaming requirement for Dhaka Stock Exchange (DSE) feeds, dual platform parity (iOS & Android) with a single codebase, strict biometric security.',
      architecture: 'Flutter cross-platform application utilizing BLoC state management, WebSocket multiplexing for real-time order book and candle charts, and C# ASP.NET backend integration.',
      keyDecisions: [
        'Adopted Flutter with BLoC to enforce predictable reactive state transitions during high-frequency market tick bursts.',
        'Created custom lightweight canvas-based chart renderers to prevent UI jank during rapid candlestick updates.',
        'Implemented biometrics and device fingerprinting for fast, secure two-factor trade confirmation.'
      ],
      hardestChallenge: 'Preventing memory leaks and UI thread blocking when processing hundreds of market price updates per second during the 10:00 AM market opening rush. Handled by batching tick updates into 100ms render frames using RxDart throttle queues.',
      results: [
        '4.5+ star rating on Google Play Store and Apple App Store.',
        'Maintains steady 60fps scrolling and chart interactions across mid-range mobile devices.',
        'Zero reported order routing desynchronizations during major volatility events.'
      ]
    }
  },
  {
    id: 'smart-bm',
    title: 'Smart BM — Microfinance Branch Management Suite',
    shortDesc: 'Executive tablet and mobile application for Branch Managers to monitor portfolio at risk (PAR), authorize disbursement overrides, and audit field records.',
    tags: ['Android', 'Kotlin', 'Coroutines', 'Jetpack', 'Data Visualization'],
    featured: true,
    impact: 'Executive decision cockpit for branch risk management and daily settlement',
    image: six,
    demo: 'https://www.bracits.com/product/smartpo',
    code: '',
    appStore: '',
    playStore: 'https://www.bracits.com/product/smartpo',
    caseStudy: {
      overview: 'Smart BM acts as the nerve center for Branch Managers at BRAC. It aggregates microfinance operations from up to 20 field officers per branch, providing executive dashboards, risk alerts, and emergency override capabilities.',
      problem: 'Branch managers lacked real-time visibility into daily collection deficits until end-of-day cash reconciliation, delaying risk intervention and delinquency detection.',
      constraints: 'Heavy data volume aggregation across thousands of borrower accounts on mobile devices with instant chart response.',
      architecture: 'Android Kotlin application featuring Kotlin Flow / Coroutines for asynchronous data pipelines, MPAndroidChart for visual metrics, and role-based biometric authorization.',
      keyDecisions: [
        'Engineered an on-device caching matrix that pre-computes delinquency indicators during branch check-in.',
        'Implemented granular role-based approvals with cryptographic audit logs for disbursement verifications.'
      ],
      hardestChallenge: 'Rendering complex financial breakdown trees with over 15,000 sub-entries without triggering Android UI thread ANRs (Application Not Responding). Solved via custom paginated RecyclerView diffing and off-thread coroutine computations.',
      results: [
        'Deployed across nationwide BRAC IT microfinance branch networks.',
        'Cut overdue borrower risk detection latency from 24+ hours to real-time.',
        'Streamlined branch end-of-day audit cycle.'
      ]
    }
  },
  {
    id: 'bcb-fitness',
    title: 'BCB Player Onboarding & Fitness Management Suite',
    shortDesc: 'High-performance athletic tracking and clinical management suite for Bangladesh Cricket Board national team players, physicians, and coaching staff.',
    tags: ['Android', 'Kotlin', 'Flutter', 'RBAC', 'Health Analytics', 'REST APIs'],
    featured: true,
    impact: 'Data-driven performance monitoring and physiological tracking for national cricketers',
    image: nine,
    demo: 'https://www.tigercricket.com.bd',
    code: '',
    appStore: '',
    playStore: '',
    caseStudy: {
      overview: 'Custom athlete management and clinical monitoring system built for the Bangladesh Cricket Board (BCB) to track national player fitness routines, rehab protocols, and medical clearances.',
      problem: 'Player fitness reports, physiological assessments, and medical injury logs were siloed in disconnected spreadsheets, delaying coaching staff decisions ahead of international series.',
      constraints: 'Strict health data privacy compliance, Role-Based Access Control (RBAC) separating player, physio, and coach views, and rapid real-time wellness check-ins.',
      architecture: 'Modular mobile architecture with strict RBAC token validation, local encrypted metrics caching, dynamic medical assessment forms, and analytics visualization dashboards.',
      keyDecisions: [
        'Implemented granular role-based views ensuring sensitive medical disclosures are restricted strictly to authorized team physicians.',
        'Designed high-contrast, streamlined daily wellness entry forms allowing athletes to record recovery metrics in under 30 seconds.',
        'Integrated automated threshold notifications for physiotherapy staff when player workload spikes increase injury risk.'
      ],
      hardestChallenge: 'Securing medical privacy and HIPAA-equivalent confidentiality standards on athlete personal devices while maintaining rapid offline data entry during overseas team tours.',
      results: [
        'Adopted across national cricket teams, training academies, and medical squads.',
        'Unified injury tracking and rehab progression into a single transparent pipeline for physiotherapists.',
        'Shortened medical evaluation turnaround times before squad selections.'
      ]
    }
  },
  {
    id: 'calculus-fms',
    title: 'Calculus & Enterprise Fund Management Platform',
    shortDesc: 'Full-stack enterprise project governance and fund monitoring platform with Keycloak OAuth, automated Jira worklog synchronization, and budget allocation analytics.',
    tags: ['Angular', 'Spring Boot', 'Keycloak OAuth', 'REST APIs', 'Jira API', 'Full Stack'],
    featured: true,
    impact: 'Centralized project governance, fund allocation, and automated billing audits',
    image: ten,
    demo: 'https://www.bracits.com',
    code: '',
    appStore: '',
    playStore: '',
    caseStudy: {
      overview: 'Calculus is an internal full-stack enterprise platform managing project allocations, fund distributions, operational budgets, and engineering productivity metrics at BRAC IT Services.',
      problem: 'Discrepancies between project budget billing and actual developer Jira worklogs created month-end accounting delays and resource utilization blind spots.',
      constraints: 'Enterprise Single Sign-On (Keycloak OAuth/RBAC), high security audit requirements, and continuous synchronization with external Atlassian Jira APIs.',
      architecture: 'Angular enterprise frontend with modular routing, Spring Boot / REST API backend, Keycloak identity management for RBAC, and background scheduled sync workers.',
      keyDecisions: [
        'Integrated Keycloak OAuth with token-based RBAC to secure financial allocations across different project hierarchies and department leads.',
        'Engineered automated scheduled cron jobs to sync Jira worklog summaries and project milestones into relational reporting tables.',
        'Built responsive analytical dashboards in Angular for leadership to review real-time budget burn rates.'
      ],
      hardestChallenge: 'Managing rate limits and payload volumes when reconciling large volumes of distributed Jira worklogs across hundreds of enterprise projects simultaneously. Solved with batch chunking and exponential backoff retry workers.',
      results: [
        'Automated daily reconciliation of engineering worklogs against project budget caps.',
        'Replaced manual spreadsheet project tracking with an audited, single source of truth.',
        'Accelerated month-end financial audits and client project billing cycles.'
      ]
    }
  },
  {
    id: 'royalty-platform',
    title: 'Royalty — Rewards, Deals & Merchant Gateway',
    shortDesc: 'Consumer lifestyle loyalty application and merchant validation suite featuring QR code redemption, payment gateway integrations, and merchant analytics.',
    tags: ['Java', 'Kotlin', 'Material Design', 'REST APIs', 'Payment Gateways'],
    featured: true,
    impact: '100,000+ downloads with nationwide partner merchant network',
    image: two,
    demo: 'https://play.google.com/store/apps/details?id=com.royalty.bd',
    code: 'https://github.com/saifsiddiquee',
    appStore: '',
    playStore: 'https://play.google.com/store/apps/details?id=com.royalty.bd',
    caseStudy: {
      overview: 'Royalty is Bangladesh’s first dedicated privilege program app, connecting consumers with exclusive discounts across restaurants, retail, and lifestyle brands, coupled with a dedicated merchant redemption app.',
      problem: 'Merchants struggled with slow verification and fraud at point-of-sale, while consumers required instant dynamic coupon generation that worked even with unstable network connections.',
      constraints: 'Fast POS validation (< 3 seconds), zero coupon double-spending, integrated bKash / SSLCommerz payment gateways.',
      architecture: 'Native Android architecture utilizing Retrofit, custom QR code generator with time-based OTP tokens, and event-driven payment confirmation webhooks.',
      keyDecisions: [
        'Created a dynamic QR token generator that rotates every 60 seconds to prevent coupon screenshot sharing fraud.',
        'Engineered a separate Merchant app (Royalty Merchant) with instant acoustic feedback on successful redemption.'
      ],
      hardestChallenge: 'Handling seamless payment gateway return redirects across varying Android OEM browser implementations without dropping checkout session state.',
      results: [
        'Over 100K+ downloads with active daily user retention.',
        'Over 200+ partner merchants onboarded and processing live validations daily.',
        'Eliminated discount fraud through dynamic rotating QR verification.'
      ]
    }
  }
]