import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';

const mount = () => {
  const container = document.getElementById('root');
  if (!container) {
    console.error('Container #root not found');
    return;
  }
  const root = createRoot(container);
  root.render(<Header />);
};

mount();

export { mount };