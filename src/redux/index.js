import {createStore, compose, combineReducers} from 'redux';

import todo from './modules/todo';

// combine reducer
const reducer = combineReducers({todo});

export default createStore(
    reducer,
    compose(window.devToolsExtension ? window.devToolsExtension() : f => f));
