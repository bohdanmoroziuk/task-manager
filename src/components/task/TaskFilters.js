import React from 'react';

import { VISIBILITY_FILTERS } from '../../constants';

import FilterButton from '../../containers/FilterButton';

const TaskFilters = () => (
  <div className="btn-group mt-5" role="group" aria-label="Basic example">
    <FilterButton filter={VISIBILITY_FILTERS.ALL}>All</FilterButton>
    <FilterButton filter={VISIBILITY_FILTERS.ACTIVE}>Active</FilterButton>
    <FilterButton filter={VISIBILITY_FILTERS.COMPLETED}>Completed</FilterButton>
  </div>
);

export default TaskFilters;
