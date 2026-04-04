import { useEffect, type FC } from "react";
import "./Notification.style.css";

interface NotificationProps {
  message?: string;
  variant: "error" | "success";
  onClose: () => void;
  duration?: number;
}

export const Notification: FC<NotificationProps> = ({
  message,
  variant,
  onClose,
  duration = 5000,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);
  return (
    <div
      className={`${variant === "error" ? "notification-error" : "notification-success"} notification__wrap`}
    >
      <div className="notification__content">
        <img
          src={`${variant === "error" ? "/svg/error.svg" : "/svg/success.svg"}`}
          alt="info-icon"
        />
        <div
          className={`${variant === "error" ? "mt-5" : ""} notification__text`}
        >
          <p>
            {variant === "error" ? "Ошибка сохранения" : "Изменения сохранены"}
          </p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};
