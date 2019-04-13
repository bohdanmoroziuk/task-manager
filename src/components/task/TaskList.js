import React, { Fragment } from 'react';

import Message from '../shared/Message';
import TaskItem from './TaskItem';
import TaskFilters from './TaskFilters';
import Search from '../../containers/Search';

const TaskList = ({ tasks = [], handleComplete, handleRemove }) => (
    <Fragment>
        <TaskFilters />
        <Search />
        {tasks.length === 0 ? (
            <Message 
                type="info"
                message="Task list is empty"
            />
        ) : (
            <div className="table-responsive mt-5">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Deadline</th>
                            <th>Comment</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <TaskItem 
                                key={task.id} 
                                task={task}  
                                handleComplete={() => handleComplete(task.id)}
                                handleRemove={() => handleRemove(task.id)}    
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        )}
    </Fragment>
);

export default TaskList;