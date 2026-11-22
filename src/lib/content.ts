import agricultureImg from "@/assets/industries/agriculture.jpg";
import healthcareImg from "@/assets/industries/healthcare.jpg";
import educationImg from "@/assets/industries/education.jpg";
import financeImg from "@/assets/industries/finance.jpg";
import retailImg from "@/assets/industries/retail.jpg";
import ecommerceImg from "@/assets/industries/ecommerce.jpg";
import logisticsImg from "@/assets/industries/logistics.jpg";
import manufacturingImg from "@/assets/industries/manufacturing.jpg";
import realEstateImg from "@/assets/industries/real-estate.jpg";
import professionalServicesImg from "@/assets/industries/professional-services.jpg";
import startupsImg from "@/assets/industries/startups.jpg";
import smallBusinessImg from "@/assets/industries/small-business.jpg";
import technologyBusinessImg from "@/assets/industries/technology-business.jpg";

export const COMPANY = {
  name: "ZAQSA",
  founder: "Chinmay Anand",
  role: "Co-Founder",
  address: "Mahavir Enclave, New Delhi – 110045, India",
  email: "zyqotech@gmail.com",
  phone: "+91 9570752983",
  tagline: "Business intelligence. Technology execution. Measurable progress.",
  support: "Strategy, technology and operations — connected by one accountable team.",
};

export const CONSULTING_PILLARS = [
  {
    number: "01",
    title: "Business strategy",
    blurb:
      "Turn market signals, operational realities and leadership priorities into a focused roadmap.",
  },
  {
    number: "02",
    title: "Digital transformation",
    blurb:
      "Modernise workflows and customer journeys without disrupting the business that already works.",
  },
  {
    number: "03",
    title: "AI & data advisory",
    blurb:
      "Move from scattered data and AI experiments to useful systems with clear governance and value.",
  },
  {
    number: "04",
    title: "Technology execution",
    blurb:
      "Design and deliver the software, platforms and infrastructure required to make the strategy real.",
  },
] as const;

export const ENGAGEMENT_STEPS = [
  {
    number: "01",
    title: "Diagnose",
    blurb: "We map goals, constraints, customers, systems and the decisions that matter most.",
  },
  {
    number: "02",
    title: "Design",
    blurb: "We shape the business case, future operating model and practical delivery roadmap.",
  },
  {
    number: "03",
    title: "Deliver",
    blurb: "Our strategists and builders work together through focused, measurable releases.",
  },
  {
    number: "04",
    title: "Evolve",
    blurb: "We measure adoption, strengthen capability and identify the next advantage.",
  },
] as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/technology", label: "Technology" },
  { to: "/business", label: "Business" },
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/lab", label: "Lab" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export type Group = { id: string; title: string; blurb: string; items: string[] };

export const TECHNOLOGY: Group[] = [
  {
    id: "ai",
    title: "AI",
    blurb: "Intelligence that fits real workflows.",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "AI Assistants",
      "AI Chatbots",
      "AI Applications",
      "AI Integration",
      "AI APIs",
      "AI Agents",
      "NLP",
      "Speech Processing",
      "Computer Vision",
      "Recommendation Systems",
      "Predictive Systems",
      "AI Workflow Automation",
    ],
  },
  {
    id: "data",
    title: "Data",
    blurb: "Turning records into decisions.",
    items: [
      "Data Analytics",
      "Business Intelligence",
      "Data Visualization",
      "Data Cleaning",
      "Data Processing",
      "Data Integration",
      "Database Development",
      "Data Pipelines",
      "Reporting Systems",
      "Dashboards",
      "Predictive Analytics",
      "Decision Support",
    ],
  },
  {
    id: "software",
    title: "Software",
    blurb: "Custom systems, built to last.",
    items: [
      "Custom Software",
      "Business Software",
      "Enterprise Applications",
      "Web Applications",
      "Desktop Applications",
      "Backend Systems",
      "APIs",
      "Full-Stack Development",
      "Database Systems",
      "SaaS Development",
      "Software Testing",
      "QA",
      "Maintenance",
      "Performance Optimization",
    ],
  },
  {
    id: "web",
    title: "Web",
    blurb: "Websites that work as hard as you do.",
    items: [
      "Business Websites",
      "Corporate Websites",
      "Portfolio Websites",
      "E-commerce Websites",
      "Landing Pages",
      "Responsive Websites",
      "Web Applications",
      "PWAs",
      "CMS Websites",
      "Custom Web Platforms",
      "Website Maintenance",
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    blurb: "Apps people actually open.",
    items: [
      "Android",
      "iOS",
      "Cross-platform Applications",
      "Business Apps",
      "Customer Apps",
      "Management Apps",
      "API Integration",
      "Mobile Backend",
      "Notifications",
      "Authentication",
      "App Maintenance",
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    blurb: "Reliable foundations, quietly running.",
    items: [
      "Cloud Deployment",
      "Hosting Setup",
      "Cloud Migration",
      "Application Deployment",
      "Server Management",
      "CI/CD",
      "DevOps",
      "Containers",
      "Backup Systems",
      "Monitoring",
      "Performance Optimization",
      "Infrastructure Automation",
    ],
  },
  {
    id: "it",
    title: "IT / Networking",
    blurb: "Everyday infrastructure, handled.",
    items: [
      "Network Setup",
      "Wi-Fi Solutions",
      "Network Management",
      "Server Setup",
      "Local Infrastructure",
      "IT Support",
      "System Administration",
      "Backup Solutions",
      "Remote Support",
      "Device Management",
      "Troubleshooting",
    ],
  },
  {
    id: "iot",
    title: "IoT",
    blurb: "Connecting the physical world.",
    items: [
      "IoT Solutions",
      "Sensors",
      "Smart Monitoring",
      "Device Connectivity",
      "ESP32 / Embedded Applications",
      "Data Collection",
      "IoT Dashboards",
      "Device Management",
      "Practical Automation",
    ],
  },
];

export const BUSINESS: Group[] = [
  {
    id: "core",
    title: "Business Solutions",
    blurb: "The operating system of a growing business.",
    items: [
      "Business Management Software",
      "CRM",
      "Lead Management",
      "Customer Management",
      "Inventory Management",
      "Billing",
      "Invoice Management",
      "Employee Management",
      "Attendance",
      "Workflow Management",
      "Digital Records",
      "Reporting",
      "Business Dashboards",
      "Communication Systems",
      "Process Automation",
      "Digital Transformation",
    ],
  },
  {
    id: "crm",
    title: "CRM",
    blurb: "Every customer, every follow-up, in one place.",
    items: [
      "CRM Systems",
      "Lead Tracking",
      "Customer Records",
      "Follow-up Management",
      "Sales Pipeline",
      "Customer Communication",
      "Support Requests",
      "Service Tickets",
      "Notifications",
      "Customer Dashboards",
      "Reports",
      "Business Analytics",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    blurb: "From catalogue to doorstep.",
    items: [
      "E-commerce Website Development",
      "Product Catalogues",
      "Shopping Cart",
      "Checkout",
      "Payment Gateway Integration",
      "Order Management",
      "Inventory Integration",
      "Customer Accounts",
      "Admin Dashboards",
      "Product Management",
      "Delivery / Order Tracking Integration",
      "Notifications",
      "E-commerce Analytics",
    ],
  },
  {
    id: "hr",
    title: "HR & Employees",
    blurb: "Simpler days for the people who run things.",
    items: [
      "Employee Records",
      "Attendance",
      "Leave Management",
      "Staff Management",
      "Employee Dashboards",
      "Document Management",
      "Internal Communication",
      "Task Management",
      "Payroll Data Integration",
      "Reports",
      "Administrative Workflows",
    ],
  },
  {
    id: "inventory",
    title: "Inventory & Operations",
    blurb: "Know what you have, and where.",
    items: [
      "Inventory Management",
      "Stock Tracking",
      "Product Records",
      "Purchase Records",
      "Sales Records",
      "Supplier Records",
      "Order Management",
      "Warehouse Records",
      "Stock Alerts",
      "Reports",
      "Dashboards",
      "Operational Automation",
    ],
  },
  {
    id: "education",
    title: "Education Management",
    blurb: "Schools, institutes, coaching and libraries.",
    items: [
      "School Management",
      "College / Institute Management",
      "Coaching Management",
      "Student Management",
      "Staff Management",
      "Attendance",
      "Fees & Fee Tracking",
      "Student Records",
      "Staff Records",
      "Examination Records",
      "Library Management",
      "Book Issue / Return",
      "Member Management",
      "Notifications",
      "Communication",
      "Reports",
      "Dashboards",
      "Administrative Workflows",
    ],
  },
  {
    id: "marketing",
    title: "Digital & Performance Marketing",
    blurb: "Campaigns that bring measurable leads and sales.",
    items: [
      "Digital Marketing Strategy",
      "Online Advertising & Promotion",
      "Meta Ads Management",
      "Performance Marketing (Google & Meta Ads)",
      "Lead Generation Campaigns",
      "Landing Pages & Sales Funnels",
      "Conversion Tracking & Analytics",
      "Remarketing",
      "Email & WhatsApp Marketing",
      "Budget Optimisation",
      "Campaign Reporting",
    ],
  },
  {
    id: "docs",
    title: "Documents & Workflow",
    blurb: "Paperwork, made digital and searchable.",
    items: [
      "Digital Records",
      "Document Management",
      "File Organization",
      "Approval Workflows",
      "Task Management",
      "Notifications",
      "Internal Processes",
      "Digital Forms",
      "Reports",
      "Search",
      "Role-based Access",
      "Workflow Automation",
    ],
  },
];

export const CONSULTING = [
  "Technology Consulting",
  "Business Consulting",
  "Digital Transformation",
  "Requirement Analysis",
  "Software Planning",
  "Product Planning",
  "Process Improvement",
  "Technology Strategy",
  "Digital Strategy",
  "Automation Consulting",
  "Data Strategy",
  "Technology Roadmapping",
];

export const CIVIC = [
  "Election Information Systems",
  "Public Information Websites",
  "Administrative Dashboards",
  "Event Coordination",
  "Volunteer Coordination",
  "Area / Booth Records",
  "Election-Day Information Systems",
  "Reporting",
  "Survey / Feedback Systems",
  "Public Communication",
  "Media Coordination",
  "Content Management",
  "Digital Presence",
  "Analytics",
  "Documentation Support",
  "Operations Planning",
  "Crisis Communication Workflows",
  "Civic Engagement Platforms",
];

export const PRODUCTS = [
  "AI Products",
  "SaaS",
  "Business Platforms",
  "CRM",
  "Education Platforms",
  "Management Software",
  "Dashboards",
  "Automation Tools",
  "Data Platforms",
  "Customer Platforms",
  "Internal Business Tools",
];

export const PRODUCT_LINES = [
  { name: "Retail & inventory", line: "Shop, stock and billing management" },
  { name: "Restaurant POS", line: "Orders, tables and kitchen flow" },
  { name: "Clinic & appointments", line: "Patient queues, bookings and records" },
  { name: "Hospital management", line: "Wards, billing, pharmacy and reports" },
  { name: "Customer & lead CRM", line: "Every enquiry tracked to a result" },
  { name: "AI support desk", line: "Chatbot and customer support that never sleeps" },
  { name: "Campaign office", line: "Constituency and campaign operations" },
  { name: "Social planning", line: "Content calendar and performance analytics" },
  { name: "Workflow automation", line: "Repeated business steps, handled for you" },
] as const;

export const SHARED_FOUNDATION = [
  "Secure login",
  "Multi-organisation accounts",
  "Role-based permissions",
  "Billing & subscriptions",
  "Notifications",
  "Reports & analytics",
  "AI integrations",
  "Audit logs",
  "Cloud storage",
  "API integrations",
];

export const ALSO_BUILT = [
  { name: "E-commerce", line: "Online stores and payment integration" },
  { name: "Recruitment automation", line: "Applicant tracking and HR tools" },
  { name: "Booking systems", line: "Salons, hotels, clinics and service providers" },
  { name: "Digital transformation", line: "Helping traditional businesses adopt technology" },
  { name: "AI knowledge assistants", line: "Search across internal documents and know-how" },
  { name: "API integrations", line: "Connecting the business apps you already use" },
] as const;

export const WHO_WE_SERVE = [
  {
    name: "Local businesses & professionals",
    who: [
      "Retail stores and wholesalers",
      "Restaurants and cafes",
      "Clinics and professionals",
      "Real estate businesses",
      "Hotels and service providers",
    ],
    need: "Easier customer access, steady marketing and the software to run daily work.",
  },
  {
    name: "Schools, coaching & libraries",
    who: [
      "Private schools",
      "Coaching institutes",
      "Computer institutes",
      "Libraries",
      "Training centres",
    ],
    need: "Admissions, fees, attendance and records in one dependable system.",
  },
  {
    name: "Public representatives & civic teams",
    who: [
      "Elected representatives",
      "Political offices",
      "Civic organisations",
      "Campaign management teams",
    ],
    need: "Clear communication systems and tools for running an office or campaign.",
  },
  {
    name: "Hospitals & clinics",
    who: ["Clinics", "Nursing homes", "Hospitals"],
    need: "Appointments, patient records and billing, built with data security first.",
  },
] as const;

export const LAB = [
  "AI Experiments",
  "Software Prototypes",
  "Automation Experiments",
  "IoT Prototypes",
  "Data Experiments",
  "Interface Experiments",
  "New Product Ideas",
  "Business Technology Experiments",
  "Emerging Technology Research",
];

export const FUTURE = [
  "Quantum Computing",
  "Robotics",
  "AR / VR / XR",
  "Spatial Computing",
  "Neuromorphic Computing",
  "Other Emerging Technologies",
];

export type Service = Group & {
  category: "Core" | "Marketing" | "Technology" | "Business" | "Consulting";
  intro: string;
  outcomes: string[];
  detail: ServiceDetail;
};

const CONSULTING_GROUP: Group = {
  id: "consulting",
  title: "Consulting & Strategy",
  blurb: "Clarity before commitment.",
  items: CONSULTING,
};

export const ELECTION_CAMPAIGN: Group = {
  id: "election-campaign",
  title: "Election & Political Campaign Management",
  blurb:
    "Digital campaigns, social media management, promotional content and campaign coordination.",
  items: [
    "Campaign Strategy & Planning",
    "Social Media Management for Campaigns",
    "Campaign Content Creation & Editing",
    "Campaign Promotion",
    "Campaign Websites",
    "Candidate Profile Pages",
    "Campaign Operations Planning",
    "Volunteer Management",
    "Event & Rally Coordination",
    "Booth / Area Records",
    "Election-Day Information Systems",
    "Campaign Dashboards",
    "Content Calendars",
    "Poster & Graphic Design",
    "Video Editing & Reels",
    "Press & Media Coordination",
    "Public Communication",
    "Survey & Feedback Systems",
    "Analytics & Reporting",
    "Documentation Support",
    "Crisis Communication Workflows",
  ],
};

/** The core services. Shown first, highlighted across the site, in the client's order. */
export const CORE_GROUPS: Group[] = [
  ELECTION_CAMPAIGN,
  {
    id: "school-management",
    title: "School Management Software",
    blurb: "Student records, attendance, fee management, examinations and school administration.",
    items: [
      "Student & Parent Records",
      "Attendance for Students & Staff",
      "Fee Collection, Receipts & Reminders",
      "Exams, Marks & Report Cards",
      "Admissions & Enquiry Tracking",
      "Coaching Institute Management",
      "Small Office Management (Attendance & Fees)",
      "Library Management (Daily Records & Books)",
      "Timetable & Substitution Planning",
      "Parent Communication & Notices",
      "Teacher & Staff Portal",
      "Principal Dashboards & Reports",
    ],
  },
  {
    id: "hospital-management",
    title: "Hospital Management Software",
    blurb: "Patient records, doctor appointments, billing, pharmacy and hospital operations.",
    items: [
      "Patient Records & Visit History",
      "Doctor Appointments & Queue Management",
      "Billing, Invoices & Insurance Tracking",
      "Pharmacy & Lab Inventory",
      "OPD / IPD & Ward Management",
      "Doctor & Staff Scheduling",
      "Prescriptions & Follow-up Reminders",
      "Patient Reminders (SMS, WhatsApp, Email)",
      "Hospital Dashboards & Reports",
      "Role-based Access & Audit Trails",
    ],
  },
  {
    id: "website-app-development",
    title: "Website & App Development",
    blurb: "Professional websites, Android and iOS apps, e-commerce websites and custom software.",
    items: [
      "Professional Business Websites",
      "E-commerce Websites & Online Stores",
      "Android Apps",
      "iOS Apps",
      "Cross-platform Apps",
      "Custom Software Development",
      "Web Portals & Dashboards",
      "Landing Pages",
      "Payment & Third-party Integrations",
      "Website Maintenance & Updates",
      "SEO & GEO Set-up",
    ],
  },
  {
    id: "small-business-solutions",
    title: "Small Business Management Solutions",
    blurb: "Billing, inventory, customer management and business automation.",
    items: [
      "Billing & Invoicing",
      "Inventory & Stock Management",
      "Customer Management (CRM)",
      "Business Process Automation",
      "Purchase & Supplier Records",
      "Staff & Attendance Records",
      "Sales & Profit Reports",
      "Owner Dashboards",
      "Reminders & Notifications",
      "Data Migration from Excel & Registers",
    ],
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    blurb: "Content creation, posts, reels, page management, branding and digital marketing.",
    items: [
      "Content Creation, Editing & Promotion",
      "Post & Creative Design",
      "Reels & Short Videos",
      "Page Management & Community Replies",
      "Branding & Brand Voice",
      "Digital Marketing Campaigns",
      "Hashtag & Trend Research",
      "Monthly Analytics Reports",
      "Profile Setup & Optimisation",
      "Meta Ads Management",
      "Influencer & Collaboration Outreach",
    ],
  },
  {
    id: "ai-business-automation",
    title: "AI & Business Automation",
    blurb:
      "AI chatbots, automated customer support, lead management, workflow automation and smart business solutions.",
    items: [
      "AI Chatbots (Website & WhatsApp)",
      "Automated Customer Support",
      "Lead Capture & Follow-up Automation",
      "Workflow & Approval Automation",
      "AI Assistants for Your Team",
      "Document & Data Extraction",
      "CRM & Tool Integrations (APIs)",
      "Email & Message Automation",
      "Smart Dashboards & AI Insights",
      "Training & Handover",
    ],
  },
  {
    id: "graphic-design-branding",
    title: "Graphic Design & Branding",
    blurb:
      "Logo design, brand identity, banners, posters, brochures, social media creatives and promotional designs.",
    items: [
      "Logo Design",
      "Brand Identity & Guidelines",
      "Banners & Hoardings",
      "Posters & Flyers",
      "Brochures & Catalogues",
      "Social Media Creatives",
      "Promotional Designs",
      "Business Cards & Stationery",
      "Packaging & Labels",
      "Presentation Decks",
    ],
  },
];

/** Marketing and media services that sit alongside the core services. */
export const MARKETING_GROUPS: Group[] = [
  {
    id: "seo-geo",
    title: "SEO & GEO",
    blurb: "Be found in Google and in AI answers.",
    items: [
      "Technical SEO Audit",
      "On-page & Content SEO",
      "Local SEO & Google Business Profile",
      "Keyword & Competitor Research",
      "Link Building & Citations",
      "Generative Engine Optimisation (GEO)",
      "Structured Data & Schema",
      "Search Performance Reporting",
    ],
  },
  {
    id: "creative-media-production",
    title: "Creative & Media Production",
    blurb: "Video, motion and sound that make the brand memorable.",
    items: [
      "Video Production & Editing",
      "Reels & Short-form Video",
      "Motion Graphics & Animation",
      "Photography Coordination",
      "Audio, Jingles & Voice-overs",
      "Promotional & Explainer Videos",
      "Event Highlight Videos",
      "Post-production & Colour Grading",
    ],
  },
  {
    id: "event-offline-marketing",
    title: "Event & Offline Marketing",
    blurb: "Ground-level activity that works with your digital presence.",
    items: [
      "Event Planning & Coordination",
      "Launch & Promotional Events",
      "Rallies, Meetups & Community Drives",
      "Hoardings, Banners & Print Collateral",
      "Brand Activations & Stalls",
      "Vendor & Venue Coordination",
      "Lead Capture at Events",
      "Event Reporting & Follow-up",
    ],
  },
];

/** Presentation copy for the pinned "core services" showcase on the home page. */
export const CORE_SERVICES = [
  {
    id: "election-campaign",
    number: "01",
    label: "Election & political campaigns",
    title: "Election & campaign management",
    blurb:
      "Digital campaigns, social media management, promotional content and campaign coordination — organised, transparent and compliant.",
    builtFor: ["Candidates", "Parties", "Campaign offices"],
    features: ["Digital campaigns", "Social media", "Promotional content", "Campaign coordination"],
  },
  {
    id: "school-management",
    number: "02",
    label: "School management",
    title: "School management software",
    blurb:
      "Student records, attendance, fee management, examinations and school administration from one dashboard.",
    builtFor: ["Schools", "Coaching institutes", "Colleges"],
    features: ["Student records", "Attendance", "Fee management", "Exams & report cards"],
  },
  {
    id: "hospital-management",
    number: "03",
    label: "Hospital management",
    title: "Hospital management software",
    blurb:
      "Patient records, doctor appointments, billing, pharmacy and hospital operations in one calm system.",
    builtFor: ["Hospitals", "Clinics", "Diagnostic labs"],
    features: ["Patient records", "Appointments", "Billing", "Pharmacy"],
  },
  {
    id: "website-app-development",
    number: "04",
    label: "Website & app development",
    title: "Websites, apps & custom software",
    blurb:
      "Professional websites, Android and iOS apps, e-commerce websites and custom software built to last.",
    builtFor: ["Businesses", "Startups", "Retailers"],
    features: ["Websites", "Android & iOS apps", "E-commerce", "Custom software"],
  },
  {
    id: "small-business-solutions",
    number: "05",
    label: "Small business solutions",
    title: "Small business management",
    blurb:
      "Billing, inventory, customer management and business automation, so the owner runs the business instead of the paperwork.",
    builtFor: ["Shops", "Traders", "Service businesses"],
    features: ["Billing", "Inventory", "Customers", "Automation"],
  },
  {
    id: "social-media-management",
    number: "06",
    label: "Social media management",
    title: "Social media management",
    blurb:
      "Content creation, posts, reels, page management, branding and digital marketing that keep your pages active and your brand consistent.",
    builtFor: ["Brands", "Local businesses", "Creators"],
    features: ["Content creation", "Posts & reels", "Page management", "Branding"],
  },
  {
    id: "ai-business-automation",
    number: "07",
    label: "AI & business automation",
    title: "AI chatbots & automation",
    blurb:
      "AI chatbots, automated customer support, lead management and workflow automation — smart business solutions that save hours every day.",
    builtFor: ["Support teams", "Sales teams", "Growing businesses"],
    features: ["AI chatbots", "Customer support", "Lead management", "Workflow automation"],
  },
  {
    id: "graphic-design-branding",
    number: "08",
    label: "Graphic design & branding",
    title: "Graphic design & branding",
    blurb:
      "Logo design, brand identity, banners, posters, brochures, social media creatives and promotional designs that make you look like one company.",
    builtFor: ["New brands", "Shops & clinics", "Campaigns"],
    features: ["Logos & identity", "Banners & posters", "Brochures", "Social creatives"],
  },
] as const;

export type ServiceDetail = {
  who: string;
  engagements: string[];
  faqs: { q: string; a: string }[];
};

const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "ai-business-automation": {
    who: "Businesses answering the same customer questions all day, losing leads in inboxes, or moving data between tools by hand.",
    engagements: [
      "AI chatbots for your website and WhatsApp",
      "Automated customer support and ticket routing",
      "Lead capture, scoring and follow-up automation",
      "Workflow and approval automation across your tools",
      "AI assistants and dashboards for your team",
    ],
    faqs: [
      {
        q: "Will the chatbot give wrong answers?",
        a: "It answers from your own content, hands over to a person when unsure, and every conversation can be reviewed. We do not deploy black-box automation into important workflows.",
      },
      {
        q: "Do we need to change the tools we already use?",
        a: "Usually not. We connect what you have (CRM, forms, WhatsApp, email, spreadsheets) and automate the steps between them.",
      },
      {
        q: "How do we know it is worth it?",
        a: "We start with one measurable workflow, such as response time or leads followed up, and report the change before expanding.",
      },
    ],
  },
  "graphic-design-branding": {
    who: "New and growing businesses, clinics, schools, shops and campaigns that need a consistent, professional look across print and digital.",
    engagements: [
      "Logo and brand identity with usage guidelines",
      "Banners, posters, flyers and hoardings",
      "Brochures, catalogues and company profiles",
      "Social media creatives and promotional designs",
      "Stationery, packaging and presentation decks",
    ],
    faqs: [
      {
        q: "Do we get the source files?",
        a: "Yes. You receive print-ready and web-ready files, plus editable sources, at handover.",
      },
      {
        q: "Can you redesign our existing logo?",
        a: "Yes. We can refresh what you have or start from scratch, and show directions before you commit.",
      },
      {
        q: "How many revisions are included?",
        a: "Revision rounds are agreed up front in the scope, so there are no surprises.",
      },
    ],
  },
  "hospital-management": {
    who: "Hospitals, nursing homes, clinics and diagnostic labs where queues, paper files and scattered billing slow down care.",
    engagements: [
      "Hospital and clinic management systems",
      "Doctor appointment, queue and reminder workflows",
      "Patient records and prescription history",
      "Billing, pharmacy and lab integration",
      "Dashboards for doctors and administrators",
    ],
    faqs: [
      {
        q: "Can this replace our paper files and registers?",
        a: "Yes. We digitise records in stages, keep the screens simple for front-desk and medical staff, and migrate existing registers with you.",
      },
      {
        q: "How do you handle patient privacy?",
        a: "Access is role-based, actions are logged, and data handling is agreed up front. Legal and statutory compliance is scoped separately for each project.",
      },
      {
        q: "Does it work for a single clinic as well as a hospital?",
        a: "Yes. We start with the modules you need today — usually appointments, records and billing — and add departments as you grow.",
      },
    ],
  },
  "website-app-development": {
    who: "Businesses, startups and institutions that need a professional website, a mobile app or custom software built properly and maintained afterwards.",
    engagements: [
      "Business, portfolio and corporate websites",
      "E-commerce websites with payments and order management",
      "Android, iOS and cross-platform apps",
      "Custom software, portals and dashboards",
      "Maintenance, hosting and ongoing improvements",
    ],
    faqs: [
      {
        q: "Do I need separate Android and iOS apps?",
        a: "Usually not. A cross-platform build covers both from one codebase, which keeps cost and maintenance down.",
      },
      {
        q: "How long does a website take?",
        a: "A focused business website typically takes weeks, not months. Scope is agreed up front so timelines hold.",
      },
      {
        q: "Can we update the content ourselves?",
        a: "Yes. Sites are built with editing in mind, and we walk your team through it at handover.",
      },
    ],
  },
  "small-business-solutions": {
    who: "Shops, traders, clinics and service businesses whose billing, stock and customer details live in notebooks, spreadsheets and phone contacts.",
    engagements: [
      "Billing and invoicing systems",
      "Inventory and stock tracking",
      "Customer records and follow-up reminders",
      "Everyday workflow automation",
      "Owner dashboards and sales reports",
    ],
    faqs: [
      {
        q: "We use Excel today. Can you move our data?",
        a: "Yes. We clean and import your existing sheets and registers so you do not start from zero.",
      },
      {
        q: "Is this affordable for a small shop?",
        a: "We size the system to the business. Many owners start with just billing and stock and add more later.",
      },
      {
        q: "Will my staff manage it?",
        a: "The screens are built for the least technical person on the team, with training and support after go-live.",
      },
    ],
  },
  "social-media-management": {
    who: "Brands, local businesses and professionals with a good product but irregular posting, inconsistent branding and no clear view of what works.",
    engagements: [
      "Monthly content calendars and creatives",
      "Posts, reels and short videos",
      "Page management and community replies",
      "Branding and brand-voice guidelines",
      "Monthly performance reports",
    ],
    faqs: [
      {
        q: "Do you create the content as well as post it?",
        a: "Yes. We plan, design, write and edit the content, then publish and manage the pages.",
      },
      {
        q: "Which platforms do you manage?",
        a: "Instagram, Facebook, LinkedIn, YouTube and X, chosen by where your customers actually are.",
      },
      {
        q: "How do we see results?",
        a: "You get a monthly report covering reach, engagement, follower growth and what to do next.",
      },
    ],
  },
  "seo-geo": {
    who: "Businesses that want to be found when customers search on Google, Maps and AI assistants.",
    engagements: [
      "Technical and on-page SEO audits",
      "Local SEO and Google Business Profile",
      "Content and keyword strategy",
      "Generative Engine Optimisation (GEO) for AI answers",
      "Monthly search performance reports",
    ],
    faqs: [
      {
        q: "What is GEO?",
        a: "Generative Engine Optimisation: structuring your content and brand signals so AI assistants and AI search results can understand and recommend you.",
      },
      {
        q: "How soon does SEO show results?",
        a: "Honest answer: months, not weeks. We pair it with faster channels so you see progress while search builds.",
      },
    ],
  },
  "creative-media-production": {
    who: "Brands and campaigns that need video, motion and audio produced consistently.",
    engagements: [
      "Video production, editing and reels",
      "Motion graphics and animation",
      "Promotional and explainer videos",
      "Audio, jingles and voice-overs",
      "Photography coordination",
    ],
    faqs: [
      {
        q: "Can you work from our existing brand?",
        a: "Yes. We follow your guidelines, or help you create them if they do not exist yet.",
      },
      {
        q: "Do you handle shoots?",
        a: "We coordinate photographers, videographers and locations, and handle editing and post-production.",
      },
    ],
  },
  "event-offline-marketing": {
    who: "Businesses, institutions and campaigns that need ground-level visibility that supports their digital presence.",
    engagements: [
      "Launch, promotional and community events",
      "Hoardings, banners and print collateral",
      "Brand activations and stalls",
      "Vendor and venue coordination",
      "Lead capture and follow-up",
    ],
    faqs: [
      {
        q: "Can offline activity connect to our digital campaigns?",
        a: "Yes. We use QR codes, tracked links and lead forms so event activity shows up in your reports.",
      },
      {
        q: "Do you handle vendors and permissions?",
        a: "We coordinate vendors and venues. Permissions are scoped per event and agreed up front.",
      },
    ],
  },
  "school-management": {
    who: "Schools, coaching institutes and colleges running admissions, attendance, fees and exams on registers, receipts and group chats.",
    engagements: [
      "School management system, end to end",
      "Admissions and enquiry tracking",
      "Fee collection, receipts and reminders",
      "Exams, marks and report cards",
      "Parent and teacher portals",
    ],
    faqs: [
      {
        q: "Our teachers are not very technical. Will they manage?",
        a: "The system is designed for the least technical user in the room, with short training sessions and support after go-live.",
      },
      {
        q: "Can parents see attendance, fees and results?",
        a: "Yes. A parent view can show attendance, fee status, notices and report cards, with notifications you control.",
      },
      {
        q: "Can we import our existing student data?",
        a: "Yes. We clean and import your current records so you do not start from zero.",
      },
    ],
  },
  consulting: {
    who: "Founders, leadership teams and growing organisations facing a decision that is too important to guess — entering a new market, modernising operations, or committing to a technology investment.",
    engagements: [
      "Strategy & roadmap sprints (2–6 weeks)",
      "Digital transformation programmes",
      "Technology selection & vendor evaluation",
      "Process improvement diagnostics",
      "AI readiness assessment",
    ],
    faqs: [
      {
        q: "How does an engagement usually start?",
        a: "With a focused diagnostic: we map your goals, constraints and current systems, then present a prioritised roadmap before any build work begins.",
      },
      {
        q: "Do you only advise, or also execute?",
        a: "Both. ZAQSA pairs advisory with in-house technology delivery, so the strategy we recommend is one we can actually build and support.",
      },
      {
        q: "What size of organisation do you work with?",
        a: "From early-stage founders to established businesses. Engagements are sized to the decision at hand, not to a fixed package.",
      },
    ],
  },
  "election-campaign": {
    who: "Candidates, parties and campaign offices that need disciplined operations and communication — from first-time contestants to established campaign teams.",
    engagements: [
      "Campaign website & digital presence setup",
      "Volunteer & booth coordination systems",
      "Event and rally logistics planning",
      "Content, design and social media operations",
      "Reporting dashboards for campaign leadership",
    ],
    faqs: [
      {
        q: "Do you work with any party or candidate?",
        a: "We evaluate each engagement against our boundaries: no voter manipulation, no deceptive messaging, no discriminatory targeting, and full compliance with election law and the model code of conduct.",
      },
      {
        q: "Can you support a campaign mid-way?",
        a: "Yes. We can audit current operations and stabilise the highest-friction areas first — typically communication scheduling and volunteer coordination.",
      },
      {
        q: "What happens to campaign data after the election?",
        a: "Data handling is agreed up front, documented, and closed out per the engagement terms and applicable law.",
      },
    ],
  },
  ai: {
    who: "Organisations with real workflows — support, sales, operations, documents — where AI could remove repetitive effort, but where accuracy and accountability matter.",
    engagements: [
      "AI assistant & chatbot builds",
      "Workflow automation with AI",
      "Recommendation & prediction systems",
      "Document & speech processing",
      "AI integration into existing software",
    ],
    faqs: [
      {
        q: "Do we need our own data to start?",
        a: "Not always. Many useful AI features work on your existing documents and processes; we assess feasibility before recommending any data programme.",
      },
      {
        q: "How do you handle accuracy and risk?",
        a: "Every AI feature ships with guardrails, human review points and measurement — we do not deploy black-box automation into critical workflows.",
      },
    ],
  },
  data: {
    who: "Teams sitting on records, spreadsheets and reports who need one reliable view of the business to make faster, better decisions.",
    engagements: [
      "Dashboard & reporting systems",
      "Data cleaning & integration projects",
      "Analytics pipeline setup",
      "Decision-support tooling",
    ],
    faqs: [
      {
        q: "Our data is scattered across Excel files. Can you help?",
        a: "Yes — consolidation is the most common starting point. We clean, structure and connect your records before building any reporting layer.",
      },
      {
        q: "Will our team be able to maintain it?",
        a: "Systems are designed for your team's skill level, with documentation and handover training included.",
      },
    ],
  },
  software: {
    who: "Businesses whose processes have outgrown off-the-shelf tools and spreadsheets, and need software shaped around how they actually work.",
    engagements: [
      "Custom business applications",
      "Internal tools & admin systems",
      "API & backend development",
      "Modernisation of legacy systems",
    ],
    faqs: [
      {
        q: "How do you keep a custom build from becoming expensive?",
        a: "Focused, measurable releases. You see working software early and often, and scope is re-prioritised with every release.",
      },
      {
        q: "Do you maintain what you build?",
        a: "Yes — maintenance, performance work and iteration are part of how we engage, not an afterthought.",
      },
    ],
  },
  web: {
    who: "Businesses that need a website to do a job — win trust, generate enquiries, sell products — not just exist.",
    engagements: [
      "Business & corporate websites",
      "E-commerce storefronts",
      "Landing pages & campaign sites",
      "Website rebuilds & maintenance",
    ],
    faqs: [
      {
        q: "How long does a business website take?",
        a: "A focused site typically takes weeks, not months. Scope is agreed up front so timelines hold.",
      },
      {
        q: "Can we update content ourselves?",
        a: "Yes — sites are built with editing in mind, and we walk your team through it at handover.",
      },
    ],
  },
  mobile: {
    who: "Organisations whose customers or field teams live on their phones — and need an app people actually open.",
    engagements: [
      "Customer-facing apps",
      "Internal & field-team apps",
      "Cross-platform builds (Android + iOS)",
      "App maintenance & iteration",
    ],
    faqs: [
      {
        q: "Do we need separate Android and iOS apps?",
        a: "Usually not — cross-platform builds cover both from one codebase, keeping cost and maintenance down.",
      },
    ],
  },
  cloud: {
    who: "Teams running systems on ad-hoc hosting or a single machine, who need reliability, backups and room to grow.",
    engagements: [
      "Cloud migration & hosting setup",
      "Deployment pipelines (CI/CD)",
      "Monitoring, backup & recovery",
      "Infrastructure cost optimisation",
    ],
    faqs: [
      {
        q: "Will migration disrupt our operations?",
        a: "Migrations are planned in stages with rollback points, so the business keeps running throughout.",
      },
    ],
  },
  it: {
    who: "Offices and organisations that need everyday infrastructure — networks, devices, support — to simply work.",
    engagements: [
      "Office network & Wi-Fi setup",
      "Server & device management",
      "Ongoing IT support",
      "Backup & recovery setup",
    ],
    faqs: [
      {
        q: "Do you offer ongoing support contracts?",
        a: "Yes — support arrangements are sized to your team, from on-call help to managed infrastructure.",
      },
    ],
  },
  iot: {
    who: "Businesses with physical operations — farms, factories, facilities — where knowing what is happening on the ground changes decisions.",
    engagements: [
      "Sensor monitoring pilots",
      "IoT dashboards & alerts",
      "Device connectivity & data collection",
      "Practical automation projects",
    ],
    faqs: [
      {
        q: "Is IoT practical for a small operation?",
        a: "Yes — we start with a small, bounded pilot (a few sensors, one dashboard) and expand only if the value proves out.",
      },
    ],
  },
  core: {
    who: "Growing businesses where leads, billing, inventory and staff records live in too many places at once.",
    engagements: [
      "Business management software",
      "Billing, inventory & records digitisation",
      "Workflow automation",
      "Management dashboards",
    ],
    faqs: [
      {
        q: "We already use several tools. Do we replace them?",
        a: "Only where it helps. We often connect what you have first, and replace only the tools that are genuinely holding you back.",
      },
    ],
  },
  crm: {
    who: "Sales and service teams losing follow-ups in inboxes, notebooks and memory.",
    engagements: [
      "CRM setup & customisation",
      "Lead & pipeline tracking",
      "Customer communication workflows",
      "Service ticket systems",
    ],
    faqs: [
      {
        q: "Off-the-shelf CRM or custom?",
        a: "We assess both honestly. Many teams start on a configured off-the-shelf system; custom makes sense when your process is genuinely different.",
      },
    ],
  },
  ecommerce: {
    who: "Retailers and brands ready to sell online with operations that can keep up with the storefront.",
    engagements: [
      "E-commerce website builds",
      "Payment & shipping integration",
      "Order & inventory management",
      "E-commerce analytics",
    ],
    faqs: [
      {
        q: "Which platform do you build on?",
        a: "It depends on your catalogue, budget and team — we recommend after understanding the business, not before.",
      },
    ],
  },
  hr: {
    who: "Teams where attendance, leave, records and communication eat hours that should go to real work.",
    engagements: [
      "Employee records & attendance systems",
      "Leave & task management",
      "Internal communication tools",
      "HR reporting",
    ],
    faqs: [
      {
        q: "Can this connect to our payroll?",
        a: "Yes — payroll data integration is a standard part of these builds.",
      },
    ],
  },
  inventory: {
    who: "Businesses that lose money to stockouts, over-ordering and records nobody trusts.",
    engagements: [
      "Inventory & stock tracking systems",
      "Purchase & supplier records",
      "Warehouse dashboards",
      "Stock alert automation",
    ],
    faqs: [
      {
        q: "Can it work across multiple locations?",
        a: "Yes — multi-location stock visibility is a common requirement and is designed in from the start.",
      },
    ],
  },
  education: {
    who: "Schools, colleges, coaching institutes and libraries running on registers, receipts and WhatsApp groups.",
    engagements: [
      "School / institute management systems",
      "Fees, attendance & exam records",
      "Library management",
      "Parent & student communication",
    ],
    faqs: [
      {
        q: "Our staff are not technical. Will they manage?",
        a: "Systems are designed for the least technical user in the room, with training and support included.",
      },
    ],
  },
  marketing: {
    who: "Businesses that want measurable leads and sales from digital channels, not just impressions.",
    engagements: [
      "Performance campaigns on Google and Meta",
      "Lead generation funnels and landing pages",
      "Conversion tracking and analytics",
      "Remarketing and email / WhatsApp campaigns",
      "Budget optimisation and monthly reporting",
    ],
    faqs: [
      {
        q: "How do you measure performance marketing?",
        a: "Every campaign is tracked to leads, calls or sales, and reported monthly with cost per result and what to change next.",
      },
    ],
  },
  docs: {
    who: "Organisations drowning in paper files, email approvals and documents nobody can find.",
    engagements: [
      "Document digitisation & management",
      "Approval & task workflows",
      "Digital forms & records",
      "Role-based access & search",
    ],
    faqs: [
      {
        q: "Do you handle the scanning and migration of old files?",
        a: "We plan the digitisation with you and can support the migration process as part of the engagement.",
      },
    ],
  },
};

const INTROS: Record<string, string> = {
  "ai-business-automation":
    "Most businesses lose hours to repeated questions, missed leads and manual copy-paste. We build AI chatbots, automated customer support, lead management and workflow automation that take that work off your team, with a person always able to step in.",
  "graphic-design-branding":
    "People judge a business in seconds. We design logos, brand identity, banners, posters, brochures and social media creatives that look consistent everywhere, so customers recognise and trust you.",
  "hospital-management":
    "Healthcare runs on timing, records and trust. We build hospital management software that keeps patient records, doctor appointments, billing, pharmacy and day-to-day operations in one calm system — simple for front-desk staff, clear for doctors, and organised for administrators.",
  "website-app-development":
    "Your website and app are often the first thing a customer meets. We design and build professional websites, e-commerce stores, Android and iOS apps and custom software that look credible, load fast and are easy to keep updated.",
  "small-business-solutions":
    "Small businesses run on billing, stock and customer relationships. We build simple management software that puts invoices, inventory, customer records and routine automation in one place, so the owner spends time growing the business instead of chasing paperwork.",
  "social-media-management":
    "A consistent presence builds trust. We handle content creation, posts, reels, page management, branding and digital marketing, so your social media stays active, on-brand and measured every month.",
  "seo-geo":
    "Customers now search on Google, Maps and AI assistants. We make your business easy to find and easy to recommend, with technical and local SEO plus Generative Engine Optimisation for AI-driven answers.",
  "creative-media-production":
    "Moving image and sound carry a brand further. We produce video, reels, motion graphics and audio in one place, so every campaign looks and sounds like the same company.",
  "event-offline-marketing":
    "Digital reaches people; events and print make you real to them. We plan and run launches, community drives, activations and offline collateral that connect back to your digital campaigns.",
  "school-management":
    "Schools carry admissions, attendance, fees, exams and parent communication every single day. We build school management software that puts all of it in one place, so teachers teach, parents stay informed and the principal sees the whole school at a glance.",
  "election-campaign":
    "We support candidates, parties and campaign offices with the operational and communication backbone of a campaign — websites, volunteer coordination, event logistics, content and reporting. Every engagement follows election-commission guidelines and our boundaries: no voter manipulation, no deceptive messaging, no discriminatory targeting.",
  consulting:
    "For founders, teams and organisations who need clarity before commitment — we frame the decision, map options and build a roadmap you can actually execute.",
};

const OUTCOMES: Record<string, string[]> = {
  "ai-business-automation": [
    "Customer questions answered around the clock",
    "No lead left without a follow-up",
    "Hours of manual work removed every week",
    "A person can step in at any point",
  ],
  "graphic-design-branding": [
    "A logo and identity you are proud of",
    "Banners and posters ready for print",
    "Consistent creatives across every channel",
    "Editable files that you own",
  ],
  "hospital-management": [
    "Shorter queues and fewer missed appointments",
    "Patient history available in seconds",
    "Billing and pharmacy that match",
    "One dashboard for the whole hospital",
  ],
  "website-app-development": [
    "A credible, fast website customers trust",
    "Apps that work on Android and iOS",
    "Orders and payments handled online",
    "Software shaped around how you work",
  ],
  "small-business-solutions": [
    "Bills and stock always up to date",
    "Customers followed up on time",
    "Daily reports without spreadsheets",
    "Routine tasks automated",
  ],
  "social-media-management": [
    "Regular, on-brand posting",
    "Reels and creatives made for you",
    "Pages managed and replied to",
    "A clear monthly performance report",
  ],
  "school-management": [
    "Admissions, fees and attendance in one place",
    "Report cards without manual calculation",
    "Parents informed without phone calls",
    "A principal dashboard for the whole school",
  ],
  "election-campaign": [
    "One coordinated view of volunteers, events and areas",
    "Consistent, on-schedule public communication",
    "Faster reporting for campaign leadership",
    "Compliance-first documentation",
  ],
};
const DEFAULT_OUTCOMES = [
  "A clear scope and roadmap before build",
  "Systems shaped around how your team works",
  "Measurable releases, not one big launch",
  "Support and improvement after go-live",
];

const toService = (g: Group, category: Service["category"]): Service => ({
  ...g,
  category,
  intro:
    INTROS[g.id] ??
    `${g.blurb} ZAQSA plans, builds and supports ${g.title.toLowerCase()} work end to end — starting with your goals and constraints, then delivering in focused, measurable releases.`,
  outcomes: OUTCOMES[g.id] ?? DEFAULT_OUTCOMES,
  detail: SERVICE_DETAILS[g.id] ?? {
    who: `Teams and businesses that need ${g.title.toLowerCase()} done properly — shaped around how they work, supported after go-live.`,
    engagements: g.items.slice(0, 5),
    faqs: [
      {
        q: "How does an engagement start?",
        a: "With a short diagnostic of your goals and current setup, followed by a clear scope and roadmap before any build work begins.",
      },
      {
        q: "Do you support what you deliver?",
        a: "Yes — support, maintenance and iteration are part of how we engage, not an afterthought.",
      },
    ],
  },
});

export const CATEGORY_LABEL: Record<Service["category"], string> = {
  Core: "Core services",
  Consulting: "Consulting",
  Technology: "Technology",
  Business: "Business",
  Marketing: "Marketing & media",
};

export const SERVICES: Service[] = [
  ...CORE_GROUPS.map((g) => toService(g, "Core")),
  toService(CONSULTING_GROUP, "Consulting"),
  ...TECHNOLOGY.map((g) => toService(g, "Technology")),
  ...BUSINESS.map((g) => toService(g, g.id === "marketing" ? "Marketing" : "Business")),
  ...MARKETING_GROUPS.map((g) => toService(g, "Marketing")),
];

export type Industry = {
  name: string;
  ideas: string;
  detail: string;
  focus: string[];
  image: string;
};

export const INDUSTRIES: Industry[] = [
  {
    name: "Agriculture",
    ideas: "Sensor monitoring, crop records, supply dashboards.",
    detail:
      "Agriculture decisions are made on ground reality that is rarely written down. We help frame where sensor data, field records and dashboards remove guesswork — from plot-level monitoring to supply-chain visibility.",
    focus: [
      "Sensor & IoT monitoring pilots",
      "Crop and plot records",
      "Supply & cold-chain dashboards",
      "Yield and cost tracking",
      "Market linkage platforms",
    ],
    image: agricultureImg,
  },
  {
    name: "Healthcare",
    ideas: "Appointment systems, records workflows, clinic dashboards.",
    detail:
      "Care runs on timing, records and trust. We map clinical and administrative workflows first, then identify where scheduling, records and dashboards reduce friction for staff and patients alike.",
    focus: [
      "Appointment & queue systems",
      "Patient records workflows",
      "Clinic operations dashboards",
      "Pharmacy & lab inventory",
      "Patient communication tools",
    ],
    image: healthcareImg,
  },
  {
    name: "Education",
    ideas: "School management, fees, attendance, learning portals.",
    detail:
      "Institutions juggle students, staff, fees and communication every day. We help consolidate scattered registers into systems that keep administrators, teachers and parents working from one source of truth.",
    focus: [
      "School & coaching management",
      "Fees, attendance & records",
      "Learning portals & content",
      "Library & member systems",
      "Parent communication",
    ],
    image: educationImg,
  },
  {
    name: "Finance",
    ideas: "Reporting, data pipelines, customer management tools.",
    detail:
      "Financial work rewards precision and auditability. We help design data pipelines, reporting and customer-facing tools where correctness and traceability are non-negotiable.",
    focus: [
      "Reporting & MIS dashboards",
      "Data pipelines & reconciliation",
      "Customer & KYC records",
      "Lending & portfolio trackers",
      "Process automation",
    ],
    image: financeImg,
  },
  {
    name: "Retail",
    ideas: "Billing, inventory, loyalty and customer records.",
    detail:
      "Every counter, shelf and customer interaction generates data — most of it unused. We help retailers capture billing, inventory and loyalty information in systems staff will actually use.",
    focus: [
      "Billing & POS workflows",
      "Inventory & stock alerts",
      "Loyalty & customer records",
      "Multi-store reporting",
      "Supplier & purchase tracking",
    ],
    image: retailImg,
  },
  {
    name: "E-commerce",
    ideas: "Storefronts, order management, analytics.",
    detail:
      "Selling online is an operations problem as much as a storefront. We help structure catalogues, orders and analytics so the business can see what is happening and act quickly.",
    focus: [
      "Storefront & catalogue builds",
      "Order & fulfilment management",
      "Payment & shipping integrations",
      "Analytics & conversion tracking",
      "Customer support tooling",
    ],
    image: ecommerceImg,
  },
  {
    name: "Logistics",
    ideas: "Tracking integrations, fleet records, operations boards.",
    detail:
      "Movement creates blind spots — vehicles, shipments, handoffs. We help design tracking integrations and operations boards that make status visible to everyone who needs it.",
    focus: [
      "Shipment & fleet tracking",
      "Operations status boards",
      "Route & delivery records",
      "Partner / 3PL integrations",
      "Proof-of-delivery workflows",
    ],
    image: logisticsImg,
  },
  {
    name: "Manufacturing",
    ideas: "Production records, IoT monitoring, stock alerts.",
    detail:
      "Factory decisions are only as good as their records. We help digitise production, stock and maintenance data so planning stops relying on whiteboards and memory.",
    focus: [
      "Production & batch records",
      "IoT / machine monitoring pilots",
      "Stock & material alerts",
      "Maintenance scheduling",
      "Shift & output dashboards",
    ],
    image: manufacturingImg,
  },
  {
    name: "Real Estate",
    ideas: "Listing sites, lead CRM, property records.",
    detail:
      "Property businesses live on listings, leads and documentation. We help organise all three into systems that keep site visits, negotiations and paperwork moving.",
    focus: [
      "Listing websites & portals",
      "Lead CRM & follow-up tracking",
      "Property & document records",
      "Broker / channel management",
      "Site-visit scheduling",
    ],
    image: realEstateImg,
  },
  {
    name: "Professional Services",
    ideas: "Client portals, documents, workflow automation.",
    detail:
      "Firms sell expertise, but run on documents, approvals and time. We help digitise the back office so more effort goes to clients and less to chasing files.",
    focus: [
      "Client portals & collaboration",
      "Document & knowledge management",
      "Approval & task workflows",
      "Time & engagement tracking",
      "Internal process automation",
    ],
    image: professionalServicesImg,
  },
  {
    name: "Startups",
    ideas: "MVPs, product planning, cloud foundations.",
    detail:
      "Early decisions compound. We help founders pressure-test scope, pick a buildable MVP slice and set up cloud foundations that won't need rework after the first customers arrive.",
    focus: [
      "MVP scoping & build",
      "Product & roadmap planning",
      "Cloud architecture foundations",
      "AI feature feasibility",
      "Investor-ready demos",
    ],
    image: startupsImg,
  },
  {
    name: "Small Businesses",
    ideas: "Websites, billing, simple everyday software.",
    detail:
      "Simple software, done properly, beats complex tools nobody uses. We help small businesses get a credible web presence, billing and everyday records working without overhead.",
    focus: [
      "Websites & local presence",
      "Billing & simple accounting",
      "Customer & supplier records",
      "Communication workflows",
      "Everyday admin automation",
    ],
    image: smallBusinessImg,
  },
  {
    name: "Technology Businesses",
    ideas: "APIs, integrations, AI features, DevOps.",
    detail:
      "Technology companies feel scaling pain in integrations, APIs and delivery speed. We help extend platforms, add AI capability and harden the plumbing behind the product.",
    focus: [
      "API design & integrations",
      "AI feature development",
      "DevOps & cloud efficiency",
      "Internal tooling & dashboards",
      "Technical architecture reviews",
    ],
    image: technologyBusinessImg,
  },
];

/** Choices in the contact form: the core services first, then the catch-all. */
export const CONTACT_NEEDS = [
  ...CORE_SERVICES.map((service) => service.label),
  "Marketing & media",
  "Something completely new",
] as const;

/** Lets other parts of the contact page fill in the form's "what do you need" choice. */
export const NEED_EVENT = "zaqsa:need";

export const NEEDS = [
  "Website",
  "Mobile App",
  "AI Solution",
  "Business Software",
  "CRM",
  "E-commerce",
  "Automation",
  "Data Dashboard",
  "Education System",
  "Management System",
  "Digital Marketing",
  "Industry Solution",
  "Something Completely New",
];

export const STACK_ROWS = [
  [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Flutter",
    "React Native",
    "Android",
    "iOS",
    "PWA",
  ],
  [
    "Node.js",
    "Python",
    "Java",
    "FastAPI",
    "Django",
    "REST APIs",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
  ],
  ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Linux", "Nginx", "Monitoring"],
  [
    "Machine Learning",
    "Generative AI",
    "NLP",
    "Computer Vision",
    "Power BI",
    "Data Pipelines",
    "ESP32",
    "MQTT",
    "IoT Dashboards",
  ],
] as const;

export const TECH_RIBBON = [
  "Software",
  "AI & ML",
  "Cloud",
  "Mobile",
  "Data",
  "DevOps",
  "IoT",
  "Automation",
] as const;

export const JOURNEY_STEPS = [
  "Discover",
  "Understand",
  "Discuss",
  "Plan",
  "Build",
  "Test",
  "Improve",
  "Deploy",
  "Support",
  "Evolve",
] as const;

/**
 * People shown as cards on the About page. To add a teammate, add an entry here and drop a photo
 * named after its slot (for example `team-priya.webp`) into src/assets/photos.
 */
export const TEAM: {
  name: string;
  role: string;
  slot: `team-${string}`;
  group: "founder" | "engineer";
}[] = [
  { name: "Amit Kumar Singh (Drona)", role: "Founder", slot: "team-drona", group: "founder" },
  { name: COMPANY.founder, role: COMPANY.role, slot: "team-founder", group: "founder" },
  { name: "Nishi Kumari", role: "Software Engineer", slot: "team-nishi", group: "engineer" },
  {
    name: "Surajit Sadhukhan",
    role: "Software Engineer",
    slot: "team-surajit",
    group: "engineer",
  },
];
