export const AppRoutes = {
  HOME: "home",
  ADS: "ads",
  DETAILS: "details",
} as const;

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ADS]: "/ads",
  [AppRoutes.DETAILS]: "/ads/:id",
};
