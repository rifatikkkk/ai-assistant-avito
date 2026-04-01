import type { RouteProps } from "react-router";

import { HomePage } from "@/pages/Home";
import { AppRoutes, routePaths } from "@/shared/config";
import { AdsPage } from "@/pages/Ads";

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRoutes.ADS],
    element: <AdsPage />,
  },
];
