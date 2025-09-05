import { useQuery } from "@tanstack/react-query";
import { useSpotify } from "../context/SpotifyContext";
import { fetchPlaylistTracks } from "../api/playlists";


export const usePlaylistsTracks = (query: string, limit = 10) => {
  const { token } = useSpotify();

  return useQuery({
    queryKey: ['playlistTracks', query],
    queryFn: () => fetchPlaylistTracks(query, token, limit),
    enabled: !!query && !!token,
  });
};