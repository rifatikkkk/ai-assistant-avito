import type { FC } from "react";
import { TextArea } from "@/shared/ui";
import "./editAdDesc.style.css";
import { GetDescAi } from "@/features/getDescAi";
import type { FormDataUpdate } from "@/entities/ad/model";

interface EditAdDescProps {
  valueForm: FormDataUpdate;
  onChange: (value: string) => void;
}

export const EditAdDesc: FC<EditAdDescProps> = ({ valueForm, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 1000) onChange(e.target.value);
  };

  const countLetters = valueForm.description.length;

  const handleDescSuggestion = (suggestedDesc: string) => {
    onChange(suggestedDesc);
  };

  return (
    <div className="desc__wrap">
      <span>Описание</span>
      <TextArea
        value={valueForm.description}
        onChange={handleChange}
        name="desc"
        placeholder="Описание"
      />
      <div className="desc__help">
        <GetDescAi value={valueForm} onDescSuggestion={handleDescSuggestion} />
        <p className="desc__info-word">{countLetters}/1000</p>
      </div>
    </div>
  );
};
