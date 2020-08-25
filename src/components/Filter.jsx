// @ts-check

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const filters = [['all', 'All Tasks'], ['active', 'Active Tasks'], ['finished', 'Finished Tasks']];

// BEGIN (write your solution here)
const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks,
  };
  return props;
};

const actionCreators = {
  setTasksFilter: actions.setTasksFilter,
};

class Filter extends React.Component {
  handleBtnClick = (btn) => (e) => {
    e.preventDefault();
    const { setTasksFilter } = this.props;
    setTasksFilter({ filterName: btn });
  }

  renderButtons = (btn) => {
    if (btn === 'active') {
      return (
        <>
          <button type="button" className="btn btn-link border-0 p-0" data-test="task-filter-all" onClick={this.handleBtnClick('all')}>All Tasks</button>
          {filters.filter((e) => e[0] === btn).map((e) => e[1])}
          <button type="button" className="btn btn-link border-0 p-0" data-test="task-filter-finished" onClick={this.handleBtnClick('finished')}>Finished Tasks</button>
        </>
      );
    }
    if (btn === 'finished') {
      return (
        <>
          <button type="button" className="btn btn-link border-0 p-0" data-test="task-filter-all" onClick={this.handleBtnClick('all')}>All Tasks</button>
          <button type="button" className="btn btn-link border-0 p-0" data-test="task-filter-active" onClick={this.handleBtnClick('active')}>Active Tasks</button>
          {filters.filter((e) => e[0] === btn).map((e) => e[1])}
        </>
      );
    }
    return (
      <>
        {filters.filter((e) => e[0] === btn).map((e) => e[1])}
        <button type="button" className="btn btn-link border-0 p-0" data-test="task-filter-active" onClick={this.handleBtnClick('active')}>Active Tasks</button>
        <button type="button" className="btn btn-link border-0 p-0" data-test="task-filter-finished" onClick={this.handleBtnClick('finished')}>Finished Tasks</button>
      </>
    );
  }

  render() {
    const { tasks: { currentFilterName } } = this.props;
    return (
      <div className="mt-3 d-flex justify-content-around">
        {this.renderButtons(currentFilterName)}
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Filter);
// END
