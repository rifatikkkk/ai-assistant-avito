import type { FC } from "react";
import "./Tumbler.style.css";

interface TumblerProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Tumbler: FC<TumblerProps> = ({ checked = false, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <label className="tumbler">
      <input checked={checked} onChange={handleChange} type="checkbox" />
      <span className="tumbler__slider"></span>
    </label>
  );
};
