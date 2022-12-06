import React from 'react';
import {
  Navigate,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './theme';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
// import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DashboardDetails from './pages/DashboardDetails';
// console.log(theme);

const DefaultLayout = () => (
  <>
    <Navbar />
    <Breadcrumbs />
    <Outlet />
    <Footer />
  </>
);

export const routes = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/:id',
        element: <DashboardDetails />,
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
