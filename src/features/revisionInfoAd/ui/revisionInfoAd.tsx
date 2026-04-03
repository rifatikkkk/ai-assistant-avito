import { Warning } from "@/shared/ui";
import "./revisionInfoAd.style.css";

export const RevisionInfoAd = () => {
  const values = ["Цвет", "Состояние"];

  return (
    <Warning>
      <div className="ads-details__revision-content">
        <p className="ads-details__revision-title">Требуются доработки</p>
        <div className="ads-details__revision-values">
          <p>У объявления не заполнены поля:</p>
          <ul className="ads-details__revision-list">
            {values?.map((value) => (
              <li>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </Warning>
  );
};
