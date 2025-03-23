
import { useAuthStore } from './useAuthStore';

export const useIsAuth = () => {
  const token = useAuthStore((state) => state.token);
  return !!token;
};

export default useIsAuth;
