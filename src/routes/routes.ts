import { Home, Search } from 'lucide-react';
import type { RouteType } from '../types/route';
import { lazy } from 'react';

export const routes: RouteType[] = [
  {
    path: '/',
    component: lazy(() => import('../pages/Home')),
    meta: {
      label: 'Home',
      icon: Home,
      showInMenu: true,
    },
  },
  {
    path: '/search',
    component: lazy(() => import('../pages/Search')),
    meta: {
      label: 'Buscar',
      icon: Search,
      showInMenu: true,
    },
  },
];
