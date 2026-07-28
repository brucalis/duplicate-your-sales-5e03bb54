import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderProps {
  label: string;
  aspect?: string;
  className?: string;
}

export function Placeholder({ label, aspect = "aspect-[4/3]", className }: PlaceholderProps) {
  return (
    <div
      className={cn(
        "glass relative flex w-full items-center justify-center overflow-hidden rounded-2xl",
        aspect,
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.16_165/0.15),transparent_60%),radial-gradient(circle_at_70%_80%,oklch(0.65_0.22_300/0.15),transparent_60%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(oklch(1_0_0/0.04)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0/0.04)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-background/40 backdrop-blur">
          <ImageIcon className="h-5 w-5 text-muted-foreground" />
        </div>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
}
