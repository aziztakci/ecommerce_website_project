import { useQuery } from '@tanstack/react-query';
import { getProductData } from '../services/productService';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export const useProductData = () => { 
    const { lang } = useContext(GlobalContext);

    return useQuery({
        queryKey: ['details', lang], 
        queryFn: getProductData,
        select: (data) => data[lang], 
    });
};