"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useSyncExternalStore } from "react";

function subscribeFinePointer(callback: () => void) {
  const query = window.matchMedia("(pointer: fine)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function useFinePointer() {
  return useSyncExternalStore(
    subscribeFinePointer,
    () => window.matchMedia("(pointer: fine)").matches,
    () => false
  );
}

/**
 * Accent cursor: a small dot that tracks the pointer directly and a ring that
 * springs behind it, swelling over interactive elements. Runs entirely on
 * motion values (no React re-renders per pointermove), only on fine pointers,
 * and not at all when the user prefers reduced motion.
 */
export function CursorEffect() {
  const reduced = useReducedMotion();
  const finePointer = useFinePointer();
  const enabled = finePointer && !reduced;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scale = useMotionValue(1);

  const ringX = useSpring(x, { stiffness: 320, damping: 32, mass: 0.55 });
  const ringY = useSpring(y, { stiffness: 320, damping: 32, mass: 0.55 });
  const ringScale = useSpring(scale, { stiffness: 260, damping: 22 });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      scale.set(target?.closest("a, button, [role='button']") ? 1.9 : 1);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, x, y, scale]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] h-1.5 w-1.5 rounded-full bg-primary"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] h-7 w-7 rounded-full border border-primary/50"
        style={{
          x: ringX,
          y: ringY,
          scale: ringScale,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
