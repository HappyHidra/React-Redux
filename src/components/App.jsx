// @ts-check

import React from 'react';
import NewTaskForm from './NewTaskForm.jsx';
import Tasks from './Tasks.jsx';
import Filter from './Filter.jsx';
import '../styles/style.css';
const App = () => (
  <div className="col-5">
    <NewTaskForm />
    <Filter />
    <Tasks />
  </div>
);
export default App;
