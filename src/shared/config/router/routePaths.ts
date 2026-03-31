export const AppRoutes = {
  HOME: "home",
} as const;

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
};
