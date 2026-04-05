import { Tumbler } from "@/shared/ui";
import "./needsRevisionFilter.style.css";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { selectSearchParams, setSearchParams } from "@/entities/ad/model";
import { getAds } from "@/entities/ad/api";

export const NeedsRevisionFilter = () => {
  const dispatch = useAppDispatch();
  const searchParams = useAppSelector(selectSearchParams);
  const isChecked = searchParams.needsRevision === true;

  const handleToggle = (checked: boolean) => {
    const newNeedsRevision = checked ? true : undefined;

    dispatch(
      setSearchParams({
        needsRevision: newNeedsRevision,
      }),
    );

    dispatch(
      getAds({
        ...searchParams,
        needsRevision: newNeedsRevision,
      }),
    );
  };
  return (
    <div className="filter-revision">
      <p>Только требующие доработок</p>
      <Tumbler checked={isChecked} onChange={handleToggle} />
    </div>
  );
};
