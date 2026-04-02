import { ListAds } from "@/features/listAds";
import { PaginationAds } from "@/features/paginationAds";
import "./AdsWidget.style.css";

export const AdsWidget = () => {
  return (
    <div className="ads-widget">
      <ListAds />
      <PaginationAds />
    </div>
  );
};
