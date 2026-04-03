import { useAppSelector } from "@/app/store/hooks";
import "./DescDetailsAd.style.css";
import { selectCurrentAd } from "@/entities/ad/model";

export const DescDetailsAd = () => {
  const ad = useAppSelector(selectCurrentAd);

  return (
    <div className="ads-details__desc">
      <p className="ads-details__desc-title">Описание</p>
      {ad?.description ? (
        <h2 className="ads-details__desc-text">
          Продаю свой MacBook Pro 16" (2021) на чипе M1 Pro. Состояние отличное,
          работал бережно. Мощности хватает на всё: от сложного монтажа до кода,
          при этом ноутбук почти не греется.
        </h2>
      ) : (
        <p className="ads-details__desc-text">Отсутсвует</p>
      )}
    </div>
  );
};
