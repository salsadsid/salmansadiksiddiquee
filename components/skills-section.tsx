import { skills } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader index="04" title="Stack" aside="What I ship with" />

        <div>
          {Object.entries(skills).map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.04}>
              <div className="grid gap-1 sm:grid-cols-[14rem_1fr] border-b border-border py-4 first:border-t">
                <div className="font-mono text-xs tracking-wide text-muted-foreground uppercase pt-0.5">
                  {category}
                </div>
                <p className="text-sm leading-relaxed text-foreground/85">
                  {items}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
