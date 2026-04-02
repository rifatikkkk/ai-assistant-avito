const categoryDisplayOptions = [
  { value: "auto", label: "Авто" },
  { value: "electronics", label: "Электроника" },
  { value: "real_estate", label: "Недвижимость" },
] as const;

export const getCategoryLabel = (categoryValue: string): string => {
  const found = categoryDisplayOptions.find(
    (opt) => opt.value === categoryValue,
  );
  return found?.label || categoryValue;
};
