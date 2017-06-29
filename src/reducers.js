import {
    SEARCH_CHARACTERS_REQUEST,
    SEARCH_CHARACTERS_SUCCESS,
    SEARCH_CHARACTERS_ERROR
} from './actions';

const initialState = {
    characters: [],
    loading: false,
    error: null
};

export function characterReducer(state=initialState, action) {
    if (action.type === SEARCH_CHARACTERS_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === SEARCH_CHARACTERS_SUCCESS) {
        return Object.assign({}, state, {
            characters: action.characters,
            loading: false,
            error: null
        });
    }
    else if (action.type === SEARCH_CHARACTERS_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}
