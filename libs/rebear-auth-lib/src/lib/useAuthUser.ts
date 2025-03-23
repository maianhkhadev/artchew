import { jwtDecode } from 'jwt-decode';
import { useAuthStore } from './useAuthStore';

export const useAuthUser = () => {
  const token = useAuthStore((state) => state.token);

  if (token) {
    const authUser = jwtDecode(token);
    console.log(authUser);
    return authUser;
  }

  return null;
};

export default useAuthUser;
