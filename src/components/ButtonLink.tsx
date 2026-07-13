import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost";
};

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-forest-800 text-white shadow-soft hover:bg-forest-900 focus-visible:outline-forest-800",
    secondary:
      "border border-forest-800 text-forest-900 hover:border-copper-500 hover:text-copper-700 focus-visible:outline-copper-500",
    light:
      "border border-white/35 bg-white text-forest-900 hover:bg-copper-300 focus-visible:outline-copper-300",
    ghost:
      "text-forest-900 hover:text-copper-700 focus-visible:outline-copper-500"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]}`}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
