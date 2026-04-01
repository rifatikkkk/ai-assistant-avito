import type { SortOption } from "../options/optionsSort";

export interface SortConfigItem {
  sortColumn: "title" | "createdAt" | null;
  sortDirection: "asc" | "desc" | null;
}

export const sortConfig: Record<SortOption, SortConfigItem> = {
  default: { sortColumn: null, sortDirection: null },
  title_asc: { sortColumn: "title", sortDirection: "asc" },
  title_desc: { sortColumn: "title", sortDirection: "desc" },
  createdAt_asc: { sortColumn: "createdAt", sortDirection: "asc" },
  createdAt_desc: { sortColumn: "createdAt", sortDirection: "desc" },
};

export const sortOptionsDisplay = [
  { value: "default", label: "По умолчанию" },
  { value: "title_asc", label: "По названию (А → Я)" },
  { value: "title_desc", label: "По названию (Я → А)" },
  { value: "createdAt_asc", label: "По дате (сначала старые)" },
  { value: "createdAt_desc", label: "По дате (сначала новые)" },
] as const;
