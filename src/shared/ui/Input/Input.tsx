import type { FC } from "react";
import "./Input.style.css";

interface InputProps {
  name: string;
  placeholder: string;
}

export const Input: FC<InputProps> = ({ name, placeholder }) => {
  return (
    <div className="input__wrap">
      <input name={name} type="text" placeholder={placeholder} />

      <button className="clear-btn">
        <img src="/svg/clear.svg" alt="clear-icon" />
      </button>
    </div>
  );
};
