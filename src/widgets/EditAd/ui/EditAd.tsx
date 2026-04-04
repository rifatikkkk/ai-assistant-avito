import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  selectCurrentAd,
  transformFromApiData,
  transformToSubmitData,
  type FormDataUpdate,
  type SubmitData,
} from "@/entities/ad/model";
import "./EditAd.style.css";
import {
  EditAdCategory,
  EditAdDesc,
  EditAdParams,
  EditAdPrice,
  EditAdTitle,
  FormAdActions,
} from "@/features/EditAdFeatures";
import { useEffect, useState, type FormEvent } from "react";
import { updateAd } from "@/entities/ad/api";
import { useNavigate, useParams } from "react-router";
import { useNotification } from "@/shared/lib";
import { Notification } from "@/shared/ui";

export const EditAd = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const ad = useAppSelector(selectCurrentAd);
  const { notifications, showNotification, removeNotification } =
    useNotification();

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submitData: SubmitData = transformToSubmitData(formData, Number(id));
    try {
      const result = await dispatch(updateAd(submitData)).unwrap();
      if (result.success) {
        showNotification("", "success", 5000);
        setTimeout(() => {
          navigate(`/ads`);
        }, 5000);
      }
    } catch (error) {
      const errorMessage = error as string;
      console.log(errorMessage);
      showNotification(
        "При попытке сохранить изменения произошла ошибка. Попробуйте ещё раз или зайдите позже.",
        "error",
        5000,
      );
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          message={notification.message}
          variant={notification.type}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
      <form className="edit-form" onSubmit={handleSubmit}>
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

        <EditAdDesc
          value={formData.description}
          onChange={(value) => updateFormData("description", value)}
        />

        <FormAdActions onCancel={handleCancel} />
      </form>
    </>
  );
};
