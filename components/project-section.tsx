import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

export function ProjectSection() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader index="02" title="Projects" aside="Open source & personal" />

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-lg border border-border bg-card/50 p-6 transition-colors hover:border-primary/40">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  {project.note && (
                    <span className="font-mono text-[0.6875rem] text-primary whitespace-nowrap">
                      {project.note}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                <p className="mt-4 font-mono text-[0.6875rem] tracking-wide text-muted-foreground/80 uppercase">
                  {project.stack.join(" · ")}
                </p>

                <div className="mt-4 flex items-center gap-5 border-t border-border pt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-foreground hover:text-primary transition-colors"
                    >
                      Live <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      GitHub <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
