import { experiences } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader index="03" title="Experience" />

        <div>
          {experiences.map((exp, i) => (
            <Reveal key={`${exp.company}-${exp.period}`} delay={i * 0.06}>
              <div className="grid gap-2 sm:grid-cols-[11rem_1fr] border-b border-border py-8 first:border-t">
                <div className="font-mono text-xs text-muted-foreground pt-1">
                  {exp.period}
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {exp.title}
                    <span className="text-muted-foreground font-normal">
                      {" "}
                      · {exp.company}
                    </span>
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {exp.summary.map((line) => (
                      <li
                        key={line}
                        className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-primary/70"
                        />
                        {line}
                      </li>
                    ))}
                  </ul>
                  {exp.caseStudySlug && (
                    <Link
                      href={`/work/${exp.caseStudySlug}`}
                      className="group mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary"
                    >
                      Read the case study
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
