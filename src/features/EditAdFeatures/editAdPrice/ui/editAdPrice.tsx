import type { FC } from "react";
import { Input } from "@/shared/ui";
import "./editAdPrice.style.css";
import { GetPriceAi } from "@/features/getPriceAi";
import type { FormDataUpdate } from "@/entities/ad/model";

interface EditAdPriceProps {
  valueForm: FormDataUpdate;
  onChange: (value: string) => void;
}

export const EditAdPrice: FC<EditAdPriceProps> = ({ valueForm, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    newValue = newValue.replace(/[^\d]/g, "");
    onChange(newValue);
  };

  const handleClear = () => {
    onChange("");
  };

  const handlePriceSuggestion = (suggestedPrice: string) => {
    onChange(suggestedPrice);
  };

  return (
    <div className="price__wrap">
      <div className="price__required">
        <img src="/svg/important.svg" alt="important-icon" />
        <span>Цена</span>
      </div>
      <div className="price__actions">
        <Input
          required
          name="price"
          placeholder="Цена"
          value={valueForm.price}
          onChange={handleChange}
          onClear={handleClear}
        >
          <GetPriceAi
            value={valueForm}
            onPriceSuggestion={handlePriceSuggestion}
          />
        </Input>
      </div>
    </div>
  );
};
