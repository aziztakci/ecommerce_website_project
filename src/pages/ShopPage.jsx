import React, { useState } from 'react';
import { useShopData } from '../hooks/useShopData'; 
import InfoTop from '../components/shopPage/InfoTop';
import CategoriesShopPage from '../components/shopPage/CategoriesShopPage';
import Toolbar from '../components/shopPage/Toolbar';
import Products from '../components/shopPage/Products';
import BrandLogos from '../components/homePage/BrandLogos';
import PageNumButons from '../components/shopPage/PageNumButons';


function ShopPage() {
  const [activePage, setActivePage] = useState(1);
  const { data, isLoading, error } = useShopData(activePage); 

  if (isLoading) return <div className="py-20 text-center text-2xl text-primary font-bold">Yükleniyor...</div>;
  if (error) return <div>Bir hata oluştu: {error.message}</div>;

  const itemsPerPage = 12;
  const startIndex = (activePage - 1) * itemsPerPage;
  const paginatedProducts = data.products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section>
      <InfoTop data={data}/>
      <CategoriesShopPage/>
      <Toolbar data={data}/>
      <Products data={paginatedProducts} />
      <BrandLogos />
      <PageNumButons activePage={activePage} setActivePage={setActivePage} />
    </section>
  );
}

export default ShopPage;