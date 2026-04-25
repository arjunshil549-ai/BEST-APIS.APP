import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </div>

      <div className="relative w-full max-w-2xl rounded-3xl border border-slate-800/80 bg-slate-950/60 p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,0.55)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300/80">
          404 · Not Found
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          Lost in the API universe
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
          The route you requested drifted off the grid. Return to the App Store
          and continue discovering the top APIs powering the next wave of AI
          products.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300"
          >
            Return to App Store
          </Link>
          <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
            bestapis.app
          </span>
        </div>
      </div>
    </div>
  );
}
