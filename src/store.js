import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {characterReducer} from './reducers';

export default createStore(
    characterReducer,
    applyMiddleware(thunk)
);
