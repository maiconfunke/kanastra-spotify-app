import type { ComponentType } from 'react';

export type RouteProps = {
  path: string;
  component: ComponentType;
  meta: {
    label: string;
    icon: ComponentType<{ className?: string }>;
    showInMenu: boolean;
  };
};
