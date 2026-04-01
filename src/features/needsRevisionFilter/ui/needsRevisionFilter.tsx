import { Tumbler } from "@/shared/ui";
import "./needsRevisionFilter.style.css";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectSearchParams, setSearchParams } from "@/entities/ad/model";
import { useState } from "react";
import { getAds } from "@/entities/ad/api";

export const NeedsRevisionFilter = () => {
  const dispatch = useAppDispatch();
  const searchParams = useAppSelector(selectSearchParams);
  const [isChecked, setIsChecked] = useState(
    searchParams.needsRevision === true,
  );

  const handleToggle = (checked: boolean) => {
    setIsChecked(checked);

    const newParams = {
      ...searchParams,
      needsRevision: checked ? true : undefined,
    };

    dispatch(
      setSearchParams({
        needsRevision: checked ? true : undefined,
      }),
    );

    dispatch(getAds(newParams));
  };
  return (
    <div className="filter-revision">
      <p>Только требующие доработок</p>
      <Tumbler checked={isChecked} onChange={handleToggle} />
    </div>
  );
};
