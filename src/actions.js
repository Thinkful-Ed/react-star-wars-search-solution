import {search} from './spotify';

export const SEARCH_ARTISTS_REQUEST = 'SEARCH_ARTISTS_REQUEST';
export const searchArtistsRequest = () => ({
    type: SEARCH_ARTISTS_REQUEST
});

export const SEARCH_ARTISTS_SUCCESS = 'SEARCH_ARTISTS_SUCCESS';
export const searchArtistsSuccess = artists => ({
    type: SEARCH_ARTISTS_SUCCESS,
    artists
});

export const SEARCH_ARTISTS_ERROR = 'SEARCH_ARTISTS_ERROR';
export const searchArtistsError = error => ({
    type: SEARCH_ARTISTS_ERROR,
    error
});

export const searchArtists = artist => dispatch => {
    dispatch(searchArtistsRequest());
    search(artist)
        .then(artists => dispatch(searchArtistsSuccess(artists)))
        .catch(error => dispatch(searchArtistsError(error)));
};

