import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Cpu,
  CreditCard,
  Database,
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

const categories: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "AI Models",
    description: "LLMs, multimodal reasoning, and autonomous agent runtimes.",
    icon: Cpu,
  },
  {
    title: "FinTech & Payments",
    description: "Payments, billing, fraud detection, and financial data rails.",
    icon: CreditCard,
  },
  {
    title: "DevTools",
    description: "Observability, deployment, and productivity APIs for teams.",
    icon: Cloud,
  },
  {
    title: "Data & Search",
    description: "Vector databases, search, analytics, and AI-ready pipelines.",
    icon: Database,
  },
  {
    title: "Global Infrastructure",
    description: "Edge compute, geo routing, and performance acceleration.",
    icon: Globe,
  },
  {
    title: "Security & Trust",
    description: "Compliance tooling, identity, and AI governance platforms.",
    icon: ShieldCheck,
  },
];

const metrics = [
  { value: "100+", label: "Premium APIs curated" },
  { value: "42k", label: "Agent builders on waitlist" },
  { value: "5 min", label: "Average onboarding time" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
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
                bestapis.app curates the most reliable APIs across AI models,
                fintech, devtools, and data infrastructure—so you can ship agentic
                products faster with total confidence.
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
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Search by API name, category, or capability"
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

        <section id="directory" className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                premium categories
              </p>
              <h2 className="text-2xl font-semibold text-white">
                Built for modern AI product teams
              </h2>
            </div>
            <a
              className="text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
              href="mailto:hello@bestapis.app?subject=Partnership%20Inquiry"
            >
              Become a partner →
            </a>
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
                <p className="font-semibold text-white">Trusted by teams</p>
                <p>
                  Enterprise teams rely on our curation to power AI products in
                  healthcare, fintech, and commerce.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="mt-1 h-5 w-5 text-cyan-200" />
              <div>
                <p className="font-semibold text-white">Global coverage</p>
                <p>
                  60+ regions monitored for latency, compliance, and data
                  residency requirements.
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
