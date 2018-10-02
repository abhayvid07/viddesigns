'use-strict';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import Reducer from '../Reducer/Reducer.js';

const loggerMiddleware = createLogger();
const Store = createStore(Reducer,
 applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

Store.subscribe(() => {
	console.log('StateChanged ' + Store.getState());  
});

export default Store;