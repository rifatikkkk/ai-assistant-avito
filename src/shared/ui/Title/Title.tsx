import type { FC, ReactNode } from "react";
import "./Title.style.css";

interface TitleProps {
  children?: ReactNode;
}

export const Title: FC<TitleProps> = ({ children }) => {
  return <h2 className="title">{children}</h2>;
};
