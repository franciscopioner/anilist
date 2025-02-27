import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from '@context/ThemeContext';
import { AnimeProvider } from '@context/AnimeContext';
import { FavoritesProvider } from "@context/FavoritesContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AnimeProvider>
        <FavoritesProvider>
        <App />
        </FavoritesProvider>
      </AnimeProvider>
    </ThemeProvider>
  </StrictMode>,
);
