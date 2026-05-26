type ImagePlaceholderProps = {
  label: string;
  className?: string;
  variant?: "hero" | "gallery" | "card";
};

export function ImagePlaceholder({
  label,
  className = "",
  variant = "gallery",
}: ImagePlaceholderProps) {
  const gradients = {
    hero: "from-forest-dark via-forest to-charcoal",
    gallery: "from-tan/40 via-forest/30 to-forest-dark/80",
    card: "from-tan-light via-tan/50 to-forest/40",
  };

  return (
    <div
      className={`relative overflow-hidden bg-linear-to-br ${gradients[variant]} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,168,76,0.25),transparent_50%)]" />
      <div className="absolute inset-0 flex items-end p-4">
        <span className="rounded-lg bg-charcoal/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:text-sm">
          {label} — photo placeholder
        </span>
      </div>
    </div>
  );
}
