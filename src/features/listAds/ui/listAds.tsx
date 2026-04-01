import { AdCard } from "@/features/adCard";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectAdsStatus, selectAllAds } from "@/entities/ad/model";
import { useEffect } from "react";
import { getAds } from "@/entities/ad/api";

import "./ListAds.style.css";

export const ListAds = () => {
  const dispatch = useAppDispatch();
  const ads = useAppSelector(selectAllAds);
  const status = useAppSelector(selectAdsStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAds());
    }
  }, [status, dispatch]);

  return (
    <main className="ads-content">
      <ul className="ads-list">
        {ads.map((item) => (
          <AdCard item={item} />
        ))}
      </ul>
    </main>
  );
};
