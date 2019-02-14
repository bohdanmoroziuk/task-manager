import { ACTION_TYPES, VISIBILITY_FILTERS } from '../constants';
import { makeReducer } from './reducer';

const initialState = VISIBILITY_FILTERS.ALL;

const handlers = {
    [ACTION_TYPES.SET_VISIBILITY_FILTER](state, action) {
        return action.payload.filter
    }
};

export const visibilityFilterReducer = makeReducer(
    handlers,
    initialState
);