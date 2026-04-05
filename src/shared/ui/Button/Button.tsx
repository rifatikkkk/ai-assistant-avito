import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import "./Button.style.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: () => void;
  primaryColor?: boolean;
  small?: boolean;
  isClose?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  primaryColor = true,
  small,
  isClose = false,
  ...props
}) => {
  return (
    <button
      style={
        small
          ? { padding: "0 7px", fontSize: "14px", borderRadius: "4px" }
          : undefined
      }
      className={`button ${primaryColor ? "btn-primary-color" : "btn-default-color"} ${isClose ? "btn--close" : ""}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
