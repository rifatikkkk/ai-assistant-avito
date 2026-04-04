import { Button, HelpButton, TextArea } from "@/shared/ui";
import { useAppSelector } from "@/app/store/hooks";
import { selectCurrentAd } from "@/entities/ad/model";
import "./EditAd.style.css";
import {
  EditAdCategory,
  EditAdParams,
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

      <EditAdParams
        params={formData.params}
        onChange={(params) => updateFormData("params", params)}
        category={formData.category}
      />

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
