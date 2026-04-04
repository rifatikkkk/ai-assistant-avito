import { lazy } from "react";

export const AdEditPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-expect-error Simulate delay
      setTimeout(() => resolve(import("./AdEditPage")), 2000);
    }),
);
