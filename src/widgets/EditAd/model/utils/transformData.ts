import type { FormDataUpdate } from "../types/dataForm";

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
