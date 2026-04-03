import { Button } from "@/shared/ui";
import "./ActionsDetailsAd.style.css";
import { HeaderDetailsAd } from "@/features/headerDetailsAd";
import { DatesDetailsAd } from "@/features/datesDetailsAd";

export const ActionsDetailsAd = () => {
  return (
    <div className="ads-details__info">
      <HeaderDetailsAd />
      <div className="ads-details__actions">
        <Button>Редактировать</Button>
        <DatesDetailsAd />
      </div>
    </div>
  );
};
