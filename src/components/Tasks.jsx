// @ts-check

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { filteredTasksSelector } from '../selectors/index.js';

// BEGIN (write your solution here)
const mapStateToProps = (state) => {
  const props = {
    tasks: filteredTasksSelector(state),
  };
  return props;
};
// END

const actionCreators = {
  removeTask: actions.removeTask,
  toggleTaskState: actions.toggleTaskState,
};

class Tasks extends React.Component {
  handleRemoveTask = (id) => () => {
    const { removeTask } = this.props;
    removeTask({ id });
  };

  handleToggleTaskState = (id) => () => {
    const { toggleTaskState } = this.props;
    toggleTaskState({ id });
  };

  renderTasks() {
    const { tasks } = this.props;
    return (
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map(({ id, text, state }) => (
            <>
              {state === 'active' ? <li key={id} className="list-group-item list-group-item-primary d-flex mx-auto mt-2">
                <span className="mr-auto">
                  <button type="button" data-test="task-toggle-state" className="btn" onClick={this.handleToggleTaskState(id)}>
                  {`Номер задачи: ${id}. Наименование: ${text}`}
                  </button>
                </span>
                <button type="button" data-test="task-remove" className="close" onClick={this.handleRemoveTask(id)}>
                  <span>&times;</span>
                </button>
              </li> :
                <li key={id} className="list-group-item list-group-item-success d-flex mx-auto mt-2">
                  <span className="mr-auto">
                    <button type="button" data-test="task-toggle-state" className="btn" onClick={this.handleToggleTaskState(id)}>
                    {`Номер задачи: ${id}. Наименование: ${text}`}
                    </button>
                  </span>
                  <button type="button" data-test="task-remove" className="close" onClick={this.handleRemoveTask(id)}>
                    <span>&times;</span>
                  </button>
                </li>}
            </>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { tasks } = this.props;

    if (tasks.length === 0) {
      return null;
    }

    return (
      <div className="mt-3">
        {this.renderTasks()}
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Tasks);
