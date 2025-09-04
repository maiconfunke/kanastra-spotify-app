import { routes } from '../../routes/routes';
import MenuButton from '../ui/MenuButton';

export default function Menu() {

  const menuItems = routes
  .filter(route => route.meta?.showInMenu)
  .map(({ path, meta }) => ({
    path,
    label: meta.label,
    icon: meta.icon,
  }));

  return (
    <div className='bg-black text-white h-full w-full px-6 flex flex-row lg:flex-col gap-y-8 pt-10 font-bold'>
      {menuItems.map(({ label, path, icon }) => (
        <MenuButton key={path} path={path} label={label} icon={icon} />
      ))}
    </div>
  );
}