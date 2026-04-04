import type { RouteProps } from "react-router";

import { HomePage } from "@/pages/Home";
import { AdsPage } from "@/pages/Ads";
import { AdsDetailsPage } from "@/pages/AdsDetails";
import { AdEditPage } from "@/pages/AdEdit";
import { AppRoutes, routePaths } from "@/shared/config";

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRoutes.ADS],
    element: <AdsPage />,
  },
  {
    path: routePaths[AppRoutes.DETAILS],
    element: <AdsDetailsPage />,
  },
  {
    path: routePaths[AppRoutes.EDIT],
    element: <AdEditPage />,
  },
];
