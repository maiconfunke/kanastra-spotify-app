export interface SpotifyPlaylistApiTrackItem {
  track: {
    name: string;
    artists: { name: string }[];
    album: {
      images: { url: string }[];
    };
    preview_url: string | null;
  };
}