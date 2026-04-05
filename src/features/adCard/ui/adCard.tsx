import { selectIsDisplayGrid, type Ad } from "@/entities/ad/model";
import type { FC } from "react";
import "./adCard.style.css";
import { useAppSelector } from "@/app/store/hooks";
import { getCategoryLabel } from "@/shared/config";
import { MyLink } from "@/shared/ui";

type AdCardProps = {
  item: Ad;
};

export const AdCard: FC<AdCardProps> = ({ item }) => {
  const isDisplayGrid = useAppSelector(selectIsDisplayGrid);

  return (
    <MyLink to={`/ads/${item.id}`}>
      <article
        className={`ad-card ${isDisplayGrid ? "ad-card--grid" : "ad-card--list"}`}
      >
        <img
          src="/pic/ad_cover.png"
          alt="ad-cover"
          className={`ad-card__cover ${isDisplayGrid ? "ad-card__cover--grid" : "ad-card__cover--list"}`}
        />
        <div
          className={`ad-card__content ${isDisplayGrid ? "ad-card__content--grid" : "ad-card__content--list"}`}
        >
          <div
            className={`${isDisplayGrid ? "ad-card__category--grid" : "ad-card__category--list"}`}
          >
            <p>{getCategoryLabel(item.category)}</p>
          </div>
          <h5 className="ad-card__title">{item.title}</h5>
          <p className="ad-card__price">{item.price} ₽</p>
          {item.needsRevision && (
            <ul className="ad-card__revision">
              <li>Требует доработок</li>
            </ul>
          )}
        </div>
      </article>
    </MyLink>
  );
};
