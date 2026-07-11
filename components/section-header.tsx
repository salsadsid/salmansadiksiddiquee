import { Reveal } from "./reveal";

export function SectionHeader({
  index,
  title,
  aside,
}: {
  index: string;
  title: string;
  aside?: string;
}) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4 border-t border-border pt-5 mb-12">
        <span className="font-mono text-xs text-primary">{index}</span>
        <h2 className="text-2xl sm:text-[1.75rem] font-semibold tracking-tight">
          {title}
        </h2>
        {aside && <span className="eyebrow ml-auto hidden sm:block">{aside}</span>}
      </div>
    </Reveal>
  );
}
