import { Outlet } from 'react-router';

export function PrivateRoute() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PrivateRoute;
