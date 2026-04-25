"use client";

import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Cpu,
  CreditCard,
  Globe,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const highlights: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Curated AI-ready marketplace",
    description:
      "Handpicked APIs with verified uptime, pricing clarity, and agent-ready docs.",
    icon: Sparkles,
  },
  {
    title: "Instant discovery + comparison",
    description:
      "Search, filter, and compare the Top 100 APIs across emerging categories.",
    icon: Search,
  },
  {
    title: "Security and compliance insights",
    description:
      "Know the auth methods, data policies, and SLAs before you integrate.",
    icon: ShieldCheck,
  },
];

const apiCategories = [
  "AI/LLM",
  "FinTech",
  "DevTools",
  "Security",
  "Communication",
] as const;

type ApiCategory = (typeof apiCategories)[number];

type ApiEntry = {
  name: string;
  category: ApiCategory;
  description: string;
};

const categories: Array<{
  title: ApiCategory;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "AI/LLM",
    description: "Frontier LLMs, multimodal inference, and agent platforms.",
    icon: Cpu,
  },
  {
    title: "FinTech",
    description: "Payments, banking, fraud, and financial data rails.",
    icon: CreditCard,
  },
  {
    title: "DevTools",
    description: "Infrastructure, observability, and productivity APIs.",
    icon: Cloud,
  },
  {
    title: "Security",
    description: "Identity, compliance, and threat detection tooling.",
    icon: ShieldCheck,
  },
  {
    title: "Communication",
    description: "Messaging, voice, email, and engagement APIs.",
    icon: Globe,
  },
];

const metrics = [
  { value: "100", label: "Top APIs in the 2026 directory" },
  { value: "5", label: "Core categories covered" },
  { value: "24/7", label: "Signal monitoring for updates" },
];

const aiApis: ApiEntry[] = [
  {
    name: "OpenAI",
    category: "AI/LLM",
    description: "Frontier LLMs and reasoning APIs for text, vision, and agents.",
  },
  {
    name: "Anthropic",
    category: "AI/LLM",
    description: "Safety-focused Claude models for conversational tool use.",
  },
  {
    name: "Google Gemini",
    category: "AI/LLM",
    description: "Multimodal Gemini models with long context and tools.",
  },
  {
    name: "Mistral AI",
    category: "AI/LLM",
    description: "Open and commercial LLMs optimized for fast inference.",
  },
  {
    name: "Cohere",
    category: "AI/LLM",
    description: "Enterprise-grade LLMs for search, RAG, and workflows.",
  },
  {
    name: "Hugging Face",
    category: "AI/LLM",
    description: "Model hosting and inference APIs for open-source LLMs.",
  },
  {
    name: "Perplexity",
    category: "AI/LLM",
    description: "Answer engine APIs blending search with LLM reasoning.",
  },
  {
    name: "Together AI",
    category: "AI/LLM",
    description: "High-throughput inference for open models and tuning.",
  },
  {
    name: "Groq",
    category: "AI/LLM",
    description: "Ultra-low-latency LLM inference on LPU hardware.",
  },
  {
    name: "Fireworks AI",
    category: "AI/LLM",
    description: "Serverless LLM inference and fine-tuning for open models.",
  },
  {
    name: "Stability AI",
    category: "AI/LLM",
    description: "Generative image, video, and audio model APIs.",
  },
  {
    name: "Replicate",
    category: "AI/LLM",
    description: "Hosted inference for thousands of open-source models.",
  },
  {
    name: "Runway",
    category: "AI/LLM",
    description: "Video generation and editing APIs for creative workflows.",
  },
  {
    name: "ElevenLabs",
    category: "AI/LLM",
    description: "High-fidelity text-to-speech and voice cloning APIs.",
  },
  {
    name: "AssemblyAI",
    category: "AI/LLM",
    description: "Speech-to-text and audio intelligence APIs.",
  },
  {
    name: "Deepgram",
    category: "AI/LLM",
    description: "Real-time speech recognition and audio understanding APIs.",
  },
  {
    name: "Adept",
    category: "AI/LLM",
    description: "Agentic model APIs for task execution across apps.",
  },
  {
    name: "Character.AI",
    category: "AI/LLM",
    description: "Conversational character APIs for interactive agents.",
  },
  {
    name: "Reka AI",
    category: "AI/LLM",
    description: "Research-grade multimodal LLM APIs for enterprise use.",
  },
  {
    name: "xAI",
    category: "AI/LLM",
    description: "Grok models for real-time reasoning and analysis.",
  },
];

const fintechApis: ApiEntry[] = [
  {
    name: "Stripe",
    category: "FinTech",
    description: "Payments, billing, and treasury APIs for internet businesses.",
  },
  {
    name: "Plaid",
    category: "FinTech",
    description: "Bank account connectivity and financial data APIs.",
  },
  {
    name: "Adyen",
    category: "FinTech",
    description: "Global payment processing and risk management APIs.",
  },
  {
    name: "Checkout.com",
    category: "FinTech",
    description: "Unified payments and fraud tooling with global coverage.",
  },
  {
    name: "PayPal",
    category: "FinTech",
    description: "Digital wallet, checkout, and payout APIs.",
  },
  {
    name: "Braintree",
    category: "FinTech",
    description: "Flexible payment gateway APIs for web and mobile.",
  },
  {
    name: "Square",
    category: "FinTech",
    description: "Point-of-sale and payment APIs for omnichannel commerce.",
  },
  {
    name: "Wise",
    category: "FinTech",
    description: "International transfer and FX APIs.",
  },
  {
    name: "Ramp",
    category: "FinTech",
    description: "Corporate card and spend management APIs.",
  },
  {
    name: "Brex",
    category: "FinTech",
    description: "Expense management and card issuance APIs.",
  },
  {
    name: "Mercury",
    category: "FinTech",
    description: "Business banking APIs designed for startups.",
  },
  {
    name: "Marqeta",
    category: "FinTech",
    description: "Card issuing and payment processing APIs.",
  },
  {
    name: "Alloy",
    category: "FinTech",
    description: "Identity verification and compliance orchestration APIs.",
  },
  {
    name: "Tink",
    category: "FinTech",
    description: "Open banking connectivity and payments APIs.",
  },
  {
    name: "Finicity",
    category: "FinTech",
    description: "Consumer financial data access APIs.",
  },
  {
    name: "Unit",
    category: "FinTech",
    description: "Embedded banking and card issuing APIs.",
  },
  {
    name: "Lithic",
    category: "FinTech",
    description: "Card issuing and transaction controls APIs.",
  },
  {
    name: "Moov",
    category: "FinTech",
    description: "Money movement and payout infrastructure APIs.",
  },
  {
    name: "Sila",
    category: "FinTech",
    description: "ACH payments and identity compliance APIs.",
  },
  {
    name: "Sardine",
    category: "FinTech",
    description: "Fraud prevention and risk scoring APIs.",
  },
];

const devtoolApis: ApiEntry[] = [
  {
    name: "Supabase",
    category: "DevTools",
    description: "Postgres database, auth, and storage APIs for builders.",
  },
  {
    name: "Vercel",
    category: "DevTools",
    description: "Frontend deployment, edge, and analytics APIs.",
  },
  {
    name: "Netlify",
    category: "DevTools",
    description: "Web hosting, functions, and build automation APIs.",
  },
  {
    name: "Render",
    category: "DevTools",
    description: "Managed cloud deploys for services and databases.",
  },
  {
    name: "Fly.io",
    category: "DevTools",
    description: "Global app deployment with edge region APIs.",
  },
  {
    name: "Railway",
    category: "DevTools",
    description: "Instant infrastructure and environment management APIs.",
  },
  {
    name: "PlanetScale",
    category: "DevTools",
    description: "Serverless MySQL platform and branching APIs.",
  },
  {
    name: "Neon",
    category: "DevTools",
    description: "Serverless Postgres with branching and autoscale APIs.",
  },
  {
    name: "Aiven",
    category: "DevTools",
    description: "Managed open-source data services APIs.",
  },
  {
    name: "Postman",
    category: "DevTools",
    description: "API testing, monitoring, and collaboration APIs.",
  },
  {
    name: "Sentry",
    category: "DevTools",
    description: "Error tracking and performance monitoring APIs.",
  },
  {
    name: "Datadog",
    category: "DevTools",
    description: "Observability and metrics ingestion APIs.",
  },
  {
    name: "New Relic",
    category: "DevTools",
    description: "APM, logs, and telemetry APIs.",
  },
  {
    name: "GitHub",
    category: "DevTools",
    description: "Code hosting, automation, and webhook APIs.",
  },
  {
    name: "GitLab",
    category: "DevTools",
    description: "CI/CD, repo, and DevSecOps APIs.",
  },
  {
    name: "Docker",
    category: "DevTools",
    description: "Container registry and build automation APIs.",
  },
  {
    name: "Hasura",
    category: "DevTools",
    description: "Instant GraphQL APIs on top of databases.",
  },
  {
    name: "Prisma",
    category: "DevTools",
    description: "Database toolkit and type-safe ORM APIs.",
  },
  {
    name: "Temporal",
    category: "DevTools",
    description: "Durable workflow orchestration APIs.",
  },
  {
    name: "LaunchDarkly",
    category: "DevTools",
    description: "Feature flagging and experimentation APIs.",
  },
];

const securityApis: ApiEntry[] = [
  {
    name: "Okta",
    category: "Security",
    description: "Identity, SSO, and access management APIs.",
  },
  {
    name: "Auth0",
    category: "Security",
    description: "Developer-friendly authentication and authorization APIs.",
  },
  {
    name: "Cloudflare",
    category: "Security",
    description: "Edge security, WAF, and bot management APIs.",
  },
  {
    name: "Snyk",
    category: "Security",
    description: "Developer security and dependency scanning APIs.",
  },
  {
    name: "Wiz",
    category: "Security",
    description: "Cloud security posture and risk prioritization APIs.",
  },
  {
    name: "Orca Security",
    category: "Security",
    description: "Agentless cloud workload protection APIs.",
  },
  {
    name: "Lacework",
    category: "Security",
    description: "Behavioral threat detection and compliance APIs.",
  },
  {
    name: "SentinelOne",
    category: "Security",
    description: "Endpoint protection and automated response APIs.",
  },
  {
    name: "CrowdStrike",
    category: "Security",
    description: "Threat intelligence and endpoint security APIs.",
  },
  {
    name: "Fortinet",
    category: "Security",
    description: "Network security and firewall management APIs.",
  },
  {
    name: "Check Point",
    category: "Security",
    description: "Enterprise security management and threat prevention APIs.",
  },
  {
    name: "Zscaler",
    category: "Security",
    description: "Zero trust network access and security APIs.",
  },
  {
    name: "1Password",
    category: "Security",
    description: "Secrets management and password vault APIs.",
  },
  {
    name: "Bitwarden",
    category: "Security",
    description: "Open-source password management APIs.",
  },
  {
    name: "JumpCloud",
    category: "Security",
    description: "Directory, device, and identity management APIs.",
  },
  {
    name: "Vanta",
    category: "Security",
    description: "Automated compliance and audit readiness APIs.",
  },
  {
    name: "Drata",
    category: "Security",
    description: "Continuous compliance monitoring APIs.",
  },
  {
    name: "Secureframe",
    category: "Security",
    description: "Compliance automation and evidence collection APIs.",
  },
  {
    name: "Imperva",
    category: "Security",
    description: "Application security and data protection APIs.",
  },
  {
    name: "Abnormal Security",
    category: "Security",
    description: "Email security and phishing defense APIs.",
  },
];

const communicationApis: ApiEntry[] = [
  {
    name: "Twilio",
    category: "Communication",
    description: "Messaging, voice, and video APIs for engagement.",
  },
  {
    name: "SendGrid",
    category: "Communication",
    description: "Transactional and marketing email delivery APIs.",
  },
  {
    name: "Vonage",
    category: "Communication",
    description: "Voice, SMS, and programmable communications APIs.",
  },
  {
    name: "MessageBird",
    category: "Communication",
    description: "Omnichannel messaging and engagement APIs.",
  },
  {
    name: "Telnyx",
    category: "Communication",
    description: "Programmable voice, SMS, and carrier APIs.",
  },
  {
    name: "Plivo",
    category: "Communication",
    description: "Voice and SMS APIs with global coverage.",
  },
  {
    name: "Sinch",
    category: "Communication",
    description: "Enterprise messaging and verification APIs.",
  },
  {
    name: "Bandwidth",
    category: "Communication",
    description: "Carrier-grade voice and messaging APIs.",
  },
  {
    name: "Infobip",
    category: "Communication",
    description: "Global messaging, chat, and email APIs.",
  },
  {
    name: "Slack",
    category: "Communication",
    description: "Team messaging and workflow automation APIs.",
  },
  {
    name: "Microsoft Teams",
    category: "Communication",
    description: "Collaboration and meeting integration APIs.",
  },
  {
    name: "Discord",
    category: "Communication",
    description: "Community messaging and bot APIs.",
  },
  {
    name: "Zoom",
    category: "Communication",
    description: "Video meetings and webinar APIs.",
  },
  {
    name: "Intercom",
    category: "Communication",
    description: "Customer support chat and automation APIs.",
  },
  {
    name: "Zendesk",
    category: "Communication",
    description: "Support ticketing and messaging APIs.",
  },
  {
    name: "Pusher",
    category: "Communication",
    description: "Realtime pub/sub and WebSocket APIs.",
  },
  {
    name: "Stream",
    category: "Communication",
    description: "Chat, activity feeds, and video APIs.",
  },
  {
    name: "OneSignal",
    category: "Communication",
    description: "Push notification and messaging APIs.",
  },
  {
    name: "Braze",
    category: "Communication",
    description: "Customer engagement and lifecycle messaging APIs.",
  },
  {
    name: "Brevo",
    category: "Communication",
    description: "Marketing automation and email APIs.",
  },
];

const apiDirectory: ApiEntry[] = [
  ...aiApis,
  ...fintechApis,
  ...devtoolApis,
  ...securityApis,
  ...communicationApis,
];

export default function Home() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredDirectory = useMemo(() => {
    if (!normalizedQuery) {
      return apiDirectory;
    }

    return apiDirectory.filter((entry) =>
      [entry.name, entry.category, entry.description].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    );
  }, [normalizedQuery]);
  const groupedDirectory = useMemo(
    () =>
      apiCategories.map((category) => ({
        category,
        items: filteredDirectory.filter((entry) => entry.category === category),
      })),
    [filteredDirectory],
  );

  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-50 border-b border-cyan-200/40 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 text-slate-950">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-3 text-sm font-semibold sm:flex-row sm:items-center sm:justify-between">
          <span>
            🚀 This premium domain is for sale! Acquire bestapis.app to build the
            future of AI Agents.
          </span>
          <a
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-slate-950/30 transition hover:bg-slate-900"
            href="#contact"
          >
            Contact to Buy
          </a>
        </div>
      </div>
      <header className="border-b border-white/10 bg-slate-950/40 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-200">
              <Sparkles className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                bestapis.app
              </p>
              <p className="text-sm text-slate-300">
                The App Store for AI Agents
              </p>
            </div>
          </div>
          <a
            className="hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-100 transition hover:border-cyan-300 hover:text-white md:inline-flex"
            href="mailto:hello@bestapis.app?subject=Early%20Access%20Request"
          >
            Request early access
          </a>
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 pb-24 pt-16">
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-72 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-3xl" />

        <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              <Zap className="h-4 w-4" />
              Top 100 APIs of 2026
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                The premium marketplace for{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  AI agent builders
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-slate-300">
                bestapis.app curates the most reliable APIs across AI/LLM,
                fintech, devtools, security, and communication—so you can ship
                agentic products faster with total confidence.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#directory"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300"
              >
                Explore the directory
              </a>
              <a
                href="mailto:hello@bestapis.app?subject=List%20my%20API"
                className="inline-flex items-center justify-center rounded-full border border-slate-700/80 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-200"
              >
                List your API
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-2xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p>{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-lg shadow-cyan-500/10 backdrop-blur">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                Search the marketplace
              </h2>
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                live
              </span>
            </div>
            <div className="relative mt-5">
              <label htmlFor="api-search" className="sr-only">
                Search APIs
              </label>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                id="api-search"
                type="search"
                placeholder="Search by API name, category, or capability"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full rounded-2xl border border-slate-800/80 bg-slate-950/70 py-4 pl-12 pr-4 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
            <div className="mt-6 space-y-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="directory" className="space-y-10 scroll-mt-24">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                top 100 api directory
              </p>
              <h2 className="text-2xl font-semibold text-white">
                The 2026 API landscape at a glance
              </h2>
              <p className="max-w-2xl text-sm text-slate-300">
                Explore the most in-demand APIs across five critical categories.
                Filter by name, category, or capability to shortlist partners for
                your next AI-driven product.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 text-sm text-slate-400">
              <span>
                {normalizedQuery
                  ? `Showing ${filteredDirectory.length} of ${apiDirectory.length} APIs`
                  : `Showing all ${apiDirectory.length} APIs`}
              </span>
              <a
                className="text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                href="mailto:hello@bestapis.app?subject=Partnership%20Inquiry"
              >
                Become a partner →
              </a>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="group rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_20px_40px_rgba(8,47,73,0.35)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-200">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="space-y-10">
            {filteredDirectory.length === 0 ? (
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6 text-sm text-slate-300">
                No APIs match that search yet. Try a broader keyword.
              </div>
            ) : (
              groupedDirectory.map(({ category, items }) =>
                items.length ? (
                  <div key={category} className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold text-white">
                        {category}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                        {items.length} APIs
                      </span>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {items.map((entry) => (
                        <div
                          key={entry.name}
                          className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="text-lg font-semibold text-white">
                                {entry.name}
                              </h4>
                              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cyan-200/70">
                                {entry.category}
                              </p>
                            </div>
                          </div>
                          <p className="mt-3 text-sm text-slate-300">
                            {entry.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null,
              )
            )}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-cyan-400/30 bg-slate-900/60 p-8 shadow-[0_0_50px_rgba(34,211,238,0.12)] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              Launch agents faster with confidence
            </h2>
            <p className="text-sm text-slate-300">
              bestapis.app bundles benchmark data, pricing intelligence, and
              integration notes so your team can move from prototype to production
              without guesswork.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-cyan-200/70">
              <span>Verified uptime</span>
              <span>•</span>
              <span>Compliance snapshots</span>
              <span>•</span>
              <span>Agent playbooks</span>
            </div>
          </div>
          <div className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-cyan-200" />
              <div>
                <p className="font-semibold text-white">Built for teams</p>
                <p>
                  Designed for product teams building AI, fintech, and commerce
                  workflows with confidence.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="mt-1 h-5 w-5 text-cyan-200" />
              <div>
                <p className="font-semibold text-white">Global coverage</p>
                <p>
                  Coverage monitoring for latency, compliance, and data residency
                  requirements worldwide.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="mt-1 h-5 w-5 text-cyan-200" />
              <div>
                <p className="font-semibold text-white">Launch-ready signals</p>
                <p>
                  Weekly updates highlight new APIs, pricing changes, and platform
                  stability.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="grid scroll-mt-24 gap-8 rounded-3xl border border-slate-800/80 bg-slate-900/60 p-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
              Get in touch
            </p>
            <h2 className="text-2xl font-semibold text-white">Get in Touch</h2>
            <p className="text-sm text-slate-300">
              Interested in acquiring bestapis.app or listing your API? Share
              your details and we will respond within one business day.
            </p>
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 text-sm text-slate-300">
              Prefer email? Reach us at{" "}
              <a
                className="font-semibold text-cyan-200 hover:text-cyan-100"
                href="mailto:hello@bestapis.app"
              >
                hello@bestapis.app
              </a>
              .
            </div>
          </div>
          <form
            action="https://formsubmit.co/hello@bestapis.app"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_subject" value="bestapis.app inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Name
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Full name"
                  className="mt-2 w-full rounded-2xl border border-slate-800/80 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                />
              </label>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-2xl border border-slate-800/80 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                />
              </label>
            </div>
            <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Company
              <input
                name="company"
                type="text"
                placeholder="Company or product"
                className="mt-2 w-full rounded-2xl border border-slate-800/80 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Message
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Tell us what you are building or your acquisition goals."
                className="mt-2 w-full rounded-2xl border border-slate-800/80 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300"
            >
              Send message
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-white">bestapis.app</p>
            <p>The premium App Store for AI Agents.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            <a href="mailto:hello@bestapis.app?subject=Press%20Inquiry">
              Press
            </a>
            <a href="mailto:hello@bestapis.app?subject=Partnerships">
              Partnerships
            </a>
            <a href="mailto:hello@bestapis.app?subject=Investors">
              Investors
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
