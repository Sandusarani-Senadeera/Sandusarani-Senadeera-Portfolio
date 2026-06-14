type SectionHeadingProps = {
  title: string;
  highlight: string;
  subtitle?: string;
};

export default function SectionHeading({
  title,
  highlight,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-white md:text-4xl">
        {title}{" "}
        <span className="text-brand-orange">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}
