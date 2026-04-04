import type { FC, InputHTMLAttributes } from "react";
import "./Input.style.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  required?: boolean;
}

export const Input: FC<InputProps> = ({
  name,
  placeholder,
  value,
  onChange,
  onClear,
  required = false,
  ...props
}) => {
  const handleClear = () => {
    if (onClear) onClear();
    else {
      const event = {
        target: { name, value: "" },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }
  };

  return (
    <div className="input__wrap">
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />

      <button className="clear-btn" onClick={handleClear} type="button">
        <img src="/svg/clear.svg" alt="clear-icon" />
      </button>
    </div>
  );
};
