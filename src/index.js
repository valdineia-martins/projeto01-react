import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {Home} from './templates/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

