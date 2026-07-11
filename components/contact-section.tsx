import { personalInfo } from "@/lib/data";
import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader index="07" title="Contact" aside="Open to remote roles" />

        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] items-start">
          <Reveal>
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance leading-tight">
              Building an AI product that needs to
              <span className="text-muted-foreground"> survive real users?</span>
            </h3>
            <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
              I&apos;m open to international remote roles, full-stack or
              frontend, especially AI products. Based in Dhaka ({personalInfo.timezone}),
              comfortable overlapping with EU and US teams.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-85 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:border-primary/60 hover:text-primary transition-colors"
              >
                Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="border-t border-border">
              {[
                {
                  label: "GitHub",
                  value: `github.com/${personalInfo.github}`,
                  href: `https://github.com/${personalInfo.github}`,
                },
                {
                  label: "LinkedIn",
                  value: `linkedin.com/in/${personalInfo.linkedin}`,
                  href: `https://linkedin.com/in/${personalInfo.linkedin}`,
                },
                {
                  label: "Email",
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  label: "Location",
                  value: `${personalInfo.location} (${personalInfo.timezone})`,
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[6.5rem_1fr] gap-2 border-b border-border py-3.5"
                >
                  <dt className="font-mono text-xs tracking-wide text-muted-foreground uppercase pt-0.5">
                    {row.label}
                  </dt>
                  <dd className="text-sm">
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith("mailto") ? undefined : "_blank"}
                        rel={row.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                        className="group inline-flex items-center gap-1 hover:text-primary transition-colors break-all"
                      >
                        {row.value}
                        <ArrowUpRight className="h-3 w-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <span className="text-foreground/85">{row.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
