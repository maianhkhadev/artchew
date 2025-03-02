import axios from '@artchew/util-axios';
import { useQuery } from '@tanstack/react-query';
import { Student } from './Student.type';

export const useStudent = (id: string) => {
  return useQuery({
    queryKey: ['student', id],
    queryFn: () => {
      return axios.get(`/students/${id}`);
    },
    select: (res) => {
      return res.data as Student;
    },
  });
};

export default useStudent;
