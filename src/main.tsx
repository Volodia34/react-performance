import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element not found');
}
const rootElement = root as HTMLElement;
createRoot(rootElement).render(
  <StrictMode>
      <App />
  </StrictMode>,
);
