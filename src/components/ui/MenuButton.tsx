import { Link } from 'react-router-dom';
import type { ComponentType } from 'react';

type MenuButtonProps = {
  path: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
};

export default function MenuButton({ path, label, icon: Icon }: MenuButtonProps) {
  return (
    <Link
      to={path}
      className="flex items-center space-x-4 text-white hover:text-green-400 cursor-pointer transition-colors"
    >
      <Icon className="w-6 h-6" />
      <span className="text-sm font-bold">{label}</span>
    </Link>
  );
}
