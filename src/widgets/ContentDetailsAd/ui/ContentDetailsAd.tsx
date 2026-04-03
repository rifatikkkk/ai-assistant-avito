import { RevisionInfoAd } from "@/features/revisionInfoAd";
import { SpecsInfoAd } from "@/features/specsInfoAd";
import "./ContentDetailsAd.style.css";
import { useAppSelector } from "@/app/store/hooks";
import { getMissingFields, selectCurrentAd } from "@/entities/ad/model";

export const ContentDetailsAd = () => {
  const ad = useAppSelector(selectCurrentAd);
  const missingFields = getMissingFields(ad);

  return (
    <div className="ads-details__content">
      <img
        src="/pic/ad-details_cover.png"
        alt="ad-cover"
        className="ads-details__cover"
      />
      <div className="ads-details__card">
        {ad?.needsRevision && missingFields.length > 0 && (
          <RevisionInfoAd values={missingFields} />
        )}
        <SpecsInfoAd />
      </div>
    </div>
  );
};
