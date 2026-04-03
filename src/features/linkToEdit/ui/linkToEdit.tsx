import { Button } from "@/shared/ui";
import "./linkToEdit.style.css";
import { useNavigate } from "react-router";
import { useAppSelector } from "@/app/store/hooks";
import { selectCurrentAd } from "@/entities/ad/model";

export const LinkToEdit = () => {
  const navigate = useNavigate();
  const ad = useAppSelector(selectCurrentAd);

  const handleToEdit = () => {
    navigate(`/ads/${ad?.id}/edit`);
  };

  return (
    <Button onClick={handleToEdit}>
      Редактировать
      <img src="/svg/edit.svg" alt="edit-icon" />
    </Button>
  );
};
