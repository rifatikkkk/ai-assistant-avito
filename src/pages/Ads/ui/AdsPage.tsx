import "./AdsPage.style.css";

import { Filters } from "@/widgets/Filters";
import { ListAds } from "@/widgets/ListAds";

const AdsPage = () => {
  return (
    <div className="ads-page">
      <div className="content-layout">
        <Filters />

        <ListAds />
      </div>
    </div>
  );
};

export default AdsPage;
