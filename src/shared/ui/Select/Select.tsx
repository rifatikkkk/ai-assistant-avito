import { useState, type FC, type SelectHTMLAttributes } from "react";
import "./Select.style.css";
import { useClickOutside } from "@/shared/lib";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  width?: number;
  primaryColor?: boolean;
  values: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: FC<SelectProps> = ({
  width = 456,
  primaryColor = false,
  values,
  name,
  value,
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
        className={`${primaryColor ? "primary-color" : "default-color"} `}
        value={value}
        onClick={() => setIsSelectOpen(!isSelectOpen)}
        onChange={handleSelectChange}
        {...props}
      >
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
