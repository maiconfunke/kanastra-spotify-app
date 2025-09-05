import axios from 'axios';

const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';

export const fetchArtists = async (query: string, token: string, limit: number) => {
  const response = await axios.get(`${SPOTIFY_BASE_URL}/search`, {
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

export const fetchTrendingMusics = async (query: string, token: string, limit: number) => {
  const response = await axios.get(`${SPOTIFY_BASE_URL}/playlists/${query}/tracks`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    params: {
      limit: limit
    },
  });

  return response.data.items.map(item => ({
    name: item.track.name,
    artist: item.track.artists.map(a => a.name).join(', '),
    preview: item.track.album.images[0]?.url,
  }));
};



// import axios from 'axios';

// const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';

// export const fetchArtists = async (
//   query: string,
//   token: string,
//   page: number = 1,
//   limit: number = 20
// ) => {
//   const offset = (page - 1) * limit;

//   const response = await axios.get(`${SPOTIFY_BASE_URL}/search`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     params: {
//       q: query,
//       type: 'artist',
//       limit,
//       offset,
//     },
//   });

//   return {
//     items: response.data.artists.items,
//     total: response.data.artists.total,
//     next: response.data.artists.next,
//     previous: response.data.artists.previous,
//     page,
//     limit,
//   };
// };