import { useState } from "react";
import "./categoryFilter.style.css";

export const CategoryFilter = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
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
          <li>
            <label className="filter-category__item">
              <input type="checkbox" value="auto" />
              <span>Авто</span>
            </label>
          </li>
          <li>
            <label className="filter-category__item">
              <input type="checkbox" value="electronics" />
              <span>Электроника</span>
            </label>
          </li>
          <li>
            <label className="filter-category__item">
              <input type="checkbox" value="realty" />
              <span>Недвижимость</span>
            </label>
          </li>
        </ul>
      )}
    </div>
  );
};
