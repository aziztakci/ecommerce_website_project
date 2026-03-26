import React from 'react';
import { useShopData } from '../hooks/useShopData'; 

function ShopPage() {
  const { data, isLoading, error } = useShopData(); 

  if (isLoading) return <div className="py-20 text-center text-2xl text-primary font-bold">Yükleniyor...</div>;
  if (error) return <div>Bir hata oluştu: {error.message}</div>;

  return (
    <section>
      <h2 className="py-20 text-center text-2xl text-primary font-bold">{data.header.title}</h2>
    </section>
  );
}

export default ShopPage;