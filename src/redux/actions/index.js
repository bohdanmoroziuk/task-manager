import ACTION_TYPES from './types';
import { makeActionCreator } from './action';

export const addTask = makeActionCreator(ACTION_TYPES.ADD_TASK);

export const editTask = makeActionCreator(ACTION_TYPES.EDIT_TASK);

export const removeTask = makeActionCreator(ACTION_TYPES.REMOVE_TASK);

export const completeTask = makeActionCreator(ACTION_TYPES.COMPLETE_TASK);

export const setKeyword = makeActionCreator(ACTION_TYPES.SET_KEYWORD);

export const setVisibilityFilter = makeActionCreator(ACTION_TYPES.SET_VISIBILITY_FILTER);