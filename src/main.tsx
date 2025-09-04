import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SpotifyProvider } from './context/SpotifyContext.tsx';
import { getAccessTokenPublicApi } from './auth/public-api-token.ts';
import './index.css';
import App from './App.tsx';
import './i18n';

const queryClient = new QueryClient();
const token = await getAccessTokenPublicApi();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

      <SpotifyProvider token={token}>
        <App />
      </SpotifyProvider>

    </QueryClientProvider>
  </StrictMode>,
)
