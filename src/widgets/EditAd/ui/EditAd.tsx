import { Button, HelpButton, Input, Select, TextArea } from "@/shared/ui";
import { useAppSelector } from "@/app/store/hooks";
import { selectCurrentAd } from "@/entities/ad/model";
import "./EditAd.style.css";
import {
  EditAdCategory,
  EditAdPrice,
  EditAdTitle,
} from "@/features/EditAdFeatures";
import { useEffect, useState } from "react";
import type { FormDataUpdate } from "../model/types/dataForm";
import { transformFromApiData } from "../model/utils/transformData";

export const EditAd = () => {
  const ad = useAppSelector(selectCurrentAd);

  const [formData, setFormData] = useState<FormDataUpdate>({
    category: "",
    title: "",
    price: "",
    description: "",
    params: {},
  });

  useEffect(() => {
    // check when don't have ad (direct opening and reload)
    if (ad) {
      const transformedData = transformFromApiData(ad);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(transformedData);
    }
  }, [ad]);

  const updateFormData = (field: keyof FormDataUpdate, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form className="edit-form">
      <EditAdCategory
        value={formData.category}
        onChange={(value) => updateFormData("category", value)}
      />

      <EditAdTitle
        value={formData.title}
        onChange={(value) => updateFormData("title", value)}
      />
      <EditAdPrice
        value={formData.price}
        onChange={(value) => updateFormData("price", value)}
      />

      <div className="layout-column specs">
        <span>Характеристики</span>
        <div className="specs-actions">
          <div className="layout-column specs-type">
            <label>Тип</label>
            <Select
              name="type"
              width={456}
              values={["Ноутбук", "Телефон"]}
              primaryColor={false}
            />
          </div>

          <div className="layout-column specs-brand">
            <label>Брэнд</label>
            <Input name="brand" placeholder="Apple" />
          </div>

          <div className="layout-column specs-model">
            <label>Модель</label>
            <Input name="model" placeholder="M1 Pro" />
          </div>

          <div className="layout-column specs-color">
            <label>Цвет</label>
            <Input name="color" placeholder="Цвет" />
          </div>

          <div className="layout-column specs-condition">
            <label>Состояние</label>
            <Select
              name="condition"
              width={456}
              values={["Новое", "Б/у"]}
              primaryColor={false}
            />
          </div>
        </div>
      </div>

      <div className="layout-column desc">
        <span>Описание</span>
        <TextArea name="desc" placeholder="Описание" />
        <HelpButton>Улучшить описание</HelpButton>
      </div>

      <div className="edit-form__actions">
        <Button>Сохранить</Button>
        <Button primaryColor={false}>Отменить</Button>
      </div>
    </form>
  );
};
