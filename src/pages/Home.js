import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="card">
    <h5 className="card-header">Actions</h5>
    <div className="card-body">
      <Link className="btn btn-dark" to="/add-task">
        Add New Task
      </Link>
      <Link className="btn btn-dark ml-2" to="/task-list">
        View Task List
      </Link>
    </div>
  </div>
);

export default Home;
