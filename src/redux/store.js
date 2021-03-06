import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import {authReducer} from './auth';
import contactsReducer from '../redux/contacts/contacts-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }),
  logger
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development'
});

const persistor = persistStore(store);

export const Store = {store, persistor};
