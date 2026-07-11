"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-56px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animates the numeric core of a metric string ("1M+", "~$390K", "1,000+")
 * from zero when scrolled into view. Falls back to static text when the
 * value has no numeric core or the user prefers reduced motion.
 */
export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-32px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (reduced || !inView) return;
    const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
    if (!match) return;
    const [, prefix, core, suffix] = match;
    const target = parseInt(core.replace(/,/g, ""), 10);
    const grouped = core.includes(",");
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const n = Math.round(v);
        setDisplay(`${prefix}${grouped ? n.toLocaleString("en-US") : n}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [inView, reduced, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
