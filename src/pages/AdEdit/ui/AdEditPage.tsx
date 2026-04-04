import { Title } from "@/shared/ui";
import "./AdEditPage.style.css";
import { EditAd } from "@/widgets/EditAd";

const AdEditPage = () => {
  return (
    <div className="ad-edit-page">
      <Title>Редактирование объявления</Title>
      <EditAd />
    </div>
  );
};

export default AdEditPage;
