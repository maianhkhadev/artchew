import axios from '@artchew/util-axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return axios.post('/students');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });
};

export default useCreateStudent;
