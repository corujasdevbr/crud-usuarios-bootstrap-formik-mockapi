import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import CrudUsers from './pages/crud-usuarios';

ReactDOM.render(
  <React.StrictMode>
    <CrudUsers />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
