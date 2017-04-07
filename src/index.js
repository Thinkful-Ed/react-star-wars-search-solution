import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ArtistSearch from './components/artist-search';
import store from './store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <ArtistSearch username="Thinkful" />
    </Provider>,
    document.getElementById('root')
);
