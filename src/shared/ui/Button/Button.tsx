import type { FC, ReactNode } from "react";
import "./Button.style.css";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};
