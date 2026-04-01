import "./searchAds.style.css";

export const SearchAds = () => {
  return (
    <div className="search">
      <button className="search-btn">
        <img src="svg/search.svg" alt="search-icon" className="search-icon" />
      </button>

      <input
        type="text"
        placeholder="Найти объявление..."
        className="search-input"
      />
    </div>
  );
};
