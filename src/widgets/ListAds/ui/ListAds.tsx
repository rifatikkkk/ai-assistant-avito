import { AdCard } from "@/features/adCard";
import { ads } from "../seed/ads";
import "./ListAds.style.css";

export const ListAds = () => {
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
