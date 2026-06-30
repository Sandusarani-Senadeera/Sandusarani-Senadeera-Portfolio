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
    <div className="mb-8 text-center sm:mb-10 lg:mb-12">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
        {title}{" "}
        <span className="text-brand-orange">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl px-2 text-sm text-gray-400 sm:mt-4 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
