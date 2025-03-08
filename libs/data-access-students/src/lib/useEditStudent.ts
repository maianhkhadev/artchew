import axios from '@artchew/util-axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useEditStudent = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: any) => {
      return axios.put(`/students/${id}`, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      queryClient.invalidateQueries({ queryKey: ['student', id] });
    },
  });
};

export default useEditStudent;
