import type { FC } from "react";
import "./Select.style.css";

interface SelectProps {
  width?: number;
  primaryColor?: boolean;
  values: string[];
  name: string;
}

export const Select: FC<SelectProps> = ({
  width = 456,
  primaryColor = false,
  values,
  name,
}) => {
  return (
    <div className="select__wrap" style={{ width: width }}>
      <select
        name={name}
        className={`${primaryColor ? "primary-color" : "default-color"} `}
        value={values}
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
        //edit for switch arrow
        className="select-arrow select-arrow--open"
      />
    </div>
  );
};
