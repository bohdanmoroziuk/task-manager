import { createSelector } from 'reselect';

import { VISIBILITY_FILTERS } from '../constants';

export const selectTasks = state => 
    state.tasks;

export const selectTaskById = (state, props) => 
    selectTasks(state).find(task => task.id === props.id);

export const selectVisibilityFilter = state => 
    state.visibilityFilter;

export const selectKeyword = state =>
    state.keyword;

export const selectVisibleTasks = createSelector(
    [ selectTasks, selectVisibilityFilter ],
    (tasks, filter) => {
        switch (filter) {
            case VISIBILITY_FILTERS.ALL:
                return tasks;
            case VISIBILITY_FILTERS.ACTIVE:
                return tasks.filter(task => !task.completed);
            case VISIBILITY_FILTERS.COMPLETED:
                return tasks.filter(task => task.completed);
            default:
                return tasks;
        }
    }
);

export const selectVisibleTasksByKeyword = createSelector(
    [ selectVisibleTasks, selectKeyword ],
    (tasks, keyword) => tasks.filter(task => task.name.includes(keyword))
);