import {search} from './star-wars';

export const SEARCH_CHARACTERS_REQUEST = 'SEARCH_CHARACTERS_REQUEST';
export const searchCharactersRequest = () => ({
    type: SEARCH_CHARACTERS_REQUEST
});

export const SEARCH_CHARACTERS_SUCCESS = 'SEARCH_CHARACTERS_SUCCESS';
export const searchCharactersSuccess = characters => ({
    type: SEARCH_CHARACTERS_SUCCESS,
    characters
});

export const SEARCH_CHARACTERS_ERROR = 'SEARCH_CHARACTERS_ERROR';
export const searchCharactersError = error => ({
    type: SEARCH_CHARACTERS_ERROR,
    error
});

export const searchCharacters = name => dispatch => {
    dispatch(searchCharactersRequest());
    search(name)
        .then(characters => dispatch(searchCharactersSuccess(characters)))
        .catch(error => dispatch(searchCharactersError(error)));
};

