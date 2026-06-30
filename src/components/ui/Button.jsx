const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}) => {
  const baseStyle =
    "px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary text-white hover:opacity-90",

    secondary:
      "bg-secondary text-white hover:opacity-90",

    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",

    danger:
      "bg-danger text-white hover:opacity-90",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;