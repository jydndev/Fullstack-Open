// polyfill
import PromisePolyfill from 'promise-polyfill';

if (!window.Promise) {
  window.Promise = PromisePolyfill;
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';

// fix async/await bundling error
import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
