import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import "./searchAds.style.css";
import { selectSearchParams, setSearchParams } from "@/entities/ad/model";
import { useState } from "react";
import { getAds } from "@/entities/ad/api";

export const SearchAds = () => {
  const dispatch = useAppDispatch();
  const searchParams = useAppSelector(selectSearchParams);
  const [searchValue, setSearchValue] = useState(searchParams.q || "");

  const performSearch = () => {
    const newParams = { ...searchParams, q: searchValue, skip: 0 };
    dispatch(setSearchParams({ q: searchValue, skip: 0 }));
    dispatch(getAds(newParams));
  };

  const handleSearchClick = () => performSearch();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      performSearch();
    }
  };

  return (
    <div className="search">
      <button className="search-btn" onClick={handleSearchClick}>
        <img src="/svg/search.svg" alt="search-icon" className="search-icon" />
      </button>

      <input
        type="text"
        placeholder="Найти объявление..."
        className="search-input"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};
