// @ts-nocheck
import { createStore, applyMiddleware } from 'redux';
import {persistStore ,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./state/reducers/rootReducer"

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: [], // place to select which state you want to persist
  
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware()))
let persistor = persistStore(store)

export {store, persistor}