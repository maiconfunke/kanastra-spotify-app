import { useEffect, useState } from 'react';
import logoDesktop from '../../assets/images/spotify-logo-desktop.svg';
import logoMobile from '../../assets/images/spotify-logo-mobile.svg';
import { useDebounce } from 'use-debounce';
import { startLogin } from '../../auth/spotify';

export default function Header() {

    const [inputValue, setInputValue] = useState('');
    const [debouncedValue] = useDebounce(inputValue, 500);

    useEffect(() => {
        if (debouncedValue.trim()) {
            console.log('Texto buscado:', debouncedValue);
        }
    }, [debouncedValue]);



    return (
        <header className='fixed top-0 w-full bg-black text-white px-6 py-4 flex items-center justify-between border-b border-neutral-700 gap-x-2'>
            <div className='flex items-center flex-shrink-0'>
                <img src={logoMobile} alt='Spotify Logo' className='absolute  top-4 left-6 inset-0 h-10 w-10 transition-opacity duration-500 ease-in-out lg:opacity-0' />
                <img src={logoDesktop} alt='Spotify Logo' className='absolute   top-4 left-6 inset-0 transition-opacity duration-500 ease-in-out opacity-0 lg:opacity-100' />
            </div>

            <div className='flex-grow px-6 flex justify-center ml-10'>
                <input
                    type='text'
                    placeholder='O que você quer ouvir?'
                    onChange={(e) => setInputValue(e.target.value)}
                    className='w-full max-w-md md:max-w-lg lg:max-w-lg rounded-full px-4 py-2 bg-neutral-800 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white'
                />
            </div>

            <div>
                <button onClick={() => startLogin()} className='bg-white hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-full'>
                    Login
                </button>
            </div>
        </header>
    );
}
