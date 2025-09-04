import React, { useState } from 'react';
import { useArtists } from '../hooks/useArtists';

const ArtistPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isPending, error } = useArtists(searchTerm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // A busca é disparada automaticamente pelo React Query ao mudar o queryKey
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Buscar Artistas 🎤</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Digite o nome do artista"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '0.5rem', width: '300px' }}
        />
        <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
          Buscar
        </button>
      </form>

      {isPending && <p>🔄 Carregando artistas...</p>}
      {error && <p>❌ Erro ao buscar artistas</p>}

      {data && (
        <ul>
          {data.map((artist: any) => (
            <li key={artist.id}>
              <strong>{artist.name}</strong> — Popularidade: {artist.popularity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArtistPage;