import { useAppSelector } from "@/shared/lib";
import "./headerDetailsAd.style.css";
import { selectCurrentAd } from "@/entities/ad/model";

export const HeaderDetailsAd = () => {
  const ad = useAppSelector(selectCurrentAd);

  return (
    <header className="ads-details__header">
      <h2>{ad?.title}</h2>
      <h2>{ad?.price} ₽</h2>
    </header>
  );
};
