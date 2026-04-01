import { useState } from "react";
import "./sortAds.style.css";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectSearchParams, setSearchParams } from "@/entities/ad/model";
import {
  selectCurrentSort,
  sortConfig,
  sortOptionsDisplay,
  type SortOption,
} from "../model";
import { getAds } from "@/entities/ad/api";

export const SortAds = () => {
  const dispatch = useAppDispatch();
  const searchParams = useAppSelector(selectSearchParams);
  const currentSort = useAppSelector(selectCurrentSort);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortOption;
    setIsSortOpen(false);

    const { sortColumn, sortDirection } = sortConfig[value];

    const newParams = {
      ...searchParams,
      sortColumn,
      sortDirection,
    };

    dispatch(setSearchParams({ sortColumn, sortDirection }));
    dispatch(getAds(newParams));
  };

  return (
    <div className="sort">
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
