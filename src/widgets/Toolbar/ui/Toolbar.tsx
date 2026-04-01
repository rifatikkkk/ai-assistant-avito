import { SearchAds } from "@/features/searchAds";
import { DisplayOptions } from "@/features/displayOptions";
import { SortAds } from "@/features/sortAds";

import "./Toolbar.style.css";

export const Toolbar = () => {
  return (
    <div className="toolbar">
      <SearchAds />

      <div className="toolbar-actions">
        <DisplayOptions />

        <SortAds />
      </div>
    </div>
  );
};
