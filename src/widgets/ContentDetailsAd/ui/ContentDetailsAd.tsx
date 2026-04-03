import { RevisionInfoAd } from "@/features/revisionInfoAd";
import { SpecsInfoAd } from "@/features/specsInfoAd";
import "./ContentDetailsAd.style.css";

export const ContentDetailsAd = () => {
  return (
    <div className="ads-details__content">
      <img
        src="/pic/ad-details_cover.png"
        alt="ad-cover"
        className="ads-details__cover"
      />
      <div className="ads-details__card">
        <RevisionInfoAd />

        <SpecsInfoAd />
      </div>
    </div>
  );
};
