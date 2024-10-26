import Dashboard from './Dashboard/Dashboard';
import Analysis from './Analysis/Analysis';
import Login from './Login/Login';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute element={<Dashboard />} />, // Use JSX syntax
  },
  {
    path: '/analysis',
    element: <ProtectedRoute element={<Analysis />} />, // Use JSX syntax
  },
  {
    path: '/login',
    element: <Login />, // Use JSX syntax
  },
]);

export default routes;
