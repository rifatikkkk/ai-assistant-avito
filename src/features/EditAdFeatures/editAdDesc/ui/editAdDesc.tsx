import type { FC } from "react";
import { HelpButton, TextArea } from "@/shared/ui";
import "./editAdDesc.style.css";

interface EditAdDescProps {
  value: string;
  onChange: (value: string) => void;
}

export const EditAdDesc: FC<EditAdDescProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 1000) onChange(e.target.value);
  };

  const countLetters = value.length;

  return (
    <div className="desc__wrap">
      <span>Описание</span>
      <TextArea
        value={value}
        onChange={handleChange}
        name="desc"
        placeholder="Описание"
      />
      <div className="desc__help">
        <HelpButton>Улучшить описание</HelpButton>
        <p className="desc__info-word">{countLetters}/1000</p>
      </div>
    </div>
  );
};
