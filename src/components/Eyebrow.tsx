import type { LucideIcon } from "lucide-react";

interface EyebrowProps {
  icon: LucideIcon;
  children: string;
  tone?: "amber" | "amber-dark";
}

export default function Eyebrow({ icon: Icon, children, tone = "amber-dark" }: EyebrowProps) {
  return (
    <div
      className={`mb-2.5 inline-flex items-center gap-2 font-display text-xs font-semibold tracking-[0.14em] uppercase ${
        tone === "amber" ? "text-amber" : "text-amber-dark"
      }`}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
      {children}
    </div>
  );
}
