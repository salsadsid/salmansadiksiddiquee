import { caseStudies } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

export function WorkSection() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader index="01" title="Selected work" aside="Case studies" />

        <div>
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.06}>
              <Link
                href={`/work/${cs.slug}`}
                className="group grid gap-4 sm:grid-cols-[3rem_1fr_auto] items-start border-b border-border py-8 first:border-t transition-colors hover:bg-secondary/40 sm:px-4 sm:-mx-4 rounded-md"
              >
                <span className="font-mono text-xs text-muted-foreground pt-1.5">
                  {cs.order}
                </span>

                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                    {cs.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm sm:text-[0.9375rem] text-muted-foreground leading-relaxed">
                    {cs.oneLiner}
                  </p>
                  <p className="mt-3 font-mono text-[0.6875rem] tracking-wide text-muted-foreground/80 uppercase">
                    {cs.role} · {cs.period}
                  </p>
                </div>

                <div className="flex sm:flex-col sm:items-end gap-x-4 gap-y-1.5 flex-wrap">
                  {cs.cardMetrics.map((m) => (
                    <span
                      key={m}
                      className="font-mono text-xs text-foreground/80 tabular-nums"
                    >
                      {m}
                    </span>
                  ))}
                  <span className="mt-0 sm:mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                    Case study
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
