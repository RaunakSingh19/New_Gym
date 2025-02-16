import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import { Provider } from 'react-redux';
// import store from './redux/store.js';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>
  // document.getElementById("root")
);
