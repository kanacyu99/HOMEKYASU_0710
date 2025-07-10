import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>ほめキャスへようこそ！</h1>
      <p>がんばったあなたを応援するアプリです 🌟</p>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
