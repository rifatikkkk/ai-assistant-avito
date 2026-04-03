export interface Ad {
  id: number;
  title: string;
  price: number;
  category: string;
  needsRevision: boolean;
}

export type PriceSortDirection = "price_asc" | "price_desc" | null;

export interface AdsState {
  items: Ad[];
  displayedItems: Ad[];
  currentAd: AdItem | null;
  total: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  searchParams: GetAdsParams;
  allCategories: string[];
  priceSortDirection: PriceSortDirection;
  currentPage: number;
  itemsPerPage: number;
  isDisplayGrid: boolean;
}

export interface GetAdsParams {
  q?: string;
  limit?: number | null;
  skip?: number | null;
  needsRevision?: boolean;
  categories?: string;
  sortColumn?: "title" | "createdAt" | null;
  sortDirection?: "asc" | "desc" | null;
}

export type AutoItemParams = {
  brand?: string;
  model?: string;
  yearOfManufacture?: number;
  transmission?: "automatic" | "manual";
  mileage?: number;
  enginePower?: number;
};

export type RealEstateItemParams = {
  type?: "flat" | "house" | "room";
  address?: string;
  area?: number;
  floor?: number;
};

export type ElectronicsItemParams = {
  type?: "phone" | "laptop" | "misc";
  brand?: string;
  model?: string;
  condition?: "new" | "used";
  color?: string;
};

export type AdItem = {
  id: number;
  title: string;
  description?: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  needsRevision: boolean;
} & (
  | { category: "auto"; params: AutoItemParams }
  | { category: "real_estate"; params: RealEstateItemParams }
  | { category: "electronics"; params: ElectronicsItemParams }
);
