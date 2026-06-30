const EmptyState = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="py-20 text-center">
      <h2 className="text-2xl font-semibold text-text">
        {title}
      </h2>

      <p className="mt-3 text-text-light">
        {description}
      </p>

      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}
    </div>
  );
};

export default EmptyState;