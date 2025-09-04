import { Link } from 'react-router-dom';
import { routes } from '../routes/routes';

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
      {menuItems.map(({ label, path, icon: Icon }) => (
        <Link
          to={path}
          className='flex items-center space-x-4 text-white hover:text-green-400 cursor-pointer'
        >
          <Icon className='w-7 h-7' />
          <span className='text-sm'>{label}</span>
        </Link>
      ))}
    </div>
  );
}