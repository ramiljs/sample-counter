import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store/index';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)