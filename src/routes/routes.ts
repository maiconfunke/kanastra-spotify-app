import { Home, Search, User } from "lucide-react";
import type { RouteProps } from "../types";
import { lazy } from "react";

export const routes: RouteProps[] = [
  {
    path: "/",
    component: lazy(() => import("../pages/Home")),
    meta: {
      label: "Home",
      icon: Home,
      showInMenu: true,
    },
  },
  {
    path: "/search",
    component: lazy(() => import("../pages/Search")),
    meta: {
      label: "Buscar",
      icon: Search,
      showInMenu: true,
    },
  },
  {
    path: "/callback",
    component: lazy(() => import("../pages/SpotifyCallback.tsx")),
    meta: {
      showInMenu: false,
    },
  },
  {
    path: "/profile",
    component: lazy(() => import("../pages/Profile")),
    meta: {
      label: "Profile",
      icon: User,
      showInMenu: true,
    },
  }
];
