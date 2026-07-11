"use client";

import { metrics, personalInfo } from "@/lib/data";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CountUp } from "./reveal";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function HeroSection() {
  const reduced = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  });

  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-14 lg:gap-20 items-center">
          {/* Statement */}
          <div>
            <motion.p {...rise(0.05)} className="eyebrow mb-6">
              <span className="whitespace-nowrap">{personalInfo.location}</span>{" "}
              · <span className="whitespace-nowrap">{personalInfo.timezone}</span> ·{" "}
              <span className="whitespace-nowrap">remote-ready</span>
            </motion.p>

            <motion.h1
              {...rise(0.15)}
              className="text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem] font-semibold tracking-tight text-balance"
            >
              Full-stack product engineer
              <span className="block text-muted-foreground">
                AI products in production.
              </span>
            </motion.h1>

            <motion.p
              {...rise(0.25)}
              className="mt-7 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              RAG pipelines, SSE-streaming interfaces, and the billing systems
              around them. About three years shipping production SaaS used by
              100k+ people, end to end.
            </motion.p>

            <motion.div {...rise(0.35)} className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-85 transition-opacity"
              >
                View work
                <ArrowDown className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:border-primary/60 hover:text-primary transition-colors"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Proof panel */}
          <motion.aside
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4, ease: EASE }}
            aria-label="Production metrics"
            className="relative border border-border rounded-lg bg-card/50"
          >
            {/* Corner ticks */}
            <span aria-hidden className="absolute -top-px -left-px h-3 w-3 border-t border-l border-primary" />
            <span aria-hidden className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-primary" />

            <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-border">
              <span className="eyebrow">Production to date</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary/60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
            </div>

            <dl>
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`px-5 py-4 ${i > 0 ? "border-t border-border" : ""}`}
                >
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="flex items-baseline gap-3">
                    <CountUp
                      value={m.value}
                      className="font-mono text-2xl font-medium tracking-tight tabular-nums"
                    />
                    <span className="text-sm text-foreground/80">{m.label}</span>
                  </dd>
                  {m.detail && (
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {m.detail}
                    </p>
                  )}
                </div>
              ))}
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
