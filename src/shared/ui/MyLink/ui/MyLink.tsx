import type { FC, ReactNode } from "react";
import { Link } from "react-router";
import "./MyLink.style.css";

interface MyLinkProps {
  children?: ReactNode;
  to: string;
}

export const MyLink: FC<MyLinkProps> = ({ to, children }) => {
  return (
    <Link to={to} className="link-reset">
      {children}
    </Link>
  );
};
