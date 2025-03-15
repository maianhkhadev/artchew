import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute() {
  const token = sessionStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default PrivateRoute;
