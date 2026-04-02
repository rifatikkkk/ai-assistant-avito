import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import "./resetFilter.style.css";
import { selectSearchParams, setSearchParams } from "@/entities/ad/model";
import { getAds } from "@/entities/ad/api";

export const ResetFilter = () => {
  const dispatch = useAppDispatch();
  const searchParams = useAppSelector(selectSearchParams);

  const handleResetFilters = () => {
    const resetParams = {
      ...searchParams,
      categories: undefined,
      needsRevision: undefined,
      skip: 0,
    };

    dispatch(
      setSearchParams({ categories: undefined, needsRevision: undefined }),
    );
    dispatch(getAds(resetParams));
  };

  return (
    <button className="filter-reset" onClick={handleResetFilters}>
      Сбросить фильтр
    </button>
  );
};
