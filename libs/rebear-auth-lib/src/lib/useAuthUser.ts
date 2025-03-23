import { jwtDecode } from 'jwt-decode';
import { useAuthStore } from './useAuthStore';

export const useAuthUser = () => {
  const token = useAuthStore((state) => state.token);

  if (token) {
    const authUser: any = jwtDecode(token);
    return {
      email: authUser.email,
      courseId: authUser.courseId
    }
  }

  return null;
};

export default useAuthUser;
