import {
    SEARCH_ARTISTS_REQUEST,
    SEARCH_ARTISTS_SUCCESS,
    SEARCH_ARTISTS_ERROR
} from './actions';

const initialState = {
    artists: [],
    loading: false,
    error: null
};

export function spotifyReducer(state=initialState, action) {
    if (action.type === SEARCH_ARTISTS_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === SEARCH_ARTISTS_SUCCESS) {
        return Object.assign({}, state, {
            artists: action.artists,
            loading: false,
            error: null
        });
    }
    else if (action.type === SEARCH_ARTISTS_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}
