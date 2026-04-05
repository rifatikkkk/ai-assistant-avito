import type { RealEstateItemParams } from "@/entities/ad/model";
import { Input, Select } from "@/shared/ui";

interface RealEstateParamsFieldsProps {
  params: RealEstateItemParams;
  onChange: (key: string, value: string) => void;
}

export const RenderRealEstateFields = ({
  params,
  onChange,
}: RealEstateParamsFieldsProps) => {
  const handleTypeChange = (value: string) => {
    const mappedValue =
      value === "Квартира" ? "flat" : value === "Дом" ? "house" : "room";
    onChange("type", mappedValue);
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

  const getTypeValue = () => {
    if (params.type === "flat") return "Квартира";
    if (params.type === "house") return "Дом";
    if (params.type === "room") return "Комната";
    return "";
  };

  return (
    <>
      <div className="params__attr">
        <label>Тип</label>
        <Select
          name="type"
          width={456}
          values={["Квартира", "Дом", "Комната"]}
          value={getTypeValue()}
          onChange={(e) => handleTypeChange(e.target.value)}
        />
      </div>

      <div className="params__attr">
        <label>Адрес</label>
        <Input
          name="address"
          placeholder="Улица"
          value={params.address || ""}
          onChange={(e) => onChange("address", e.target.value)}
        />
      </div>

      <div className="params__attr">
        <label>Площадь</label>
        <Input
          name="area"
          placeholder="Площадь"
          value={params.area || ""}
          onChange={(e) => handleChangeNumber(e, "area")}
        />
      </div>

      <div className="params__attr">
        <label>Этаж</label>
        <Input
          name="floor"
          placeholder="Этаж"
          value={params.floor || ""}
          onChange={(e) => handleChangeNumber(e, "floor")}
        />
      </div>
    </>
  );
};
