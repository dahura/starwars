import { FC, Fragment } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import type {
  ActionFunction,
  RouteObject,
  LoaderFunction,
} from "react-router-dom";

import { generatePreservedRoutes, generateRegularRoutes } from "./core";

type Element = () => JSX.Element;
type Module = {
  default: Element;
  Loader: LoaderFunction;
  Action: ActionFunction;
  Catch: Element;
};

const PRESERVED = import.meta.glob<Module>("/src/pages/(_app|404).{jsx,tsx}", {
  eager: true,
});

const ROUTES = import.meta.glob<Module>(
  ["/src/pages/**/[\\w[-]*.{jsx,tsx}", "!**/(_app|404).*"],
  { eager: true }
);

const preservedRoutes = generatePreservedRoutes<Element>(PRESERVED);

const regularRoutes = generateRegularRoutes<RouteObject, Partial<Module>>(
  ROUTES,
  (module, key) => {
    const index =
      /index\.(jsx|tsx)$/.test(key) && !key.includes("pages/index")
        ? { index: true }
        : {};

    return {
      ...index,
      Component: module?.default,
      ErrorBoundary: module?.Catch,
      loader: module?.Loader,
      action: module?.Action,
    };
  }
);

const App = preservedRoutes?.["_app"] || Outlet;
const NotFound = preservedRoutes?.["404"] || Fragment;

export const routes = createBrowserRouter([
  {
    element: <App />,

    children: [...regularRoutes, { path: "*", element: <NotFound /> }],
  },
]);
