import { useState, useCallback } from "react";

interface NotificationItem {
  id: string;
  message: string;
  type: "success" | "error";
  duration: number;
}

export const useNotification = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const showNotification = useCallback(
    (message: string, type: "success" | "error", duration: number = 5000) => {
      const id = Date.now().toString();
      setNotifications((prev) => [...prev, { id, message, type, duration }]);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, duration);
    },
    [],
  );

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return {
    notifications,
    showNotification,
    removeNotification,
  };
};
