import type { FC } from "react";
import "./formAdActions.style.css";
import { Button } from "@/shared/ui";

interface FormAdActionsProps {
  onCancel: () => void;
  disabled?: boolean;
}

export const FormAdActions: FC<FormAdActionsProps> = ({
  onCancel,
  disabled,
}) => {
  return (
    <div className="form__actions">
      <Button disabled={disabled} type="submit">
        Сохранить
      </Button>
      <Button onClick={onCancel} primaryColor={false} type="button">
        Отменить
      </Button>
    </div>
  );
};
