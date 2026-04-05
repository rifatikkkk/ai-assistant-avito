import { type FC } from "react";
import { Select } from "@/shared/ui";
import { categoryMap, reverseMap } from "../model/config/categoryConfig";
import "./editAdCategory.style.css";
import { selectAllCategories } from "@/entities/ad/model";
import { useAppSelector } from "@/shared/lib";

interface EditAdCategoryProps {
  value: string;
  onChange: (value: string) => void;
}

export const EditAdCategory: FC<EditAdCategoryProps> = ({
  value,
  onChange,
}) => {
  const allCategories = useAppSelector(selectAllCategories);

  const categoryLabels =
    allCategories.length > 0
      ? allCategories.map((categ) => categoryMap[categ] || categ)
      : Object.values(categoryMap);

  const displayValue = categoryMap[value] || "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(reverseMap[e.target.value]);
  };

  return (
    <div className="category__wrap">
      <span>Категория</span>
      <Select
        required
        name="category"
        values={categoryLabels}
        width={256}
        primaryColor={true}
        value={displayValue}
        onChange={handleChange}
      />
    </div>
  );
};
