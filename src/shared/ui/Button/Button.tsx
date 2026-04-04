import type { FC, ReactNode } from "react";
import "./Button.style.css";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  primaryColor?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  primaryColor = true,
}) => {
  return (
    <button
      className={`button ${primaryColor ? "btn-primary-color" : "btn-default-color"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
