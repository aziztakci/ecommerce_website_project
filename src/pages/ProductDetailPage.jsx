import React from 'react'
import { useProductData } from "../hooks/useProductData.js";
import InfoTop from '../components/shopPage/InfoTop.jsx';
import ProductDetail from '../components/productDetail/ProductDetail.jsx';

function ProductDetailPage() {

  const { data, isLoading, error } = useProductData();
  if (isLoading) return <div className="py-20 text-center text-2xl text-primary font-bold">Yükleniyor...</div>;
  if (error) return <div>Hata: {error.message}</div>;

  return (
    <div>
      <InfoTop data={data}/>
      <ProductDetail data={data.product} />
    </div>
  )
}

export default ProductDetailPage
