import { useQuery } from '@tanstack/react-query';
import { getShopData } from '../services/shopService';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export const useShopData = () => { 
    const { lang } = useContext(GlobalContext);

    return useQuery({
        queryKey: ['products', lang], 
        queryFn: getShopData,
        select: (data) => data[lang], 
    });
};