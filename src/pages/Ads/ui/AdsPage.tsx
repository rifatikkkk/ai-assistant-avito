import "./AdsPage.style.css";

import { Filters } from "@/widgets/Filters";
import { Header } from "@/widgets/Header";
import { ListAds } from "@/widgets/ListAds";

const AdsPage = () => {
  return (
    <div className="ads-page">
      <Header countAds={42} />

      <div className="content-layout">
        <Filters />

        <ListAds />
      </div>
    </div>
  );
};

export default AdsPage;
