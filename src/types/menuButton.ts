import type { ComponentType } from 'react';

export type MenuButtonProps = {
  path: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
};