import type { FC } from "react";
import { HelpButton, Input } from "@/shared/ui";
import "./editAdPrice.style.css";

interface EditAdPriceProps {
  value: string;
  onChange: (value: string) => void;
}

export const EditAdPrice: FC<EditAdPriceProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange("");
  };

  return (
    <div className="price__wrap">
      <div className="price__required">
        <img src="/svg/important.svg" alt="important-icon" />
        <span>Цена</span>
      </div>
      <div className="price__actions">
        <Input
          name="price"
          placeholder="Цена"
          value={value}
          onChange={handleChange}
          onClear={handleClear}
        />

        <HelpButton>Узнать рыночную стоимость</HelpButton>
      </div>
    </div>
  );
};
