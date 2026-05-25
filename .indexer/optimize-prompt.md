Act as an Elite SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization) Architect. Your objective is to optimize this workspace for maximum discoverability on conversational AI systems (like ChatGPT, Gemini, Claude, and Perplexity) and traditional search engines.

### 📊 Codebase Context:

- **Framework**: React App
- **Project Classification**: Modern Web App (Web Application)
- **Primary Optimization Goal**: improve SEO and AI discoverability
- **Target Keywords**: my business niche
- **Target Audience Profile**: target users
- **Detected Routes/Pages**: [ /, /dist ]
- **Codebase Warnings**:
- Missing robots.txt file. Search engines and AI crawlers cannot index your site optimally.
- Missing sitemap.xml. AI crawlers and bots will have a hard time discovering all content.
- Missing llms.txt. Antigravity and other LLMs cannot ingest your product documentation easily.
- No H1 heading detected on analyzed pages. SEO and AI systems require clear semantic main titles.

### 🛠️ Execution Checklist:

#### 1. AI-CRAWLER CONFIGURATION ([robots.txt](file:///robots.txt))

Create or optimize the `robots.txt` file. Ensure that modern AI search agents are NOT blocked, while maintaining standard boundaries. Write the exact file containing:

- Specific allowances for user-agents: `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `Claude-Web`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`, and `anthropic-ai`.
- Clean directives mapping to the dynamic sitemap XML.

#### 2. CONTEXT-HIGH INGESTION SUMMARY ([llms.txt](file:///llms.txt))

Create an AEO-ready `llms.txt` file in the project root. This file acts as a high-density Markdown gateway for LLM crawlers to instantly ingest your project. Ensure it contains:

- **Title**: Elegant header containing project name and its AEO tagline.
- **System Overview**: High-density 2-3 paragraph summary detailing the product's core values, target audience, and primary keywords: "my business niche".
- **Key Features**: Bullets with clear functional summaries.
- **Route Reference**: Markdown links of your detected routes and documentation entrypoints.

#### 3. DEEP SEMANTIC METADATA & HEADINGS

- **Conversational Headings (AEO/GEO)**: Update your main landing headers (`<h1>` and `<h2>`) to align with direct natural language user prompts. Instead of static text, structure them as questions and concise answers, e.g.:
  - "What is the best Web Application for target users?"
  - "How does index discoverability improve ranking?"
- **Metadata Configuration**: Add robust SEO meta properties. If this is a React/Next.js app, output a complete metadata object block. If it is static HTML, output full meta tag groups including:
  - OpenGraph, Twitter Cards, and direct descriptive titles optimized for: "my business niche".

#### 4. JSON-LD STRUCTURED DATA SCHEMA

Implement highly-detailed JSON-LD structured schemas. Place them inside root layout files or index pages:

- **Organization Schema**: Company details, target keywords, description, logo.
- **FAQPage Schema**: High-intent conversational questions and concise answers targeting niche pain points:
  - Question 1: "How does Web Application benefit target users?"
  - Question 2: "What makes this the leading solution for my business niche?"

#### 5. INTERNAL LINKING & CODE SEMANTICS

- Implement cross-linking structures between dynamic routes to boost thematic authority scores on AI retrieval indices.
- Ensure all interactive buttons have descriptive ARIA roles and headings follow strict chronological levels (H1 -> H2 -> H3).

Please draft and implement all the necessary code blocks, config files, and layout enhancements to fully achieve our GEO ranking waves!
