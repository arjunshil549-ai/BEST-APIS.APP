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

const filters = ["All", "AI Models", "FinTech", "DevTools", "Data & Search"];

const apiCards: Array<{
  name: string;
  description: string;
  category: string;
  icon: LucideIcon;
}> = [
  {
    name: "OpenAI",
    description:
      "Frontier multimodal models and tooling for building intelligent agents at scale.",
    category: "AI Models",
    icon: Sparkles,
  },
  {
    name: "Anthropic",
    description:
      "Safety-first AI models with structured outputs and enterprise-grade governance.",
    category: "AI Models",
    icon: ShieldCheck,
  },
  {
    name: "Stripe",
    description:
      "Unified payments, billing, and revenue infrastructure for global internet businesses.",
    category: "FinTech",
    icon: CreditCard,
  },
  {
    name: "Plaid",
    description:
      "Connect financial data securely across accounts, transactions, and compliance APIs.",
    category: "FinTech",
    icon: Globe,
  },
  {
    name: "Supabase",
    description:
      "Open-source backend platform with realtime database, auth, and storage.",
    category: "DevTools",
    icon: Database,
  },
  {
    name: "Vercel",
    description:
      "Global edge platform for shipping AI-native web apps with instant previews.",
    category: "DevTools",
    icon: Cloud,
  },
  {
    name: "Pinecone",
    description:
      "High-performance vector database built for semantic search and RAG pipelines.",
    category: "Data & Search",
    icon: Cpu,
  },
  {
    name: "Algolia",
    description:
      "Lightning-fast search and discovery APIs for personalization at scale.",
    category: "Data & Search",
    icon: Zap,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-50 w-full border-b border-amber-200/30 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 text-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-6 py-3 text-center text-sm font-semibold sm:flex-row">
          <span>
            🚨 Premium Domain bestapis.app is for sale! Perfect for API aggregators.
          </span>
          <a
            className="inline-flex items-center gap-2 underline decoration-slate-900/40 underline-offset-4 transition hover:text-slate-800"
            href="mailto:hello@bestapis.app?subject=Domain%20Inquiry"
          >
            Click here to acquire/Contact Us
          </a>
        </div>
      </div>

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 pb-24 pt-16">
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-3xl" />

        <section className="relative flex flex-col gap-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            <Sparkles className="h-4 w-4" />
            The App Store for AI Agents - Top 100 APIs of 2026
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Discover the Top 100 APIs of 2026
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              The ultimate App Store for AI Agents. Find the perfect tools to build
              your next breakthrough product.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#directory"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300"
            >
              Explore APIs
            </a>
            <div className="text-sm text-slate-400">
              Curated across AI Models, FinTech, DevTools, and Data platforms.
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-lg shadow-cyan-500/5 backdrop-blur">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search 100 premium APIs"
              className="w-full rounded-2xl border border-slate-800/80 bg-slate-950/70 py-4 pl-12 pr-4 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className="rounded-full border border-slate-800/70 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-200"
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        <section id="directory" className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-white">Featured API Directory</h2>
            <span className="text-sm text-slate-400">
              100+ vetted APIs · Updated weekly
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {apiCards.map((api) => {
              const Icon = api.icon;
              return (
                <div
                  key={api.name}
                  className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_20px_40px_rgba(8,47,73,0.35)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-200">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{api.name}</h3>
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                        {api.category}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {api.description}
                  </p>
                  <span className="mt-6 inline-flex w-fit items-center rounded-full border border-slate-700/80 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-slate-300">
                    {api.category}
                  </span>
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-500/20 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-3xl border border-cyan-400/30 bg-slate-900/60 p-8 text-center shadow-[0_0_50px_rgba(34,211,238,0.12)]">
          <h2 className="text-2xl font-semibold text-white">
            Want to own bestapis.app and build the future of API directories?
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Secure the premium domain and launch the definitive marketplace for AI
            infrastructure.
          </p>
          <a
            className="mt-6 inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            href="mailto:hello@bestapis.app?subject=Buy%20bestapis.app"
          >
            Buy This Domain
          </a>
        </section>
      </main>
    </div>
  );
}
