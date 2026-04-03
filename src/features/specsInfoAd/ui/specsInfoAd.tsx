import { Spec } from "@/shared/ui";
import "./specsInfoAd.style.css";

export const SpecsInfoAd = () => {
  return (
    <div className="ads-details__specs">
      <p className="ads-details__specs-title">Характеристики</p>

      <Spec
        items={[
          { name: "Тип", value: "Ноутбук" },
          { name: "Бренд", value: "Apple" },
          { name: "Модель", value: "M1 Pro" },
        ]}
      />
    </div>
  );
};
