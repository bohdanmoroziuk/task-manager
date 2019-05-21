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
    render: props => <Home {...props} />
  },
  {
    path: '/add-task',
    render: props => <AddTask {...props} />
  },
  {
    path: '/task-list',
    render: props => <VisibleTaskList {...props} />
  },
  {
    path: '/task/:id',
    render: props => <TaskCard {...props} />
  },
  {
    path: '*',
    render: props => <NotFound {...props} />
  }
];

export default routes;
