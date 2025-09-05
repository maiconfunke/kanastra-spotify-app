import axios from "axios";
import type { SpotifyPlaylistApiTrackItem, SpotifyTrack } from "../types";


const SPOTIFY_API_BASE_URL = import.meta.env.VITE_SPOTIFY_API_BASE_URL as string;

export const fetchPlaylistTracks = async (query: string, token: string, limit: number) => {
  const response = await axios.get(`${SPOTIFY_API_BASE_URL}/playlists/${query}/tracks`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    params: {
      limit: limit
    },
  });

  return response.data.items.map((item: SpotifyPlaylistApiTrackItem) => ({
    name: item.track.name,
    artist: item.track.artists.map(a => a.name).join(', '),
    preview: item.track.album.images[0]?.url,
  }) as SpotifyTrack);
};