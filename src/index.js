import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import markdownReducer from './features/markdown';

const store = configureStore({
  reducer: {
    markdown: markdownReducer
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


