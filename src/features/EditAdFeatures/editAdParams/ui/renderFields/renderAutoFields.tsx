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
    if (!value || value === "") {
      onChange("transmission", "");
      return;
    }
    const mappedValue = value === "Автомат" ? "automatic" : "manual";
    onChange("transmission", mappedValue);
  };

  const handleChangeNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
  ) => {
    let newValue = e.target.value;
    newValue = newValue.replace(/[^\d]/g, "");
    if (key === "yearOfManufacture" && newValue.length > 4) {
      newValue = newValue.slice(0, 4);
    }
    onChange(key, newValue);
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
          placeholder="Год выпуска"
          value={params.yearOfManufacture || ""}
          onChange={(e) => handleChangeNumber(e, "yearOfManufacture")}
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
          placeholder="Пробег"
          value={params.mileage || ""}
          onChange={(e) => handleChangeNumber(e, "mileage")}
        />
      </div>

      <div className="params__attr">
        <label>Мощность</label>
        <Input
          name="enginePower"
          placeholder="Мощность"
          value={params.enginePower || ""}
          onChange={(e) => handleChangeNumber(e, "enginePower")}
        />
      </div>
    </>
  );
};
