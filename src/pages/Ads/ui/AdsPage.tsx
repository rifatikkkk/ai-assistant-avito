import "./AdsPage.style.css";
import { ads } from "../seed/ads";

const AdsPage = () => {
  return (
    <div className="ads-page">
      <div className="content-layout">
        <aside className="filters-sidebar">Фильтры</aside>

        <main className="ads-content">
          <ul className="ads-list">
            {ads.map((item) => (
              <li key={item.id}>
                <article className="ad-card">
                  <img
                    src="pic/ad_cover.png"
                    alt="ad-cover"
                    className="ad-card__cover"
                  />
                  <div className="ad-card__content">
                    <h5 className="ad-card__title">{item.title}</h5>
                    <p className="ad-card__price">{item.price}</p>
                    <div className="ad-card__category">
                      <p>{item.category}</p>
                    </div>
                    {item.requiresRevision && (
                      <ul className="ad-card__revision">
                        <li>Требует доработок</li>
                      </ul>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default AdsPage;
