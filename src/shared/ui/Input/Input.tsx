import type { FC, InputHTMLAttributes, ReactNode } from "react";
import "./Input.style.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  children?: ReactNode;
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
  children,
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
    <div className="input__layout">
      <div className="input__row">
        <div className="input__wrap">
          <button className="clear-btn" onClick={handleClear} type="button">
            <img src="/svg/clear.svg" alt="clear-icon" />
          </button>
          <input
            name={name}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${required ? "input--required" : "input--not-required"}`}
            {...props}
          />
        </div>
        {children}
      </div>

      {required && (value === "" || !value) && (
        <p className="input--require-info">Данное поле должно быть заполнено</p>
      )}
    </div>
  );
};
