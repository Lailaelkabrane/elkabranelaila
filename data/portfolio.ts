/**
 * ALL CONTENT LIVES HERE.
 * Edit this file to change what the site shows. No other file needs touching
 * for text, numbers, projects, skills, links or media.
 *
 * Items flagged `confirm: true` are best guesses: correct them, then delete the flag.
 */

/** Prefix for hosting under a sub path (set automatically by the GitHub workflow). */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const u = (p: string) => (p.startsWith("/") ? base + p : p);

/**
 * true  = the Master's degree and the final year project wording are shown.
 * false = Bac+3 only profile (the Master's disappears from the site).
 * Keeping it true is recommended: the 2026 internship has no explanation without it.
 */
const withMasters = false;

export const profile = {
  name: "Laila El Kabrane",
  photo: u("/images/laila.jpg"), // put a new photo in /public/images and change this path
  role: "Python Developer and Data Analyst",
  location: "Agadir, Morocco",
  school: withMasters
    ? "Master's in Data Analytics and AI, Ibn Zohr University"
    : "Licence in Data Analytics and AI, Ibn Zohr University",
  summary: withMasters
    ? "Python developer and data analyst with a Licence and a Master's in Data Analytics and AI. Builds APIs and web applications, cleans and analyses data, and shipped a production AI product during a final year internship at Smartovate."
    : "Python developer and data analyst with a Licence in Data Analytics and AI. Builds APIs and web applications, cleans and analyses data, and shipped an AI product during a 4 month internship at Smartovate.",
  openTo: ["Python Developer", "Data Analyst", "Full Stack Developer", "Related tech roles"],
  email: "lailaelkabrane@gmail.com",
  phone: "+212 615 997 291",
  linkedin: "https://www.linkedin.com/in/lailaelkabrane",
  github: "https://github.com/lailaelkabrane",
  oldPortfolio: "https://lailaelkabrane.github.io",
  cv: u("/Laila_El_Kabrane_CV.pdf"),
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Advanced" },
    { name: "French", level: "Advanced" },
  ],
};

/* ------------------------------------------------------------------ */
/* Overview (about me)                                                 */
/* ------------------------------------------------------------------ */

export const aboutKpis = [
  { label: "Years of study", value: withMasters ? "5" : "3", delta: withMasters ? "2021 to 2026" : "2021 to 2024" },
  { label: "Internships completed", value: "4", delta: "since 2022" },
  { label: "Projects built", value: "8", delta: "web, data and AI" },
  { label: "Tools and methods", value: "36", delta: "Python, web, data, AI" },
];

/** Self-assessed, 0 to 100. Adjust to your own view. */
export const languageRings = [
  { name: "Arabic", level: "Native", score: 100, color: "purple" as const },
  { name: "English", level: "Advanced", score: 88, color: "red" as const },
  { name: "French", level: "Advanced", score: 88, color: "cyan" as const },
];

export const aboutFacts = [
  { label: "Based in", value: "Agadir, Morocco" },
  { label: "Diplomas", value: withMasters ? "DUT, Licence, Master's" : "DUT and Licence" },
  { label: "Focus", value: "Python, data, web" },
  { label: "Languages", value: "3" },
  { label: "Status", value: "Open to work" },
];

/** How the path moved from websites to Python, data and AI. */
export const path = [
  { step: "Web development", tool: "WordPress, full stack" },
  { step: "Software engineering", tool: "DUT, Licence" },
  { step: "Data analysis", tool: "EDA, SQL, Power BI" },
  { step: "Python APIs and AI", tool: "FastAPI, RAG, fine-tuning" },
];

/* ------------------------------------------------------------------ */
/* Skills (grouped as on the CV)                                       */
/* ------------------------------------------------------------------ */

export const categoryColor: Record<string, "purple" | "red" | "cyan"> = {
  Backend: "purple",
  Web: "red",
  Data: "cyan",
  AI: "purple",
  "Cloud and Tools": "red",
};

export const categories = ["Backend", "Web", "Data", "AI", "Cloud and Tools"] as const;
export type Category = (typeof categories)[number];

export type Skill = { name: string; level: number; category: Category; note: string };

/** Levels are self-assessed (1 to 5): adjust them honestly. */
export const skills: Skill[] = [
  // Backend
  { name: "Python", level: 5, category: "Backend", note: "Main language across all projects" },
  { name: "FastAPI", level: 4, category: "Backend", note: "Production API for Subul IN and CV Booster" },
  { name: "Django", level: 3, category: "Backend", note: "Web applications" },
  { name: "REST APIs", level: 4, category: "Backend", note: "Design, integration and JWT authentication" },
  { name: "PostgreSQL and MySQL", level: 4, category: "Backend", note: "Relational databases" },
  { name: "Azure Cosmos DB", level: 3, category: "Backend", note: "NoSQL storage with TTL design" },
  { name: "Supabase", level: 3, category: "Backend", note: "Hosted PostgreSQL for the IoT project" },
  { name: "Java", level: 2, category: "Backend", note: "Coursework" },
  // Web
  { name: "HTML and CSS", level: 4, category: "Web", note: "Responsive pages" },
  { name: "JavaScript", level: 4, category: "Web", note: "Interactive front ends and browser extensions" },
  { name: "React", level: 3, category: "Web", note: "Admin dashboard for the IoT project" },
  { name: "Tailwind CSS", level: 3, category: "Web", note: "Styling the IoT dashboard" },
  { name: "WordPress and PHP", level: 4, category: "Web", note: "Custom websites and plugins" },
  { name: "Chrome extensions", level: 3, category: "Web", note: "Manifest V3 extension for Subul IN" },
  // Data
  { name: "SQL", level: 5, category: "Data", note: "Joins and window functions" },
  { name: "Pandas and NumPy", level: 5, category: "Data", note: "Cleaning and analysis" },
  { name: "Excel", level: 4, category: "Data", note: "Pivot tables, VLOOKUP and XLOOKUP" },
  { name: "Power BI", level: 3, category: "Data", note: "Dashboards and reporting" },
  { name: "Data visualisation", level: 4, category: "Data", note: "Matplotlib, Seaborn, Altair and Streamlit" },
  { name: "Scikit-learn", level: 4, category: "Data", note: "Clustering, PCA, modelling" },
  { name: "EDA and statistics", level: 4, category: "Data", note: "Descriptive statistics and insights" },
  { name: "PySpark and Hadoop", level: 3, category: "Data", note: "Big data ETL pipeline" },
  { name: "Web scraping", level: 4, category: "Data", note: "Apify, SerpAPI and Selenium" },
  // AI
  { name: "Prompt engineering", level: 4, category: "AI", note: "Task specific instructions and guardrails" },
  { name: "Azure OpenAI", level: 3, category: "AI", note: "Fine-tuning and evaluation of models" },
  { name: "RAG", level: 3, category: "AI", note: "Retrieval for assistants and recommendations" },
  { name: "LangGraph", level: 3, category: "AI", note: "Agentic workflow routing" },
  { name: "Hugging Face", level: 3, category: "AI", note: "Transformers, DistilBERT, Qwen" },
  { name: "OpenCV and MediaPipe", level: 3, category: "AI", note: "Real time hand tracking" },
  { name: "PyTorch and TensorFlow", level: 3, category: "AI", note: "CNN and LSTM models" },
  // Cloud and tools
  { name: "Git and GitHub", level: 4, category: "Cloud and Tools", note: "Version control and collaboration" },
  { name: "GitHub Actions", level: 3, category: "Cloud and Tools", note: "Automated build and deploy of this site" },
  { name: "Docker", level: 3, category: "Cloud and Tools", note: "Containerised deployments" },
  { name: "Azure App Service", level: 3, category: "Cloud and Tools", note: "Hosting the Subul IN backend" },
  { name: "Firebase", level: 3, category: "Cloud and Tools", note: "Hosting and authentication" },
  { name: "Cloudflare Workers", level: 3, category: "Cloud and Tools", note: "Serverless API for the IoT project" },
];

/* ------------------------------------------------------------------ */
/* Journey                                                             */
/* ------------------------------------------------------------------ */

export type TimelineItem = {
  title: string;
  org: string;
  place?: string;
  period: string;
  badge?: string;
  points?: string[];
  months?: number;
  short?: string;
};

export const studies: TimelineItem[] = [
  ...(withMasters
    ? [
        {
          title: "Master's in Data Analytics and AI",
          org: "Ibn Zohr University, Faculty of Sciences",
          place: "Agadir",
          period: "2024 to 2026",
          badge: "Bac+5, Excellence Track",
        },
      ]
    : []),
  {
    title: "Licence in Data Analytics and AI",
    org: "Ibn Zohr University, Faculty of Sciences",
    place: "Agadir",
    period: "2023 to 2024",
    badge: "Bac+3, Excellence Track",
  },
  {
    title: "DUT in Computer Engineering",
    org: "Higher School of Technology",
    place: "Agadir",
    period: "2021 to 2023",
    badge: "Bac+2",
  },
  {
    title: "Baccalaureate in Physical Sciences",
    org: "Physical Sciences stream",
    place: "Morocco",
    period: "2020 to 2021", // confirm the years and add the school name
    badge: "Bac",
  },
];

export const internships: TimelineItem[] = [
  {
    title: withMasters ? "Data and AI Engineer, Final Year Project" : "Data and AI Engineer Intern",
    org: "Smartovate",
    place: "Remote, London",
    period: "Feb to Jun 2026",
    months: 4,
    short: "Smartovate",
    points: ["Worked on the FastAPI backend and Chrome extension features of Subul IN, deployed on Azure", "Added RAG and LangGraph workflows, collected 10,000+ profiles with Python"],
  },
  {
    title: "Data Analyst Intern",
    org: "Smart Maint Company",
    place: "Remote, Casablanca",
    period: "Aug to Oct 2025",
    months: 3,
    short: "Smart Maint",
    points: ["Cleaned 10,000+ profiles down to 703 records with Python and Pandas", "K-means segmentation into 3 groups, report with recommendations"],
  },
  {
    title: "WordPress Developer, end of studies",
    org: "Tweadup Agency",
    place: "Agadir",
    period: "Apr to Jun 2023",
    months: 3,
    short: "Tweadup",
    points: ["Custom WordPress websites and plugins", "PHP, HTML, CSS and JavaScript in a team"],
  },
  {
    title: "Full Stack Developer Intern",
    org: "Al Ahd El Jadid Library",
    place: "Agadir",
    period: "Aug to Sep 2022",
    months: 2,
    short: "Library",
    points: ["Information system for the digital catalogue", "Database integration"],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type Color = "purple" | "cyan" | "red";

export type Chart =
  | {
      kind: "bars";
      title: string;
      sub?: string;
      series: { name: string; color: Color }[];
      groups: { label: string; values: number[] }[];
      max: number;
      ticks: number[];
      unit: string;
      span?: number;
    }
  | {
      kind: "donut";
      title: string;
      sub?: string;
      segments: { label: string; value: number; color: Color }[];
      centre?: { big: string; small: string };
      span?: number;
    };

export type Project = {
  slug: string;
  title: string;
  short: string;
  type: "Professional" | "Academic" | "Personal";
  cover: string;
  logo: string;
  tags: string[];
  highlights: string[];
  kpis: { label: string; value: string }[];
  pipeline: { step: string; tool: string }[];
  charts?: Chart[];
  stack: { layer: string; tool: string; use: string; confirm?: boolean }[];
  media: { type: "image" | "video"; src: string; caption: string; poster?: string }[];
};

const rawProjects: Project[] = [
  {
    slug: "subulin",
    title: "Subul IN",
    short: "Chrome extension with a FastAPI backend on Azure and fine-tuned AI models",
    type: "Professional",
    cover: "/projects/subulin/poster.jpg",
    logo: "/projects/subulin/logo.png",
    tags: ["Fine-tuning", "RAG", "LangGraph", "FastAPI", "Azure"],
    highlights: [
      "FastAPI backend with JWT authentication, deployed on Azure",
      "~99% request success rate in production",
      "Fine-tuned models: profile score +36.4% over the stock model",
    ],
    kpis: [
      { label: "Post writing time", value: "28 → 4 min" },
      { label: "Behavioural tests passed", value: "12 / 12" },
      { label: "Validation accuracy", value: "95.41%" },
      { label: "Request success rate", value: "~99%" },
    ],
    pipeline: [
      { step: "Collect", tool: "Apify, SerpAPI" },
      { step: "Curate", tool: "Gold, Silver, Bronze" },
      { step: "Fine-tune", tool: "Azure OpenAI" },
      { step: "Evaluate", tool: "Tests, LLM judge" },
      { step: "Deploy", tool: "FastAPI, Azure" },
    ],
    charts: [
      {
        kind: "bars",
        title: "Judge score by model",
        sub: "Out of 5, posts n=30, profiles n=50",
        series: [
          { name: "Stock", color: "red" },
          { name: "Fine-tuned", color: "purple" },
        ],
        groups: [
          { label: "Posts", values: [3.44, 4.33] },
          { label: "Profiles", values: [3.32, 4.53] },
        ],
        max: 5,
        ticks: [0, 1, 2, 3, 4, 5],
        unit: "/ 5",
        span: 4,
      },
      {
        kind: "bars",
        title: "Behavioural tests passed",
        sub: "Effect of data curation on posts",
        series: [
          { name: "V2 uncurated", color: "red" },
          { name: "V3 curated", color: "purple" },
        ],
        groups: [{ label: "Tests out of 12", values: [9, 12] }],
        max: 12,
        ticks: [0, 3, 6, 9, 12],
        unit: "/ 12",
        span: 4,
      },
      {
        kind: "donut",
        title: "Post data language mix",
        sub: "Approximate share of examples",
        segments: [
          { label: "English", value: 62, color: "purple" },
          { label: "French", value: 38, color: "red" },
        ],
        centre: { big: "62%", small: "English" },
        span: 4,
      },
    ],
    stack: [
      { layer: "Front end", tool: "Chrome extension (Manifest V3)", use: "Runs inside LinkedIn and reads the page with DOM scraping" },
      { layer: "Backend", tool: "FastAPI", use: "API behind the extension, JWT authentication" },
      { layer: "Hosting", tool: "Azure App Service", use: "Hosts the backend" },
      { layer: "Database", tool: "Azure Cosmos DB", use: "Users, sessions and cached results, with TTL" },
      { layer: "LLM", tool: "Azure OpenAI, GPT-4o-mini (fine-tuned)", use: "Generates posts and scores profiles" },
      { layer: "Orchestration", tool: "LangGraph", use: "Routes each request to the right AI feature" },
      { layer: "Embeddings", tool: "MiniLM-L12-v2", use: "Multilingual semantic matching of industries" },
      { layer: "Vector DB", tool: "Vector store for RAG", use: "Retrieval for the chat assistant", confirm: true },
      { layer: "Data", tool: "Apify, SerpAPI, Python", use: "Collected 10,000+ LinkedIn profiles for training" },
      { layer: "Data quality", tool: "Gold, Silver, Bronze curation", use: "Scored examples 0 to 3 and corrected weak ones" },
      { layer: "Evaluation", tool: "Behavioural tests, GPT-4o as judge", use: "Compared stock and fine-tuned models" },
    ],
    media: [
      { type: "video", src: "/projects/subulin/demo.mp4", poster: "/projects/subulin/poster.jpg", caption: "Live demo of the extension" },
    ],
  },
  {
    slug: "cv-booster",
    title: "CV Booster",
    short: "FastAPI tool that scores a CV on 8 ATS criteria and generates an improved DOCX",
    type: "Professional",
    cover: "/projects/cvbooster/4.jpg",
    logo: "/projects/cvbooster/logo.png",
    tags: ["FastAPI", "Azure OpenAI", "NLP", "ATS scoring"],
    highlights: ["Explains every lost point and the exact fix", "Pulls labs and certificates from the SUBUL platform", "Exports 3 DOCX styles"],
    kpis: [
      { label: "ATS score, example CV", value: "39 → 94" },
      { label: "Scoring criteria", value: "8" },
      { label: "Flow steps", value: "5" },
      { label: "Export formats", value: "3" },
    ],
    pipeline: [
      { step: "Import", tool: "PDF upload" },
      { step: "ATS score", tool: "8 criteria" },
      { step: "Enrich", tool: "SUBUL profile" },
      { step: "Boost", tool: "Azure OpenAI" },
      { step: "Result", tool: "DOCX export" },
    ],
    charts: [
      {
        kind: "bars",
        title: "ATS score before and after",
        sub: "Example CV, out of 100",
        series: [
          { name: "Before", color: "red" },
          { name: "After boost", color: "purple" },
        ],
        groups: [{ label: "ATS score", values: [39, 94] }],
        max: 100,
        ticks: [0, 25, 50, 75, 100],
        unit: "/ 100",
        span: 6,
      },
    ],
    stack: [
      { layer: "Backend", tool: "FastAPI", use: "API for each step of the flow" },
      { layer: "LLM", tool: "Azure OpenAI", use: "Explains scores and rewrites sections such as the summary" },
      { layer: "Scoring", tool: "Rule based ATS engine", use: "Scores sections, experience, contact, skills, length, keywords, languages", confirm: true },
      { layer: "Documents", tool: "DOCX generation (python-docx)", use: "Renders ATS, classic and modern templates", confirm: true },
      { layer: "Source data", tool: "SUBUL platform profile", use: "Labs, certifications and quiz score added to the CV" },
    ],
    media: [
      { type: "image", src: "/projects/cvbooster/1.jpg", caption: "Landing page" },
      { type: "image", src: "/projects/cvbooster/2.jpg", caption: "Initial ATS diagnosis" },
      { type: "image", src: "/projects/cvbooster/3.jpg", caption: "Enrichment from SUBUL" },
      { type: "image", src: "/projects/cvbooster/4.jpg", caption: "Before and after breakdown, 39 to 94" },
      { type: "image", src: "/projects/cvbooster/5.jpg", caption: "Explainable scoring" },
      { type: "image", src: "/projects/cvbooster/6.jpg", caption: "Boosted CV, ready to download" },
    ],
  },
  {
    slug: "jobmarket",
    title: "LinkedIn Profiles Analysis",
    short: "Python analysis of 10,000+ profiles, cleaned to 703 records and grouped into 3 segments",
    type: "Professional",
    cover: "/projects/jobmarket/3.jpg",
    logo: "/projects/jobmarket/logo.png",
    tags: ["Python", "Pandas", "K-means", "EDA"],
    highlights: [
      "Cleaned 10,000+ profiles down to 703 curated records",
      "English and French profiles analysed separately",
      "Report with recommendations for management",
    ],
    kpis: [
      { label: "Professional segments", value: "3" },
      { label: "Profile languages", value: "EN + FR" },
      { label: "Method", value: "K-means" },
    ],
    pipeline: [
      { step: "Collect", tool: "Apify, SerpAPI" },
      { step: "Clean", tool: "Pandas" },
      { step: "Split", tool: "EN and FR" },
      { step: "Explore", tool: "Statistics, charts" },
      { step: "Cluster", tool: "K-means" },
      { step: "Report", tool: "Recommendations" },
    ],
    stack: [
      { layer: "Collection", tool: "Apify, SerpAPI", use: "Pulled LinkedIn profiles of maintenance professionals" },
      { layer: "Cleaning", tool: "Pandas, NumPy", use: "Fixed fields, removed noise, split by language" },
      { layer: "Language split", tool: "Language detection", use: "Separated English and French profiles", confirm: true },
      { layer: "Visuals", tool: "Matplotlib, Seaborn", use: "Years distribution, frequent words, premium and verified share", confirm: true },
      { layer: "Clustering", tool: "Scikit-learn K-means", use: "Grouped profiles into 3 segments" },
      { layer: "Notebook", tool: "Jupyter", use: "Interactive analysis and exportable charts" },
    ],
    media: [
      { type: "image", src: "/projects/jobmarket/1.jpg", caption: "Years distribution and frequent words" },
      { type: "image", src: "/projects/jobmarket/2.jpg", caption: "Premium and verified users" },
      { type: "image", src: "/projects/jobmarket/3.jpg", caption: "Profiles by selected features" },
    ],
  },
  {
    slug: "cybermentor",
    title: "CyberMentor",
    short: "Detects cyber attacks in logs and recommends a defence",
    type: "Academic",
    cover: "/projects/cybermentor/cyberdash.jpg",
    logo: "/projects/cybermentor/logo.png",
    tags: ["NLP", "RAG", "Chroma", "Streamlit"],
    highlights: ["Recommendations aligned with MITRE ATT&CK", "Real time monitoring dashboard", "Containerised with Docker"],
    kpis: [
      { label: "Classifier", value: "DistilBERT" },
      { label: "Knowledge base", value: "MITRE ATT&CK" },
      { label: "LLM", value: "Qwen" },
    ],
    pipeline: [
      { step: "Logs", tool: "Raw text" },
      { step: "Preprocess", tool: "NLP cleaning" },
      { step: "Classify", tool: "DistilBERT" },
      { step: "Retrieve", tool: "Chroma, RAG" },
      { step: "Recommend", tool: "Qwen" },
      { step: "Display", tool: "Streamlit" },
    ],
    stack: [
      { layer: "Classifier", tool: "DistilBERT", use: "Labels the attack type from log text" },
      { layer: "LLM", tool: "Qwen (Hugging Face)", use: "Turns findings into readable guidance" },
      { layer: "Vector DB", tool: "Chroma", use: "Stores the MITRE ATT&CK knowledge for retrieval" },
      { layer: "Embeddings", tool: "Sentence embeddings", use: "Turns knowledge and queries into vectors", confirm: true },
      { layer: "Dashboard", tool: "Streamlit", use: "Monitoring and visual analytics" },
      { layer: "Deployment", tool: "Docker", use: "Containerised install" },
    ],
    media: [
      { type: "image", src: "/projects/cybermentor/cyberdash.jpg", caption: "Monitoring dashboard" },
      { type: "image", src: "/projects/cybermentor/analy.jpg", caption: "Log analysis and visualisation" },
      { type: "image", src: "/projects/cybermentor/ai.jpg", caption: "Recommendations for a detected attack" },
    ],
  },
  {
    slug: "predictenergy",
    title: "PredictEnergy-MA",
    short: "Forecasting electricity consumption in Morocco with a big data pipeline",
    type: "Academic",
    cover: "/projects/predictenergy/3.jpg",
    logo: "/projects/predictenergy/logo.png",
    tags: ["PySpark", "Hadoop", "Prophet", "LSTM"],
    highlights: ["World Bank energy and climate data", "Prophet compared with LSTM", "Live on Hugging Face Spaces"],
    kpis: [
      { label: "Years of data", value: "34" },
      { label: "Forecast models", value: "2" },
      { label: "Data layers", value: "4" },
    ],
    pipeline: [
      { step: "Raw", tool: "World Bank" },
      { step: "Bronze", tool: "PySpark" },
      { step: "Silver", tool: "PySpark" },
      { step: "Gold", tool: "Aggregates" },
      { step: "Forecast", tool: "Prophet, LSTM" },
      { step: "Dashboard", tool: "Streamlit" },
    ],
    stack: [
      { layer: "Data", tool: "World Bank energy and climate, 1990 to 2023", use: "Consumption, energy mix and climate inputs" },
      { layer: "Processing", tool: "PySpark", use: "Cleaning and aggregation across the layers" },
      { layer: "Storage", tool: "Hadoop HDFS", use: "Stores the layered datasets" },
      { layer: "Forecasting", tool: "Prophet", use: "Trend and seasonality baseline" },
      { layer: "Deep learning", tool: "LSTM (TensorFlow or Keras)", use: "Sequence model for future consumption", confirm: true },
      { layer: "Dashboard", tool: "Streamlit", use: "Actual versus predicted and error analysis" },
      { layer: "Deployment", tool: "Docker, Hugging Face Spaces", use: "Containerised and hosted live" },
    ],
    media: [
      { type: "image", src: "/projects/predictenergy/1.jpg", caption: "Actual versus predicted consumption" },
      { type: "image", src: "/projects/predictenergy/2.jpg", caption: "Residual error, LSTM and Prophet" },
      { type: "image", src: "/projects/predictenergy/3.jpg", caption: "Forecast of Morocco's consumption" },
    ],
  },
  {
    slug: "iot-security",
    title: "IoT Home Security",
    short: "Full stack IoT system: ESP32 sensors, Cloudflare Workers API, Supabase and a React dashboard",
    type: "Academic",
    cover: "/projects/iot-security/dash.jpg",
    logo: "/projects/iot-security/logo.png",
    tags: ["ESP32", "Cloudflare", "Supabase", "React"],
    highlights: ["Signed requests with HMAC SHA-256", "Admin login with email MFA", "Physical maquette built"],
    kpis: [
      { label: "Sensor types", value: "4" },
      { label: "Request signing", value: "HMAC" },
      { label: "Admin login", value: "MFA" },
    ],
    pipeline: [
      { step: "Sensors", tool: "Gas, flame, leak, RFID" },
      { step: "ESP32", tool: "JSON payload" },
      { step: "Worker", tool: "HMAC check" },
      { step: "Database", tool: "Supabase" },
      { step: "Dashboard", tool: "React" },
    ],
    stack: [
      { layer: "Device", tool: "ESP32 with sensors", use: "Gas, flame, water leakage and RFID readings" },
      { layer: "Edge API", tool: "Cloudflare Workers", use: "Verifies signature, authenticates device, validates data" },
      { layer: "Database", tool: "Supabase PostgreSQL", use: "Central cloud data layer" },
      { layer: "Dashboard", tool: "React, Vite, Tailwind CSS", use: "Real time admin monitoring" },
      { layer: "Auth and hosting", tool: "Firebase Authentication, Hosting", use: "Login with email MFA, hosts the dashboard" },
      { layer: "Secrets", tool: "Cloudflare Secrets", use: "Keeps credentials out of the code" },
    ],
    media: [
      { type: "image", src: "/projects/iot-security/maquette.jpg", caption: "Physical smart home maquette" },
      { type: "image", src: "/projects/iot-security/dash.jpg", caption: "Real time admin dashboard" },
      { type: "image", src: "/projects/iot-security/analy.jpg", caption: "Sensor data analysis" },
    ],
  },
  {
    slug: "artelle",
    title: "Artelle (AI Painter)",
    short: "Draw on a digital canvas with hand gestures, no mouse needed",
    type: "Academic",
    cover: "/projects/artelle/1.jpg",
    logo: "/projects/artelle/logo.png",
    tags: ["OpenCV", "MediaPipe", "Computer vision"],
    highlights: ["Colour and tool selection by gesture", "Hands free eraser", "Low latency, webcam only"],
    kpis: [
      { label: "Hand landmarks tracked", value: "21" },
      { label: "Latency", value: "Real time" },
      { label: "Hardware", value: "Webcam" },
    ],
    pipeline: [
      { step: "Webcam", tool: "Video frames" },
      { step: "Detect", tool: "MediaPipe" },
      { step: "Gesture", tool: "Finger logic" },
      { step: "Draw", tool: "OpenCV" },
      { step: "Canvas", tool: "Live render" },
    ],
    stack: [
      { layer: "Video", tool: "OpenCV", use: "Reads frames and renders the canvas" },
      { layer: "Hand tracking", tool: "MediaPipe Hands", use: "Detects 21 hand landmarks per frame" },
      { layer: "Gesture logic", tool: "Python", use: "Maps finger positions to draw, colour, tool and erase" },
    ],
    media: [
      { type: "image", src: "/projects/artelle/1.jpg", caption: "Hand tracking and virtual canvas" },
      { type: "image", src: "/projects/artelle/2.jpg", caption: "Gesture based tool selection" },
      { type: "image", src: "/projects/artelle/3.jpg", caption: "Hands free erasing" },
    ],
  },
  {
    slug: "reddit",
    title: "Reddit Sentiment Intelligence",
    short: "Live sentiment dashboard for Reddit communities and keywords",
    type: "Personal",
    cover: "/projects/reddit/reddit-dashboard.jpg",
    logo: "/projects/reddit/logo.png",
    tags: ["NLP", "Streamlit", "VADER", "Altair"],
    highlights: ["Fetch by keyword or subreddit, or upload a CSV", "Morocco keyword tracking", "Export CSV, JSON or PDF"],
    kpis: [
      { label: "Sentiment classes", value: "3" },
      { label: "Export formats", value: "3" },
      { label: "Data", value: "Live" },
    ],
    pipeline: [
      { step: "Fetch", tool: "Reddit API" },
      { step: "Clean", tool: "Pandas" },
      { step: "Score", tool: "VADER, TextBlob" },
      { step: "Visualise", tool: "Altair" },
      { step: "Export", tool: "CSV, JSON, PDF" },
    ],
    stack: [
      { layer: "Data", tool: "PRAW (Reddit API)", use: "Fetches posts by keyword or subreddit" },
      { layer: "Sentiment", tool: "NLTK VADER, TextBlob", use: "Labels positive, neutral or negative" },
      { layer: "Processing", tool: "Pandas", use: "In memory analysis and filters" },
      { layer: "Dashboard", tool: "Streamlit, Altair", use: "Trends, top posts and filters" },
      { layer: "Reports", tool: "FPDF", use: "Styled PDF export" },
    ],
    media: [
      { type: "image", src: "/projects/reddit/reddit-dashboard.jpg", caption: "Data source and analytics dashboard" },
      { type: "image", src: "/projects/reddit/reddit-analysis.jpg", caption: "Sentiment analysis and reports" },
      { type: "image", src: "/projects/reddit/reddit-comparison.jpg", caption: "Top content and engagement" },
    ],
  },
];

const order = ["subulin", "cv-booster", "iot-security", "jobmarket", "predictenergy", "reddit", "cybermentor", "artelle"];

export const projects: Project[] = [...rawProjects]
  .sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug))
  .map((p) => ({
  ...p,
  cover: u(p.cover),
  logo: u(p.logo),
  media: p.media.map((m) => ({ ...m, src: u(m.src), poster: m.poster ? u(m.poster) : undefined })),
}));
