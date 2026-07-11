import { personalInfo } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {year} {personalInfo.name}
        </p>

        <div className="flex items-center gap-5 font-mono text-xs">
          <a
            href={`https://github.com/${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href={`https://linkedin.com/in/${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Email
          </a>
          <a
            href={personalInfo.siteRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/70 hover:text-primary transition-colors"
          >
            Source ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
