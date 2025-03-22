import axios from '@artchew/util-axios';
import { useMutation } from '@tanstack/react-query';

export const useAuthStudent = () => {
  return useMutation({
    mutationFn: (formData: any) => {
      return axios.post('/students/login', formData);
    },
  });
};

export default useAuthStudent;
