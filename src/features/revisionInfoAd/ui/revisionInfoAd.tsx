import { Warning } from "@/shared/ui";
import "./revisionInfoAd.style.css";
import type { FC } from "react";

interface RevisionInfoAdProps {
  values: string[];
}

export const RevisionInfoAd: FC<RevisionInfoAdProps> = ({ values }) => {
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
