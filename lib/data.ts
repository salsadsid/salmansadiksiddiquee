export interface Metric {
  value: string;
  label: string;
  detail?: string;
}

export interface CaseStudySection {
  heading: string;
  body?: string;
  bullets?: string[];
}

export interface Decision {
  title: string;
  body: string;
}

export interface CaseStudy {
  slug: string;
  order: string;
  name: string;
  tagline: string;
  oneLiner: string;
  role: string;
  company: string;
  period: string;
  stack: string[];
  cardMetrics: string[];
  headlineMetrics: Metric[];
  attribution?: string;
  context: string[];
  sections: CaseStudySection[];
  decisions: Decision[];
  outcome: string[];
}

export interface Project {
  title: string;
  note?: string;
  description: string;
  stack: string[];
  live?: string;
  github?: string;
  writeup?: string;
}

export interface Post {
  title: string;
  description: string;
  date: string;
  url: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  summary: string[];
  caseStudySlug?: string;
}

export const personalInfo = {
  name: "Salman Sadik Siddiquee",
  role: "Full-Stack Product Engineer",
  positioning: "AI products in production",
  email: "salman.dnj@gmail.com",
  github: "salsadsid",
  linkedin: "salsadsid",
  location: "Dhaka, Bangladesh",
  timezone: "UTC+6",
  resume: "/Salman_Siddiquee_FullStack.pdf",
  siteRepo: "https://github.com/salsadsid/salmansadiksiddiquee",
};

// Hero proof panel + impact strip. Every number is verifiable production data.
export const metrics: Metric[] = [
  {
    value: "1M+",
    label: "articles generated",
    detail: "2B+ words through generation flows I built, sustained at 2,000+ a day",
  },
  {
    value: "100k+",
    label: "registered users",
    detail: "on the AI content platform where I was top frontend contributor",
  },
  {
    value: "~$390K",
    label: "payments processed",
    detail: "checkout & billing I implemented: 11,000+ transactions, 5 gateways",
  },
  {
    value: "1,000+",
    label: "students served",
    detail: "on a school platform I designed, built, and operate solo",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "affpilot",
    order: "01",
    name: "Affpilot",
    tagline: "The generation and publishing flows behind 1M+ AI-written articles.",
    oneLiner:
      "AI auto-blogging SaaS. I was top contributor to the React architecture that carried it from early stage to 100k+ users.",
    role: "Frontend React Developer",
    company: "Affpilot",
    period: "Oct 2023 - Sep 2025",
    stack: [
      "React 18",
      "Redux Toolkit",
      "RTK Query",
      "Material UI",
      "Tailwind CSS",
      "Next.js 14",
      "GraphQL",
    ],
    cardMetrics: ["1M+ articles", "100k+ users", "~$390K processed"],
    headlineMetrics: [
      { value: "1M+", label: "articles generated", detail: "2B+ words, sustained 2,000+/day" },
      { value: "100k+", label: "registered users" },
      { value: "~$390K", label: "processed", detail: "11,000+ transactions" },
      { value: "290", label: "reusable components", detail: "92 pages · 138 endpoints" },
    ],
    attribution:
      "Top contributor to the platform frontend: ~920 of 1,860 commits. Founding frontend engineer of Flippium: 79% of commits.",
    context: [
      "Affpilot is an AI auto-blogging SaaS: users pick keywords, configure tone and language, and the platform researches, writes, and publishes SEO articles to their sites. When I joined it was an early-stage product; over the next two years it grew to 100k+ registered users and more than a million generated articles.",
      "I built and maintained the React component architecture (290 reusable components across 92 routed pages, integrating 138 REST endpoints) as top contributor with roughly 920 of the codebase's 1,860 commits.",
    ],
    sections: [
      {
        heading: "Generation workflows",
        body: "The flows that produced the platform's core output.",
        bullets: [
          "Form-driven interfaces for 16 AI article generators with tone, point-of-view, and 20-language controls.",
          "Bulk-generation tables with per-account batch validation caps, live success/failure status, and failed-keyword recovery.",
          "These workflows produced 1M+ articles (2B+ words), sustaining 2,000+ articles a day at peak.",
        ],
      },
      {
        heading: "Write-to-publish pipeline",
        body: "From editor to a live post on the user's own site.",
        bullets: [
          "Tiptap rich-text editor connected through a central dialog registry to WordPress, Blogger, Medium, and Shopify publishing.",
          "API-key-secured webhook channel with site verification, category and author mapping, draft/publish states, and post scheduling.",
        ],
      },
      {
        heading: "Checkout & billing",
        body: "The revenue path, end to end on the frontend.",
        bullets: [
          "Mobile-first pricing tables wired to Stripe, SSLCommerz, PayPal, and bKash/Nagad, with a word-credit ledger and coupon / lifetime-deal redemption.",
          "Processed ~$390K across 11,000+ transactions from 4,200+ paying customers.",
          "Built the redemption flow for an 8-tier AppSumo launch with 570+ redemptions.",
        ],
      },
      {
        heading: "SEO toolkit",
        bullets: [
          "Country-aware keyword explorer, keyword clustering from CSV or pasted lists, and sitemap title extraction, feeding research directly into bulk generation.",
        ],
      },
      {
        heading: "Flippium: founding frontend engineer",
        body: "Affpilot's website-flipping marketplace, built as a second product (Next.js 14 App Router, GraphQL, shadcn/Radix).",
        bullets: [
          "Multi-step listing wizard, marketplace filtering, and offer negotiation.",
          "Buyer, seller, and moderator messaging with optimistic updates, infinite scroll, and image/emoji support.",
          "Facilitated 100+ site sales at up to $3K each; I authored 79% of commits.",
        ],
      },
      {
        heading: "Adjacent products, built solo",
        bullets: [
          "A React 19 + TypeScript billing back-office: CRUD modules, Zod-validated forms, URL-synced server-side tables, and a CLI feature scaffolder.",
          "A 13-tool free AI-writing microsite rendering server-defined dynamic forms, used as a signup funnel.",
        ],
      },
    ],
    decisions: [
      {
        title: "A central dialog registry instead of scattered modals",
        body: "Publishing to four platforms from anywhere in the app meant dozens of modal flows. A single registry keyed by dialog ID kept them consistent and lazily loaded: one pattern to maintain instead of thirty ad-hoc ones.",
      },
      {
        title: "Validation caps before bulk generation",
        body: "A malformed keyword list could burn a user's entire word-credit balance in one bulk job. Per-account batch validation with failed-keyword recovery made bad rows retryable instead of billed-and-lost.",
      },
      {
        title: "RTK Query as the single data layer",
        body: "138 endpoints with tag-based cache invalidation instead of hand-rolled fetching, so generation status, credit balance, and publishing state stay consistent across 92 pages without manual refetch choreography.",
      },
    ],
    outcome: [
      "The generation and publishing flows I built carried the platform to 1M+ articles for 100k+ registered users.",
      "Billing I implemented processed ~$390K across 11,000+ transactions.",
      "Flippium shipped and closed 100+ site sales at up to $3K each.",
    ],
  },
  {
    slug: "device-platform",
    order: "02",
    name: "Device-Lifecycle Platform",
    tagline:
      "One auditable system replacing spreadsheet-and-email operations for a German medical-device manufacturer.",
    oneLiner:
      "Device registry, warranty automation, AI support triage, and a RAG chatbot for a German neurofeedback manufacturer. I led development as top contributor.",
    role: "Full Stack Developer",
    company: "AlgoSoft Technologies Limited",
    period: "Sep 2025 - Present",
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Next.js",
      "TypeScript",
      "Socket.io",
      "QStash",
      "Firebase Functions",
      "OpenAI",
      "Upstash Vector",
    ],
    cardMetrics: ["445 devices", "417 clinics", "3 portals"],
    headlineMetrics: [
      { value: "445", label: "devices tracked" },
      { value: "417", label: "clinics" },
      { value: "3", label: "portals", detail: "admin · customer · reseller" },
      { value: "1,100+", label: "commits", detail: "top contributor" },
    ],
    attribution:
      "Team project at AlgoSoft; I led development as top contributor (1,100+ commits) across backend and frontend. The RAG chatbot was co-built.",
    context: [
      "A German neurofeedback medical-device manufacturer ran its fleet on spreadsheets and email: device registrations, warranty renewals, support requests, repair logistics. AlgoSoft builds their device-lifecycle platform; I led its development as top contributor with 1,100+ commits.",
      "The platform covers device registry, warranty administration, support ticketing, and EU-MDR-oriented quality management for 445 devices across 417 clinics, through admin, customer, and white-label reseller portals.",
    ],
    sections: [
      {
        heading: "Warranty-renewal pipeline",
        bullets: [
          "QStash-scheduled automation sends four escalating EN/DE-localized reminder emails from 90 days down to 1 day before expiry.",
          "Deduplicated by a unique-indexed reminder log, with a full delivery audit trail.",
        ],
      },
      {
        heading: "AI support-inbox triage",
        bullets: [
          "A background IMAP poller hands each inbound email to OpenAI, which parses it into a structured ticket: urgency, problem type, and device serial automatically matched against the registry.",
          "AI-suggested agent assignment routes tickets to the right person before anyone reads the inbox.",
        ],
      },
      {
        heading: "RAG support chatbot (co-built)",
        bullets: [
          "Retrieval over Upstash Vector with BGE-M3 embeddings and cross-encoder reranking.",
          "SSE-streaming widget with token-by-token output, clickable source citations, and graceful loading, error, and retry states.",
        ],
      },
      {
        heading: "Cross-system sync",
        bullets: [
          "A reseller service mirrors device movements from two independent deployments into the central registry.",
          "A Shopify-to-platform event broker (Firebase Functions, Firestore, Cloud Tasks) converts paid orders into customer records, license issuance, and provisioning tasks. Every event is HMAC-verified, idempotent, and auto-retried.",
        ],
      },
      {
        heading: "Real-time portals",
        bullets: [
          "Socket.io across all three portals: live device-movement updates, support chat, and server-cache synchronization, so changes appear everywhere without a refresh.",
          "Support-ticket intake rebuilt as a five-step wizard with timezone- and holiday-aware slot scheduling and embedded real-time chat.",
        ],
      },
      {
        heading: "Quality management & training LMS",
        bullets: [
          "EU-MDR-oriented QMS: multi-stage document approval, version control, electronic signatures, and automated PDF generation for compliance documentation.",
          "In-house training LMS (Next.js 15, React 19): an AI quiz generator using structured-output GPT-4o-mini (multiple-choice and matching questions with explanations), plus enrollment and certificate flows with public certificate verification.",
        ],
      },
    ],
    decisions: [
      {
        title: "Idempotency before speed on the Shopify broker",
        body: "Payment webhooks arrive at-least-once. Every event is processed idempotently with automatic retries, so a replayed webhook can never double-issue a license or duplicate a customer.",
      },
      {
        title: "A unique index as the dedup guard, not application logic",
        body: "Cron restarts and overlapping schedules can re-fire reminders. A unique-indexed reminder log makes double-sends structurally impossible at the database layer instead of best-effort in code.",
      },
      {
        title: "SSE over WebSockets for the chatbot",
        body: "A one-directional token stream doesn't need a socket. Server-sent events ride plain HTTP, reconnect for free, and keep the streaming widget simple.",
      },
    ],
    outcome: [
      "Spreadsheet- and email-based workflows replaced with one auditable system spanning three portals.",
      "445 devices across 417 clinics tracked through registry, warranty, support, and quality management.",
      "Support intake triaged by AI before a human touches it; documentation answerable through a cited, streaming chatbot.",
    ],
  },
  {
    slug: "school-platform",
    order: "03",
    name: "School Management Platform",
    tagline: "Designed, built, and operated solo. A 1,000-student school runs on it daily.",
    oneLiner:
      "The complete system behind a 1,000-student school: biometric attendance, results, fees, Bengali PDFs, and guardian SMS. Designed, built, and operated by one engineer.",
    role: "Software Developer (Contract)",
    company: "H.A.K Academy",
    period: "2025 - Present · contract",
    stack: [
      "React 18",
      "Vite",
      "RTK Query",
      "Node.js",
      "Express",
      "MongoDB",
      "DigitalOcean",
      "ZKTeco BioTime",
    ],
    cardMetrics: ["1,000+ students", "2-3k punches/day", "7 user roles"],
    headlineMetrics: [
      { value: "1,000+", label: "students", detail: "across 12 grade levels" },
      { value: "2-3k", label: "biometric punches/day" },
      { value: "7", label: "user roles", detail: "35 role-gated pages" },
      { value: "137", label: "REST endpoints", detail: "23 data models" },
    ],
    attribution: "Solo project: every model, endpoint, page, and deployment is mine, and I operate it in production.",
    context: [
      "A private school in Gazipur ran admissions, attendance, fees, exams, and guardian communication on paper. I designed and built their entire platform solo, and still operate it: 23 data models, ~137 REST endpoints, JWT auth with per-route role middleware for seven user roles, running on Vercel and a DigitalOcean VPS under a PM2 cluster.",
    ],
    sections: [
      {
        heading: "Biometric attendance pipeline",
        bullets: [
          "ZKTeco fingerprint devices polled through an adaptive, holiday-aware pipeline.",
          "Every punch classified as entry, exit, or absent against per-class schedule windows; guardians receive an SMS within seconds.",
          "Handles 2,000-3,000 punches a day with cron reconciliation, health monitoring, and automatic recovery.",
        ],
      },
      {
        heading: "Academic core",
        bullets: [
          "Exam results with auto-computed GPA and merit positions, behind a draft-to-publish workflow.",
          "Student promotion with per-step rollback and a full audit trail.",
          "CSV import/export for bulk exam results and admissions data.",
        ],
      },
      {
        heading: "Bengali-typography PDFs",
        bullets: [
          "Client-side PDF generation with embedded Bengali fonts (@react-pdf/renderer): progress cards, admit cards, seat plans, and printable admission applications, all self-service instead of office queues.",
        ],
      },
      {
        heading: "Guardian messaging",
        bullets: [
          "Rate-limited SMS service with retry/backoff, per-student deduplication, per-message delivery status, and an emergency kill switch.",
        ],
      },
      {
        heading: "Operational views",
        bullets: [
          "35 role-gated dashboard pages across seven roles, on a tag-invalidated RTK Query data layer with offline-persisted sessions.",
          "A full-screen “Now Teaching” board auto-refreshing every 30 seconds under a locked-down display account, plus attendance dashboards with absentee lists.",
        ],
      },
    ],
    decisions: [
      {
        title: "An SMS kill switch as a first-class feature",
        body: "A bug in an SMS loop is a real-money incident and a thousand angry guardians. The global kill switch, per-student deduplication, and rate limiting were built before scale, not after the first incident.",
      },
      {
        title: "Holiday-aware adaptive polling",
        body: "School calendars are irregular. The poller adapts its frequency to schedule windows instead of hammering the device around the clock, and cron reconciliation backfills anything missed.",
      },
      {
        title: "Solo-operable by design",
        body: "One engineer runs this part-time. Health monitoring, automatic recovery, and audit trails aren't nice-to-haves; they're what makes that possible.",
      },
    ],
    outcome: [
      "The school runs on the platform daily. Attendance, results, fees, admissions, and printing are self-service.",
      "Guardians are notified of attendance within seconds of a fingerprint punch.",
      "Operated in production by one part-time engineer, by design.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "DSA Visualizer",
    note: "19★ open source",
    description:
      "Algorithm visualizer with a play/pause/step/scrub engine, synchronized pseudocode highlighting, live pointer and operation-count tracking, and C++/Python/JavaScript/TypeScript code panels.",
    stack: ["Next.js 16", "Tailwind CSS 4"],
    live: "https://visualizer-gold.vercel.app",
    github: "https://github.com/salsadsid/visualizer",
    writeup:
      "https://dev.to/salsadsid/i-built-a-sorting-visualizer-you-can-actually-step-through-bars-pointers-pseudocode-confetti-1bbb",
  },
  {
    title: "Brain Booming",
    note: "Live AI tool suite",
    description:
      "11 AI writing & utility tools: Gemini structured prompts, Tesseract.js OCR, Auth.js v5 (Google OAuth + magic links), per-user activity dashboards, Sentry monitoring, Vitest tests.",
    stack: ["Next.js 15", "React 19", "Gemini", "MongoDB"],
    live: "https://brainboomingai.vercel.app",
    github: "https://github.com/salsadsid/brainboomingai",
  },
  {
    title: "ParcelOne",
    note: "Real-time logistics",
    description:
      "Parcel-delivery platform with live courier tracking (Socket.io location events synchronized into RTK Query caches) and role-based dashboards for merchants, couriers, and admins.",
    stack: ["React", "RTK Query", "Socket.io", "Node.js"],
    live: "https://parcelone-frontend.vercel.app",
    github: "https://github.com/salsadsid/parcelone-frontend",
  },
];

export const posts: Post[] = [
  {
    title:
      "I built a Sorting Visualizer you can actually step through (bars, pointers, pseudocode & confetti)",
    description:
      "How the step engine behind my DSA Visualizer works: generator-produced steps, synced pseudocode highlighting, and live pointer tracking.",
    date: "Jun 2026",
    url: "https://dev.to/salsadsid/i-built-a-sorting-visualizer-you-can-actually-step-through-bars-pointers-pseudocode-confetti-1bbb",
  },
  {
    title: "Zustand: A Lightweight State Management Library (No Boilerplate Needed)",
    description:
      "A practical introduction to Zustand: stores, actions, localStorage persistence, and Redux DevTools debugging.",
    date: "Nov 2025",
    url: "https://dev.to/salsadsid/zustand-a-lightweight-state-management-library-no-boilerplate-needed-4b3g",
  },
  {
    title: "Building a 2D Array Visualizer with React: A Step-by-Step Guide",
    description:
      "Building an interactive 2D array grid in React: input validation, rendering logic, and per-cell styling.",
    date: "Sep 2024",
    url: "https://dev.to/salsadsid/building-a-2d-array-visualizer-with-react-a-step-by-step-guide-1d9h",
  },
];

export const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "AlgoSoft Technologies Limited",
    location: "Dhaka, Bangladesh",
    period: "Sep 2025 - Present",
    summary: [
      "Leading development (top contributor, 1,100+ commits) of a device-lifecycle platform for a German medical-device manufacturer: 445 devices across 417 clinics.",
      "Shipped the warranty-renewal pipeline, AI email triage, RAG support chatbot, Shopify event broker, and an LMS with an AI quiz generator.",
    ],
    caseStudySlug: "device-platform",
  },
  {
    title: "Frontend React Developer",
    company: "Affpilot",
    location: "Dhaka, Bangladesh",
    period: "Oct 2023 - Sep 2025",
    summary: [
      "Top contributor (~920 of 1,860 commits) to the React architecture behind 1M+ AI-generated articles for 100k+ users.",
      "Built the generation workflows, write-to-publish pipeline, and billing that processed ~$390K; founding frontend engineer of Flippium (79% of commits).",
    ],
    caseStudySlug: "affpilot",
  },
  {
    title: "Software Developer (Contract)",
    company: "H.A.K Academy",
    location: "Gazipur, Bangladesh",
    period: "2025 - Present · contract",
    summary: [
      "Designed, built, and operate a school platform solo: 1,000+ students, seven user roles, biometric attendance at 2,000-3,000 punches a day.",
      "Bengali PDF pipelines, a GPA/results engine with rollback, and rate-limited guardian SMS with an emergency kill switch.",
    ],
    caseStudySlug: "school-platform",
  },
];

export const skills: Record<string, string> = {
  Languages: "JavaScript, TypeScript, SQL",
  Frontend:
    "React 18/19, Next.js (App Router), Redux Toolkit, RTK Query, TanStack Query, Tailwind CSS, Material UI, shadcn/ui",
  Backend:
    "Node.js, Express, REST & GraphQL APIs, Socket.io, queue & cron pipelines (QStash, Cloud Tasks), JWT, OAuth 2.0, RBAC",
  "AI / LLM":
    "OpenAI & Gemini APIs, RAG (vector search, embeddings, reranking), structured outputs, SSE streaming",
  Databases: "MongoDB (Mongoose), PostgreSQL, MySQL (Prisma), Firestore",
  "Integrations & Payments":
    "Stripe, PayPal, SSLCommerz, bKash/Nagad, Shopify & WordPress APIs, SMS gateways, ZKTeco biometrics",
  "Cloud, Ops & Testing":
    "Vercel, DigitalOcean (VPS, PM2), Firebase/GCP Functions, GitHub Actions CI, Sentry, Vitest, Jest, React Testing Library",
};

export const education = {
  degree: "Bachelor of Science (BSc)",
  institution: "Begum Rokeya University, Rangpur",
  field: "Geography and Environmental Science",
  year: "2022",
};

export const languages = ["Bangla (native)", "English (professional)"];
