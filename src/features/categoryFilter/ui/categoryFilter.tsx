import { useEffect, useState } from "react";
import "./categoryFilter.style.css";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  selectAllCategories,
  selectSearchParams,
  selectSelectedCategories,
  setSearchParams,
} from "@/entities/ad/model";
import { getAds } from "@/entities/ad/api";
import { getCategoryLabel } from "@/shared/config";

export const CategoryFilter = () => {
  const dispatch = useAppDispatch();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const allCategories = useAppSelector(selectAllCategories);
  const selectedCategories = useAppSelector(selectSelectedCategories);
  const searchParams = useAppSelector(selectSearchParams);

  const [tempSelected, setTempSelected] =
    useState<string[]>(selectedCategories);

  useEffect(() => {
    setTempSelected(selectedCategories);
  }, [selectedCategories]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    let newSelected: string[];

    if (checked) {
      newSelected = [...tempSelected, category];
    } else {
      newSelected = tempSelected.filter((c) => c !== category);
    }

    setTempSelected(newSelected);

    const categoriesParam =
      newSelected.length > 0 ? newSelected.join(",") : undefined;
    const newParams = { ...searchParams, categories: categoriesParam, skip: 0 };

    dispatch(setSearchParams({ categories: categoriesParam, skip: 0 }));
    dispatch(getAds(newParams));
  };

  return (
    <div className="filter-category">
      <button
        className="filter-category__trigger"
        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
      >
        <span>Категория</span>
        <img
          src="svg/arrow.svg"
          alt="arrow"
          className={`filter-category__arrow ${isCategoryOpen ? "filter-category__arrow--open" : ""}`}
        />
      </button>

      {isCategoryOpen && (
        <ul className="filter-category__dropdown">
          {allCategories.length > 0 && (
            <>
              {allCategories.map((category) => (
                <li key={category}>
                  <label className="filter-category__item">
                    <input
                      type="checkbox"
                      value={category}
                      checked={tempSelected.includes(category)}
                      onChange={(e) =>
                        handleCategoryChange(category, e.target.checked)
                      }
                    />
                    <span>{getCategoryLabel(category)}</span>
                  </label>
                </li>
              ))}
            </>
          )}
        </ul>
      )}
    </div>
  );
};
