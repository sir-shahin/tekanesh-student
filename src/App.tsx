import "./index.css";

import React from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./Router";

export const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};
