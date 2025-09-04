import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';
import App from './App.tsx';


import './i18n';
import { SpotifyProvider } from './context/SpotifyContext.tsx';
import { getAccessToken } from './auth/spotify.ts';
const queryClient = new QueryClient();
const token = await getAccessToken();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

      <SpotifyProvider token={token}>
        <App />
      </SpotifyProvider>

    </QueryClientProvider>
  </StrictMode>,
)
