import type { ComponentType } from 'react';

export type RouteType = {
  path: string;
  component: ComponentType;
  meta: {
    label: string;
    icon: ComponentType<{ className?: string }>;
    showInMenu: boolean;
  };
};
