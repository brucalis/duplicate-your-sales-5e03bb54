import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderProps {
  label: string;
  hint?: string;
  aspect?: string;
  className?: string;
}

const HERO_IMAGE_URL =
  "https://i.ibb.co/207QK2KP/0791a1d2-6dd6-4919-9481-91cf34a9312a-1.png";

export function Placeholder({ label, hint, aspect = "aspect-[4/3]", className }: PlaceholderProps) {
  const isHeroImage = label === "[Imagem Hero / VSL]";

  return (
    <div
      className={cn(
        "glass group relative flex w-full items-center justify-center overflow-hidden rounded-3xl",
        aspect,
        className,
      )}
    >
      {isHeroImage ? (
        <img
          src={HERO_IMAGE_URL}
          alt="Interface da Super Lovable"
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,oklch(0.68_0.24_350/0.20),transparent_60%),radial-gradient(circle_at_80%_85%,oklch(0.62_0.22_300/0.20),transparent_60%)]" />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(oklch(1_0_0/0.035)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0/0.035)_1px,transparent_1px)] [background-size:36px_36px]" />
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="relative flex flex-col items-center gap-3 px-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-background/50 backdrop-blur transition-transform duration-500 group-hover:scale-110">
              <ImageIcon className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/80">
              {label}
            </span>
            {hint ? <span className="max-w-[22rem] text-xs text-muted-foreground">{hint}</span> : null}
          </div>
        </>
      )}
    </div>
  );
}
