import type { Ad } from "@/entities/ad/model";
import type { FC } from "react";
import "./adCard.style.css";

type AdCardProps = {
  item: Ad;
};

export const AdCard: FC<AdCardProps> = ({ item }) => {
  return (
    <li key={item.id}>
      <article className="ad-card">
        <img src="pic/ad_cover.png" alt="ad-cover" className="ad-card__cover" />
        <div className="ad-card__content">
          <h5 className="ad-card__title">{item.title}</h5>
          <p className="ad-card__price">{item.price} ₽</p>
          <div className="ad-card__category">
            <p>{item.category}</p>
          </div>
          {item.requiresRevision && (
            <ul className="ad-card__revision">
              <li>Требует доработок</li>
            </ul>
          )}
        </div>
      </article>
    </li>
  );
};
