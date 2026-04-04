import type { FC, ReactNode } from "react";
import "./HelpButton.style.css";

interface HelpButtonProps {
  children?: ReactNode;
}

export const HelpButton: FC<HelpButtonProps> = ({ children }) => {
  return (
    <button className="help-btn">
      <img src="/svg/light.svg" alt="help-icon" />
      {children}
    </button>
  );
};
