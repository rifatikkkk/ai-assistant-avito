import { useAppSelector } from "@/shared/lib";
import "./datesDetailsAd.style.css";
import { formatDate, selectCurrentAd } from "@/entities/ad/model";

export const DatesDetailsAd = () => {
  const ad = useAppSelector(selectCurrentAd);
  return (
    <div className="ads-details__dates">
      <p>Опубликовано: {formatDate(ad?.createdAt)}</p>
      <p>Отредактировано: {formatDate(ad?.updatedAt)}</p>
    </div>
  );
};
