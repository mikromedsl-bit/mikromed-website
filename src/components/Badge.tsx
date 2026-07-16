import type { BadgeTone } from "@/data/types";

type BadgeProps = {
  children: React.ReactNode;
  tone?: BadgeTone;
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  const tones = {
    default: "border-mineral-200 bg-mineral-50 text-forest-900",
    success: "border-mineral-200 bg-forest-50 text-forest-900",
    warning: "border-mineral-200 bg-mineral-50 text-copper-700",
    muted: "border-mineral-200 bg-white text-mineral-700"
  };

  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}
