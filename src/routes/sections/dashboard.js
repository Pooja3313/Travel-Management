import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// auth
import { AuthGuard } from 'src/auth/guard';
// layouts
import DashboardLayout from 'src/layouts/dashboard';
// components
import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

// USER
// const UserProfilePage = lazy(() => import('src/pages/dashboard/user/profile'));
// const UserCardsPage = lazy(() => import('src/pages/dashboard/user/cards'));
// const EmployeeListPage = lazy(() => import('src/pages/dashboard/employee/list'));
// const UserAccountPage = lazy(() => import('src/pages/dashboard/user/account'));
// const EmployeeCreatePage = lazy(() => import('src/pages/dashboard/employee/new'));
// const EmployeeEditPage = lazy(() => import('src/pages/dashboard/employee/edit'));

// ----------------------------------------------------------------------
const IndexPage = lazy(() => import('src/pages/dashboard/one'));
const PageTwo = lazy(() => import('src/pages/dashboard/two'));


const PageThree = lazy(() => import('src/pages/dashboard/three'));
const PageFour = lazy(() => import('src/pages/dashboard/four'));
const PageFive = lazy(() => import('src/pages/dashboard/five'));
const PageSix = lazy(() => import('src/pages/dashboard/six'));
const PageSeven = lazy(() => import('src/pages/dashboard/seven'));
const PageEight = lazy(() => import('src/pages/dashboard/eight'));
const PageNine = lazy(() => import('src/pages/dashboard/nine'));

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),

    children: [
      { element: <IndexPage />, index: true },
      { path: 'two', element: <PageTwo /> },
      { path: 'three', element: <PageThree /> },

      {
        path: 'group',
        children: [
          { element: <PageFour />, index: true },
          { path: 'five', element: <PageFive /> },
        ],
      },
      {
        path: 'users',
        children: [
          { element: <PageSeven />, index: true },
          { path: 'six', element: <PageSix /> },
          { path: ':id', element: <PageEight /> },
          { path: ':id/nine', element: <PageNine /> },
        ],
      },
    ],
  },
];
