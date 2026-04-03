import "./ActionsDetailsAd.style.css";
import { HeaderDetailsAd } from "@/features/headerDetailsAd";
import { DatesDetailsAd } from "@/features/datesDetailsAd";
import { LinkToEdit } from "@/features/linkToEdit";

export const ActionsDetailsAd = () => {
  return (
    <div className="ads-details__info">
      <HeaderDetailsAd />
      <div className="ads-details__actions">
        <LinkToEdit />
        <DatesDetailsAd />
      </div>
    </div>
  );
};
