import type { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  variant?: "info" | "warning" | "error";
}

export default function Info({ variant, className, ...props }: Props) {
  const variantClasses = {
    info: "bg-blue-100 text-blue-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <div
      className={`p-4 rounded-lg ${variantClasses[variant || "info"]} ${className}`}
      {...props}
    >
      {props.children}
    </div>
  );
}
