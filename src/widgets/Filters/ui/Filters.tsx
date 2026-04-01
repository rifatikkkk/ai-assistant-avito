import { ImproveFilter } from "@/features/improveFilter";
import { CategoryFilter } from "@/features/categoryFilter";

import "./Filters.style.css";
import { ResetFilter } from "@/features/resetFilter";

export const Filters = () => {
  return (
    <aside className="filter-sidebar">
      <div className="filter-options">
        <h5 className="filter-title">Фильтры</h5>

        <CategoryFilter />

        <ImproveFilter />
      </div>

      <ResetFilter />
    </aside>
  );
};
