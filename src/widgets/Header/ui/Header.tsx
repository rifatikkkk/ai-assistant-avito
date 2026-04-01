import { type FC } from "react";
import "./Header.style.css";

type HeaderProps = {
  countAds: number;
};

export const Header: FC<HeaderProps> = ({ countAds }) => {
  return (
    <header className="ads-header">
      <h3>Мои объявления</h3>
      <p>{countAds} объявления</p>
    </header>
  );
};
