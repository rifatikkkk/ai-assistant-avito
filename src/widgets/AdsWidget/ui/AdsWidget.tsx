import { ListAds } from "@/features/listAds";
import { PaginationAds } from "@/features/paginationAds";
import "./AdsWidget.style.css";
import { useEffect } from "react";
import { useAppDispatch } from "@/app/store/hooks";
import { clearAdsStatus } from "@/entities/ad/model";

export const AdsWidget = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearAdsStatus());
  }, [dispatch]);

  return (
    <div className="ads-widget">
      <ListAds />
      <PaginationAds />
    </div>
  );
};
