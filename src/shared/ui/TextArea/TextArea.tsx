import type { FC } from "react";
import "./TextArea.style.css";

interface TextAreaProps {
  name: string;
  placeholder: string;
}

export const TextArea: FC<TextAreaProps> = ({ name, placeholder }) => {
  return (
    <div className="text-area__wrap">
      <textarea name={name} placeholder={placeholder} rows={2} />
    </div>
  );
};
