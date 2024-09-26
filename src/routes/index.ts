import { lazy } from 'react';
const MySpace = lazy(() => import('../pages/my-space/MySpace'));
const NewVM = lazy(() => import('../pages/new-vm/NewVM'));
const coreRoutes = [
  {
    path: '/console/my-space',
    title: 'My Space',
    component: MySpace,
  },
  {
    path: '/console/new-vm',
    title: 'New VM',
    component: NewVM,
  },
 
  ];

const routes = [...coreRoutes];
export default routes;
