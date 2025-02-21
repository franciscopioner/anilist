import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from '@context/ThemeContext';
import { AnimeProvider } from '@context/AnimeContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AnimeProvider>
        <App />
      </AnimeProvider>
    </ThemeProvider>
  </StrictMode>,
);
