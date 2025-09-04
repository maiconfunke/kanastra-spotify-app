import { useQuery } from '@tanstack/react-query';
import { useSpotify } from '../context/SpotifyContext';
import { fetchArtists } from '../api/artist';

export const useArtists = (query: string) => {
  const { token } = useSpotify();

  return useQuery({
    queryKey: ['artists', query],
    queryFn: () => fetchArtists(query, token),
    enabled: !!query && !!token,
  });
};
