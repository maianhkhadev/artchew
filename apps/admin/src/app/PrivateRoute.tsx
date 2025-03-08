import { Navigate, Outlet } from 'react-router';

const token = sessionStorage.getItem('token');

export function PrivateRoute() {
  if (!token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default PrivateRoute;
