import axios from 'axios';

const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';

export const fetchArtists = async (query: string, token: string) => {
  const response = await axios.get(`${SPOTIFY_BASE_URL}/search`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      q: query,
      type: 'artist',
    },
  });

  return response.data.artists.items;
};