import { FC, lazy } from "react";
import { Paths } from "./paths";

export type RouteObject = {
    element: FC;
    path: string;
    name: string;
    isPrivate: boolean;
  };

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About"));
  
  const routeObjectGenerator = (element: FC, path: string, name: string, isPrivate: boolean): RouteObject => {
    return {
      element,
      path,
      name,
      isPrivate,
    };
  };

  export const routes: RouteObject[] = [
    routeObjectGenerator(Home, Paths.HOME, "Home", true),
    routeObjectGenerator(About, "/about", "About", false),
  ]