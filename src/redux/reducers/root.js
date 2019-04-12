import { combineReducers } from 'redux';
import { tasksReducer } from './tasks';
import { keywordReducer } from './keyword';
import { visibilityFilterReducer } from './visibilityFilter';

export const rootReducer = combineReducers({
    tasks: tasksReducer,
    keyword: keywordReducer,
    visibilityFilter: visibilityFilterReducer
});