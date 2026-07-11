import { personalInfo } from "@/lib/data";
import { Github, Linkedin } from "lucide-react";

export function FixedSocialLinks() {
  return (
    <>
      {/* Left rail — social */}
      <div className="fixed left-7 bottom-0 z-40 hidden lg:flex flex-col items-center gap-5">
        <a
          href={`https://github.com/${personalInfo.github}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground/70 hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
        >
          <Github className="h-[1.05rem] w-[1.05rem]" />
        </a>
        <a
          href={`https://linkedin.com/in/${personalInfo.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground/70 hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
        >
          <Linkedin className="h-[1.05rem] w-[1.05rem]" />
        </a>
        <div className="w-px h-20 bg-border" />
      </div>

      {/* Right rail — email */}
      <div className="fixed right-7 bottom-0 z-40 hidden lg:flex flex-col items-center gap-5">
        <a
          href={`mailto:${personalInfo.email}`}
          className="font-mono text-[0.6875rem] tracking-[0.18em] text-muted-foreground/70 hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
          style={{ writingMode: "vertical-rl" }}
        >
          {personalInfo.email}
        </a>
        <div className="w-px h-20 bg-border" />
      </div>
    </>
  );
}
