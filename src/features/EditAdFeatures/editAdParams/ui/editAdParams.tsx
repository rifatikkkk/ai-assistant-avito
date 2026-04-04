/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from "react";
import "./editAdParams.style.css";
import { RenderAutoFields } from "./renderFields/renderAutoFields";
import { RenderRealEstateFields } from "./renderFields/renderRealStateFields";
import { RenderElectronicsFields } from "./renderFields/renderElectronicsFiels";

interface EditAdParamsProps {
  category: string;
  params: any;
  onChange: (params: any) => void;
}

export const EditAdParams: FC<EditAdParamsProps> = ({
  category,
  params,
  onChange,
}) => {
  const handleParamChange = (key: string, value: string) => {
    onChange({ ...params, [key]: value });
  };

  const renderFieldsByCategory = () => {
    switch (category) {
      case "auto":
        return (
          <RenderAutoFields params={params} onChange={handleParamChange} />
        );
      case "real_estate":
        return (
          <RenderRealEstateFields
            params={params}
            onChange={handleParamChange}
          />
        );
      case "electronics":
        return (
          <RenderElectronicsFields
            params={params}
            onChange={handleParamChange}
          />
        );
      default:
        return <div>Выберите категорию</div>;
    }
  };
  return (
    <div className="params__wrap">
      <span>Характеристики</span>
      <div className="params__list">{renderFieldsByCategory()}</div>
    </div>
  );
};
