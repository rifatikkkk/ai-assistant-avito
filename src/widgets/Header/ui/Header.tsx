import { type FC } from "react";
import "./Header.style.css";
import { useAppSelector } from "@/shared/lib";
import { selectTotalCount } from "@/entities/ad/model";

type HeaderProps = {
  countAds: number;
};

export const Header: FC<HeaderProps> = () => {
  const totalAds = useAppSelector(selectTotalCount);
  return (
    <header className="ads-header">
      <h3>Мои объявления</h3>
      <p>{totalAds} объявления</p>
    </header>
  );
};
