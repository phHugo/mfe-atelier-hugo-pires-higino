
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

// Initialisation de React 18 avec createRoot
const container = document.getElementById('root');
const root = createRoot(container);

// Rendu de l'application
root.render(<App />); 