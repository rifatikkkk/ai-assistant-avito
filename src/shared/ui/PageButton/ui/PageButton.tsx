import type { FC, ReactNode } from "react";
import "./PageButton.style.css";

interface PageButtonProps {
  children?: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export const PageButton: FC<PageButtonProps> = ({
  children,
  isActive = false,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`page-button ${isActive ? "page-button--active" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
