import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// fix async/await bundling error
import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
