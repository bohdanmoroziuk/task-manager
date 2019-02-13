import React, { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const AddTask = lazy(() => import('../pages/AddTask'));
const TaskCard = lazy(() => import('../pages/TaskCard'));
const NotFound = lazy(() => import('../pages/NotFound'));
const VisibleTaskList = lazy(() => import('../pages/VisibleTaskList'));

const routes = [
    {
        path: '/',
        exact: true,
        strict: true,
        render: props => <Home {...props} />
    }, {
        path: '/add-task',
        strict: true,
        render: props => <AddTask {...props} />
    }, {
        path: '/task-list',
        strict: true,
        render: props => <VisibleTaskList {...props} />
    }, {
        path: '/task/:id',
        strict: true,
        render: props => <TaskCard {...props} />
    }, {
        render: props => <NotFound {...props} />
    }
];

export default routes;