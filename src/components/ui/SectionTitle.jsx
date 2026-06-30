const SectionTitle = ({
  title,
  subtitle,
  align = "center",
}) => {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`mb-12 ${alignClass[align]}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-text">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 max-w-2xl text-text-light mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;