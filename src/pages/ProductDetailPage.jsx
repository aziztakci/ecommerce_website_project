import React from 'react'
import { useProductData } from "../hooks/useProductData.js";
import InfoTop from '../components/shopPage/InfoTop.jsx';
import ProductDetail from '../components/productDetail/ProductDetail.jsx';
import ProductInfo from '../components/productDetail/ProductInfo.jsx';
import NavTab from '../components/productDetail/NavTab.jsx';
import Bestseller from '../components/homePage/Bestseller.jsx';
import BrandLogos from '../components/homePage/BrandLogos.jsx';

function ProductDetailPage() {

  const { data, isLoading, error } = useProductData();
  if (isLoading) return <div className="py-20 text-center text-2xl text-primary font-bold">Yükleniyor...</div>;
  if (error) return <div>Hata: {error.message}</div>;

  return (
    <div>
      <InfoTop data={data}/>
      <ProductDetail data={data.product} />
      <NavTab dataTabs={data.tabs} />
      <ProductInfo data={data.content} />
      <Bestseller data={data} isLoading={isLoading}/>
      <BrandLogos />
    </div>
  )
}

export default ProductDetailPage
