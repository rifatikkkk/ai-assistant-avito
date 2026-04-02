import "./AdsPage.style.css";

import { Filters } from "@/widgets/Filters";
import { Header } from "@/widgets/Header";
import { Toolbar } from "@/widgets/Toolbar";
import { AdsWidget } from "@/widgets/AdsWidget";

const AdsPage = () => {
  return (
    <div className="ads-page">
      <Header countAds={42} />
      <Toolbar />

      <div className="content-layout">
        <Filters />

        <AdsWidget />
      </div>
    </div>
  );
};

export default AdsPage;
