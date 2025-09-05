import axios from 'axios';

const SPOTIFY_API_BASE_URL = import.meta.env.VITE_SPOTIFY_API_BASE_URL as string;

export const fetchArtists = async (query: string, token: string, limit: number) => {
  const response = await axios.get(`${SPOTIFY_API_BASE_URL}/search`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      q: query,
      type: 'artist',
      limit: limit
    },
  });

  return response.data.artists.items;
};