import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import "./Button.style.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: () => void;
  primaryColor?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  primaryColor = true,
  ...props
}) => {
  return (
    <button
      className={`button ${primaryColor ? "btn-primary-color" : "btn-default-color"}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
