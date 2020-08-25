import { createSelector } from 'reselect';

// BEGIN (write your solution here)
const getTasks = (state) => state.tasks.byId;
const currState = (state) => state.tasks.currentFilterName;

const currStateSelector = createSelector(
  currState,
  (cS) => cS,
);

const tasksSelector = createSelector(
  getTasks,
  (tasks) => Object.values(tasks).reverse(),
);

export const filteredTasksSelector = createSelector(
  tasksSelector,
  currStateSelector,
  (tasks, currFilter) => {
    if (currFilter === 'all') {
      return tasks;
    }
    return tasks.filter((task) => task.state === currFilter);
  },
);

// END
