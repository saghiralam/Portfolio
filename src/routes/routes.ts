import { FC, lazy } from "react";
import { Paths } from "./paths";

const Home = lazy(() => import("../pages/Home/Home"));
export type RouteObject = {
    element: FC;
    path: string;
    name: string;
    isPrivate: boolean;
  };
  
  const routeObjectGenerator = (element: FC, path: string, name: string, isPrivate: boolean): RouteObject => {
    return {
      element,
      path,
      name,
      isPrivate,
    };
  };

  export const routes: RouteObject[] = [
    routeObjectGenerator(Home, Paths.HOME, 'Home', true),
  ]