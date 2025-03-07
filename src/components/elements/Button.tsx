import React from "react";
import { ButtonProps } from "../elements/types/Button.type";
import Link from "next/link";

export const Button: React.FC<ButtonProps> = ({
  href,
  text,
  icon: Icon = () => null,
  variant,
  className = "",
  iconClassName = "",
}) => {
  const defaultStyle =
    "font-semibold rounded-lg flex justify-center items-center px-6 py-2 gap-2";
  const variants = {
    primary:
      "border-2 border-slate-800 dark:border-white border-dashed dark:border-white hover:dark:border-primary text-slate-800 hover:border-primary hover:text-white dark:text-white hover:bg-primary",
    secondary:
      "border-2 bg-primary border-primary text-white hover:border-primary hover:text-white hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out",
  };

  // Jika `href` adalah external link
  if (href.startsWith("http")) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${defaultStyle} ${variants[variant]} ${className}`}
      >
        {text}
        {Icon && <Icon className={iconClassName} />}
      </Link>
    );
  }

  // Jika `href` adalah internal link
  return (
    <Link
      href={href}
      passHref
      className={`${defaultStyle} ${variants[variant]} ${className}`}
    >
      {text}
      {Icon && <Icon className={iconClassName} />}
    </Link>
  );
};
