import axios from '@artchew/util-axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: any) => {
      return axios.post('/students', formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });
};

export default useCreateStudent;
