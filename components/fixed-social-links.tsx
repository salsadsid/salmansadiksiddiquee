"use client";

import { personalInfo } from "@/lib/data";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function FixedSocialLinks() {
  const socialLinks = [
    {
      icon: Github,
      href: `https://github.com/${personalInfo.github}`,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: `https://linkedin.com/in/${personalInfo.linkedin}`,
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: `https://twitter.com/${personalInfo.twitter}`,
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: `https://instagram.com/${personalInfo.instagram}`,
      label: "Instagram",
    },
  ];

  return (
    <>
      {/* Left side - Social Links */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label={link.label}
          >
            <link.icon className="h-5 w-5" />
          </a>
        ))}
        <div className="w-px h-24 bg-muted-foreground/30 mx-auto mt-4" />
      </div>

      {/* Right side - Email */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6">
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-muted-foreground hover:text-primary transition-colors duration-300 [writing-mode:vertical-rl] text-sm tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          {personalInfo.email}
        </a>
        <div className="w-px h-24 bg-muted-foreground/30" />
      </div>
    </>
  );
}
