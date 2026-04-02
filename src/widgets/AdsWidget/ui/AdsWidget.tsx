import { ListAds } from "@/features/listAds";
import "./AdsWidget.style.css";
import { SwitchPage } from "@/features/switchPage";

export const AdsWidget = () => {
  return (
    <div className="ads-widget">
      <ListAds />
      <SwitchPage />
    </div>
  );
};
