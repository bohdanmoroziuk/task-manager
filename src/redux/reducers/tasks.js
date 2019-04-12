import ACTION_TYPES from '../actions/types';
import { makeReducer } from './reducer';

const initialState = [];

const handlers = {
    [ACTION_TYPES.ADD_TASK](state, action) {
        return [
            action.payload.task,
            ...state
        ];
    },
    [ACTION_TYPES.EDIT_TASK](state, action) {
        return state.map(task => {
            return task.id === action.payload.id
                ? { ...task, ...action.payload.task }
                : task;
        });
    },
    [ACTION_TYPES.REMOVE_TASK](state, action) {
        return state.filter(task => task.id !== action.payload.id);
    },
    [ACTION_TYPES.COMPLETE_TASK](state, action) {
        return state.map(task => {
            return task.id === action.payload.id
                ? { ...task, completed: true }
                : task;
        });
    }
};

export const tasksReducer = makeReducer(
    handlers,
    initialState
);