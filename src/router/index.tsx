import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

export const Routes: FC = () => <RouterProvider router={routes} />;
