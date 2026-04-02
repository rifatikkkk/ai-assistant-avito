import { AdCard } from "@/features/adCard";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  selectAdsStatus,
  selectDisplayedAds,
  selectSearchParams,
} from "@/entities/ad/model";
import { useEffect } from "react";
import { getAds } from "@/entities/ad/api";

import "./ListAds.style.css";

export const ListAds = () => {
  const dispatch = useAppDispatch();
  const displayedAds = useAppSelector(selectDisplayedAds);
  const status = useAppSelector(selectAdsStatus);
  const searchParams = useAppSelector(selectSearchParams);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAds(searchParams));
    }
  }, [status, dispatch]);

  return (
    <main className="ads-content">
      <div className="ads-list">
        {displayedAds.map((item, index) => (
          <AdCard item={item} key={`${item.title}-${item.price}-${index}`} />
        ))}
      </div>
    </main>
  );
};
