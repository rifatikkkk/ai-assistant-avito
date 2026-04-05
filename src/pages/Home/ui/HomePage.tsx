import { useNavigate } from "react-router";
import "./HomePage.style.css";
import { Button } from "@/shared/ui";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleToAds = () => {
    navigate("/ads");
  };

  return (
    <div className="home-page">
      Empty home page
      <Button onClick={handleToAds}>К объявлениям</Button>
    </div>
  );
};
