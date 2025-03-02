import axios from '@artchew/util-axios';
import { useQuery } from '@tanstack/react-query';
import { Student } from './Student.type';

export const useStudents = () => {
  return useQuery({
    queryKey: ['students'],
    queryFn: () => {
      return axios.get('/students');
    },
    select: (res) => {
      return res.data as Student[];
    },
  });
};

export default useStudents;
