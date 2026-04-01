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
