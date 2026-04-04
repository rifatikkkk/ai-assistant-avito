import { useState, type FC, type SelectHTMLAttributes } from "react";
import { useClickOutside } from "@/shared/lib";
import "./Select.style.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  width?: number;
  primaryColor?: boolean;
  values: string[];
  value?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: FC<SelectProps> = ({
  width = 456,
  primaryColor = false,
  values,
  name,
  value,
  placeholder = "Не выбрано",
  required = false,
  onChange,
  ...props
}) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const selectRef = useClickOutside<HTMLDivElement>(() => {
    setIsSelectOpen(false);
  }, isSelectOpen);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsSelectOpen(false);
    onChange?.(e);
  };

  return (
    <div className="select__wrap" style={{ width: width }} ref={selectRef}>
      <select
        name={name}
        className={`${primaryColor ? "primary-color" : "default-color"} ${!value || value === "" ? "select--empty" : "select--not-empty"} `}
        value={value}
        onClick={() => setIsSelectOpen(!isSelectOpen)}
        onChange={handleSelectChange}
        {...props}
      >
        {!required && (
          <option value="" style={{ color: "#00000040" }}>
            {placeholder}
          </option>
        )}
        {values.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <img
        src="/svg/arrowGray.svg"
        alt="arrow"
        className={`select-arrow ${isSelectOpen ? "select-arrow--open" : ""}`}
      />
    </div>
  );
};
