import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import CharacterSearch from './components/character-search';
import store from './store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <CharacterSearch />
    </Provider>,
    document.getElementById('root')
);
