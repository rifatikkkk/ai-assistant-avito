import type { FC } from "react";
import "./formAdActions.style.css";
import { Button } from "@/shared/ui";

interface FormAdActionsProps {
  onCancel: () => void;
}

export const FormAdActions: FC<FormAdActionsProps> = ({ onCancel }) => {
  return (
    <div className="form__actions">
      <Button type="submit">Сохранить</Button>
      <Button onClick={onCancel} primaryColor={false}>
        Отменить
      </Button>
    </div>
  );
};
