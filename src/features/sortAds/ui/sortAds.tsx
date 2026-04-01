import { useState } from "react";
import "./sortAds.style.css";

export const SortAds = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  return (
    <div className="sort">
      <select
        className="sort-select"
        onClick={() => setIsSortOpen(!isSortOpen)}
      >
        <option value="newest">По новизне (сначала новые)</option>
        <option value="oldest">По новизне (сначала старые)</option>
        <option value="price_asc">По цене (сначала дешевые)</option>
        <option value="price_desc">По цене (сначала дорогие)</option>
        <option value="popular">По популярности</option>
      </select>
      <img
        src="svg/arrow.svg"
        alt="arrow"
        className={`sort__arrow ${isSortOpen ? "sort__arrow--open" : ""}`}
      />
    </div>
  );
};
