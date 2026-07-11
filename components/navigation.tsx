"use client";

import { personalInfo } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Menu, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const navItems = [
  { name: "Work", href: "/#work" },
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight hover:text-primary transition-colors"
          >
            {personalInfo.name}
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-1.5 rounded-md border border-border px-3.5 py-1.5 font-mono text-xs tracking-wide hover:border-primary/60 hover:text-primary transition-colors"
            >
              Resume
              <ArrowDown className="h-3 w-3" />
            </a>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-2 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-2 py-2.5 font-mono text-xs tracking-wide text-primary"
              >
                Resume <ArrowDown className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
