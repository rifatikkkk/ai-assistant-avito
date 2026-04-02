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
  total: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  searchParams: GetAdsParams;
  allCategories: string[];
  priceSortDirection: PriceSortDirection;
  currentPage: number;
  itemsPerPage: number;
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
