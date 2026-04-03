import { Spec } from "@/shared/ui";
import "./specsInfoAd.style.css";
import { selectCurrentAd } from "@/entities/ad/model";
import { useAppSelector } from "@/app/store/hooks";
import { getSpecItems } from "@/entities/ad/model/utils/formatSpec";

export const SpecsInfoAd = () => {
  const ad = useAppSelector(selectCurrentAd);

  if (!ad) return null;

  const specItems = getSpecItems(ad);

  return (
    <div className="ads-details__specs">
      <p className="ads-details__specs-title">Характеристики</p>
      {specItems.length > 0 ? (
        <Spec items={specItems} />
      ) : (
        <p className="ads-details__specs-empty">
          Нет информации о характеристиках
        </p>
      )}
    </div>
  );
};
