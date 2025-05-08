import type { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

export default function Button({variant, className, children, ...args}: Props) {

  const variantClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    tertiary: "bg-transparent text-blue-500 border border-blue-500",
  };

  return <button {...args} className={`btn ${variantClasses[variant || "primary"]} ${className}`}>
    {children}
  </button>;
}
