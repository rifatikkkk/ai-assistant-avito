import type { FC, TextareaHTMLAttributes } from "react";
import "./TextArea.style.css";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: FC<TextAreaProps> = ({
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="text-area__wrap">
      <textarea
        name={name}
        placeholder={placeholder}
        rows={2}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
