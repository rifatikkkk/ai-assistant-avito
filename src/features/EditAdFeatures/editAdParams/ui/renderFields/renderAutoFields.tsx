import type { AutoItemParams } from "@/entities/ad/model";
import { Input, Select } from "@/shared/ui";

interface AutoParamsFieldsProps {
  params: AutoItemParams;
  onChange: (key: string, value: string) => void;
}

export const RenderAutoFields = ({
  params,
  onChange,
}: AutoParamsFieldsProps) => {
  const handleTransmissionChange = (value: string) => {
    const mappedValue = value === "Автомат" ? "automatic" : "manual";
    onChange("transmission", mappedValue);
  };

  const getTransmissionValue = () => {
    if (params.transmission === "automatic") return "Автомат";
    if (params.transmission === "manual") return "Механика";
    return "";
  };

  return (
    <>
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
        <label>Год выпуска</label>
        <Input
          name="yearOfManufacture"
          type="number"
          placeholder="Год выпуска"
          value={params.yearOfManufacture || ""}
          onChange={(e) => onChange("yearOfManufacture", e.target.value)}
        />
      </div>

      <div className="params__attr">
        <label>Коробка передач</label>
        <Select
          name="transmission"
          width={456}
          values={["Автомат", "Механика"]}
          value={getTransmissionValue()}
          onChange={(e) => handleTransmissionChange(e.target.value)}
        />
      </div>

      <div className="params__attr">
        <label>Пробег</label>
        <Input
          name="mileage"
          type="number"
          placeholder="Пробег"
          value={params.mileage || ""}
          onChange={(e) => onChange("mileage", e.target.value)}
        />
      </div>

      <div className="params__attr">
        <label>Мощность</label>
        <Input
          name="enginePower"
          type="number"
          placeholder="Мощность"
          value={params.enginePower || ""}
          onChange={(e) => onChange("enginePower", e.target.value)}
        />
      </div>
    </>
  );
};
