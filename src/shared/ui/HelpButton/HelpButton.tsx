import type { FC } from "react";
import "./HelpButton.style.css";

interface HelpButtonProps {
  onHandle?: () => void;
  isLoading?: boolean;
  countRequest: number;
}

export const HelpButton: FC<HelpButtonProps> = ({
  onHandle,
  isLoading = false,
  countRequest,
}) => {
  return (
    <button
      className="help-btn"
      disabled={isLoading}
      type="button"
      onClick={onHandle}
    >
      <img
        src={
          isLoading
            ? "/svg/loading.svg"
            : countRequest > 0
              ? "/svg/repeat.svg"
              : "/svg/light.svg"
        }
        alt="help-icon"
        className={`${isLoading ? "img--loading" : ""}`}
      />
      {isLoading
        ? "Выполняется запрос"
        : countRequest > 0
          ? "Повторить запрос"
          : "Узнать рыночную стоимость"}
    </button>
  );
};
