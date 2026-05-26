type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p
          className={`mb-2 text-sm font-bold uppercase tracking-widest ${
            light ? "text-gold-light" : "text-gold"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-base leading-relaxed sm:text-lg ${
            light ? "text-tan-light/90" : "text-charcoal/75"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
