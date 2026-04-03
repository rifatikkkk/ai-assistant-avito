import type { FC } from "react";
import "./Spec.style.css";

interface SpecProps {
  items: { name: string; value: string }[];
}

export const Spec: FC<SpecProps> = ({ items }) => {
  return (
    <div className="ads-details_specs-layout">
      <ul className="specs-list ads-details__specs-names">
        {items.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <ul className="specs-list ads-details__specs-values">
        {items.map((item) => (
          <li>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};
