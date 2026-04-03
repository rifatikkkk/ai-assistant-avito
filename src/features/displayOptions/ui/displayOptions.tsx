import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectIsDisplayGrid, setDisplayMode } from "@/entities/ad/model";
import "./displayOptions.style.css";

export const DisplayOptions = () => {
  const dispatch = useAppDispatch();
  const isDisplayGrid = useAppSelector(selectIsDisplayGrid);

  const handleGridClick = () => {
    dispatch(setDisplayMode(true));
  };

  const handleListClick = () => {
    dispatch(setDisplayMode(false));
  };

  return (
    <div className="options__layout">
      <button
        className={`options__btn ${isDisplayGrid ? "options__btn--active" : ""}`}
        aria-label="Плитка"
        onClick={handleGridClick}
        disabled={isDisplayGrid}
      >
        <img src="/svg/grid.svg" alt="grid-icon" />
      </button>

      <button
        className={`options__btn ${!isDisplayGrid ? "options__btn--active" : ""}`}
        aria-label="Список"
        onClick={handleListClick}
        disabled={!isDisplayGrid}
      >
        <img src="/svg/list.svg" alt="list-icon" />
      </button>
    </div>
  );
};
