export type FormDataUpdate = {
  category: string;
  title: string;
  price: string;
  description: string;
  params: {
    brand?: string;
    model?: string;
    yearOfManufacture?: string;
    transmission?: string;
    mileage?: string;
    enginePower?: string;

    type?: string;
    address?: string;
    area?: string;
    floor?: string;

    condition?: string;
    color?: string;
  };
};
