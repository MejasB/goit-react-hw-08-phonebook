import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {Store} from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
