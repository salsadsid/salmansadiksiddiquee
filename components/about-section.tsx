import { education, languages, personalInfo } from "@/lib/data";
import Image from "next/image";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader index="06" title="About" />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,17rem)_1fr] items-start">
          <Reveal>
            <div className="relative max-w-[17rem]">
              <span aria-hidden className="absolute -top-px -left-px h-3 w-3 border-t border-l border-primary z-10" />
              <span aria-hidden className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-primary z-10" />
              <div className="overflow-hidden rounded-lg border border-border bg-secondary/60">
                <Image
                  src="/salmansadiksiddiquee.png"
                  alt={personalInfo.name}
                  width={511}
                  height={489}
                  className="w-full h-auto grayscale hover:grayscale-0 transition-[filter] duration-500"
                />
              </div>
              <p className="mt-3 font-mono text-[0.6875rem] tracking-wide text-muted-foreground uppercase text-center">
                {personalInfo.name}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-2xl space-y-5 text-[0.9375rem] sm:text-base text-muted-foreground leading-relaxed">
              <p>
                I&apos;m Salman, a full-stack engineer in Dhaka. My degree is in
                Geography and Environmental Science; everything I know about
                software I learned by shipping it.
              </p>
              <p>
                Since 2023 I&apos;ve been the top contributor on an AI content
                platform used by 100k+ people, led development of a
                device-lifecycle platform for a German medical-device
                manufacturer, and built a school management system that I still
                operate solo for 1,000+ students.
              </p>
              <p>
                I like products where the code meets the real world (payments,
                biometric devices, SMS gateways, printed report cards) and AI
                features that hold up in production, not just in a demo.
              </p>
            </div>

            <dl className="mt-10 max-w-2xl">
              <div className="grid gap-1 sm:grid-cols-[14rem_1fr] border-t border-border py-4">
                <dt className="font-mono text-xs tracking-wide text-muted-foreground uppercase pt-0.5">
                  Education
                </dt>
                <dd className="text-sm leading-relaxed text-foreground/85">
                  {education.degree}, {education.field} ·{" "}
                  {education.institution}, {education.year}
                </dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[14rem_1fr] border-t border-b border-border py-4">
                <dt className="font-mono text-xs tracking-wide text-muted-foreground uppercase pt-0.5">
                  Languages
                </dt>
                <dd className="text-sm leading-relaxed text-foreground/85">
                  {languages.join(" · ")}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
