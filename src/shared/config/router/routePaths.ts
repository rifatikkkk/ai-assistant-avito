export const AppRoutes = {
  HOME: "home",
  ADS: "ads",
  DETAILS: "details",
  EDIT: "edit",
} as const;

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ADS]: "/ads",
  [AppRoutes.DETAILS]: "/ads/:id",
  [AppRoutes.EDIT]: "/ads/:id/edit",
};
