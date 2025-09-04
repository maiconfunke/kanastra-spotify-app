import { Link } from 'react-router-dom';
import type { MenuButtonProps } from '../../types/menuButton';

export default function MenuButton({ path, label, icon: Icon }: MenuButtonProps) {
    return (
        <Link
            to={path}
            className='flex items-center space-x-4 text-white hover:text-green-400 cursor-pointer'
        >
            <Icon className='w-7 h-7' />
            <span className='text-sm'>{label}</span>
        </Link>
    );
}
