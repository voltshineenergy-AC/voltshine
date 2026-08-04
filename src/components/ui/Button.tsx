import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-105 shadow-lg shadow-yellow-500/20",

    secondary:
      "border border-green-500 text-green-400 hover:bg-green-500 hover:text-white hover:scale-105",
  };

  return (
    <Link
  href={href}
  className={`${base} ${styles[variant]} ${className}`}
>
      {children}
    </Link>
  );
}