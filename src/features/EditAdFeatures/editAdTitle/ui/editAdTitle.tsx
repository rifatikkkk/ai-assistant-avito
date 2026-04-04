import type { FC } from "react";
import { Input } from "@/shared/ui";
import "./editAdTitle.style.css";

interface EditAdTitleProps {
  value: string;
  onChange: (value: string) => void;
}

export const EditAdTitle: FC<EditAdTitleProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange("");
  };

  return (
    <div className="title__wrap">
      <div className="title__required">
        <img src="/svg/important.svg" alt="important-icon" />
        <span>Название</span>
      </div>
      <Input
        name="title"
        placeholder="Название"
        value={value}
        onChange={handleChange}
        onClear={handleClear}
      />
    </div>
  );
};
