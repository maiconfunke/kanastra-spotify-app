// src/pages/Search.tsx
import { useEffect, useState } from 'react';

interface Category {
  id: string;
  name: string;
  icons: { url: string }[];
}

export default function Search() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            btoa(
              `${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`
            ),
        },
        body: 'grant_type=client_credentials',
      });

      const { access_token } = await tokenRes.json();

      const res = await fetch(
        'https://api.spotify.com/v1/browse/categories?limit=20',
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      const data = await res.json();
      setCategories(data.categories.items);
    })();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Navegar por seções</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition cursor-pointer"
          >
            <img
              src={cat.icons[0]?.url}
              alt={cat.name}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold">{cat.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}