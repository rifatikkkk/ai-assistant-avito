import { ActionsDetailsAd } from "@/widgets/ActionsDetailsAd";
import { ContentDetailsAd } from "@/widgets/ContentDetailsAd";
import { DescDetailsAd } from "@/widgets/DescDetailsAd";
import "./AdsDetailsPage.style.css";

const AdsDetailsPage = () => {
  return (
    <div className="ads-details-page">
      <ActionsDetailsAd />

      <ContentDetailsAd />

      <DescDetailsAd />
    </div>
  );
};

export default AdsDetailsPage;
