import { useQuery } from '@tanstack/react-query';
import { getHomeData } from '../services/homeService';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export const useHomeData = () => {
  const { lang } = useContext(GlobalContext);

  return useQuery({
    queryKey: ['homeData', lang], 
    queryFn: getHomeData,
    select: (data) => data[lang],
  });
};