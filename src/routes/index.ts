import { lazy } from 'react';
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
const coreRoutes = [
  {
    path: '/main/dashboard',
    title: 'Dashboard',
    component: Dashboard,
  },
  ];

const routes = [...coreRoutes];
export default routes;
