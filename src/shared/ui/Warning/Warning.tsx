import type { FC, ReactNode } from "react";
import "./Warning.style.css";

interface WarningProps {
  children?: ReactNode;
}

export const Warning: FC<WarningProps> = ({ children }) => {
  return (
    <div className="ads-details__revision">
      <img src="/svg/warning.svg" alt="warning-icon" />
      {children}
    </div>
  );
};
