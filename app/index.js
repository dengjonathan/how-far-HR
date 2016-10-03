import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/App.jsx';
import store from './state.js';

const renderApp = () => {
  ReactDOM.render(<App store={store}/>, document.getElementById('container'));
};

//store.subscribe(renderApp);
renderApp();
