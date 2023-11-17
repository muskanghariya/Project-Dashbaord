import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'Dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'Accounts',
      element: <DashboardDefault />
    },
    {
      path: 'Payroll',
      element: <DashboardDefault />
    },
    {
      path: 'Reports',
      element: <DashboardDefault />
    },
    {
      path: 'Advisor',
      element: <DashboardDefault />
    },
    {
      path: 'Contacts',
      element: <DashboardDefault />
    }
  ]
};

export default MainRoutes;
