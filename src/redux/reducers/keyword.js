import ACTION_TYPES from '../actions/types';
import { makeReducer } from './reducer';

const initialState = '';

const handlers = {
    [ACTION_TYPES.SET_KEYWORD](state, action) {
        return action.payload.keyword
    }
};

export const keywordReducer = makeReducer(
    handlers,
    initialState
);