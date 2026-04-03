import { lazy } from "react";

export const AdsDetailsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-expect-error Simulate delay
      setTimeout(() => resolve(import("./AdsDetailsPage")), 2000);
    }),
);
