import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-forest text-white hover:bg-forest-dark shadow-md shadow-forest/20",
  secondary:
    "bg-gold text-charcoal hover:bg-gold-light shadow-md shadow-gold/25",
  outline:
    "border-2 border-white/90 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1fb855] shadow-md shadow-[#25D366]/25",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: ButtonProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-center text-sm font-bold transition-colors sm:text-base";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
