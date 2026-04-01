import { lazy } from "react";

export const AdsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-expect-error Simulate delay
      setTimeout(() => resolve(import("./AdsPage")), 2000);
    }),
);
