import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {spotifyReducer} from './reducers';

export default createStore(
    spotifyReducer,
    applyMiddleware(thunk)
);
