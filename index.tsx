
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { applyLocale, detectLocale } from './hooks/useLocale';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
// Arabic-only subsets: browsers fetch them only when Arabic text is on screen
import '@fontsource/ibm-plex-sans-arabic/arabic-400.css';
import '@fontsource/ibm-plex-sans-arabic/arabic-500.css';
import '@fontsource/ibm-plex-sans-arabic/arabic-600.css';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Set lang/dir before the first render so Arabic visitors never see a left-to-right flash
applyLocale(detectLocale());

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
