import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

let reduxMiddlewares = [];
reduxMiddlewares.push(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, {}, composeEnhancers(applyMiddleware(...reduxMiddlewares)));

export default store;
