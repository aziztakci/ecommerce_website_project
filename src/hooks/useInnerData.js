import { useQuery } from '@tanstack/react-query';
import { getInnerData } from '../services/innerService';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export const useInnerData = () => {
  const { lang } = useContext(GlobalContext);

  return useQuery({
    queryKey: ['innerData', lang], 
    queryFn: getInnerData,
    select: (data) => data[lang],
  });
};