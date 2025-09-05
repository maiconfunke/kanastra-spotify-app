import type { ComponentType } from 'react';

export interface MenuButton {
  path: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
};