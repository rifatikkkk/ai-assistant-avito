import type { FormDataUpdate } from "@/entities/ad/model";

export const validateForm = (formData: FormDataUpdate): boolean => {
  const hasBasicFields =
    formData.category !== "" && formData.title !== "" && formData.price !== "";

  if (!hasBasicFields) return false;

  switch (formData.category) {
    case "auto":
      return true;
    case "real_estate":
      return !!formData.params.type;

    case "electronics":
      return !!formData.params.type;

    default:
      return false;
  }
};
