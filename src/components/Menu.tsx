import { Link } from "react-router-dom";
import { menuRoutes } from '../routes/menuRoutes';

export default function Menu() {
  return (
    <div className="bg-black text-white h-full w-full px-6 flex flex-row lg:flex-col gap-y-8 pt-10 font-bold">
      {menuRoutes.map(({ label, path, icon: Icon }) => (
         <div className="flex items-center space-x-4 text-white hover:text-green-400 cursor-pointer">
        <Icon className="w-7 h-7" />
        <Link to={path} className="text-sm">{label}</Link>
      </div>
      ))}
    </div>
  );
}