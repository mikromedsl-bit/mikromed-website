import type { BadgeTone } from "@/data/types";

type BadgeProps = {
  children: React.ReactNode;
  tone?: BadgeTone;
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  const tones = {
    default: "border-mineral-200 bg-white text-forest-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]",
    success: "border-mineral-200 bg-forest-50 text-forest-900",
    warning: "border-mineral-200 bg-mineral-50 text-forest-800",
    muted: "border-mineral-200 bg-white text-mineral-700"
  };

  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}
