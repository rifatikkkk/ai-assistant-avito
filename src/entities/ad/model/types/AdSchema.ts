export interface Ad {
  id: number;
  title: string;
  price: number;
  category: string;
  needsRevision: boolean;
}

export interface AdsState {
  items: Ad[];
  total: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  searchParams: GetAdsParams;
  allCategories: string[];
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
