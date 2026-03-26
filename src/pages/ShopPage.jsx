import React from 'react';
import { useShopData } from '../hooks/useShopData'; 
import InfoTop from '../components/InfoTop';
import CategoriesShopPage from '../components/CategoriesShopPage';
import Toolbar from '../components/Toolbar';
import Products from '../components/Products';

function ShopPage() {
  const { data, isLoading, error } = useShopData(); 

  if (isLoading) return <div className="py-20 text-center text-2xl text-primary font-bold">Yükleniyor...</div>;
  if (error) return <div>Bir hata oluştu: {error.message}</div>;

  return (
    <section>
      <InfoTop data={data}/>
      <CategoriesShopPage data={data}/>
      <Toolbar data={data}/>
      <Products data={data} />
    </section>
  );
}

export default ShopPage;