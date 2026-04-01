export interface Ad {
  id: number;
  title: string;
  price: number;
  category: string;
  requiresRevision: boolean;
}

export interface AdsState {
  items: Ad[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface GetAdsParams {
  q?: string;
  limit?: number | null;
  skip?: number | null;
  needsRevision?: boolean;
  sortColumn?: "title" | "createdAt";
  sortDirection?: "asc" | "desc";
}
