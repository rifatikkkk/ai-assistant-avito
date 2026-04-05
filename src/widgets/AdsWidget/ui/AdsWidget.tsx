import { ListAds } from "@/features/listAds";
import { PaginationAds } from "@/features/paginationAds";
import "./AdsWidget.style.css";
import { useEffect } from "react";
import { useAppDispatch } from "@/shared/lib";
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
