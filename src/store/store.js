import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';

import { rootSaga } from './root-saga';


import { rootReducer } from './root-reducer';

const persistConfig = {
    // key is the root, which means cover it all
    key: 'root',

    // uses local storage by default
    storage,

    // tells the code to only persist items in the cart in by saving 
    // them in local storage
    whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware
    // thunk,
].filter(Boolean);


const composedEnhancer = 
    (process.env.NODE_ENV !== 'production' && 
        window && 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
    compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);