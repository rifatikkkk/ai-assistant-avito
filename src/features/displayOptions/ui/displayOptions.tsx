import "./displayOptions.style.css";

export const DisplayOptions = () => {
  return (
    <div className="options__layout">
      <button className="options__btn options__btn--active" aria-label="Плитка">
        <img src="svg/tile.svg" alt="tile-icon" />
      </button>

      <button className="options__btn options__btn--active" aria-label="Список">
        <img src="svg/list.svg" alt="list-icon" />
      </button>
    </div>
  );
};
