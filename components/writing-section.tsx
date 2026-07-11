import { posts } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

export function WritingSection() {
  return (
    <section id="writing" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader index="03" title="Writing" aside="dev.to/salsadsid" />

        <div>
          {posts.map((post, i) => (
            <Reveal key={post.url} delay={i * 0.05}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-2 sm:grid-cols-[7rem_1fr_auto] items-start border-b border-border py-6 first:border-t transition-colors hover:bg-secondary/40 sm:px-4 sm:-mx-4 rounded-md"
              >
                <span className="font-mono text-xs text-muted-foreground pt-1">
                  {post.date}
                </span>

                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1 font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors pt-1">
                  dev.to
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <a
            href="https://dev.to/salsadsid"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            All posts on dev.to
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
