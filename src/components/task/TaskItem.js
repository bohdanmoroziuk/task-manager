import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, handleComplete, handleRemove }) => (
  <tr>
    <td>
      <Link className="link" to={`/task/${task.id}`}>
        {task.id}
      </Link>
    </td>
    <td>{task.name}</td>
    <td>{task.deadline}</td>
    <td>{task.comment}</td>
    <td>{task.completed ? 'Completed' : 'In Process'}</td>
    <td>
      <Link className="btn btn-dark" to={`/task/${task.id}`}>
        Edit
      </Link>
      <button
        className="btn btn-dark ml-2"
        disabled={task.completed}
        onClick={handleComplete}
      >
        Complete
      </button>
      <button className="btn btn-dark ml-2" onClick={handleRemove}>
        Remove
      </button>
    </td>
  </tr>
);

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default TaskItem;
