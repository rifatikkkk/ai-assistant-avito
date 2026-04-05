import { AdCard } from "@/features/adCard";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import {
  selectAdsStatus,
  selectDisplayedAds,
  selectIsDisplayGrid,
  selectSearchParams,
} from "@/entities/ad/model";
import { useEffect } from "react";
import { getAds } from "@/entities/ad/api";

import "./listAds.style.css";

export const ListAds = () => {
  const dispatch = useAppDispatch();
  const displayedAds = useAppSelector(selectDisplayedAds);
  const status = useAppSelector(selectAdsStatus);
  const searchParams = useAppSelector(selectSearchParams);
  const isDisplayGrid = useAppSelector(selectIsDisplayGrid);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAds(searchParams));
    }
  }, [status, dispatch]);

  return (
    <main className="ads-content">
      <div className={`${isDisplayGrid ? "ads-grid" : "ads-list"}`}>
        {displayedAds.map((item) => (
          <AdCard item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};
