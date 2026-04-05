import type { FC } from "react";
import "./Notification.style.css";
import { Button } from "../Button/Button";

interface NotificationAiProps {
  content: string;
  onClose: () => void;
  onApply?: () => void;
  isError?: boolean;
}

export const NotificationAi: FC<NotificationAiProps> = ({
  content,
  onClose,
  onApply,
  isError = false,
}) => {
  return (
    <div className={`${isError ? "ai--error" : "ai-success"} ai__wrap`}>
      <p className="ai-header">
        {isError ? "Произошла ошибка при запросе к AI" : "Ответ AI:"}
      </p>
      <p>
        {isError
          ? "Попробуйте повторить запрос или закройте уведомление"
          : content}
      </p>
      <div className="ai__actions">
        {!isError && (
          <Button type="button" small={true} onClick={onApply}>
            Применить
          </Button>
        )}
        <Button
          type="button"
          small={true}
          isClose={true}
          onClick={onClose}
          isError={isError}
        >
          Закрыть
        </Button>
      </div>
    </div>
  );
};
