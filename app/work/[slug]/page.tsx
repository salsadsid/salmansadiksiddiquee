import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Reveal } from "@/components/reveal";
import { caseStudies } from "@/lib/data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.name} case study`,
    description: `${cs.tagline} ${cs.role} · ${cs.period}.`,
  };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="eyebrow !text-primary mb-6 flex items-center gap-3">
      <span className="h-px w-6 bg-primary/60" aria-hidden />
      {children}
    </h2>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const index = caseStudies.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();

  const cs = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="mx-auto max-w-6xl px-6 lg:px-8 pt-32 pb-24">
        {/* Header */}
        <Reveal>
          <Link
            href="/#work"
            className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            All work
          </Link>

          <p className="eyebrow mt-10">Case study {cs.order}</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-balance leading-[1.08]">
            {cs.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed text-balance">
            {cs.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <span className="text-foreground/85">{cs.role}</span>
            <span>{cs.company}</span>
            <span>{cs.period}</span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {cs.stack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-border px-2.5 py-1 font-mono text-[0.6875rem] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Headline metrics */}
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 border border-border rounded-lg overflow-hidden">
            {cs.headlineMetrics.map((m, i) => (
              <div
                key={m.label}
                className={`p-5 ${i % 2 === 1 ? "border-l border-border" : ""} ${
                  i >= 2 ? "border-t lg:border-t-0 border-border" : ""
                } ${i >= 1 ? "lg:border-l lg:border-border" : ""}`}
              >
                <div className="font-mono text-2xl sm:text-[1.75rem] font-medium tracking-tight tabular-nums">
                  {m.value}
                </div>
                <div className="mt-1 text-xs text-foreground/80">{m.label}</div>
                {m.detail && (
                  <div className="mt-0.5 text-[0.6875rem] text-muted-foreground">
                    {m.detail}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Attribution */}
        {cs.attribution && (
          <Reveal>
            <p className="mt-8 max-w-3xl border-l-2 border-primary/50 pl-4 text-sm text-muted-foreground leading-relaxed">
              {cs.attribution}
            </p>
          </Reveal>
        )}

        {/* Context */}
        <Reveal>
          <div className="mt-20 max-w-3xl">
            <SectionLabel>Context</SectionLabel>
            <div className="space-y-5">
              {cs.context.map((p) => (
                <p key={p.slice(0, 32)} className="text-[0.9375rem] sm:text-base text-foreground/85 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        {/* What I built */}
        <div className="mt-20 max-w-3xl">
          <Reveal>
            <SectionLabel>What I built</SectionLabel>
          </Reveal>
          <div>
            {cs.sections.map((section) => (
              <Reveal key={section.heading}>
                <div className="border-t border-border py-8">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {section.heading}
                  </h3>
                  {section.body && (
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {section.body}
                    </p>
                  )}
                  {section.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet.slice(0, 32)}
                          className="flex gap-3 text-sm text-foreground/85 leading-relaxed"
                        >
                          <span
                            aria-hidden
                            className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-primary/70"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Decisions */}
        <div className="mt-20 max-w-3xl">
          <Reveal>
            <SectionLabel>Decisions &amp; trade-offs</SectionLabel>
          </Reveal>
          <div className="space-y-4">
            {cs.decisions.map((d) => (
              <Reveal key={d.title}>
                <div className="rounded-lg border border-border bg-card/50 p-6">
                  <h3 className="text-[0.9375rem] font-semibold tracking-tight">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <Reveal>
          <div className="mt-20 max-w-3xl">
            <SectionLabel>Outcome</SectionLabel>
            <ul className="space-y-3">
              {cs.outcome.map((line) => (
                <li
                  key={line.slice(0, 32)}
                  className="flex gap-3 text-[0.9375rem] sm:text-base text-foreground/85 leading-relaxed"
                >
                  <span
                    aria-hidden
                    className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Next */}
        <Reveal>
          <div className="mt-24 border-t border-border pt-8 flex items-center justify-between gap-4">
            <Link
              href="/#work"
              className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              All work
            </Link>
            <Link
              href={`/work/${next.slug}`}
              className="group inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors text-right"
            >
              <span>
                <span className="block font-mono text-[0.6875rem] text-muted-foreground uppercase tracking-wide">
                  Next case study
                </span>
                {next.name}
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </article>

      <Footer />
    </main>
  );
}
