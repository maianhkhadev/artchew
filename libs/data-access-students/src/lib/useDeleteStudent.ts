import axios from '@artchew/util-axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteStudent = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return axios.delete(`/students/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      queryClient.invalidateQueries({ queryKey: ['student', id] });
    },
  });
};

export default useDeleteStudent;
