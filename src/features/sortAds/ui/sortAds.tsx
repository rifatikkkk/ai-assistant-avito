import { useState } from "react";
import "./sortAds.style.css";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  applyPriceSort,
  selectPriceSortDirection,
  selectSearchParams,
  setSearchParams,
} from "@/entities/ad/model";
import {
  selectCurrentSort,
  sortConfig,
  sortOptionsDisplay,
  type SortOption,
} from "../model";
import { getAds } from "@/entities/ad/api";
import { useClickOutside } from "@/shared/lib";

export const SortAds = () => {
  const dispatch = useAppDispatch();
  const searchParams = useAppSelector(selectSearchParams);
  const priceSortDirection = useAppSelector(selectPriceSortDirection);
  const currentSort = useAppSelector(selectCurrentSort);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortRef = useClickOutside<HTMLDivElement>(() => {
    setIsSortOpen(false);
  }, isSortOpen);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortOption;
    setIsSortOpen(false);

    if (value === "price_asc" || value === "price_desc") {
      dispatch(setSearchParams({ sortColumn: null, sortDirection: null }));
      dispatch(applyPriceSort(value));
    } else {
      if (priceSortDirection) dispatch(applyPriceSort(null));

      const { sortColumn, sortDirection } = sortConfig[value];

      const newParams = {
        ...searchParams,
        sortColumn,
        sortDirection,
      };

      dispatch(setSearchParams({ sortColumn, sortDirection }));
      dispatch(getAds(newParams));
    }
  };

  return (
    <div className="sort" ref={sortRef}>
      <select
        className="sort-select"
        value={currentSort}
        onChange={handleSortChange}
        onClick={() => setIsSortOpen(!isSortOpen)}
      >
        {sortOptionsDisplay.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <img
        src="svg/arrow.svg"
        alt="arrow"
        className={`sort__arrow ${isSortOpen ? "sort__arrow--open" : ""}`}
      />
    </div>
  );
};
