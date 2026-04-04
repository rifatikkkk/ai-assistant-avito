import type {
  AutoItemParams,
  ElectronicsItemParams,
  RealEstateItemParams,
} from "../types/AdSchema";
import type { FormDataUpdate, SubmitData } from "../types/dataForm";

export const cleanEmptyParams = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Record<string, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Record<string, any> => {
  return Object.entries(params).reduce(
    (acc, [key, value]) => {
      const isEmpty = value === undefined || value === null || value === "";

      if (!isEmpty) {
        acc[key] = value;
      }
      return acc;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {} as Record<string, any>,
  );
};

export const transformToSubmitData = (
  formData: FormDataUpdate,
  id: number,
): SubmitData => {
  const cleanedParams = cleanEmptyParams(formData.params);

  let params: AutoItemParams | RealEstateItemParams | ElectronicsItemParams =
    {};

  if (formData.category === "auto") {
    params = {
      brand: cleanedParams.brand,
      model: cleanedParams.model,
      yearOfManufacture: cleanedParams.yearOfManufacture
        ? Number(cleanedParams.yearOfManufacture)
        : undefined,
      transmission: cleanedParams.transmission as "automatic" | "manual",
      mileage: cleanedParams.mileage
        ? Number(cleanedParams.mileage)
        : undefined,
      enginePower: cleanedParams.enginePower
        ? Number(cleanedParams.enginePower)
        : undefined,
    };
  } else if (formData.category === "real_estate") {
    params = {
      type: cleanedParams.type as "flat" | "house" | "room",
      address: cleanedParams.address,
      area: cleanedParams.area ? Number(cleanedParams.area) : undefined,
      floor: cleanedParams.floor ? Number(cleanedParams.floor) : undefined,
    };
  } else if (formData.category === "electronics") {
    params = {
      type: cleanedParams.type as "phone" | "laptop" | "misc",
      brand: cleanedParams.brand,
      model: cleanedParams.model,
      condition: cleanedParams.condition as "new" | "used",
      color: cleanedParams.color,
    };
  }

  return {
    id,
    category: formData.category,
    title: formData.title,
    price: Number(formData.price),
    description: formData.description,
    params,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transformFromApiData = (ad: any): FormDataUpdate => {
  const transformedParams: FormDataUpdate["params"] = {};

  if (ad.params) {
    if ("brand" in ad.params) transformedParams.brand = ad.params.brand;
    if ("model" in ad.params) transformedParams.model = ad.params.model;
    if ("yearOfManufacture" in ad.params)
      transformedParams.yearOfManufacture =
        ad.params.yearOfManufacture?.toString();
    if ("transmission" in ad.params)
      transformedParams.transmission = ad.params.transmission;
    if ("mileage" in ad.params)
      transformedParams.mileage = ad.params.mileage?.toString();
    if ("enginePower" in ad.params)
      transformedParams.enginePower = ad.params.enginePower?.toString();

    if ("type" in ad.params) transformedParams.type = ad.params.type;
    if ("address" in ad.params) transformedParams.address = ad.params.address;
    if ("area" in ad.params)
      transformedParams.area = ad.params.area?.toString();
    if ("floor" in ad.params)
      transformedParams.floor = ad.params.floor?.toString();

    if ("condition" in ad.params)
      transformedParams.condition = ad.params.condition;
    if ("color" in ad.params) transformedParams.color = ad.params.color;
  }

  return {
    category: ad.category,
    title: ad.title,
    price: String(ad.price),
    description: ad.description || "",
    params: transformedParams,
  };
};
