import React, { createContext, useContext } from 'react';

interface SpotifyContextProps {
  token: string;
}

const SpotifyContext = createContext<SpotifyContextProps | undefined>(undefined);

export const SpotifyProvider = ({ children, token }: { children: React.ReactNode; token: string }) => {
  return (
    <SpotifyContext.Provider value={{ token }}>
      {children}
    </SpotifyContext.Provider>
  );
};

export const useSpotify = () => {
  const context = useContext(SpotifyContext);
  if (!context) {
    throw new Error('useSpotify must be used within a SpotifyProvider');
  }
  return context;
};