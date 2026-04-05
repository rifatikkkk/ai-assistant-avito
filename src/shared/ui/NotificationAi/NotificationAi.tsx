import type { FC } from "react";
import "./Notification.style.css";
import { Button } from "../Button/Button";

interface NotificationAiProps {
  content: string;
  onClose: () => void;
  onApply?: () => void;
}

export const NotificationAi: FC<NotificationAiProps> = ({
  content,
  onClose,
  onApply,
}) => {
  return (
    <div className="ai__wrap">
      <p className="ai-header">Ответ AI:</p>
      <p>{content}</p>
      <div className="ai__actions">
        <Button type="button" small={true} onClick={onApply}>
          Применить
        </Button>
        <Button type="button" small={true} isClose={true} onClick={onClose}>
          Закрыть
        </Button>
      </div>
    </div>
  );
};
