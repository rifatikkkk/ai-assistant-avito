import type { ElectronicsItemParams } from "@/entities/ad/model";
import { Input, Select } from "@/shared/ui";

interface ElectronicsParamsFieldsProps {
  params: ElectronicsItemParams;
  onChange: (key: string, value: string) => void;
}

export const RenderElectronicsFields = ({
  params,
  onChange,
}: ElectronicsParamsFieldsProps) => {
  const handleTypeChange = (value: string) => {
    if (!value || value === "") {
      onChange("type", "");
      return;
    }
    const mappedValue =
      value === "Телефон"
        ? "phone"
        : value === "Ноутбук"
          ? "laptop"
          : value === "Разное"
            ? "misc"
            : "";

    onChange("type", mappedValue);
  };

  const handleConditionChange = (value: string) => {
    if (!value || value === "") {
      onChange("condition", "");
      return;
    }
    const mappedValue =
      value === "Новое" ? "new" : value === "Б/у" ? "used" : "";
    onChange("condition", mappedValue);
  };

  const getTypeValue = () => {
    if (params.type === "phone") return "Телефон";
    if (params.type === "laptop") return "Ноутбук";
    if (params.type === "misc") return "Разное";
    return "";
  };

  const getConditionValue = () => {
    if (params.condition === "new") return "Новое";
    if (params.condition === "used") return "Б/у";
    return "";
  };

  return (
    <>
      <div className="params__attr">
        <div className="params__required">
          <img src="/svg/important.svg" alt="important-icon" />
          <label>Тип</label>
        </div>
        <Select
          required
          name="type"
          width={456}
          values={["Телефон", "Ноутбук", "Разное"]}
          value={getTypeValue()}
          onChange={(e) => handleTypeChange(e.target.value)}
        />
      </div>

      <div className="params__attr">
        <label>Бренд</label>
        <Input
          name="brand"
          placeholder="Брэнд"
          value={params.brand || ""}
          onChange={(e) => onChange("brand", e.target.value)}
        />
      </div>

      <div className="params__attr">
        <label>Модель</label>
        <Input
          name="model"
          placeholder="Модель"
          value={params.model || ""}
          onChange={(e) => onChange("model", e.target.value)}
        />
      </div>

      <div className="params__attr">
        <label>Цвет</label>
        <Input
          name="color"
          placeholder="Цвет"
          value={params.color || ""}
          onChange={(e) => onChange("color", e.target.value)}
        />
      </div>

      <div className="params__attr">
        <label>Состояние</label>
        <Select
          name="condition"
          width={456}
          values={["Новое", "Б/у"]}
          value={getConditionValue()}
          onChange={(e) => handleConditionChange(e.target.value)}
        />
      </div>
    </>
  );
};
